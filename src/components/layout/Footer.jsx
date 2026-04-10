import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-stone-50 dark:bg-stone-950 w-full py-12 px-8 z-10 relative">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1200px] mx-auto">
        <div className="font-serif text-lg text-stone-900 dark:text-stone-100">DECORA</div>
        <div className="flex gap-8">
          <a href="#" className="font-sans uppercase tracking-widest text-[10px] sm:text-xs text-stone-500 hover:text-rose-600 transition-colors">Facebook</a>
          <a href="#" className="font-sans uppercase tracking-widest text-[10px] sm:text-xs text-stone-500 hover:text-rose-600 transition-colors">Instagram</a>
        </div>
        <div className="font-sans uppercase tracking-widest text-[10px] sm:text-xs text-stone-500 text-center">
          © {new Date().getFullYear()} DECORA. All rights reserved. Custom Balloon Artistry.
        </div>
      </div>
    </footer>
  );
}
