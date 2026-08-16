"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-base/80 backdrop-blur-md border-b border-primary-contrast/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center">
          <Image 
            src="/logo.jpg" 
            alt="Aesthetic Design & Construction" 
            width={120} 
            height={120} 
            className="object-contain h-20 w-20 md:h-24 md:w-24 mix-blend-multiply"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 items-center">
          {LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`text-fine-detail hover:text-primary-contrast transition-colors font-medium ${pathname === link.href ? "text-primary-contrast" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-4 px-6 py-2 bg-primary-contrast text-primary-base rounded-full font-medium hover:bg-secondary-accent transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden relative z-50 p-2 text-primary-contrast"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[73px] bg-primary-base z-40 flex flex-col px-6 py-8 border-t border-primary-contrast/10 h-[calc(100vh-73px)] overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-center mt-8">
              {LINKS.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`font-outfit text-3xl font-bold transition-colors ${pathname === link.href ? "text-primary-contrast" : "text-tertiary-accent"}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-primary-contrast/10">
                <Link 
                  href="/contact" 
                  className="inline-block px-10 py-4 bg-primary-contrast text-primary-base rounded-full font-bold text-xl hover:bg-secondary-accent transition-colors w-full"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
