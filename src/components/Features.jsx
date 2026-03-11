import React from 'react';
import {
  Wifi,
  Utensils,
  Car,
  Mountain,
  Coffee,
  Trees,
  CheckCircle2,
  Headphones,
  Home,
  Map,
  Sparkles,
  Users,
  ArrowRight,
} from 'lucide-react';

const Features = () => {
  const amenities = [
    { icon: Utensils, label: 'Dining', desc: 'Local Kinnauri flavors' },
    { icon: Coffee, label: 'Service', desc: '24/7 Room assistance' },
    { icon: Wifi, label: 'Wi-Fi', desc: 'High-speed connectivity' },
    { icon: Car, label: 'Parking', desc: 'Secure on-site space' },
    { icon: Map, label: 'Trips', desc: 'Spiti & local guides' },
    { icon: Users, label: 'Family', desc: 'Spacious interconnected suites' }, 
    { icon: CheckCircle2, label: 'Clean', desc: 'Daily meticulous care' },
    { icon: Trees, label: 'Views', desc: 'Kinnaur Kailash vistas' },
  ];

  return (
    <section className="relative bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Subtle background texture/noise */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-start lg:items-stretch">
          {/* Left – Editorial + Highlight */}
          <div className="w-full lg:w-5/12 space-y-10 lg:space-y-12 xl:space-y-14">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/30 dark:border-slate-700/40 shadow-sm">
              <Sparkles size={15} className="text-amber-600 dark:text-amber-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800/90 dark:text-amber-300/90">
                Exceptional Living
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light tracking-tight text-slate-900 dark:text-slate-100 leading-[1.05]">
              Refined <br className="hidden sm:block" />
              <span className="italic text-slate-500/80 dark:text-slate-400/80 font-normal">Atmosphere.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-lg">
              Experience a Himalayan retreat where modern convenience meets rustic soul. Every facility is curated to ensure your peace of mind and elevate your stay.
            </p>

            {/* <button
              type="button"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-800 dark:text-slate-200 hover:text-amber-700 dark:hover:text-amber-500 transition-colors focus-visible:outline focus-visible:outline-amber-500 focus-visible:outline-offset-2"
            >
              Explore Gallery
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
                aria-hidden
              />
            </button> */}

            {/* Highlight card – glassmorphic */}
            <div className="mt-6 sm:mt-10 group relative">
              <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-blue-500/5 dark:from-amber-600/10 dark:to-blue-600/10 rounded-3xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/30 dark:border-slate-700/40 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/40 dark:shadow-black/30 overflow-hidden transition-all duration-500 group-hover:scale-[1.015] group-hover:shadow-2xl">
                <div className="flex items-center gap-5">
                  <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-slate-800 to-slate-950 dark:from-slate-700 dark:to-slate-950 text-white flex items-center justify-center shadow-lg group-hover:from-amber-600 group-hover:to-amber-800 transition-all duration-500">
                    <Home size={28} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white leading-tight">
                      Authentic Woodcraft
                    </h4>
                    <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">
                      Traditional architecture fused with premium modern fittings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right – Amenities Bento Grid – glassmorphic cards */}
          <div className="w-full lg:w-7/12">
            <div className="relative bg-white/10 dark:bg-slate-900/30 backdrop-blur-2xl border border-white/20 dark:border-slate-700/30 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl shadow-slate-300/30 dark:shadow-black/40 h-full overflow-hidden">
              {/* Decorative blurred orbs */}
              <div className="absolute -top-20 -right-20 sm:-top-28 sm:-right-28 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500/10 dark:bg-amber-600/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 sm:-bottom-28 sm:-left-28 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10 sm:mb-12">
                  <div>
                    <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-amber-600 dark:text-amber-500/90">
                      Full Directory
                    </p>
                    <p className="mt-1 text-xl sm:text-2xl font-serif italic text-slate-700 dark:text-slate-200">
                      Amenities & Services
                    </p>
                  </div>
                  <div className="hidden sm:flex h-10 w-10 rounded-full border border-slate-400/30 dark:border-slate-600/40 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 grow">
                  {amenities.map((item, i) => (
                    <div
                      key={i}
                      className="group relative bg-white/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-400 hover:bg-white/50 dark:hover:bg-slate-700/40 hover:border-white/40 dark:hover:border-slate-600/50 hover:shadow-xl hover:shadow-slate-200/40 dark:hover:shadow-black/30 hover:-translate-y-1"
                    >
                      <div className="flex flex-col items-start gap-3 sm:gap-4">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/40 dark:bg-slate-700/40 flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:bg-amber-500/90 group-hover:shadow-md group-hover:shadow-amber-500/30">
                          <item.icon
                            size={18}
                            strokeWidth={1.9}
                            className="text-slate-700 dark:text-slate-200 group-hover:text-white transition-colors"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight">
                            {item.label}
                          </p>
                          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;