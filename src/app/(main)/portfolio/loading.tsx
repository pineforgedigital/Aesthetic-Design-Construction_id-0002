import ProjectGallerySkeleton from "@/components/ProjectGallerySkeleton";

export default function ProjectsLoading() {
  return (
    <main className="min-h-screen bg-primary-base">
      
      {/* Header Section */}
      <section className="bg-primary-contrast text-primary-base py-24 px-6 relative overflow-hidden bg-grid-pattern">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-accent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-warm-sand rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-outfit text-5xl md:text-7xl font-bold mb-6 opacity-50">Our Portfolio</h1>
          <div className="h-6 bg-primary-base/20 animate-pulse rounded w-1/2 max-w-2xl mx-auto mt-6"></div>
          <div className="h-6 bg-primary-base/20 animate-pulse rounded w-1/3 max-w-lg mx-auto mt-2"></div>
        </div>
      </section>

      {/* Gallery Section Skeleton */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ProjectGallerySkeleton />
        </div>
      </section>

    </main>
  );
}
