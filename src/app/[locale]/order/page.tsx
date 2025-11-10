import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DeliveryPartners from '@/components/DeliveryPartners';

export const metadata: Metadata = {
  title: 'Order Online | Almousli Restaurang',
  description: 'Order authentic Middle Eastern food online via Wolt, Foodora, or Uber Eats.',
};

export default function OrderPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <DeliveryPartners />
      </main>
      <Footer />
    </>
  );
}
