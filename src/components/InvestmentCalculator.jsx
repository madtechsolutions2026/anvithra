import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, FileText } from 'lucide-react';

export default function InvestmentCalculator({ onOpenBooking }) {
  const [selectedPackage, setSelectedPackage] = useState('royal');
  const [addons, setAddons] = useState({
    album: true,
    film35mm: true,
    drone: false,
    secondShooter: true
  });

  const packages = [
    {
      id: 'journal',
      name: 'THE EDITORIAL JOURNAL',
      price: 4800,
      badge: 'SINGLE DAY UK',
      description: 'Ideal for single-day luxury UK estate celebrations with focused principal storytelling.',
      features: [
        '10 Hours Continuous Principal Coverage',
        '600+ Hand-Mastered Monochrome RAW Files',
        'Private VIP Online Digital Gallery',
        'Full Personal Reproduction Rights'
      ]
    },
    {
      id: 'royal',
      name: 'THE ROYAL MONOLITH',
      price: 7500,
      badge: 'MOST POPULAR UK',
      description: 'Our flagship UK wedding experience featuring dual principal shooters and heirloom Italian album.',
      features: [
        'Full Day Unlimited Coverage (Until 1 AM)',
        '2 Senior Principal Photographers',
        '900+ Hand-Mastered Monochrome RAW Files',
        '14x11" Handcrafted Italian Leather Heirloom Album',
        '35mm Tri-X Silver Analog Film Coverage'
      ]
    },
    {
      id: 'destination',
      name: 'THE GLOBAL DESTINATION',
      price: 11500,
      badge: 'WORLDWIDE ULTIMATE',
      description: '3-day bespoke commission covering welcome party, main wedding day, and post-wedding brunch worldwide.',
      features: [
        '3-Day Multi-Location Worldwide Coverage',
        'Unlimited European Travel & Hotel Included',
        '1,200+ Hand-Mastered RAW & 35mm Analog Files',
        'Custom Handcrafted Italian Leather Box Set',
        'Priority 14-Day Express Gallery Delivery'
      ]
    }
  ];

  const addonPrices = [
    { key: 'album', name: '14x11" Handcrafted Italian Fine Art Leather Album', price: 1200 },
    { key: 'film35mm', name: '35mm Tri-X Silver Analog Film Roll Service', price: 850 },
    { key: 'drone', name: '4K Cinema Aerial Drone Coverage', price: 950 },
    { key: 'secondShooter', name: 'Principal Second Photographer', price: 1100 },
  ];

  const currentPkg = packages.find(p => p.id === selectedPackage);
  const addonsTotal = addonPrices.reduce((sum, item) => addons[item.key] ? sum + item.price : sum, 0);
  const grandTotal = currentPkg.price + addonsTotal;

  const toggleAddon = (key) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="investment" className="py-28 bg-[#F5F2EE] text-[#1A1A1A] border-t border-zinc-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#9C8B6B] font-bold block mb-3">
            INVESTMENT & COLLECTIONS
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#1A1A1A]">
            PRICING <span className="italic font-light">& Collections.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-700 font-normal max-w-xl mx-auto leading-relaxed">
            Transparent, high-fashion collection tiers in GBP (£) with bespoke heirloom options.
          </p>
        </motion.div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, idx) => {
            const isSelected = selectedPackage === pkg.id;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-lg ${
                  isSelected
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] scale-[1.03]'
                    : 'bg-white text-[#1A1A1A] border-zinc-300 hover:border-zinc-500'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase ${
                      isSelected ? 'bg-amber-100 text-[#1A1A1A]' : 'bg-zinc-100 text-zinc-800 border border-zinc-300'
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className={`font-serif text-2xl font-normal mb-2 ${isSelected ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    {pkg.name}
                  </h3>
                  
                  <div className={`font-serif text-4xl font-normal mb-4 ${isSelected ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    £{pkg.price.toLocaleString()}
                    <span className={`text-xs font-mono uppercase tracking-widest ml-2 ${isSelected ? 'text-amber-200' : 'text-[#9C8B6B] font-bold'}`}>
                      + VAT
                    </span>
                  </div>

                  <p className={`text-xs leading-relaxed mb-6 ${isSelected ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {pkg.description}
                  </p>

                  <ul className={`space-y-3 border-t pt-6 mb-8 text-xs font-mono ${
                    isSelected ? 'border-white/20 text-zinc-200' : 'border-zinc-200 text-zinc-800'
                  }`}>
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check size={15} className={`shrink-0 mt-0.5 ${isSelected ? 'text-white' : 'text-[#1A1A1A]'}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-4 rounded-xl text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-md ${
                    isSelected
                      ? 'bg-white text-[#1A1A1A] hover:bg-amber-100'
                      : 'bg-[#1A1A1A] text-white hover:bg-zinc-800'
                  }`}
                >
                  {isSelected ? 'SELECTED COLLECTION' : 'SELECT COLLECTION'}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Addons & Grand Total */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 sm:p-12 rounded-2xl border border-zinc-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl text-[#1A1A1A]"
        >
          
          <div className="lg:col-span-7 space-y-4">
            <h4 className="font-serif text-2xl text-[#1A1A1A] font-normal">
              Tailor Bespoke Upgrades
            </h4>

            <div className="space-y-3">
              {addonPrices.map((item) => (
                <label
                  key={item.key}
                  onClick={() => toggleAddon(item.key)}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                    addons[item.key]
                      ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white shadow-md'
                      : 'bg-zinc-50 border-zinc-300 text-zinc-800 hover:border-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                      addons[item.key] ? 'bg-white border-white text-[#1A1A1A]' : 'border-zinc-400 bg-white'
                    }`}>
                      {addons[item.key] && <Check size={13} className="stroke-[3]" />}
                    </div>
                    <span className="text-xs font-mono font-medium">{item.name}</span>
                  </div>

                  <span className={`text-xs font-mono font-bold ${addons[item.key] ? 'text-amber-200' : 'text-[#9C8B6B]'}`}>
                    +£{item.price.toLocaleString()}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#1A1A1A] text-white p-8 rounded-2xl flex flex-col justify-between shadow-2xl space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-amber-200 font-bold uppercase">
                ESTIMATED INVESTMENT SUMMARY
              </span>
              <h5 className="font-serif text-2xl font-light mt-1 text-white">
                {currentPkg.name}
              </h5>

              <div className="space-y-2 border-t border-b border-white/20 py-4 my-4 text-xs font-mono">
                <div className="flex justify-between text-zinc-300">
                  <span>BASE COLLECTION:</span>
                  <span className="text-white font-bold">£{currentPkg.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>UPGRADES TOTAL:</span>
                  <span className="text-white font-bold">£{addonsTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-white pt-2 border-t border-white/20 text-sm">
                  <span>ESTIMATED TOTAL:</span>
                  <span className="text-2xl font-serif text-amber-200">£{grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-4 rounded-xl bg-white text-[#1A1A1A] font-bold text-xs font-mono tracking-widest uppercase hover:bg-amber-100 flex items-center justify-center gap-2 shadow-lg"
            >
              <FileText size={16} />
              <span>REQUEST VIP PROPOSAL</span>
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
