import React from 'react';
import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <section id="atelier" className="py-16 sm:py-24 bg-[#F5F2EE] text-[#1A1A1A] overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Editorial Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-24">
          
          {/* Left / Center Text & Portrait Image (6 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-mono text-[#9C8B6B] font-bold">
              THE ATELIER • PHILOSOPHY
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.05] text-[#1A1A1A]">
              SOUL <span className="italic font-light">+</span> CINEMA
            </h2>

            <p className="font-serif text-base sm:text-xl font-light text-zinc-800 leading-relaxed">
              Considered to be an icon of modern UK wedding photography, Anvithra has transformed high-fashion bridal portraiture into timeless heirloom art.
            </p>

            <p className="text-xs sm:text-sm font-sans font-normal text-zinc-600 leading-relaxed">
              For nearly a decade, our studio has captured private celebrations, historic estate weddings, and European elopements. We believe in stripping away fleeting color trends to reveal raw emotion, architectural symmetry, and everlasting romance in black & white.
            </p>

            {/* Bottom Portrait Frame */}
            <div className="pt-2 sm:pt-4 max-w-md">
              <div className="relative rounded-sm overflow-hidden shadow-md aspect-[4/5] border border-zinc-300">
                <img
                  src="/gallery/3.jpg"
                  alt="Anvithra Editorial Portrait"
                  className="w-full h-full object-cover filter grayscale(100%) contrast(115%) transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

          </motion.div>

          {/* Right Main Editorial Portrait Frame (6 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-sm overflow-hidden shadow-xl aspect-[4/5] sm:aspect-[3/4] border border-zinc-300">
              <img
                src="/gallery/2.jpg"
                alt="Aynhoe Park Monochromatic Wedding"
                className="w-full h-full object-cover filter grayscale(100%) contrast(120%) transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 bg-white/95 backdrop-blur-md rounded-sm border border-zinc-200 shadow-md">
                <span className="block text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 mb-0.5">LOCATION</span>
                <span className="block font-serif text-base sm:text-xl text-[#1A1A1A] font-normal">Aynhoe Park, Cotswolds, UK</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3 Pillars Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-zinc-300">
          
          <div className="space-y-2.5">
            <span className="font-serif text-2xl sm:text-3xl text-[#9C8B6B] font-normal">01</span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-normal">Monochromatic Purity</h3>
            <p className="text-xs text-zinc-600 font-normal leading-relaxed">
              Every tone, shadow, and highlights are calibrated to mirror classical medium-format film standards.
            </p>
          </div>

          <div className="space-y-2.5">
            <span className="font-serif text-2xl sm:text-3xl text-[#9C8B6B] font-normal">02</span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-normal">Architectural Precision</h3>
            <p className="text-xs text-zinc-600 font-normal leading-relaxed">
              Framing your moments within the grand geometry of historic London estates and English countryside manors.
            </p>
          </div>

          <div className="space-y-2.5">
            <span className="font-serif text-2xl sm:text-3xl text-[#9C8B6B] font-normal">03</span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-normal">Absolute Privacy</h3>
            <p className="text-xs text-zinc-600 font-normal leading-relaxed">
              Discreet commission protocols for high-net-worth couples, royalty, and public figures with non-disclosure guarantees.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
