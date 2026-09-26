import ProjectGallery from "@/components/ProjectGallery";
import { Metadata } from "next";
import Image from "next/image";
import { client } from "@/sanity/client";
import { getProjectsQuery, getSiteSettingsQuery, getPortfolioPageQuery } from "@/sanity/queries";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch(getPortfolioPageQuery)
  const settingsData = await client.fetch(getSiteSettingsQuery)

  const title = pageData?.seo?.metaTitle || "Portfolio | Aesthetic Design & Construction"
  const description = pageData?.seo?.metaDescription || "Browse our portfolio of completed luxury construction and remodeling projects. See the unparalleled quality and craftsmanship we bring to every space."
  const image = pageData?.seo?.openGraphImage || settingsData?.seo?.openGraphImage

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(image ? { images: [{ url: image }] } : {}),
    }
  }
}

export const revalidate = 0; // Revalidate every 60 seconds

export default async function ProjectsPage() {
  const pageData = await client.fetch(getPortfolioPageQuery);
  const projects = await client.fetch(getProjectsQuery);

  const heroHeadline = pageData?.heroHeadline || "";
  const heroSubtitle = pageData?.heroSubtitle || "";
  const heroText = pageData?.heroText || "";

  return (
    <main className="min-h-screen bg-primary-base">
      
      {/* Header Section */}
      <section className="relative w-full overflow-hidden pt-16 md:pt-24 pb-4 px-6 flex flex-col items-center text-center">
        
        {/* Decorative Left/Right Leaves & Gold Accents */}
        <div className="absolute -left-32 md:-left-24 top-0 z-0 opacity-[0.08] mix-blend-multiply pointer-events-none">
          <Image src="/leaf.jpg" alt="" width={500} height={500} className="object-contain -rotate-12" priority />
        </div>
        <div className="absolute top-[40%] left-0 w-16 md:w-48 h-[2px] bg-gradient-to-r from-highlight/10 to-highlight/60 pointer-events-none" />
        <div className="absolute top-[40%] left-16 md:left-48 w-2 h-2 rounded-full bg-highlight/60 -translate-y-1/2 pointer-events-none" />

        <div className="absolute -right-32 md:-right-24 top-1/2 -translate-y-1/2 z-0 opacity-[0.08] mix-blend-multiply pointer-events-none">
          <Image src="/leaf.jpg" alt="" width={500} height={500} className="object-contain rotate-180" priority />
        </div>
        <div className="absolute top-[60%] right-0 w-16 md:w-48 h-[2px] bg-gradient-to-l from-highlight/10 to-highlight/60 pointer-events-none" />
        <div className="absolute top-[60%] right-16 md:right-48 w-2 h-2 rounded-full bg-highlight/60 -translate-y-1/2 pointer-events-none" />
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-highlight/5 blur-[100px] rounded-full pointer-events-none -z-10" />
        
        {/* Gold accents top */}
        <div className="flex items-center gap-4 md:gap-6 mb-6">
          <div className="w-12 md:w-32 h-[2px] bg-gradient-to-r from-transparent to-highlight/60" />
          <span className="text-highlight font-bold uppercase tracking-widest text-xs md:text-sm whitespace-nowrap">
            {heroSubtitle}
          </span>
          <div className="w-12 md:w-32 h-[2px] bg-gradient-to-l from-transparent to-highlight/60" />
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          <h1 className="font-outfit text-5xl md:text-6xl lg:text-7xl font-bold text-primary-contrast mb-6 relative z-10">
            {heroHeadline}
          </h1>
        </div>

        <p className="text-lg md:text-xl text-tertiary-accent max-w-2xl mx-auto font-light leading-relaxed relative z-10">
          {heroText}
        </p>

      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {projects.length > 0 ? (
            <ProjectGallery projects={projects} />
          ) : (
            <div className="text-center py-24">
              <h2 className="font-outfit text-3xl font-bold text-primary-contrast mb-4">Check back soon!</h2>
              <p className="text-tertiary-accent text-lg">We are currently uploading our latest projects.</p>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
