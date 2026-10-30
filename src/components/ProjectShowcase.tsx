import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ShieldCheck, CheckCircle2, ArrowRight, Layers, SlidersHorizontal } from 'lucide-react';

export interface ProjectItem {
  title: string;
  location: string;
  capacity: string;
  type: 'Residential' | 'Commercial' | 'Housing Society';
  image: string;
  specs: string;
  savings: string;
}

export const REAL_PROJECTS: ProjectItem[] = [
  {
    title: "15 kW Modern Villa Integrated Array",
    location: "Jubilee Hills, Hyderabad",
    capacity: "15 kW",
    type: "Residential",
    image: "/assets/luxury_hyderabad_solar_villa.jpg",
    specs: "All-Black Monocrystalline TOPCon, Zero-Glare Architectural Framing",
    savings: "₹18,500/mo Bill Offset"
  },
  {
    title: "350 kW Megawatt Commercial Rooftop Plant",
    location: "Financial District / Genome Valley, Telangana",
    capacity: "350 kW",
    type: "Commercial",
    image: "/assets/commercial_industrial_solar_rooftop.jpg",
    specs: "Elevated Aluminum Anodized Structures with HT Synchronizing Inverters",
    savings: "₹3.8 Lakhs/mo Saved"
  },
  {
    title: "Hybrid Battery Energy Storage Array",
    location: "Tellapur Luxury Enclave, Hyderabad",
    capacity: "10 kW + 15 kWh BESS",
    type: "Residential",
    image: "/assets/smart_inverter_battery_storage.jpg",
    specs: "Modular Lithium-Ion BESS with 20ms Seamless Blackout Protection",
    savings: "Zero Grid Outages"
  },
  {
    title: "8 kW Independent Villa Rooftop",
    location: "Shamshabad, Hyderabad",
    capacity: "8 kW",
    type: "Residential",
    image: "/assets/8kw-shamshabad-Y928qxYMPlCqSkPu.avif",
    specs: "14x Tier-1 Monocrystalline TOPCon, Hot-Dip GI Elevated Framing",
    savings: "₹9,500/mo Bill Offset"
  },
  {
    title: "Visen Industries Manufacturing Facility",
    location: "Industrial Corridor, Telangana",
    capacity: "125 kW",
    type: "Commercial",
    image: "/assets/visen-industries-dJoP3epWe2tnVb6g.avif",
    specs: "Trapezoidal Sheet Clamping, HT Synchronizing Schneider Inverter",
    savings: "₹1.4 Lakhs/mo Saved"
  },
  {
    title: "Mysore Commercial Distribution Hub",
    location: "Mysore Industrial Area",
    capacity: "80 kW",
    type: "Commercial",
    image: "/assets/mysore-project-A1azo9z0E1TKzrb9.avif",
    specs: "Zero Roof Penetration Ballast Mount, Smart Telemetry Gateway",
    savings: "₹95,000/mo Saved"
  },
  {
    title: "Gated Community Common Area Array",
    location: "Chandanagar / Miyapur",
    capacity: "50 kW",
    type: "Housing Society",
    image: "/assets/housing_society_solar_aerial.jpg",
    specs: "Pumping & Lift Net-Metered Feed, ₹18k/kW RWA Central Subsidy",
    savings: "₹58,000/mo Society Dues"
  },
  {
    title: "5 kW Custom Villa Elevated Pergola",
    location: "Jubilee Hills, Hyderabad",
    capacity: "5 kW",
    type: "Residential",
    image: "/assets/v3-Awv8EbNBDasl6wN4.avif",
    specs: "High-Clearance Structure Retaining Full Terrace Entertainment Space",
    savings: "100% Zero Power Bill"
  },
  {
    title: "10 kW Dual-Inverter Residence",
    location: "Gachibowli, Hyderabad",
    capacity: "10 kW",
    type: "Residential",
    image: "/assets/v4-AzGMEL8zJOCMWVLV.avif",
    specs: "Bi-facial High Yield Cells with Concrete Pedestal Chemical Anchoring",
    savings: "₹11,800/mo Bill Offset"
  },
  {
    title: "3 kW Compact Rooftop Net-Metered",
    location: "Kukatpally, Hyderabad",
    capacity: "3 kW",
    type: "Residential",
    image: "/assets/a1-YyvDE4pQw7TGkw7D.avif",
    specs: "PM Surya Ghar Approved, ₹78,000 Central Direct Subsidy Credited",
    savings: "₹3,400/mo Offset"
  },
  {
    title: "20 kW Housing Society Clubhouse",
    location: "Bachupally, Hyderabad",
    capacity: "20 kW",
    type: "Housing Society",
    image: "/assets/a2-YZ9EWQw0LXcEnEBD.avif",
    specs: "Clubhouse Common Lighting & Swimming Pool Filtration Powered",
    savings: "₹24,000/mo Offset"
  }
];

interface Props {
  title?: string;
  subtitle?: string;
  category?: 'All' | 'Residential' | 'Commercial' | 'Housing Society';
  showFilters?: boolean;
}

export const ProjectShowcase: React.FC<Props> = ({
  title = "Verified Installations Across Telangana",
  subtitle = "Inspect real commercial, residential, and housing society deployments executed by Meghvi Solar.",
  category = "All",
  showFilters = true
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Housing Society'>(category);
  const [transformationView, setTransformationView] = useState<'after' | 'before'>('after');

  const filterTabs: Array<'All' | 'Residential' | 'Commercial' | 'Housing Society'> = [
    'All',
    'Residential',
    'Commercial',
    'Housing Society'
  ];

  const filtered = activeFilter === 'All' 
    ? REAL_PROJECTS 
    : REAL_PROJECTS.filter(p => p.type === activeFilter);

  return (
    <div className="space-y-10">
      
      {/* Interactive Before vs After Drone Transformation Spotlight */}
      <div className="relative bg-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl overflow-hidden">
        {/* Photovoltaic Solar Panel Rooftop Background Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/assets/commercial_industrial_solar_rooftop.jpg"
            alt="Solar PV Panels Background"
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-125 saturate-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/75 to-slate-900/80" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-solar-400 bg-solar-500/10 px-2.5 py-1 rounded-md border border-solar-500/30 mb-2 font-semibold">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Site Transformation Engineering Study
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Before & After: Bare Terrace to Elevated Solar Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Property: Jubilee Hills Luxury Villa • Sizing: 15 kW Mono-PERC Bifacial Array • Structure: 8.5ft Elevated Pergola Retaining 100% Usable Terrace Area.
            </p>
          </div>

          {/* Toggle Button */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 shrink-0">
            <button
              type="button"
              onClick={() => setTransformationView('before')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                transformationView === 'before'
                  ? 'bg-stone-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Before (Unused Roof)
            </button>
            <button
              type="button"
              onClick={() => setTransformationView('after')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                transformationView === 'after'
                  ? 'bg-solar-500 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              After (Meghvi Solar Array)
            </button>
          </div>
        </div>

        {/* Transformation Viewport */}
        <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 border border-slate-800 bg-slate-950">
          <AnimatePresence mode="wait">
            {transformationView === 'after' ? (
              <motion.div
                key="after-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full"
              >
                <img
                  src="/assets/luxury_hyderabad_solar_villa.jpg"
                  alt="After: 15 kW Elevated Pergola Solar Installation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-slate-950/90 border border-slate-700 px-3 py-1 rounded-md text-xs font-mono text-emerald-400 font-bold">
                  AFTER: 15 kW TURNKEY COMMISSIONED
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
                  <span>Monthly Savings: <strong className="text-white">₹18,500/mo</strong></span>
                  <span>TSSPDCL Meter: <strong className="text-emerald-400">Synchronized</strong></span>
                  <span>Terrace Area: <strong className="text-solar-400">100% Usable</strong></span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="before-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full"
              >
                <img
                  src="/assets/install-solar-power-at-home-1024x683-1.jpg"
                  alt="Before: Bare Concrete Rooftop"
                  className="w-full h-full object-cover filter grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-slate-950/90 border border-slate-700 px-3 py-1 rounded-md text-xs font-mono text-stone-300 font-bold">
                  BEFORE: BARE UNPROTECTED ROOF
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
                  <span>Power Bill: <strong className="text-rose-400">₹20,000/mo Discom Bill</strong></span>
                  <span>Terrace Heat: <strong className="text-stone-300">Direct Slab Radiation</strong></span>
                  <span>Clean Energy: <strong className="text-stone-300">0 kWh</strong></span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Grid Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase font-mono tracking-wider text-solar-700 font-bold block mb-1">
            Proven Track Record
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        {showFilters && (
          <div role="tablist" aria-label="Project category filter" className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200 self-start md:self-auto shrink-0 flex-wrap">
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(tab)}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-colors ${
                    isSelected ? 'text-slate-950 font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="project-filter-pill"
                      className="absolute inset-0 bg-white rounded-lg shadow-xs border border-stone-200/90 -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span>{tab}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filtered.map((proj) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              key={proj.title}
              className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-stone-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Architectural Badge (No bubble pill) */}
                  <span className="absolute top-3 left-3 bg-slate-950/90 text-white text-xs font-mono px-2.5 py-1 rounded-md uppercase tracking-wider font-semibold backdrop-blur-sm border border-white/20">
                    {proj.capacity} • {proj.type}
                  </span>
                  
                  {/* Clean Technical Savings Tag */}
                  <span className="absolute bottom-3 right-3 bg-solar-500 text-slate-950 text-xs font-mono px-2.5 py-1 rounded-md font-bold shadow-xs">
                    {proj.savings}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-solar-600 shrink-0" />
                    <span>{proj.location}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-solar-700 transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed border-t border-stone-100 pt-2.5">
                    {proj.specs}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="text-xs font-mono font-semibold text-emerald-800 flex items-center gap-2 bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>TSSPDCL Net-Meter Commissioned</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
