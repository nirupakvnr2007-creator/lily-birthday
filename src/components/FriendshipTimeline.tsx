import React from 'react';
import { BookOpen, Compass, HeartHandshake, Landmark, Mic, Sparkles, Star, Sun, Users } from 'lucide-react';
import { motion } from 'motion/react';
import type { TimelineChapter } from '../types/birthday.ts';

interface FriendshipTimelineProps {
  chapters: TimelineChapter[];
}

function getMotifIcon(motif: TimelineChapter['motif']) {
  const cls = 'h-5 w-5 text-[#9C6580]';
  switch (motif) {
    case 'microphone':
      return <Mic className={cls} aria-hidden="true" />;
    case 'desk':
      return <Compass className={cls} aria-hidden="true" />;
    case 'books':
      return <BookOpen className={cls} aria-hidden="true" />;
    case 'spark':
      return <Sparkles className={cls} aria-hidden="true" />;
    case 'philosophy':
      return <Users className={cls} aria-hidden="true" />;
    case 'stars':
      return <Star className={cls} aria-hidden="true" />;
    case 'coincidence':
      return <HeartHandshake className={cls} aria-hidden="true" />;
    case 'temple':
      return <Landmark className={cls} aria-hidden="true" />;
    case 'horizon':
      return <Sun className={cls} aria-hidden="true" />;
  }
}

export function FriendshipTimeline({ chapters }: FriendshipTimelineProps) {
  return (
    <section
      id="our-story"
      className="border-b border-[#E8C2D4]/60 bg-[#FFF6EF] px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-widest text-[#9C6580] uppercase">
            Our Friendship Timeline
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#3B1E2D] sm:text-4xl">
            From School Days to Something Special
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6E4A5D] sm:text-base">
            Every chapter just as it happened—quiet beginnings, shared books, late conversations, and looking ahead to next year.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Vertical center spine on desktop, left spine on mobile */}
          <div
            className="absolute top-2 bottom-2 left-5 w-px bg-[#E8C2D4] md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="space-y-8 md:space-y-10">
            {chapters.map((chapter, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.li
                  key={chapter.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-14 md:grid md:grid-cols-2 md:gap-10 md:pl-0"
                >
                  {/* Timeline node */}
                  <div className="absolute top-6 left-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#E8C2D4] bg-[#FCE7F0] md:left-1/2 md:-translate-x-1/2">
                    {getMotifIcon(chapter.motif)}
                  </div>

                  {/* Card positioned left or right on desktop */}
                  <div
                    className={`rounded-2xl border border-[#E8C2D4]/80 bg-white/85 p-6 shadow-sm ${
                      isLeft ? 'md:col-start-1 md:mr-6' : 'md:col-start-2 md:ml-6'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs text-[#6E4A5D]">
                      <span className="font-semibold text-[#9C6580] tabular-nums">
                        {chapter.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{chapter.eraLabel}</span>
                    </div>

                    <h3 className="mt-2 font-serif text-2xl font-semibold text-[#3B1E2D]">
                      {chapter.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#6E4A5D] sm:text-base">
                      {chapter.story}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
