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

      {/* Materials & Finishes */}
      <section className="py-32 px-6 bg-[#EBE7DF]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-primary-contrast mb-6 leading-tight uppercase">
              Beautiful Materials. <br/>Thoughtfully Selected.
            </h2>
            <p className="text-tertiary-accent text-lg leading-relaxed mb-8">
              The materials you live with every day should be beautiful, durable, and chosen with intention. We help you navigate the countless decisions that go into a renovation, sourcing and coordinating materials that complement one another and support the overall vision.
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
              src="/decorating_images/IMG_5429.jpg"
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
              Made For Your Home. <br/>Made To Last.
            </h2>
            <p className="text-tertiary-accent text-lg leading-relaxed mb-6">
              Some spaces call for something you simply can’t find in a showroom. Our custom woodworking brings artistry and craftsmanship into your home through pieces designed specifically for your space.
            </p>
            <p className="text-tertiary-accent text-lg leading-relaxed mb-8">
              From built-ins and cabinetry to mantels, furniture, shelving, and architectural details, each piece is thoughtfully crafted with quality materials, durable construction, and meticulous attention to detail.
            </p>
            <p className="text-highlight font-bold uppercase tracking-widest">
              Designed specifically for you. Crafted by hand. Built to last.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative h-[60vh] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="/craftsmanship_detail_1787795426058.jpg"
              alt="Custom Craftsmanship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Visualize Before We Build */}
      <section className="py-32 px-6 bg-primary-contrast text-center relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
            See Your Space Before It Becomes Reality.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            Big decisions are easier when you can see the vision. Our 3D renderings allow you to experience your space before construction begins. Visualize layouts, cabinetry, materials, finishes, colors, and architectural details before making the final decision.
          </p>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Renderings help bridge the gap between an idea and the finished space, giving you confidence in the direction before construction begins.
          </p>
          <p className="text-warm-sand font-bold text-2xl uppercase tracking-widest">
            See It. Refine It. Build It.
          </p>
        </div>
      </section>

      {/* The Aesthetic Difference */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-primary-contrast mb-8 uppercase tracking-wide">
            From Concept to Curated.
          </h2>
          <div className="text-tertiary-accent text-xl leading-relaxed space-y-6 mb-12">
            <p>Most remodeling companies focus on construction.</p>
            <p>Most interior designers focus on design.</p>
            <p className="font-bold text-primary-contrast">We bring the two together, and carry the vision all the way through the finishing touches.</p>
            <p>
              At Aesthetic Design & Construction, you don’t have to assemble a team of designers, contractors, installers, and decorators to create one cohesive home. We can help with it all.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-highlight font-bold uppercase tracking-widest text-sm mb-12">
            <span>Design.</span>
            <span>Materials.</span>
            <span>Construction.</span>
            <span>Custom Craftsmanship.</span>
            <span>Installation.</span>
            <span>Furnishings.</span>
            <span>Styling.</span>
          </div>

          <h3 className="font-outfit text-2xl lg:text-3xl font-bold text-primary-contrast uppercase tracking-widest">
            One Team. One Vision. One Beautifully Finished Home.
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
