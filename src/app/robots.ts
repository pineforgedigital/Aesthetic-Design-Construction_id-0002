import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio', '/login'],
    },
    sitemap: 'https://aesthetic-design-construction-id-00.vercel.app/sitemap.xml',
  }
}
