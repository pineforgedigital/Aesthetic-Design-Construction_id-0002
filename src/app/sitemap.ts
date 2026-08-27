import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aestheticdesignconstruction.com'
  const lastModified = new Date()

  const routes = [
    '',
    '/portfolio',
    '/services',
    '/our-story',
    '/the-team',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
