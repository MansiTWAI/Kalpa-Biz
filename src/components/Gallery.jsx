import React from 'react';
import { Maximize2, Camera, MapPin, Grid } from 'lucide-react';

// Assets
import img5 from '../assets/img5.webp';
import img6 from '../assets/img6.webp';
import img7 from '../assets/img7.webp';
import img8 from '../assets/img8.webp';

export default function Gallery() {
  const galleryItems = [
    { 
      src: img5, 
      alt: "Mountain Sunrise View", 
      tag: "Outdoor",
      span: "md:col-span-2 md:row-span-2 h-full" 
    },
    { 
      src: img6, 
      alt: "Luxury Suite Interior", 
      tag: "Interior",
      span: "md:col-span-1 md:row-span-1" 
    },
    { 
      src: img7, 
      alt: "Riverside Dining", 
      tag: "Dining",
      span: "md:col-span-1 md:row-span-1" 
    },
    { 
      src: img8, 
      alt: "Apple Orchard Path", 
      tag: "Nature",
      span: "md:col-span-2 md:row-span-1" 
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* Refined Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <Camera size={18} strokeWidth={2.5} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Experience</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Visual <span className="text-slate-400 font-light">Journey</span>
          </h2>
        </div>
        
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 hover:bg-slate-900 hover:text-white text-slate-600 text-xs font-bold transition-all duration-300 border border-slate-200">
          <Grid size={14} /> View All 16 Photos
        </button>
      </div>

      {/* Modern Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[240px] gap-4">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className={`group relative overflow-hidden rounded-[1.5rem] bg-slate-200 cursor-pointer ${item.span}`}
          >
            {/* Image Layer */}
            <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
              loading="lazy"
            />

            {/* Smart Overlay System */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {/* Top Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-bold text-white uppercase tracking-widest">
                  {item.tag}
                </span>
              </div>

              {/* Center Action */}
              <div className="absolute inset-0 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 size={20} />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                 <p className="text-white font-medium text-sm truncate opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                   {item.alt}
                 </p>
                 <div className="flex items-center gap-1 text-white/60 text-[10px] mt-1">
                   <MapPin size={10} /> <span>Manali, Himachal</span>
                 </div>
              </div>
            </div>

            {/* Special "Show More" Counter (Only for specific layouts) */}
            {idx === galleryItems.length - 1 && (
              <div className="absolute top-4 right-4 z-20">
                 <div className="bg-slate-900/40 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 text-white text-[10px] font-bold">
                   +12
                 </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Trust Badge Footer */}
      <div className="flex items-center justify-center gap-8 py-4 opacity-50 text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <span className="flex items-center gap-2 italic">Professional Photography</span>
        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
        <span className="flex items-center gap-2">Verified Views</span>
      </div>
    </div>
  );
}