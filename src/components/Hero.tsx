'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');
  const heroVideo = process.env.NEXT_PUBLIC_HERO_VIDEO;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Damascus Pattern Overlay */}
      <div 
        className="absolute inset-0 z-5 opacity-10"
        style={{
          backgroundImage: 'url(/images/damascus-pattern.svg)',
          backgroundSize: '300px 300px',
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Video Background */}
      {heroVideo && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero-poster.jpg"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Damascus Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-damascus/80 via-damascus/60 to-charcoal/90 z-20" />
      
      {/* Animated Gold Accents */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-32 h-32 border-2 border-gold rounded-full z-15 hidden md:block"
      />
      <motion.div
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-24 h-24 border-2 border-copper rounded-full z-15 hidden md:block"
      />

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-6xl">
        {/* Top Ornament */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-6"
        >
          <img 
            src="/images/arabic-ornament.svg" 
            alt="" 
            className="h-20 opacity-90"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-lalezar text-gold mb-4 leading-tight drop-shadow-2xl"
          style={{
            textShadow: '0 0 30px rgba(218, 165, 32, 0.5), 0 0 60px rgba(218, 165, 32, 0.3)'
          }}
        >
          {t('title')}
        </motion.h1>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center gap-4 mb-6"
        >
          <div className="w-16 h-0.5 bg-gold"></div>
          <span className="text-gold text-3xl">✦</span>
          <div className="w-16 h-0.5 bg-gold"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-jasmine mb-12 font-cairo drop-shadow-lg"
        >
          {t('subtitle')}
        </motion.p>

        {/* Bottom Ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <img 
            src="/images/arabic-ornament.svg" 
            alt="" 
            className="h-16 opacity-80 transform rotate-180"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gold rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gold rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
