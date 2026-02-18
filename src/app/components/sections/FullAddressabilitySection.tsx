import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { useRef } from 'react';

export function FullAddressabilitySection() {
  const { ref, isInView } = useInView();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -45]);

  return (
    <div ref={sectionRef} className="size-full flex items-center justify-center relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-8 flex items-center justify-between gap-16 relative z-10">
        {/* Left Placeholder - Lottie/Video */}
        <motion.div
          style={{ x, scale, rotateY }}
          className="flex-1 max-w-xl"
        >
          <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border-2 border-cyan-400/30 rounded-3xl flex items-center justify-center relative overflow-hidden">
            {/* Placeholder for Lottie/Video */}
            <div className="absolute inset-0">
              <motion.div
                animate={isInView ? {
                  background: [
                    'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                  ]
                } : {}}
                transition={{ duration: 5, repeat: Infinity }}
                className="size-full"
              />
            </div>
            <div className="relative z-10 text-center p-8">
              <div className="text-6xl mb-4">🔗</div>
              <p className="text-white/60 text-sm">Linear & Digital Bridge</p>
              <p className="text-white/40 text-xs mt-2">Lottie/Video Placeholder</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-['Poppins',sans-serif] font-bold text-6xl mb-6 text-white">
              Full Addressability
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="font-['Poppins',sans-serif] text-xl text-[#efefef] leading-relaxed mb-8">
              Iris bridges linear and digital environments, unifying your ad experience while maintaining the ability to deliver at scale.
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { title: 'Linear & Digital', delay: 0.6 },
              { title: 'Unified Experience', delay: 0.8 },
              { title: 'Scale Delivery', delay: 1.0 },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-4"
              >
                <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
