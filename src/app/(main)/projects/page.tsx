import ProjectGallery from "@/components/ProjectGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse our portfolio of completed luxury construction and remodeling projects. See the unparalleled quality and craftsmanship we bring to every space.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-primary-base">
      
      {/* Header Section */}
      <section className="bg-primary-contrast text-primary-base py-24 px-6 bg-grid-pattern">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-outfit text-5xl md:text-7xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-primary-base/80 max-w-3xl mx-auto font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our collection of premium transformations and bespoke designs.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ProjectGallery />
        </div>
      </section>

    </main>
  );
}
