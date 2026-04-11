import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Nosotros', to: '/#nosotros' },
    { name: 'Servicios', to: '/#servicios' },
    { name: 'Eventos', to: '/#eventos' },
    { name: 'Galería', to: '/galeria' }
  ];

  const handleNavClick = (e, to) => {
    // Always close mobile menu when clicking any nav item
    setMobileMenuOpen(false);

    if (to === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.history.pushState(null, '', '/');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 150);
      }
      return;
    }

    if (to.startsWith('/#')) {
      const hash = to.replace('/', '');
      if (location.pathname === '/' || location.pathname === '') {
        e.preventDefault();
        window.history.pushState(null, '', hash);
        
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const navHeight = 84; 
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - navHeight,
              behavior: 'smooth'
            });
          }
        }, 150);
      } else {
        e.preventDefault();
        navigate(to);
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 md:px-20 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-sm dark:shadow-none py-2' : 'bg-transparent py-4'}`}>
      <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto relative">
        {/* LOGO (Aligned left based on max-w 1200px) */}
        <div className="flex-none w-32 relative z-10">
          <Link to="/" onClick={(e) => handleNavClick(e, '/')} className="text-2xl font-serif italic text-primary dark:text-rose-100">
            DECORA
          </Link>
        </div>
        
        {/* LINKS (Absolute centered in the screen) */}
        <div className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none">
          <div className="flex items-center space-x-8 pointer-events-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                onClick={(e) => handleNavClick(e, link.to)}
                className="text-stone-600 dark:text-stone-400 font-medium hover:scale-105 transition-transform duration-300 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* COTIZAR / MOBILE TOGGLE (Aligned right) */}
        <div className="flex justify-end items-center flex-none w-32 relative z-10">
          <a 
            href="https://wa.me/527777894979?text=Me%20gustar%C3%ADa%20una%20cotizaci%C3%B3n." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cursor-pointer hidden md:inline-block bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Cotizar
          </a>
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-primary" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface absolute top-full left-0 w-full overflow-hidden flex flex-col items-center py-8 space-y-6 shadow-2xl border-t border-outline-variant/10"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                onClick={(e) => handleNavClick(e, link.to)}
                className="text-lg font-medium text-stone-700"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/527777894979?text=Me%20gustar%C3%ADa%20una%20cotizaci%C3%B3n." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer bg-primary text-on-primary px-8 py-3 rounded-full font-bold mt-4"
            >
              Cotizar
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
