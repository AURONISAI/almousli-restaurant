import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('menu.title'),
    description: t('menu.description'),
  };
}

export default async function MenuPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'menu' });

  const categories = [
    {
      key: 'shawarma',
      icon: '🌯',
      items: ['classic', 'chicken', 'mixed']
    },
    {
      key: 'grills',
      icon: '🔥',
      items: ['mixedGrill', 'kebab', 'grilledChicken']
    },
    {
      key: 'appetizers',
      icon: '🥙',
      items: ['kibbeh', 'falafel', 'hummus', 'baba']
    },
    {
      key: 'specialties',
      icon: '⭐',
      items: ['fatteh', 'mansaf', 'mahashi']
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 bg-jasmine">
        {/* Hero Section */}
        <section className="relative py-20 bg-damascus overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(/images/damascus-pattern.svg)',
              backgroundSize: '200px 200px',
              backgroundRepeat: 'repeat'
            }}
          />
          <div className="container-custom relative z-10 text-center">
            <img 
              src="/images/arabic-ornament.svg" 
              alt="" 
              className="h-16 opacity-80 mx-auto mb-6"
            />
            <h1 className="text-5xl md:text-6xl font-lalezar text-gold mb-4">
              {t('title')}
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-0.5 bg-gold"></div>
              <span className="text-gold text-2xl">✦</span>
              <div className="w-16 h-0.5 bg-gold"></div>
            </div>
            <p className="text-xl text-jasmine max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category) => (
                <div
                  key={category.key}
                  className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gold/20 hover:border-gold/50 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">{category.icon}</span>
                    <h2 className="text-3xl font-cairo font-bold text-damascus">
                      {t(`categories.${category.key}`)}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <div key={item} className="flex justify-between items-start border-b border-gold/20 pb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-charcoal mb-1">
                            {t(`items.${item}.name`)}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {t(`items.${item}.description`)}
                          </p>
                        </div>
                        <span className="text-emerald font-bold text-sm ml-4">حلال</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-12 text-center bg-damascus/10 rounded-xl p-6 border-2 border-damascus/20">
              <p className="text-damascus font-cairo text-lg">
                {t('note')}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
