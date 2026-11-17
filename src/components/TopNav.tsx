import React, { useState } from 'react';
import { Menu, Music, Pause, X } from 'lucide-react';

interface TopNavProps {
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

const NAV_LINKS = [
  { href: '#our-story', label: 'Our Story' },
  { href: '#our-memories', label: 'Our Memories' },
  { href: '#little-surprises', label: 'Little Surprises' },
  { href: '#birthday-letter', label: 'Birthday Letter' },
  { href: '#final-surprise', label: 'Final Surprise' },
];

export function TopNav({ isPlayingMusic, onToggleMusic }: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E8C2D4]/70 bg-[#FFF6EF]/92 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight whitespace-nowrap shrink-0 text-[#3B1E2D] sm:text-xl"
        >
          A Little World for Lily
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav aria-label="Birthday sections" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium whitespace-nowrap shrink-0 text-[#6E4A5D] underline-offset-4 transition-colors hover:text-[#3B1E2D] hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action (Music toggle) + mobile menu trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleMusic}
            className="inline-flex min-h-[38px] cursor-pointer items-center gap-2 rounded-lg bg-[#9C6580] px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 text-white transition-colors hover:bg-[#85526B] focus-visible:ring-2 focus-visible:ring-[#3B1E2D] focus-visible:outline-none"
          >
            {isPlayingMusic ? (
              <>
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Pause Music</span>
              </>
            ) : (
              <>
                <Music className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Play Music</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[#E8C2D4] text-[#3B1E2D] md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Compact mobile navigation drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile sections"
          className="border-t border-[#E8C2D4]/70 bg-[#FFF6EF] px-4 py-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#3B1E2D] hover:bg-[#FCE7F0]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
