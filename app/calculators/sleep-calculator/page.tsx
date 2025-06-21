import { Metadata } from 'next';
import SleepCalculatorClient from './sleep-calculator-client';

export const metadata: Metadata = {
  title: 'Sleep Calculator - Optimize Your Sleep Cycles | MetricBuddy',
  description: 'Calculate optimal sleep and wake times based on 90-minute sleep cycles. Wake up refreshed with our free sleep cycle calculator. Find the best bedtime and wake time.',
  keywords: [
    'sleep calculator', 'sleep cycle calculator', 'wake up time calculator',
    'bedtime calculator', 'optimal sleep time', 'sleep cycles', 'REM sleep',
    'sleep optimization', 'when to sleep', 'when to wake up', 'sleep schedule'
  ],
  openGraph: {
    title: 'Sleep Calculator - Optimize Your Sleep Cycles',
    description: 'Calculate optimal sleep and wake times based on 90-minute sleep cycles. Wake up refreshed with our free sleep cycle calculator.',
    url: 'https://metricbuddy.online/calculators/sleep-calculator',
    type: 'website',
    images: [
      {
        url: '/og-sleep-calculator.png',
        width: 1200,
        height: 630,
        alt: 'Sleep Calculator - MetricBuddy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sleep Calculator - Optimize Your Sleep Cycles',
    description: 'Calculate optimal sleep and wake times based on 90-minute sleep cycles.',
  },
  alternates: {
    canonical: '/calculators/sleep-calculator',
  },
};

export default function SleepCalculatorPage() {
  return <SleepCalculatorClient />;
}