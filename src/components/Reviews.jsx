import React, { useState } from 'react';
import { Star, MessageCircle, Quote, ChevronRight, User, X } from 'lucide-react';

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { label: "Staff", score: 10.0 },
    { label: "Location", score: 9.5 },
    { label: "Cleanliness", score: 8.5 },
    { label: "Comfort", score: 8.5 },
    { label: "Facilities", score: 8.0 },
    { label: "Value", score: 7.5 },
  ];

  const testimonials = [
    {
      name: "Juhi",
      country: "India",
      text: "Perfect location with river flowing next to the hotel. Very polite staff and good food.",
      highlight: "River flowing next to the hotel"
    },
    {
      name: "Jayeeta",
      country: "India",
      text: "Beautiful, among the apple orchard, surrounded by mountains and river flowing nearby and personally for me, Sheru on the house!",
      highlight: "Surrounded by mountains"
    },
    {
      name: "Amit Sharma",
      country: "India",
      text: "The views of the Kinnaur Kailash mountains are breathtaking. Watching the sunrise from the balcony is a spiritual experience.",
      highlight: "Himalayan Peaks"
    },
    {
      name: "Sarah W.",
      country: "UK",
      text: "A true escape from city noise. The quiet and relaxing atmosphere made it the perfect spot for my writing retreat.",
      highlight: "Quiet & Relaxing"
    },
    {
      name: "Rohan Mehra",
      country: "India",
      text: "Exceptional hospitality. The staff went out of their way to arrange a local village tour for us. Very clean rooms.",
      highlight: "Staff Hospitality"
    },
    {
      name: "Priya K.",
      country: "India",
      text: "Best place to explore Kalpa. It's close enough to the main spots but far enough to feel like a private sanctuary.",
      highlight: "Ideal Location"
    }
  ];

  // Logic to show only 2 reviews initially, or all if showAll is true
  const displayedReviews = showAll ? testimonials : testimonials.slice(0, 2);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 bg-white rounded-[3rem] shadow-sm border border-slate-100 transition-all duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT: Score Summary */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-8 h-fit">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-[10px]">
              <Star size={14} className="fill-amber-600" />
              Guest Impressions
            </div>
            <h2 className="text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Scored <span className="text-amber-500 italic">8.4</span>
            </h2>
            <p className="text-slate-500 font-medium tracking-tight">Rated "Very Good" based on {testimonials.length}+ verified stays</p>
          </div>

          {/* Category Progress Bars */}
          <div className="space-y-4">
            {categories.map((cat, i) => (
              <div key={i} className="space-y-1.5 group">
                <div className="flex justify-between text-xs font-bold uppercase tracking-tighter text-slate-600">
                  <span>{cat.label}</span>
                  <span className="text-slate-900">{cat.score}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-slate-900 rounded-full transition-all duration-1000 group-hover:bg-amber-500" 
                    style={{ width: `${cat.score * 10}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setShowAll(!showAll)}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-slate-900 text-slate-900 font-bold uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition-all"
          >
            {showAll ? "Show Less" : "Read All Reviews"} 
            {showAll ? <X size={16} /> : <ChevronRight size={16} />}
          </button>
        </div>

        {/* RIGHT: Testimonial Cards */}
        <div className="lg:col-span-8">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <MessageCircle size={20} className="text-amber-500" />
              {showAll ? "All Guest Reviews" : "What guests loved most"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500">
            {displayedReviews.map((review, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-[2.5rem] bg-slate-50 border border-transparent hover:border-amber-200 hover:bg-white transition-all duration-500 relative animate-in fade-in slide-in-from-bottom-4"
              >
                <Quote className="absolute top-6 right-8 text-slate-200 group-hover:text-amber-100 transition-colors" size={40} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                      <User size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-none">{review.name}</h4>
                      <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">{review.country}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed italic mb-6">
                    "{review.text}"
                  </p>

                  <div className="mt-auto">
                    <span className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-slate-500 uppercase">
                      # {review.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Topic Tags */}
          {!showAll && (
            <div className="mt-12">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Popular Topics:</p>
              <div className="flex flex-wrap gap-2">
                {["Kinnaur Kailash Views", "Peaceful", "Apple Orchards", "Sunrise", "Himalayas"].map((topic, i) => (
                  <button key={i} className="px-5 py-2 rounded-full border border-slate-200 text-xs font-semibold text-slate-600 hover:border-amber-500 hover:text-amber-600 transition-colors">
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}