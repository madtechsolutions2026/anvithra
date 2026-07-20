import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export default function HeroBanner({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: '/gallery/1.jpg',
      tag: 'LONDON ESTATES • MAYFAIR',
      title: 'A MODERN APPROACH',
      italicText: 'to an',
      endText: 'AGE OLD TRADITION.',
      description: 'Considered to be the epitome of Modern Photography & Filmmaking, Anvithra transforms weddings across London, the Cotswolds, and European destinations into timeless monochromatic art.',
      location: 'Claridge’s Mayfair • London'
    },
    {
      img: '/gallery/2.jpg',
      tag: 'HISTORIC COTSWOLDS ESTATE',
      title: 'CHOREOGRAPHED ELEGANCE',
      italicText: '&',
      endText: 'UNSCRIPTED EMOTION.',
      description: 'Capturing private celebrations, historic estate weddings, and European elopements with architectural precision and high-fashion sensibility.',
      location: 'Aynhoe Park • Oxfordshire'
    },
    {
      img: '/gallery/3.jpg',
      tag: 'EUROPEAN RIVIERA COMMISSIONS',
      title: 'POETRY IN MONOCHROME',
      italicText: 'at',
      endText: 'LAKE COMO.',
      description: 'High-fashion speedboat arrivals, Renaissance terraced gardens, and dramatic Italian lake waters captured across three days of unscripted romance.',
      location: 'Villa d’Este • Lake Como, Italy'
    },
    {
      img: '/gallery/4.jpg',
      tag: 'UNESCO WORLD HERITAGE',
      title: 'PALATIAL MONUMENT',
      italicText: '&',
      endText: 'HERITAGE DRAMA.',
      description: 'Documenting grand black-tie galas across the Long Library and Great Hall at Blenheim Palace with medium format Tri-X analog film standards.',
      location: 'Blenheim Palace • Oxfordshire'
    },
    {
      img: '/gallery/5.jpg',
      tag: 'VOGUE UK FEATURED ATELIER',
      title: 'HIGH-FASHION VOGUE',
      italicText: 'bridal',
      endText: 'JOURNAL.',
      description: 'An accredited UK luxury atelier delivering 16-bit uncompressed monochromatic RAW files for discerning couples worldwide.',
      location: 'The Ned • City of London'
    }
  ];

  // Auto advance carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-[#F5F2EE] text-[#1A1A1A] py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Side-by-Side 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column (6 cols): Editorial Text + Controls */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1A1A1A] text-white text-[9px] sm:text-[10px] font-mono tracking-[0.25em] sm:tracking-[0.3em] uppercase shadow-sm">
              <Sparkles size={11} className="text-amber-200" />
              <span>{slides[currentSlide].tag}</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-normal tracking-tight leading-[1.02] text-[#1A1A1A] break-words">
              {slides[currentSlide].title} <br className="hidden sm:inline" />
              <span className="italic font-light">{slides[currentSlide].italicText}</span> {slides[currentSlide].endText}
            </h1>

            {/* Paragraph Description */}
            <p className="font-sans text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed max-w-lg">
              {slides[currentSlide].description}
            </p>

            {/* Action CTA Button */}
            <div className="pt-1 sm:pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#1A1A1A] text-white text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] hover:bg-zinc-800 transition-all duration-300 shadow-md flex items-center justify-center gap-2 rounded-sm"
              >
                <span>INQUIRE COMMISSION</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Carousel Navigation Bar */}
            <div className="pt-4 sm:pt-6 border-t border-zinc-300 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
              
              {/* Slide Counter */}
              <span className="font-mono text-[11px] sm:text-xs text-zinc-600 uppercase tracking-widest">
                FRAME 0{currentSlide + 1} <span className="text-zinc-400">/</span> 0{slides.length}
              </span>

              {/* Progress Dots */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      currentSlide === idx 
                        ? 'w-6 sm:w-8 bg-[#1A1A1A]' 
                        : 'w-2 sm:w-2.5 bg-zinc-300 hover:bg-zinc-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 sm:p-2.5 bg-white border border-zinc-300 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all shadow-sm rounded-sm"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 sm:p-2.5 bg-white border border-zinc-300 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all shadow-sm rounded-sm"
                  aria-label="Next slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

            </div>

          </div>

          {/* Right Column (6 cols): Pure B&W Image Carousel */}
          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden shadow-xl aspect-[4/5] sm:aspect-[4/5] lg:aspect-[3/4] border border-zinc-300 bg-zinc-900 group">
              
              {/* Carousel Slides - Pure Black & White */}
              {slides.map((slide, idx) => (
                <div
                  key={slide.img}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    currentSlide === idx ? 'opacity-100 scale-105' : 'opacity-0 scale-100 pointer-events-none'
                  }`}
                  style={{ transitionProperty: 'opacity, transform', transitionDuration: '1000ms' }}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center filter grayscale(100%) contrast(125%) brightness(92%)"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  {/* Location Caption Tag */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 bg-white/95 backdrop-blur-md border border-zinc-200 text-[10px] sm:text-xs font-mono text-zinc-800 flex justify-between items-center shadow-md">
                    <span className="uppercase tracking-widest font-semibold truncate">{slide.location}</span>
                    <span className="text-[9px] text-zinc-500 uppercase tracking-widest hidden sm:inline shrink-0 ml-2">ANVITHRA B&W</span>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
