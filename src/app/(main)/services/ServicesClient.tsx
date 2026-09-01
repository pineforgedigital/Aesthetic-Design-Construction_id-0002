"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";

export default function ServicesClient({ pageData, servicesData }: { pageData: any, servicesData: any[] }) {
  const heroHeadline = pageData?.heroHeadline || "Our Expertise";
  const heroSubtitle = pageData?.heroSubtitle || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const ctaHeadline = pageData?.ctaHeadline || "Ready to transform your space?";

  return (
    <main className="min-h-screen bg-primary-base">
      <PageBanner title={heroHeadline} subtitle={heroSubtitle} badge="Services" />

      {servicesData && servicesData.length > 0 && (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32 md:space-y-48">
          {servicesData.map((service, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                id={service.slug}
                key={service.slug}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center relative group`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-[65%] h-[50vh] lg:h-[70vh] relative rounded-t-[2.5rem] rounded-b-xl lg:rounded-[3rem] overflow-hidden shadow-2xl z-0">
                  {service.image ? (
                    <Image
                      src={`${service.image}?auto=format&fit=crop&w=1600`}
                      alt={service.serviceName}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary-contrast/10" />
                  )}
                  {/* Subtle overlay gradient to ensure text stands out if it bleeds */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden pointer-events-none" />
                </div>

                {/* Text Card Section (Overlapping) */}
                <div 
                  className={`w-[95%] lg:w-[45%] bg-primary-base p-8 md:p-12 lg:p-16 rounded-[2rem] shadow-2xl border border-primary-contrast/5 z-10 -mt-16 lg:mt-0 ${
                    isEven ? 'lg:-ml-24' : 'lg:-mr-24'
                  }`}
                >
                  <span className="text-secondary-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                    {String(idx + 1).padStart(2, '0')} — Specialization
                  </span>
                  <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-primary-contrast mb-6 leading-tight">
                    {service.serviceName}
                  </h2>
                  <p className="text-lg text-tertiary-accent leading-relaxed mb-8">
                    {service.description || "Discover the unparalleled quality of our premium construction and design services."}
                  </p>
                  
                  {service.capabilities && service.capabilities.length > 0 && (
                    <div className="mb-10">
                      <h4 className="text-primary-contrast font-bold mb-4">Core Capabilities:</h4>
                      <ul className="space-y-4">
                        {service.capabilities.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-4 text-tertiary-accent">
                            <CheckCircle2 className="text-highlight mt-1 flex-shrink-0" size={20} /> 
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 font-bold text-primary-contrast hover:text-highlight transition-colors group/link"
                  >
                    Start Your Project <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </section>
      )}

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
