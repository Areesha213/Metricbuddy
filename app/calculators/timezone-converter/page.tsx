import { Metadata } from 'next'
import TimezoneConverter from './timezone-converter-client'

export const metadata: Metadata = {
  title: 'Timezone Converter – Convert Time Zones Instantly | MetricBuddy',
  description: 'Convert between world time zones easily for meetings, travel, and more. Compare UTC, EST, PST, IST, and more with MetricBuddy’s free timezone converter.',
  keywords: [
    'timezone converter', 'time converter', 'world clock', 'compare timezones',
    'convert UTC to PST', 'convert EST to IST', 'time zone calculator',
    'time difference tool', 'meeting planner'
  ],
  openGraph: {
    title: 'Timezone Converter – Compare World Times',
    description: 'Easily convert and compare time zones across the globe.',
    url: 'https://metricbuddy.online/calculators/timezone-converter',
    type: 'website',
  },
  alternates: {
    canonical: '/calculators/timezone-converter',
  },
}

export default function TimezoneConverterPage() {
  return <TimezoneConverter />
}
