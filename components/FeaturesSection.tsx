'use client';

import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';
import { Check, Ticket, Gift, MapPin, CreditCard } from 'lucide-react';

export default function FeaturesSection() {
  const t = useTranslations('Features');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const features = [
    {
      icon: <Ticket className="w-8 h-8 text-white" />,
      title: t('travelPassTitle'),
      desc: t('travelPassDesc'),
      bg: 'bg-brand-red'
    },
    {
      icon: <Gift className="w-8 h-8 text-white" />,
      title: t('rewardPointsTitle'),
      desc: t('rewardPointsDesc'),
      bg: 'bg-brand-green'
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: t('tourismTitle'),
      desc: t('tourismDesc'),
      bg: 'bg-brand-red'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-white" />,
      title: t('paymentTitle'),
      desc: t('paymentDesc'),
      bg: 'bg-brand-green'
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Benefits List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-6"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-foreground">
              {t('keyBenefits')}
            </motion.h3>
            
            <ul className="flex flex-col gap-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.li 
                  key={num} 
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-base-dark-2 dark:text-text-muted text-lg leading-relaxed">
                    {t(`benefit${num}` as any)}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-base-lighter dark:bg-card-bg p-8 rounded-2xl text-center border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-black/40 group"
              >
                <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feature.bg}`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
