import crypto from 'node:crypto';
import type { NextFunction, Request, Response } from 'express';

const DEFAULT_BIRTHDAY_SALT = 'lily_20th_world_salt_2026';
const DEFAULT_BIRTHDAY_HASH =
  '51709674cefcfa72bc582d2e310bb72fa999db9247a5a1ff80c57bb6f2690e3b982e239b50c6551c766e374456e8546eeba1aa23a64bf66292d6ee3a84fd305c';

const SESSION_COOKIE_NAME = 'lily_world_session';
const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours
const MAX_FAILED_ATTEMPTS = 5;
const COOLDOWN_MS = 45 * 1000; // 45 seconds cooldown after repeated failures

interface AttemptRecord {
  failures: number;
  cooldownUntil: number;
}

const attemptStore = new Map<string, AttemptRecord>();

// Stable fallback secret per server boot when AUTH_SECRET is not provided in local dev
const RUNTIME_FALLBACK_SECRET = crypto.randomBytes(32).toString('hex');

function getSessionSecret(): string {
  return process.env.AUTH_SECRET || RUNTIME_FALLBACK_SECRET;
}

function getBirthdaySalt(): string {
  return process.env.BIRTHDAY_DATE_SALT || DEFAULT_BIRTHDAY_SALT;
}

function getBirthdayHash(): string {
  return process.env.BIRTHDAY_DATE_HASH || DEFAULT_BIRTHDAY_HASH;
}

/**
 * Normalizes YYYY-MM-DD or DD-MM-YYYY into DD-MM-YYYY so calendar pickers
 * and manual date strings verify consistently.
 */
export function normalizeBirthdayInput(rawInput: string): string | null {
  const trimmed = rawInput.trim();
  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return `${day}-${month}-${year}`;
  }
  const dmyMatch = /^(\d{2})-(\d{2})-(\d{4})$/.exec(trimmed);
  if (dmyMatch) {
    return trimmed;
  }
  return null;
}

export function verifyBirthdayDate(rawInput: string): boolean {
  const normalized = normalizeBirthdayInput(rawInput);
  if (!normalized) {
    return false;
  }
  const derived = crypto.scryptSync(normalized, getBirthdaySalt(), 64);
  const expected = Buffer.from(getBirthdayHash(), 'hex');
  if (derived.length !== expected.length) {
    return false;
  }
  return crypto.timingSafeEqual(derived, expected);
}

export function getClientKey(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  const firstForwarded = Array.isArray(forwarded)
    ? forwarded[0]
    : typeof forwarded === 'string'
      ? forwarded.split(',')[0]
      : undefined;
  return (firstForwarded || req.ip || 'unknown-client').trim();
}

export function getCooldownRemainingSeconds(clientKey: string): number {
  const record = attemptStore.get(clientKey);
  if (!record) {
    return 0;
  }
  const now = Date.now();
  if (record.cooldownUntil > now) {
    return Math.ceil((record.cooldownUntil - now) / 1000);
  }
  if (record.cooldownUntil > 0 && record.cooldownUntil <= now) {
    attemptStore.delete(clientKey);
  }
  return 0;
}

export function recordFailedAttempt(clientKey: string): {
  cooldownSeconds: number;
  attemptsRemaining: number;
} {
  const now = Date.now();
  const existing = attemptStore.get(clientKey);
  const failures = (existing && existing.cooldownUntil <= now ? existing.failures : 0) + 1;

  if (failures >= MAX_FAILED_ATTEMPTS) {
    attemptStore.set(clientKey, {
      failures,
      cooldownUntil: now + COOLDOWN_MS,
    });
    return {
      cooldownSeconds: Math.ceil(COOLDOWN_MS / 1000),
      attemptsRemaining: 0,
    };
  }

  attemptStore.set(clientKey, {
    failures,
    cooldownUntil: 0,
  });

  return {
    cooldownSeconds: 0,
    attemptsRemaining: MAX_FAILED_ATTEMPTS - failures,
  };
}

export function clearAttempts(clientKey: string): void {
  attemptStore.delete(clientKey);
}

export function createSessionToken(): string {
  const issuedAt = Date.now();
  const expiresAt = issuedAt + SESSION_TTL_MS;
  const nonce = crypto.randomBytes(16).toString('hex');
  const payload = Buffer.from(JSON.stringify({ issuedAt, expiresAt, nonce })).toString('base64url');
  const signature = crypto
    .createHmac('sha256', getSessionSecret())
    .update(payload)
    .digest('base64url');
  return `${payload}.${signature}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) {
    return false;
  }
  const parts = token.split('.');
  if (parts.length !== 2) {
    return false;
  }
  const [payload, signature] = parts;
  if (!payload || !signature) {
    return false;
  }
  const expectedSig = crypto
    .createHmac('sha256', getSessionSecret())
    .update(payload)
    .digest('base64url');

  const sigBuf = Buffer.from(signature);
  const expectedBuf = Buffer.from(expectedSig);
  if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) {
    return false;
  }

  try {
    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as {
      expiresAt?: number;
    };
    return typeof parsed.expiresAt === 'number' && parsed.expiresAt > Date.now();
  } catch {
    return false;
  }
}

export function parseCookies(cookieHeader: string | undefined): Record<string, string> {
  const result: Record<string, string> = {};
  if (!cookieHeader) {
    return result;
  }
  for (const pair of cookieHeader.split(';')) {
    const idx = pair.indexOf('=');
    if (idx <= 0) continue;
    const key = pair.slice(0, idx).trim();
    const val = pair.slice(idx + 1).trim();
    try {
      result[key] = decodeURIComponent(val);
    } catch {
      result[key] = val;
    }
  }
  return result;
}

export function getSessionCookieFromRequest(req: Request): string | undefined {
  const cookies = parseCookies(req.headers.cookie);
  return cookies[SESSION_COOKIE_NAME];
}

export function setSessionCookie(res: Response, token: string, isSecure: boolean): void {
  res.cookie(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: isSecure,
    maxAge: SESSION_TTL_MS,
    path: '/',
  });
}

export function clearSessionCookie(res: Response, isSecure: boolean): void {
  res.clearCookie(SESSION_COOKIE_NAME, {
    httpOnly: true,
    sameSite: 'lax',
    secure: isSecure,
    path: '/',
  });
}

export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  const token = getSessionCookieFromRequest(req);
  if (!verifySessionToken(token)) {
    res.status(401).json({ error: 'Authentication required' });
    return;
  }
  next();
}
