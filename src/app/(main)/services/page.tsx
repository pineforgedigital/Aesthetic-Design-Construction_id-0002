"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const SERVICES = [
  { id: "rendering", title: "3D Rendering" },
  { id: "flooring", title: "Flooring" },
  { id: "kitchen", title: "Kitchen Remodeling" },
  { id: "bath", title: "Luxury Bathrooms" },
  { id: "interior-design", title: "Interior Design & Decorating" },
  { id: "tile", title: "Custom Tile Work" },
  { id: "countertops", title: "Premium Countertops" },
  { id: "interior-remodeling", title: "Full Interior Remodeling" },
];

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("rendering");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for sticky header

      const currentSection = SERVICES.find((service) => {
        const element = document.getElementById(service.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-primary-base">

      {/* Header Section */}
      <section className="bg-primary-contrast text-primary-base py-24 px-6 relative overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-secondary-accent via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-5xl md:text-7xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-primary-base/80 max-w-3xl mx-auto font-light"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">

          {/* Sticky Sidebar Navigation */}
          <div className="md:w-72 flex-shrink-0">
            <div className="sticky top-[73px] md:top-28 z-30 bg-white md:rounded-2xl p-4 md:p-6 shadow-md md:shadow-xl shadow-primary-contrast/5 border-b md:border border-primary-contrast/5 -mx-6 px-6 md:mx-0 md:px-6 mb-8 md:mb-0">
              <h3 className="font-outfit text-xl font-bold text-primary-contrast mb-4 md:mb-6 hidden md:block">Service Categories</h3>
              <nav className="flex flex-row flex-wrap justify-center md:justify-start md:flex-col md:flex-nowrap gap-2 md:max-h-[calc(100vh-16rem)] md:overflow-y-auto pb-2 md:pb-0 pr-2 md:scrollbar-thin scrollbar-thumb-primary-contrast/20 scrollbar-track-transparent">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      // Account for the sticky header height on mobile vs desktop
                      const element = document.getElementById(service.id);
                      if (element) {
                        const y = element.getBoundingClientRect().top + window.scrollY - 180;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                    className={`text-center md:text-left text-sm md:text-base px-3 md:px-4 py-2 md:py-3 rounded-full md:rounded-xl transition-all font-medium flex items-center gap-2 md:gap-4 justify-center md:justify-between group ${activeSection === service.id
                        ? "bg-warm-sand text-fine-detail"
                        : "bg-primary-base/50 md:bg-transparent text-tertiary-accent hover:bg-secondary-accent/10 hover:text-primary-contrast border border-primary-contrast/10 md:border-transparent"
                      }`}
                  >
                    {service.title}
                    <span className={`w-2 h-2 rounded-full transition-transform hidden md:block ${activeSection === service.id ? "scale-100 bg-secondary-accent" : "scale-0 group-hover:scale-100 bg-tertiary-accent"}`}></span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 space-y-32">

            {/* 3D Rendering */}
            <div id="rendering" className="scroll-mt-32">
              <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-6">3D Rendering</h2>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image src="/placeholder.svg" alt="3D Rendering Service" fill className="object-cover" />
              </div>
              <p className="text-lg text-tertiary-accent mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
              <ul className="space-y-3">
                {["Photorealistic visualizations", "Virtual walkthroughs", "Material mapping"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary-contrast font-medium">
                    <CheckCircle2 className="text-secondary-accent" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Flooring */}
            <div id="flooring" className="scroll-mt-32">
              <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-6">Flooring</h2>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image src="/placeholder.svg" alt="Flooring Service" fill className="object-cover" />
              </div>
              <p className="text-lg text-tertiary-accent mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
              <ul className="space-y-3">
                {["Premium Hardwood", "Engineered Wood", "Luxury Vinyl Plank (LVP)", "Custom Inlays"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary-contrast font-medium">
                    <CheckCircle2 className="text-secondary-accent" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Kitchen Remodeling */}
            <div id="kitchen" className="scroll-mt-32 pt-8 border-t-2 border-primary-contrast/10">
              <h2 className="font-outfit text-5xl font-bold text-primary-contrast mb-6">Kitchen Remodeling</h2>
              <p className="text-xl text-tertiary-accent mb-12 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>

              <div className="grid gap-12">
                {/* Sub: Yorktowne Cabinets */}
                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-primary-contrast/5 border border-primary-contrast/5">
                  <h3 className="font-outfit text-2xl font-bold text-primary-contrast mb-4">Yorktowne Cabinets</h3>
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                    <Image src="/placeholder.svg" alt="Yorktowne Cabinets" fill className="object-cover" />
                  </div>
                  <p className="text-tertiary-accent mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                  </p>
                </div>

                {/* Sub: Custom/Handmade Cabinets */}
                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-primary-contrast/5 border border-primary-contrast/5">
                  <h3 className="font-outfit text-2xl font-bold text-primary-contrast mb-4">Custom & Handmade Cabinets</h3>
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                    <Image src="/placeholder.svg" alt="Custom Cabinets" fill className="object-cover" />
                  </div>
                  <p className="text-tertiary-accent mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                  </p>
                </div>

                {/* Sub: Full Remodels */}
                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-primary-contrast/5 border border-primary-contrast/5">
                  <h3 className="font-outfit text-2xl font-bold text-primary-contrast mb-4">Full Kitchen Remodels</h3>
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                    <Image src="/placeholder.svg" alt="Full Remodels" fill className="object-cover" />
                  </div>
                  <p className="text-tertiary-accent mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                  </p>
                </div>
              </div>
            </div>

            {/* Bathrooms */}
            <div id="bath" className="scroll-mt-32 pt-8 border-t-2 border-primary-contrast/10">
              <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-6">Luxury Bathrooms</h2>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image src="/placeholder.svg" alt="Bathroom Remodeling" fill className="object-cover" />
              </div>
              <p className="text-lg text-tertiary-accent mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              </p>
            </div>

            {/* Interior Design */}
            <div id="interior-design" className="scroll-mt-32">
              <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-6">Interior Design & Decorating</h2>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image src="/placeholder.svg" alt="Interior Design" fill className="object-cover" />
              </div>
              <p className="text-lg text-tertiary-accent mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              </p>
            </div>

            {/* Tile */}
            <div id="tile" className="scroll-mt-32">
              <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-6">Custom Tile Work</h2>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image src="/placeholder.svg" alt="Tile Work" fill className="object-cover" />
              </div>
              <p className="text-lg text-tertiary-accent mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              </p>
            </div>

            {/* Countertops */}
            <div id="countertops" className="scroll-mt-32">
              <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-6">Premium Countertops</h2>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image src="/placeholder.svg" alt="Countertops" fill className="object-cover" />
              </div>
              <p className="text-lg text-tertiary-accent mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              </p>
              <ul className="grid grid-cols-2 gap-4 mt-8">
                {["Quartz", "Granite", "Marble", "Quartzite"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary-contrast font-medium">
                    <CheckCircle2 className="text-secondary-accent" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Interior Remodeling */}
            <div id="interior-remodeling" className="scroll-mt-32">
              <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-6">Full Interior Remodeling</h2>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image src="/placeholder.svg" alt="Interior Remodeling" fill className="object-cover" />
              </div>
              <p className="text-lg text-tertiary-accent mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-fine-detail text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-outfit text-4xl font-bold text-primary-base mb-6">Let&apos;s Discuss Your Project</h2>
          <Link
            href="/contact"
            className="inline-flex px-10 py-4 bg-highlight text-white hover:bg-[#A34F3A] transition-all rounded-full font-bold text-lg items-center shadow-lg shadow-highlight/20"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}
