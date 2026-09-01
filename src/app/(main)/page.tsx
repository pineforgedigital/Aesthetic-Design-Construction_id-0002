import type { Metadata } from 'next'
import HomeClient from './HomeClient'

import { getSiteSettingsQuery } from '@/sanity/queries'

export async function generateMetadata(): Promise<Metadata> {
  const homeData = await client.fetch(getHomePageQuery)
  const settingsData = await client.fetch(getSiteSettingsQuery)

  const title = homeData?.seo?.metaTitle || settingsData?.seo?.metaTitle || "Luxury Construction & Remodeling | Aesthetic Design & Construction"
  const description = homeData?.seo?.metaDescription || settingsData?.seo?.metaDescription || "Aesthetic Design & Construction specializes in high-end luxury construction, remodeling, and interior design. Let us build your dream space."
  const image = homeData?.seo?.openGraphImage || settingsData?.seo?.openGraphImage

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : [],
    }
  }
}

import { client } from '@/sanity/client'
import { getHomePageQuery, getTestimonialsQuery } from '@/sanity/queries'

export const revalidate = 60 // Revalidate every 60 seconds
// Force cache bust 4

// Force cache bust
export default async function HomePage() {
  const homeData = await client.fetch(getHomePageQuery)
  const testimonialsData = await client.fetch(getTestimonialsQuery)

  return <HomeClient homeData={homeData} testimonialsData={testimonialsData} />
}
