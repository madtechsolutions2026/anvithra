import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { label: 'The Atelier', href: '#atelier' },
    { label: 'Selected Works', href: '#works' },
    { label: 'Accolades', href: '#accolades' },
    { label: 'Venues', href: '#venues' },
    { label: 'Love Stories', href: '#stories' },
    { label: 'Investment', href: '#investment' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F2EE]/98 backdrop-blur-md border-b border-zinc-200/80 py-4 px-4 sm:px-8 lg:px-16 text-[#1A1A1A] transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo - Vector Dark SVG with 0 background artifacts */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
          <img 
            src="/logo-dark.svg" 
            alt="ANVITHRA UK Luxury Wedding Photography" 
            className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="border-l border-zinc-400 pl-2.5 sm:pl-3">
            <span className="block font-serif text-sm sm:text-base tracking-[0.25em] font-normal text-[#1A1A1A] leading-none">ANVITHRA</span>
            <span className="block text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-600 font-semibold mt-0.5">LONDON ATELIER</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-700 hover:text-black font-semibold transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="px-4 sm:px-6 py-2 border border-zinc-900 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#1A1A1A] font-bold hover:bg-black hover:text-white transition-all duration-300 rounded-sm shrink-0 shadow-sm"
          >
            Inquire
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden p-1.5 text-black hover:bg-zinc-200 rounded transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenu && (
        <div className="lg:hidden mt-3 pt-4 border-t border-zinc-200 flex flex-col gap-2 animate-fadeIn bg-[#F5F2EE] px-2 pb-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenu(false)}
              className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-800 hover:text-black font-semibold py-2.5 px-3 rounded hover:bg-zinc-200/60 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenu(false);
              if (onOpenBooking) onOpenBooking();
            }}
            className="mt-2 w-full py-3 bg-[#1A1A1A] text-white text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-sm text-center"
          >
            Inquire Commission
          </button>
        </div>
      )}
    </header>
  );
}
