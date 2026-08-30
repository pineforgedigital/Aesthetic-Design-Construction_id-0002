"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import PageBanner from "@/components/PageBanner";


export default function ServicesClient({ pageData, servicesData }: { pageData: any, servicesData: any[] }) {
  const [activeSection, setActiveSection] = useState(servicesData[0]?.slug || "rendering");

  const heroHeadline = pageData?.heroHeadline || "Our Services";
  const heroSubtitle = pageData?.heroSubtitle || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const ctaHeadline = pageData?.ctaHeadline || "Let's Discuss Your Project";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for sticky header

      const currentSection = servicesData.find((service) => {
        const element = document.getElementById(service.slug);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.slug);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-primary-base">

      {/* Header Section */}
      <PageBanner title={heroHeadline} subtitle={heroSubtitle} badge="Our Expertise" />

      {servicesData && servicesData.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">

          {/* Sticky Sidebar Navigation */}
          <div className="md:w-72 flex-shrink-0">
            <div className="sticky top-[73px] md:top-28 z-30 bg-white md:rounded-2xl p-4 md:p-6 shadow-md md:shadow-xl shadow-primary-contrast/5 border-b md:border border-primary-contrast/5 -mx-6 px-6 md:mx-0 md:px-6 mb-8 md:mb-0">
              <h3 className="font-outfit text-xl font-bold text-primary-contrast mb-4 md:mb-6 hidden md:block">Service Categories</h3>
              <nav className="flex flex-row flex-wrap justify-center md:justify-start md:flex-col md:flex-nowrap gap-2 md:max-h-[calc(100vh-16rem)] md:overflow-y-auto pb-2 md:pb-0 pr-2 md:scrollbar-thin scrollbar-thumb-primary-contrast/20 scrollbar-track-transparent">
                {servicesData.map((service) => (
                  <button
                    key={service.slug}
                    onClick={() => {
                      // Account for the sticky header height on mobile vs desktop
                      const element = document.getElementById(service.slug);
                      if (element) {
                        const y = element.getBoundingClientRect().top + window.scrollY - 180;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                    className={`text-center md:text-left text-sm md:text-base px-3 md:px-4 py-2 md:py-3 rounded-full md:rounded-xl transition-all font-medium flex items-center gap-2 md:gap-4 justify-center md:justify-between group ${activeSection === service.slug
                        ? "bg-warm-sand text-fine-detail"
                        : "bg-primary-base/50 md:bg-transparent text-tertiary-accent hover:bg-secondary-accent/10 hover:text-primary-contrast border border-primary-contrast/10 md:border-transparent"
                      }`}
                  >
                    {service.serviceName}
                    <span className={`w-2 h-2 rounded-full transition-transform hidden md:block ${activeSection === service.slug ? "scale-100 bg-secondary-accent" : "scale-0 group-hover:scale-100 bg-tertiary-accent"}`}></span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 space-y-32">
            {servicesData.map((service, idx) => (
              <motion.div 
                id={service.slug} 
                className={`scroll-mt-32 ${idx > 0 ? "pt-8 border-t-2 border-primary-contrast/10" : ""}`} 
                key={service.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-6">{service.serviceName}</h2>
                {service.image && (
                  <div className="relative h-80 rounded-2xl overflow-hidden mb-8 shadow-lg">
                    <Image src={service.image} alt={service.serviceName} fill className="object-cover" />
                  </div>
                )}
                <p className="text-lg text-tertiary-accent mb-6 leading-relaxed whitespace-pre-wrap">
                  {service.description}
                </p>
                {service.capabilities && service.capabilities.length > 0 && (
                  <ul className="space-y-3">
                    {service.capabilities.map((item: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-primary-contrast font-medium">
                        <CheckCircle2 className="text-secondary-accent" size={20} /> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}

          </div>
        </div>
      </section>
      )}

      {/* CTA SECTION */}
      <section className="py-24 bg-fine-detail text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="font-outfit text-4xl font-bold text-primary-base mb-6">{ctaHeadline}</h2>
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
