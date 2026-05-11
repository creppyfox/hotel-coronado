"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutUs() {
  return (
    <AnimatedSection id="about" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div>
            <SectionHeading 
              title="Un refugio de calma" 
              subtitle="Hospitalidad, diseño cuidado y una conexión profunda con la auténtica Barcelona."
            />
            
            <div className="space-y-6 text-dark-warm-gray leading-relaxed text-lg font-light">
              <p>
                Hotel Coronado nace de la voluntad de ofrecer un espacio donde el lujo reside en la tranquilidad, los detalles precisos y el trato humano. 
              </p>
              <p>
                Ubicados en el vibrante y genuino barrio de Sants-Montjuïc, proponemos una experiencia que combina la sofisticación de un hotel boutique premium europeo con el carácter cálido e inconfundible de Barcelona.
              </p>
              <p>
                Cada espacio ha sido diseñado para invitar al reposo tras un día descubriendo la ciudad. Materiales nobles, tonos serenos y un equipo dedicado a hacer de su estancia un recuerdo perdurable.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[600px] w-full rounded-sm overflow-hidden">
            <div className="absolute inset-0 bg-soft-cream flex items-center justify-center">
              <span className="text-secondary-gray text-sm tracking-widest uppercase text-center px-4">
                [Imagen: Interior elegante de hotel boutique, tonos neutros]
              </span>
            </div>
            {/* Decorative border */}
            <div className="absolute inset-4 border border-soft-gold/30 rounded-sm pointer-events-none" />
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
