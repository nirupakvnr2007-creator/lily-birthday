import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BirthdayNewspaper } from './components/BirthdayNewspaper.tsx';
import { BirthdayPlaylist } from './components/BirthdayPlaylist.tsx';
import { ConversationCorner } from './components/ConversationCorner.tsx';
import { FriendshipAwards } from './components/FriendshipAwards.tsx';
import { FriendshipQuiz } from './components/FriendshipQuiz.tsx';
import { FriendshipTimeline } from './components/FriendshipTimeline.tsx';
import { GiftBoxReveal } from './components/GiftBoxReveal.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { LilysUniverse } from './components/LilysUniverse.tsx';
import { LockScreen } from './components/LockScreen.tsx';
import { MainLetterAndFinale } from './components/MainLetterAndFinale.tsx';
import { PolaroidMuseum } from './components/PolaroidMuseum.tsx';
import { TimeCapsule } from './components/TimeCapsule.tsx';
import { TopNav } from './components/TopNav.tsx';
import type { ProtectedBirthdayContent } from './types/birthday.ts';
import { SoftMusicEngine } from './utils/musicEngine.ts';

type AppStage = 'checking' | 'locked' | 'gift' | 'world';

export default function App() {
  const [stage, setStage] = useState<AppStage>('checking');
  const [cooldownRemaining, setCooldownRemaining] = useState(0);
  const [content, setContent] = useState<ProtectedBirthdayContent | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Music player state (never autoplays)
  const engineRef = useRef<SoftMusicEngine | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedSec, setElapsedSec] = useState(0);
  const [volume, setVolume] = useState(0.55);

  const fetchProtectedContent = useCallback(async (goStraightToWorld = false) => {
    setLoadError(null);
    try {
      const res = await fetch('/api/content', { credentials: 'same-origin' });
      if (res.status === 401) {
        setStage('locked');
        return;
      }
      if (!res.ok) {
        throw new Error('Failed to load birthday content');
      }
      const data = (await res.json()) as ProtectedBirthdayContent;
      setContent(data);
      setStage(goStraightToWorld ? 'world' : 'gift');
    } catch {
      setLoadError('Unable to load your birthday pages right now. Please refresh.');
    }
  }, []);

  useEffect(() => {
    let active = true;
    const checkSession = async () => {
      try {
        const res = await fetch('/api/auth/session', { credentials: 'same-origin' });
        const data = (await res.json()) as {
          authenticated?: boolean;
          cooldownRemaining?: number;
        };
        if (!active) return;
        if (typeof data.cooldownRemaining === 'number') {
          setCooldownRemaining(data.cooldownRemaining);
        }
        if (data.authenticated) {
          await fetchProtectedContent(true);
        } else {
          setStage('locked');
        }
      } catch {
        if (active) setStage('locked');
      }
    };
    void checkSession();
    return () => {
      active = false;
    };
  }, [fetchProtectedContent]);

  // Music engine lifecycle
  useEffect(() => {
    const engine = new SoftMusicEngine();
    engineRef.current = engine;
    const audioEl = new Audio();
    audioEl.preload = 'none';
    audioRef.current = audioEl;

    return () => {
      audioEl.pause();
      audioEl.src = '';
      audioRef.current = null;
      engine.destroy();
      engineRef.current = null;
    };
  }, []);

  const tracks = content?.playlist.tracks ?? [];

  const playTrackByIndex = useCallback(
    (idx: number, resetPosition: boolean) => {
      const track = tracks[idx];
      const engine = engineRef.current;
      const audioEl = audioRef.current;
      if (!track || !engine || !audioEl) return;

      engine.pause();
      audioEl.pause();

      if (track.hasAudioFile) {
        const targetSrc = `/api/media/audio/${track.id}`;
        if (!audioEl.src.endsWith(targetSrc)) {
          audioEl.src = targetSrc;
        }
        if (resetPosition) {
          audioEl.currentTime = 0;
        }
        audioEl.volume = volume;
        void audioEl.play().catch(() => {
          engine.setVolume(volume);
          engine.play(track.id, resetPosition);
        });
      } else {
        engine.setVolume(volume);
        engine.play(track.id, resetPosition);
      }
      setIsPlaying(true);
    },
    [tracks, volume],
  );

  const handleNextTrack = useCallback(() => {
    if (!tracks.length) return;
    const nextIdx = (trackIndex + 1) % tracks.length;
    setTrackIndex(nextIdx);
    setElapsedSec(0);
    if (isPlaying) {
      playTrackByIndex(nextIdx, true);
    }
  }, [isPlaying, playTrackByIndex, trackIndex, tracks.length]);

  useEffect(() => {
    const engine = engineRef.current;
    const audioEl = audioRef.current;
    if (!engine || !audioEl) return;

    const advanceTrack = () => {
      if (!tracks.length) return;
      const nextIdx = (trackIndex + 1) % tracks.length;
      setTrackIndex(nextIdx);
      setElapsedSec(0);
      playTrackByIndex(nextIdx, true);
    };

    engine.setCallbacks((sec) => setElapsedSec(sec), advanceTrack);

    const onTimeUpdate = () => setElapsedSec(audioEl.currentTime);
    const onEnded = () => advanceTrack();
    audioEl.addEventListener('timeupdate', onTimeUpdate);
    audioEl.addEventListener('ended', onEnded);
    return () => {
      audioEl.removeEventListener('timeupdate', onTimeUpdate);
      audioEl.removeEventListener('ended', onEnded);
    };
  }, [playTrackByIndex, trackIndex, tracks.length]);

  const handleTogglePlay = () => {
    const engine = engineRef.current;
    const audioEl = audioRef.current;
    if (!engine || !audioEl || !tracks[trackIndex]) return;

    if (isPlaying) {
      engine.pause();
      audioEl.pause();
      setIsPlaying(false);
    } else {
      playTrackByIndex(trackIndex, false);
    }
  };

  const handleSelectTrack = (idx: number) => {
    if (!tracks[idx]) return;
    setTrackIndex(idx);
    setElapsedSec(0);
    playTrackByIndex(idx, true);
  };

  const handlePrevTrack = () => {
    if (!tracks.length) return;
    const prevIdx = (trackIndex - 1 + tracks.length) % tracks.length;
    setTrackIndex(prevIdx);
    setElapsedSec(0);
    if (isPlaying) {
      playTrackByIndex(prevIdx, true);
    }
  };

  const handleSeek = (sec: number) => {
    setElapsedSec(sec);
    const track = tracks[trackIndex];
    if (track?.hasAudioFile && audioRef.current) {
      audioRef.current.currentTime = sec;
    } else {
      engineRef.current?.seek(sec);
    }
  };

  const handleVolumeChange = (nextVol: number) => {
    setVolume(nextVol);
    engineRef.current?.setVolume(nextVol);
    if (audioRef.current) {
      audioRef.current.volume = nextVol;
    }
  };

  const handleCutCake = () => {
    // Play Track 1 ("Hard For Me" – Michele Morrone) when the cake is cut
    if (!tracks.length) return;
    setTrackIndex(0);
    setElapsedSec(0);
    playTrackByIndex(0, true);
  };

  const handleRelock = async () => {
    engineRef.current?.pause();
    audioRef.current?.pause();
    setIsPlaying(false);
    setContent(null);
    await fetch('/api/auth/lock', { method: 'POST', credentials: 'same-origin' });
    setStage('locked');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  if (stage === 'checking') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FCE7F0] text-sm text-[#6E4A5D]">
        Opening Lily&apos;s little world...
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#FCE7F0] px-4 text-center">
        <p className="text-sm text-[#3B1E2D]">{loadError}</p>
        <button
          type="button"
          onClick={() => void fetchProtectedContent(true)}
          className="cursor-pointer rounded-xl bg-[#9C6580] px-5 py-2.5 text-xs font-medium text-white"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (stage === 'locked' || !content) {
    return (
      <LockScreen
        initialCooldownSeconds={cooldownRemaining}
        onUnlocked={() => void fetchProtectedContent(false)}
      />
    );
  }

  if (stage === 'gift') {
    return (
      <GiftBoxReveal
        giftMessage={content.giftMessage}
        onEnterWorld={() => {
          setStage('world');
          window.scrollTo({ top: 0, behavior: 'auto' });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF6EF] text-[#3B1E2D]">
      <TopNav isPlayingMusic={isPlaying} onToggleMusic={handleTogglePlay} />

      <main>
        <HeroSection heading={content.heroHeading} subheading={content.heroSubheading} />

        <FriendshipTimeline chapters={content.timeline} />

        <PolaroidMuseum polaroid={content.polaroid} />

        <FriendshipAwards awards={content.awards} />

        <ConversationCorner
          title={content.conversation.title}
          disclaimer={content.conversation.disclaimer}
          contactName={content.conversation.contactName}
          contactSubtitle={content.conversation.contactSubtitle}
          stageNote={content.conversation.stageNote}
          initialMessages={content.conversation.messages}
          replyOptions={content.conversation.replyOptions}
        />

        <TimeCapsule
          title={content.timeCapsule.title}
          salutation={content.timeCapsule.salutation}
          paragraphs={content.timeCapsule.paragraphs}
          signOff={content.timeCapsule.signOff}
        />

        <FriendshipQuiz
          title={content.quiz.title}
          subtitle={content.quiz.subtitle}
          questions={content.quiz.questions}
          closingMessage={content.quiz.closingMessage}
        />

        <BirthdayPlaylist
          title={content.playlist.title}
          subtitle={content.playlist.subtitle}
          tracks={content.playlist.tracks}
          currentTrackIndex={trackIndex}
          isPlaying={isPlaying}
          elapsedSec={elapsedSec}
          volume={volume}
          onTogglePlay={handleTogglePlay}
          onSelectTrack={handleSelectTrack}
          onPrev={handlePrevTrack}
          onNext={handleNextTrack}
          onSeek={handleSeek}
          onVolumeChange={handleVolumeChange}
        />

        <LilysUniverse
          title={content.universe.title}
          subtitle={content.universe.subtitle}
          messages={content.universe.messages}
        />

        <BirthdayNewspaper newspaper={content.newspaper} />

        <MainLetterAndFinale
          letterTitle={content.letter.title}
          letterSubtitle={content.letter.subtitle}
          chapters={content.letter.chapters}
          finale={content.finale}
          polaroid={content.polaroid}
          onCutCake={handleCutCake}
          onRelock={() => void handleRelock()}
        />
      </main>
    </div>
  );
}
