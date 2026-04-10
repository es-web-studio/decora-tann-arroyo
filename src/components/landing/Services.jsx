import React from 'react';
import FadeIn from '../ui/FadeIn';

export default function Services() {
  return (
    <section id="servicios" className="py-32 px-8 md:px-20 bg-surface-container-low relative">
      <div className="text-center mb-20">
        <span className="label-md uppercase tracking-widest text-primary font-bold">Nuestra Especialidad</span>
        <h2 className="text-4xl md:text-5xl font-serif mt-4 text-on-surface">Experiencias a Medida</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <FadeIn className="bg-surface px-8 py-10 rounded-3xl editorial-shadow hover:scale-[1.02] transition-all duration-300 group">
          <div className="mb-8 text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 0' }}>celebration</span>
          </div>
          <h3 className="text-2xl font-serif mb-4">Decoración con globos</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Instalaciones profesionales y arcos orgánicos que transforman cualquier espacio en un escenario de sueño.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2} className="bg-surface px-8 py-10 rounded-3xl editorial-shadow hover:scale-[1.02] transition-all duration-300 group md:mt-16">
          <div className="mb-8 text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 0' }}>bubble_chart</span>
          </div>
          <h3 className="text-2xl font-serif mb-4">Globos burbuja personalizados</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Globos cristalinos personalizados con confeti, plumas o mensajes únicos para un detalle delicado e inolvidable.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4} className="bg-surface px-8 py-10 rounded-3xl editorial-shadow hover:scale-[1.02] transition-all duration-300 group">
          <div className="mb-8 text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 0' }}>auto_awesome</span>
          </div>
          <h3 className="text-2xl font-serif mb-4">Sets decorativos temáticos</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Montajes completos que incluyen backdrops, mobiliario y decoración coordinada para crear experiencias inmersivas.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
