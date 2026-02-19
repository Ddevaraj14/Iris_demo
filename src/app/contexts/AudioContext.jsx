import { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';

const AudioContext = createContext(undefined);

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
}

// Audio file paths for each section - using base URL for GitHub Pages compatibility
const BASE_URL = import.meta.env.BASE_URL || '/';
const audioFiles = {
  'intro': `${BASE_URL}audio/intro.mp3`,
  'value-proposition': `${BASE_URL}audio/value-proposition.mp3`,
  'full-addressability': `${BASE_URL}audio/full-addressability.mp3`,
  'agnostic-platform': `${BASE_URL}audio/agnostic-platform.mp3`,
  'campaign-management': `${BASE_URL}audio/campaign-management.mp3`,
  'yield-optimization': `${BASE_URL}audio/yield-optimization.mp3`,
  'audience-intelligence': `${BASE_URL}audio/audience-intelligence.mp3`,
  'premium-programmatic': `${BASE_URL}audio/premium-programmatic.mp3`,
  'flexible-delivery': `${BASE_URL}audio/flexible-delivery.mp3`,
};

export function AudioProvider({ children }) {
  const [isMuted, setIsMuted] = useState(false);
  const [currentPlayingSection, setCurrentPlayingSection] = useState(null);
  const audioRef = useRef(null);
  const audioEndCallbackRef = useRef(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio();
    audioRef.current.volume = 0.7;

    // Handle audio end event
    const handleAudioEnd = () => {
      if (audioEndCallbackRef.current && !isMuted) {
        audioEndCallbackRef.current();
      }
      setCurrentPlayingSection(null);
    };

    audioRef.current.addEventListener('ended', handleAudioEnd);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleAudioEnd);
        audioRef.current.pause();
      }
    };
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const newMutedState = !prev;
      if (audioRef.current) {
        if (newMutedState) {
          audioRef.current.pause();
        } else if (currentPlayingSection) {
          audioRef.current.play().catch(() => {});
        }
      }
      return newMutedState;
    });
  }, [currentPlayingSection]);

  const playAudio = useCallback((sectionId) => {
    if (!audioRef.current || isMuted) return;

    // Stop current audio if playing
    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    // Set new audio source
    const audioSrc = audioFiles[sectionId];
    if (audioSrc) {
      audioRef.current.src = audioSrc;
      audioRef.current.play().catch((error) => {
        // Audio file doesn't exist or failed to load - use a timer fallback
        console.warn(`Audio file for ${sectionId} not found, using timer fallback`);
        // Simulate audio duration (5 seconds per section as fallback)
        setTimeout(() => {
          if (audioEndCallbackRef.current && !isMuted) {
            audioEndCallbackRef.current();
          }
          setCurrentPlayingSection(null);
        }, 5000);
      });
      setCurrentPlayingSection(sectionId);
    }
  }, [isMuted]);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setCurrentPlayingSection(null);
  }, []);

  const onAudioEnd = useCallback((callback) => {
    audioEndCallbackRef.current = callback;
  }, []);

  const removeAudioEndCallback = useCallback(() => {
    audioEndCallbackRef.current = null;
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isMuted,
        toggleMute,
        playAudio,
        stopAudio,
        currentPlayingSection,
        onAudioEnd,
        removeAudioEndCallback,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}