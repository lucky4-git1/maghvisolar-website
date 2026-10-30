import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProposalCalculator } from '../components/ProposalCalculator';
import { LoanEmiCalculator } from '../components/LoanEmiCalculator';
import { ConsultationForm } from '../components/ConsultationForm';
import { PartnerStrip } from '../components/PartnerStrip';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/motion/MotionWrapper';
import { FAQ_ITEMS, COMPANY_DETAILS } from '../data/solarData';
import { 
  Sun, ShieldCheck, Zap, ArrowRight, CheckCircle2, ChevronRight, ChevronLeft,
  Layers, Cpu, Activity, Clock, FileCheck2, Building2, Home, Users,
  Sparkles, Check, ChevronDown, Radio, BarChart3, Gauge, Play, Pause
} from 'lucide-react';

interface Props {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<Props> = ({ onNavigate }) => {
  // Hero interactive visual tab state
  const [activeHeroTab, setActiveHeroTab] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const heroShowcases = [
    {
      title: "Jubilee Hills Luxury Villa",
      tag: "Residential EPC • 15 kW",
      image: "/assets/luxury_hyderabad_solar_villa.jpg",
      badge: "Zero Terrace Penetration Pergola",
      highlight: "All-Black TOPCon Cells with Zero-Glare Architectural Framing"
    },
    {
      title: "Hyderabad Residential Rooftop",
      tag: "Turnkey Net-Metered • 8 kW",
      image: "/assets/install-solar-power-at-home-1024x683-1.jpg",
      badge: "150 km/h Cyclone Rated",
      highlight: "Hot-Dip Galvanized Structure Retaining Full Terrace Usability"
    },
    {
      title: "Industrial & Commercial Facility",
      tag: "Megawatt Scale • 350 kW",
      image: "/assets/commercial_industrial_solar_rooftop.jpg",
      badge: "40% Accelerated Depreciation",
      highlight: "Trapezoidal Aluminum Anodized Mounts with HT Inverter Sync"
    },
    {
      title: "Hybrid Telemetry & Storage",
      tag: "BESS Storage • 15 kWh",
      image: "/assets/smart_inverter_battery_storage.jpg",
      badge: "20ms Uninterrupted Power",
      highlight: "Modular Lithium-Ion BESS with Real-Time Mobile Cloud Diagnostics"
    }
  ];

  // Auto-cycle through architectural showcases
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveHeroTab((prev) => (prev + 1) % heroShowcases.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, heroShowcases.length]);

  const handleNext = () => {
    setActiveHeroTab((prev) => (prev + 1) % heroShowcases.length);
  };

  const handlePrev = () => {
    setActiveHeroTab((prev) => (prev - 1 + heroShowcases.length) % heroShowcases.length);
  };

  return (
    <div className="space-y-0 overflow-x-hidden">
      
      {/* HERO SECTION WITH DYNAMIC BACKGROUND CAROUSEL (100vh IMMERSIVE) */}
      <section 
        className="relative min-h-[calc(100vh-4.25rem)] lg:min-h-screen flex items-center py-12 sm:py-16 overflow-hidden bg-ivory-50 border-b border-stone-200/80"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Full-Bleed Vivid Background Carousel with Light White Vignette */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeHeroTab}
              src={heroShowcases[activeHeroTab].image}
              alt="Meghvi Solar Background Architecture"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 0.88, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="w-full h-full object-cover object-center filter contrast-105"
            />
          </AnimatePresence>
          {/* Light White Vignette: soft ambient edge illumination keeping carousel images 100% visible across the whole hero */}
          <div className="absolute inset-0 bg-white/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/75 via-transparent to-white/45 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/40 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            
            {/* Left Content Column with Bold High-Contrast Typography */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:col-span-7 space-y-6"
            >
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 border border-stone-300 text-slate-950 text-xs font-mono font-extrabold max-w-full shadow-xs">
                <span className="truncate">HYDERABAD & TELANGANA TIER-1 SOLAR EPC</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08] text-balance drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
                Energy, engineered <br className="hidden sm:inline" />
                <span className="text-solar-600 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
                  beautifully.
                </span>
              </h1>

              <p className="text-slate-950 text-base sm:text-lg leading-relaxed max-w-xl text-pretty font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                Turnkey rooftop solar EPC for discerning residences, gated societies, and commercial enterprises across Telangana. Slash power bills by up to 90% with Tier-1 TOPCon photovoltaics and guaranteed DISCOM net-metering.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono text-slate-950 font-bold">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-stone-300 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>₹78,000 PM Surya Ghar Subsidy</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-stone-300 shadow-xs">
                  <Clock className="w-4 h-4 text-solar-600 shrink-0" />
                  <span>30-Year Linear Warranty</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-stone-300 shadow-xs">
                  <Activity className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>5-Year Comprehensive O&M</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <motion.a
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  href="#proposal-studio"
                  className="btn-amber text-sm py-3.5 px-6 font-bold flex items-center justify-center gap-2 shadow-amber-glow"
                >
                  <span>Instant Solar Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  href="#consultation-form"
                  className="btn-primary text-sm py-3.5 px-6 font-semibold flex items-center justify-center gap-2"
                >
                  <span>Book Free Roof Survey</span>
                </motion.a>
              </div>

              {/* Trust Metric Counters */}
              <div className="pt-6 border-t border-stone-200/90 grid grid-cols-3 gap-4">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono block tabular-nums">
                    500+
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Homes & Facilities Powered</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono block tabular-nums">
                    ₹78k
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Max Central Subsidy</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-solar-600 font-mono block tabular-nums">
                    100%
                  </span>
                  <span className="text-xs text-slate-500 font-medium">DISCOM Net-Metered</span>
                </div>
              </div>

            </motion.div>

            {/* Right Hero Visual: Interactive Architectural Media Deck */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:col-span-5 space-y-3"
            >
              
              {/* Media Display Container with smooth fade transitions */}
              <div className="relative rounded-3xl overflow-hidden border border-stone-300 shadow-2xl bg-slate-950 h-84 sm:h-96 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeHeroTab}
                    src={heroShowcases[activeHeroTab].image}
                    alt={heroShowcases[activeHeroTab].title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />
                
                {/* Floating Telemetry Tag */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-xs font-mono px-2.5 py-1 rounded-md border border-slate-700/80 flex items-center gap-2 shadow-sm font-medium z-10">
                  <span className="text-emerald-400 font-bold">/</span>
                  <span>{heroShowcases[activeHeroTab].tag}</span>
                </div>

                {/* Carousel Controls Overlay (Prev, Play/Pause, Next) */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md p-1 rounded-xl border border-slate-700/80 text-white z-10">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous showcase"
                    className="p-1 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
                    className="p-1 rounded-lg hover:bg-slate-800 transition-colors text-solar-400"
                  >
                    {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next showcase"
                    className="p-1 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bottom Overlay Card (Clean, crisp, readable light-card) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/60 shadow-xl text-slate-900">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500 uppercase tracking-wider font-semibold">
                      {heroShowcases[activeHeroTab].title}
                    </span>
                    <span className="font-bold text-emerald-700 text-xs">
                      {heroShowcases[activeHeroTab].badge}
                    </span>
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-900 line-clamp-2">
                    {heroShowcases[activeHeroTab].highlight}
                  </div>
                </div>
              </div>

              {/* Interactive Showcase Switcher Tabs */}
              <div role="tablist" aria-label="Hero architectural showcases" className="grid grid-cols-4 gap-2 pt-1">
                {heroShowcases.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={activeHeroTab === idx}
                    onClick={() => setActiveHeroTab(idx)}
                    className={`relative p-2 rounded-xl text-left border transition-all text-xs ${
                      activeHeroTab === idx
                        ? 'bg-white border-solar-500 shadow-xs ring-1 ring-solar-500/40 text-slate-950'
                        : 'bg-stone-50/80 hover:bg-white border-stone-200/80 text-slate-500'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-solar-700 font-bold block">0{idx + 1}</span>
                    <span className="font-semibold text-[11px] block truncate leading-tight mt-0.5">
                      {item.title.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Prominent Clean Energy Innovation Card with Iconic Photovoltaic Bulb */}
              <div className="bg-gradient-to-r from-white via-amber-50/30 to-white rounded-2xl p-4 border border-solar-200/90 shadow-md flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-100/80 via-white to-solar-100/60 border border-solar-300 p-1.5 flex items-center justify-center shadow-md">
                      <motion.img
                        src="/assets/solar_bulb_innovation.png"
                        alt="Meghvi Solar Clean Energy Photovoltaic Innovation Bulb"
                        className="w-full h-full object-contain filter drop-shadow-sm"
                        animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-solar-700 font-bold bg-solar-50 px-2 py-0.5 rounded border border-solar-200">
                        Patented Clean Tech
                      </span>
                      <span className="text-[10px] font-mono text-emerald-700 font-semibold">
                        Zero Carbon
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 block truncate">
                      Photovoltaic Solar Innovation
                    </span>
                    <p className="text-[11px] text-slate-500 font-sans hidden sm:block truncate">
                      Convert pure Telangana sunlight into ₹0 monthly electricity bills.
                    </p>
                  </div>
                </div>
                <a
                  href="#consultation-form"
                  className="btn-amber text-xs py-2 px-3.5 rounded-xl font-bold shrink-0 flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* VERIFIED PARTNERS STRIP */}
      <PartnerStrip />

      {/* CORE VALUE & ENGINEERING PILLARS */}
      <section className="py-20 bg-ivory-100/60 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-solar-700 font-bold mb-2">
                <Cpu className="w-4 h-4" />
                The Meghvi Standard
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Why Discerning Property Owners Choose Meghvi Solar
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Solar is a 30-year asset. We engineer every array with aerospace-grade discipline, transparent contracts, and verified hardware.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <StaggerItem className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-solar-50 text-solar-700 flex items-center justify-center mb-4 border border-solar-200/60">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Tier-1 TOPCon Cells</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                We deploy n-type TOPCon and Bi-facial solar modules offering &gt;22.5% efficiency and superior low-light performance in Hyderabad heat.
              </p>
              <div className="mt-4 pt-4 border-t border-stone-100 text-xs font-mono text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 30-Yr Linear Performance
              </div>
            </StaggerItem>

            <StaggerItem className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-200/60">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Hot-Dip GI Structures</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Zero rust, high-tensile galvanized iron mounting elevated 6 to 9 feet to retain full usable rooftop space without damaging slab waterproofing.
              </p>
              <div className="mt-4 pt-4 border-t border-stone-100 text-xs font-mono text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 150 km/h Cyclone Rated
              </div>
            </StaggerItem>

            <StaggerItem className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4 border border-blue-200/60">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">DISCOM Net-Metering</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Complete liaisoning for TSSPDCL/TSNPDCL approvals, CEIG electrical clearances, bi-directional net-meter synchronization, and subsidy claim.
              </p>
              <div className="mt-4 pt-4 border-t border-stone-100 text-xs font-mono text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Turnkey Handover
              </div>
            </StaggerItem>

            <StaggerItem className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4 border border-indigo-200/60">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">5-Year Smart Monitoring</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Wi-Fi enabled smart telemetry on your mobile phone tracking daily kilowatt generation, with active remote fault diagnosis by our engineering desk.
              </p>
              <div className="mt-4 pt-4 border-t border-stone-100 text-xs font-mono text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Real-Time Mobile App
              </div>
            </StaggerItem>

          </StaggerContainer>

        </div>
      </section>

      {/* SOLAR SOLUTIONS SHOWCASE: WITH RICH ARCHITECTURAL MEDIA */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-solar-700 font-bold block mb-1">
                  Tailored Energy Engineering
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Specialized Solar Architectures
                </h2>
              </div>
              <p className="text-slate-600 text-sm max-w-md">
                Each building category demands specific structural engineering, cable runs, and DISCOM tariff alignments.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Residential Card */}
            <ScrollReveal direction="up" delay={0.1} className="flex">
              <div className="group bg-stone-50 rounded-3xl border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300 w-full">
                <div>
                  <div className="relative h-52 overflow-hidden bg-stone-900">
                    <img 
                      src="/assets/luxury_hyderabad_solar_villa.jpg" 
                      alt="Luxury Residential Solar Villa" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-solar-500 text-slate-950 text-xs font-mono px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                      1 kW – 10 kW • Residential
                    </span>
                    <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-mono px-2.5 py-1 rounded-md font-bold">
                      ₹78k Subsidy
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-solar-700 transition-colors">
                      Residential Rooftop Solar
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      Eliminate monthly domestic power tariffs with custom elevated rooftops. Claim up to ₹78,000 direct bank subsidy under PM Surya Ghar.
                    </p>

                    <ul className="mt-5 space-y-2 text-xs text-slate-700 font-medium border-t border-stone-200 pt-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Zero upfront options with low-interest bank EMI</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Elevated structures keep terrace usable for family</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Full TSSPDCL net-metering synchronization</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white border-t border-stone-200">
                  <button
                    onClick={() => onNavigate('/residential')}
                    className="w-full btn-secondary text-xs font-bold py-3 flex items-center justify-center gap-2 group-hover:bg-slate-900 group-hover:text-white transition-colors"
                  >
                    <span>Explore Residential Systems</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Commercial Card */}
            <ScrollReveal direction="up" delay={0.2} className="flex">
              <div className="group bg-slate-900 text-white rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300 w-full">
                <div>
                  <div className="relative h-52 overflow-hidden bg-stone-900">
                    <img 
                      src="/assets/commercial_industrial_solar_rooftop.jpg" 
                      alt="Commercial and Industrial Rooftop Array" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-amber-400 text-slate-950 text-xs font-mono px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                      10 kW – 500+ kW • C&I
                    </span>
                    <span className="absolute bottom-3 right-3 bg-slate-950/90 text-amber-400 text-xs font-mono px-2.5 py-1 rounded-md font-bold border border-amber-400/30">
                      40% Depreciation
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-solar-400 transition-colors">
                      Commercial & Industrial Solar
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                      Reduce high commercial tariff expenses by ₹5–10 Lakhs annually for factories, corporate buildings, warehouses, and cold stores.
                    </p>

                    <ul className="mt-5 space-y-2 text-xs text-slate-300 font-medium border-t border-slate-800 pt-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Accelerated Depreciation (40% Tax Benefit)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>High-voltage HT/LT synchronizing inverters</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Turnkey CAPEX & OPEX financing assistance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-slate-950 border-t border-slate-800">
                  <button
                    onClick={() => onNavigate('/commercial')}
                    className="w-full btn-amber text-xs font-bold py-3 flex items-center justify-center gap-2"
                  >
                    <span>Explore Commercial Engineering</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Housing Societies Card */}
            <ScrollReveal direction="up" delay={0.3} className="flex">
              <div className="group bg-stone-50 rounded-3xl border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300 w-full">
                <div>
                  <div className="relative h-52 overflow-hidden bg-stone-900">
                    <img 
                      src="/assets/housing_society_solar_aerial.jpg" 
                      alt="Housing Societies Common Meter Solar in Hyderabad" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-mono px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                      Common Meters • RWAs
                    </span>
                    <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-mono px-2.5 py-1 rounded-md font-bold">
                      ₹18k/kW Subsidy
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-emerald-700 transition-colors">
                      Apartments & Housing Societies
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      Zero out hefty monthly maintenance bills for common lighting, lifts, clubhouse amenities, and water booster pumps.
                    </p>

                    <ul className="mt-5 space-y-2 text-xs text-slate-700 font-medium border-t border-stone-200 pt-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>₹18,000/kW subsidy for society common areas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Specialized multi-tower RWA committee presentations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Zero vibration & certified fire safety isolation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white border-t border-stone-200">
                  <button
                    onClick={() => onNavigate('/housing-societies')}
                    className="w-full btn-secondary text-xs font-bold py-3 flex items-center justify-center gap-2 group-hover:bg-slate-900 group-hover:text-white transition-colors"
                  >
                    <span>Explore Society Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* HARDWARE ENGINEERING & SMART TELEMETRY SHOWCASE */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-900 relative overflow-hidden">
        {/* Photovoltaic Solar Panel Array Texture Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/assets/commercial_industrial_solar_rooftop.jpg"
            alt="Photovoltaic Solar Panel Engineering Architecture"
            className="w-full h-full object-cover object-center filter brightness-[0.18] contrast-125"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/85 to-slate-950/95" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-solar-400 font-bold block mb-2">
                Turnkey Hardware Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Engineered for 30 Years of Uninterrupted Power
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3">
                From high-efficiency Tier-1 TOPCon cells to intelligent hybrid battery storage and 24/7 cloud telemetry diagnostics.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Column: Smart Inverter & BESS Hardware */}
            <ScrollReveal direction="right" className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
                <img 
                  src="/assets/smart_inverter_battery_storage.jpg" 
                  alt="Smart Hybrid Solar Inverter and Battery Energy Storage System" 
                  className="w-full h-96 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-4 left-4 backdrop-blur-xl bg-slate-950/45 px-3 py-1.5 rounded-lg border border-white/25 text-xs font-mono text-solar-400 flex items-center gap-2 font-medium shadow-[0_4px_16px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.4)]">
                  <span className="text-emerald-400 font-bold">/</span>
                  <span>Next-Gen Hybrid BESS Architecture</span>
                </div>

                {/* Liquid Glass Telemetry Card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl p-4 text-white backdrop-blur-xl backdrop-saturate-150 bg-gradient-to-b from-white/20 via-slate-950/40 to-slate-950/70 border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.45),inset_0_1px_1px_0_rgba(255,255,255,0.7),inset_0_-1px_1px_0_rgba(255,255,255,0.15)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1">
                      <span>TELEMETRY GATEWAY</span>
                      <span className="text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/30">20ms Transfer</span>
                    </div>
                    <div className="text-sm font-semibold text-white drop-shadow-xs">
                      Intelligent Hybrid Inverter with Stackable Lithium Iron Phosphate (LiFePO4) Storage
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Technical Specifications Column */}
            <ScrollReveal direction="left" className="lg:col-span-6 space-y-4">
              
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-solar-500/10 text-solar-400 border border-solar-500/20">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-solar-400 font-bold block">5-Year Smart Monitoring</span>
                    <h3 className="text-base font-bold text-white">Real-Time Mobile App & Cloud Dashboard</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-12">
                  Track live solar generation, daily exports to TSSPDCL, self-consumption ratios, and system health from your phone with automated alerts for grid drops.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-emerald-400 font-bold block">Protection Infrastructure</span>
                    <h3 className="text-base font-bold text-white">Class-II SPD & Dual Copper Earth Pits</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-12">
                  Complete electrical surge protection (AC & DC SPDs), chemical earthing with &lt;1.5 Ohm resistance, and dedicated copper lightning arresters for monsoon safety.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-indigo-400 font-bold block">Structural Rigidity</span>
                    <h3 className="text-base font-bold text-white">80 Micron Hot-Dip Galvanization</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-12">
                  IS-2062 structural steel framing elevated on concrete ballast pillars or chemical studs. Designed specifically for Hyderabad coastal cyclonic gusts up to 150 km/h.
                </p>
              </div>

            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* INTERACTIVE PROPOSAL CALCULATOR STUDIO */}
      <section id="proposal-studio" className="py-20 bg-ivory-50 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <ProposalCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* SOLAR LOAN & EMI COMPARISON STUDIO */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <LoanEmiCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* COMPLETED PROJECTS SHOWCASE: INTERACTIVE FILTER GALLERY */}
      <section className="py-20 bg-ivory-50 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <ProjectShowcase
              category="All"
              title="Recent Completed Projects Across Telangana"
              subtitle="Inspect actual rooftop arrays and industrial solar plants deployed by Meghvi Solar across Hyderabad and South India."
              showFilters={true}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* PROCESS TIMELINE: HOW IT WORKS */}
      <section className="py-20 bg-ivory-50 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-wider text-solar-700 font-bold block mb-1">
                Engineered Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Get Started in 4 Seamless Steps
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                From initial rooftop shadow profiling to DISCOM meter commissioning and subsidy transfer.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <StaggerItem className="bg-white p-6 rounded-2xl border border-stone-200 relative shadow-2xs">
              <span className="text-4xl font-extrabold text-slate-200 font-mono block mb-3">01</span>
              <h3 className="text-base font-bold text-slate-900">Digital Shadow Survey</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Our engineer performs a 3D shadow profile of your terrace, assesses electrical sanctioned load, and delivers an exact CAD array layout.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-white p-6 rounded-2xl border border-stone-200 relative shadow-2xs">
              <span className="text-4xl font-extrabold text-solar-300 font-mono block mb-3">02</span>
              <h3 className="text-base font-bold text-slate-900">DISCOM Portal Sanction</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                We lodge your application on the National PM Surya Ghar Portal and submit feasibility requests to TSSPDCL / TSNPDCL.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-white p-6 rounded-2xl border border-stone-200 relative shadow-2xs">
              <span className="text-4xl font-extrabold text-emerald-300 font-mono block mb-3">03</span>
              <h3 className="text-base font-bold text-slate-900">Turnkey Precision Build</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Our certified technicians install galvanized structures, Tier-1 modules, dual lightning arresters, and smart inverters in 48 to 72 hours.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-white p-6 rounded-2xl border border-stone-200 relative shadow-2xs">
              <span className="text-4xl font-extrabold text-stone-300 font-mono block mb-3">04</span>
              <h3 className="text-base font-bold text-slate-900">Net Meter & Subsidy Credit</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                DISCOM officers install the bi-directional net meter. Handover complete, and your government subsidy credits straight to your bank.
              </p>
            </StaggerItem>

          </StaggerContainer>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-xs font-mono uppercase tracking-wider text-solar-700 font-bold block mb-1">
                Clear Answers
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Everything you need to know about rooftop solar, net metering, and warranties in Telangana.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.05}>
                <details
                  className="group bg-stone-50 rounded-2xl border border-stone-200/90 p-5 open:bg-white open:shadow-xs transition-all"
                >
                  <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between">
                    <span>{item.q}</span>
                    <span className="text-solar-600 group-open:rotate-180 transition-transform text-lg ml-2 font-mono">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-stone-100">
                    {item.a}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CONVERSION SECTION */}
      <section id="consultation-form" className="py-20 bg-ivory-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal direction="right" className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-solar-700 font-bold block">
                Direct Engineering Dispatch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Schedule Your Free Hyderabad Rooftop Feasibility Survey
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Receive an authoritative solar engineering layout, exact generation projections, and full subsidy assistance from Meghvi Solar.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Licensed site engineers visit your terrace directly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Certified shadow analysis & feeder load calculation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% assistance with PM Surya Ghar national portal registration</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-stone-200">
                <span className="text-xs text-slate-500 block font-mono">Direct Helpline (Hyderabad)</span>
                <div className="flex items-center gap-4 mt-1">
                  <a href={`tel:${COMPANY_DETAILS.phone1.replace(/\s+/g, '')}`} className="text-base font-bold text-slate-900 hover:text-solar-600 font-mono">
                    {COMPANY_DETAILS.phone1}
                  </a>
                  <span className="text-slate-300">|</span>
                  <a href={`tel:${COMPANY_DETAILS.phone2.replace(/\s+/g, '')}`} className="text-base font-bold text-slate-900 hover:text-solar-600 font-mono">
                    {COMPANY_DETAILS.phone2}
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-7">
              <ConsultationForm />
            </ScrollReveal>

          </div>
        </div>
      </section>

    </div>
  );
};
