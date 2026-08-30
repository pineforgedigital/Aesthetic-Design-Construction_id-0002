"use client";

import { motion } from "framer-motion";
import StaggeredText from "./StaggeredText";
import { ReactNode } from "react";

interface PageBannerProps {
  title: string;
  subtitle?: ReactNode;
  badge?: string;
  className?: string;
}

export default function PageBanner({ title, subtitle, badge, className = "py-32" }: PageBannerProps) {
  return (
    <section className={`bg-primary-contrast text-primary-base px-6 relative overflow-hidden bg-grid-pattern ${className}`}>
      {/* Abstract Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-accent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-warm-sand rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-secondary-accent uppercase tracking-[0.2em] text-sm font-semibold mb-6 border border-secondary-accent/30 px-4 py-1 rounded-full backdrop-blur-sm"
          >
            {badge}
          </motion.div>
        )}
        
        <StaggeredText 
          text={title}
          className="font-outfit text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
        />
        
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-primary-base/80 max-w-3xl mx-auto font-light drop-shadow-md"
          >
            {subtitle}
          </motion.div>
        )}
      </div>
    </section>
  );
}
