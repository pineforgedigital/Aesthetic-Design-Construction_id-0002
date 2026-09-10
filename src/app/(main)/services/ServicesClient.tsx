"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";

export default function ServicesClient({ pageData, servicesData }: { pageData: any, servicesData: any[] }) {
  const heroHeadline = pageData?.heroHeadline || "Our Expertise";
  const heroSubtitle = pageData?.heroSubtitle || "From early design to final construction, we offer a full range of building and remodeling services tailored to your project.";
  const ctaHeadline = pageData?.ctaHeadline || "Ready to transform your space?";

  const materialsHeadline = pageData?.materialsHeadline || "Beautiful Materials. \nThoughtfully Selected.";
  const materialsText = pageData?.materialsText || "The materials you live with every day should be beautiful, durable, and chosen with intention. We help you navigate the countless decisions that go into a renovation, sourcing and coordinating materials that complement one another and support the overall vision.";
  const materialsImage = pageData?.materialsImage || "/decorating_images/IMG_5429.jpg";

  const craftsmanshipHeadline = pageData?.craftsmanshipHeadline || "Made For Your Home. \nMade To Last.";
  const craftsmanshipText = pageData?.craftsmanshipText || "Some spaces call for something you simply can’t find in a showroom. Our custom woodworking brings artistry and craftsmanship into your home through pieces designed specifically for your space.";
  const craftsmanshipText2 = pageData?.craftsmanshipText2 || "From built-ins and cabinetry to mantels, furniture, shelving, and architectural details, each piece is thoughtfully crafted with quality materials, durable construction, and meticulous attention to detail.";
  const craftsmanshipImage = pageData?.craftsmanshipImage || "/placeholder.svg";



  const differenceHeadline = pageData?.differenceHeadline || "From Concept to Curated.";
  const differenceText = pageData?.differenceText || [
    "Most remodeling companies focus on construction.",
    "Most interior designers focus on design.",
    "We bring the two together, and carry the vision all the way through the finishing touches.",
    "At Aesthetic Design & Construction, you don’t have to assemble a team of designers, contractors, installers, and decorators to create one cohesive home. We can help with it all."
  ];
  const differenceHighlights = pageData?.differenceHighlights || [
    "Design.", "Materials.", "Construction.", "Custom Craftsmanship.", "Installation.", "Furnishings.", "Styling."
  ];
  const differenceFooter = pageData?.differenceFooter || "One Team. One Vision. One Beautifully Finished Home.";

  const targetOrder = ["Decorate", "Design", "Transform"];
  
  const servicesLayout = targetOrder
    .map(name => servicesData?.find(s => s.serviceName?.toLowerCase() === name.toLowerCase()))
    .filter(Boolean)
    .map((service) => ({
      id: service.slug || service.serviceName.toLowerCase(),
      title: service.serviceName,
      subtitle: service.subtitle || "",
      description: service.description || "",
      subServices: service.subServices || []
    }));

  // Map Sanity images to our hardcoded structure
  const getServiceImage = (title: string) => {
    const found = servicesData?.find(s => s.serviceName.toLowerCase() === title.toLowerCase());
    return found?.image || "/placeholder.svg";
  };

  return (
    <main className="min-h-screen bg-primary-base">
      <PageBanner title={heroHeadline} subtitle={heroSubtitle} badge="Services" />

      <div className="flex flex-col w-full bg-primary-base">
        {servicesLayout.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section key={service.id} className="py-24 md:py-40 px-6 border-b border-primary-contrast/5 last:border-0">
              <div className={`max-w-[1600px] mx-auto flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-start`}>
                
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-1/2 sticky top-32"
                >
                  <div className="relative h-[60vh] lg:h-[85vh] w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl">
                    <Image
                      src={getServiceImage(service.title)}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center pt-8 lg:pt-16">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="font-outfit text-5xl lg:text-7xl font-bold text-primary-contrast mb-6 uppercase tracking-wide">
                      {service.title}
                    </h2>
                    <p className="font-bold text-highlight text-xl lg:text-2xl mb-6">
                      {service.subtitle}
                    </p>
                    <p className="text-tertiary-accent text-lg lg:text-xl leading-relaxed mb-16">
                      {service.description}
                    </p>
                  </motion.div>

                  <div className="space-y-12">
                    {service.subServices.map((sub: any, sIdx: number) => (
                      <motion.div 
                        key={sIdx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 * sIdx }}
                        className="relative pl-8 border-l-2 border-primary-contrast/10 hover:border-highlight transition-colors duration-300"
                      >
                        <h4 className="font-outfit text-2xl font-bold text-primary-contrast mb-3">
                          {sub.name}
                        </h4>
                        <p className="text-tertiary-accent text-lg leading-relaxed">
                          {sub.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* Materials & Finishes */}
      <section className="py-32 px-6 bg-[#EBE7DF]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-primary-contrast mb-6 leading-tight uppercase">
              {materialsHeadline.split('\\n').map((line: string, i: number) => <span key={i}>{line}<br/></span>)}
            </h2>
            <p className="text-tertiary-accent text-lg leading-relaxed mb-8">
              {materialsText}
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-primary-contrast uppercase tracking-widest text-sm mb-2">Countertops</h4>
                <p className="text-tertiary-accent">Natural stone, engineered surfaces, and other carefully selected materials chosen for both beauty and everyday performance.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary-contrast uppercase tracking-widest text-sm mb-2">Flooring</h4>
                <p className="text-tertiary-accent">Hardwood, tile, and other flooring options selected to complement your home’s architecture and create a cohesive flow from room to room.</p>
              </div>
              <div className="pt-4 border-t border-primary-contrast/10">
                <p className="text-highlight font-bold italic">
                  Cabinetry • Tile • Hardware • Lighting • Plumbing Fixtures • Paint • Wall Finishes
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative h-[60vh] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src={materialsImage}
              alt="Materials and Finishes"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Custom Craftsmanship */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-primary-contrast mb-6 leading-tight uppercase">
              {craftsmanshipHeadline.split('\\n').map((line: string, i: number) => <span key={i}>{line}<br/></span>)}
            </h2>
            <p className="text-tertiary-accent text-lg leading-relaxed mb-6">
              {craftsmanshipText}
            </p>
            <p className="text-tertiary-accent text-lg leading-relaxed mb-8">
              {craftsmanshipText2}
            </p>
            <p className="text-highlight font-bold uppercase tracking-widest">
              Designed specifically for you. Crafted by hand. Built to last.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative h-[60vh] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src={craftsmanshipImage}
              alt="Custom Craftsmanship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>


      {/* The Aesthetic Difference */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
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
      </section>

      {/* Modern CTA SECTION */}
      <section className="py-32 px-6 bg-primary-contrast text-center relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-accent/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-8">{ctaHeadline}</h2>
          <Link
            href="/contact"
            className="inline-flex px-12 py-5 bg-warm-sand text-primary-contrast hover:bg-white transition-colors rounded-full font-bold text-lg items-center shadow-2xl"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
