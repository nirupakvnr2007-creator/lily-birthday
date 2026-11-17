import React, { useState } from 'react';
import { Gift, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AmbientFloaters, ConfettiBurst, CoquetteBow } from './Decorations.tsx';

interface GiftBoxRevealProps {
  giftMessage: string;
  onEnterWorld: () => void;
}

export function GiftBoxReveal({ giftMessage, onEnterWorld }: GiftBoxRevealProps) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <main className="paper-grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#FCE7F0] via-[#FFF6EF] to-[#DCCEF4]/40 px-4 py-12">
      <AmbientFloaters />
      <ConfettiBurst active={opened} />

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center text-center">
        <p className="text-xs tracking-widest text-[#9C6580] uppercase">
          Unlocked for Lily · 20th Birthday
        </p>

        {/* Interactive Gift Box SVG */}
        <div className="relative mt-8 mb-8 flex h-56 w-56 items-center justify-center">
          {/* Soft ambient halo */}
          <div
            className="absolute inset-4 rounded-full bg-[#FCE7F0] opacity-75 blur-2xl"
            aria-hidden="true"
          />

          <motion.div
            animate={
              opened
                ? { scale: 1.04, y: -4 }
                : { y: [0, -6, 0] }
            }
            transition={
              opened
                ? { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
            }
            className="relative"
          >
            <svg viewBox="0 0 220 210" className="h-52 w-52" fill="none" aria-hidden="true">
              {/* Box base */}
              <rect
                x="44"
                y="92"
                width="132"
                height="96"
                rx="12"
                fill="#FCE7F0"
                stroke="#9C6580"
                strokeWidth="2.2"
              />
              {/* Vertical ribbon on base */}
              <rect x="98" y="92" width="24" height="96" fill="#E8C2D4" stroke="#9C6580" strokeWidth="1.6" />

              {/* Animated Lid + Bow */}
              <motion.g
                animate={
                  opened
                    ? { y: -38, rotate: -14, x: -10 }
                    : { y: 0, rotate: 0, x: 0 }
                }
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: '44px 88px' }}
              >
                <rect
                  x="34"
                  y="66"
                  width="152"
                  height="30"
                  rx="8"
                  fill="#DCCEF4"
                  stroke="#9C6580"
                  strokeWidth="2.2"
                />
                <rect x="98" y="66" width="24" height="30" fill="#E8C2D4" stroke="#9C6580" strokeWidth="1.6" />
                {/* Top bow loops */}
                <path
                  d="M108 66C90 36 62 40 66 58C70 70 94 68 108 66Z"
                  fill="#FCE7F0"
                  stroke="#9C6580"
                  strokeWidth="2"
                />
                <path
                  d="M112 66C130 36 158 40 154 58C150 70 126 68 112 66Z"
                  fill="#FCE7F0"
                  stroke="#9C6580"
                  strokeWidth="2"
                />
                <circle cx="110" cy="64" r="8" fill="#9C6580" />
              </motion.g>

              {/* Floating heart popping out when opened */}
              {opened && (
                <motion.g
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{ opacity: 1, y: -18, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <path
                    d="M110 78s-18-11.2-18-23.6C92 47.4 97.4 42.5 103.8 42.5c3.7 0 6.2 1.8 6.2 4.3 0-2.5 2.5-4.3 6.2-4.3 6.4 0 11.8 4.9 11.8 11.9C128 66.8 110 78 110 78z"
                    fill="#9C6580"
                  />
                </motion.g>
              )}
            </svg>
          </motion.div>
        </div>

        {!opened ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            <h1 className="font-serif text-4xl font-semibold text-[#3B1E2D] sm:text-5xl">
              Something Wrapped for You
            </h1>
            <p className="mx-auto max-w-sm text-sm leading-relaxed text-[#6E4A5D]">
              Take a breath, make a little wish, and untie the ribbon when you are ready.
            </p>
            <button
              type="button"
              onClick={handleOpen}
              className="inline-flex min-h-[48px] cursor-pointer items-center gap-2.5 rounded-xl bg-[#9C6580] px-7 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#85526B] focus-visible:ring-2 focus-visible:ring-[#3B1E2D] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Gift className="h-4 w-4" aria-hidden="true" />
              <span>Open Your Gift</span>
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full rounded-2xl border border-[#E8C2D4] bg-[#FFF6EF] p-7 shadow-sm sm:p-9"
          >
            <CoquetteBow className="mx-auto mb-3 h-8 w-14" />
            <h1 className="font-serif text-3xl font-semibold text-[#3B1E2D] sm:text-4xl">
              {giftMessage}
            </h1>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-[#6E4A5D]">
              <Heart className="h-4 w-4 fill-[#9C6580] text-[#9C6580]" aria-hidden="true" />
              <span>Thirteen little pages made just for your 20th birthday.</span>
            </p>
            <button
              type="button"
              onClick={onEnterWorld}
              className="mt-6 inline-flex min-h-[48px] cursor-pointer items-center gap-2 rounded-xl bg-[#9C6580] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#85526B] focus-visible:ring-2 focus-visible:ring-[#3B1E2D] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <span>Step Inside</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
