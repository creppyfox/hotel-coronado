"use client";

import { motion, Variants } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";
import { TouristCard } from "../ui/TouristCard";
import { touristSpots } from "@/data/places";

export function TouristSpots() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const handleCardClick = (id: string) => {
    // In a real implementation, this would update state to highlight the map
    // and scroll to the location section
    const locationSection = document.getElementById('location');
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatedSection className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Descubra Barcelona" 
          subtitle="Lugares emblemáticos a pocos minutos de nuestra puerta."
          centered
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {touristSpots.map((spot) => (
            <motion.div key={spot.id} variants={itemVariants}>
              <TouristCard
                name={spot.name}
                distance={spot.distance}
                description={spot.description}
                imageAlt={spot.imageAlt}
                onClick={() => handleCardClick(spot.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
