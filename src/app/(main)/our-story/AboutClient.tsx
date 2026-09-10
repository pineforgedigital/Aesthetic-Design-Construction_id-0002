"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, PenTool, Hammer, CheckSquare, ShieldCheck, HeartHandshake, Lightbulb } from "lucide-react";
import PageBanner from "@/components/PageBanner";

export default function AboutClient({ aboutData, settingsData }: { aboutData: any, settingsData?: any }) {
  // Content Fallbacks
  const storyHeadline = aboutData?.storyHeadline || "Our Story";
  
  const ctaHeadline = settingsData?.globalCtaHeadline || aboutData?.ctaHeadline || "Ready to Update Your Home?";
  const ctaSubtitle = settingsData?.globalCtaSubtitle || "Schedule a consultation to discuss your project with our builders and designers.";
  const ctaBtnText = settingsData?.globalCtaButtonText || "Contact Us Today";
  const ctaBtnUrl = settingsData?.globalCtaButtonUrl || "/contact";
  const missionStatement = aboutData?.missionStatement || "To build and design reliable, well-crafted spaces that stand the test of time and fit our clients' everyday lives.";
  const storyImage = aboutData?.storyImage || "/placeholder.svg";

  const storyParagraphs = aboutData?.storyParagraphs || [
    "Aesthetic Design & Construction was born from a belief that the gifts we are given are meant to be shared."
  ];

  const processSubtitle = aboutData?.processSubtitle || "A clear, organized approach from planning to completion, keeping you informed at every step.";
  
  const defaultProcessSteps = [
    { iconName: "Compass", title: "Consultation", desc: "We start by discussing your goals, timeline, and budget to build a solid plan for your project." },
    { iconName: "PenTool", title: "Design", desc: "We provide detailed design plans so you can envision your space before construction begins." },
    { iconName: "Hammer", title: "Construction", desc: "Our builders manage the entire construction process, focusing on quality materials and structural integrity." },
    { iconName: "CheckSquare", title: "Final Walkthrough", desc: "We review every detail with you to ensure the final result meets your expectations." }
  ];
  const processSteps = aboutData?.processSteps || defaultProcessSteps;

  const coreValuesSubtitle = aboutData?.coreValuesSubtitle || "The core principles that guide our work and our relationships with clients.";
  
  const defaultCoreValues = [
    { iconName: "ShieldCheck", title: "Quality Craftsmanship", desc: "We work with experienced tradespeople to ensure the work is done right the first time." },
    { iconName: "HeartHandshake", title: "Clear Communication", desc: "We keep you updated on progress, answering questions and sticking to the budget." },
    { iconName: "Lightbulb", title: "Practical Solutions", desc: "We use effective building methods to solve structural and design challenges." }
  ];
  const coreValuesList = aboutData?.coreValuesList || defaultCoreValues;

  // Helper function to dynamically resolve Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return Compass;
      case 'PenTool': return PenTool;
      case 'Hammer': return Hammer;
      case 'CheckSquare': return CheckSquare;
      case 'ShieldCheck': return ShieldCheck;
      case 'HeartHandshake': return HeartHandshake;
      case 'Lightbulb': return Lightbulb;
      default: return CheckSquare;
    }
  };

  return (
    <main className="min-h-screen bg-primary-base">

      {/* Hero Section */}
      <PageBanner title="Our Story" subtitle={missionStatement} badge="Get To Know Us" />

      {/* Our Story (Editorial Layout) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="w-full lg:w-[50%] flex flex-col gap-6 items-start">
            <h2 className="font-outfit text-3xl lg:text-5xl font-bold text-primary-contrast mb-4 leading-tight uppercase tracking-wider">
              {storyHeadline}
            </h2>
            <div className="text-lg text-tertiary-accent leading-relaxed relative flex flex-col gap-6">
              {storyParagraphs.map((paragraph: string, index: number) => {
                if (index === 0) {
                  return (
                    <div key={index} className="relative">
                      <span className="float-left text-7xl font-outfit text-highlight font-bold leading-[0.8] mr-4 mt-2">
                        {paragraph.charAt(0)}
                      </span>
                      {paragraph.substring(1)}
                    </div>
                  );
                }
                
                // Special handling for the multi-line stanza
                if (paragraph.includes('\\n')) {
                  return (
                    <div key={index} className="pl-6 border-l-4 border-highlight font-medium text-primary-contrast italic py-2">
                      {paragraph.split('\\n').map((line: string, i: number) => (
                        <p key={i} className="mb-1 last:mb-0">{line}</p>
                      ))}
                    </div>
                  );
                }

                return (
                  <p key={index}>{paragraph}</p>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-[50%] relative h-[60vh] lg:h-[85vh] rounded-[3rem] overflow-hidden shadow-2xl group lg:sticky lg:top-32 self-start">
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
            {coreValuesList.map((value: any, i: number) => {
              const Icon = getIcon(value.iconName);
              return (
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
                    <Icon size={40} />
                  </div>
                  <h3 className="font-outfit text-2xl font-bold text-primary-contrast mb-4">{value.title}</h3>
                  <p className="text-tertiary-accent leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* Modernized CTA SECTION */}
      <section className="py-32 px-6 bg-primary-contrast text-center relative overflow-hidden border-b-4 border-warm-sand">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-accent/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-8">{ctaHeadline}</h2>
          <p className="text-white/80 text-xl mb-10 whitespace-pre-wrap">{ctaSubtitle}</p>
          <Link
            href={ctaBtnUrl}
            className="inline-flex px-12 py-5 bg-warm-sand text-primary-contrast hover:bg-white transition-colors rounded-full font-bold text-lg items-center shadow-2xl"
          >
            {ctaBtnText}
          </Link>
        </div>
      </section>

    </main>
  );
}
