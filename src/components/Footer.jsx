import React from 'react';
import { ArrowUp, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const instagramPosts = [
    '/gallery/1.jpg',
    '/gallery/2.jpg',
    '/gallery/3.jpg',
    '/gallery/4.jpg',
    '/gallery/5.jpg',
    '/gallery/6.jpg',
  ];

  return (
    <footer className="bg-[#0B0B0B] text-white pt-16 sm:pt-20 pb-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Instagram Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 pb-6 border-b border-white/10 gap-3">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-zinc-300 uppercase">
            <Instagram size={15} />
            <span>@ANVITHRA_WEDDINGS • INSTAGRAM JOURNAL</span>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] sm:text-xs font-mono text-amber-200 hover:text-white underline"
          >
            FOLLOW ON INSTAGRAM →
          </a>
        </div>

        {/* 6 Grid Instagram Gallery (3 cols on small mobile, 6 on desktop) */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mb-12 sm:mb-16">
          {instagramPosts.map((src, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-sm overflow-hidden border border-white/10 cursor-pointer"
            >
              <img
                src={src}
                alt="Instagram Journal Frame"
                className="w-full h-full object-cover filter grayscale(100%) contrast(120%) transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={18} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Main Footer Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          
          <div className="md:col-span-5 space-y-4 sm:space-y-6">
            <img src="/logo.png" alt="ANVITHRA Logo" className="h-9 sm:h-11 w-auto object-contain filter brightness-200" />
            <p className="text-xs font-light text-zinc-400 leading-relaxed max-w-sm">
              Anvithra is an elite UK-based wedding photography atelier capturing high-fashion, editorial, and timeless monochromatic love stories across London, the Cotswolds, and global luxury destinations.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs font-mono tracking-widest text-white uppercase border-b border-white/10 pb-2 font-bold">
              UK ATELIER HEADQUARTERS
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-zinc-400">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-amber-200 shrink-0 mt-0.5" />
                <span>Mayfair Studio: 14 Berkeley Square, London W1J 6CB</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-amber-200 shrink-0 mt-0.5" />
                <span>Cotswolds Office: Great Tew Estate, Oxfordshire OX7</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-amber-200 shrink-0" />
                <span>concierge@anvithra.co.uk</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-amber-200 shrink-0" />
                <span>+44 (0) 20 7946 0912</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs font-mono tracking-widest text-white uppercase border-b border-white/10 pb-2 font-bold">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li><a href="#atelier" className="hover:text-white transition-colors">The Atelier</a></li>
              <li><a href="#works" className="hover:text-white transition-colors">Selected Works</a></li>
              <li><a href="#accolades" className="hover:text-white transition-colors">Accolades & Press</a></li>
              <li><a href="#venues" className="hover:text-white transition-colors">Accredited Venues</a></li>
              <li><a href="#investment" className="hover:text-white transition-colors">Investment</a></li>
              <li><a href="#inquire" className="hover:text-white transition-colors">Inquire Commission</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-mono text-zinc-500 gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} ANVITHRA PHOTOGRAPHY LTD. REGISTERED IN ENGLAND & WALES.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}
