"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, PenTool, Hammer, CheckSquare, ShieldCheck, HeartHandshake, Lightbulb } from "lucide-react";

export default function AboutClient({ aboutData, settingsData }: { aboutData: any, settingsData?: any }) {
  // Content Fallbacks
  const storyHeadline = aboutData?.storyHeadline || "ROOTED IN FAITH. BUILT WITH PURPOSE.";
  
  const ctaHeadline = settingsData?.globalCtaHeadline || aboutData?.ctaHeadline || "Ready to Update Your Home?";
  const ctaSubtitle = settingsData?.globalCtaSubtitle || "Schedule a consultation to discuss your project with our builders and designers.";
  const ctaBtnText = settingsData?.globalCtaButtonText || "Contact Us Today";
  const ctaBtnUrl = settingsData?.globalCtaButtonUrl || "/contact";
  const missionStatement = aboutData?.missionStatement || "To build and design reliable, well-crafted spaces that stand the test of time and fit our clients' everyday lives.";
  const storyImage = aboutData?.storyImage || "/about-story.jpg";

  const storyParagraphs = aboutData?.storyParagraphs || [
    "Aesthetic Design & Construction was born from a belief that the gifts we are given are meant to be shared.",
    "We believe God has uniquely gifted each of us with different talents, passions, and abilities. And as we look back, it feels less like coincidence and more like a beautiful plan—bringing the right people together at the right time and giving us an opportunity to use those gifts together.",
    "For my husband, that gift has always been the ability to create with his hands. He has a natural passion for building, crafting, and bringing ideas to life—a skill that was passed down to him by his father. From an early age, he learned the value of hard work, craftsmanship, and taking pride in creating something with your own two hands.",
    "His father now brings that same passion and artistry to Aesthetic Design & Construction as our expert custom craftsman. He has an incredible artistic eye and a love for woodworking, creating custom pieces that are not only beautiful, but thoughtfully made to stand the test of time. There is something especially meaningful about seeing a gift passed from father to son, and now becoming part of something our family is building together.",
    "My own gifts have always drawn me toward the creative process. I love decorating, design, space planning, selecting the details, and imagining how all of the individual pieces can come together to transform a house into a home.",
    "And then there is Kelley.",
    "Years ago, while I was working at a furniture store, Kelley came in looking for help designing her basement and selecting furniture. What began as a design project quickly became a friendship that has lasted ever since.",
    "Kelley shares my love for decorating and has a natural talent for creating beautiful spaces. But one of the things that makes our partnership so special is the way we can see each other’s vision. We challenge, inspire, and build upon each other’s ideas, turning a thought or a feeling into a space that feels intentional and beautiful.",
    "What started as an unexpected friendship became another piece of the bigger picture. Today, Kelley is an integral part of our team and my partner on decorating projects.",
    "Four people. Different gifts. One shared purpose.",
    "Together, we bring design, decorating, construction, craftsmanship, and creativity to Aesthetic Design & Construction. But more importantly, we bring a genuine desire to use what we have been given to serve the families and community around us.",
    "We wanted to build something that was more than a business.",
    "We wanted to put down roots in the community we grew up in. We wanted to create something our children could watch us build—a family-owned company shaped by hard work, creativity, faith, and a commitment to doing things well. Something they could one day look back on and be proud to call part of their family.",
    "We believe a home is deeply personal. It is where families gather, where traditions begin, where children grow, and where countless memories are made. Because of that, we don’t believe a renovation should ever feel like simply changing finishes or knocking down walls.",
    "It should feel like creating something meaningful.",
    "That is why we approach every project with intention. We listen carefully. We design thoughtfully. We choose quality materials and finishes. We take pride in exceptional installation and craftsmanship. And we pour our hearts into the details, because we believe the work we do is an extension of the gifts we have been given.",
    "We feel incredibly blessed to have found a way to bring our passions together and share them with others.",
    "What began as individual gifts has become a shared calling.",
    "Our faith is the foundation.\\nOur family is at the heart.\\nOur craft is the expression.\\nAnd our community is who we are grateful to serve.",
    "This is Aesthetic Design & Construction.",
    "Rooted in faith. Built with purpose. Designed to last."
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
