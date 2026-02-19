import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Brain, Users, LineChart } from 'lucide-react';
import { useRef } from 'react';

export function AudienceIntelligenceSection() {
  const { ref, isInView } = useInView();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);

  const features = [
    { 
      icon: Brain, 
      title: 'AI-Powered Insights', 
      description: 'Machine learning algorithms analyze audience behavior patterns',
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      icon: Users, 
      title: 'Audience Segmentation', 
      description: 'Precise targeting based on demographic and behavioral data',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: LineChart, 
      title: 'Predictive Forecasting', 
      description: 'Anticipate trends and optimize campaign performance',
      color: 'from-pink-500 to-red-500'
    },
  ];

  return (
    <div ref={sectionRef} className="size-full flex items-center justify-center relative overflow-hidden">
      {/* Neural network background */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
        {[...Array(20)].map((_, i) => {
          const x1 = Math.random() * 1000;
          const y1 = Math.random() * 1000;
          const x2 = Math.random() * 1000;
          const y2 = Math.random() * 1000;
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#6366f1"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { 
                pathLength: [0, 1, 0],
                opacity: [0, 0.5, 0]
              } : {}}
              transition={{ duration: 4, delay: i * 0.2, repeat: Infinity }}
            />
          );
        })}
      </svg>

      <div ref={ref} className="container mx-auto px-8 flex flex-col items-center justify-center gap-12 relative z-10">
        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-['Poppins',sans-serif] font-bold text-6xl mb-4 text-white">
            Audience Intelligence
          </h2>
          <p className="font-['Poppins',sans-serif] text-xl text-[#efefef] leading-relaxed">
            Deep insights and forecasting powered by advanced analytics
          </p>
        </motion.div>

        {/* Center - Lottie/Video Placeholder */}
        <motion.div
          style={{ scale, rotateX }}
          className="w-full max-w-2xl"
        >
          <div className="aspect-video bg-gradient-to-br from-indigo-500/10 to-pink-500/10 backdrop-blur-sm border-2 border-indigo-400/30 rounded-3xl flex items-center justify-center relative overflow-hidden">
            {/* Neural network animation */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={isInView ? {
                    scale: [0, 1.5, 0],
                    opacity: [0, 0.6, 0],
                  } : {}}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                  className="absolute size-24 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-xl"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${20 + (i % 2) * 40}%`,
                  }}
                />
              ))}
            </div>
            <div className="relative z-10 text-center p-8">
              <div className="text-6xl mb-4">🧠</div>
              <p className="text-white/60 text-sm">AI Analytics Visualization</p>
              <p className="text-white/40 text-xs mt-2">Lottie/Video Placeholder</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom - Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className={`bg-gradient-to-br ${feature.color} p-3 rounded-xl inline-block mb-3`}>
                  <Icon className="size-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
