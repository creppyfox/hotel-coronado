"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-soft-black flex items-center justify-center">
      {/* Background with subtle parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-soft-black/40 z-10" />
        <div className="w-full h-full bg-dark-warm-gray flex items-center justify-center">
          {/* Placeholder for hero image */}
          <span className="text-secondary-gray text-lg tracking-widest uppercase">
            [Imagen: Vista cinematográfica de Barcelona al atardecer]
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-soft-gold text-sm md:text-base tracking-[0.3em] uppercase mb-6 block">
            Hotel Coronado
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-warm-white mb-6 leading-tight">
            Barcelona con otra mirada
          </h1>
          <p className="text-lg md:text-xl text-warm-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Elegancia, calma y autenticidad en el corazón de Sants-Montjuïc
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Consultar disponibilidad
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10 hover:text-white" onClick={() => {
              document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Descubrir la ubicación
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase font-light">Explorar</span>
        <ChevronDown className="w-5 h-5 opacity-70" />
      </motion.div>
    </section>
  );
}
