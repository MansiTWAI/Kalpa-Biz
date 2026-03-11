import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

// Your imported images
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

export default function Hero({ onBookClick }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950">
      {/* Background Slideshow */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            idx === activeIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={img}
            alt="Kalpa Biz Resort View"
            className="h-full w-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Main Content Area */}
      <div className="relative z-10 flex h-full items-center px-6 lg:px-20">
        <div className="max-w-4xl space-y-6">
          
          {/* Top Floating Badge */}
          <div className="inline-flex items-center gap-2 mt-20 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ShieldCheck size={14} className="text-amber-400" />
            <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">
              Mountain View Sanctuary • Kinnaur Kailash
            </span>
          </div>

          {/* Typography */}
          <div className="space-y-2 animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="font-serif text-6xl font-extrabold tracking-tight text-white md:text-8xl lg:text-9xl">
              Kalpa <span className="text-amber-500 italic">Biz</span>
            </h1>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-amber-500 md:w-24"></span>
              <h2 className="text-4xl font-light tracking-[0.3em] text-amber-500 uppercase md:text-5xl">
                RESORT
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            <div className="flex items-center gap-2 text-white">
              <MapPin size={18} className="text-amber-500" />
              <span className="text-sm font-medium">Chaka Road, Kalpa — Gateway to the Himalayas</span>
            </div>
            <p className="max-w-lg text-lg font-light leading-relaxed text-gray-300 drop-shadow-md">
              Experience breathtaking views of the Kinnaur Kailash range. Nestled amidst lush apple orchards, 
              we offer peaceful mountain-view rooms and traditional Himachali hospitality at 2,960 meters.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-6 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            {/* Primary Action */}
            <button 
              onClick={onBookClick}
              className="group flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-bold text-slate-900 transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/20"
            >
              BOOK YOUR STAY
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
            
            <div className="flex items-center gap-2 text-white transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-sm">
                <span className="text-amber-400 font-bold">4.8</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold tracking-wide uppercase text-white">Guest Favorite</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-tighter">Top Rated in Kinnaur</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails Navigation */}
      <div className="absolute right-10 bottom-10 z-20 hidden flex-col gap-4 lg:flex">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`relative h-20 w-32 overflow-hidden rounded-xl border-2 transition-all duration-500 ${
              activeIdx === idx 
                ? 'border-amber-500 scale-110 translate-x-[-10px] shadow-2xl shadow-black/50' 
                : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white'
            }`}
          >
            <img src={img} className="h-full w-full object-cover" alt="Kalpa Resort Preview" />
            {activeIdx === idx && (
              <div className="absolute inset-0 bg-amber-500/10" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}