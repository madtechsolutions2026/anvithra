import React, { useState } from 'react';
import { Sliders, Camera, Eye, Disc, Sun, Layers, Sparkles, RefreshCw } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function LensExperience3D() {
  const [activePhoto, setActivePhoto] = useState('/gallery/1.jpg');
  const [aperture, setAperture] = useState(1.4);
  const [vignette, setVignette] = useState(40);
  const [grain, setGrain] = useState(30);
  const [contrast, setContrast] = useState(120);
  const [brightness, setBrightness] = useState(95);

  const samplePhotos = [
    { src: '/gallery/1.jpg', label: 'Claridge’s Mayfair' },
    { src: '/gallery/2.jpg', label: 'Aynhoe Park' },
    { src: '/gallery/3.jpg', label: 'Lake Como Riviera' },
    { src: '/gallery/4.jpg', label: 'Blenheim Palace' },
    { src: '/gallery/5.jpg', label: 'The Ritz London' },
    { src: '/gallery/6.jpg', label: 'Daylesford Estate' },
  ];

  const resetControls = () => {
    setAperture(1.4);
    setVignette(40);
    setGrain(30);
    setContrast(120);
    setBrightness(95);
    soundFx.playShutterClick();
  };

  return (
    <section id="lens-3d" className="relative py-28 bg-obsidian-950 text-white border-t border-white/10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-zinc-400 mb-3">
              <Disc size={14} className="text-white animate-spin-slow" />
              <span>SECTION 4: VIRTUAL 3D LENS ATELIER</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight">
              Behind The <span className="italic text-metallic">Medium Format Lens.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            Manipulate our custom optical lens simulator below. Adjust aperture depth, film grain, and shadow contrast in real-time to experience how Anvithra sculpts light.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Interactive Photo Canvas View (8 cols) */}
          <div className="lg:col-span-8 bg-obsidian-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col justify-between p-4 sm:p-8 min-h-[500px]">
            
            {/* Real-time Filtered Image Backdrop */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={activePhoto}
                alt="Lens Simulator Live Feed"
                className="w-full h-full object-cover transition-all duration-300"
                style={{
                  filter: `grayscale(100%) contrast(${contrast}%) brightness(${brightness}%) blur(${Math.max(0, (aperture - 1.4) * 0.4)}px)`,
                }}
              />

              {/* Dynamic Vignette Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none transition-all duration-300"
                style={{
                  background: `radial-gradient(circle, transparent ${100 - vignette}%, rgba(0,0,0,0.95) 100%)`
                }}
              />

              {/* Dynamic Film Grain Simulation */}
              <div 
                className="absolute inset-0 pointer-events-none film-grain"
                style={{ opacity: grain / 100 }}
              />
            </div>

            {/* Viewfinder Top Bar Overlay */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono tracking-widest bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
              <span className="text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                OPTICAL ENGINE ACTIVE
              </span>
              <span className="text-white">f/{aperture.toFixed(1)} • GRAIN {grain}% • VIGNETTE {vignette}%</span>
            </div>

            {/* Center Focus Reticle */}
            <div className="relative z-10 my-auto self-center w-24 h-24 border border-white/30 rounded-full flex items-center justify-center pointer-events-none opacity-60">
              <div className="w-12 h-12 border border-dashed border-white/40 rounded-full animate-spin-slow" />
              <div className="w-1.5 h-1.5 bg-white rounded-full absolute" />
            </div>

            {/* Sample Photo Thumbnail Selector Bar */}
            <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between gap-3 overflow-x-auto">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider shrink-0">SELECT FRAME:</span>
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {samplePhotos.map((photo) => (
                  <button
                    key={photo.src}
                    onClick={() => {
                      setActivePhoto(photo.src);
                      soundFx.playDialClick();
                    }}
                    className={`h-12 w-16 rounded-lg overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                      activePhoto === photo.src
                        ? 'border-white scale-105 shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                        : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={photo.src} alt={photo.label} className="w-full h-full object-cover filter grayscale(100%)" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Lens Controls Sidebar (4 cols) */}
          <div className="lg:col-span-4 glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 flex items-center gap-2">
                  <Sliders size={16} />
                  <span>OPTICAL CONTROLS</span>
                </span>
                <button
                  onClick={resetControls}
                  className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  title="Reset Controls"
                >
                  <RefreshCw size={14} />
                </button>
              </div>

              {/* Slider 1: Aperture */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Disc size={13} /> APERTURE BLADES
                  </span>
                  <span className="text-white font-bold">f/{aperture.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="1.2"
                  max="16"
                  step="0.1"
                  value={aperture}
                  onChange={(e) => {
                    setAperture(parseFloat(e.target.value));
                    soundFx.playDialClick();
                  }}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>

              {/* Slider 2: Vignette */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Eye size={13} /> VIGNETTE SHADOWS
                  </span>
                  <span className="text-white font-bold">{vignette}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="90"
                  value={vignette}
                  onChange={(e) => {
                    setVignette(parseInt(e.target.value));
                    soundFx.playDialClick();
                  }}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>

              {/* Slider 3: Grain */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Layers size={13} /> 35MM FILM GRAIN
                  </span>
                  <span className="text-white font-bold">{grain}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={grain}
                  onChange={(e) => {
                    setGrain(parseInt(e.target.value));
                    soundFx.playDialClick();
                  }}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>

              {/* Slider 4: Monochrome Contrast */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Sun size={13} /> NOIR CONTRAST
                  </span>
                  <span className="text-white font-bold">{contrast}%</span>
                </div>
                <input
                  type="range"
                  min="90"
                  max="160"
                  value={contrast}
                  onChange={(e) => {
                    setContrast(parseInt(e.target.value));
                    soundFx.playDialClick();
                  }}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>
            </div>

            {/* Information Badge */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-400 flex items-start gap-3">
              <Sparkles size={16} className="text-white shrink-0 mt-0.5" />
              <span>All Anvithra commissions are hand-mastered in 16-bit uncompressed medium format digital RAW & 35mm Tri-X Silver film.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
