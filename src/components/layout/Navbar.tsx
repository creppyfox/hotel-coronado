"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Quiénes Somos", href: "#about" },
    { name: "Ubicación", href: "#location" },
    { name: "Restaurantes", href: "#restaurants" },
    { name: "Contacto", href: "#footer" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-warm-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start">
          <span className={cn(
            "font-serif text-2xl font-medium tracking-wide transition-colors",
            isScrolled ? "text-soft-black" : "text-white"
          )}>
            CORONADO
          </span>
          <span className={cn(
            "text-[0.65rem] tracking-[0.3em] uppercase transition-colors",
            isScrolled ? "text-secondary-gray" : "text-white/80"
          )}>
            Barcelona
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm tracking-wide transition-colors hover:text-soft-gold",
                isScrolled ? "text-dark-warm-gray" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button variant={isScrolled ? "primary" : "secondary"} className={cn(!isScrolled && "bg-white text-soft-black hover:bg-soft-cream")}>
            Reservar
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-soft-black" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-soft-black" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-warm-white shadow-lg border-t border-soft-cream py-6 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-soft-black text-lg font-serif border-b border-soft-cream pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-4">Reservar</Button>
        </div>
      )}
    </motion.header>
  );
}
