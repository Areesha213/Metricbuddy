import { sleepPages } from '../sleep-keywords'
import { notFound } from 'next/navigation'
import SleepCalculator from '@/app/calculators/sleep-calculator/sleep-calculator-client'

export async function generateStaticParams() {
  return sleepPages.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const page = sleepPages.find(p => p.slug === params.slug)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
  }
}

export default function SleepSlugPage({ params }: { params: { slug: string } }) {
  const page = sleepPages.find(p => p.slug === params.slug)
  if (!page) return notFound()

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{page.heading}</h1>
      <p className="text-gray-600 mb-6">{page.description}</p>
      <SleepCalculator />
    </main>
  )
}
