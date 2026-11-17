import React, { useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import {
  AmbientFloaters,
  BirthdayCakeIllustration,
  BotanicalSprig,
  ConfettiBurst,
  CoquetteBow,
} from './Decorations.tsx';

interface HeroSectionProps {
  heading: string;
  subheading: string;
}

export function HeroSection({ heading, subheading }: HeroSectionProps) {
  const [confettiCount, setConfettiCount] = useState(0);

  return (
    <section
      id="top"
      className="paper-grain relative overflow-hidden border-b border-[#E8C2D4]/70 bg-gradient-to-b from-[#FCE7F0]/75 via-[#FFF6EF] to-[#FFF6EF] px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24"
    >
      <AmbientFloaters />
      <ConfettiBurst active={confettiCount > 0} burstKey={confettiCount} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Editorial copy column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:col-span-7 lg:text-left"
          >
            <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
              <CoquetteBow className="h-7 w-12" />
              <span className="text-xs font-medium tracking-widest text-[#9C6580] uppercase">
                Twentieth Year Scrapbook · November 18
              </span>
            </div>

            <h1 className="font-serif text-4xl leading-tight font-semibold tracking-tight text-[#3B1E2D] sm:text-5xl lg:text-6xl">
              {heading}
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#6E4A5D] sm:text-lg lg:mx-0">
              {subheading}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#our-story"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[#9C6580] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#85526B] focus-visible:ring-2 focus-visible:ring-[#3B1E2D] focus-visible:outline-none"
              >
                <span>Open the Scrapbook</span>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => setConfettiCount((c) => c + 1)}
                className="inline-flex min-h-[46px] cursor-pointer items-center gap-2 rounded-xl border border-[#E8C2D4] bg-white/80 px-5 py-3 text-sm font-medium text-[#3B1E2D] transition-colors hover:bg-[#FCE7F0] focus-visible:ring-2 focus-visible:ring-[#9C6580] focus-visible:outline-none"
              >
                <Sparkles className="h-4 w-4 text-[#9C6580]" aria-hidden="true" />
                <span>Throw Confetti</span>
              </button>
            </div>
          </motion.div>

          {/* Focal cake illustration frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative flex w-full max-w-sm flex-col items-center rounded-2xl border border-[#E8C2D4] bg-[#FFF6EF] p-8 shadow-sm">
              <BotanicalSprig className="absolute top-3 left-3 h-10 w-10 opacity-75" />
              <BotanicalSprig className="absolute right-3 bottom-3 h-10 w-10 rotate-180 opacity-75" />
              <BirthdayCakeIllustration lit={true} className="h-52 w-52 sm:h-56 sm:w-56" />
              <p className="mt-2 font-hand text-2xl text-[#9C6580]">
                Make a quiet wish, Lily
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quiet unboxed chapter summary line */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-[#E8C2D4]/60 pt-6 text-xs text-[#6E4A5D] lg:justify-start">
          <span>The Story of Us</span>
          <span aria-hidden="true">·</span>
          <span>Official Lily Awards</span>
          <span aria-hidden="true">·</span>
          <span>Time Capsule</span>
          <span aria-hidden="true">·</span>
          <span>Soundtrack</span>
          <span aria-hidden="true">·</span>
          <span>Seven-Chapter Letter</span>
        </div>
      </div>
    </section>
  );
}
