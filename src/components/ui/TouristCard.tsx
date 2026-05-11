"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface TouristCardProps {
  name: string;
  distance: string;
  description: string;
  imageAlt: string;
  onClick: () => void;
  className?: string;
}

export function TouristCard({ name, distance, description, imageAlt, onClick, className }: TouristCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={cn("group cursor-pointer bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300", className)}
    >
      <div className="aspect-[4/3] w-full bg-soft-cream relative overflow-hidden flex items-center justify-center p-6 text-center">
        {/* Placeholder for image */}
        <div className="absolute inset-0 bg-dark-warm-gray/5 group-hover:bg-dark-warm-gray/10 transition-colors z-10" />
        <span className="text-secondary-gray text-sm font-medium uppercase tracking-widest relative z-0">
          [Imagen: {imageAlt}]
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl text-soft-black mb-2 group-hover:text-soft-gold transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center text-secondary-gray text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1 opacity-70" />
          <span>{distance}</span>
        </div>
        
        <p className="text-dark-warm-gray text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
