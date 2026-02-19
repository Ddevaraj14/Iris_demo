import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Zap, Smartphone, Tv, Monitor } from 'lucide-react';
import { useRef } from 'react';

export function FlexibleDeliverySection() {
  const { ref, isInView } = useInView();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const platforms = [
    { icon: Tv, label: 'Smart TV', delay: 0.2 },
    { icon: Smartphone, label: 'Mobile', delay: 0.4 },
    { icon: Monitor, label: 'Desktop', delay: 0.6 },
    { icon: Zap, label: 'IoT Devices', delay: 0.8 },
  ];

  return (
    <div ref={sectionRef} className="size-full flex items-center justify-center relative overflow-hidden">
      {/* Dynamic grid background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="cyan"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2 }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated connections */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 1000">
        <motion.circle
          cx="500"
          cy="500"
          r="0"
          fill="none"
          stroke="cyan"
          strokeWidth="2"
          initial={{ r: 0, opacity: 0 }}
          animate={isInView ? { 
            r: [0, 300, 0],
            opacity: [0, 0.6, 0]
          } : {}}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.circle
          cx="500"
          cy="500"
          r="0"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          initial={{ r: 0, opacity: 0 }}
          animate={isInView ? { 
            r: [0, 300, 0],
            opacity: [0, 0.6, 0]
          } : {}}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>

      <div ref={ref} className="container mx-auto px-8 flex flex-col items-center justify-center gap-12 relative z-10">
        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-['Poppins',sans-serif] font-bold text-6xl mb-4 text-white">
            Flexible AD Delivery
          </h2>
          <p className="font-['Poppins',sans-serif] text-xl text-[#efefef] leading-relaxed">
            Seamless delivery across all platforms and devices
          </p>
        </motion.div>

        {/* Center - Lottie/Video Placeholder with Platform Icons */}
        <motion.div
          style={{ scale }}
          className="w-full max-w-4xl"
        >
          <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border-2 border-cyan-400/30 rounded-3xl flex items-center justify-center relative overflow-hidden">
            {/* Central hub */}
            <motion.div
              style={{ rotate }}
              className="absolute size-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50"
            >
              <Zap className="size-12 text-white" />
            </motion.div>

            {/* Orbiting platforms */}
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              const angle = (index / platforms.length) * 360;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: platform.delay }}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                    }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{ scale: 1.2 }}
                    className="bg-white/10 backdrop-blur-sm border border-cyan-400/50 rounded-xl p-4 flex flex-col items-center gap-2"
                  >
                    <Icon className="size-8 text-cyan-400" />
                    <p className="text-xs font-semibold text-white whitespace-nowrap">{platform.label}</p>
                  </motion.div>

                  {/* Connection line to center */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% - ${x}px)`}
                      y2={`calc(50% - ${y}px)`}
                      stroke="cyan"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                      transition={{ duration: 1, delay: platform.delay + 0.3 }}
                    />
                  </svg>
                </motion.div>
              );
            })}

            <div className="absolute bottom-8 text-center">
              <p className="text-white/40 text-xs">Lottie/Video Placeholder</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom feature text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-8 py-4">
            <p className="text-base text-cyan-300">
              Real-time optimization • Cross-platform sync • Unified reporting
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
