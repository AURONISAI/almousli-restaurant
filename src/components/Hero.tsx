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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://wolt.com/sv/swe/eskilstuna/restaurant/almousli"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-damascus hover:bg-damascus/90 text-jasmine px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-gold/50 transition-all duration-300 flex items-center gap-3 border-2 border-gold/30 hover:border-gold transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
            {t('orderWolt')}
          </a>

          <a
            href="https://www.foodora.se/restaurant/almousli"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-spice hover:bg-spice/90 text-jasmine px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-gold/50 transition-all duration-300 flex items-center gap-3 border-2 border-gold/30 hover:border-gold transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
            {t('orderFoodora')}
          </a>

          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-gold/50 transition-all duration-300 flex items-center gap-3 border-2 border-gold/30 hover:border-gold transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z" />
            </svg>
            {t('callWhatsApp')}
          </a>
        </motion.div>

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
