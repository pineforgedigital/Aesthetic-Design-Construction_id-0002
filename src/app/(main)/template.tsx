"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Luxury Curtain Wipe Transition */}
      <motion.div
        className="fixed inset-0 z-[9999] bg-primary-contrast pointer-events-none"
        initial={{ top: 0 }}
        animate={{ top: "-100vh" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />
      
      {/* Subtle Content Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
