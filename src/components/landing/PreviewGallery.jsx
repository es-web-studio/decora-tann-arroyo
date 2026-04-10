import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../ui/FadeIn';

export default function PreviewGallery() {
  return (
    <section id="eventos" className="py-32 px-6 md:px-20 bg-surface">
      <div className="max-w-[1200px] mx-auto border-b border-outline-variant/20 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <FadeIn className="max-w-xl">
            <h2 className="font-serif leading-tight text-on-surface text-4xl md:text-6xl whitespace-nowrap">
              Momentos Decora
            </h2>
            <p className="text-lg text-on-surface-variant mt-4">Un vistaso a nuestras creaciones más recientes</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <Link to="/galeria" className="label-md text-primary border-b-2 border-primary pb-1 mb-2 hover:opacity-70 transition-opacity">
              Ver Galería completa
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch h-auto md:h-[650px] lg:h-[750px] xl:h-[800px]">
          {/* Main Large Image */}
          <FadeIn delay={0.1} className="md:col-span-7 relative group rounded-2xl overflow-hidden shadow-2xl h-[450px] md:h-full">
            <img 
              alt="Impresionante decoración para eventos con números gigantes luminosos y diseño elegante con globos" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="/images/IMG_8697_clean.png" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
              <p className="label-md opacity-90 mb-2 drop-shadow-md">Evento Decora</p>
              <h4 className="text-3xl md:text-4xl font-serif drop-shadow-md">Elegancia Vibrante</h4>
            </div>
          </FadeIn>
          
          {/* Right Side Column (3 images) */}
          <div className="md:col-span-5 flex flex-col gap-6 lg:gap-8 h-full mt-6 md:mt-0">
            {/* Top Right Landscape Image */}
            <FadeIn delay={0.3} direction="left" className="relative group rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-full md:flex-[1.2] lg:flex-[1.3]">
              <img 
                alt="Set temático vibrante con globos estructurados para celebraciones únicas hechas por DECORA" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="/images/IMG_8691.JPG" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                <h4 className="text-xl md:text-2xl font-serif drop-shadow-md">Sets Temáticos</h4>
              </div>
            </FadeIn>
            
            {/* Bottom Right - 2 Square Images (Stacked on mobile) */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-auto">
              <FadeIn delay={0.4} direction="up" className="relative group rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-full">
                <img 
                  alt="Spot creativo fotográfico con arco de globos colores pastel para retratos en eventos" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="/images/IMG_8686.JPG" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:bottom-6 md:left-6 text-white w-full pr-4">
                  <h4 className="text-xl md:text-xl font-serif leading-tight drop-shadow-md">Spots<br/>Creativos</h4>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.5} direction="up" className="relative group rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-full">
                <img 
                  alt="Hermoso detalle decorativo para eventos formales y elegantes por Tann Arroyo" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="/images/IMG_8687.JPG" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:bottom-6 md:left-6 text-white w-full pr-4">
                  <h4 className="text-xl md:text-xl font-serif leading-tight drop-shadow-md">Detalles<br/>Inolvidables</h4>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
