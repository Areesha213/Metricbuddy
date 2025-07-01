import { Metadata } from 'next'
import CaloriesCalculator from './calories-calculator-client'

export const metadata: Metadata = {
  title: 'Calories Calculator – Estimate Daily Intake or Burn | MetricBuddy',
  description: 'Estimate how many calories you need daily or burn through activities. Use MetricBuddy\'s free calculator to set goals, plan diets, and more.',
  keywords: [
    'calories calculator', 'TDEE calculator', 'BMR calculator',
    'daily calories', 'calories to lose weight', 'maintenance calories calculator',
    'calories intake calculator', 'weight loss calorie estimator'
  ],
  openGraph: {
    title: 'Calories Calculator – TDEE & BMR Estimator',
    description: 'Get your daily calorie needs based on height, weight, gender, and goals.',
    url: 'https://metricbuddy.online/calculators/calories-calculator',
    type: 'website',
  },
  alternates: {
    canonical: '/calculators/calories-calculator',
  },
}

export default function CaloriesCalculatorPage() {
  return <CaloriesCalculator />
}
