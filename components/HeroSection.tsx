'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  '/images/slides/slide-1.png',
  '/images/slides/slide-2.png'
];

export default function HeroSection() {
  const t = useTranslations('Hero');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-base-lighter to-background dark:from-bg-secondary dark:to-background"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* TEXT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 text-center lg:text-left z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-base-dark-2 dark:text-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
              <Link 
                href="#project"
                className="px-8 py-4 bg-brand-red text-white rounded-xl font-semibold text-lg hover:bg-red-700 transition-all hover:-translate-y-1 shadow-lg shadow-brand-red/20 text-center"
              >
                {t('getStarted')}
              </Link>
              <Link 
                href="#contact"
                className="px-8 py-4 bg-transparent text-brand-red border-2 border-brand-red rounded-xl font-semibold text-lg hover:bg-brand-red hover:text-white transition-all hover:-translate-y-1 text-center"
              >
                {t('learnMore')}
              </Link>
            </div>
          </motion.div>

          {/* VISUAL / SLIDER */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[4/3] max-w-2xl mx-auto"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  priority={currentSlide === 0}
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Slider Dots */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentSlide ? 'bg-brand-red w-6' : 'bg-base-light-gray hover:bg-base-gray'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
