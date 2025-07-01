import { Metadata } from 'next'
import CookingConverter from './cooking-converter-client'

export const metadata: Metadata = {
  title: 'Cooking Converter – Convert Cups, Grams, Ounces | MetricBuddy',
  description: 'Convert cooking ingredients like flour, sugar, butter between grams, cups, tbsp, and more. Perfect for kitchen use!',
  keywords: [
    'cooking converter', 'cups to grams', 'grams to cups', 'cooking conversion calculator',
    'kitchen converter', 'ingredient measurement', 'baking converter', 'cooking app'
  ],
  openGraph: {
    title: 'Cooking Converter – Kitchen Measurements Calculator',
    description: 'Easily convert grams, cups, and tablespoons with MetricBuddy’s free cooking converter.',
    url: 'https://metricbuddy.online/calculators/cooking-converter',
    type: 'website',
  },
  alternates: {
    canonical: '/calculators/cooking-converter',
  },
}

export default function CookingConverterPage() {
  return <CookingConverter />
}
