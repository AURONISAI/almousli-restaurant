import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Gallery | Almousli Restaurang',
  description: 'View photos of our delicious food, cozy interior, and happy customers.',
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <h1 className="text-5xl font-lalezar text-charcoal text-center mb-8">
              Gallery
            </h1>
            <p className="text-center text-gray-600 mb-12">
              Gallery images will be loaded from Sanity CMS
            </p>
            {/* Gallery grid will be populated from Sanity */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
