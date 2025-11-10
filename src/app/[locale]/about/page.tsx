import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default async function AboutPage() {
  const t = await getTranslations();

  const values = [
    {
      key: 'authenticity',
      icon: '✦',
      gradient: 'from-damascus to-gold'
    },
    {
      key: 'quality',
      icon: '◈',
      gradient: 'from-gold to-copper'
    },
    {
      key: 'hospitality',
      icon: '❋',
      gradient: 'from-copper to-emerald'
    },
    {
      key: 'community',
      icon: '✧',
      gradient: 'from-emerald to-damascus'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-jasmine via-cream to-jasmine pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Damascus Pattern Background */}
        <div className="absolute inset-0 bg-damascus">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DAA520' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Arabic Ornament Top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 opacity-30">
          <Image
            src="/images/arabic-ornament.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <div className="inline-block mb-6">
            <div className="text-6xl mb-4 animate-pulse">✦</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gold mb-4 drop-shadow-2xl">
            {t('about.title')}
          </h1>
          <p className="text-xl md:text-2xl text-jasmine/90 max-w-3xl mx-auto font-light">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Arabic Ornament Bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 opacity-30 rotate-180">
          <Image
            src="/images/arabic-ornament.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gold/30">
            {/* Decorative Header */}
            <div className="h-3 bg-gradient-to-r from-damascus via-gold to-damascus"></div>
            
            <div className="p-12 md:p-16">
              {/* Damascus Star */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-damascus to-gold rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-4xl text-white">★</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-damascus text-center mb-6">
                {t('about.story.title')}
              </h2>

              <div className="prose prose-lg md:prose-xl max-w-none text-charcoal/80 leading-relaxed">
                {t('about.story.text').split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-center md:text-right first:text-2xl first:font-semibold first:text-damascus">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-damascus/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="text-5xl text-gold">✧ ✦ ✧</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-damascus mb-4">
              {t('about.values.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.key}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-gold/50"
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                </div>

                {/* Icon */}
                <div className="text-6xl mb-6 text-center">
                  <span className={`inline-block bg-gradient-to-br ${value.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-damascus mb-4 text-center">
                  {t(`about.values.${value.key}.title`)}
                </h3>
                <p className="text-charcoal/70 leading-relaxed text-center">
                  {t(`about.values.${value.key}.text`)}
                </p>

                {/* Bottom Border */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${value.gradient} group-hover:w-full transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-damascus to-damascus/90 rounded-3xl shadow-2xl overflow-hidden border-4 border-gold">
            <div className="p-12 md:p-16 text-center">
              {/* Chef Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-2xl border-4 border-jasmine">
                  <span className="text-6xl">👨‍🍳</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gold mb-8">
                {t('about.chef.title')}
              </h2>

              <p className="text-xl md:text-2xl text-jasmine/90 leading-relaxed max-w-3xl mx-auto">
                {t('about.chef.text')}
              </p>

              {/* Decorative Stars */}
              <div className="mt-12 flex justify-center gap-4 text-3xl text-gold/50">
                <span>✦</span>
                <span>◆</span>
                <span>✦</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Decoration */}
      <div className="py-12 text-center">
        <div className="text-6xl text-gold/30">✧</div>
      </div>
    </div>
    <Footer />
    </>
  );
}
