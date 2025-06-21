import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CalculatorGrid } from '@/components/calculator-grid';

export const metadata: Metadata = {
  title: 'All Calculators - MetricBuddy',
  description: 'Browse all our calculators including BMI, sleep, tip, cooking converter, timezone converter, calories, and weight converter tools.',
  alternates: {
    canonical: '/calculators',
  },
};

export default function CalculatorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              All Calculators
            </h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Discover our complete collection of calculators designed to make your daily calculations simple and accurate.
            </p>
          </div>
        </section>
        <CalculatorGrid />
      </main>
      <Footer />
    </div>
  );
}