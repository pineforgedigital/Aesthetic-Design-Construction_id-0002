import type { Metadata } from 'next'
import HomeClient from './HomeClient'

import { getSiteSettingsQuery } from '@/sanity/queries'

export async function generateMetadata(): Promise<Metadata> {
  const homeData = await client.fetch(getHomePageQuery)
  const settingsData = await client.fetch(getSiteSettingsQuery)

  let title = homeData?.seo?.metaTitle || settingsData?.seo?.metaTitle;
  if (title && title.toLowerCase().includes('luxury')) {
    title = 'Interior Design & Home Remodeling';
  }
  const description = homeData?.seo?.metaDescription || settingsData?.seo?.metaDescription;
  const image = homeData?.seo?.openGraphImage || settingsData?.seo?.openGraphImage

  return {
    title,
    description,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: '/',
      siteName: 'Aesthetic Design & Construction',
      ...(image ? { images: [{ url: image }] } : {}),
    }
  }
}

import { client } from '@/sanity/client'
import { getHomePageQuery, getTestimonialsQuery } from '@/sanity/queries'

export const revalidate = 0 // Disable cache so Sanity changes reflect immediately
export const dynamic = 'force-dynamic' // Force fully dynamic rendering

// Force cache bust
export default async function HomePage() {
  const homeData = await client.fetch(getHomePageQuery)
  const testimonialsData = await client.fetch(getTestimonialsQuery)
  const settingsData = await client.fetch(getSiteSettingsQuery)

  return <HomeClient homeData={homeData} testimonialsData={testimonialsData} settingsData={settingsData} />
}
