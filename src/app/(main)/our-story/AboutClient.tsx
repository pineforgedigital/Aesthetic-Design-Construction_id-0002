"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, PenTool, Hammer, CheckSquare, ShieldCheck, HeartHandshake, Lightbulb } from "lucide-react";

export default function AboutClient({ aboutData, settingsData }: { aboutData: any, settingsData?: any }) {
  // Content Fallbacks
  const storyHeadline = aboutData?.storyHeadline;
  
  const ctaHeadline = settingsData?.globalCtaHeadline || aboutData?.ctaHeadline;
  const ctaSubtitle = settingsData?.globalCtaSubtitle;
  const ctaBtnText = settingsData?.globalCtaButtonText;
  const ctaBtnUrl = settingsData?.globalCtaButtonUrl;
  const missionStatement = aboutData?.missionStatement;
  const storyImage = aboutData?.storyImage;

  const storyParagraphs = aboutData?.storyParagraphs || [];

  const processSubtitle = aboutData?.processSubtitle;
  const processSteps = aboutData?.processSteps || [];

  const coreValuesSubtitle = aboutData?.coreValuesSubtitle;
  const coreValuesList = aboutData?.coreValuesList || [];

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

      {/* Our Story (Editorial Layout) */}
      <section className="pt-32 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
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
              src={storyImage.startsWith("/") ? storyImage : `${storyImage}?auto=format&fit=max&w=1200`}
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
