"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";

export default function TeamClient({ teamMembers, settingsData }: { teamMembers: any[], settingsData?: any }) {
  const ctaHeadline = settingsData?.globalCtaHeadline || "Want to work with us?";
  const ctaSubtitle = settingsData?.globalCtaSubtitle || "A reliable network of skilled tradespeople and designers who value quality work and clear communication.";
  const ctaBtnText = settingsData?.globalCtaButtonText || "Get in Touch";
  const ctaBtnUrl = settingsData?.globalCtaButtonUrl || "/contact";

  const [selectedMember, setSelectedMember] = useState<any>(null);

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMember]);

  return (
    <main className="min-h-screen bg-primary-base">
      {/* Header Section */}
      <PageBanner 
        title="Meet The Team" 
        subtitle="The builders, designers, and project managers who work together to bring your project to life." 
        badge="Our People" 
      />

      {/* Team Grid */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D1A57A]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#B85B43]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12 lg:gap-x-24">
              {["Keelin", "Christian", "Kelley", "Mark"]
                .map(name => teamMembers.find(m => m.name.includes(name)))
                .filter(Boolean)
                .map((member, i) => (
                <motion.div
                  key={member._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group cursor-pointer flex flex-col items-center text-center max-w-sm mx-auto w-full"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative w-full aspect-[3/4] mb-8 rounded-[2rem] overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-primary-contrast/5 group-hover:border-warm-sand">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary-contrast/0 group-hover:bg-primary-contrast/5 transition-colors duration-500" />
                  </div>
                  <h3 className="font-outfit text-3xl font-bold text-primary-contrast mb-2">{member.name}</h3>
                  <p className="text-highlight font-bold uppercase tracking-widest text-sm">{member.role}</p>
                  <span className="mt-6 text-primary-contrast font-medium flex items-center gap-2 group-hover:text-highlight transition-colors opacity-70 group-hover:opacity-100">
                    View Bio <ArrowRight size={16} />
                  </span>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <h2 className="font-outfit text-3xl font-bold text-primary-contrast mb-4">Check back soon!</h2>
              <p className="text-tertiary-accent text-lg">We are currently uploading our team profiles.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-primary-contrast/80 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
            data-lenis-prevent="true"
          >
            <div 
              className="relative w-full max-w-4xl bg-primary-base rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-50 p-3 bg-white/80 backdrop-blur hover:bg-white rounded-full text-primary-contrast hover:text-highlight transition-all shadow-lg hover:scale-110"
                onClick={() => setSelectedMember(null)}
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-2/5 relative h-64 md:h-auto shrink-0 bg-[#EBE7DF]">
                <Image
                  src={selectedMember.image || "/placeholder.svg"}
                  alt={`${selectedMember.name}, ${selectedMember.role}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto" data-lenis-prevent="true">
                <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-2">{selectedMember.name}</h2>
                <p className="text-highlight font-bold uppercase tracking-widest text-sm mb-8">{selectedMember.role}</p>
                
                {(() => {
                  let mainBio = selectedMember.bio || "";
                  let giftText = null;
                  const match = mainBio.match(/(His gift:|Her gift:)([\s\S]*)/i);
                  if (match) {
                    mainBio = mainBio.substring(0, match.index).trim();
                    giftText = match[0].trim();
                  }

                  return (
                    <>
                      <div className="text-lg text-tertiary-accent leading-relaxed whitespace-pre-wrap">
                        {mainBio}
                      </div>
                      
                      {giftText && (
                        <div className="mt-8 pt-6 border-t border-primary-contrast/10">
                          <p className="text-tertiary-accent text-lg leading-relaxed">
                            <span className="font-bold text-highlight tracking-wide">
                              {giftText.substring(0, giftText.indexOf(':') + 1)}
                            </span>
                            <span className="italic">
                              {giftText.substring(giftText.indexOf(':') + 1)}
                            </span>
                          </p>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modernized CTA SECTION */}
      <section className="py-32 px-6 bg-primary-contrast text-center relative overflow-hidden border-b-4 border-warm-sand">
        {/* ... CTA elements remain exactly the same */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-accent/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-6">{ctaHeadline}</h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl whitespace-pre-wrap">
            {ctaSubtitle}
          </p>
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
