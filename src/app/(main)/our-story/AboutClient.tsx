"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, PenTool, Hammer, CheckSquare, ShieldCheck, HeartHandshake, Lightbulb } from "lucide-react";

export default function AboutClient({ aboutData }: { aboutData: any }) {
  const headline = aboutData?.storyHeadline || "Our Story & Structure";
  const storyText = aboutData?.storyText || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.";
  const missionStatement = aboutData?.missionStatement || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  const processSubtitle = aboutData?.processSubtitle || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const coreValuesSubtitle = aboutData?.coreValuesSubtitle || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const ctaHeadline = aboutData?.ctaHeadline || "Ready to start your journey?";

  return (
    <main className="min-h-screen bg-primary-base">

      {/* Hero Section */}
      <section className="bg-primary-contrast text-primary-base py-32 px-6 relative overflow-hidden bg-grid-pattern">
        <div className="absolute -left-40 -top-40 w-96 h-96 bg-secondary-accent rounded-full blur-[120px] opacity-20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-5xl md:text-7xl font-bold mb-6"
          >
            {headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-primary-base/80 max-w-3xl mx-auto font-light"
          >
            {missionStatement}
          </motion.p>
        </div>
      </section>

      {/* Our Story (Split Layout) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-6">{headline}</h2>
            <p className="text-lg text-tertiary-accent mb-6 leading-relaxed whitespace-pre-wrap">
              {storyText}
            </p>
            <div className="flex gap-4">
              <div className="p-6 bg-white rounded-xl shadow-lg border border-primary-contrast/5">
                <h3 className="font-outfit text-3xl font-bold text-primary-contrast mb-1">&quot;X&quot;+</h3>
                <p className="text-sm text-secondary-accent font-medium uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg border border-primary-contrast/5">
                <h3 className="font-outfit text-3xl font-bold text-primary-contrast mb-1">&quot;X&quot;+</h3>
                <p className="text-sm text-secondary-accent font-medium uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg"
                alt="Aesthetic Design & Construction Team"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary-accent rounded-2xl -z-10 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-[#EBE7DF] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-4">Our Proven Process</h2>
            <div className="h-1 w-24 bg-highlight mx-auto rounded-full mb-6"></div>
            <p className="text-tertiary-accent max-w-2xl mx-auto text-lg whitespace-pre-wrap">
              {processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Compass, title: "1. Consultation", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
              { icon: PenTool, title: "2. Design & Rendering", desc: "Suspendisse varius enim in eros elementum tristique cursus." },
              { icon: Hammer, title: "3. Construction", desc: "Aenean faucibus nibh et justo cursus id rutrum imperdiet." },
              { icon: CheckSquare, title: "4. Final Walkthrough", desc: "Pellentesque vel volutpat felis, eu condimentum massa." }
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-xl shadow-primary-contrast/5 border border-primary-contrast/5 border-b-4 border-b-transparent hover:border-b-warm-sand transition-colors relative group"
              >
                <div className="absolute top-0 left-8 w-1 h-8 bg-warm-sand/40 -mt-8 hidden md:block group-hover:bg-warm-sand transition-colors"></div>
                <div className="w-16 h-16 bg-primary-contrast text-warm-sand rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-contrast/20 group-hover:scale-110 transition-transform">
                  <step.icon size={32} />
                </div>
                <h3 className="font-outfit text-2xl font-bold text-primary-contrast mb-3">{step.title}</h3>
                <p className="text-tertiary-accent leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-4">Our Core Values</h2>
            <p className="text-tertiary-accent max-w-2xl mx-auto text-lg whitespace-pre-wrap">
              {coreValuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-highlight/10 text-highlight rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={40} />
              </div>
              <h3 className="font-outfit text-2xl font-bold text-primary-contrast mb-4">Master Craftsmanship</h3>
              <p className="text-tertiary-accent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-highlight/10 text-highlight rounded-full flex items-center justify-center mb-6">
                <HeartHandshake size={40} />
              </div>
              <h3 className="font-outfit text-2xl font-bold text-primary-contrast mb-4">Transparent Communication</h3>
              <p className="text-tertiary-accent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-highlight/10 text-highlight rounded-full flex items-center justify-center mb-6">
                <Lightbulb size={40} />
              </div>
              <h3 className="font-outfit text-2xl font-bold text-primary-contrast mb-4">Innovative Solutions</h3>
              <p className="text-tertiary-accent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-fine-detail text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-outfit text-4xl font-bold text-primary-base mb-6">{ctaHeadline}</h2>
          <Link
            href="/contact"
            className="inline-flex px-10 py-4 bg-highlight text-white hover:bg-[#A34F3A] transition-all rounded-full font-bold text-lg items-center shadow-xl shadow-highlight/20"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

    </main>
  );
}
