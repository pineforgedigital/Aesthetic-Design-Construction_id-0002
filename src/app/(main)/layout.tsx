import Navbar from "@/components/Navbar";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-fine-detail text-primary-base py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image 
            src="/logo.jpg" 
            alt="Aesthetic Design & Construction" 
            width={120} 
            height={120} 
            className="object-contain h-24 w-24 mb-6 rounded-xl shadow-lg border border-white/10"
          />
          <p className="text-primary-base/70 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-outfit text-xl font-bold text-primary-base mb-2">Quick Links</h2>
          <Link href="/" className="text-primary-base/70 hover:text-white transition-colors">Home</Link>
          <Link href="/projects" className="text-primary-base/70 hover:text-white transition-colors">Portfolio</Link>
          <Link href="/services" className="text-primary-base/70 hover:text-white transition-colors">Services</Link>
          <Link href="/about" className="text-primary-base/70 hover:text-white transition-colors">Our Story</Link>
          <Link href="/team" className="text-primary-base/70 hover:text-white transition-colors">The Team</Link>
          <Link href="/contact" className="text-primary-base/70 hover:text-white transition-colors mt-2">Contact</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-outfit font-medium text-lg mb-2">Legal</h2>
          <Link href="/terms-of-service" className="text-primary-base/70 hover:text-primary-base transition-colors">Terms of Service</Link>
          <Link href="/privacy-policy" className="text-primary-base/70 hover:text-primary-base transition-colors">Privacy Policy</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-primary-base/10 text-center text-primary-base/70 text-sm">
        © {new Date().getFullYear()} Aesthetic Design & Construction. All rights reserved.
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Decorative Background Leaves */}
      <div className="fixed -left-20 md:-left-32 top-[20%] z-0 opacity-20 md:opacity-40 mix-blend-multiply pointer-events-none w-48 md:w-auto">
        <Image src="/leaf.jpg" alt="" width={400} height={400} className="object-contain -rotate-12" priority />
      </div>
      <div className="fixed -right-24 md:-right-32 bottom-[10%] z-0 opacity-15 md:opacity-30 mix-blend-multiply pointer-events-none w-64 md:w-auto">
        <Image src="/leaf.jpg" alt="" width={500} height={500} className="object-contain rotate-180" priority />
      </div>

      <Navbar />
      <div className="flex-grow pt-[112px] md:pt-[128px]">
        {children}
      </div>
      <Footer />
    </>
  );
}
