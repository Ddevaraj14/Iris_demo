import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

export function AudioControl() {
  const { isMuted, toggleMute } = useAudio();

  return (
    <button
      onClick={toggleMute}
      className="fixed top-6 right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg p-3 transition-all duration-300 hover:scale-110"
      aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
    >
      {isMuted ? (
        <VolumeX className="size-6 text-white" />
      ) : (
        <Volume2 className="size-6 text-white" />
      )}
    </button>
  );
}
