import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { INVITATION_CONFIG } from '../config/invitationConfig';

export interface MusicPlayerRef {
  playMusic: () => void;
  pauseMusic: () => void;
}

const resolveAudioUrl = (rawUrl: string) => {
  if (!rawUrl) return '';
  // If Vite already resolved the asset import (starts with blob:, data:, http, or ./assets / /assets)
  if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://') || rawUrl.startsWith('data:') || rawUrl.startsWith('blob:')) {
    return rawUrl;
  }
  if (rawUrl.startsWith('./') || rawUrl.startsWith('assets/')) {
    return rawUrl;
  }
  const metaEnv = (import.meta as unknown as { env?: { BASE_URL?: string } }).env;
  const baseUrl = metaEnv?.BASE_URL || './';
  const cleanPath = rawUrl.startsWith('/') ? rawUrl.slice(1) : rawUrl;
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
};

export const MusicPlayer = forwardRef<MusicPlayerRef, { autoPlayRequested?: boolean }>(
  ({ autoPlayRequested }, ref) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [audioError, setAudioError] = useState(false);

    const resolvedAudioSrc = resolveAudioUrl(INVITATION_CONFIG.music.url);

    const attemptPlay = () => {
      if (!audioRef.current) return;
      setAudioError(false);
      audioRef.current.volume = 1.0;

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
            setAudioError(false);
          })
          .catch((err) => {
            console.warn('Audio play request failed:', err);
            if (audioRef.current) {
              audioRef.current.load();
              audioRef.current
                .play()
                .then(() => {
                  setIsPlaying(true);
                  setHasInteracted(true);
                  setAudioError(false);
                })
                .catch(() => {
                  setAudioError(true);
                });
            }
          });
      }
    };

    useImperativeHandle(ref, () => ({
      playMusic: () => {
        attemptPlay();
      },
      pauseMusic: () => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      },
    }));

    useEffect(() => {
      if (autoPlayRequested && !isPlaying && !hasInteracted) {
        attemptPlay();
      }
    }, [autoPlayRequested, isPlaying, hasInteracted]);

    // Attach global user gesture listener to unlock audio on mobile
    useEffect(() => {
      const handleFirstGesture = () => {
        if (!hasInteracted && audioRef.current && audioRef.current.paused) {
          attemptPlay();
        }
      };

      window.addEventListener('pointerdown', handleFirstGesture, { once: true });
      window.addEventListener('touchstart', handleFirstGesture, { once: true });
      window.addEventListener('click', handleFirstGesture, { once: true });

      return () => {
        window.removeEventListener('pointerdown', handleFirstGesture);
        window.removeEventListener('touchstart', handleFirstGesture);
        window.removeEventListener('click', handleFirstGesture);
      };
    }, [hasInteracted]);

    const togglePlay = () => {
      if (!audioRef.current) return;
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        attemptPlay();
      }
    };

    return (
      <div className="fixed bottom-5 right-5 z-50 flex items-center space-x-2">
        <audio
          ref={audioRef}
          src={resolvedAudioSrc}
          loop
          preload="auto"
          onError={(e) => {
            console.warn('Audio source load error for path:', resolvedAudioSrc, e);
            setAudioError(true);
          }}
        />

        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Musiqini söndür" : "Musiqini qoş"}
          className="group relative flex items-center space-x-2 px-3.5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-gold-300/60 shadow-lg hover:shadow-xl transition-all duration-300 text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          {/* Animated Equalizer Bars when Playing */}
          {isPlaying ? (
            <div className="flex items-end space-x-0.5 h-4 w-4">
              <span className="w-1 bg-gold-600 rounded-full animate-[bounce_1s_infinite_100ms]" style={{ height: '60%' }} />
              <span className="w-1 bg-gold-600 rounded-full animate-[bounce_1s_infinite_300ms]" style={{ height: '100%' }} />
              <span className="w-1 bg-gold-600 rounded-full animate-[bounce_1s_infinite_200ms]" style={{ height: '40%' }} />
            </div>
          ) : (
            <VolumeX className="w-4 h-4 text-charcoal-soft group-hover:text-gold-600 transition-colors" />
          )}

          <span className="font-sans text-xs font-medium tracking-wider text-charcoal-muted hidden sm:inline">
            {isPlaying ? "Musiqi İfa Olunur" : "Musiqini Qoş"}
          </span>

          {/* Glowing dot indicator */}
          {isPlaying && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500" />
            </span>
          )}
        </button>
      </div>
    );
  }
);
