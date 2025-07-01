import { weightPages } from '../weight-keywords'
import { notFound } from 'next/navigation'
import WeightConverter from '@/app/calculators/weight-converter/weight-converter-client'

export async function generateStaticParams() {
  return weightPages.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const page = weightPages.find(p => p.slug === params.slug)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
  }
}

export default function WeightSlugPage({ params }: { params: { slug: string } }) {
  const page = weightPages.find(p => p.slug === params.slug)
  if (!page) return notFound()

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{page.heading}</h1>
      <p className="text-gray-600 mb-6">{page.description}</p>
      <WeightConverter />
    </main>
  )
}
