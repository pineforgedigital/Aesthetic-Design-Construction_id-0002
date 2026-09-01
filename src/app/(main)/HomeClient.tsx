"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Ruler, Hammer, PaintBucket } from "lucide-react";
import StaggeredText from "@/components/StaggeredText";

export default function Home({ homeData, testimonialsData }: { homeData: any, testimonialsData: any[] }) {
  const headline = homeData?.heroHeadline || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const subtitle = homeData?.heroSubtitle || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.";
  const image = homeData?.heroImage || "/placeholder.svg";

  const highlightsHeadline = homeData?.highlightsHeadline || "Lorem ipsum dolor";
  const highlightsText = homeData?.highlightsText || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.";
  const highlightsImage = homeData?.highlightsImage || "/placeholder.svg";

  const ctaHeadline = homeData?.ctaHeadline || "Ready to Elevate Your Home?";
  const ctaSubtitle = homeData?.ctaSubtitle || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.";

  const testimonials = testimonialsData && testimonialsData.length > 0 ? testimonialsData : [];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 250]);

  return (
    <main className="min-h-screen bg-primary-base">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src={`${image}?auto=format&fit=max&w=1920`}
            alt="Modern luxury kitchen remodel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fine-detail/90 via-fine-detail/50 to-transparent mix-blend-multiply" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl flex flex-col items-center md:items-start"
          >
            <StaggeredText 
              text={headline} 
              className="font-outfit text-5xl md:text-7xl font-bold text-primary-base mb-6 leading-tight drop-shadow-lg" 
            />
            <p className="text-xl md:text-2xl text-primary-base/90 mb-10 font-light max-w-2xl drop-shadow-md">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start w-full">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-highlight text-white hover:bg-[#A34F3A] transition-all rounded-full font-medium text-lg flex items-center justify-center gap-2 shadow-lg shadow-highlight/20"
                >
                  Start Your Project <ArrowRight size={20} />
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 bg-primary-base/10 backdrop-blur-md text-primary-base border border-primary-base/30 hover:bg-primary-base/20 transition-all rounded-full font-medium text-lg flex items-center justify-center"
                >
                  View Our Work
                </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Fade Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-base to-transparent z-10 pointer-events-none" />
      </section>

      {/* KEY SERVICES SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-4">Our Expertise</h2>
          <div className="h-1 w-24 bg-highlight mx-auto rounded-full mb-6"></div>
          <p className="text-primary-contrast/80 max-w-2xl mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(homeData?.featuredServices || []).map((service: any) => (
            <Link key={service._id} href={`/services#${service.slug}`} className="block h-full">
              <motion.div
                whileHover={{ y: -10 }}
                className="relative z-10 group rounded-2xl overflow-hidden bg-white shadow-xl shadow-primary-contrast/5 border border-primary-contrast/5 h-full transition-all duration-500 hover:border-warm-sand hover:shadow-2xl hover:shadow-warm-sand/40"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={service.image ? `${service.image}?auto=format&fit=max&w=800` : "/placeholder.svg"} alt={service.serviceName} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="font-outfit text-2xl font-semibold text-primary-contrast mb-3">{service.serviceName}</h3>
                  <p className="text-primary-contrast/70 mb-6 line-clamp-2">{service.description || "Learn more about our premium construction and remodeling services."}</p>
                  <span className="text-primary-contrast font-medium flex items-center gap-2 group-hover:text-highlight transition-colors">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS / WHY US SECTION */}
      <section className="bg-primary-contrast text-primary-base py-24 relative overflow-hidden bg-grid-pattern">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary-accent rounded-full blur-[120px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6">{highlightsHeadline}</h2>
            <p className="text-primary-base/90 text-lg mb-8 whitespace-pre-wrap">
              {highlightsText}
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-warm-sand/20 rounded-lg text-warm-sand">
                  <Ruler size={24} />
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-medium mb-1">Precision Engineering</h3>
                  <p className="text-primary-base/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-warm-sand/20 rounded-lg text-warm-sand">
                  <Hammer size={24} />
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-medium mb-1">Handmade Carpentry</h3>
                  <p className="text-primary-base/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-warm-sand/20 rounded-lg text-warm-sand">
                  <PaintBucket size={24} />
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-medium mb-1">End-to-End Design</h3>
                  <p className="text-primary-base/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-contrast to-transparent z-10 md:hidden"></div>
            <Image
              src={`${highlightsImage}?auto=format&fit=max&w=800`}
              alt="Craftsmanship detail"
              width={600}
              height={800}
              className="rounded-2xl object-cover shadow-2xl shadow-fine-detail/50"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {testimonials.length > 0 && (
        <section className="py-24 bg-[#EBE7DF]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-4">Client Stories</h2>
          <div className="h-1 w-24 bg-highlight mx-auto rounded-full mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: any, i: number) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="relative z-10 bg-primary-base p-8 rounded-2xl shadow-lg shadow-fine-detail/5 text-left border border-white"
              >
                <div className="flex gap-1 text-highlight mb-6">
                  {Array.from({ length: testimonial.rating || 5 }).map((_, j) => (
                    <Star key={j} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-fine-detail italic mb-6">&quot;{testimonial.quote || testimonial.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-tertiary-accent rounded-full flex items-center justify-center text-primary-base font-outfit font-bold">
                    {(testimonial.clientName || testimonial.name)?.charAt(0) || "U"}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-contrast">{testimonial.clientName || testimonial.name}</h3>
                    <p className="text-sm text-tertiary-accent">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* CTA SECTION */}
      <section className="py-24 bg-fine-detail text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-base via-transparent to-transparent"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-primary-base mb-6">{ctaHeadline}</h2>
          <p className="text-primary-base/70 text-xl mb-10 whitespace-pre-wrap">{ctaSubtitle}</p>
            <Link
              href="/contact"
              className="inline-flex px-10 py-4 bg-highlight text-white hover:bg-[#A34F3A] transition-all rounded-full font-bold text-lg items-center gap-2 shadow-xl shadow-highlight/20"
            >
              Contact Us Today
            </Link>
        </div>
      </section>

    </main>
  );
}
