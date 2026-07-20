import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export default function VenuesShowcase() {
  const [selectedVenue, setSelectedVenue] = useState(0);

  const venues = [
    {
      name: 'Claridge’s Hotel',
      location: 'Mayfair, London W1K',
      region: 'London Estates',
      img: '/gallery/6.jpg',
      lighting: 'Art Deco Crystal Chandelier & Velvet Shadows',
      description: 'Anvithra holds exclusive accredited access to Claridge’s French Salon and Ballroom, capturing high-society celebrations with unmatched elegance.',
      tags: ['Accredited', 'Art Deco', 'London Mayfair']
    },
    {
      name: 'Aynhoe Park',
      location: 'Cotswolds, Oxfordshire',
      region: 'UK Country Estates',
      img: '/gallery/2.jpg',
      lighting: 'Natural Skylights & Taxidermy Shadows',
      description: 'A 17th-century country house infused with surrealist art. Our monochrome approach brings out the architectural drama of its grand staircases.',
      tags: ['Private Estate', 'Cotswolds', 'High Fashion']
    },
    {
      name: 'Blenheim Palace',
      location: 'Woodstock, Oxfordshire',
      region: 'UK Heritage',
      img: '/gallery/4.jpg',
      lighting: 'High Cathedral Ceilings & Golden Hour Light',
      description: 'A monumental UNESCO World Heritage site where Anvithra documents grand black-tie galas across the Long Library and Great Hall.',
      tags: ['Palatial Scale', 'UNESCO Site', 'Black-Tie']
    },
    {
      name: 'The Ned London',
      location: 'City of London, EC2R',
      region: 'London Estates',
      img: '/gallery/7.jpg',
      lighting: 'Vintage Mahogany Bar & Low-Key Noir',
      description: 'Featuring 92 verdite columns, ideal for couples seeking a moody, high-fashion London cityscape aesthetic.',
      tags: ['Historic Bank', 'Rooftop Terrace', 'Low-Key Noir']
    },
    {
      name: 'Villa d’Este',
      location: 'Lake Como, Italy',
      region: 'Worldwide Destination',
      img: '/gallery/3.jpg',
      lighting: 'Sunlit Waters & Cypress Tree Geometry',
      description: 'High-fashion speedboats, Renaissance terraced gardens, and dramatic Italian lake waters for European commissions.',
      tags: ['Destination', 'Lake Como', 'Speedboat Arrivals']
    }
  ];

  return (
    <section id="venues" className="py-16 sm:py-28 bg-[#F5F2EE] text-[#1A1A1A] border-t border-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#9C8B6B] font-bold block mb-2 sm:mb-3">
            UK & GLOBAL ESTATES
          </span>
          <h2 className="font-serif text-3xl sm:text-6xl font-normal tracking-tight">
            Accredited at <span className="italic font-light">Historic Estates.</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-600 font-normal max-w-xl mx-auto leading-relaxed">
            We work closely with venue directors across Mayfair, the Cotswolds, and European luxury destinations to guarantee seamless access.
          </p>
        </motion.div>

        {/* Venue Tabs (Horizontally scrollable on mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-none px-1">
          {venues.map((v, idx) => (
            <button
              key={v.name}
              onClick={() => setSelectedVenue(idx)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-all shrink-0 ${
                selectedVenue === idx
                  ? 'bg-[#1A1A1A] text-white font-semibold shadow-md'
                  : 'bg-white border border-zinc-300 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              {v.name}
            </button>
          ))}
        </div>

        {/* Selected Venue Showcase Display */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl border border-zinc-300 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0"
        >
          
          {/* Venue Image (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[400px] lg:min-h-[500px]">
            <img
              src={venues[selectedVenue].img}
              alt={venues[selectedVenue].name}
              className="w-full h-full object-cover filter grayscale(100%) contrast(120%)"
            />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#1A1A1A] text-white text-[10px] sm:text-xs font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-sm flex items-center gap-1.5 shadow-md">
              <MapPin size={12} />
              <span>{venues[selectedVenue].region}</span>
            </div>
          </div>

          {/* Venue Details (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {venues[selectedVenue].tags.map((tag) => (
                  <span key={tag} className="text-[9px] sm:text-[10px] font-mono text-zinc-700 bg-zinc-100 border border-zinc-200 px-2.5 py-1 rounded-sm uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl text-[#1A1A1A] font-normal mb-1.5 sm:mb-2">
                {venues[selectedVenue].name}
              </h3>
              
              <p className="text-xs font-mono text-[#9C8B6B] font-bold flex items-center gap-1.5 mb-4 sm:mb-6">
                <MapPin size={13} className="shrink-0" />
                {venues[selectedVenue].location}
              </p>

              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-6 sm:mb-8">
                {venues[selectedVenue].description}
              </p>

              <div className="space-y-3 border-t border-b border-zinc-200 py-4 sm:py-6 mb-6 sm:mb-8 text-xs font-mono">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2">
                  <span className="text-zinc-500">LIGHTING PROFILE:</span>
                  <span className="text-[#1A1A1A] font-medium sm:text-right max-w-none sm:max-w-[200px]">
                    {venues[selectedVenue].lighting}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">PERMIT STATUS:</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <ShieldCheck size={13} /> ACCREDITED
                  </span>
                </div>
              </div>
            </div>

            <a
              href="#works"
              className="inline-flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 rounded-sm bg-[#1A1A1A] text-white font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] transition-all hover:bg-black shadow-md"
            >
              <span>View {venues[selectedVenue].name} Gallery</span>
              <ArrowRight size={15} />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
