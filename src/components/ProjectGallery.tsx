"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

type ProjectCategory = "All" | "3D Rendering" | "Flooring" | "Kitchen Remodeling" | "Luxury Bathrooms" | "Interior Design & Decorating" | "Custom Tile Work" | "Premium Countertops" | "Full Interior Remodeling" | "Custom Pieces" | "Fireplaces";

export interface Project {
  _id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  mainImage: string;
  images: string[];
}

const CATEGORIES: ProjectCategory[] = ["All", "Kitchen Remodeling", "Luxury Bathrooms", "Full Interior Remodeling", "Flooring", "3D Rendering", "Interior Design & Decorating", "Custom Tile Work", "Premium Countertops", "Custom Pieces", "Fireplaces"];

export default function ProjectGallery({ projects = [] }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Editorial Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-20 border-b border-primary-contrast/10 pb-4">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative pb-4 font-outfit text-sm md:text-base tracking-widest uppercase transition-colors duration-300 ${
              activeCategory === category 
                ? "text-primary-contrast font-bold" 
                : "text-tertiary-accent hover:text-primary-contrast"
            }`}
          >
            {category}
            {activeCategory === category && (
              <motion.div
                layoutId="activeCategoryBorder"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-contrast"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Masonry-style Grid */}
      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project._id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 6) * 0.1 }}
              className="break-inside-avoid relative z-10 group cursor-pointer bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary-contrast/10 transition-all duration-500"
              onClick={() => setSelectedProject(project)}
            >
              {/* Variable height images for masonry effect */}
              <div className={`relative w-full overflow-hidden bg-[#EBE7DF] ${i % 3 === 0 ? 'aspect-[4/5]' : i % 2 === 0 ? 'aspect-square' : 'aspect-[3/4]'}`}>
                <Image 
                  src={`${project.mainImage}?auto=format&fit=crop&w=800`} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                />
                <div className="absolute inset-0 bg-primary-contrast/0 group-hover:bg-primary-contrast/20 transition-colors duration-500 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100 drop-shadow-md" size={48} />
                </div>
              </div>
              <div className="p-8">
                <p className="text-xs text-tertiary-accent font-bold mb-3 uppercase tracking-widest border-b border-tertiary-accent/20 pb-2 inline-block">{project.category}</p>
                <h3 className="font-outfit text-2xl font-bold text-primary-contrast leading-snug">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-primary-contrast/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
            data-lenis-prevent="true"
          >
            <div 
              className="relative w-full max-w-6xl max-h-full bg-primary-base rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-[110] p-3 bg-primary-base/80 backdrop-blur hover:bg-white rounded-full text-primary-contrast hover:text-[#A34F3A] transition-all shadow-lg hover:shadow-xl hover:scale-110"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>
              
              <div className="p-8 border-b border-primary-contrast/10 bg-white">
                <p className="text-tertiary-accent font-medium mb-1 uppercase tracking-wider">{selectedProject.category}</p>
                <h2 className="font-outfit text-3xl font-bold text-primary-contrast mb-3">{selectedProject.title}</h2>
                <p className="text-tertiary-accent text-lg max-w-3xl">{selectedProject.description}</p>
              </div>

              <div className="overflow-y-auto p-8 flex-grow bg-primary-base" data-lenis-prevent="true">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                  {[selectedProject.mainImage, ...(selectedProject.images || [])].map((img, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      className="break-inside-avoid relative rounded-xl overflow-hidden shadow-md group"
                    >
                      {/* Using aspect ratio classes to simulate masonry look with placeholder svg. Real images would have natural height. */}
                      <div className={`relative w-full ${i % 3 === 0 ? 'aspect-square' : i % 2 === 0 ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}>
                        <Image 
                          src={img ? `${img}?auto=format&fit=max&w=1200` : "/placeholder.svg"} 
                          alt={`${selectedProject.title} image ${i + 1}`} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
