import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Lock } from 'lucide-react';

export default function BookingPortal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    phone: '',
    weddingDate: '',
    venue: '',
    location: 'London Estates',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#B59A5B', '#111111', '#ffffff']
    });

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      names: '',
      email: '',
      phone: '',
      weddingDate: '',
      venue: '',
      location: 'London Estates',
      notes: ''
    });
    if (onClose) onClose();
  };

  return (
    <section id="inquire" className="py-28 bg-[#F5F2EE] text-[#1A1A1A] border-t border-zinc-300">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#9C8B6B] font-bold block mb-3">
            VIP CONCIERGE & INQUIRY
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#1A1A1A]">
            Reserve Your <span className="italic font-light">Date.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed">
            Anvithra accepts only 18 exclusive wedding commissions per calendar year to ensure uncompromising medium-format artistry.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 sm:p-12 rounded-2xl border border-zinc-300 shadow-xl text-[#1A1A1A]"
        >
          
          {submitted ? (
            <div className="text-center py-10 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 size={36} />
              </div>

              <span className="text-xs font-mono tracking-widest text-[#9C8B6B] uppercase font-bold block">
                VIP CONCIERGE CONFIRMATION
              </span>

              <h3 className="font-serif text-3xl font-normal text-[#1A1A1A]">
                Inquiry Successfully Transmitted
              </h3>

              <p className="text-xs sm:text-sm text-zinc-700 font-normal max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-black font-bold">{formData.names || 'Valued Couple'}</span>. Our Studio Director will review your date <span className="text-black font-mono font-bold">{formData.weddingDate || 'TBD'}</span> and contact you within 24 hours.
              </p>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-mono text-zinc-700 max-w-sm mx-auto space-y-1">
                <div className="flex justify-between">
                  <span>TICKET ID:</span>
                  <span className="font-bold text-[#1A1A1A]">ANV-2026-VIP-9942</span>
                </div>
                <div className="flex justify-between">
                  <span>GUARANTEE:</span>
                  <span className="text-emerald-700 font-bold">WITHIN 24 HOURS</span>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="mt-4 px-8 py-3 rounded-full bg-[#1A1A1A] text-white font-bold text-xs font-mono tracking-widest uppercase hover:bg-black shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                    COUPLE NAMES *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Alexander & Lady Victoria"
                    value={formData.names}
                    onChange={(e) => setFormData({ ...formData, names: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3.5 text-xs text-[#1A1A1A] placeholder-zinc-400 focus:outline-none focus:border-[#1A1A1A] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                    PRIVATE EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alexander@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3.5 text-xs text-[#1A1A1A] placeholder-zinc-400 focus:outline-none focus:border-[#1A1A1A] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                    TELEPHONE
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 7700 900077"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3.5 text-xs text-[#1A1A1A] placeholder-zinc-400 focus:outline-none focus:border-[#1A1A1A] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                    WEDDING DATE *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                    REGION
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:bg-white transition-colors"
                  >
                    <option value="London Estates">London Estates (Mayfair, City)</option>
                    <option value="Cotswolds & UK Countryside">Cotswolds & UK Countryside</option>
                    <option value="European Destination">European Destination (Italy, France)</option>
                    <option value="Worldwide Destination">Worldwide Destination</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                  ESTATE / VENUE NAME & VISION
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about your venue, guest count, or private non-disclosure requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3.5 text-xs text-[#1A1A1A] placeholder-zinc-400 focus:outline-none focus:border-[#1A1A1A] focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-600 font-medium">
                  <Lock size={13} className="text-[#1A1A1A]" />
                  <span>100% CONFIDENTIAL INQUIRY</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#1A1A1A] text-white font-bold text-xs font-mono tracking-widest uppercase hover:bg-black shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>Transmit Inquiry</span>
                </button>
              </div>

            </form>
          )}

        </motion.div>

      </div>
    </section>
  );
}
