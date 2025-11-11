'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const deliveryPartners = [
  {
    name: 'Wolt',
    url: 'https://wolt.com/sv/swe/eskilstuna/restaurant/almousli-restaurang',
    color: '#00c2e8',
    logo: 'W',
  },
  {
    name: 'Foodora',
    url: 'https://www.foodora.se/restaurant/dlxr/almousli-restaurang',
    color: '#d61c5c',
    logo: 'F',
  },
  {
    name: 'Uber Eats',
    url: 'https://www.ubereats.com/se/store/almousli-restaurang/94KUlu9pXn-0m7oHRl5J5A?diningMode=DELIVERY&surfaceName=',
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

        <div className="flex flex-wrap justify-center gap-6">
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
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group min-w-[200px]"
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-3xl font-bold"
                style={{ backgroundColor: partner.color }}
              >
                {partner.logo}
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">
                {partner.name}
              </h3>
              <div className="text-spice font-semibold group-hover:text-gold transition-colors">
                {t('orderNow')} →
              </div>
            </motion.a>
          ))}

          <motion.a
            href="https://wa.me/46765916851"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3 * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-emerald rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group min-w-[200px] text-white"
          >
            <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center bg-white text-emerald text-3xl font-bold">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2.01A10.01 10.01 0 0 0 2.03 12.05a10.01 10.01 0 0 0 10.01 10.01 10.01 10.01 0 0 0 10.01-10.01A10.01 10.01 0 0 0 12.04 2.01zM12.04 20.06a8.01 8.01 0 0 1-8.01-8.01 8.01 8.01 0 0 1 8.01-8.01 8.01 8.01 0 0 1 8.01 8.01 8.01 8.01 0 0 1-8.01 8.01zm2.96-5.17c-.16-.08-1.02-.5-1.18-.56s-.28-.08-.4-.08-.53.08-.64.24-.4.5-.49.6-.18.12-.34.04a4.84 4.84 0 0 1-1.45-.9 5.27 5.27 0 0 1-1-1.23c-.1-.16-.01-.25.07-.33.07-.07.16-.18.24-.27.08-.09.12-.16.18-.27.06-.11.03-.2-.01-.28s-.4-.96-.55-1.32c-.14-.35-.28-.3-.4-.3h-.4c-.16 0-.42.06-.64.31s-.85.83-.85 2.02.87 2.34 1 2.5a6.5 6.5 0 0 0 3.41 2.9c.45.18.8.29 1.08.37.48.13.91.11 1.26-.07.39-.2.64-.53.73-.84.09-.31.09-.58.06-.66s-.15-.12-.31-.2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">
              WhatsApp
            </h3>
            <div className="font-semibold group-hover:text-gold transition-colors">
              {t('callDirect')} →
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}