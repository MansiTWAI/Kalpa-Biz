import React from 'react';
import { 
  ShieldCheck, ArrowUpRight, 
  Phone, Mail, MapPin, ChevronRight 
} from 'lucide-react';

export default function Footer({ 
  onScrollToBooking, 
  onScrollToGallery, 
  onScrollToFacilities, 
  onScrollToAbout,
  onScrollToLocation 
}) {
  
  // Back to top helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      title: "Navigation",
      links: [
        { name: "Book Your Stay", action: onScrollToBooking },
        { name: "Photo Gallery", action: onScrollToGallery },
        { name: "Resort Facilities", action: onScrollToFacilities },
        { name: "About the Resort", action: onScrollToAbout },
      ]
    },
    {
      title: "Explore Kalpa",
      links: [
        { name: "Kinnaur Kailash View", action: onScrollToLocation },
        { name: "Roghi Village", action: onScrollToLocation },
        { name: "Suicide Point", action: onScrollToLocation },
        { name: "Reckong Peo Market", action: onScrollToLocation },
      ]
    },
    {
      title: "Guest Info",
      links: [
        { name: "Check-in: 12:00 PM", action: onScrollToBooking }, // Click to go to booking/info
        { name: "Check-out: 11:00 AM", action: onScrollToBooking },
        { name: "Location Map", action: onScrollToLocation },
        { name: "Privacy Policy", action: null },
      ]
    }
  ];

  const handleLinkClick = (e, action) => {
    if (action) {
      e.preventDefault();
      action();
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* 1. BRAND & IDENTITY (Clickable to Top) */}
          <div className="lg:col-span-4 space-y-8">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-4 group text-left transition-transform hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-600 flex items-center justify-center font-serif font-black text-white text-2xl shadow-xl shadow-amber-600/20">
                K
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-tight">
                  Kalpa <span className="text-amber-500 font-sans">Biz Resort</span>
                </span>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500">
                  Himalayan Retreat • 2,960M Altitude
                </span>
              </div>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed font-light italic">
              Experience the peaceful mountain-view escape surrounded by ancient apple orchards, 
              offering a front-row seat to the majestic Kinnaur Kailash range.
            </p>
            <button 
              onClick={onScrollToLocation}
              className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <ShieldCheck size={18} className="text-amber-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Verified Location • Himachal Pradesh</span>
            </button>
          </div>

          {/* 2. DYNAMIC LINKS GRID */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-amber-500 font-black text-[10px] uppercase tracking-[0.2em]">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <button 
                        onClick={(e) => handleLinkClick(e, link.action)}
                        className="group flex items-center text-sm font-light text-slate-400 hover:text-white transition-all outline-none text-left"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                        {link.action && (
                          <ArrowUpRight size={10} className="ml-1 opacity-0 group-hover:opacity-100 transition-all text-amber-500" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 3. CONTACT (Direct Action) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-amber-500 font-black text-[10px] uppercase tracking-[0.2em]">Connect Directly</h4>
            <div className="space-y-4">
              <a 
                href="tel:+7065189725" 
                className="flex items-center gap-3 group text-slate-400 hover:text-white transition-colors"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-amber-500/10 transition-colors">
                  <Phone size={16} className="text-amber-500" />
                </div>
                <span className="text-sm font-light">+91 7065189725</span>
              </a>
              <a 
                href="mailto:info@kalpabizresort.top" 
                className="flex items-center gap-3 group text-slate-400 hover:text-white transition-colors"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-amber-500/10 transition-colors">
                  <Mail size={16} className="text-amber-500" />
                </div>
                <span className="text-sm font-light">info@kalpabizresort.top</span>
              </a>
              <button 
                onClick={onScrollToLocation}
                className="flex items-start gap-3 text-slate-400 hover:text-white text-left group transition-colors"
              >
                <div className="p-2 bg-white/5 rounded-lg mt-1 group-hover:bg-amber-500/10">
                  <MapPin size={16} className="text-amber-500" />
                </div>
                <span className="text-sm font-light leading-relaxed">
                  Chaka Road near Kalpa, Roghi,<br /> 
                  Kinnaur, HP - 172108
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
            Copyright © 2024–2026 Kalpa Biz Resort.
          </p>
          <div className="flex items-center gap-6 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
            <button onClick={onScrollToAbout} className="hover:text-white transition-colors">Our Story</button>
            <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
            <button onClick={onScrollToLocation} className="hover:text-white transition-colors">Himachal Tourism</button>
          </div>
        </div>
      </div>
    </footer>
  );
}