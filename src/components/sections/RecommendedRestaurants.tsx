"use client";

import { motion, Variants } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";
import { RestaurantCard } from "../ui/RestaurantCard";
import { recommendedRestaurants } from "@/data/places";

export function RecommendedRestaurants() {
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
    const locationSection = document.getElementById('location');
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatedSection id="restaurants" className="py-24 bg-soft-cream border-t border-soft-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Gastronomía Recomendada" 
          subtitle="Una cuidada selección de restaurantes para completar su experiencia en la ciudad."
          centered
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {recommendedRestaurants.map((restaurant) => (
            <motion.div key={restaurant.id} variants={itemVariants}>
              <RestaurantCard
                name={restaurant.name}
                cuisine={restaurant.cuisine}
                distance={restaurant.distance}
                description={restaurant.description}
                imageAlt={restaurant.imageAlt}
                onClick={() => handleCardClick(restaurant.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
