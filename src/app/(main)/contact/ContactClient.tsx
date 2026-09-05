"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import PageBanner from "@/components/PageBanner";

export default function ContactClient({ pageData, settingsData }: { pageData: any, settingsData: any }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const heroHeadline = pageData?.heroHeadline || "Let's Build Something Beautiful";
  const heroSubtitle = pageData?.heroSubtitle || "Start a conversation with our design and construction team.";
  const contactInfoSubtitle = pageData?.contactInfoSubtitle || "Whether you are planning a complete home renovation or a bespoke interior design project, our team is ready to bring your vision to life. Reach out to schedule a private consultation.";

  const email = settingsData?.contactEmail || "info@aestheticdesign.com";
  const phone = settingsData?.contactPhone || "(555) 123-4567";
  const address = settingsData?.address || "Greater Metropolitan Area\nand surrounding suburbs.";
  const businessHours = settingsData?.businessHours || "Mon - Fri: 8:00 AM - 6:00 PM\nSat - Sun: Closed";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam protection check
    const formData = new FormData(e.target as HTMLFormElement);
    if (formData.get("_honey")) {
      // Silent rejection for bots: pretend it succeeded so they don't try again
      setIsSubmitted(true);
      return;
    }

    // In a real app, you would send this to a backend or service like Formspree
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-primary-base">

      {/* Hero Section */}
      <PageBanner title={heroHeadline} subtitle={heroSubtitle} badge="Contact Us" />

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-8">Contact Information</h2>
              <p className="text-tertiary-accent text-lg leading-relaxed mb-10">
                {contactInfoSubtitle}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-primary-contrast/5 text-secondary-accent flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-primary-contrast mb-1">Phone</h3>
                  <p className="text-primary-contrast/80 text-lg">{phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-primary-contrast/5 text-secondary-accent flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-primary-contrast mb-1">Email</h3>
                  <p className="text-primary-contrast/80 text-lg">{email}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-primary-contrast/5 text-secondary-accent flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-primary-contrast mb-1">Service Area</h3>
                  <p className="text-primary-contrast/80 text-lg whitespace-pre-wrap">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-primary-contrast/5 text-secondary-accent flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-primary-contrast mb-1">Business Hours</h3>
                  <p className="text-primary-contrast/80 text-lg whitespace-pre-wrap">{businessHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Form (Right Column) */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-primary-contrast/5 border border-primary-contrast/10">

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-center py-16 flex flex-col items-center justify-center min-h-[500px]"
                >
                  <div className="relative w-32 h-32 mb-8">
                    <motion.svg
                      viewBox="0 0 100 100"
                      className="absolute inset-0 w-full h-full text-secondary-accent"
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                      <motion.path
                        d="M30 50 L45 65 L70 35"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                      />
                    </motion.svg>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 10 }}
                      className="absolute inset-0 bg-secondary-accent/10 rounded-full"
                    ></motion.div>
                  </div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="font-outfit text-4xl font-bold text-primary-contrast mb-4"
                  >
                    Inquiry Received
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-tertiary-accent text-xl mb-10 max-w-sm mx-auto"
                  >
                    Thank you for choosing Aesthetic Design & Construction. A design specialist will review your details and contact you within 24 hours.
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex px-8 py-3 bg-primary-base border border-primary-contrast/10 text-primary-contrast hover:bg-white transition-all rounded-full font-medium text-lg items-center shadow-sm"
                  >
                    Submit Another Project
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-outfit text-2xl font-bold text-primary-contrast mb-8">Send us a message</h3>

                  {/* Honeypot Spam Protection Field */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="_honey">Don't fill this out if you're human:</label>
                    <input type="text" id="_honey" name="_honey" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-primary-contrast">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-primary-base/50 border border-primary-contrast/10 focus:outline-none focus:border-secondary-accent focus:ring-1 focus:ring-secondary-accent transition-all text-primary-contrast"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-primary-contrast">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-primary-base/50 border border-primary-contrast/10 focus:outline-none focus:border-secondary-accent focus:ring-1 focus:ring-secondary-accent transition-all text-primary-contrast"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-primary-contrast">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-xl bg-primary-base/50 border border-primary-contrast/10 focus:outline-none focus:border-secondary-accent focus:ring-1 focus:ring-secondary-accent transition-all text-primary-contrast"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium text-primary-contrast">Project Type</label>
                      <select
                        id="projectType"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl bg-primary-base/50 border border-primary-contrast/10 focus:outline-none focus:border-secondary-accent focus:ring-1 focus:ring-secondary-accent transition-all text-primary-contrast appearance-none"
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="kitchen">Kitchen Remodel</option>
                        <option value="bath">Bathroom Remodel</option>
                        <option value="flooring">Flooring</option>
                        <option value="interior">Full Interior Remodel</option>
                        <option value="rendering">3D Rendering</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-primary-contrast">Project Details</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-primary-base/50 border border-primary-contrast/10 focus:outline-none focus:border-secondary-accent focus:ring-1 focus:ring-secondary-accent transition-all text-primary-contrast resize-none"
                      placeholder="Tell us about your vision..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-highlight text-white rounded-xl font-bold text-lg hover:bg-[#A34F3A] transition-colors flex items-center justify-center gap-2 shadow-xl shadow-highlight/20"
                  >
                    Submit Inquiry <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
