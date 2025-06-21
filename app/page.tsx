import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { CalculatorGrid } from '@/components/calculator-grid';
import { Features } from '@/components/features';

export const metadata: Metadata = {
  title: 'MetricBuddy - Your Daily Life Calculator Suite',
  description: 'Smarter tools for everyday life. Calculate BMI, sleep cycles, tips, cooking conversions, and more with our beautiful, easy-to-use calculators.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CalculatorGrid />
        <Features />
      </main>
      <Footer />
    </div>
  );
}