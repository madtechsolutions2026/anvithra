import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      quote: "Anvithra transformed our Claridge’s wedding weekend into a breathtaking Vogue-grade artistic legacy. Their mastery of black and white medium format photography left our guests in absolute awe.",
      couple: "Lord Alexander & Lady Victoria Montagu",
      venue: "Claridge’s Mayfair, London",
      date: "September 2025",
      img: "/gallery/1.jpg",
      publication: "Featured in Vogue UK Weddings"
    },
    {
      quote: "The discretion, composure, and high-fashion sensibility Anvithra brought to Aynhoe Park was unparalleled. Every shot feels like a frame pulled from an iconic European film.",
      couple: "Julian & Genevieve Sterling",
      venue: "Aynhoe Park, Cotswolds",
      date: "June 2025",
      img: "/gallery/2.jpg",
      publication: "Brides Magazine UK"
    },
    {
      quote: "For our destination wedding on Lake Como, we insisted on zero artificial poses. Anvithra captured raw, unscripted emotion with staggering speed and razor-sharp perfection.",
      couple: "Dr. Ethan & Marcus Thorne",
      venue: "Villa d’Este, Lake Como",
      date: "August 2025",
      img: "/gallery/3.jpg",
      publication: "Harper's Bazaar Bride"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="stories" className="py-16 sm:py-28 bg-[#F5F2EE] text-[#1A1A1A] border-t border-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#9C8B6B] font-bold block mb-2 sm:mb-3">
              PRAISE & LOVE STORIES
            </span>
            <h2 className="font-serif text-3xl sm:text-6xl font-normal tracking-tight">
              Words from <span className="italic font-light">Elite Couples.</span>
            </h2>
          </motion.div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              onClick={handlePrev}
              className="p-3 sm:p-4 rounded-full bg-white border border-zinc-300 hover:bg-[#1A1A1A] hover:text-white transition-all shadow-sm"
              aria-label="Previous story"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 sm:p-4 rounded-full bg-white border border-zinc-300 hover:bg-[#1A1A1A] hover:text-white transition-all shadow-sm"
              aria-label="Next story"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 sm:p-12 lg:p-14 rounded-xl border border-zinc-300 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Couple Image Frame (5 cols) */}
            <div className="lg:col-span-5 relative rounded-sm overflow-hidden aspect-[4/5] border border-zinc-300 shadow-md">
              <img
                src={stories[currentIndex].img}
                alt={stories[currentIndex].couple}
                className="w-full h-full object-cover filter grayscale(100%) contrast(120%)"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 bg-white/95 backdrop-blur-md rounded-sm border border-zinc-200 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#1A1A1A] shadow-sm">
                <span className="flex items-center gap-1 text-[#9C8B6B] font-bold truncate">
                  <Star size={12} className="fill-[#9C8B6B] shrink-0" />
                  <span className="truncate">{stories[currentIndex].publication}</span>
                </span>
                <span className="shrink-0 ml-1">{stories[currentIndex].date}</span>
              </div>
            </div>

            {/* Testimonial Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-6">
              <Quote size={36} className="text-[#9C8B6B]" />

              <blockquote className="font-serif text-xl sm:text-3xl text-[#1A1A1A] font-light leading-relaxed italic">
                "{stories[currentIndex].quote}"
              </blockquote>

              <div className="pt-4 sm:pt-6 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-normal">
                    {stories[currentIndex].couple}
                  </h4>
                  <p className="text-xs font-mono text-[#9C8B6B] font-bold mt-0.5">
                    {stories[currentIndex].venue}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
