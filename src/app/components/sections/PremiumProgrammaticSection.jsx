import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Award, Shield, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export function PremiumProgrammaticSection() {
  const { ref, isInView } = useInView();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const benefits = [
    { icon: Award, label: 'Premium Inventory' },
    { icon: Shield, label: 'Brand Safety' },
    { icon: Sparkles, label: 'Quality Assurance' },
  ];

  return (
    <div ref={sectionRef} className="size-full flex items-center justify-center relative overflow-hidden">
      {/* Luxury gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-amber-600/30 via-yellow-600/20 to-orange-600/30"
      />

      {/* Animated particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? {
            opacity: [0, 1, 0],
            y: [100, -100],
            x: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50],
          } : {}}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
          className="absolute size-1 bg-yellow-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: 0,
          }}
        />
      ))}

      <div ref={ref} className="container mx-auto px-8 flex items-center justify-between gap-16 relative z-10">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={isInView ? { rotate: [0, 5, -5, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-4"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider">
                Premium
              </div>
            </motion.div>
            <h2 className="font-['Poppins',sans-serif] font-bold text-6xl mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Premium Programmatic
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-['Poppins',sans-serif] text-xl text-[#efefef] leading-relaxed mb-8">
              Access exclusive inventory with guaranteed quality
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="grid grid-cols-3 gap-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-4 h-full flex flex-col items-center justify-center">
                    <Icon className="size-8 text-yellow-400 mb-2" />
                    <p className="text-xs font-semibold text-white text-center">{benefit.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Placeholder - Lottie/Video */}
        <motion.div
          style={{ scale, rotate }}
          className="flex-1 max-w-xl"
        >
          <div className="aspect-square bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border-2 border-yellow-400/30 rounded-3xl flex items-center justify-center relative overflow-hidden">
            {/* Glowing orb animation */}
            <motion.div
              animate={isInView ? { 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              } : {}}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="size-48 rounded-full bg-gradient-to-br from-yellow-400/40 to-orange-400/40 blur-3xl" />
            </motion.div>
            <div className="relative z-10 text-center p-8">
              <div className="text-6xl mb-4">✨</div>
              <p className="text-white/60 text-sm">Premium Content Showcase</p>
              <p className="text-white/40 text-xs mt-2">Lottie/Video Placeholder</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
