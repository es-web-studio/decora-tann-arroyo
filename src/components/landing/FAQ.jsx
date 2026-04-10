import React, { useState } from 'react';
import { ChevronDown, Star, Calendar, Info } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import { motion } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    {
      q: "¿Qué precio tiene una decoración?",
      a: "El costo varía según el tamaño y diseño, ya que ofrecemos atención 100% personalizada.",
      tip: "Punto clave: Nos adaptamos a tu presupuesto y temática para crear un spot increíble sin que tengas que gastar de más.",
      icon: <Star size={20} className="text-primary mt-1 flex-shrink-0" />
    },
    {
      q: "¿Con cuánto tiempo debo agendar?",
      a: "Recomendamos agendar con un mínimo de 20 días de anticipación.",
      tip: "Punto clave: Este tiempo nos permite planear y diseñar cada detalle de tu decoración con la calma que merece.",
      icon: <Calendar size={20} className="text-primary mt-1 flex-shrink-0" />
    },
    {
      q: "¿Los globos durarán todo mi evento?",
      a: "Sí, utilizamos materiales de alta calidad que garantizan una duración de más de un día en buenas condiciones.",
      tip: "Tips de cuidado: Para asegurar su durabilidad, evita el sol directo, el agua y el manejo brusco de la estructura.",
      icon: <Info size={20} className="text-primary mt-1 flex-shrink-0" />
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-32 px-6 md:px-20 bg-surface">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="label-md text-primary">Ayuda</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 text-on-surface">Preguntas Frecuentes</h2>
        </FadeIn>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="border-b border-outline-variant/30">
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="flex justify-between items-center w-full py-6 text-left group"
                >
                  <span className="text-xl font-serif text-on-surface group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={24} 
                    className={`text-primary transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} 
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIdx === idx ? 'auto' : 0, 
                    opacity: openIdx === idx ? 1 : 0 
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.1, 0.25, 1.0] 
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 text-on-surface-variant leading-relaxed">
                    <p className="mb-4">{faq.a}</p>
                    <div className="flex gap-3 bg-surface-container-low p-4 rounded-lg italic">
                      {faq.icon}
                      <p className="text-sm md:text-base">{faq.tip}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
