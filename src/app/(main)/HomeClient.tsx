"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Ruler, Hammer, PaintBucket, Search, PenTool, Layers, Sparkles, Armchair, Gem, Heart, Wrench, Users, Lightbulb } from "lucide-react";
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

  const differenceHeadline = homeData?.differenceHeadline || "From Concept to Curated.";
  const differenceText = homeData?.differenceText || [
    "Most remodeling companies focus on construction.",
    "Most interior designers focus on design.",
    "We bring the two together, and carry the vision all the way through the finishing touches.",
    "At Aesthetic Design & Construction, you don’t have to assemble a team of designers, contractors, installers, and decorators to create one cohesive home. We can help with it all."
  ];
  const differenceHighlights = homeData?.differenceHighlights || [
    "Design.", "Materials.", "Construction.", "Custom Craftsmanship.", "Installation.", "Furnishings.", "Styling."
  ];
  const differenceFooter = homeData?.differenceFooter || "One Team. One Vision. One Beautifully Finished Home.";

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
      case 'Search': return Search;
      case 'PenTool': return PenTool;
      case 'Layers': return Layers;
      case 'Sparkles': return Sparkles;
      case 'Armchair': return Armchair;
      case 'Gem': return Gem;
      case 'Heart': return Heart;
      case 'Wrench': return Wrench;
      case 'Users': return Users;
      case 'Lightbulb': return Lightbulb;
      default: return CheckCircle2;
    }
  };

  return (
    <main className="min-h-screen bg-primary-base">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row overflow-hidden bg-primary-contrast rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-2xl z-20">
        
        {/* Left Side: Green Box with Text */}
        <div className="w-full lg:w-[40%] flex items-center justify-center p-8 md:p-12 lg:p-16 pt-32 lg:pt-24 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col items-start"
          >
            <StaggeredText 
              text={headline.replace('. ', '.\n')} 
              className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-primary-base mb-6 leading-tight drop-shadow-md" 
            />
            <p className="text-lg md:text-xl text-primary-base/80 mb-10 font-light w-full">
              {subtitle}
            </p>
            <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-center justify-start w-full">
                <Link
                  href={primaryBtnUrl}
                  className="px-6 py-3 bg-highlight text-white hover:bg-[#A34F3A] transition-all rounded-full font-medium text-base lg:text-lg flex items-center justify-center gap-2 shadow-lg shadow-highlight/20 whitespace-nowrap"
                >
                  {primaryBtnText} <ArrowRight size={20} />
                </Link>
                <Link
                  href={secondaryBtnUrl}
                  className="px-6 py-3 bg-transparent border border-primary-base/30 text-primary-base hover:bg-primary-base hover:text-primary-contrast transition-colors rounded-full font-medium text-base lg:text-lg flex items-center justify-center whitespace-nowrap"
                >
                  {secondaryBtnText}
                </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-[60%] relative min-h-[50vh] lg:min-h-full">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
            <Image
              src="/home-hero.jpg"
              alt="Modern luxury kitchen remodel"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>


      {/* The Aesthetic Difference */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto relative p-12 md:p-20 border-2 border-[#D1A57A] rounded-sm">
          <div className="max-w-4xl mx-auto text-center relative z-20">
            <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-primary-contrast mb-8 uppercase tracking-wide">
              {differenceHeadline}
            </h2>
            <div className="text-tertiary-accent text-xl leading-relaxed space-y-6 mb-12">
              {differenceText.map((paragraph: string, i: number) => (
                <p key={i} className={i === 2 ? "font-bold text-primary-contrast" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-highlight font-bold uppercase tracking-widest text-sm mb-12">
              {differenceHighlights.map((highlight: string, i: number) => (
                <span key={i}>{highlight}</span>
              ))}
            </div>

            <h3 className="font-outfit text-2xl lg:text-3xl font-bold text-primary-contrast uppercase tracking-widest">
              {differenceFooter}
            </h3>
          </div>
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
          {(homeData?.featuredServices || []).map((service: any, index: number) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: index * 0.3, ease: "easeOut" }}
              className="h-full"
            >
              <Link href={`/services#${service.slug}`} className="block h-full">
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS / WHY US SECTION */}
      <section className="bg-primary-contrast text-primary-base py-24 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary-accent rounded-full blur-[120px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6">{highlightsHeadline}</h2>
            <p className="text-primary-base/90 text-lg mb-8 whitespace-pre-wrap">
              {highlightsText}
            </p>
            <div className="space-y-6">
              {highlightsList.map((highlight: any, i: number) => {
                const Icon = getIcon(highlight.iconName);
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 bg-warm-sand/20 rounded-lg text-warm-sand">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-outfit text-xl font-medium mb-1">{highlight.title}</h3>
                      <p className="text-primary-base/70">{highlight.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative">
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
