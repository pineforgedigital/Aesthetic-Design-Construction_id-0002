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

  const servicesLayout = [
    {
      id: "decorate",
      title: "Decorate",
      subtitle: "The details that make a house feel like home.",
      description: "Our decorating services bring warmth, personality, and cohesion to your home through thoughtfully selected furnishings, textiles, artwork, window treatments, accessories, and styling.",
      subServices: [
        { name: "Furnishings & Furniture", desc: "We curate thoughtfully selected pieces that harmonize perfectly with your space and lifestyle. From statement sofas to the perfect accent chair, every piece is chosen for its quality, scale, and ability to elevate the room's aesthetic." },
        { name: "Window Treatments", desc: "Custom window treatments are the tailored suit of a room. We design and install bespoke drapery, shades, and blinds that not only control light and privacy but also add a crucial layer of softness, texture, and architectural height to your space." },
        { name: "Artwork & Accessories", desc: "A house feels like a home when it reflects the people living in it. We source unique artwork, sculptural elements, and meaningful accessories that bring undeniable character, visual intrigue, and a collected-over-time feel to your interiors." },
        { name: "Textiles & Styling", desc: "It's the layers that create warmth. We expertly select vintage rugs, luxurious throw pillows, rich fabrics, and tactile finishing details that tie the room together, creating a cohesive and inviting atmosphere." },
        { name: "Final Styling", desc: "The finishing touch is where the magic happens. We meticulously style your shelves, surfaces, and seating areas, bringing every element into perfect balance for a beautifully completed, magazine-ready space." }
      ]
    },
    {
      id: "design",
      title: "Design",
      subtitle: "A beautiful space begins with a thoughtful plan.",
      description: "Great design isn’t simply about choosing beautiful finishes. It’s about understanding how a space needs to function and creating a vision where every element works together.",
      subServices: [
        { name: "Space Planning", desc: "A beautiful room must first be a functional one. We create thoughtful, intelligent layouts designed meticulously around the way you live, ensuring optimal flow, comfortable clearances, and purposeful zones within your home." },
        { name: "Interior Design", desc: "We establish a complete, bespoke design direction that brings your entire space together. From conceptual mood boards to the final execution, we ensure every detail speaks the same cohesive, elevated visual language." },
        { name: "Materials & Finishes", desc: "The tactile foundation of your home. We specify exquisite cabinetry, resilient countertops, artisan tile, premium flooring, distinctive hardware, and brilliant lighting fixtures that combine for an unparalleled sensory experience." },
        { name: "Custom Design", desc: "True luxury lies in the bespoke. We design unique built-ins, striking architectural details, and custom elements specifically tailored for your home, adding both immense value and undeniable character." },
        { name: "3D Renderings", desc: "Experience your new space before construction even begins. We produce photorealistic 3D renderings that allow you to visualize the proposed layouts, finishes, and custom details, giving you total confidence in the design direction." }
      ]
    },
    {
      id: "transform",
      title: "Transform",
      subtitle: "Reimagine your home from the inside out.",
      description: "Our Transform service brings the complete Aesthetic experience together: from initial concept and design through construction, installation, custom craftsmanship, and final styling.",
      subServices: [
        { name: "Kitchens", desc: "The heart of the home, designed for the way you actually live. We create kitchens that are beautiful enough to inspire culinary creativity and functional enough to handle everyday life. From custom cabinetry to the perfect island layout, we consider every element as part of one breathtaking, cohesive design." },
        { name: "Bathrooms", desc: "Your everyday personal retreat. We transform your bathroom into a space that feels beautiful, functional, and uniquely yours. By thoughtfully coordinating layouts, luxurious tile, elegant fixtures, and ambient lighting, we create spa-like sanctuaries built to last." },
        { name: "Whole-Home Transformations", desc: "One home, one cohesive vision. When you’re ready to reimagine your property as a whole, we bring every element together under a single, unified aesthetic. We manage the immense details of reconfiguring spaces and updating finishes, resulting in a home completely reimagined." }
      ]
    }
  ];

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
                    <span className="text-secondary-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                      {String(idx + 1).padStart(2, '0')} — Core Pillar
                    </span>
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
                    {service.subServices.map((sub, sIdx) => (
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
