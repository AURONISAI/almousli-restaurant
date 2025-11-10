import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero';
import SignatureDishes from '@/components/SignatureDishes';
import DeliveryPartners from '@/components/DeliveryPartners';
import FindUs from '@/components/FindUs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL('https://almousli.se'),
    title: t('home.title'),
    description: t('home.description'),
    openGraph: {
      title: t('home.title'),
      description: t('home.description'),
      url: 'https://almousli.se',
      siteName: 'Almousli Restaurang',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Almousli Restaurang',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home.title'),
      description: t('home.description'),
      images: ['/og-image.jpg'],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SignatureDishes />
        <DeliveryPartners />
        <FindUs />
      </main>
      <Footer />
    </>
  );
}
