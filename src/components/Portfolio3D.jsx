import React, { useState } from 'react';
import { Camera, Eye, Filter, Maximize2, X, ChevronLeft, ChevronRight, Heart, Info, MapPin } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function Portfolio3D() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [likedItems, setLikedItems] = useState({});

  const categories = [
    'All',
    'London Estates',
    'Cotswolds & Countryside',
    'Monochrome Couture',
    'Destination & Coastal'
  ];

  const portfolioItems = [
    {
      id: 1,
      src: '/gallery/1.jpg',
      title: 'The Monolith of Romance',
      category: 'London Estates',
      location: 'Claridge’s, Mayfair, London',
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 80mm f/1.9',
      exif: 'ISO 64 • 80mm • f/1.9 • 1/2000s',
      aspect: 'aspect-[4/5]'
    },
    {
      id: 2,
      src: '/gallery/2.jpg',
      title: 'Elegance in Motion',
      category: 'Cotswolds & Countryside',
      location: 'Aynhoe Park, Oxfordshire',
      camera: 'Leica SL2-S',
      lens: 'Noctilux-M 50mm f/0.95',
      exif: 'ISO 100 • 50mm • f/1.2 • 1/4000s',
      aspect: 'aspect-[3/4]'
    },
    {
      id: 3,
      src: '/gallery/3.jpg',
      title: 'Vows on the Riviera',
      category: 'Destination & Coastal',
      location: 'Villa d’Este, Lake Como',
      camera: 'Phase One IQ4 150MP',
      lens: 'Schneider 110mm f/2.8',
      exif: 'ISO 50 • 110mm • f/2.8 • 1/1600s',
      aspect: 'aspect-[4/5]'
    },
    {
      id: 4,
      src: '/gallery/4.jpg',
      title: 'Blenheim Palace Nocturne',
      category: 'Monochrome Couture',
      location: 'Blenheim Palace, UK',
      camera: 'Hasselblad 907X',
      lens: 'XCD 38mm f/2.5',
      exif: 'ISO 200 • 38mm • f/2.5 • 1/1000s',
      aspect: 'aspect-[1/1]'
    },
    {
      id: 5,
      src: '/gallery/5.jpg',
      title: 'The Royal Engagement',
      category: 'London Estates',
      location: 'The Ritz, Piccadilly, London',
      camera: 'Leica M11 Monochrom',
      lens: 'Summilux-M 35mm f/1.4',
      exif: 'ISO 125 • 35mm • f/1.4 • 1/3200s',
      aspect: 'aspect-[3/4]'
    },
    {
      id: 6,
      src: '/gallery/6.jpg',
      title: 'Whispering Willow Estate',
      category: 'Cotswolds & Countryside',
      location: 'Daylesford House, Gloucestershire',
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 55mm f/2.5',
      exif: 'ISO 100 • 55mm • f/2.5 • 1/1250s',
      aspect: 'aspect-[4/5]'
    },
    {
      id: 7,
      src: '/gallery/7.jpg',
      title: 'High-Fashion Veil Geometry',
      category: 'Monochrome Couture',
      location: 'The Ned, City of London',
      camera: 'Leica SL2',
      lens: 'APO-Summicron-SL 75mm',
      exif: 'ISO 100 • 75mm • f/2.0 • 1/2500s',
      aspect: 'aspect-[1/1]'
    },
    {
      id: 8,
      src: '/gallery/8.jpg',
      title: 'The Amalfi Sunset Solitude',
      category: 'Destination & Coastal',
      location: 'Ravello, Amalfi Coast',
      camera: 'Canon EOS R3',
      lens: 'RF 85mm f/1.2 L USM',
      exif: 'ISO 100 • 85mm • f/1.2 • 1/5000s',
      aspect: 'aspect-[4/5]'
    }
  ];

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setSelectedImage(filteredItems[index]);
    soundFx.playShutterClick();
  };

  const handleNext = () => {
    const nextIdx = (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(nextIdx);
    setSelectedImage(filteredItems[nextIdx]);
    soundFx.playDialClick();
  };

  const handlePrev = () => {
    const prevIdx = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxIndex(prevIdx);
    setSelectedImage(filteredItems[prevIdx]);
    soundFx.playDialClick();
  };

  const toggleLike = (e, id) => {
    e.stopPropagation();
    soundFx.playFocusBeep();
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="portfolio" className="relative py-28 bg-obsidian-950 text-white overflow-hidden border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-zinc-400 mb-3">
            <Camera size={14} className="text-white" />
            <span>3D INTERACTIVE MONOCHROME PORTFOLIO</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight">
            Curated Visual <span className="italic text-metallic">Journals.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
            Hover over cards for 3D depth perspective. Click any frame to inspect medium format camera EXIF data and fine art details.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  soundFx.playDialClick();
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105'
                    : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Depth Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-obsidian-900 rounded-2xl overflow-hidden border border-white/10 cursor-pointer transition-all duration-500 hover:border-white/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.9)] transform hover:-translate-y-2"
            >
              {/* Image with high contrast monochrome filter */}
              <div className={`w-full ${item.aspect} overflow-hidden relative`}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover filter grayscale(100%) contrast(115%) transition-all duration-700 group-hover:scale-110 group-hover:contrast(125%)"
                />

                {/* Viewfinder corner accents on hover */}
                <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-full h-full border border-white/30 rounded-lg relative">
                    <div className="absolute top-2 left-2 text-[9px] font-mono text-white bg-black/70 px-2 py-0.5 rounded">
                      EXIF INSPECT
                    </div>
                  </div>
                </div>

                {/* Heart / Bookmark Button */}
                <button
                  onClick={(e) => toggleLike(e, item.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md border transition-all duration-300 ${
                    likedItems[item.id]
                      ? 'bg-white text-black border-white'
                      : 'bg-black/40 border-white/20 text-zinc-300 hover:text-white hover:bg-black/70'
                  }`}
                >
                  <Heart size={14} className={likedItems[item.id] ? 'fill-black' : ''} />
                </button>
              </div>

              {/* Card Footer Info */}
              <div className="p-5 flex flex-col gap-1.5 bg-obsidian-950/90 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    {item.category}
                  </span>
                  <span className="text-[9px] font-mono text-zinc-500">
                    {item.exif.split('•')[2]}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-white font-light group-hover:text-metallic transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                  <MapPin size={11} className="text-zinc-500" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with EXIF Details */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all z-50"
          >
            <X size={20} />
          </button>

          {/* Prev / Next controls */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black transition-all z-50"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black transition-all z-50"
          >
            <ChevronRight size={24} />
          </button>

          {/* Modal Content */}
          <div 
            className="max-w-5xl w-full bg-obsidian-950 border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image View */}
            <div className="lg:w-2/3 bg-black flex items-center justify-center p-4 relative overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain filter grayscale(100%) contrast(120%)"
              />
            </div>

            {/* EXIF Metadata Sidebar */}
            <div className="lg:w-1/3 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-obsidian-900">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-mono text-zinc-400 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10 mb-4">
                  <Info size={12} />
                  <span>MEDIUM FORMAT RAW SPECIFICATIONS</span>
                </div>

                <h3 className="font-serif text-2xl font-light text-white mb-2">
                  {selectedImage.title}
                </h3>
                
                <p className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 mb-6">
                  <MapPin size={12} className="text-white" />
                  {selectedImage.location}
                </p>

                <div className="space-y-4 border-t border-b border-white/10 py-6 my-6 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">CAMERA BODY:</span>
                    <span className="text-white font-semibold">{selectedImage.camera}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">PRIME LENS:</span>
                    <span className="text-white font-semibold">{selectedImage.lens}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">EXIF SETTINGS:</span>
                    <span className="text-white font-semibold">{selectedImage.exif}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">COLOR SPACE:</span>
                    <span className="text-emerald-400 font-semibold">SILVER MONOCHROME RAW</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>SLIDE {lightboxIndex + 1} OF {filteredItems.length}</span>
                <button
                  onClick={(e) => toggleLike(e, selectedImage.id)}
                  className="flex items-center gap-2 text-white hover:underline"
                >
                  <Heart size={14} className={likedItems[selectedImage.id] ? 'fill-white' : ''} />
                  <span>{likedItems[selectedImage.id] ? 'SAVED TO JOURNAL' : 'SAVE TO FAVORITES'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
