import React, { useState } from 'react';
import { Camera, Expand, Heart, RotateCw, X } from 'lucide-react';
import type { PolaroidData } from '../types/birthday.ts';
import { BotanicalSprig } from './Decorations.tsx';

interface PolaroidMuseumProps {
  polaroid: PolaroidData;
}

export function PolaroidMuseum({ polaroid }: PolaroidMuseumProps) {
  const [flipped, setFlipped] = useState(false);
  const [enlarged, setEnlarged] = useState(false);
  const [imgError, setImgError] = useState(false);

  const showRealPhoto = polaroid.hasPhoto && !imgError;

  return (
    <section
      id="our-memories"
      className="border-b border-[#E8C2D4]/60 bg-[#FCE7F0]/45 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-widest text-[#9C6580] uppercase">
            The One-Picture Museum
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#3B1E2D] sm:text-4xl">
            {polaroid.title}
          </h2>
        </div>

        <div className="mt-12 flex flex-col items-center">
          {/* Polaroid Flip Container */}
          <div className="perspective-1000 relative w-full max-w-sm">
            {/* Washi tape top left & right */}
            <div
              className="pointer-events-none absolute -top-3 left-6 z-20 h-6 w-20 -rotate-12 rounded-sm bg-[#DCCEF4]/85 shadow-xs"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -top-3 right-6 z-20 h-6 w-20 rotate-12 rounded-sm bg-[#E8C2D4]/85 shadow-xs"
              aria-hidden="true"
            />

            <div
              className={`transform-style-3d relative min-h-[430px] w-full transition-transform duration-500 ${
                flipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front of Polaroid */}
              <div className="backface-hidden absolute inset-0 flex flex-col rounded-sm border border-[#E7D9C8] bg-[#FFFDF9] p-4 pb-6 shadow-md">
                <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-xs border border-[#E8C2D4]/60 bg-[#FCE7F0]/60">
                  {showRealPhoto ? (
                    <img
                      src="/api/media/photo"
                      alt="A treasured photograph of Lily and her friend"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#FCE7F0] via-[#FFF6EF] to-[#DCCEF4]/70 p-6 text-center">
                      <BotanicalSprig className="mb-2 h-12 w-12 opacity-80" />
                      <Camera className="h-8 w-8 text-[#9C6580]" aria-hidden="true" />
                      <p className="mt-3 font-serif text-xl font-semibold text-[#3B1E2D]">
                        Reserved for Our Photograph
                      </p>
                      <p className="mt-2 max-w-[230px] text-xs leading-relaxed text-[#6E4A5D]">
                        Place your real photograph in{' '}
                        <code className="rounded bg-white/80 px-1.5 py-0.5 text-[11px] text-[#3B1E2D]">
                          private-assets/photo.jpg
                        </code>{' '}
                        before deploying—kept private behind Lily&apos;s birthday lock.
                      </p>
                    </div>
                  )}

                  {/* Small heart sticker */}
                  <div
                    className="pointer-events-none absolute right-2.5 bottom-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs"
                    aria-hidden="true"
                  >
                    <Heart className="h-3.5 w-3.5 fill-[#9C6580] text-[#9C6580]" />
                  </div>
                </div>

                <p className="mt-5 px-1 text-center font-hand text-xl leading-snug text-[#3B1E2D]">
                  &ldquo;{polaroid.caption}&rdquo;
                </p>
              </div>

              {/* Back of Polaroid (Story behind the picture) */}
              <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between rounded-sm border border-[#E7D9C8] bg-[#FFF6EF] p-7 shadow-md">
                <div>
                  <p className="text-xs tracking-widest text-[#9C6580] uppercase">
                    Note on the Back
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#3B1E2D]">
                    {polaroid.storyTitle}
                  </h3>
                  <div className="my-4 h-px bg-[#E8C2D4]" />
                  <p className="text-sm leading-relaxed text-[#6E4A5D] sm:text-base">
                    {polaroid.storyText}
                  </p>
                </div>

                <div className="pt-4">
                  <p className="font-hand text-xl text-[#9C6580]">{polaroid.dateNote}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Polaroid Controls */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setFlipped((prev) => !prev)}
              className="inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-xl border border-[#E8C2D4] bg-white px-4 py-2 text-xs font-medium text-[#3B1E2D] transition-colors hover:bg-[#FCE7F0] focus-visible:ring-2 focus-visible:ring-[#9C6580] focus-visible:outline-none"
            >
              <RotateCw className="h-3.5 w-3.5 text-[#9C6580]" aria-hidden="true" />
              <span>{flipped ? 'View Front Photo' : 'Flip for Back Story'}</span>
            </button>

            <button
              type="button"
              onClick={() => setEnlarged(true)}
              className="inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-xl bg-[#9C6580] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#85526B] focus-visible:ring-2 focus-visible:ring-[#3B1E2D] focus-visible:outline-none"
            >
              <Expand className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Enlarge Frame</span>
            </button>
          </div>
        </div>
      </div>

      {/* Clean Lightbox Modal */}
      {enlarged && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photograph frame"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#3B1E2D]/70 p-4 backdrop-blur-xs"
          onClick={() => setEnlarged(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-xl bg-[#FFFDF9] p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setEnlarged(false)}
              aria-label="Close enlarged view"
              className="absolute top-3 right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#FCE7F0] text-[#3B1E2D] hover:bg-[#E8C2D4]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mt-2 aspect-[4/4.2] w-full overflow-hidden rounded-sm border border-[#E8C2D4] bg-[#FCE7F0]/50">
              {showRealPhoto ? (
                <img
                  src="/api/media/photo"
                  alt="Enlarged photograph of Lily and her friend"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                  <Camera className="h-10 w-10 text-[#9C6580]" aria-hidden="true" />
                  <p className="mt-3 font-serif text-2xl font-semibold text-[#3B1E2D]">
                    Your Photograph Frame
                  </p>
                  <p className="mt-2 text-sm text-[#6E4A5D]">
                    Ready for your real photo in{' '}
                    <code className="rounded bg-white px-1.5 py-0.5 text-xs">
                      private-assets/photo.jpg
                    </code>
                    .
                  </p>
                </div>
              )}
            </div>

            <p className="mt-4 text-center font-hand text-2xl text-[#3B1E2D]">
              &ldquo;{polaroid.caption}&rdquo;
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
