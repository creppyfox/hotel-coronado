"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";
import { InteractiveMap } from "./InteractiveMap";

export function Location() {
  return (
    <AnimatedSection id="location" className="py-24 md:py-32 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          
          <div className="lg:col-span-5">
            <SectionHeading title="Ubicación" />
            
            <div className="mb-10">
              <h3 className="font-serif text-2xl text-soft-black mb-2">Carrer Nou de la Rambla, 134</h3>
              <p className="text-lg text-secondary-gray tracking-wide">Sants-Montjuïc, 08004 Barcelona</p>
            </div>
            
            <div className="space-y-6 text-dark-warm-gray leading-relaxed font-light text-lg">
              <p>
                Una ubicación estratégica en uno de los barrios más auténticos y mejor conectados de la ciudad.
              </p>
              <p>
                A los pies de la montaña de Montjuïc, rodeado de cultura, gastronomía y vida local, pero a un paso del centro histórico, el puerto y La Rambla.
              </p>
              <p>
                El entorno perfecto para explorar Barcelona desde un punto de partida elegante, seguro y tranquilo.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-2 rounded-sm shadow-sm h-[500px]">
            <InteractiveMap />
          </div>

        </div>

      </div>
    </AnimatedSection>
  );
}
