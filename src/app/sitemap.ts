import { MetadataRoute } from 'next'
import { client } from '@/sanity/client'
import { groq } from 'next-sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://aestheticdesignconstruction.com'

  // Fetch the last updated timestamps from Sanity
  const timestamps = await client.fetch(groq`{
    "home": *[_type == "homePage"][0]._updatedAt,
    "services": *[_type == "servicesPage"][0]._updatedAt,
    "about": *[_type == "aboutPage"][0]._updatedAt,
    "contact": *[_type == "contactPage"][0]._updatedAt,
    "privacy": *[_type == "legalPage" && slug.current == "privacy-policy"][0]._updatedAt,
    "terms": *[_type == "legalPage" && slug.current == "terms-of-service"][0]._updatedAt,
    "siteSettings": *[_type == "siteSettings"][0]._updatedAt
  }`)

  const defaultDate = new Date()

  return [
    {
      url: `${baseUrl}`,
      lastModified: timestamps.home ? new Date(timestamps.home) : defaultDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: timestamps.siteSettings ? new Date(timestamps.siteSettings) : defaultDate, // Since portfolio might just pull projects
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: timestamps.services ? new Date(timestamps.services) : defaultDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-story`,
      lastModified: timestamps.about ? new Date(timestamps.about) : defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/the-team`,
      lastModified: timestamps.siteSettings ? new Date(timestamps.siteSettings) : defaultDate, // Driven by team members
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: timestamps.contact ? new Date(timestamps.contact) : defaultDate,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: timestamps.privacy ? new Date(timestamps.privacy) : defaultDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: timestamps.terms ? new Date(timestamps.terms) : defaultDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
