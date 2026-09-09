"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";

export default function ServicesClient({ pageData, servicesData }: { pageData: any, servicesData: any[] }) {
  const heroHeadline = pageData?.heroHeadline || "Our Expertise";
  const heroSubtitle = pageData?.heroSubtitle || "From early design to final construction, we offer a full range of building and remodeling services tailored to your project.";
  const ctaHeadline = pageData?.ctaHeadline || "Ready to transform your space?";

  const servicesLayout = [
    {
      id: "decorate",
      title: "Decorate",
      subtitle: "The details that make a house feel like home.",
      description: "Our decorating services bring warmth, personality, and cohesion to your home through thoughtfully selected furnishings, textiles, artwork, window treatments, accessories, and styling.",
      subServices: [
        { name: "Furnishings & Furniture", desc: "Thoughtfully selected pieces that complement your space and lifestyle." },
        { name: "Window Treatments", desc: "Custom and ready-made options selected to enhance the room’s design." },
        { name: "Artwork & Accessories", desc: "The layers that bring personality, character, and visual interest to a space." },
        { name: "Textiles & Styling", desc: "Rugs, pillows, fabrics, and finishing details that create warmth and cohesion." },
        { name: "Final Styling", desc: "The finishing touch, bringing every element together for a beautifully completed space." }
      ]
    },
    {
      id: "design",
      title: "Design",
      subtitle: "A beautiful space begins with a thoughtful plan.",
      description: "Great design isn’t simply about choosing beautiful finishes. It’s about understanding how a space needs to function and creating a vision where every element works together.",
      subServices: [
        { name: "Space Planning", desc: "Thoughtful layouts designed around the way you live." },
        { name: "Interior Design", desc: "A complete design direction that brings your space together." },
        { name: "Materials & Finishes", desc: "Cabinetry, countertops, tile, flooring, hardware, lighting, plumbing fixtures, paint, and more." },
        { name: "Custom Design", desc: "Unique built-ins, architectural details, and elements designed specifically for your home." },
        { name: "3D Renderings", desc: "See your vision before construction begins." }
      ]
    },
    {
      id: "transform",
      title: "Transform",
      subtitle: "Reimagine your home from the inside out.",
      description: "Our Transform service brings the complete Aesthetic experience together: from initial concept and design through construction, installation, custom craftsmanship, and final styling.",
      subServices: [
        { name: "Kitchens", desc: "Designed for the way you live. We create kitchens that are beautiful enough to inspire and functional enough for everyday life." },
        { name: "Bathrooms", desc: "Your everyday retreat. Transform your bathroom into a space that feels beautiful, functional, and uniquely yours." },
        { name: "Whole-Home Transformations", desc: "One home. One cohesive vision. When you’re ready to reimagine your home as a whole, we bring every element together under one vision." }
      ]
    }
  ];

  // Map Sanity images to our hardcoded structure
  const getServiceImage = (title: string) => {
    const found = servicesData?.find(s => s.serviceName.toLowerCase() === title.toLowerCase());
    return found?.image || "/placeholder.svg";
  };

  // State to track which accordion is open (store string like 'design-0' for card and index)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
    }
  };

  return (
    <main className="min-h-screen bg-primary-base">
      <PageBanner title={heroHeadline} subtitle={heroSubtitle} badge="Services" />

      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {servicesLayout.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col h-full bg-white rounded-[3rem] shadow-xl overflow-hidden border border-primary-contrast/5 group hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Header Image */}
              <div className="relative h-72 w-full overflow-hidden shrink-0">
                <Image
                  src={getServiceImage(service.title)}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-contrast/60 via-transparent to-transparent pointer-events-none" />
                <h2 className="absolute bottom-6 left-8 font-outfit text-4xl font-bold text-white uppercase tracking-wider">
                  {service.title}
                </h2>
              </div>

              {/* Main Content */}
              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                <p className="font-bold text-highlight text-lg mb-4">
                  {service.subtitle}
                </p>
                <p className="text-tertiary-accent leading-relaxed mb-10 text-[1.05rem]">
                  {service.description}
                </p>

                {/* Sub-services Accordion */}
                <div className="mt-auto border-t border-primary-contrast/10 pt-6 space-y-4">
                  {service.subServices.map((sub, idx) => {
                    const accordionId = `${service.id}-${idx}`;
                    const isOpen = openAccordion === accordionId;

                    return (
                      <div key={idx} className="border-b border-primary-contrast/5 pb-4 last:border-0 last:pb-0">
                        <button
                          onClick={() => toggleAccordion(accordionId)}
                          className="w-full flex items-center justify-between text-left group/btn"
                        >
                          <span className="font-bold text-primary-contrast text-lg group-hover/btn:text-highlight transition-colors">
                            {sub.name}
                          </span>
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#EBE7DF] text-primary-contrast transition-transform duration-300 ${isOpen ? 'rotate-180 bg-warm-sand' : ''}`}>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </button>
                        
                        {/* Accordion Content */}
                        <div 
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <p className="text-tertiary-accent text-sm leading-relaxed pr-8">
                            {sub.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
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
