import React from 'react';
import { MapPin, Plane, Train, Car, Navigation, Clock, Mountain, ArrowDownRight, Compass } from 'lucide-react';

const About = () => {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* --- HERO HEADER: Editorial Style --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          <div className="lg:col-span-8 space-y-10">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-12 bg-amber-500"></div>
              <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px]">
                The Kinnaur Heritage
              </span>
            </div>
            
            <h2 className="font-serif text-6xl md:text-8xl text-slate-900 leading-[0.9] tracking-tighter">
              A Sanctuary <br />
              <span className="italic font-light text-slate-400">Above the Clouds.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Situated at <span className="text-slate-900 font-medium">2,960 meters</span> above sea level, Kalpa Biz Resort is more than a stay—it is a front-row seat to the sacred <span className="text-amber-600 italic">Kinnaur Kailash</span> peaks. 
              </p>
              <p className="text-lg text-slate-500 font-light leading-relaxed border-l border-slate-100 pl-8">
                Nestled on Chaka Road near the historic Roghi village, our retreat is enveloped by lush apple orchards and the timeless silhouette of traditional wooden Kinnauri architecture.
              </p>
            </div>
          </div>

          {/* Quick Stats Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-950 rounded-[3rem] p-10 text-white relative overflow-hidden group">
              <Mountain className="absolute -right-6 -bottom-6 w-40 h-40 opacity-10 group-hover:rotate-12 transition-transform duration-1000" />
              <div className="relative z-10">
                <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] mb-8">At a Glance</h4>
                <div className="space-y-6">
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-slate-400 text-xs">Altitude</span>
                    <span className="text-sm font-bold">2,960m MSL</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-slate-400 text-xs">Check-in</span>
                    <span className="text-sm font-bold">12:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-slate-400 text-xs">Check-out</span>
                    <span className="text-sm font-bold">11:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-xs">Vibe</span>
                    <span className="text-sm font-bold italic">Serene & Quiet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- JOURNEY SECTION: Structured Connectivity --- */}
        <div className="relative border-t border-slate-100 pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
            <div className="max-w-xl space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-amber-600 flex items-center gap-2">
                <Compass size={16} /> Travel Log
              </h3>
              <p className="font-serif text-4xl md:text-5xl text-slate-900 italic">Finding your way to the peak.</p>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              While the journey through the Himalayas is rugged, the destination at Kalpa Biz Resort is a rewarding sanctuary for every explorer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* By Road */}
            <div className="group bg-[#FCFBFA] p-12 rounded-[3.5rem] border border-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-700">
              <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                <Car size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">The Scenic Drive</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Follow <span className="text-slate-900 font-semibold">NH-5</span> through Narkanda and Rampur. The final climb from Reckong Peo offers the most iconic vistas in Kinnaur.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-600">
                <Navigation size={14} /> Shimla → Kalpa (230km)
              </div>
            </div>

            {/* By Air */}
            <div className="group bg-[#FCFBFA] p-12 rounded-[3.5rem] border border-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-700">
              <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                <Plane size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Aerial Access</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                The nearest gateway is <span className="text-slate-900 font-semibold">Shimla Airport (Jubarhatti)</span>. Cabs are available for the breathtaking 8-9 hour mountain transit.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <ArrowDownRight size={14} /> 250 km from Resort
              </div>
            </div>

            {/* By Rail */}
            <div className="group bg-[#FCFBFA] p-12 rounded-[3.5rem] border border-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-700">
              <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                <Train size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Heritage Rail</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Take the iconic Toy Train to Shimla or arrive at <span className="text-slate-900 font-semibold">Kalka Station</span>. It’s a nostalgic start to your Himalayan expedition.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <ArrowDownRight size={14} /> Via Kalka / Shimla
              </div>
            </div>
          </div>
        </div>

        {/* --- BRAND PROMISE: Minimal Banner --- */}
        <div className="mt-32 p-12 bg-amber-50 rounded-[4rem] border border-amber-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
             <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-slate-950">
               <MapPin size={28} />
             </div>
             <div>
               <p className="text-lg font-serif italic text-slate-900">"An ideal gateway for the Spiti circuit."</p>
               <p className="text-[10px] font-black uppercase tracking-widest text-amber-700 mt-1">Adventure & Leisure Combined</p>
             </div>
          </div>
          <div className="h-px w-full md:w-24 bg-amber-200"></div>
          <p className="text-sm text-slate-500 italic text-center md:text-right max-w-xs leading-relaxed">
            Experience traditional wooden hospitality with modern mountain comforts.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;