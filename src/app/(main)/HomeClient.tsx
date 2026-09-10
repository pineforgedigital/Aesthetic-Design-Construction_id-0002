"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Ruler, Hammer, PaintBucket } from "lucide-react";
import StaggeredText from "@/components/StaggeredText";

export default function Home({ homeData, testimonialsData, settingsData }: { homeData: any, testimonialsData: any[], settingsData?: any }) {
  const headline = homeData?.heroHeadline || "Quality Construction & Thoughtful Design.";
  const subtitle = homeData?.heroSubtitle || "We bring together skilled building and thoughtful design to create functional, well-made homes tailored to your lifestyle.";
  const image = homeData?.heroImage || "/placeholder.svg";

  const primaryBtnText = homeData?.primaryButtonText || "Start Your Project";
  const primaryBtnUrl = homeData?.primaryButtonUrl || "/contact";
  const secondaryBtnText = homeData?.secondaryButtonText || "View Our Work";
  const secondaryBtnUrl = homeData?.secondaryButtonUrl || "/portfolio";

  const highlightsHeadline = homeData?.highlightsHeadline || "Attention to Detail";
  const highlightsText = homeData?.highlightsText || "We treat every project with care and focus. By managing a select number of projects at a time, we make sure your home gets the dedicated attention it deserves, from the first plans to the final walkthrough.";
  const highlightsImage = homeData?.highlightsImage || "/placeholder.svg";

  const ctaHeadline = settingsData?.globalCtaHeadline || homeData?.ctaHeadline || "Ready to Update Your Home?";
  const ctaSubtitle = settingsData?.globalCtaSubtitle || homeData?.ctaSubtitle || "Schedule a consultation to discuss your project with our builders and designers.";
  const ctaBtnText = settingsData?.globalCtaButtonText || "Contact Us Today";
  const ctaBtnUrl = settingsData?.globalCtaButtonUrl || "/contact";

  const highlightsList = homeData?.highlightsList || [
    { iconName: "Ruler", title: "Solid Engineering", desc: "Reliable construction backed by structural expertise." },
    { iconName: "Hammer", title: "Custom Carpentry", desc: "Quality woodwork and cabinetry built to fit your home." },
    { iconName: "PaintBucket", title: "Full-Service Design", desc: "An organized process from the first blueprints to the final walkthrough." }
  ];

  const testimonials = testimonialsData && testimonialsData.length > 0 ? testimonialsData : [];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 250]);

  // Helper function to dynamically resolve Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ruler': return Ruler;
      case 'Hammer': return Hammer;
      case 'PaintBucket': return PaintBucket;
      default: return CheckCircle2;
    }
  };

  return (
    <main className="min-h-screen bg-primary-base">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-base rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-2xl z-20">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src={`${image}?auto=format&fit=max&w=1920`}
            alt="Modern luxury kitchen remodel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fine-detail/90 via-fine-detail/30 to-transparent mix-blend-multiply" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl flex flex-col items-center md:items-start"
          >
            <StaggeredText 
              text={headline.replace('. ', '.\n')} 
              className="font-outfit text-4xl md:text-5xl lg:text-7xl font-bold text-primary-base mb-6 leading-tight drop-shadow-lg" 
            />
            <p className="text-xl md:text-2xl text-primary-base/90 mb-10 font-light max-w-2xl drop-shadow-md">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start w-full">
                <Link
                  href={primaryBtnUrl}
                  className="px-8 py-4 bg-highlight text-white hover:bg-[#A34F3A] transition-all rounded-full font-medium text-lg flex items-center justify-center gap-2 shadow-lg shadow-highlight/20"
                >
                  {primaryBtnText} <ArrowRight size={20} />
                </Link>
                <Link
                  href={secondaryBtnUrl}
                  className="px-8 py-4 bg-primary-base/10 backdrop-blur-md text-primary-base border border-primary-base/30 hover:bg-primary-base/20 transition-all rounded-full font-medium text-lg flex items-center justify-center"
                >
                  {secondaryBtnText}
                </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY SERVICES SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-4">Our Expertise</h2>
          <div className="h-1 w-24 bg-highlight mx-auto rounded-full mb-6"></div>
          <p className="text-primary-contrast/80 max-w-2xl mx-auto text-lg">
            From new home construction to complete interior remodeling, we focus on delivering solid results and dependable service for every project.
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
                  <p className="text-primary-contrast/70 mb-6 line-clamp-2">{service.description || "Learn about our approach to building and remodeling, making sure every detail meets your standards."}</p>
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
      <section className="bg-primary-contrast text-primary-base py-32 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary-accent/10 via-transparent to-transparent opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-highlight rounded-full blur-[150px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-highlight"></span>
              <span className="text-primary-base/80 text-sm font-semibold tracking-wider uppercase">Our Approach</span>
            </div>
            
            <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              {highlightsHeadline}
            </h2>
            <p className="text-primary-base/80 text-xl mb-12 leading-relaxed font-light">
              {highlightsText}
            </p>
            
            <div className="space-y-6">
              {highlightsList.map((highlight: any, i: number) => {
                const Icon = getIcon(highlight.iconName);
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm group"
                  >
                    <div className="p-4 bg-primary-base rounded-xl text-primary-contrast shadow-inner group-hover:scale-110 group-hover:text-highlight transition-all duration-300">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="font-outfit text-2xl font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-primary-base/70 leading-relaxed">{highlight.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:h-[800px] flex items-center justify-center"
          >
            {/* Decorative offset frame */}
            <div className="absolute inset-4 border border-white/20 rounded-3xl translate-x-6 translate-y-6 -z-10"></div>
            <div className="absolute inset-4 bg-secondary-accent/20 rounded-3xl translate-x-3 translate-y-3 -z-10 blur-md"></div>
            
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
              <Image
                src={`${highlightsImage}?auto=format&fit=max&w=1000`}
                alt="Craftsmanship detail"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Subtle inner shadow overlay */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* TESTIMONIALS */}
      {testimonials.length > 0 ? (
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
      ) : null}

      {/* CTA SECTION */}
      <section className="py-24 bg-fine-detail text-center relative overflow-hidden border-t-4 border-warm-sand">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-base via-transparent to-transparent"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-primary-base mb-6">{ctaHeadline}</h2>
          <p className="text-primary-base/70 text-xl mb-10 whitespace-pre-wrap">{ctaSubtitle}</p>
            <Link
              href={ctaBtnUrl}
              className="inline-flex px-10 py-4 bg-highlight text-white hover:bg-[#A34F3A] transition-all rounded-full font-bold text-lg items-center gap-2 shadow-xl shadow-highlight/20"
            >
              {ctaBtnText}
            </Link>
        </div>
      </section>

    </main>
  );
}
