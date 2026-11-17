import React, { useState } from 'react';
import { Award, RotateCw } from 'lucide-react';
import type { FriendshipAward } from '../types/birthday.ts';

interface FriendshipAwardsProps {
  awards: FriendshipAward[];
}

export function FriendshipAwards({ awards }: FriendshipAwardsProps) {
  const [flippedIds, setFlippedIds] = useState<Record<number, boolean>>({});

  const toggleCard = (id: number) => {
    setFlippedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="little-surprises"
      className="border-b border-[#E8C2D4]/60 bg-[#FFF6EF] px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-widest text-[#9C6580] uppercase">
            Friendship Awards
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#3B1E2D] sm:text-4xl">
            The Official Lily Awards 2026
          </h2>
          <p className="mt-3 text-sm text-[#6E4A5D] sm:text-base">
            Tap any award card to flip it and read the official citation.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {awards.map((award) => {
            const isFlipped = Boolean(flippedIds[award.id]);
            return (
              <div key={award.id} className="perspective-1000 h-60 w-full">
                <button
                  type="button"
                  onClick={() => toggleCard(award.id)}
                  aria-pressed={isFlipped}
                  className={`transform-style-3d relative h-full w-full cursor-pointer text-left transition-transform duration-500 focus-visible:ring-2 focus-visible:ring-[#9C6580] focus-visible:outline-none ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front */}
                  <div className="backface-hidden absolute inset-0 flex flex-col justify-between rounded-2xl border border-[#E8C2D4] bg-white p-5 shadow-xs transition-colors hover:border-[#9C6580]/70">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#6E4A5D] tabular-nums">
                        No. {String(award.id).padStart(2, '0')} · {award.category}
                      </span>
                      <Award className="h-4 w-4 shrink-0 text-[#9C6580]" aria-hidden="true" />
                    </div>

                    <h3 className="font-serif text-xl leading-snug font-semibold text-[#3B1E2D]">
                      {award.title}
                    </h3>

                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9C6580]">
                      <RotateCw className="h-3 w-3" aria-hidden="true" />
                      <span>Tap to read citation</span>
                    </span>
                  </div>

                  {/* Back */}
                  <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between rounded-2xl border border-[#9C6580]/50 bg-[#FCE7F0] p-5 shadow-xs">
                    <div className="flex items-center justify-between text-xs font-medium text-[#9C6580]">
                      <span>Official Citation</span>
                      <span className="tabular-nums">#{award.id}</span>
                    </div>

                    <p className="text-xs leading-relaxed text-[#3B1E2D] sm:text-sm">
                      {award.explanation}
                    </p>

                    <span className="text-[11px] font-medium text-[#6E4A5D]">
                      Tap to flip back
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
