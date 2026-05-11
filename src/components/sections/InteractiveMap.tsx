"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, ExternalLink, MapPin } from "lucide-react";
import { Button } from "../ui/Button";
import { touristSpots, recommendedRestaurants } from "@/data/places";
import { cn } from "@/lib/utils";

export function InteractiveMap() {
  const [activePoint, setActivePoint] = useState<string | null>(null);

  const hotelCoords = { x: 45, y: 65 }; // Adjust based on visual center
  const allPoints = [
    ...touristSpots.map(s => ({ ...s, type: 'spot' as const })),
    ...recommendedRestaurants.map(r => ({ ...r, type: 'restaurant' as const }))
  ];

  const handleOpenMaps = () => {
    // Exact location of the hotel
    window.open("https://www.google.com/maps/search/?api=1&query=Carrer+Nou+de+la+Rambla+134+Barcelona", "_blank");
  };

  return (
    <div className="relative w-full h-full bg-[#E5E0D8] rounded-sm overflow-hidden flex flex-col">
      {/* Map visual background (abstract representation) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* Abstract lines representing streets */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-dark-warm-gray" />
          
          {/* Main avenue */}
          <path d="M 0,100 L 1000,500" stroke="currentColor" strokeWidth="2" className="text-dark-warm-gray" />
          <path d="M 200,0 L 500,1000" stroke="currentColor" strokeWidth="1.5" className="text-dark-warm-gray" />
        </svg>
      </div>

      {/* Map Content */}
      <div className="relative flex-grow">
        
        {/* Points */}
        {allPoints.map((point) => (
          <button
            key={point.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 group z-10"
            style={{ left: `${point.coords.x}%`, top: `${point.coords.y}%` }}
            onClick={() => setActivePoint(point.id === activePoint ? null : point.id)}
          >
            <div className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              activePoint === point.id 
                ? "bg-soft-gold scale-150 shadow-[0_0_15px_rgba(196,162,101,0.5)]" 
                : "bg-dark-warm-gray/60 group-hover:bg-soft-gold group-hover:scale-125"
            )} />
            
            {/* Tooltip */}
            <AnimatePresence>
              {activePoint === point.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white p-3 rounded-sm shadow-lg w-48 pointer-events-none z-50 text-left"
                >
                  <p className="font-serif text-soft-black text-sm font-medium mb-1">{point.name}</p>
                  <p className="text-secondary-gray text-xs">{point.distance}</p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        ))}

        {/* Hotel Location (Main Marker) */}
        <div 
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
          style={{ left: `${hotelCoords.x}%`, top: `${hotelCoords.y}%` }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-soft-gold rounded-full opacity-30"
              animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <div className="w-6 h-6 bg-soft-gold rounded-full border-2 border-white flex items-center justify-center relative z-10 shadow-md">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
          <span className="mt-2 font-serif text-soft-black font-medium text-sm bg-white/80 px-2 py-0.5 rounded-sm backdrop-blur-sm shadow-sm whitespace-nowrap">
            Hotel Coronado
          </span>
        </div>

      </div>

      {/* Footer Controls */}
      <div className="relative z-30 p-4 bg-white/90 backdrop-blur-sm border-t border-soft-cream flex justify-between items-center">
        <div className="flex gap-4 text-xs text-secondary-gray font-medium uppercase tracking-wider">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-soft-gold" />
            <span>Hotel</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-dark-warm-gray/60" />
            <span>Lugares</span>
          </div>
        </div>
        
        <Button size="sm" onClick={handleOpenMaps} className="flex items-center gap-2">
          <Map className="w-4 h-4" />
          Abrir en Maps
          <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
        </Button>
      </div>
    </div>
  );
}
