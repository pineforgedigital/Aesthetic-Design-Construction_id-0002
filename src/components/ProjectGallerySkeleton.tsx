"use client";

import { motion } from "framer-motion";

export default function ProjectGallerySkeleton() {
  return (
    <div className="w-full">
      {/* Filters Skeleton */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="h-10 w-32 bg-gray-200 animate-pulse rounded-full"
          ></div>
        ))}
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-primary-contrast/5 border border-primary-contrast/5"
          >
            {/* Image Placeholder */}
            <div className="relative h-72 overflow-hidden bg-gray-200 animate-pulse"></div>
            
            {/* Text Placeholder */}
            <div className="p-6">
              <div className="h-3 bg-gray-200 animate-pulse rounded w-1/3 mb-4"></div>
              <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4 mb-2"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
