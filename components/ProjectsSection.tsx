'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function ProjectsSection() {
  const t = useTranslations('Projects');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="project" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-text-muted">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Project 1 */}
          <motion.div 
            variants={cardVariants}
            className="flex flex-col sm:flex-row items-center gap-8 p-8 md:p-10 border-2 border-brand-red rounded-3xl bg-base-lighter dark:bg-card-bg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(243,65,59,0.3)] group"
          >
            <div className="relative w-32 h-32 md:w-36 md:h-36 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="/images/jogja-travel-pass.png" 
                alt="Jogja Travel Pass" 
                fill 
                className="object-contain" 
              />
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-2xl font-extrabold text-foreground mb-1">
                Jogja Travel Pass
              </h3>
              <span className="text-xl text-text-muted mb-6">
                Trans Jogja
              </span>
              
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <a 
                  href="https://apps.apple.com/id/app/trans-jogja/id1495791016" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <Image src="/images/appstore.png" alt="App Store" width={140} height={42} className="h-[42px] w-auto" />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=ngi.transjogja.apppublic&hl=id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <Image src="/images/playstore.png" alt="Google Play" width={140} height={42} className="h-[42px] w-auto" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            variants={cardVariants}
            className="flex flex-col sm:flex-row items-center gap-8 p-8 md:p-10 border-2 border-brand-red rounded-3xl bg-base-lighter dark:bg-card-bg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(243,65,59,0.3)] group"
          >
            <div className="relative w-32 h-32 md:w-36 md:h-36 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="/images/tmd-pass.png" 
                alt="TMD Pass" 
                fill 
                className="object-contain" 
              />
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-2xl font-extrabold text-foreground mb-1">
                TMD Pass
              </h3>
              <span className="text-xl text-text-muted mb-6">
                Trans Metro Dewata
              </span>
              
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <a 
                  href="https://apps.apple.com/id/app/trans-metro-dewata/id6744358191" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <Image src="/images/appstore.png" alt="App Store" width={140} height={42} className="h-[42px] w-auto" />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=ngi.muchi.bali&hl=id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <Image src="/images/playstore.png" alt="Google Play" width={140} height={42} className="h-[42px] w-auto" />
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
