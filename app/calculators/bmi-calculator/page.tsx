import { Metadata } from 'next';
import BMICalculatorClient from './bmi-calculator-client';

export const metadata: Metadata = {
  title: 'BMI Calculator - Body Mass Index Calculator | MetricBuddy',
  description: 'Calculate your BMI (Body Mass Index) instantly with our free BMI calculator. Check if you\'re in a healthy weight range. Supports metric and imperial units.',
  keywords: [
    'BMI calculator', 'body mass index calculator', 'BMI chart', 'healthy weight calculator',
    'weight status calculator', 'obesity calculator', 'underweight calculator',
    'overweight calculator', 'BMI for adults', 'BMI metric imperial'
  ],
  openGraph: {
    title: 'BMI Calculator - Body Mass Index Calculator',
    description: 'Calculate your BMI (Body Mass Index) instantly with our free BMI calculator. Check if you\'re in a healthy weight range.',
    url: 'https://metricbuddy.online/calculators/bmi-calculator',
    type: 'website',
  },
  alternates: {
    canonical: '/calculators/bmi-calculator',
  },
};

export default function BMICalculatorPage() {
  return <BMICalculatorClient />;
}