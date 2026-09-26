import TeamSkeleton from "@/components/TeamSkeleton";

export default function TeamLoading() {
  return (
    <main className="min-h-screen bg-primary-base">
      {/* HERO SECTION SKELETON */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row overflow-hidden bg-primary-contrast rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-2xl z-20">
        
        {/* Left Side: Image (66%) Skeleton */}
        <div className="w-full lg:w-[66%] relative min-h-[50vh] lg:min-h-full order-2 lg:order-1 bg-white/5 animate-pulse"></div>

        {/* Right Side: Green Box with Text (33%) Skeleton */}
        <div className="w-full lg:w-[34%] flex items-center justify-center p-8 md:p-12 lg:p-16 pt-32 lg:pt-24 z-10 order-1 lg:order-2 bg-primary-contrast">
          <div className="w-full flex flex-col items-start">
            <div className="h-4 bg-warm-sand/20 animate-pulse rounded w-32 mb-4"></div>
            <div className="h-12 md:h-16 bg-white/10 animate-pulse rounded w-3/4 mb-6"></div>
            <div className="h-4 bg-white/10 animate-pulse rounded w-full mb-3"></div>
            <div className="h-4 bg-white/10 animate-pulse rounded w-5/6 mb-3"></div>
            <div className="h-4 bg-white/10 animate-pulse rounded w-4/5 mb-8"></div>
          </div>
        </div>
      </section>

      {/* Team Grid Skeleton */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <TeamSkeleton />
        </div>
      </section>
    </main>
  );
}
