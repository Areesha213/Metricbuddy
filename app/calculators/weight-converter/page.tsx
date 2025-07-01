import { Metadata } from 'next';
import WeightConverter from './weight-converter-client';

export const metadata: Metadata = {
  title: 'Weight Converter - kg, lb, g, oz & More | MetricBuddy',
  description: 'Convert between kilograms, pounds, grams, ounces, and more with our free weight converter. Accurate and fast unit conversions.',
  keywords: [
    'weight converter',
    'kg to lb converter',
    'grams to ounces',
    'pounds to kilograms',
    'mass converter',
    'oz to g',
    'online weight conversion',
    'unit converter weight',
    'metric to imperial weight',
    'MetricBuddy weight tool'
  ],
  openGraph: {
    title: 'Weight Converter - MetricBuddy',
    description: 'Convert between all major weight units quickly and easily with MetricBuddy.',
    url: 'https://metricbuddy.online/calculators/weight-converter',
    type: 'website',
  },
  alternates: {
    canonical: '/calculators/weight-converter',
  },
};

export default function WeightConverterPage() {
  return <WeightConverter />;
}
