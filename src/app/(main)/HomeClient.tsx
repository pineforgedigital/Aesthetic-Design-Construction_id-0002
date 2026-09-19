"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Ruler, Hammer, PaintBucket, Search, PenTool, Layers, Sparkles, Armchair, Gem, Heart, Wrench, Users, Lightbulb } from "lucide-react";
import StaggeredText from "@/components/StaggeredText";

export default function Home({ homeData, testimonialsData, settingsData }: { homeData: any, testimonialsData: any[], settingsData?: any }) {
  const headline = homeData?.heroHeadline;
  const subtitle = homeData?.heroSubtitle;
  const image = homeData?.heroImage || "/placeholder.svg";

  const primaryBtnText = homeData?.primaryButtonText;
  const primaryBtnUrl = homeData?.primaryButtonUrl;
  const secondaryBtnText = homeData?.secondaryButtonText;
  const secondaryBtnUrl = homeData?.secondaryButtonUrl;

  const highlightsHeadline = homeData?.highlightsHeadline;
  const highlightsText = homeData?.highlightsText;
  const highlightsImage = homeData?.highlightsImage || "/placeholder.svg";

  const differenceHeadline = homeData?.differenceHeadline;
  const differenceText = homeData?.differenceText || [];
  const differenceHighlights = homeData?.differenceHighlights || [];
  const differenceFooter = homeData?.differenceFooter;

  const ctaHeadline = settingsData?.globalCtaHeadline || homeData?.ctaHeadline;
  const ctaSubtitle = settingsData?.globalCtaSubtitle || homeData?.ctaSubtitle;
  const ctaBtnText = settingsData?.globalCtaButtonText;
  const ctaBtnUrl = settingsData?.globalCtaButtonUrl;

  const highlightsList = homeData?.highlightsList || [];

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
            <span className="text-warm-sand text-sm md:text-base uppercase tracking-widest font-normal mb-4 drop-shadow-sm">
              Family owned. Thoughtfully Designed
            </span>
            <StaggeredText
              text={headline.replace('. ', '.\n')}
              className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-primary-base mb-6 leading-tight drop-shadow-md !justify-start"
            />
            <p className="text-lg md:text-xl text-primary-base/80 mb-10 font-light w-full">
              {subtitle}
            </p>
            <div className="flex flex-row flex-wrap gap-3 md:gap-4 items-center justify-start w-full">
              <Link
                href={primaryBtnUrl}
                className="px-4 py-3 md:px-6 md:py-3 bg-highlight text-white hover:bg-[#A34F3A] transition-all rounded-full font-medium text-sm md:text-base lg:text-lg flex items-center justify-center gap-2 shadow-lg shadow-highlight/20 whitespace-nowrap"
              >
                {primaryBtnText} <ArrowRight size={18} className="md:w-5 md:h-5" />
              </Link>
              <Link
                href={secondaryBtnUrl}
                className="px-4 py-3 md:px-6 md:py-3 bg-transparent border border-primary-base/30 text-primary-base hover:bg-primary-base hover:text-primary-contrast transition-colors rounded-full font-medium text-sm md:text-base lg:text-lg flex items-center justify-center whitespace-nowrap"
              >
                {secondaryBtnText}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-[60%] relative min-h-[50vh] lg:min-h-full">
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={image.startsWith("/") ? image : `${image}?auto=format&fit=max&w=1920`}
              alt="Modern luxury kitchen remodel"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>


      {/* The Aesthetic Difference */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto relative z-20">

          {/* Row 1: Headline & Side-by-Side Images */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            {/* Left Column: Headline */}
            <div className="lg:col-span-5 text-left flex flex-col justify-center">
              <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-primary-contrast uppercase tracking-wide leading-tight flex flex-col">
                <span className="whitespace-nowrap">From Concept</span>
                <span className="pl-12 md:pl-20 whitespace-nowrap">TO CURATED.</span>
              </h2>
            </div>

            {/* Right Column: 2 Square Pics Side-by-Side */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-6">
              <div className="aspect-square bg-[#EBE7DF]/60 rounded-2xl flex items-center justify-center text-tertiary-accent shadow-sm overflow-hidden relative border border-primary-contrast/10">
                <Image src={homeData?.featuredServices?.[0]?.image ? `${homeData?.featuredServices?.[0]?.image}?auto=format&fit=crop&w=600&h=600` : "/placeholder.svg"} alt="Design details" fill className="object-cover" />
              </div>
              <div className="aspect-square bg-[#EBE7DF]/60 rounded-2xl flex items-center justify-center text-tertiary-accent shadow-sm overflow-hidden relative border border-primary-contrast/10">
                <Image src={homeData?.featuredServices?.[1]?.image ? `${homeData?.featuredServices?.[1]?.image}?auto=format&fit=crop&w=600&h=600` : "/placeholder.svg"} alt="Construction details" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Row 2: Paragraphs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center mb-24 relative">
            {/* Left Column: First two paragraphs */}
            <div className="lg:col-span-5 text-left lg:pr-16 flex flex-col justify-center space-y-16">
              <div className="flex items-center gap-6 w-full group">
                <p className="text-tertiary-accent text-xl lg:text-[1.35rem] font-light tracking-wide leading-relaxed shrink-0 max-w-[85%]">
                  {differenceText[0]}
                </p>
                <div className="flex-1 flex items-center opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-1 h-1 rounded-full bg-[#D1A57A]"></div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D1A57A] to-transparent"></div>
                </div>
              </div>
              <div className="flex items-center gap-6 w-full group">
                <p className="text-tertiary-accent text-xl lg:text-[1.35rem] font-light tracking-wide leading-relaxed shrink-0 max-w-[85%]">
                  {differenceText[1]}
                </p>
                <div className="flex-1 flex items-center opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-1 h-1 rounded-full bg-[#D1A57A]"></div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D1A57A] to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Bolded paragraph */}
            <div className="lg:col-span-7 text-left lg:pl-16 relative mt-8 lg:mt-0">
              {/* Vertical divider */}
              <div className="hidden lg:block absolute left-0 top-[-30%] bottom-[-30%] w-[1px] bg-gradient-to-b from-transparent via-[#D1A57A]/40 to-transparent"></div>
              
              <div className="flex items-center gap-8 w-full group">
                <p className="text-primary-contrast font-outfit text-3xl lg:text-4xl leading-tight shrink-0 max-w-[85%]">
                  {differenceText[2]}
                </p>
                <div className="hidden md:flex flex-1 items-center min-w-[2rem] opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-1 h-1 rounded-full bg-[#D1A57A]"></div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D1A57A] to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">

            <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-[#EBE7DF]/60 rounded-2xl my-16 shadow-sm overflow-hidden relative flex items-center justify-center border border-primary-contrast/10">
              <Image src={homeData?.featuredServices?.[2]?.image ? `${homeData?.featuredServices?.[2]?.image}?auto=format&fit=crop&w=1200&h=600` : "/placeholder.svg"} alt="Styling details" fill className="object-cover" />
            </div>

            <p className="text-tertiary-accent text-xl leading-relaxed mb-16 max-w-3xl mx-auto">
              {differenceText[3]}
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-highlight font-bold uppercase tracking-widest text-sm mb-16">
              {differenceHighlights.map((highlight: string, i: number) => (
                <span key={i} className="flex items-center gap-4">
                  {highlight}
                  {i < differenceHighlights.length - 1 && <span className="text-primary-contrast/20">|</span>}
                </span>
              ))}
            </div>

            <h3 className="font-outfit text-2xl lg:text-3xl font-bold text-primary-contrast uppercase tracking-widest">
              {differenceFooter}
            </h3>
          </div>

        </div>
      </section>

      {/* KEY SERVICES SECTION */}
      <section className="pb-24 pt-4 max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Design", "Transform", "Decorate"]
            .map(name => (homeData?.featuredServices || []).find((s: any) => s.serviceName.toLowerCase() === name.toLowerCase()))
            .filter(Boolean)
            .map((service: any, index: number) => (
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
              src={highlightsImage.startsWith("/") ? highlightsImage : `${highlightsImage}?auto=format&fit=max&w=800`}
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
