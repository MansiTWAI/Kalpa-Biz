import React, { useRef } from 'react';

// Core Layout Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';

// Section Components
import About from '../components/About';
import Features from '../components/Features';
import Location from '../components/Location';
import Reviews from '../components/Reviews';

// Icons & Assets
import { ShieldCheck, Zap, Users, ArrowRight } from 'lucide-react';
import img1 from '../assets/img2.jpg';
import img2 from '../assets/img1.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

export default function KalpaBizResort() {
  // Refs for Smooth Scrolling
  const bookingRef = useRef(null);
  const galleryRef = useRef(null);
  const facilitiesRef = useRef(null);
  const aboutRef = useRef(null);
  const locationRef = useRef(null);

  // Robust Smooth Scroll Function
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#FCFBFA] selection:bg-amber-200 antialiased">
      {/* CRITICAL: Ensure your Navbar component actually calls 
         props.onScrollToAbout when the link is clicked.
      */}
      <Navbar
        onScrollToBooking={() => scrollToSection(bookingRef)}
        onScrollToGallery={() => scrollToSection(galleryRef)}
        onScrollToFacilities={() => scrollToSection(facilitiesRef)}
        onScrollToAbout={() => scrollToSection(aboutRef)}
        onScrollToLocation={() => scrollToSection(locationRef)}
      />

      <Hero onBookClick={() => scrollToSection(bookingRef)} />
      
      {/* Booking Section */}
      <section ref={bookingRef} className="mx-auto max-w-7xl px-6 lg:px-12 py-24 scroll-mt-10">
        <BookingForm />
      </section>

      {/* Value Propositions */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: ShieldCheck, title: "Direct Booking Benefits", desc: "Best rates & personalized service." },
            { icon: Zap, title: "Instant Confirmation", desc: "Secure your getaway in seconds." },
            { icon: Users, title: "Himachali Hospitality", desc: "Warm welcome in the heart of Kalpa." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-start gap-4 transition-transform hover:-translate-y-1">
              <div className="p-3 bg-amber-50 rounded-2xl text-amber-600">
                <item.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-12 scroll-mt-10">
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-serif text-6xl md:text-8xl text-slate-900 tracking-tighter leading-[0.85]">
              Kalpa Biz <br />
              <span className="italic font-light text-slate-400 tracking-normal">RESORT</span>
            </h1>
          </div>
          <div className="lg:col-span-4 border-l-2 border-amber-500/30 pl-8 py-2">
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Chaka Road near Roghi • 2,960m Altitude • <strong className="font-semibold text-amber-600">Kinnaur Kailash Views</strong>.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[650px]">
          <div className="md:col-span-7 relative group overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img src={img1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Peak View" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-4xl font-serif italic text-white">Kinnaur Kailash Majesty</h3>
            </div>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-6 h-full">
            <div className="col-span-1 overflow-hidden rounded-[2rem]"><img src={img2} className="w-full h-full object-cover" alt="Orchard" /></div>
            <div className="col-span-1 overflow-hidden rounded-[2rem]"><img src={img4} className="w-full h-full object-cover" alt="Village" /></div>
            <div className="col-span-2 overflow-hidden rounded-[2.5rem] relative group shadow-sm">
              <img src={img3} className="w-full h-full object-cover" alt="Exterior" />
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-3xl shadow-2xl">
                <p className="text-xl font-black text-slate-900">4.9</p>
                <p className="text-[8px] font-black text-amber-600 uppercase">Guest Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Fixed with Section tag and scroll-mt */}
      <section ref={aboutRef} className="scroll-mt-10">
        <About />
      </section>

      {/* Facilities Section */}
      <section ref={facilitiesRef} className="scroll-mt-10">
        <Features />
      </section>

      {/* Location Section */}
      <section ref={locationRef} className="scroll-mt-10">
        <Location />
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* Floating Action Bar (Mobile Only) */}
      <nav className="fixed bottom-8 left-6 right-6 z-50 lg:hidden">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => scrollToSection(bookingRef)}
            className="flex w-full items-center justify-between rounded-[2.5rem] bg-slate-950 p-2 pl-8 text-white shadow-2xl border border-white/10 active:scale-95 transition-transform"
          >
            <div className="text-left py-2">
               <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Book Your Stay</p>
               <span className="text-lg font-black tracking-tighter">Reserve Now</span>
            </div>
            <div className="bg-amber-500 text-slate-950 h-16 px-8 rounded-[2.2rem] flex items-center justify-center font-black text-sm uppercase tracking-widest">
              Book <ArrowRight size={20} className="ml-2" />
            </div>
          </button>
        </div>
      </nav>
    </main>
  );
}