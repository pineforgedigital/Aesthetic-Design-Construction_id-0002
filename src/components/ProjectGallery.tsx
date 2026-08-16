"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

type ProjectCategory = "All" | "3D Rendering" | "Flooring" | "Kitchen Remodeling" | "Luxury Bathrooms" | "Interior Design & Decorating" | "Custom Tile Work" | "Premium Countertops" | "Full Interior Remodeling";

interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  mainImage: string;
  images: string[];
}

const CATEGORIES: ProjectCategory[] = ["All", "Kitchen Remodeling", "Luxury Bathrooms", "Full Interior Remodeling", "Flooring", "3D Rendering", "Interior Design & Decorating", "Custom Tile Work", "Premium Countertops"];

const MOCK_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Lorem Ipsum Kitchen",
    category: "Kitchen Remodeling",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "p2",
    title: "Dolor Sit Bath",
    category: "Luxury Bathrooms",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "p3",
    title: "Amet Consectetur Flooring",
    category: "Flooring",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "p4",
    title: "Adipiscing Small Project",
    category: "Custom Tile Work",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "p5",
    title: "Elit Rendering",
    category: "3D Rendering",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "p6",
    title: "Sed Do Kitchen",
    category: "Kitchen Remodeling",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "p7",
    title: "Eiusmod Bath",
    category: "Luxury Bathrooms",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "p8",
    title: "Tempor Flooring",
    category: "Flooring",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "p9",
    title: "Incididunt Rendering",
    category: "3D Rendering",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"]
  }
];

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? MOCK_PROJECTS 
    : MOCK_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category 
                ? "bg-primary-contrast text-primary-base" 
                : "bg-white text-primary-contrast border border-primary-contrast/10 hover:border-primary-contrast/30"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-xl shadow-primary-contrast/5 border border-primary-contrast/5"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image 
                  src={project.mainImage} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-primary-contrast/0 group-hover:bg-primary-contrast/30 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" size={48} />
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-tertiary-accent font-medium mb-2 uppercase tracking-wider">{project.category}</p>
                <h3 className="font-outfit text-2xl font-semibold text-primary-contrast mb-2">{project.title}</h3>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-primary-contrast/95 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="relative w-full max-w-6xl max-h-full bg-primary-base rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur hover:bg-white rounded-full text-primary-contrast transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>
              
              <div className="p-8 border-b border-primary-contrast/10 bg-white">
                <p className="text-tertiary-accent font-medium mb-1 uppercase tracking-wider">{selectedProject.category}</p>
                <h2 className="font-outfit text-3xl font-bold text-primary-contrast mb-3">{selectedProject.title}</h2>
                <p className="text-tertiary-accent text-lg max-w-3xl">{selectedProject.description}</p>
              </div>

              <div className="overflow-y-auto p-8 flex-grow bg-primary-base">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                  {selectedProject.images.map((img, i) => (
                    <div key={i} className="break-inside-avoid relative rounded-xl overflow-hidden shadow-md">
                      {/* Using aspect ratio classes to simulate masonry look with placeholder svg. Real images would have natural height. */}
                      <div className={`relative w-full ${i % 3 === 0 ? 'aspect-square' : i % 2 === 0 ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}>
                        <Image 
                          src={img} 
                          alt={`${selectedProject.title} image ${i + 1}`} 
                          fill 
                          className="object-cover" 
                        />
                      </div>
                    </div>
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
