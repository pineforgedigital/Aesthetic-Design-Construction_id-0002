"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";

export default function TeamClient({ teamMembers }: { teamMembers: any[] }) {
  return (
    <main className="min-h-screen bg-primary-base">
      {/* Header Section */}
      <PageBanner 
        title="Meet The Team" 
        subtitle="The builders, designers, and project managers who work together to bring your project to life." 
        badge="Our People" 
      />

      {/* Team Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {teamMembers.length > 0 ? (
            <div className="flex flex-col gap-24 lg:gap-40">
              {teamMembers.map((member, index) => {
                // Parse the bio to pull out the "gift" section if it exists
                let mainBio = member.bio || "";
                let giftText = null;
                const match = mainBio.match(/(His gift:|Her gift:)([\s\S]*)/i);
                if (match) {
                  mainBio = mainBio.substring(0, match.index).trim();
                  giftText = match[0].trim();
                }

                return (
                  <motion.div
                    key={member._id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className={`flex flex-col ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                    } gap-12 lg:gap-20 items-center`}
                  >
                    {/* Image Column */}
                    <div className="w-full lg:w-[45%] relative h-[60vh] lg:h-[80vh] rounded-[3rem] overflow-hidden shadow-2xl group">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={`${member.name}, ${member.role}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-contrast/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Text Column */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-6 relative z-10">
                      <div>
                        <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-primary-contrast mb-3">
                          {member.name}
                        </h2>
                        <p className="text-highlight font-bold uppercase tracking-[0.2em] text-sm lg:text-base">
                          {member.role}
                        </p>
                      </div>
                      
                      {/* The whitespace-pre-wrap ensures Sanity paragraphs render cleanly with line breaks */}
                      <div className="text-lg text-tertiary-accent leading-relaxed whitespace-pre-wrap">
                        {mainBio}
                      </div>

                      {/* Highlighted Gift Section - Subtle Styling */}
                      {giftText && (
                        <div className="mt-2 pt-6 border-t border-primary-contrast/10">
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
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-24">
              <h2 className="font-outfit text-3xl font-bold text-primary-contrast mb-4">Check back soon!</h2>
              <p className="text-tertiary-accent text-lg">We are currently uploading our team profiles.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modernized CTA SECTION */}
      <section className="py-32 px-6 bg-primary-contrast text-center relative overflow-hidden border-b-4 border-warm-sand">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-accent/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-6">Want to work with us?</h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl">
            A reliable network of skilled tradespeople and designers who value quality work and clear communication.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-12 py-5 bg-warm-sand text-primary-contrast hover:bg-white transition-colors rounded-full font-bold text-lg items-center shadow-2xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
