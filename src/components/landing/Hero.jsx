import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center px-6 md:px-20 py-24 overflow-hidden">
      {/* Background Frame without Parallax Image (Full Width Spaced) */}
      <div className="absolute top-20 right-[-10%] md:right-[-5%] w-[60%] h-[80%] rounded-xl z-0 overflow-hidden">
        <img 
          alt="Decoración orgánica y sofisticada con globos para eventos formales en Cuernavaca" 
          className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]" 
          src="/images/image-1.jpg" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent"></div>
      </div>

      {/* Decorative Blur Bubbles (original stitch design) */}
      <motion.div 
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-container rounded-full floating-bubble" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container rounded-full floating-bubble" 
      />

      {/* Content wrapper respecting 1200px alignment */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto mt-20 md:mt-0">
        <div className="max-w-2xl">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block label-md text-primary mb-6"
        >
          Arte en cada detalle
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif text-on-surface leading-[1.1] tracking-tight mb-8"
        >
          Transformamos tus <span className="italic text-primary">Sueños</span> en Realidad
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-on-surface-variant font-body mb-10 max-w-lg leading-relaxed"
        >
          Decoraciones exclusivas con globos para eventos inolvidables. Diseños etéreos que elevan la atmósfera de tu celebración.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="https://wa.me/527777894979?text=Me%20gustar%C3%ADa%20una%20cotizaci%C3%B3n." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cursor-pointer bg-primary text-on-primary px-8 py-3 md:px-8 md:py-4 rounded-full font-bold text-center text-sm md:text-base hover:scale-105 transition-transform duration-300 editorial-shadow"
          >
            Solicita tu Cotización
          </a>
          <Link to="/galeria" className="bg-transparent border border-outline-variant/30 text-primary px-8 py-3 md:px-8 md:py-4 rounded-full font-bold text-center text-sm md:text-base hover:bg-primary/5 transition-all duration-300">
            Explorar Galería
          </Link>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
