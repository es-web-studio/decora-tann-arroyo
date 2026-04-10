import React from 'react';
import FadeIn from '../ui/FadeIn';

export default function CTA() {
  return (
    <section id="contacto" className="py-24 px-6 md:px-20 overflow-hidden">
      <FadeIn className="max-w-[1200px] mx-auto bg-primary-dim rounded-2xl md:rounded-[3rem] px-6 py-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-fixed rounded-full blur-[120px] opacity-20 animate-pulse delay-700"></div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
            Hagamos algo <span className="italic text-primary-fixed">mágico</span> juntos
          </h2>
          <p className="text-primary-container text-lg md:text-xl mb-12 opacity-90 leading-relaxed">
            Cada espacio es un lienzo en blanco esperando ser transformado. ¿Estás listo para elevar tu próximo evento?
          </p>
          <div className="flex justify-center w-full">
            <a 
              href="https://wa.me/527777894979?text=Me%20gustar%C3%ADa%20una%20cotizaci%C3%B3n." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer inline-flex justify-center items-center bg-primary-fixed text-on-primary-fixed px-8 py-4 md:px-12 md:py-5 rounded-full font-bold text-lg md:text-xl hover:scale-105 transition-transform duration-300 shadow-2xl w-full max-w-[280px] sm:max-w-none sm:w-auto"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
