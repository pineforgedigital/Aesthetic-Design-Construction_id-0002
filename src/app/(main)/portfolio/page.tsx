import ProjectGallery from "@/components/ProjectGallery";
import { Metadata } from "next";
import { client } from "@/sanity/client";
import { getProjectsQuery, getSiteSettingsQuery } from "@/sanity/queries";

export async function generateMetadata(): Promise<Metadata> {
  const settingsData = await client.fetch(getSiteSettingsQuery)

  const title = "Portfolio | Aesthetic Design & Construction"
  const description = "Browse our portfolio of completed luxury construction and remodeling projects. See the unparalleled quality and craftsmanship we bring to every space."
  const image = settingsData?.seo?.openGraphImage

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
  const projects = await client.fetch(getProjectsQuery);

  return (
    <main className="min-h-screen bg-primary-base">
      
      {/* Header Section */}
      <section className="pt-32 pb-8 px-6 text-center max-w-4xl mx-auto">
        <h1 className="font-outfit text-5xl md:text-6xl font-bold text-primary-contrast mb-6">
          Our Portfolio
        </h1>
        <p className="text-lg text-tertiary-accent max-w-2xl mx-auto">
          Explore our recent remodeling and construction projects, highlighting our approach to quality building and practical design.
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
