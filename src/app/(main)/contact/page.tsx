import { Metadata } from 'next'
import ContactClient from './ContactClient'
import { client } from '@/sanity/client'
import { getContactPageQuery, getSiteSettingsQuery } from '@/sanity/queries'

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch(getContactPageQuery)
  const settingsData = await client.fetch(getSiteSettingsQuery)

  const title = pageData?.seo?.metaTitle || settingsData?.seo?.metaTitle || "Contact Us | Aesthetic Design & Construction"
  const description = pageData?.seo?.metaDescription || settingsData?.seo?.metaDescription || "Get in touch with Aesthetic Design & Construction for your next project."
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

export const revalidate = 60

export default async function ContactPage() {
  const pageData = await client.fetch(getContactPageQuery)
  const settingsData = await client.fetch(getSiteSettingsQuery)

  return <ContactClient pageData={pageData} settingsData={settingsData} />
}
