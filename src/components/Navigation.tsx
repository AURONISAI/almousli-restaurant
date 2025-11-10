'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { motion } from 'framer-motion';

const localeNames: Record<string, string> = {
  ar: 'عربي',
  en: 'EN',
  sv: 'SV',
};

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'menu', href: '/menu' },
    { key: 'about', href: '/about' },
    { key: 'order', href: '/order' },
    { key: 'catering', href: '/catering' },
    { key: 'gallery', href: '/gallery' },
    { key: 'findUs', href: '/find-us' },
  ];

  const locales = ['ar', 'en', 'sv'] as const;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-damascus/95 backdrop-blur-md shadow-xl border-b-2 border-gold/30">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gold/20 rounded-full group-hover:bg-gold/30 transition-all duration-300"></div>
              <div className="relative text-2xl md:text-3xl font-lalezar text-gold drop-shadow-lg">
                الموصللي
              </div>
            </div>
            <div className="text-sm font-sans text-jasmine hidden md:block border-l-2 border-gold/50 pl-4">
              Almousli
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-jasmine hover:text-gold transition-all duration-300 font-semibold relative group cursor-pointer z-10"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={pathname}
                locale={loc}
                className={`px-3 py-2 rounded-lg ${
                  locale === loc
                    ? 'bg-gold text-damascus font-bold shadow-lg'
                    : 'text-jasmine hover:text-gold hover:bg-gold/20'
                } transition-all duration-300 font-semibold text-sm border-2 ${
                  locale === loc ? 'border-gold' : 'border-gold/30'
                }`}
              >
                {localeNames[loc]}
              </Link>
            ))}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-jasmine p-2 hover:bg-gold/20 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden pb-4 border-t border-gold/30 mt-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-jasmine hover:text-gold transition-all hover:bg-gold/10 rounded-lg border-l-4 border-transparent hover:border-gold"
              >
                {t(item.key)}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
