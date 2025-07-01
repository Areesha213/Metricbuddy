import { MetadataRoute } from 'next';
import { bmiPages } from './calculators/bmi-calculator/bmi-keywords'
import { sleepPages } from './calculators/sleep-calculator/sleep-keywords'
import { tipPages } from './calculators/tip-calculator/tip-keywords'
import { cookingPages } from './calculators/cooking-converter/cooking-keywords'
import { timezonePages } from './calculators/timezone-converter/timezone-keywords'






export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://metricbuddy.online';
  const currentDate = new Date();
  
 const bmiDynamicPages = bmiPages.map((page) => ({
    url: `${baseUrl}/calculators/bmi-calculator/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

const sleepDynamicPages = sleepPages.map((page) => ({
    url: `${baseUrl}/calculators/sleep-calculator/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const tipDynamicPages = tipPages.map((page) => ({
  url: `${baseUrl}/calculators/tip-calculator/${page.slug}`,
  lastModified: currentDate,
  changeFrequency: 'monthly' as const,
  priority: 0.85,
}))

const cookingDynamicPages = cookingPages.map((page) => ({
  url: `${baseUrl}/calculators/cooking-converter/${page.slug}`,
  lastModified: currentDate,
  changeFrequency: 'monthly' as const,
  priority: 0.85,
}))

const timezoneDynamicPages = timezonePages.map((page) => ({
  url: `${baseUrl}/calculators/timezone-converter/${page.slug}`,
  lastModified: currentDate,
  changeFrequency: 'monthly' as const,
  priority: 0.85,
}))

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/calculators`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/sleep-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/bmi-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/tip-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculators/cooking-converter`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculators/timezone-converter`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculators/calories-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculators/weight-converter`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculators/dream-interpreter`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },

     ...bmiDynamicPages,
    ...sleepDynamicPages,
    ...tipDynamicPages,
    ...cookingDynamicPages,
    ...timezoneDynamicPages


  ];
}
