'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

const dishes = [
  {
    key: 'shawarma',
    image: '/images/placeholder.svg',
  },
  {
    key: 'kibbeh',
    image: '/images/placeholder.svg',
  },
  {
    key: 'fatteh',
    image: '/images/placeholder.svg',
  },
];

export default function SignatureDishes() {
  const t = useTranslations('signatureDishes');

  return (
    <section className="section-padding bg-jasmine relative overflow-hidden">
      {/* Damascus Pattern Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/images/damascus-pattern.svg)',
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="container-custom relative z-10">
        {/* Decorative Top Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <img 
            src="/images/arabic-ornament.svg" 
            alt="" 
            className="h-16 opacity-80"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-lalezar text-damascus text-center mb-4"
        >
          {t('title')}
        </motion.h2>

        {/* Subtitle with Damascus flair */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-0.5 bg-gold"></div>
            <span className="text-copper font-cairo text-lg">✦</span>
            <div className="w-12 h-0.5 bg-gold"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gold/20"
            >
              {/* Decorative top border */}
              <div className="h-1 bg-gradient-to-r from-damascus via-gold to-copper"></div>
              
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={t(`${dish.key}.title`)}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent"></div>
                
                {/* Halal badge with Damascus styling */}
                <div className="absolute top-4 right-4 bg-emerald text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <span className="text-lg">✦</span>
                  {t('halal')}
                </div>
              </div>
              
              <div className="p-6 relative">
                {/* Decorative element */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-damascus rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-gold text-2xl">✦</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-cairo font-bold text-damascus mb-3 mt-4 text-center">
                  {t(`${dish.key}.title`)}
                </h3>
                <p className="text-gray-600 font-sans leading-relaxed text-center">
                  {t(`${dish.key}.description`)}
                </p>
                
                {/* Decorative bottom line */}
                <div className="flex justify-center mt-4">
                  <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Bottom Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <img 
            src="/images/arabic-ornament.svg" 
            alt="" 
            className="h-16 opacity-80 transform rotate-180"
          />
        </motion.div>
      </div>
    </section>
  );
}
