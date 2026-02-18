import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { BarChart3, DollarSign, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

export function YieldOptimizationSection() {
  const { ref, isInView } = useInView();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const metrics = [
    { value: '45%', label: 'Revenue Increase', icon: DollarSign },
    { value: '2.3x', label: 'ROI Improvement', icon: TrendingUp },
    { value: '89%', label: 'Fill Rate', icon: BarChart3 },
  ];

  return (
    <div ref={sectionRef} className="size-full flex items-center justify-center relative overflow-hidden">
      {/* Animated wave background */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <motion.path
          d="M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z"
          fill="url(#waveGradient1)"
          initial={{ d: "M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z" }}
          animate={isInView ? {
            d: [
              "M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z",
              "M0,500 Q250,600 500,500 T1000,500 L1000,1000 L0,1000 Z",
              "M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z",
            ],
          } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      <div ref={ref} className="container mx-auto px-8 flex items-center justify-between gap-16 relative z-10">
        {/* Left Placeholder - Lottie/Video */}
        <motion.div
          style={{ y, opacity }}
          className="flex-1 max-w-xl"
        >
          <div className="aspect-square bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm border-2 border-green-400/30 rounded-3xl flex items-center justify-center relative overflow-hidden">
            {/* Animated chart visualization */}
            <div className="absolute inset-0 flex items-end justify-around p-8 gap-2">
              {[65, 82, 78, 95, 88, 92].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${height}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="flex-1 bg-gradient-to-t from-green-500/50 to-blue-500/50 rounded-t-lg"
                />
              ))}
            </div>
            <div className="relative z-10 text-center p-8">
              <div className="text-6xl mb-4">📈</div>
              <p className="text-white/60 text-sm">Yield Optimization Data</p>
              <p className="text-white/40 text-xs mt-2">Lottie/Video Placeholder</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['Poppins',sans-serif] font-bold text-6xl mb-6 text-white">
              Yield Optimization
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-['Poppins',sans-serif] text-xl text-[#efefef] leading-relaxed mb-8">
              Maximize revenue with intelligent optimization algorithms
            </p>
          </motion.div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
                >
                  <Icon className="size-8 text-green-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-1 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <p className="text-xs text-gray-300">{metric.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
