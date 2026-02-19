import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { useRef } from 'react';
import { Target, TrendingUp, Zap, Shield } from 'lucide-react';

export function ValuePropositionSection() {
  const { ref, isInView } = useInView();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const valueProps = [
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Reach the right audience at the right time with advanced targeting capabilities',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.2,
    },
    {
      icon: TrendingUp,
      title: 'Maximize Revenue',
      description: 'Optimize yield and increase monetization across all platforms',
      color: 'from-purple-500 to-pink-500',
      delay: 0.4,
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Real-time decisioning and instant campaign deployment',
      color: 'from-yellow-500 to-orange-500',
      delay: 0.6,
    },
    {
      icon: Shield,
      title: 'Enterprise Ready',
      description: 'Scalable, secure, and reliable infrastructure for mission-critical operations',
      color: 'from-green-500 to-emerald-500',
      delay: 0.8,
    },
  ];

  return (
    <div ref={sectionRef} className="size-full flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={isInView ? {
            background: [
              'radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            ]
          } : {}}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute size-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={isInView ? {
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            } : {}}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          style={{ y, opacity }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-['Poppins',sans-serif] font-bold text-7xl mb-6 text-white"
          >
            Value Proposition
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Poppins',sans-serif] text-2xl text-[#efefef] max-w-3xl mx-auto"
          >
            Transforming advertising technology with innovative solutions that drive results
          </motion.p>
        </motion.div>

        {/* Value Props Grid */}
        <motion.div 
          className="grid grid-cols-2 gap-8 max-w-6xl mx-auto"
          style={{ scale }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: prop.delay }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full overflow-hidden">
                {/* Hover gradient effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${prop.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${prop.color} mb-6`}
                >
                  <prop.icon className="size-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-['Poppins',sans-serif] text-2xl font-bold text-white mb-4">
                  {prop.title}
                </h3>
                
                <p className="font-['Poppins',sans-serif] text-base text-[#afafaf] leading-relaxed">
                  {prop.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${prop.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-lg text-white/60">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/40" />
            <span className="font-['Poppins',sans-serif]">Delivering measurable results</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/40" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
