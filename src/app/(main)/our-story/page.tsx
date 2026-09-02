import type { Metadata } from 'next'
import { client } from '@/sanity/client'
import { getAboutPageQuery, getSiteSettingsQuery } from '@/sanity/queries'
import AboutClient from './AboutClient'

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch(getAboutPageQuery)
  const settingsData = await client.fetch(getSiteSettingsQuery)

  const title = pageData?.seo?.metaTitle || settingsData?.seo?.metaTitle || "Our Story | Aesthetic Design & Construction"
  const description = pageData?.seo?.metaDescription || settingsData?.seo?.metaDescription || "Learn about our journey in luxury construction and remodeling."
  const image = pageData?.seo?.openGraphImage || settingsData?.seo?.openGraphImage

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

export const revalidate = 60; // Revalidate every 60 seconds
// Force cache bust 2

export default async function AboutPage() {
  const aboutData = await client.fetch(getAboutPageQuery)
  return <AboutClient aboutData={aboutData} />
}
