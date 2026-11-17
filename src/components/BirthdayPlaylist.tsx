import React from 'react';
import { Disc3, Pause, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import type { PlaylistTrack } from '../types/birthday.ts';

interface BirthdayPlaylistProps {
  title: string;
  subtitle: string;
  tracks: PlaylistTrack[];
  currentTrackIndex: number;
  isPlaying: boolean;
  elapsedSec: number;
  volume: number;
  onTogglePlay: () => void;
  onSelectTrack: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onSeek: (seconds: number) => void;
  onVolumeChange: (vol: number) => void;
}

function formatTime(sec: number): string {
  const safe = Math.max(0, Math.floor(sec));
  const mins = Math.floor(safe / 60);
  const rem = safe % 60;
  return `${mins}:${String(rem).padStart(2, '0')}`;
}

export function BirthdayPlaylist({
  title,
  subtitle,
  tracks,
  currentTrackIndex,
  isPlaying,
  elapsedSec,
  volume,
  onTogglePlay,
  onSelectTrack,
  onPrev,
  onNext,
  onSeek,
  onVolumeChange,
}: BirthdayPlaylistProps) {
  const currentTrack = tracks[currentTrackIndex] || tracks[0];
  const progressPct = currentTrack
    ? Math.min(100, (elapsedSec / currentTrack.durationSec) * 100)
    : 0;

  return (
    <section className="border-b border-[#E8C2D4]/60 bg-[#FFF6EF] px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-widest text-[#9C6580] uppercase">
            Birthday Playlist
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#3B1E2D] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-[#6E4A5D]">{subtitle}</p>
        </div>

        <div className="mt-10 grid gap-6 rounded-2xl border border-[#E8C2D4] bg-white p-6 shadow-sm md:grid-cols-12 md:p-8">
          {/* Album Art & Controls */}
          <div className="flex flex-col justify-between md:col-span-6">
            <div className="flex items-center gap-5">
              {/* Coquette vinyl artwork */}
              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-[#E8C2D4] bg-gradient-to-br from-[#FCE7F0] to-[#DCCEF4]">
                <Disc3
                  className={`h-12 w-12 text-[#9C6580] ${isPlaying ? 'animate-spin' : ''}`}
                  style={{ animationDuration: '6s' }}
                  aria-hidden="true"
                />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium text-[#9C6580]">
                  Track {currentTrackIndex + 1} of {tracks.length}
                </p>
                <h3 className="truncate font-serif text-2xl font-semibold text-[#3B1E2D]">
                  {currentTrack?.title}
                </h3>
                <p className="truncate text-xs text-[#6E4A5D]">{currentTrack?.subtitle}</p>
              </div>
            </div>

            <p className="mt-5 rounded-xl bg-[#FFF6EF] px-4 py-3 font-serif text-base italic text-[#3B1E2D]">
              &ldquo;{currentTrack?.caption}&rdquo;
            </p>

            {/* Seek bar */}
            <div className="mt-5">
              <input
                type="range"
                min={0}
                max={currentTrack?.durationSec ?? 48}
                step={0.5}
                value={Math.min(elapsedSec, currentTrack?.durationSec ?? 48)}
                onChange={(e) => onSeek(Number(e.target.value))}
                aria-label="Track progress"
                className="h-1.5 w-full cursor-pointer accent-[#9C6580]"
              />
              <div className="mt-1.5 flex justify-between text-[11px] text-[#6E4A5D] tabular-nums">
                <span>{formatTime(elapsedSec)}</span>
                <span>{formatTime(currentTrack?.durationSec ?? 0)}</span>
              </div>
              <div className="sr-only" aria-live="polite">
                {Math.round(progressPct)}% played
              </div>
            </div>

            {/* Transport + Volume */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onPrev}
                  aria-label="Previous track"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#E8C2D4] text-[#3B1E2D] hover:bg-[#FCE7F0]"
                >
                  <SkipBack className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={onTogglePlay}
                  aria-label={isPlaying ? 'Pause music' : 'Play music'}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#9C6580] text-white transition-colors hover:bg-[#85526B]"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="ml-0.5 h-5 w-5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={onNext}
                  aria-label="Next track"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#E8C2D4] text-[#3B1E2D] hover:bg-[#FCE7F0]"
                >
                  <SkipForward className="h-4 w-4" />
                </button>
              </div>

              <label className="flex items-center gap-2 text-xs text-[#6E4A5D]">
                <Volume2 className="h-4 w-4 text-[#9C6580]" aria-hidden="true" />
                <span className="sr-only">Volume</span>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={volume}
                  onChange={(e) => onVolumeChange(Number(e.target.value))}
                  aria-label="Music volume"
                  className="w-24 cursor-pointer accent-[#9C6580]"
                />
              </label>
            </div>
          </div>

          {/* Track List */}
          <div className="flex flex-col justify-center space-y-2 border-t border-[#E8C2D4]/60 pt-5 md:col-span-6 md:border-t-0 md:border-l md:pt-0 md:pl-6">
            {tracks.map((track, idx) => {
              const active = idx === currentTrackIndex;
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => onSelectTrack(idx)}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-left transition-colors ${
                    active
                      ? 'bg-[#FCE7F0] text-[#3B1E2D]'
                      : 'bg-transparent text-[#6E4A5D] hover:bg-[#FFF6EF]'
                  }`}
                >
                  <div className="min-w-0 pr-3">
                    <p className="truncate text-sm font-medium text-[#3B1E2D]">
                      <span className="mr-2 text-xs text-[#9C6580] tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {track.title}
                    </p>
                    <p className="truncate text-xs text-[#6E4A5D]">{track.subtitle}</p>
                  </div>
                  <span className="shrink-0 text-xs text-[#6E4A5D] tabular-nums">
                    {formatTime(track.durationSec)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
