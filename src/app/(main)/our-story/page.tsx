import type { Metadata } from 'next'
import { client } from '@/sanity/client'
import { getAboutPageQuery, getSiteSettingsQuery } from '@/sanity/queries'
import AboutClient from './AboutClient'

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch(getAboutPageQuery)
  const settingsData = await client.fetch(getSiteSettingsQuery)

  const title = pageData?.seo?.metaTitle || settingsData?.seo?.metaTitle;
  const description = pageData?.seo?.metaDescription || settingsData?.seo?.metaDescription;
  const image = pageData?.seo?.openGraphImage || settingsData?.seo?.openGraphImage

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(image ? { images: [{ url: image }] } : {}),
    }
  }
}

export const revalidate = 0; // Revalidate every 60 seconds
// Force cache bust 3

export default async function AboutPage() {
  const aboutData = await client.fetch(getAboutPageQuery)
  const settingsData = await client.fetch(getSiteSettingsQuery)
  return <AboutClient aboutData={aboutData} settingsData={settingsData} />
}
