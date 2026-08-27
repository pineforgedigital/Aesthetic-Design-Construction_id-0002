import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: "Luxury Construction & Remodeling",
  description: "Aesthetic Design & Construction specializes in high-end luxury construction, remodeling, and interior design. Let us build your dream space.",
}

import { client } from '@/sanity/client'
import { getHomePageQuery, getTestimonialsQuery } from '@/sanity/queries'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function HomePage() {
  const homeData = await client.fetch(getHomePageQuery)
  const testimonialsData = await client.fetch(getTestimonialsQuery)

  return <HomeClient homeData={homeData} testimonialsData={testimonialsData} />
}
