import React, { useState } from 'react';
import { motion } from 'motion/react';
import { WaxSealBadge } from './Decorations.tsx';

interface TimeCapsuleProps {
  title: string;
  salutation: string;
  paragraphs: string[];
  signOff: string;
}

export function TimeCapsule({ title, salutation, paragraphs, signOff }: TimeCapsuleProps) {
  const [opened, setOpened] = useState(false);

  return (
    <section
      id="time-capsule"
      className="border-b border-[#E8C2D4]/60 bg-[#FFF6EF] px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-medium tracking-widest text-[#9C6580] uppercase">
            School Time Capsule
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#3B1E2D] sm:text-4xl">
            {title}
          </h2>
        </div>

        <div className="mt-12 flex flex-col items-center">
          {!opened ? (
            <button
              type="button"
              onClick={() => setOpened(true)}
              aria-label="Break the wax seal to open the school time capsule envelope"
              className="group relative flex w-full max-w-md cursor-pointer flex-col items-center justify-center rounded-2xl border border-[#E8C2D4] bg-[#FCE7F0] p-10 shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#9C6580] focus-visible:outline-none"
            >
              {/* Envelope flap lines */}
              <svg
                viewBox="0 0 360 140"
                className="pointer-events-none absolute top-0 left-0 h-28 w-full opacity-60"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0 0 L180 110 L360 0" stroke="#9C6580" strokeWidth="1.5" fill="none" />
              </svg>

              <WaxSealBadge className="relative z-10 mt-6 h-16 w-16 transition-transform duration-300 group-hover:scale-105" />

              <p className="mt-5 font-serif text-2xl font-semibold text-[#3B1E2D]">
                For Lily · From Our School Days
              </p>
              <p className="mt-1.5 text-xs font-medium text-[#9C6580]">
                Tap the wax seal to open this envelope
              </p>
            </button>
          ) : (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl rounded-2xl border border-[#E8C2D4] bg-[#FFFDF9] p-8 shadow-sm sm:p-10"
            >
              <div className="flex items-center justify-between border-b border-[#E8C2D4]/70 pb-4">
                <span className="font-hand text-2xl text-[#9C6580]">{salutation}</span>
                <button
                  type="button"
                  onClick={() => setOpened(false)}
                  className="cursor-pointer text-xs font-medium text-[#6E4A5D] underline-offset-4 hover:text-[#3B1E2D] hover:underline"
                >
                  Fold back into envelope
                </button>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#3B1E2D] sm:text-base">
                {paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <p className="mt-7 font-hand text-2xl text-[#9C6580]">{signOff}</p>
            </motion.article>
          )}
        </div>
      </div>
    </section>
  );
}
