import React from 'react';
import { motion } from 'framer-motion';
import { ConsultationForm } from '../components/ConsultationForm';
import { PartnerStrip } from '../components/PartnerStrip';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/motion/MotionWrapper';
import { 
  Building2, TrendingDown, IndianRupee, ShieldCheck, Factory, Zap, FileSpreadsheet, ArrowRight, CheckCircle2, Award
} from 'lucide-react';
import { COMPANY_DETAILS, CLIENT_LOGOS } from '../data/solarData';

interface Props {
  onNavigate: (path: string) => void;
}

export const CommercialPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 overflow-x-hidden">
      
      {/* Hero Header with Full-Bleed Commercial Rooftop Banner */}
      <section className="relative bg-slate-950 text-white py-20 sm:py-28 border-b border-slate-900 overflow-hidden">
        {/* Full-bleed Architectural Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/commercial_industrial_solar_rooftop.jpg"
            alt="Commercial Rooftop Solar EPC in Telangana"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/75 to-slate-950/45" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:col-span-7 space-y-5"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-solar-400 bg-solar-500/10 px-2.5 py-1 rounded-md border border-solar-500/30 font-semibold">
                <Factory className="w-3.5 h-3.5 text-solar-400" />
                Commercial & Industrial Solar EPC
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Solar Cuts Electricity Costs by ₹5–10 Lakhs/Year for Corporates
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Engineered for manufacturing plants, pharmaceutical facilities, warehouses, hotels, and corporate IT parks. Turn unused roof sheds into high-ROI power generating assets with 40% accelerated depreciation.
              </p>

              {/* 4 Feature Badges from Meghvi Commercial */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center shadow-xs">
                  <span className="text-xs text-slate-400 uppercase font-mono block">Power Savings</span>
                  <span className="text-sm font-bold text-emerald-400">Up to 80%</span>
                  <span className="text-xs text-slate-500 block">Tariff Cut</span>
                </div>
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center shadow-xs">
                  <span className="text-xs text-slate-400 uppercase font-mono block">Tax Shield</span>
                  <span className="text-sm font-bold text-solar-400">40% Accel. Dep.</span>
                  <span className="text-xs text-slate-500 block">Section 32</span>
                </div>
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center shadow-xs">
                  <span className="text-xs text-slate-400 uppercase font-mono block">Payback</span>
                  <span className="text-sm font-bold text-white">2.8 – 3.5 Yrs</span>
                  <span className="text-xs text-slate-500 block">Fast ROI</span>
                </div>
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center shadow-xs">
                  <span className="text-xs text-slate-400 uppercase font-mono block">Free O&M</span>
                  <span className="text-sm font-bold text-amber-300">5 Years</span>
                  <span className="text-xs text-slate-500 block">Comprehensive</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#commercial-survey" 
                  className="btn-amber text-xs sm:text-sm py-3.5 px-6 font-bold"
                >
                  Request C&I Energy Audit
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('/calculator')}
                  className="btn-stone text-xs sm:text-sm py-3.5 px-6 font-semibold"
                >
                  Explore Financing & EMI
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group">
                <img
                  src="/assets/commercial_industrial_solar_rooftop.jpg"
                  alt="Commercial solar plant installation in Telangana"
                  className="w-full h-84 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Architectural Tag (Liquid Glass) */}
                <div className="absolute top-4 left-4 backdrop-blur-xl bg-slate-950/45 px-3 py-1.5 rounded-lg border border-white/25 text-xs font-mono text-white flex items-center gap-2 font-medium shadow-[0_4px_16px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.4)]">
                  <span className="text-solar-400 font-bold">/</span>
                  <span>Telangana C&I • 350 kW Megawatt EPC</span>
                </div>
                
                {/* Bottom Overlay Card: Liquid Glass Refractive Surface */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl p-4 text-white backdrop-blur-xl backdrop-saturate-150 bg-gradient-to-b from-white/20 via-slate-950/40 to-slate-950/70 border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.45),inset_0_1px_1px_0_rgba(255,255,255,0.7),inset_0_-1px_1px_0_rgba(255,255,255,0.15)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                  <div className="relative z-10 text-xs">
                    <div className="flex items-center justify-between font-mono mb-1">
                      <span className="text-solar-400 font-bold">Industrial Shed EPC</span>
                      <span className="text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/30">HT / LT Synchronized</span>
                    </div>
                    <p className="text-slate-200 text-xs leading-relaxed drop-shadow-xs">
                      Non-penetrating clamp mounting for Trapezoidal Metal Roofs with zero structural perforation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Industrial Financial Intelligence */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-wider text-solar-700 font-bold block mb-1">
                Commercial Viability
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                A Direct Balance Sheet Multiplier
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <TrendingDown className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Drastic Reduction in High Tariffs</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Commercial and industrial grid tariffs in Telangana range from ₹8 to ₹12 per unit. Solar energy generation costs average below ₹2.20 per unit over 25 years.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-solar-100 text-solar-800 flex items-center justify-center mb-4">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Section 32 Accelerated Depreciation</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Enterprises can claim 40% depreciation in Year 1 on solar assets under the Income Tax Act, significantly lowering corporate tax liability and accelerating payback.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Diesel Generator Offset (DG-PV Sync)</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Our smart micro-grid controllers integrate directly with on-site diesel generators, modulating PV output to prevent reverse power feeding while cutting diesel consumption by up to 60%.
              </p>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

      {/* COMPLETED C&I PROJECTS SHOWCASE */}
      <section className="py-16 bg-ivory-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <ProjectShowcase
              category="Commercial"
              title="Commercial Rooftop EPC Case Studies in Telangana"
              subtitle="Review verified generation metrics from manufacturing hubs, distribution warehouses, and healthcare campuses."
              showFilters={false}
            />
          </ScrollReveal>
        </div>
      </section>

      <PartnerStrip />

      {/* Consultation Desk */}
      <section id="commercial-survey" className="py-20 bg-ivory-100/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <ConsultationForm
              defaultUserType="Commercial"
              title="Request Commercial Feasibility & Shadow Study"
              subtitle="Our senior industrial solar engineer will model your HT/LT feeder synchronization and 25-year IRR cashflow."
            />
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};
