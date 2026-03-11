import React, { useState, useRef, useEffect } from 'react';
import { Search, Calendar, Users, MapPin, Clock, Plus, Minus, ChevronDown, X, Mountain, Home, Coffee, Info, Phone } from 'lucide-react';

export default function KalpaBizBooking() {
  // Configuration
  const PHONE_NUMBER = "7065189725"; // Replace with your actual WhatsApp number (include country code, no +)
  const RESORT_NAME = "Kalpa Biz Resort";

  // State
  const [destination, setDestination] = useState('Kalpa, Himachal Pradesh');
  const [showDestinations, setShowDestinations] = useState(false);
  const [checkIn, setCheckIn] = useState('2026-03-10');
  const [checkOut, setCheckOut] = useState('2026-03-12');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showGuestModal, setShowGuestModal] = useState(false);

  const guestModalRef = useRef(null);
  const destRef = useRef(null);

  // Logical Function to send data to WhatsApp
  const handleWhatsAppBooking = (e) => {
    e.preventDefault();

    // Construct the message string
    const message = 
      `*New Booking Inquiry - ${RESORT_NAME}*%0A` +
      `----------------------------%0A` +
      `📍 *Location:* ${destination}%0A` +
      `📅 *Check-in:* ${checkIn}%0A` +
      `📅 *Check-out:* ${checkOut}%0A` +
      `👥 *Guests:* ${adults} Adults, ${children} Children%0A` +
      `🏠 *Rooms:* ${rooms}%0A` +
      `----------------------------%0A` +
      `Please let me know about availability and pricing.`;

    // Open WhatsApp URL
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  const nearbyPoints = [
    { name: 'Kinnaur Kailash View Point', distance: '3 km' },
    { name: 'Roghi Village', distance: '2 km' },
    { name: 'Suicide Point Kalpa', distance: '4 km' },
    { name: 'Reckong Peo Market', distance: '7 km' },
  ];

  useEffect(() => {
    if (checkIn && (!checkOut || new Date(checkOut) <= new Date(checkIn))) {
      const nextDay = new Date(checkIn);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(nextDay.toISOString().split('T')[0]);
    }
  }, [checkIn]);

  useEffect(() => {
    const handleClick = (e) => {
      if (guestModalRef.current && !guestModalRef.current.contains(e.target)) setShowGuestModal(false);
      if (destRef.current && !destRef.current.contains(e.target)) setShowDestinations(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const occupancyDisplay = `${adults + children} guest${(adults + children) !== 1 ? 's' : ''} · ${rooms} room${rooms !== 1 ? 's' : ''}`;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 font-sans bg-slate-50/50 rounded-3xl">
      {/* Header Section */}
      <div className="mb-10 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
          <Mountain className="text-amber-600" size={28} />
          <span className="text-sm font-bold tracking-widest text-amber-600 uppercase">Kinnaur's Premier Retreat</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
          Kalpa Biz <span className="text-amber-600">Resort</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl font-medium">
          Experience the majesty of Kinnaur Kailash from our serene apple orchard sanctuary.
        </p>
      </div>

      {/* Main Search Bar */}
      <form onSubmit={handleWhatsAppBooking} className="relative">
        <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 gap-2">
          
          {/* Destination Field */}
          <div className="relative flex-[1.2] group" ref={destRef}>
            <div className={`flex items-center h-full px-4 py-3 rounded-xl transition-all cursor-pointer ${showDestinations ? 'bg-amber-50 ring-2 ring-amber-500' : 'hover:bg-slate-50'}`} 
                 onClick={() => setShowDestinations(true)}>
              <MapPin className="text-amber-400 mr-3" size={22} />
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 leading-none mb-1">Destination</p>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-slate-900 font-semibold outline-none cursor-pointer"
                />
              </div>
            </div>
            {showDestinations && (
              <div className="absolute top-full left-0 w-full sm:w-[400px] mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 p-4">
                <p className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                  <Info size={14} /> Nearby Attractions
                </p>
                <div className="grid grid-cols-1 gap-1">
                  {nearbyPoints.map((point) => (
                    <div key={point.name} className="flex justify-between items-center p-3 hover:bg-amber-50 rounded-lg transition-colors cursor-default">
                      <span className="font-bold text-slate-600">{point.name}</span>
                      <span className="text-xs font-medium bg-amber-100 text-amber-600 px-2 py-1 rounded-md">{point.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Date Picker Section */}
          <div className="flex-[1.8] flex flex-row items-center px-4 py-3 hover:bg-slate-50 rounded-xl transition-all group border-y lg:border-y-0 lg:border-x border-slate-100">
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1 italic">Check-in 12:00 PM </p>
              <input 
                type="date" 
                value={checkIn} 
                onChange={(e) => setCheckIn(e.target.value)} 
                className="bg-transparent font-semibold text-slate-800 outline-none w-full cursor-pointer" 
              />
            </div>
            <div className="h-8 w-px bg-slate-200 mx-4"></div>
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1 italic">Check-out 11:00 AM</p>
              <input 
                type="date" 
                value={checkOut} 
                min={checkIn} 
                onChange={(e) => setCheckOut(e.target.value)} 
                className="bg-transparent font-semibold text-slate-800 outline-none w-full cursor-pointer" 
              />
            </div>
          </div>

          {/* Guests Section */}
          <div className="flex-1 relative" ref={guestModalRef}>
            <button
              type="button"
              onClick={() => setShowGuestModal(!showGuestModal)}
              className={`w-full h-full flex flex-col justify-center px-4 py-3 rounded-xl transition-all text-left ${showGuestModal ? 'bg-amber-50 ring-2 ring-amber-500' : 'hover:bg-slate-50'}`}
            >
              <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">Occupancy</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-800">
                  <Users size={18} className="text-amber-600" />
                  <span className="font-semibold whitespace-nowrap">{occupancyDisplay}</span>
                </div>
                <ChevronDown size={16} className={`text-slate-400 transition-transform ${showGuestModal ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {showGuestModal && (
              <div className="absolute top-full right-0 w-full sm:w-[320px] mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-50">
                <Counter label="Adults" sub="13+ years" val={adults} setVal={(v) => setAdults(Math.max(1, adults + v))} />
                <Counter label="Children" sub="0-12 years" val={children} setVal={(v) => setChildren(Math.max(0, children + v))} />
                <Counter label="Rooms" val={rooms} setVal={(v) => setRooms(Math.max(1, rooms + v))} />
                <button type="button" onClick={() => setShowGuestModal(false)} className="w-full bg-amber-600 text-white py-3 rounded-xl font-bold hover:bg-amber-800 transition-all">
                  Confirm Guests
                </button>
              </div>
            )}
          </div>

          {/* Modified Button */}
          <button 
  type="submit" 
  className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-10 pl-10 py-4 font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:gap-4 active:scale-[0.98] group"
>
  <span className="text-sm tracking-widest uppercase">Request Booking</span>
  <Phone size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
</button>
        </div>
      </form>

      {/* Feature Highlights */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <Mountain size={16}/>, text: "Mountain View" },
          { icon: <Coffee size={16}/>, text: "Breakfast Incl." },
          { icon: <Home size={16}/>, text: "Family-friendly" },
          { icon: <Phone size={16}/>, text: "Instant Support" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/50 border border-slate-200 rounded-full text-sm font-semibold text-slate-600">
            <span className="text-amber-600">{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

function Counter({ label, sub, val, setVal }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <p className="font-bold text-slate-800">{label}</p>
        {sub && <p className="text-[10px] text-slate-400 uppercase font-bold">{sub}</p>}
      </div>
      <div className="flex items-center gap-4">
        <button type="button" onClick={() => setVal(-1)} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-amber-50 hover:border-amber-500 text-slate-500 hover:text-amber-600 transition-all">
          <Minus size={14} />
        </button>
        <span className="w-4 text-center font-bold text-slate-600">{val}</span>
        <button type="button" onClick={() => setVal(1)} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-amber-50 hover:border-amber-500 text-slate-500 hover:text-amber-600 transition-all">
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}