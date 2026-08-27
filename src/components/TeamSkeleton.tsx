"use client";

import { motion } from "framer-motion";

export default function TeamSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-primary-contrast/5 border border-primary-contrast/5 text-center"
        >
          {/* Image Placeholder */}
          <div className="relative h-72 w-full bg-gray-200 animate-pulse"></div>
          
          {/* Content Placeholder */}
          <div className="p-8 flex flex-col items-center">
            {/* Name */}
            <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4 mb-4"></div>
            {/* Role */}
            <div className="h-3 bg-gray-200 animate-pulse rounded w-1/2 mb-6"></div>
            {/* Bio Lines */}
            <div className="w-full space-y-3">
              <div className="h-3 bg-gray-200 animate-pulse rounded w-full"></div>
              <div className="h-3 bg-gray-200 animate-pulse rounded w-full"></div>
              <div className="h-3 bg-gray-200 animate-pulse rounded w-5/6 mx-auto"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
