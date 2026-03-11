import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Bed, Image as ImageIcon, Sparkles, 
  Shield, Phone, Mail, MessageSquare, MapPin, 
  ExternalLink 
} from 'lucide-react';

export default function Navbar({ 
  onScrollToBooking, 
  onScrollToGallery, 
  onScrollToFacilities, 
  onScrollToAbout,
  onScrollToLocation 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactCard, setShowContactCard] = useState(false);

  const phoneNumber = "+917065189725";
  const whatsappMessage = encodeURIComponent("Hi Kalpa Biz! I'd like to inquire about a room booking.");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen || showContactCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, showContactCard]);

  const safeScroll = (scrollFn) => {
    if (typeof scrollFn === 'function') {
      scrollFn();
      setIsOpen(false);
      setShowContactCard(false);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Book Now', action: () => safeScroll(onScrollToBooking), icon: <Bed size={14} /> },
    { name: 'Gallery', action: () => safeScroll(onScrollToGallery), icon: <ImageIcon size={14} /> },
    { name: 'Facilities', action: () => safeScroll(onScrollToFacilities), icon: <Sparkles size={14} /> },
    { name: 'About', action: () => safeScroll(onScrollToAbout), icon: <Shield size={14} /> }, 
    { name: 'Location', action: () => safeScroll(onScrollToLocation), icon: <MapPin size={14} /> }, 
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
          isScrolled ? 'py-3 px-4 lg:px-8' : 'py-6 px-6 lg:px-12'
        }`}
      >
        <div 
          className={`max-w-7xl mx-auto rounded-[1.5rem] md:rounded-[2.5rem] transition-all duration-500 border ${
            isScrolled 
              ? 'bg-white/90 backdrop-blur-xl border-slate-200/60 shadow-xl shadow-slate-900/5 px-6 md:px-10' 
              : 'bg-transparent border-transparent px-4'
          }`}
        >
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo Area */}
            <button 
              className="flex items-center gap-3 group text-left outline-none" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-active:scale-95 shadow-sm ${
                isScrolled ? 'bg-slate-900 text-amber-500' : 'bg-white/20 backdrop-blur-md text-amber-400'
              }`}>
                <span className="font-serif font-bold text-xl">K</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className={`text-lg md:text-xl font-serif font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  KALPA<span className="text-amber-500"> BIZ</span>
                </span>
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-amber-600/80 group-hover:text-amber-500 transition-colors">
                  Kinnaur District
                </span>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={link.action}
                  className={`relative flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 group outline-none ${
                    isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="absolute -left-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-500">
                    {link.icon}
                  </span>
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
                  </span>
                </button>
              ))}
            </div>

            {/* Desktop Action Button */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => setShowContactCard(true)}
                className={`px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 active:translate-y-0 ${
                  isScrolled 
                    ? 'bg-slate-900 text-white hover:bg-amber-600 shadow-lg shadow-amber-600/20' 
                    : 'bg-white text-slate-900 hover:bg-amber-500 shadow-lg shadow-black/5'
                }`}
              >
                Inquire Now
              </button>
            </div>

            {/* Mobile Trigger */}
            <button
              className={`lg:hidden p-3 rounded-2xl transition-all active:scale-90 outline-none ${
                isScrolled ? 'text-slate-900 bg-slate-50' : 'text-white bg-white/10 backdrop-blur-md'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`lg:hidden fixed inset-y-0 right-0 w-[85%] sm:w-80 bg-slate-950 transform transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) z-[110] shadow-2xl ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-8 md:p-12 overflow-y-auto">
            <button 
              className="self-end p-4 text-white/40 hover:text-white transition-colors outline-none" 
              onClick={() => setIsOpen(false)}
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <div className="mt-12 flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="group text-3xl font-serif italic text-white hover:text-amber-500 transition-all flex items-center gap-6 text-left outline-none"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <span className="text-amber-500/30 group-hover:text-amber-500 transition-colors transform group-hover:scale-110">
                    {link.icon}
                  </span>
                  {link.name}
                </button>
              ))}
            </div>

            <div className="mt-auto pt-10 space-y-4">
              <button 
                onClick={() => safeScroll(onScrollToBooking)}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-95 shadow-xl shadow-amber-500/10"
              >
                Reserve Your Room
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- CONTACT US MODAL CARD --- */}
      {showContactCard && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            onClick={() => setShowContactCard(false)}
          />
          
          <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] overflow-hidden shadow-2xl transform transition-all duration-500 scale-100 animate-in zoom-in-95 slide-in-from-bottom-10">
            <div className="absolute top-6 right-6 z-10">
              <button 
                onClick={() => setShowContactCard(false)}
                className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-slate-900"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <span className="text-amber-600 font-black text-[10px] uppercase tracking-[0.3em]">Plan Your Trip</span>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Contact Kalpa Biz</h3>
                <p className="text-slate-500 mt-4 text-sm leading-relaxed">
                  Ready for the best views in Himachal? Reach out to us for bookings, travel assistance, or local sightseeing tips.
                </p>
              </div>

              <div className="space-y-4">
                <a href={`tel:${phoneNumber}`} className="group flex items-center justify-between p-5 bg-slate-50 hover:bg-amber-600 rounded-3xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Phone size={20} className="text-amber-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-amber-100 transition-colors">Reception</p>
                      <p className="text-slate-900 font-bold group-hover:text-white transition-colors">+91 7065189725</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-white" />
                </a>

                <a href="mailto:info@kalpabizresort.top" className="group flex items-center justify-between p-5 bg-slate-50 hover:bg-slate-900 rounded-3xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Mail size={20} className="text-amber-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-slate-400 transition-colors">Email Us</p>
                      <p className="text-slate-900 font-bold group-hover:text-white transition-colors">info@kalpabizresort.top</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-white" />
                </a>

                {/* Updated WhatsApp Inquiry Link */}
                <a 
                  href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 p-5 border-2 border-slate-100 hover:border-amber-500 hover:text-amber-600 rounded-3xl transition-all font-bold text-slate-600 no-underline"
                >
                  <MessageSquare size={20} className="text-amber-600" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 flex items-start gap-3">
                <MapPin size={18} className="text-amber-600 mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-slate-900 font-bold">Kalpa Biz Resort</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                    Chaka Road near Kalpa, Roghi, <br />
                    Kinnaur, Himachal Pradesh - 172108
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Overlay for Sidebar */}
      <div
        className={`lg:hidden fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[105] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}