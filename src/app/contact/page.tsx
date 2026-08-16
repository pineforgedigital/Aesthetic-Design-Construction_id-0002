"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a backend or service like Formspree
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-primary-base">
      
      {/* Hero Section */}
      <section className="bg-primary-contrast text-primary-base py-32 px-6 relative overflow-hidden">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-secondary-accent rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-highlight rounded-full blur-[120px] opacity-10"></div>
        
        {/* Eucalyptus Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Image src="/leaf.jpg" alt="" width={500} height={500} className="object-contain invert mix-blend-screen -rotate-12 translate-x-1/4" />
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Image src="/leaf.jpg" alt="" width={400} height={400} className="object-contain invert mix-blend-screen rotate-180 -translate-x-1/4" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-5xl md:text-7xl font-bold mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-primary-base/80 max-w-3xl mx-auto font-light"
          >
            Ready to start your next project? Fill out the form below and our team will get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-outfit text-4xl font-bold text-primary-contrast mb-8">Contact Information</h2>
              <p className="text-tertiary-accent text-lg leading-relaxed mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-primary-contrast/5 text-secondary-accent flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-outfit text-xl font-bold text-primary-contrast mb-1">Phone</h4>
                  <p className="text-tertiary-accent text-lg">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-primary-contrast/5 text-secondary-accent flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-outfit text-xl font-bold text-primary-contrast mb-1">Email</h4>
                  <p className="text-tertiary-accent text-lg">info@aestheticdesign.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-primary-contrast/5 text-secondary-accent flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-outfit text-xl font-bold text-primary-contrast mb-1">Service Area</h4>
                  <p className="text-tertiary-accent text-lg">Greater Metropolitan Area<br/>and surrounding suburbs.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-primary-contrast/5 text-secondary-accent flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-outfit text-xl font-bold text-primary-contrast mb-1">Business Hours</h4>
                  <p className="text-tertiary-accent text-lg">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat - Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Form (Right Column) */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-primary-contrast/5 border border-primary-contrast/10">
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-secondary-accent/20 text-secondary-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={48} className="ml-2" />
                  </div>
                  <h3 className="font-outfit text-3xl font-bold text-primary-contrast mb-4">Message Sent!</h3>
                  <p className="text-tertiary-accent text-lg mb-8">
                    Thank you for reaching out to Aesthetic Design & Construction. A member of our team will be in touch shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-secondary-accent font-medium hover:text-primary-contrast transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-outfit text-2xl font-bold text-primary-contrast mb-8">Send us a message</h3>
                  
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
