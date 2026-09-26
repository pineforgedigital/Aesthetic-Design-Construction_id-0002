import ProjectGallerySkeleton from "@/components/ProjectGallerySkeleton";

export default function ProjectsLoading() {
  return (
    <main className="min-h-screen bg-primary-base">
      
      {/* Header Section Skeleton */}
      <section className="relative w-full overflow-hidden pt-16 md:pt-24 pb-4 px-6 flex flex-col items-center text-center">
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-highlight/5 blur-[100px] rounded-full pointer-events-none -z-10" />
        
        {/* Gold accents top skeleton */}
        <div className="flex items-center gap-4 md:gap-6 mb-6">
          <div className="w-12 md:w-32 h-[2px] bg-gradient-to-r from-transparent to-highlight/60" />
          <div className="w-24 h-4 bg-highlight/20 animate-pulse rounded" />
          <div className="w-12 md:w-32 h-[2px] bg-gradient-to-l from-transparent to-highlight/60" />
        </div>

        {/* Title skeleton */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-64 h-12 md:w-96 md:h-16 lg:w-[32rem] lg:h-20 bg-primary-contrast/10 animate-pulse rounded-lg mb-6" />
        </div>

        {/* Text skeleton */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center space-y-2 mt-2">
          <div className="w-full h-5 md:h-6 bg-tertiary-accent/10 animate-pulse rounded" />
          <div className="w-3/4 h-5 md:h-6 bg-tertiary-accent/10 animate-pulse rounded" />
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
