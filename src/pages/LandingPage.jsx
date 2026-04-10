import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Services from '../components/landing/Services';
import PreviewGallery from '../components/landing/PreviewGallery';
import FAQ from '../components/landing/FAQ';
import CTA from '../components/landing/CTA';

export default function LandingPage() {
  const location = useLocation();
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 84;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: 'smooth'
          });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Fire twice to handle immediate scrolling and then correct for any layout shifts (e.g. image loads)
    const timer1 = setTimeout(handleHashScroll, 100);
    const timer2 = setTimeout(handleHashScroll, 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <PreviewGallery />
      <FAQ />
      <CTA />
    </>
  );
}
