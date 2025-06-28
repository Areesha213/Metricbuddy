import { Metadata } from 'next'
import TipCalculator from './tip-calculator-client'

export const metadata: Metadata = {
  title: 'Tip Calculator – Split Bills & Calculate Tips | MetricBuddy',
  description: 'Calculate tips quickly and split bills with ease using this free Tip Calculator. Ideal for restaurants, delivery, and group outings.',
  keywords: [
    'tip calculator', 'restaurant tip calculator', 'split bill calculator', 'calculate tips',
    '20% tip calculator', 'bill splitter', 'how much to tip', 'tip per person'
  ],
  alternates: {
    canonical: '/calculators/tip-calculator',
  },
  openGraph: {
    title: 'Tip Calculator – Split Bills & Calculate Tips',
    description: 'Easily calculate tips and split bills using MetricBuddy’s free tip calculator.',
    url: 'https://metricbuddy.online/calculators/tip-calculator',
    type: 'website',
  },
}

export default function TipCalculatorPage() {
  return <TipCalculator />
}
