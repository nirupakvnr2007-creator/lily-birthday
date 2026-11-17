import React, { useEffect, useState } from 'react';
import { Calendar, Heart, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { AmbientFloaters, CoquetteBow, VintageLockIllustration } from './Decorations.tsx';

interface LockScreenProps {
  initialCooldownSeconds?: number;
  onUnlocked: () => void;
}

function formatToDmy(isoDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) return 'DD-MM-YYYY';
  return `${match[3]}-${match[2]}-${match[1]}`;
}

export function LockScreen({ initialCooldownSeconds = 0, onUnlocked }: LockScreenProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(initialCooldownSeconds);

  useEffect(() => {
    setCooldown(initialCooldownSeconds);
  }, [initialCooldownSeconds]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = window.setInterval(() => {
      setCooldown((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [cooldown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cooldown > 0 || submitting) return;

    if (!selectedDate) {
      setErrorMessage("Please pick Lily's birthday from the calendar first.");
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/auth/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ date: selectedDate }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        cooldownRemaining?: number;
      };

      if (response.ok && data.ok) {
        onUnlocked();
        return;
      }

      if (typeof data.cooldownRemaining === 'number' && data.cooldownRemaining > 0) {
        setCooldown(data.cooldownRemaining);
      }
      setErrorMessage(data.message || 'Hmm, not quite that date!');
    } catch {
      setErrorMessage('Could not reach the server right now. Please try once more.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="paper-grain relative flex min-h-screen items-center justify-center bg-[#FCE7F0] px-4 py-12">
      <AmbientFloaters />

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        aria-labelledby="lock-heading"
        className="relative z-10 w-full max-w-md rounded-2xl border border-[#E8C2D4] bg-[#FFF6EF] p-8 shadow-sm sm:p-10"
      >
        <div className="flex flex-col items-center text-center">
          <CoquetteBow className="mb-2 h-9 w-16" />
          <VintageLockIllustration className="mb-4 h-20 w-20" />

          <p className="text-xs tracking-widest text-[#9C6580] uppercase">
            Private Keepsake · 20th Birthday
          </p>

          <h1
            id="lock-heading"
            className="mt-2 font-serif text-4xl font-semibold tracking-tight text-[#3B1E2D]"
          >
            A Little Secret...
          </h1>

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#6E4A5D]">
            This little world is meant for one special person.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="birthday-date-input"
              className="mb-2 flex items-center justify-between text-xs font-medium text-[#3B1E2D]"
            >
              <span>Select your birth date</span>
              <span className="font-mono text-[#6E4A5D] tabular-nums">
                {formatToDmy(selectedDate)}
              </span>
            </label>

            <div className="relative">
              <Calendar
                className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#9C6580]"
                aria-hidden="true"
              />
              <input
                id="birthday-date-input"
                type="date"
                value={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                disabled={cooldown > 0 || submitting}
                className="min-h-[46px] w-full rounded-xl border border-[#E8C2D4] bg-white pr-4 pl-10 text-sm text-[#3B1E2D] transition-colors focus:border-[#9C6580] focus:ring-2 focus:ring-[#E8C2D4] focus:outline-none disabled:opacity-60"
                required
              />
            </div>
          </div>

          {errorMessage && (
            <div
              role="alert"
              className="rounded-xl border border-[#E8C2D4] bg-[#FCE7F0] px-4 py-3 text-xs leading-relaxed text-[#3B1E2D]"
            >
              {errorMessage}
              {cooldown > 0 && (
                <p className="mt-1 font-medium text-[#9C6580] tabular-nums">
                  Cooldown remaining: {cooldown}s
                </p>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting || cooldown > 0}
            className="flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#9C6580] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#85526B] focus-visible:ring-2 focus-visible:ring-[#3B1E2D] focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
          >
            {cooldown > 0 ? (
              <>
                <Lock className="h-4 w-4" aria-hidden="true" />
                <span>Waiting ({cooldown}s)</span>
              </>
            ) : submitting ? (
              <span>Checking your birthday...</span>
            ) : (
              <>
                <span>Unlock My Surprise</span>
                <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-[#6E4A5D]">
          Protected privately on the server · Format DD-MM-YYYY
        </p>
      </motion.section>
    </main>
  );
}
