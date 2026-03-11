import React from 'react';
import { 
  MapPin, Compass, Navigation, 
  ChevronRight, ArrowUpRight, Info, LocateFixed,
  Phone, Mail, Clock
} from 'lucide-react';

// Assuming imports for img1-img6 remain the same...
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'

const Location = () => {
  const attractions = [
    { 
      name: "Roghi Village", 
      dist: "2 km", 
      desc: "Traditional Kinnauri culture and wooden architecture.", 
      image: img2,
      mapUrl: "https://www.google.com/maps/search/Roghi+Village+Kalpa"
    },
    { 
      name: "Kinnaur Kailash View", 
      dist: "3 km", 
      desc: "Panoramic vistas of the sacred peaks.", 
      image: img1,
      mapUrl: "https://www.google.com/maps/search/Kinnaur+Kailash+View+Point"
    },
    { 
      name: "Suicide Point", 
      dist: "4 km", 
      desc: "Thrilling cliffs and valley views.", 
      image: img3,
      mapUrl: "https://www.google.com/maps/search/Suicide+Point+Kalpa"
    },
    { 
      name: "Reckong Peo Market", 
      dist: "7 km", 
      desc: "The bustling hub of Kinnaur.", 
      image: img4,
      mapUrl: "https://www.google.com/maps/search/Reckong+Peo+Market"
    },
    { 
      name: "Sangla Valley", 
      dist: "40 km", 
      desc: "Lush green landscapes & Baspa River.", 
      image: img5,
      mapUrl: "https://www.google.com/maps/search/Sangla+Valley"
    },
    { 
      name: "Chitkul", 
      dist: "60 km", 
      desc: "The last village near the border.", 
      image: img6,
      mapUrl: "https://www.google.com/maps/search/Chitkul+Village+Kinnaur"
    },
  ];

  return (
    <section className="bg-[#fcfcfb] py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* --- Minimalist Header --- */}
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200/60 pb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-600 font-semibold tracking-widest text-xs uppercase mb-3">
              <Compass size={14} className="animate-pulse" />
              Expedition Roadmap
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight">
              Craft your <span className="italic text-amber-400">journey</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-3 text-black-500 bg-amber-100/50 px-4 py-2 rounded-full border border-slate-200/50">
            <LocateFixed size={16} />
            <span className="text-sm font-mono tracking-tight">31.5285° N, 78.2709° E</span>
          </div>
        </header>

        {/* --- ROADMAP SECTION --- */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[300px] md:w-[400px] -translate-x-1/2 pointer-events-none opacity-40">
            <svg width="100%" height="100%" viewBox="0 0 400 1000" preserveAspectRatio="none" className="h-full">
              <path 
                d="M200 0 C 450 150, -50 350, 200 500 S 450 850, 200 1000" 
                fill="none" 
                stroke="orange" 
                strokeWidth="3" 
                strokeDasharray="10 15"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="space-y-16 md:space-y-24">
            {attractions.map((loc, i) => (
              <div key={i} className={`relative flex items-center gap-8 md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                   <div className="w-10 h-10 rounded-full bg-white shadow-lg border-2 border-green-600 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                   </div>
                   <div className="hidden md:block absolute top-12 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                      Km {loc.dist.split(' ')[0]}
                   </div>
                </div>

                <div className="w-full md:w-[44%] ml-16 md:ml-0 z-20">
                  <div className="group bg-white/70 backdrop-blur-sm rounded-[2rem] p-4 border border-white shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:bg-white transition-all duration-500">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="w-full sm:w-36 h-36 shrink-0 overflow-hidden rounded-2xl">
                        <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="flex flex-col justify-center pr-4">
                        <div className="mb-2">
                          <h4 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-amber-600 transition-colors">{loc.name}</h4>
                          <span className="text-[10px] font-black text-amber-500/80 uppercase tracking-widest">{loc.dist} From Base</span>
                        </div>
                        <p className="text-sm text-slate-500 font-light leading-relaxed mb-4 line-clamp-2">{loc.desc}</p>
                        <a 
                          href={loc.mapUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 hover:text-slate-900 transition-colors"
                        >
                          Explore <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-[44%]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* --- MAP & CONTACT SECTION --- */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Google Map Card */}
          <div className="lg:col-span-2 h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <iframe 
              title="Kalpa Biz Resort Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13587.234145714486!2d78.2625291!3d31.5285465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39063f6087b7a195%3A0x6739b69b661d989c!2sKalpa%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1]"
            ></iframe>
          </div>

          {/* Contact Information Card */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-serif italic mb-6">Find Us</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-amber-500 shrink-0" />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Chaka Road near Kalpa, Roghi<br/>
                    Kalpa, Kinnaur, HP – 172108
                  </p>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-amber-500 shrink-0" />
                  <p className="text-sm text-slate-300">+91 XXXXX XXXXX</p>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-amber-500 shrink-0" />
                  <p className="text-sm text-slate-300">info@kalpabizresort.top</p>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-amber-500 shrink-0" />
                  <div className="text-sm text-slate-300">
                    <p>In: 12:00 PM</p>
                    <p>Out: 11:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Kalpa+Kinnaur+Himachal+Pradesh" 
              target="_blank" 
              rel="noreferrer"
              className="mt-8 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 py-4 rounded-2xl font-bold transition-all"
            >
              <Navigation size={18} /> Get Directions
            </a>
          </div>
        </div>

        {/* --- Pro Tip --- */}
        <div className="mt-8 bg-amber-100/50 p-6 rounded-[2rem] border border-amber-200/50 flex items-center gap-4">
           <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shrink-0">
             <Info size={20} />
           </div>
           <p className="text-sm text-amber-900/70 italic">
             "Carry extra layers—even in summer, the wind at Suicide Point is chilly."
           </p>
        </div>

      </div>
    </section>
  );
};

export default Location;