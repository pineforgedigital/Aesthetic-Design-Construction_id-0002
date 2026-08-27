import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aesthetic-design-construction-id-00.vercel.app'
  const lastModified = new Date()

  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/team',
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
