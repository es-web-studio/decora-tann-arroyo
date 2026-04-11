import React from 'react';
import FadeIn from '../ui/FadeIn';

export default function About() {
  return (
    <section id="nosotros" className="py-32 px-6 md:px-20 bg-surface">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right" className="order-2 md:order-1">
          <div className="max-w-full md:max-w-[500px]">
            <span className="inline-block label-md text-primary mb-6">Fundadora</span>
            <h2 className="text-4xl md:text-5xl font-serif text-on-surface mb-8">
              Hola, soy <span className="italic">Tann Arroyo</span>
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant font-body leading-relaxed">
              <p>
                Fundé DECORA con una misión simple: inyectar magia y estilo en cada rincón de tus eventos. 
                Con más de 5 años de experiencia en decoración de eventos sociales, infantiles, empresariales, 
                propuestas de matrimonio y bodas.
              </p>
              <p>
                Ofreciendo spots creativos y elegantes a precio accesible, personalizados de acuerdo a los 
                gustos, ideas y preferencias del usuario.
              </p>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn direction="left" className="order-1 md:order-2 relative">
          <div className="absolute -top-10 -right-4 md:-right-10 w-full h-full border-2 border-primary-container rounded-3xl z-0"></div>
          <div className="relative z-10 rounded-3xl overflow-hidden editorial-shadow aspect-[4/5]">
            <img 
              alt="Tann Arroyo, decoradora experta y fundadora de DECORA en Cuernavaca" 
              className="w-full h-full object-cover" 
              src="/images/us-photo-1.JPG" 
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary text-on-primary px-8 py-5 rounded-[2rem] z-20 hidden md:block editorial-shadow">
            <p className="font-serif italic text-2xl">5+ Años Creando Magia</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
