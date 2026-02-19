import { motion } from 'motion/react';
import { useAudio } from '../contexts/AudioContext';

export function AudioIndicator() {
  const { currentPlayingSection, isMuted } = useAudio();

  if (isMuted || !currentPlayingSection) return null;

  return (
    <div className="fixed top-6 left-6 z-50 rounded-lg px-4 py-2 flex items-center gap-3">
      {/* Audio wave animation */}
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-1 bg-green-400 rounded-full"
            animate={{
              height: ['8px', '16px', '8px'],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      
      {/* <div className="text-sm text-white/80">
        <span className="font-semibold">Voiceover</span> 
      </div> */}
    </div>
  );
}
