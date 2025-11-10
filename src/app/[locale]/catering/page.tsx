import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Catering Services | Almousli Restaurang',
  description: 'Professional catering services for events, parties, and corporate gatherings in Eskilstuna.',
};

export default function CateringPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <section className="section-padding bg-cream">
          <div className="container-custom max-w-4xl">
            <h1 className="text-5xl font-lalezar text-charcoal text-center mb-8">
              Catering Services
            </h1>
            <div className="prose prose-lg mx-auto">
              <p className="text-center text-xl text-gray-600 mb-12">
                Make your next event unforgettable with authentic Middle Eastern cuisine
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-3xl font-cairo font-bold text-charcoal mb-4">
                  Perfect for Any Occasion
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Corporate events and meetings</li>
                  <li>✓ Weddings and celebrations</li>
                  <li>✓ Birthday parties</li>
                  <li>✓ Family gatherings</li>
                  <li>✓ Private parties</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-3xl font-cairo font-bold text-charcoal mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-4">
                  For catering inquiries and custom menu options, please contact us:
                </p>
                <div className="space-y-2">
                  <p>📞 Phone: <a href="tel:0737330513" className="text-spice hover:text-gold">0737330513</a></p>
                  <p>📧 Email: <a href="mailto:info@almousli.se" className="text-spice hover:text-gold">info@almousli.se</a></p>
                  <p>💬 WhatsApp: <a href="https://wa.me/46737330513" className="text-spice hover:text-gold">+46 73 733 05 13</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
