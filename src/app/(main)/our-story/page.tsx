import { Metadata } from 'next'
import { client } from '@/sanity/client'
import { getAboutPageQuery } from '@/sanity/queries'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Aesthetic Design & Construction and our dedication to master craftsmanship and innovative solutions.",
}

export const revalidate = 60

export default async function AboutPage() {
  const aboutData = await client.fetch(getAboutPageQuery)
  return <AboutClient aboutData={aboutData} />
}
