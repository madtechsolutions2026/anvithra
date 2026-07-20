import React from 'react';
import { motion } from 'framer-motion';

export default function Accolades() {
  const laurels = [
    { title: 'UK WEDDING PHOTOGRAPHER', year: '2022, 2024 & 2025', org: 'BRIDES UK' },
    { title: 'PLATINUM MONOCHROME FILM', year: '2023 WINNER', org: 'LONDON FILM FESTIVAL' },
    { title: 'VOGUE UK FEATURED', year: '2024 & 2025', org: 'VOGUE WEDDINGS' },
    { title: 'TOP 10 DESTINATION ARTIST', year: '2025 RECOGNITION', org: 'HARPER’S BAZAAR' },
  ];

  return (
    <section id="accolades" className="py-28 bg-[#F5F2EE] text-[#1A1A1A] border-t border-zinc-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#9C8B6B] font-bold block mb-3">
            ACCREDITATIONS & PRESS
          </span>

          {/* Header */}
          <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#1A1A1A] mb-16">
            Award-Winning <span className="italic font-light">Artistry.</span>
          </h2>
        </motion.div>

        {/* Laurel Wreaths Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {laurels.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white border border-zinc-300 shadow-md"
            >
              {/* SVG Laurel Wreath Icon */}
              <div className="w-16 h-16 text-[#9C8B6B] mb-3 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                  <path d="M50 15 C30 30, 20 60, 50 85 C80 60, 70 30, 50 15 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M35 30 Q25 45 35 60 M65 30 Q75 45 65 60" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="font-serif text-lg font-medium text-[#1A1A1A] leading-tight mb-1">
                {item.title}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9C8B6B] font-bold">
                {item.year}
              </span>
              <span className="text-[10px] font-sans text-zinc-600 font-bold mt-1 uppercase tracking-wider">
                {item.org}
              </span>
            </motion.div>
          ))}
        </div>

        {/* 2 Featured Editorial Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="relative rounded-sm overflow-hidden shadow-lg aspect-[16/10] border border-zinc-300">
              <img
                src="/gallery/4.jpg"
                alt="Blenheim Palace Wedding Film"
                className="w-full h-full object-cover filter grayscale(100%) contrast(115%)"
              />
              <div className="absolute top-4 left-4 bg-[#1A1A1A] text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 font-bold">
                VOGUE FEATURED FILM
              </div>
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#1A1A1A]">
              Love In Second Innings — Claridge's Mayfair
            </h3>
            <p className="text-xs font-sans text-zinc-700 font-normal leading-relaxed">
              An intimate Mayfair celebration documented with ultra-fine grain monochrome 35mm film. Awarded Best Editorial Story by Brides UK.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="relative rounded-sm overflow-hidden shadow-lg aspect-[16/10] border border-zinc-300">
              <img
                src="/gallery/5.jpg"
                alt="Lake Como Riviera Wedding"
                className="w-full h-full object-cover filter grayscale(100%) contrast(115%)"
              />
              <div className="absolute top-4 left-4 bg-[#1A1A1A] text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 font-bold">
                HARPER'S BAZAAR SELECTION
              </div>
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#1A1A1A]">
              Twenty Years in the Making — Lake Como
            </h3>
            <p className="text-xs font-sans text-zinc-700 font-normal leading-relaxed">
              High-fashion speedboat arrivals, Renaissance terrace vows, and unscripted Italian elegance captured across three days.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
