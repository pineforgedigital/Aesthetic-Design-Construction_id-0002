import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import { getSiteSettingsQuery } from "@/sanity/queries";

export default async function Footer() {
  const settings = await client.fetch(getSiteSettingsQuery);
  const footerText = settings?.footerText || "Aesthetic Design & Construction specializes in reliable home construction, full-scale remodeling, and practical interior design.";

  return (
    <footer className="bg-fine-detail text-primary-base pt-24 pb-12 mt-auto relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
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
              <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary-base/5 border border-primary-base/10 flex items-center justify-center text-primary-base hover:bg-highlight hover:border-highlight hover:text-white transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            )}
            {settings?.facebookUrl && (
              <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary-base/5 border border-primary-base/10 flex items-center justify-center text-primary-base hover:bg-highlight hover:border-highlight hover:text-white transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
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
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-primary-base/10 text-center text-primary-base/70 text-sm font-medium tracking-wide relative z-10">
        © {new Date().getFullYear()} Aesthetic Design & Construction. All rights reserved.
      </div>
    </footer>
  );
}
