import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Camera, Flame, Heart, Lock, Sparkles, X } from 'lucide-react';
import { motion } from 'motion/react';
import type { FinaleData, LetterChapter, PolaroidData } from '../types/birthday.ts';
import { BirthdayCakeIllustration, BotanicalSprig, ConfettiBurst, CoquetteBow } from './Decorations.tsx';

interface MainLetterAndFinaleProps {
  letterTitle: string;
  letterSubtitle: string;
  chapters: LetterChapter[];
  finale: FinaleData;
  polaroid: PolaroidData;
  onCutCake: () => void;
  onRelock: () => void;
}

export function MainLetterAndFinale({
  letterTitle,
  letterSubtitle,
  chapters,
  finale,
  polaroid,
  onCutCake,
  onRelock,
}: MainLetterAndFinaleProps) {
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);
  const [candlesLit, setCandlesLit] = useState(false);
  const [showFinaleConfetti, setShowFinaleConfetti] = useState(false);
  const [showOneMoreThing, setShowOneMoreThing] = useState(false);
  const [imgError, setImgError] = useState(false);

  const chapter = chapters[activeChapterIdx] || chapters[0];
  const isFirst = activeChapterIdx === 0;
  const isLast = activeChapterIdx === chapters.length - 1;
  const showRealPhoto = polaroid.hasPhoto && !imgError;

  const handleLightCandles = () => {
    if (!candlesLit) {
      onCutCake();
    }
    setCandlesLit(true);
    setShowFinaleConfetti(true);
  };

  return (
    <>
      {/* Feature 13A: Seven-Chapter Main Letter */}
      <section
        id="birthday-letter"
        className="paper-grain border-b border-[#E8C2D4]/60 bg-[#FFF6EF] px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <CoquetteBow className="mx-auto mb-2 h-8 w-14" />
            <p className="text-xs font-medium tracking-widest text-[#9C6580] uppercase">
              The Heart of This Gift
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#3B1E2D] sm:text-4xl">
              {letterTitle}
            </h2>
            <p className="mt-2 text-sm text-[#6E4A5D]">{letterSubtitle}</p>
          </div>

          {/* Chapter Navigation Bar */}
          <div
            role="tablist"
            aria-label="Letter chapters"
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            {chapters.map((ch, idx) => {
              const active = idx === activeChapterIdx;
              return (
                <button
                  key={ch.number}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveChapterIdx(idx)}
                  className={`min-h-[40px] cursor-pointer rounded-xl px-3.5 py-2 text-xs font-medium transition-colors ${
                    active
                      ? 'bg-[#9C6580] text-white'
                      : 'border border-[#E8C2D4] bg-white text-[#3B1E2D] hover:bg-[#FCE7F0]'
                  }`}
                >
                  <span className="tabular-nums">Ch. {ch.number}</span>
                </button>
              );
            })}
          </div>

          {/* Reading Progress Indicator */}
          <div className="mx-auto mt-5 max-w-2xl">
            <div className="flex items-center justify-between text-xs text-[#6E4A5D]">
              <span>{chapter?.kicker}</span>
              <span className="tabular-nums">
                {activeChapterIdx + 1} / {chapters.length}
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#FCE7F0]">
              <div
                className="h-full rounded-full bg-[#9C6580] transition-all duration-300"
                style={{ width: `${((activeChapterIdx + 1) / chapters.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Letter Paper Surface */}
          {chapter && (
            <motion.article
              key={chapter.number}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-6 max-w-2xl rounded-2xl border border-[#E8C2D4] bg-[#FFFDF9] p-7 shadow-sm sm:p-11"
            >
              <h3 className="font-serif text-3xl font-semibold text-[#3B1E2D] sm:text-4xl">
                Chapter {chapter.number} — {chapter.title}
              </h3>

              <div className="my-5 h-px bg-[#E8C2D4]/70" />

              <div className="space-y-5 text-base leading-[1.8] text-[#3B1E2D]">
                {chapter.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Chapter Controls */}
              <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-[#E8C2D4]/70 pt-6">
                <button
                  type="button"
                  disabled={isFirst}
                  onClick={() => setActiveChapterIdx((i) => Math.max(0, i - 1))}
                  className="inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-xl border border-[#E8C2D4] bg-white px-4 py-2 text-xs font-medium text-[#3B1E2D] hover:bg-[#FCE7F0] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Previous Chapter</span>
                </button>

                {!isLast ? (
                  <button
                    type="button"
                    onClick={() =>
                      setActiveChapterIdx((i) => Math.min(chapters.length - 1, i + 1))
                    }
                    className="inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-xl bg-[#9C6580] px-5 py-2 text-xs font-medium text-white hover:bg-[#85526B]"
                  >
                    <span>Continue to Chapter {chapter.number + 1}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                ) : (
                  <a
                    href="#final-surprise"
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#9C6580] px-5 py-2 text-xs font-medium text-white hover:bg-[#85526B]"
                  >
                    <span>Proceed to Final Surprise</span>
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </motion.article>
          )}
        </div>
      </section>

      {/* Feature 13B: Grand Birthday Finale */}
      <section
        id="final-surprise"
        className="relative overflow-hidden bg-gradient-to-b from-[#3B1E2D] via-[#532B45] to-[#23132B] px-4 py-20 text-[#FFF6EF] sm:px-6 sm:py-28"
      >
        <ConfettiBurst active={showFinaleConfetti} />

        {/* Subtle twinkling stars */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {[
            { left: '12%', top: '14%', size: 4, delay: '0s' },
            { left: '28%', top: '26%', size: 3, delay: '0.9s' },
            { left: '72%', top: '18%', size: 5, delay: '0.4s' },
            { left: '86%', top: '34%', size: 3, delay: '1.4s' },
            { left: '18%', top: '78%', size: 4, delay: '1.1s' },
            { left: '80%', top: '80%', size: 4, delay: '0.6s' },
          ].map((star, idx) => (
            <span
              key={idx}
              className="animate-twinkle-soft absolute rounded-full bg-[#FCE7F0]"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: star.delay,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <div className="mx-auto flex flex-col items-center">
            <BirthdayCakeIllustration lit={candlesLit} className="h-48 w-48 sm:h-56 sm:w-56" />

            <button
              type="button"
              onClick={handleLightCandles}
              className="mt-4 inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl border border-[#FCE7F0]/40 bg-[#9C6580] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#85526B]"
            >
              <Flame className="h-4 w-4 text-[#FDE68A]" aria-hidden="true" />
              <span>{candlesLit ? 'Throw More Confetti' : 'Light Candles & Cut Cake'}</span>
            </button>
            {candlesLit && (
              <p className="mt-3 text-xs text-[#E8C2D4]">
                Playing in background: Hard For Me — Michele Morrone
              </p>
            )}
          </div>

          <h2 className="mt-10 font-serif text-4xl font-semibold text-[#FFF6EF] sm:text-5xl">
            {finale.heading}
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#FCE7F0] sm:text-lg">
            {finale.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <p className="mt-6 font-hand text-2xl text-[#DCCEF4]">{finale.closingLine}</p>

          <div className="mt-10">
            <button
              type="button"
              onClick={() => setShowOneMoreThing(true)}
              className="inline-flex min-h-[48px] cursor-pointer items-center gap-2 rounded-xl bg-[#FCE7F0] px-7 py-3 text-sm font-semibold text-[#3B1E2D] shadow-sm transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <Heart className="h-4 w-4 fill-[#9C6580] text-[#9C6580]" aria-hidden="true" />
              <span>One More Thing...</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quiet Footer */}
      <footer className="border-t border-[#E8C2D4]/30 bg-[#23132B] px-4 py-8 text-center text-xs text-[#E8C2D4]">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p>A Little World for Lily · Made with warmth for your 20th birthday</p>
          <button
            type="button"
            onClick={onRelock}
            className="inline-flex cursor-pointer items-center gap-1.5 text-xs text-[#DCCEF4] underline-offset-4 hover:text-white hover:underline"
          >
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Lock This Page</span>
          </button>
        </div>
      </footer>

      {/* "One More Thing..." Keepsake Modal */}
      {showOneMoreThing && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="One More Thing keepsake"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#23132B]/80 p-4 backdrop-blur-xs"
          onClick={() => setShowOneMoreThing(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-[#E8C2D4] bg-[#FFF6EF] p-6 text-center shadow-xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowOneMoreThing(false)}
              aria-label="Close keepsake dialog"
              className="absolute top-3 right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#FCE7F0] text-[#3B1E2D] hover:bg-[#E8C2D4]"
            >
              <X className="h-4 w-4" />
            </button>

            <CoquetteBow className="mx-auto mb-3 h-7 w-12" />

            <div className="mx-auto aspect-[4/4] max-w-[240px] overflow-hidden rounded-sm border border-[#E7D9C8] bg-white p-3 pb-5 shadow-sm">
              <div className="h-full w-full overflow-hidden bg-[#FCE7F0]/60">
                {showRealPhoto ? (
                  <img
                    src="/api/media/photo"
                    alt="Final keepsake photograph"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
                    <BotanicalSprig className="h-10 w-10" />
                    <Camera className="mt-1 h-7 w-7 text-[#9C6580]" aria-hidden="true" />
                    <p className="mt-2 font-serif text-base font-semibold text-[#3B1E2D]">
                      Our Keepsake Frame
                    </p>
                  </div>
                )}
              </div>
            </div>

            <p className="mt-5 font-serif text-xl leading-relaxed text-[#3B1E2D]">
              &ldquo;{finale.oneMoreThingText}&rdquo;
            </p>
          </div>
        </div>
      )}
    </>
  );
}
