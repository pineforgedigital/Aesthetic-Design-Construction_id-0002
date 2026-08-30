import ProjectGallery from "@/components/ProjectGallery";
import { Metadata } from "next";
import { client } from "@/sanity/client";
import { getProjectsQuery } from "@/sanity/queries";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse our portfolio of completed luxury construction and remodeling projects. See the unparalleled quality and craftsmanship we bring to every space.",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProjectsPage() {
  const projects = await client.fetch(getProjectsQuery);

  return (
    <main className="min-h-screen bg-primary-base">
      
      {/* Header Section */}
      <PageBanner 
        title="Our Portfolio" 
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our collection of premium transformations and bespoke designs." 
        badge="Recent Work" 
      />

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
