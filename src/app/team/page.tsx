"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const TEAM_MEMBERS = [
  {
    name: "Kellin",
    role: "Lorem ipsum", // Placeholder
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    image: "/placeholder.svg"
  },
  {
    name: "Christian",
    role: "Lorem ipsum", // Placeholder
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    image: "/placeholder.svg"
  },
  {
    name: "Kelley",
    role: "Lorem ipsum", // Placeholder
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    image: "/placeholder.svg"
  },
  {
    name: "Mark",
    role: "Lorem ipsum", // Placeholder
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    image: "/placeholder.svg"
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-primary-base">

      {/* Header Section */}
      <section className="bg-primary-contrast text-primary-base py-24 px-6 relative overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-secondary-accent via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-5xl md:text-7xl font-bold mb-6"
          >
            Meet the Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-primary-base/80 max-w-3xl mx-auto font-light"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-primary-contrast/5 border border-primary-contrast/5 text-center group"
              >
                <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-outfit text-2xl font-bold text-primary-contrast mb-1">{member.name}</h3>
                  <p className="text-tertiary-accent font-medium mb-4 uppercase tracking-wider text-sm">{member.role}</p>
                  <p className="text-tertiary-accent text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional CTA */}
      <section className="py-24 bg-[#EBE7DF] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-primary-contrast mb-6">Want to work with us?</h2>
          <p className="text-tertiary-accent text-lg mb-8">
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
