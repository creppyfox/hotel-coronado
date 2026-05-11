"use client";

import { motion } from "framer-motion";
import { MapPin, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  distance: string;
  description: string;
  imageAlt: string;
  onClick: () => void;
  className?: string;
}

export function RestaurantCard({ name, cuisine, distance, description, imageAlt, onClick, className }: RestaurantCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={cn("group cursor-pointer bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300", className)}
    >
      <div className="aspect-[4/3] w-full bg-[#f8f5f2] relative overflow-hidden flex items-center justify-center p-6 text-center">
        {/* Placeholder for image */}
        <div className="absolute inset-0 bg-dark-warm-gray/5 group-hover:bg-dark-warm-gray/10 transition-colors z-10" />
        <span className="text-secondary-gray text-sm font-medium uppercase tracking-widest relative z-0">
          [Imagen: {imageAlt}]
        </span>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl text-soft-black group-hover:text-soft-gold transition-colors">
            {name}
          </h3>
          <span className="text-soft-gold text-xs font-medium px-2 py-1 bg-soft-gold/10 rounded-sm">
            Top
          </span>
        </div>
        
        <div className="flex flex-col gap-1 text-secondary-gray text-sm mb-4">
          <div className="flex items-center">
            <Utensils className="w-3.5 h-3.5 mr-1.5 opacity-70" />
            <span>{cuisine}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-1.5 opacity-70" />
            <span>{distance}</span>
          </div>
        </div>
        
        <p className="text-dark-warm-gray text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
