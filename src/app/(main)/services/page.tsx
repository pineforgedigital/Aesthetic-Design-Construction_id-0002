import { Metadata } from 'next'
import ServicesClient from './ServicesClient'
import { client } from '@/sanity/client'
import { getServicesPageQuery, getServicesQuery } from '@/sanity/queries'

import { getSiteSettingsQuery } from '@/sanity/queries'

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch(getServicesPageQuery)
  const settingsData = await client.fetch(getSiteSettingsQuery)

  const title = pageData?.seo?.metaTitle || settingsData?.seo?.title || "Our Services | Aesthetic Design & Construction"
  const description = pageData?.seo?.metaDescription || settingsData?.seo?.description || "Explore our range of premium remodeling and construction services."
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

export default async function ServicesPage() {
  const pageData = await client.fetch(getServicesPageQuery)
  const servicesData = await client.fetch(getServicesQuery)

  return <ServicesClient pageData={pageData} servicesData={servicesData} />
}
