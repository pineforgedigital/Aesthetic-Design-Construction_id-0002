import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aesthetic Design & Construction",
  description: "High-end luxury construction, remodeling, and interior design.",
};

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
        <div className="flex flex-col gap-2">
          <h4 className="font-outfit font-medium text-lg mb-2">Quick Links</h4>
          <Link href="/" className="text-primary-base/70 hover:text-primary-base transition-colors">Home</Link>
          <Link href="/projects" className="text-primary-base/70 hover:text-primary-base transition-colors">Projects</Link>
          <Link href="/services" className="text-primary-base/70 hover:text-primary-base transition-colors">Services</Link>
          <Link href="/contact" className="text-primary-base/70 hover:text-primary-base transition-colors">Contact</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-outfit font-medium text-lg mb-2">Legal</h4>
          <Link href="/terms-of-service" className="text-primary-base/70 hover:text-primary-base transition-colors">Terms of Service</Link>
          <Link href="/privacy-policy" className="text-primary-base/70 hover:text-primary-base transition-colors">Privacy Policy</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-primary-base/10 text-center text-primary-base/50 text-sm">
        © {new Date().getFullYear()} Aesthetic Design & Construction. All rights reserved.
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans selection:bg-secondary-accent/30 selection:text-primary-contrast relative overflow-x-hidden">
        
        {/* Decorative Background Leaves */}
        <div className="fixed -left-32 top-[20%] z-0 opacity-40 mix-blend-multiply pointer-events-none hidden md:block">
          <Image src="/leaf.jpg" alt="" width={400} height={400} className="object-contain -rotate-12" priority />
        </div>
        <div className="fixed -right-32 bottom-[10%] z-0 opacity-30 mix-blend-multiply pointer-events-none hidden md:block">
          <Image src="/leaf.jpg" alt="" width={500} height={500} className="object-contain rotate-180" priority />
        </div>

        <Navbar />
        <div className="flex-grow pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
