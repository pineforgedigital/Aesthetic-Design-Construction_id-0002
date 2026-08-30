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
        title="Meet the Team" 
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
        badge="Our People" 
      />

      {/* Team Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-xl shadow-primary-contrast/5 border border-primary-contrast/5 text-center group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-contrast/10 transition-all duration-300"
                >
                  <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-8 relative">
                    <h2 className="font-outfit text-2xl font-bold text-primary-contrast mb-1">{member.name}</h2>
                    <p className="text-secondary-accent font-bold mb-4 uppercase tracking-[0.15em] text-xs">{member.role}</p>
                    <p className="text-tertiary-accent text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
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

      {/* Optional CTA */}
      <section className="py-24 bg-[#EBE7DF] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-primary-contrast mb-6">Want to work with us?</h2>
          <p className="text-primary-contrast text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-10 py-4 bg-highlight text-white hover:bg-[#A34F3A] transition-all rounded-full font-bold text-lg items-center shadow-lg shadow-highlight/20"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
