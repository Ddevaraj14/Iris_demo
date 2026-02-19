import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

export function IntroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div ref={sectionRef} className="size-full flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 0.3, scale: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"
      />

      <div className="container mx-auto px-8 flex items-center justify-between gap-16 relative z-10">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-['Poppins',sans-serif] font-bold text-7xl mb-6 text-white">
              Welcome to Iris
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="font-['Poppins',sans-serif] text-2xl text-[#efefef] leading-relaxed mb-8">
              Advanced addressable advertising technology that bridges linear and digital environments
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30">
              <p className="text-lg text-blue-300">Scroll to explore</p>
            </div>
          </motion.div>
        </div>

        {/* Right Placeholder - Lottie/Video */}
        <motion.div
          style={{ scale, opacity, rotate }}
          className="flex-1 max-w-xl"
        >
          <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-2 border-blue-400/30 rounded-3xl flex items-center justify-center relative overflow-hidden">
            {/* Placeholder for Lottie/Video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="size-64 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-3xl"
              />
            </div>
            <div className="relative z-10 text-center p-8">
              <div className="text-6xl mb-4">🎬</div>
              <p className="text-white/60 text-sm">Lottie Animation / Video Placeholder</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={isVisible ? { 
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            y: [-20, -100],
          } : {}}
          transition={{
            duration: 3,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute size-2 bg-cyan-400 rounded-full"
          style={{
            left: `${20 + i * 12}%`,
            bottom: '20%',
          }}
        />
      ))}
    </div>
  );
}
