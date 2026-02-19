import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Layers, Zap, Globe } from 'lucide-react';
import { useRef } from 'react';

export function AgnosticPlatformSection() {
  const { ref, isInView } = useInView();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  const platforms = [
    { icon: Layers, label: 'Multi-Platform', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, label: 'High Performance', color: 'from-yellow-500 to-orange-500' },
    { icon: Globe, label: 'Global Reach', color: 'from-green-500 to-blue-500' },
  ];

  return (
    <div ref={sectionRef} className="size-full flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div ref={ref} className="container mx-auto px-8 flex flex-col items-center justify-center gap-12 relative z-10">
        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-['Poppins',sans-serif] font-bold text-6xl mb-4 text-white">
            Agnostic Platform
          </h2>
          <p className="font-['Poppins',sans-serif] text-xl text-[#efefef] leading-relaxed">
            Works seamlessly across any infrastructure and technology stack
          </p>
        </motion.div>

        {/* Center - Lottie/Video Placeholder */}
        <motion.div
          style={{ scale, y }}
          className="w-full max-w-3xl"
        >
          <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border-2 border-purple-400/30 rounded-3xl flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={isInView ? {
                    scale: [1, 2, 1],
                    opacity: [0.2, 0.5, 0.2],
                    rotate: [0, 180, 360],
                  } : {}}
                  transition={{
                    duration: 6,
                    delay: i * 2,
                    repeat: Infinity,
                  }}
                  className="absolute size-32 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-2xl"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
            </div>
            <div className="relative z-10 text-center p-8">
              <div className="text-6xl mb-4">⚡</div>
              <p className="text-white/60 text-sm">Platform Architecture Animation</p>
              <p className="text-white/40 text-xs mt-2">Lottie/Video Placeholder</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom - Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-full flex flex-col items-center justify-center">
                  <div className={`bg-gradient-to-br ${platform.color} p-3 rounded-full mb-3`}>
                    <Icon className="size-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center">
                    {platform.label}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
