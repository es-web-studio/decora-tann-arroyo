import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import FadeIn from '../ui/FadeIn';

export default function MasonryGrid() {
  const images = [
    { src: '/images/IMG_8684.JPG', title: 'Elegancia Vibrante', aspect: 'aspect-[3/4]' },
    { src: '/images/IMG_8685.JPG', title: 'Spot de Ensueño', aspect: 'aspect-[3/4]' },
    { src: '/images/IMG_8686.JPG', title: 'Arco Rose Gold', aspect: 'aspect-[3/4]' },
    { src: '/images/IMG_8687.JPG', title: 'Celebración Clásica', aspect: 'aspect-[3/4]' },
    { src: '/images/IMG_8688.JPG', title: 'Magia Infantil', aspect: 'aspect-[3/4]' },
    { src: '/images/IMG_8689.JPG', title: 'Detalle Orgánico', aspect: 'aspect-[3/4]' },
    { src: '/images/IMG_8690.JPG', title: 'Glamour y Estilo', aspect: 'aspect-[3/4]' },
    { src: '/images/IMG_8691.JPG', title: 'Set Temático', aspect: 'aspect-[4/3]' },
    { src: '/images/IMG_8692.JPG', title: 'Propuesta de Amor', aspect: 'aspect-[3/4]' },
    { src: '/images/IMG_8693.JPG', title: 'Noche de Gala', aspect: 'aspect-[3/4]' },
    { src: '/images/IMG_8694.JPG', title: 'Mural de Globos', aspect: 'aspect-[3/4]' },
    { src: '/images/IMG_8696.JPG', title: 'Bautizos y Más', aspect: 'aspect-[3/4]' },
    { src: '/images/IMG_8697.JPG', title: 'Momentos Decora', aspect: 'aspect-[3/4]' }
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  // Close modal on escape and handle body scroll lock
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImg(null);
    };
    
    if (selectedImg) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImg]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, idx) => (
          <FadeIn key={idx} delay={idx * 0.05} direction="up" className="break-inside-avoid">
            <div 
              className="relative group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img.src} 
                alt={`Diseño de decoración de eventos estilo ${img.title} por DECORA Tann Arroyo en Cuernavaca`} 
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${img.aspect || 'aspect-auto'}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" size={32} />
              </div>
              <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white font-serif text-xl">{img.title}</h4>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-rose-400 transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X size={40} />
          </button>
          <div 
            className="relative max-w-5xl max-h-[90vh] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImg.src} 
              alt={`Detalle fotográfico de montaje de globos: ${selectedImg.title} - DECORA`} 
              className="w-full h-full object-contain max-h-[90vh]"
            />
            <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-serif text-3xl">{selectedImg.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
