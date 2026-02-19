import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Calendar, Target, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

export function CampaignManagementSection() {
  const { ref, isInView } = useInView();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-45, 0, 45]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);

  const steps = [
    { icon: Calendar, title: 'Plan', description: 'Strategic campaign planning' },
    { icon: Target, title: 'Execute', description: 'Precision targeting' },
    { icon: TrendingUp, title: 'Optimize', description: 'Real-time adjustments' },
  ];

  return (
    <div ref={sectionRef} className="size-full flex items-center justify-center relative overflow-hidden">
      {/* Radial gradient background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.3, scale: 1.2 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-radial from-purple-600/20 via-transparent to-transparent"
      />

      <div ref={ref} className="container mx-auto px-8 flex items-center justify-between gap-16 relative z-10">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['Poppins',sans-serif] font-bold text-6xl mb-6 text-white">
              Streamlined Campaign Management
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-['Poppins',sans-serif] text-xl text-[#efefef] leading-relaxed mb-8">
              Simplify complex workflows with intuitive tools
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-gradient-to-r from-purple-500/10 to-transparent backdrop-blur-sm border border-purple-400/20 rounded-xl p-4"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full">
                    <Icon className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="text-sm text-gray-300">{step.description}</p>
                  </div>
                  <div className="ml-auto size-8 bg-white/10 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Placeholder - Lottie/Video */}
        <motion.div
          style={{ rotate, scale }}
          className="flex-1 max-w-xl"
        >
          <div className="aspect-square bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-2 border-purple-400/30 rounded-3xl flex items-center justify-center relative overflow-hidden">
            {/* Animated circles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={isInView ? { 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360]
                } : {}}
                transition={{
                  duration: 4,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
                className="absolute border-2 border-purple-400/50 rounded-full"
                style={{
                  width: `${100 + i * 60}px`,
                  height: `${100 + i * 60}px`,
                }}
              />
            ))}
            <div className="relative z-10 text-center p-8">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-white/60 text-sm">Campaign Workflow Animation</p>
              <p className="text-white/40 text-xs mt-2">Lottie/Video Placeholder</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
