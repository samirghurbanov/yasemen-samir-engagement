import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { INVITATION_CONFIG } from '../config/invitationConfig';

export interface MusicPlayerRef {
  playMusic: () => void;
  pauseMusic: () => void;
}

export const MusicPlayer = forwardRef<MusicPlayerRef, { autoPlayRequested?: boolean }>(
  ({ autoPlayRequested }, ref) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [audioError, setAudioError] = useState(false);

    useImperativeHandle(ref, () => ({
      playMusic: () => {
        if (audioRef.current && !audioError) {
          audioRef.current
            .play()
            .then(() => {
              setIsPlaying(true);
              setHasInteracted(true);
            })
            .catch((err) => {
              console.log('Audio autoplay prevented by browser gesture requirement:', err);
            });
        }
      },
      pauseMusic: () => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      },
    }));

    useEffect(() => {
      if (autoPlayRequested && !isPlaying && !hasInteracted && audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch(() => {});
      }
    }, [autoPlayRequested, isPlaying, hasInteracted]);

    const togglePlay = () => {
      if (!audioRef.current) return;
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
            setAudioError(false);
          })
          .catch((err) => {
            console.error('Audio playback error:', err);
            setAudioError(true);
          });
      }
    };

    return (
      <div className="fixed bottom-5 right-5 z-50 flex items-center space-x-2">
        <audio
          ref={audioRef}
          src={INVITATION_CONFIG.music.url}
          loop
          preload="auto"
          onError={() => setAudioError(true)}
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
