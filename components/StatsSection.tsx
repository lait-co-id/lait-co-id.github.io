'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

function Counter({ from, to, duration = 2, suffix = '' }: { from: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function: easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const t = useTranslations('Stats');

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-br from-[#e60000] to-[#b30000] rounded-3xl p-10 md:p-14 shadow-2xl shadow-brand-red/20 mx-auto w-full max-w-7xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight flex">
                <Counter from={0} to={2} suffix="+" />
              </span>
              <span className="text-red-100 font-medium tracking-wide">
                {t('projects')}
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight flex">
                <Counter from={0} to={350} suffix="+" />
              </span>
              <span className="text-red-100 font-medium tracking-wide">
                {t('attractions')}
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight flex">
                <Counter from={0} to={10} suffix=" rb+" />
              </span>
              <span className="text-red-100 font-medium tracking-wide">
                {t('users')}
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight flex">
                24/7
              </span>
              <span className="text-red-100 font-medium tracking-wide">
                {t('support')}
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
