import { client } from '@/sanity/client'
import { getLegalPageQuery, getSiteSettingsQuery } from '@/sanity/queries'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/components/PortableTextComponents'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch(getLegalPageQuery, { slug: 'privacy-policy' })
  const settingsData = await client.fetch(getSiteSettingsQuery)

  const title = pageData?.seo?.metaTitle || pageData?.title || settingsData?.seo?.metaTitle || "Privacy Policy | Aesthetic Design & Construction"
  const description = pageData?.seo?.metaDescription || settingsData?.seo?.metaDescription || "Privacy Policy for Aesthetic Design & Construction."
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

export default async function PrivacyPolicyPage() {
  const pageData = await client.fetch(getLegalPageQuery, { slug: 'privacy-policy' })

  if (!pageData) {
    return (
      <main className="min-h-[70vh] bg-primary-base flex items-center justify-center pt-32 px-6">
        <div className="max-w-2xl text-center">
          <h1 className="font-outfit text-4xl font-bold text-primary-contrast mb-4">Privacy Policy</h1>
          <p className="text-primary-contrast/70 text-lg">This page is currently being updated by our legal team. Please check back later.</p>
        </div>
      </main>
    )
  }

  const lastUpdated = pageData.lastUpdated ? new Date(pageData.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : null

  return (
    <main className="min-h-screen bg-primary-base pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16 border-b border-primary-contrast/10 pb-12">
          <h1 className="font-outfit text-5xl md:text-6xl font-bold text-primary-contrast mb-6">{pageData.title || "Privacy Policy"}</h1>
          {lastUpdated && (
            <p className="text-primary-contrast/50 text-sm font-medium tracking-wide uppercase">Last Updated: {lastUpdated}</p>
          )}
        </header>

        <article className="prose-none">
          {pageData.content ? (
            <PortableText value={pageData.content} components={portableTextComponents} />
          ) : (
            <p className="text-primary-contrast/70 text-lg">Content is currently being updated.</p>
          )}
        </article>
      </div>
    </main>
  )
}
