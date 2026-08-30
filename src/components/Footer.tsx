import Link from "next/link";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { client } from "@/sanity/client";
import { getSiteSettingsQuery } from "@/sanity/queries";

export default async function Footer() {
  const settings = await client.fetch(getSiteSettingsQuery);
  const footerText = settings?.footerText || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <footer className="bg-fine-detail text-primary-base pt-24 pb-12 mt-auto relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-accent/20 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/10 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10">
        <h2 className="font-outfit text-6xl md:text-[120px] font-bold text-primary-base mb-8 tracking-tighter leading-none opacity-90">
          LET&apos;S TALK
        </h2>
        <p className="text-primary-base/70 text-xl max-w-2xl mx-auto mb-10">
          Ready to build your dream space? Our team of expert designers and craftsmen are waiting to bring your vision to life.
        </p>
        <Link href="/contact" className="inline-block">
          <MagneticButton className="px-10 py-5 bg-highlight text-white rounded-full font-bold tracking-widest uppercase text-sm border border-highlight/50 shadow-2xl hover:bg-white hover:text-primary-contrast transition-colors duration-500">
            Start A Project
          </MagneticButton>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-primary-base/10 pt-16 relative z-10">
        <div className="md:col-span-5">
          <Image 
            src="/logo.jpg" 
            alt="Aesthetic Design & Construction" 
            width={120} 
            height={120} 
            className="object-contain h-24 w-24 mb-6 rounded-xl shadow-lg border border-white/10"
            unoptimized
          />
          <p className="text-primary-base/70 max-w-sm mb-8 leading-relaxed">
            {footerText}
          </p>
          <div className="flex items-center gap-4">
            {settings?.instagramUrl && (
              <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer">
                <MagneticButton className="w-12 h-12 rounded-full bg-primary-base/5 border border-primary-base/10 flex items-center justify-center text-primary-base hover:bg-highlight hover:border-highlight hover:text-white transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </MagneticButton>
              </a>
            )}
            {settings?.facebookUrl && (
              <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer">
                <MagneticButton className="w-12 h-12 rounded-full bg-primary-base/5 border border-primary-base/10 flex items-center justify-center text-primary-base hover:bg-highlight hover:border-highlight hover:text-white transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </MagneticButton>
              </a>
            )}
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-4">
          <h3 className="font-outfit text-xl font-bold text-primary-base mb-2">Quick Links</h3>
          <Link href="/" className="text-primary-base/70 hover:text-white hover:translate-x-1 transition-all w-fit">Home</Link>
          <Link href="/portfolio" className="text-primary-base/70 hover:text-white hover:translate-x-1 transition-all w-fit">Portfolio</Link>
          <Link href="/services" className="text-primary-base/70 hover:text-white hover:translate-x-1 transition-all w-fit">Services</Link>
          <Link href="/our-story" className="text-primary-base/70 hover:text-white hover:translate-x-1 transition-all w-fit">Our Story</Link>
          <Link href="/the-team" className="text-primary-base/70 hover:text-white hover:translate-x-1 transition-all w-fit">The Team</Link>
          <Link href="/contact" className="text-primary-base/70 hover:text-highlight hover:translate-x-1 transition-all mt-2 font-medium w-fit">Contact Us</Link>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <h3 className="font-outfit text-xl font-bold text-primary-base mb-2">Legal</h3>
          <Link href="/terms-of-service" className="text-primary-base/70 hover:text-white hover:translate-x-1 transition-all w-fit">Terms of Service</Link>
          <Link href="/privacy-policy" className="text-primary-base/70 hover:text-white hover:translate-x-1 transition-all w-fit">Privacy Policy</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-primary-base/10 text-center text-primary-base/40 text-sm font-medium tracking-wide relative z-10">
        © {new Date().getFullYear()} Aesthetic Design & Construction. All rights reserved.
      </div>
    </footer>
  );
}
