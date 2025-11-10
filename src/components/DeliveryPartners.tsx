'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const deliveryPartners = [
  {
    name: 'Wolt',
    url: 'https://wolt.com/sv/swe/eskilstuna/restaurant/almousli',
    color: '#00c2e8',
    logo: 'W',
  },
  {
    name: 'Foodora',
    url: 'https://www.foodora.se/restaurant/almousli',
    color: '#d61c5c',
    logo: 'F',
  },
  {
    name: 'Uber Eats',
    url: 'https://www.ubereats.com/se/store/almousli',
    color: '#06c167',
    logo: 'U',
  },
];

export default function DeliveryPartners() {
  const t = useTranslations('delivery');

  return (
    <section className="section-padding bg-charcoal">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-lalezar text-gold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-cream font-cairo">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliveryPartners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold"
                style={{ backgroundColor: partner.color }}
              >
                {partner.logo}
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-2">
                {partner.name}
              </h3>
              <div className="mt-4 text-spice font-semibold group-hover:text-gold transition-colors">
                {t('orderNow')} →
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            className="btn-secondary inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="font-cairo">{t('callDirect')}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
