import { Metadata } from 'next'
import ServicesClient from './ServicesClient'
import { client } from '@/sanity/client'
import { getServicesPageQuery, getServicesQuery } from '@/sanity/queries'

export const metadata: Metadata = {
  title: "Our Services | Aesthetic Design & Construction",
  description: "Explore our range of premium remodeling and construction services.",
}

export const revalidate = 60

export default async function ServicesPage() {
  const pageData = await client.fetch(getServicesPageQuery)
  const servicesData = await client.fetch(getServicesQuery)

  return <ServicesClient pageData={pageData} servicesData={servicesData} />
}
