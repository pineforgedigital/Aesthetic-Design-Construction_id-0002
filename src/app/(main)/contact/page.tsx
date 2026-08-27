import { Metadata } from 'next'
import ContactClient from './ContactClient'
import { client } from '@/sanity/client'
import { getContactPageQuery, getSiteSettingsQuery } from '@/sanity/queries'

export const metadata: Metadata = {
  title: "Contact Us | Aesthetic Design & Construction",
  description: "Get in touch with Aesthetic Design & Construction for your next project.",
}

export const revalidate = 60

export default async function ContactPage() {
  const pageData = await client.fetch(getContactPageQuery)
  const settingsData = await client.fetch(getSiteSettingsQuery)

  return <ContactClient pageData={pageData} settingsData={settingsData} />
}
