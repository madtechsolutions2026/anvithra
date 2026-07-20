import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    'All',
    'London Estates',
    'Cotswolds & Countryside',
    'Monochrome Couture',
    'Destination Weddings'
  ];

  const works = [
    {
      id: 1,
      src: '/gallery/1.jpg',
      title: 'The Monolith of Romance',
      category: 'London Estates',
      location: 'Claridge’s Mayfair, London',
      aspect: 'aspect-[4/5]'
    },
    {
      id: 2,
      src: '/gallery/2.jpg',
      title: 'Elegance in Motion',
      category: 'Cotswolds & Countryside',
      location: 'Aynhoe Park, Oxfordshire',
      aspect: 'aspect-[3/4]'
    },
    {
      id: 3,
      src: '/gallery/3.jpg',
      title: 'Vows on the Riviera',
      category: 'Destination Weddings',
      location: 'Villa d’Este, Lake Como',
      aspect: 'aspect-[4/5]'
    },
    {
      id: 4,
      src: '/gallery/4.jpg',
      title: 'Blenheim Palace Nocturne',
      category: 'Monochrome Couture',
      location: 'Blenheim Palace, UK',
      aspect: 'aspect-[4/3]'
    },
    {
      id: 5,
      src: '/gallery/5.jpg',
      title: 'The Royal Engagement',
      category: 'London Estates',
      location: 'The Ritz, Piccadilly, London',
      aspect: 'aspect-[3/4]'
    },
    {
      id: 6,
      src: '/gallery/6.jpg',
      title: 'Whispering Willow Estate',
      category: 'Cotswolds & Countryside',
      location: 'Daylesford House, Gloucestershire',
      aspect: 'aspect-[4/5]'
    },
    {
      id: 7,
      src: '/gallery/7.jpg',
      title: 'High-Fashion Veil Geometry',
      category: 'Monochrome Couture',
      location: 'The Ned, City of London',
      aspect: 'aspect-[1/1]'
    },
    {
      id: 8,
      src: '/gallery/8.jpg',
      title: 'Amalfi Coast Solitude',
      category: 'Destination Weddings',
      location: 'Ravello, Amalfi Coast',
      aspect: 'aspect-[4/5]'
    }
  ];

  const filteredWorks = activeCategory === 'All'
    ? works
    : works.filter(w => w.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setSelectedImage(filteredWorks[index]);
  };

  const handleNext = () => {
    const nextIdx = (lightboxIndex + 1) % filteredWorks.length;
    setLightboxIndex(nextIdx);
    setSelectedImage(filteredWorks[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (lightboxIndex - 1 + filteredWorks.length) % filteredWorks.length;
    setLightboxIndex(prevIdx);
    setSelectedImage(filteredWorks[prevIdx]);
  };

  return (
    <section id="works" className="py-16 sm:py-28 bg-[#F5F2EE] border-t border-zinc-300 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#9C8B6B] font-bold block mb-2 sm:mb-3">
            SELECTED PORTFOLIO
          </span>
          <h2 className="font-serif text-3xl sm:text-6xl font-normal tracking-tight text-[#1A1A1A]">
            Curated Visual <span className="italic font-light">Journals.</span>
          </h2>

          {/* Category Filter Pills */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs uppercase tracking-widest font-mono font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#1A1A1A] text-white shadow-md'
                    : 'bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredWorks.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer space-y-2.5"
            >
              <div className={`w-full ${item.aspect} rounded-sm overflow-hidden shadow-md border border-zinc-300 relative bg-zinc-900`}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover filter grayscale(100%) contrast(120%) transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-[#9C8B6B] block">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1A1A1A] group-hover:underline decoration-1 underline-offset-4">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs font-sans text-zinc-600 flex items-center gap-1 mt-0.5">
                  <MapPin size={11} className="text-zinc-500 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-8 overflow-y-auto"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-50"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all z-50"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all z-50"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          <div 
            className="max-w-4xl w-full bg-[#111111] border border-white/20 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-white max-h-[90vh] my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-2/3 bg-black flex items-center justify-center p-2 sm:p-4 min-h-[300px]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[50vh] md:max-h-[75vh] w-auto object-contain filter grayscale(100%) contrast(120%)"
              />
            </div>

            <div className="md:w-1/3 p-6 sm:p-8 flex flex-col justify-between bg-[#1A1A1A]">
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-200 block mb-2 font-bold">
                  {selectedImage.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-xs font-sans text-zinc-300 flex items-center gap-1 mb-4 sm:mb-6">
                  <MapPin size={12} className="text-white shrink-0" />
                  {selectedImage.location}
                </p>
                <p className="text-xs font-light text-zinc-300 leading-relaxed border-t border-white/10 pt-4">
                  Hand-mastered in 16-bit uncompressed monochromatic RAW for Anvithra UK Atelier.
                </p>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-white/10 text-xs font-mono text-zinc-400 mt-4">
                FRAME {lightboxIndex + 1} OF {filteredWorks.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
