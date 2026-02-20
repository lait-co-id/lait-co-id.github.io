'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MOCK_PARTNERS_COUNT = 10;
const partners = Array.from({ length: MOCK_PARTNERS_COUNT }, (_, i) => `/images/partners/${i + 1}.png`);

export default function PartnersSection() {
  const t = useTranslations('Partners');

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 mb-12 lg:mb-16 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-text-muted">
            {t('subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Infinite Carousel using CSS Animation */}
      <div className="w-full relative py-8">
        {/* Gradient Fades for Smooth Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-fit animate-scroll hover:[animation-play-state:paused] items-center gap-12 md:gap-20 px-6">
          {/* First Set */}
          {partners.map((src, i) => (
            <div key={`set1-${i}`} className="relative h-12 md:h-16 lg:h-20 w-32 md:w-40 flex-shrink-0 group">
              <Image
                src={src}
                alt={`Partner ${i + 1}`}
                fill
                className="object-contain filter grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          ))}
          {/* Second Set (Duplicate for smooth loop) */}
          {partners.map((src, i) => (
            <div key={`set2-${i}`} className="relative h-12 md:h-16 lg:h-20 w-32 md:w-40 flex-shrink-0 group">
              <Image
                src={src}
                alt={`Partner ${i + 1} dupe`}
                fill
                className="object-contain filter grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
