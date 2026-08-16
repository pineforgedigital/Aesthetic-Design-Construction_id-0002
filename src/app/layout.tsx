import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Link from "next/link";
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

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-base/80 backdrop-blur-md border-b border-primary-contrast/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-outfit text-2xl font-bold text-primary-contrast tracking-tight">
          Aesthetic Design & Construction
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-fine-detail hover:text-primary-contrast transition-colors font-medium">Home</Link>
          <Link href="/projects" className="text-fine-detail hover:text-primary-contrast transition-colors font-medium">Projects</Link>
          <Link href="/services" className="text-fine-detail hover:text-primary-contrast transition-colors font-medium">Services</Link>
          <Link href="/about" className="text-fine-detail hover:text-primary-contrast transition-colors font-medium">About</Link>
          <Link href="/team" className="text-fine-detail hover:text-primary-contrast transition-colors font-medium">Team</Link>
        </nav>
        <Link href="/contact" className="hidden md:inline-flex px-5 py-2.5 bg-primary-contrast text-primary-base rounded-full hover:bg-fine-detail transition-all font-medium">
          Contact Us
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-fine-detail text-primary-base py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-outfit text-xl font-semibold mb-4">Aesthetic Design & Construction</h3>
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
      <body className="min-h-full flex flex-col font-sans selection:bg-secondary-accent/30 selection:text-primary-contrast">
        <Navbar />
        <div className="flex-grow pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
