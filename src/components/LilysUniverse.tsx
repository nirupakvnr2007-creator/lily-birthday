import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import type { UniverseMessage } from '../types/birthday.ts';

interface LilysUniverseProps {
  title: string;
  subtitle: string;
  messages: UniverseMessage[];
}

export function LilysUniverse({ title, subtitle, messages }: LilysUniverseProps) {
  const [activeId, setActiveId] = useState<string>(messages[0]?.id ?? 'u1');

  return (
    <section className="relative overflow-hidden border-b border-[#E8C2D4]/40 bg-gradient-to-b from-[#23132B] via-[#311A3A] to-[#23132B] px-4 py-18 text-[#FFF6EF] sm:px-6 sm:py-24">
      {/* Twinkling star field */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {[
          { left: '8%', top: '16%', size: 4, delay: '0s' },
          { left: '22%', top: '34%', size: 3, delay: '1.2s' },
          { left: '38%', top: '14%', size: 5, delay: '0.6s' },
          { left: '64%', top: '20%', size: 3, delay: '1.8s' },
          { left: '84%', top: '14%', size: 5, delay: '0.4s' },
          { left: '91%', top: '48%', size: 4, delay: '1.5s' },
          { left: '14%', top: '76%', size: 4, delay: '0.9s' },
          { left: '74%', top: '82%', size: 5, delay: '2.1s' },
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

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          {/* Crescent Moon & Planet SVG */}
          <svg
            viewBox="0 0 100 64"
            className="mx-auto mb-4 h-12 w-20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M44 12C33.5 13.8 26 23 26 34C26 46.7 36.3 57 49 57C56.6 57 63.3 53.3 67.4 47.6C56.8 49.4 46.8 41.2 46.8 30.2C46.8 22.8 50.8 16.3 56.8 12.8C52.8 11.4 48.4 11.2 44 12Z"
              fill="#FCE7F0"
            />
            <circle cx="75" cy="24" r="6" fill="#DCCEF4" opacity="0.85" />
            <ellipse
              cx="75"
              cy="24"
              rx="12"
              ry="3.2"
              transform="rotate(-18 75 24)"
              stroke="#E8C2D4"
              strokeWidth="1.2"
            />
          </svg>

          <p className="text-xs font-medium tracking-widest text-[#E8C2D4] uppercase">
            Lily&apos;s Universe
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-wide text-[#FFF6EF] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm text-[#E8C2D4]">{subtitle}</p>
        </div>

        {/* Compliment Star Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {messages.map((item, idx) => {
            const isSelected = activeId === item.id;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.18 }}
                className={`flex cursor-pointer flex-col justify-between rounded-2xl border p-6 text-left transition-colors focus-visible:ring-2 focus-visible:ring-[#FCE7F0] focus-visible:outline-none ${
                  isSelected
                    ? 'border-[#FCE7F0] bg-[#462554]'
                    : 'border-[#E8C2D4]/30 bg-[#2E1738]/85 hover:border-[#E8C2D4]/70'
                } ${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#E8C2D4]">
                    <span>{item.constellation}</span>
                    <Sparkles className="h-3.5 w-3.5 text-[#FCE7F0]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 font-serif text-2xl leading-snug font-medium tracking-wide text-[#FFF6EF]">
                    &ldquo;{item.message}&rdquo;
                  </h3>
                </div>

                <p className="mt-4 border-t border-[#E8C2D4]/25 pt-3 text-xs leading-relaxed text-[#DCCEF4]">
                  {item.note}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
