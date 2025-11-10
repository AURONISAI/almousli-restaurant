import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FindUs from '@/components/FindUs';

export const metadata: Metadata = {
  title: 'Find Us | Almousli Restaurang',
  description: 'Visit us at Careliigatan 9, Eskilstuna. Opening hours, directions, and contact information.',
};

export default function FindUsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <FindUs />
      </main>
      <Footer />
    </>
  );
}
