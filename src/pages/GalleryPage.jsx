import React, { useEffect } from 'react';
import MasonryGrid from '../components/gallery/MasonryGrid';
import FadeIn from '../components/ui/FadeIn';

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-surface min-h-screen py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
      <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
        <span className="label-md uppercase tracking-widest text-primary font-bold">Nuestro Portfolio</span>
        <h1 className="text-5xl md:text-6xl font-serif mt-6 text-on-surface leading-tight">
          La Belleza en cada <span className="italic text-primary">Detalle</span>
        </h1>
        <p className="mt-8 text-lg text-on-surface-variant font-body">
          Explora nuestra colección de instalaciones. Cada evento es único, y nuestro 
          objetivo es capturar la esencia de tu celebración a través de diseños etéreos e inolvidables.
        </p>
      </FadeIn>
      
      <MasonryGrid />
      
      <FadeIn delay={0.3} className="mt-32 text-center pb-20">
        <h3 className="text-3xl font-serif text-on-surface mb-8">¿Listo para crear magia?</h3>
        <a 
          href="https://wa.me/527777894979?text=Me%20gustar%C3%ADa%20una%20cotizaci%C3%B3n." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cursor-pointer bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl inline-block"
        >
          Obtener cotización
        </a>
      </FadeIn>
    </div>
  );
}
