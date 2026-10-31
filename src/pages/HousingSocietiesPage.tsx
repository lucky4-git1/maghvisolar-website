import React from 'react';
import { motion } from 'framer-motion';
import { ConsultationForm } from '../components/ConsultationForm';
import { PartnerStrip } from '../components/PartnerStrip';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/motion/MotionWrapper';
import { 
  Users, Building, IndianRupee, ShieldCheck, CheckCircle2, ArrowRight, Lightbulb, Droplets, Waves, Zap 
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/solarData';

interface Props {
  onNavigate: (path: string) => void;
}

export const HousingSocietiesPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 overflow-x-clip">
      
      {/* Hero Header with High-Rise Community Aerial Background */}
      <section className="relative bg-slate-950 text-white py-20 sm:py-28 border-b border-slate-800 overflow-hidden">
        {/* Full-bleed Aerial Community Asset */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/housing_society_solar_aerial.jpg"
            alt="Housing Society Rooftop Solar Array in Hyderabad"
            className="w-full h-full object-cover object-center filter brightness-[0.48] contrast-105"
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
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30 font-semibold">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                Apartments & Gated Communities EPC
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Eliminate Monthly Maintenance Bills with Society Rooftop Solar
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Power common area utilities—passenger elevators, water booster pumps, STP motors, corridor lighting, and clubhouses—with rooftop solar. Claim up to ₹18,000/kW government subsidy for residential welfare associations (RWAs).
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-center shadow-xs">
                  <span className="text-slate-400 block text-xs">RWA Subsidy</span>
                  <span className="text-sm font-bold text-emerald-400">₹18,000 / kW</span>
                  <span className="text-xs text-slate-500 block">Up to 500 kW</span>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-center shadow-xs">
                  <span className="text-slate-400 block text-xs">Society Payback</span>
                  <span className="text-sm font-bold text-solar-400">~3 to 3.5 Years</span>
                  <span className="text-xs text-slate-500 block">Fast Recovery</span>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-center shadow-xs">
                  <span className="text-slate-400 block text-xs">Free Power Span</span>
                  <span className="text-sm font-bold text-white">25+ Years</span>
                  <span className="text-xs text-slate-500 block">Zero Common Dues</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#society-survey" 
                  className="btn-amber text-xs sm:text-sm py-3.5 px-6 font-bold"
                >
                  Request Society RWA Presentation
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('/calculator')}
                  className="btn-stone text-xs sm:text-sm py-3.5 px-6 font-semibold"
                >
                  Estimate Sizing & Savings
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative group">
                <img
                  src="/assets/housing_society_solar_aerial.jpg"
                  alt="Apartment society rooftop solar aerial view"
                  className="w-full h-84 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Architectural Tag (Liquid Glass) */}
                <div className="absolute top-4 left-4 backdrop-blur-xl bg-slate-950/45 px-3 py-1.5 rounded-lg border border-white/25 text-xs font-mono text-white flex items-center gap-2 font-medium shadow-[0_4px_16px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.4)]">
                  <span className="text-emerald-400 font-bold">/</span>
                  <span>Chandanagar • 50 kW Common Array</span>
                </div>
                
                {/* Bottom Overlay Card: Liquid Glass Refractive Surface */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl p-4 text-white backdrop-blur-xl backdrop-saturate-150 bg-gradient-to-b from-white/20 via-slate-950/40 to-slate-950/70 border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.45),inset_0_1px_1px_0_rgba(255,255,255,0.7),inset_0_-1px_1px_0_rgba(255,255,255,0.15)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                  <div className="relative z-10 text-xs">
                    <div className="flex items-center justify-between font-mono mb-1">
                      <span className="text-solar-400 font-bold">50 kW Apartment Common Meter</span>
                      <span className="text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/30">₹55,000/mo Saved</span>
                    </div>
                    <p className="text-slate-200 text-xs leading-relaxed drop-shadow-xs">
                      Integrated with high-rise water pumping stations & fire-safety automated disconnect.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Common Loads Powered */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-wider text-solar-700 font-bold block mb-1">
                Common Area Utilities
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                Where Your Society Power Bills Vanish
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StaggerItem className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-solar-100 text-solar-800 flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Passenger Lifts & Elevators</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Elevator traction motors operate 24/7. Solar synchronizes with your dedicated lift transformer to offset daytime peak usage.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Water & Hydro-Pneumatic Pumps</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Raw water lifting, overhead tank distribution, and borewells run on high-torque pumps during morning and afternoon solar hours.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Sewage Treatment (STP / WTP)</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Aeration blowers, filtration units, and sludge pumps are continuous loads that can be 100% offset through daytime generation.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Clubhouse & Streetlights</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Gymnasiums, swimming pool filtration plants, party halls, and perimeter lighting meters earn net-metering energy credits.
              </p>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

      {/* RWA Subsidies Grid */}
      <section className="py-16 bg-ivory-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold block mb-1">
                Central Financial Assistance
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                Government Subsidies for Housing Societies
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Under the PM Surya Ghar Scheme, Residential Welfare Associations (RWAs) and Group Housing Societies (GHS) receive substantial incentives.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold block mb-2">
                Eligible Common Facilities
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                ₹18,000 per kW Flat Subsidy
              </h3>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Applicable for common facilities including lighting, lifts, water supply, and STPs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Upper ceiling limit of <strong>500 kW capacity</strong> per gated community or apartment society.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Direct subsidy disbursement from Central Ministry of New and Renewable Energy (MNRE).</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-solar-700 font-bold block mb-2">
                End-to-End Society Turnkey
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                What Meghvi Solar Delivers for RWAs
              </h3>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-solar-600 shrink-0 mt-0.5" />
                  <span>General Body Meeting (GBM) slide decks and resident technical presentations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-solar-600 shrink-0 mt-0.5" />
                  <span>Dedicated structural engineering load vetting by certified third-party structural engineers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-solar-600 shrink-0 mt-0.5" />
                  <span>TSSPDCL transformer capacity feasibility application & bi-directional meter synchronization.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* COMPLETED HOUSING SOCIETY PROJECTS */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <ProjectShowcase
              category="Housing Society"
              title="Verified Housing Society Projects in Hyderabad"
              subtitle="Inspect solar arrays powering common utilities across leading apartment communities and gated layouts."
              showFilters={false}
            />
          </ScrollReveal>
        </div>
      </section>

      <PartnerStrip />

      {/* Society Survey Form */}
      <section id="society-survey" className="py-20 bg-ivory-100/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <ConsultationForm
              defaultUserType="Housing Society"
              title="Schedule an On-Site Society RWA Consultation"
              subtitle="Our technical team will visit your apartment society, inspect your transformer rating, and present a custom feasibility plan to your managing committee."
            />
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};
