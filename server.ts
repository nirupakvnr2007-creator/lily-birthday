import 'dotenv/config';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  clearAttempts,
  clearSessionCookie,
  createSessionToken,
  getClientKey,
  getCooldownRemainingSeconds,
  getSessionCookieFromRequest,
  recordFailedAttempt,
  requireAuth,
  setSessionCookie,
  verifyBirthdayDate,
  verifySessionToken,
} from './server/auth.ts';
import { getProtectedContent } from './server/content.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRIVATE_PHOTO_CANDIDATES = [
  'photo.jpg',
  'photo.jpeg',
  'photo.png',
  'photo.webp',
  'memory-photo.jpg',
  'memory-photo.png',
  'memory-photo.webp',
];

function findPrivatePhotoPath(): string | null {
  const privateDir = path.resolve(__dirname, 'private-assets');
  if (!fs.existsSync(privateDir)) {
    return null;
  }
  for (const filename of PRIVATE_PHOTO_CANDIDATES) {
    const candidate = path.join(privateDir, filename);
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }
  return null;
}

function isRequestSecure(req: express.Request): boolean {
  if (req.secure) return true;
  const proto = req.headers['x-forwarded-proto'];
  if (typeof proto === 'string') {
    return proto.split(',')[0].trim() === 'https';
  }
  return false;
}

async function startServer(): Promise<void> {
  const app = express();
  const port = Number(process.env.PORT) || 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.set('trust proxy', 1);
  app.use(express.json({ limit: '64kb' }));

  // Keep private birthday world out of search engine indexes
  app.use((_req, res, next) => {
    res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
    res.setHeader('Referrer-Policy', 'same-origin');
    next();
  });

  app.get('/robots.txt', (_req, res) => {
    res.type('text/plain').send('User-agent: *\nDisallow: /\n');
  });

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true });
  });

  app.get('/api/auth/session', (req, res) => {
    const token = getSessionCookieFromRequest(req);
    const authenticated = verifySessionToken(token);
    const clientKey = getClientKey(req);
    const cooldownRemaining = getCooldownRemainingSeconds(clientKey);
    res.json({ authenticated, cooldownRemaining });
  });

  app.post('/api/auth/unlock', (req, res) => {
    const clientKey = getClientKey(req);
    const cooldownRemaining = getCooldownRemainingSeconds(clientKey);
    if (cooldownRemaining > 0) {
      res.status(429).json({
        ok: false,
        cooldownRemaining,
        message: `Too many little guesses! Please wait ${cooldownRemaining}s and try again.`,
      });
      return;
    }

    const rawDate = typeof req.body?.date === 'string' ? req.body.date : '';
    if (!rawDate.trim()) {
      res.status(400).json({
        ok: false,
        message: 'Please choose your birthday date first.',
      });
      return;
    }

    if (!verifyBirthdayDate(rawDate)) {
      const { cooldownSeconds, attemptsRemaining } = recordFailedAttempt(clientKey);
      if (cooldownSeconds > 0) {
        res.status(429).json({
          ok: false,
          cooldownRemaining: cooldownSeconds,
          message: `Hmm, let's pause for ${cooldownSeconds}s before trying again. Hint: November 2006 ✨`,
        });
        return;
      }

      res.status(401).json({
        ok: false,
        attemptsRemaining,
        cooldownRemaining: 0,
        message:
          attemptsRemaining <= 2
            ? `Not quite that date! Think of a November birthday (${attemptsRemaining} ${attemptsRemaining === 1 ? 'try' : 'tries'} left before a short pause).`
            : "Hmm, not quite that date! Pick Lily's birthday to open this little world.",
      });
      return;
    }

    clearAttempts(clientKey);
    const token = createSessionToken();
    setSessionCookie(res, token, isRequestSecure(req));
    res.json({ ok: true });
  });

  app.post('/api/auth/lock', (req, res) => {
    clearSessionCookie(res, isRequestSecure(req));
    res.json({ ok: true });
  });

  app.get('/api/content', requireAuth, (_req, res) => {
    const hasPhoto = findPrivatePhotoPath() !== null;
    res.setHeader('Cache-Control', 'no-store');
    res.json(getProtectedContent(hasPhoto));
  });

  app.get('/api/media/photo', requireAuth, (_req, res) => {
    const photoPath = findPrivatePhotoPath();
    if (!photoPath) {
      res.status(404).json({ hasPhoto: false });
      return;
    }
    res.setHeader('Cache-Control', 'private, no-store');
    res.sendFile(photoPath);
  });

  const distDir = path.resolve(__dirname, 'dist');
  if (isProd && fs.existsSync(distDir)) {
    app.use(express.static(distDir, { index: false }));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`A Little World for Lily listening on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
