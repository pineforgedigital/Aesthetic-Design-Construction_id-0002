"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, PenTool, Hammer, CheckSquare, ShieldCheck, HeartHandshake, Lightbulb } from "lucide-react";
import PageBanner from "@/components/PageBanner";

export default function AboutClient({ aboutData }: { aboutData: any }) {
  const headline = aboutData?.storyHeadline || "Our Story & Structure";
  const storyText = aboutData?.storyText || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Pellentesque vel volutpat felis, eu condimentum massa. Aenean faucibus nibh et justo cursus id rutrum imperdiet. Nunc ut sem vitae risus tristique posuere. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum imperdiet. Nunc ut sem vitae risus tristique posuere.";
  const storyImage = aboutData?.storyImage || "/placeholder.svg";
  const missionStatement = aboutData?.missionStatement || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  const processSubtitle = aboutData?.processSubtitle || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const coreValuesSubtitle = aboutData?.coreValuesSubtitle || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const ctaHeadline = aboutData?.ctaHeadline || "Ready to start your journey?";

  return (
    <main className="min-h-screen bg-primary-base">

      {/* Hero Section */}
      <PageBanner title={headline} subtitle={missionStatement} badge="Get To Know Us" />

      {/* Our Story (Editorial Layout) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-[45%]">
            <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-primary-contrast mb-8 leading-tight">
              {headline}
            </h2>
            <div className="text-lg text-tertiary-accent leading-relaxed relative">
              <span className="float-left text-7xl font-outfit text-highlight font-bold leading-[0.8] mr-4 mt-2">
                {storyText.charAt(0)}
              </span>
              {storyText.substring(1)}
            </div>
          </div>
          <div className="w-full lg:w-[55%] relative h-[50vh] lg:h-[70vh] rounded-[3rem] overflow-hidden shadow-2xl group">
            <Image
              src={storyImage !== "/placeholder.svg" ? `${storyImage}?auto=format&fit=max&w=1200` : "/placeholder.svg"}
              alt="Aesthetic Design & Construction Team"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-contrast/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Our Proven Process (2x2 Grid) */}
      <section className="py-32 px-6 bg-[#EBE7DF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-primary-contrast mb-6">Our Proven Process</h2>
            <p className="text-tertiary-accent max-w-2xl mx-auto text-lg whitespace-pre-wrap">
              {processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { icon: Compass, title: "Consultation", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
              { icon: PenTool, title: "Design & Rendering", desc: "Suspendisse varius enim in eros elementum tristique cursus. Pellentesque vel volutpat felis, eu condimentum massa." },
              { icon: Hammer, title: "Construction", desc: "Aenean faucibus nibh et justo cursus id rutrum imperdiet. Nunc ut sem vitae risus tristique posuere." },
              { icon: CheckSquare, title: "Final Walkthrough", desc: "Pellentesque vel volutpat felis, eu condimentum massa. Duis cursus, mi quis viverra ornare, eros dolor." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative bg-white p-10 lg:p-14 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-transparent hover:border-warm-sand"
              >
                {/* Massive Background Number */}
                <div className="absolute -bottom-4 -right-4 text-[12rem] leading-none font-outfit font-bold text-[#EBE7DF] opacity-40 select-none group-hover:scale-110 transition-transform duration-700 z-0">
                  0{i + 1}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary-contrast text-warm-sand rounded-xl flex items-center justify-center mb-8 shadow-md group-hover:-translate-y-1 transition-transform">
                    <step.icon size={28} />
                  </div>
                  <h3 className="font-outfit text-3xl font-bold text-primary-contrast mb-4">
                    {step.title}
                  </h3>
                  <p className="text-tertiary-accent leading-relaxed text-lg max-w-md">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values (Interactive Glow Cards) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-primary-contrast mb-6">Our Core Values</h2>
            <p className="text-tertiary-accent max-w-2xl mx-auto text-lg whitespace-pre-wrap">
              {coreValuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: ShieldCheck, title: "Master Craftsmanship", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
              { icon: HeartHandshake, title: "Transparent Communication", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
              { icon: Lightbulb, title: "Innovative Solutions", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group"
              >
                {/* Glowing border effect on hover */}
                <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-br from-highlight to-secondary-accent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                
                {/* Card Content */}
                <div className="relative h-full rounded-[2rem] bg-white p-10 shadow-lg border border-primary-contrast/5 group-hover:border-transparent transition-colors z-10 text-center">
                  <div className="w-20 h-20 mx-auto bg-highlight/10 text-highlight rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <value.icon size={40} />
                  </div>
                  <h3 className="font-outfit text-2xl font-bold text-primary-contrast mb-4">{value.title}</h3>
                  <p className="text-tertiary-accent leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modernized CTA SECTION */}
      <section className="py-32 px-6 bg-primary-contrast text-center relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-accent/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-8">{ctaHeadline}</h2>
          <Link
            href="/contact"
            className="inline-flex px-12 py-5 bg-warm-sand text-primary-contrast hover:bg-white transition-colors rounded-full font-bold text-lg items-center shadow-2xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

    </main>
  );
}
