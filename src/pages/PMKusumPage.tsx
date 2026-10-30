import React from 'react';
import { motion } from 'framer-motion';
import { ConsultationForm } from '../components/ConsultationForm';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/motion/MotionWrapper';
import { 
  Tractor, Sun, ShieldCheck, CheckCircle2, ArrowRight, IndianRupee, Sprout, Landmark, MapPin, Compass, Activity, Zap
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/solarData';

interface Props {
  onNavigate: (path: string) => void;
}

export const PMKusumPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 overflow-x-hidden">
      
      {/* Hero Header with PM-KUSUM Official Banner & PM Modi Optimization */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden min-h-[620px] flex items-center">
        {/* Full-bleed PM-KUSUM Scheme Ambient Background with Right-Anchored Modi */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/assets/Banner-1-1024x356.png"
            alt="Official PM-KUSUM Solar Scheme Banner with PM Narendra Modi"
            className="w-full h-full object-cover object-[right_center] filter brightness-[1.05] contrast-105 select-none"
          />
          {/* Directional gradient protecting text on the left while leaving PM Modi 100% visible and un-dimmed on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 via-45% to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full py-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Scheme Overview & Components */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:col-span-7 space-y-5 p-6 sm:p-8 rounded-3xl backdrop-blur-md bg-slate-950/80 border border-white/15 shadow-2xl"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-solar-400 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-solar-500/30 font-semibold shadow-lg">
                <Sprout className="w-3.5 h-3.5 text-solar-400" />
                Agricultural Solar Transformation • Central PM-KUSUM Scheme
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                PM-KUSUM: Government-Backed Solar for Farmers & Agri-Enterprises
              </h1>

              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                Achieve daylight irrigation independence and earn steady income through 25-year DISCOM Power Purchase Agreements (PPAs) on uncultivated land. Standalone solar pumps and grid-connected farm power with up to 60% combined subsidy.
              </p>

              <div className="grid grid-cols-3 gap-2.5 pt-1 text-xs font-mono">
                <div className="p-3 bg-slate-900/85 backdrop-blur-md rounded-xl border border-slate-700/80 text-center shadow-lg">
                  <span className="text-slate-400 block text-[11px]">Component A</span>
                  <span className="text-sm font-bold text-white">0.5 – 2 MW</span>
                  <span className="text-[10px] text-solar-400 block mt-0.5 font-semibold">Grid Plants</span>
                </div>
                <div className="p-3 bg-slate-900/85 backdrop-blur-md rounded-xl border border-slate-700/80 text-center shadow-lg">
                  <span className="text-slate-400 block text-[11px]">Component B</span>
                  <span className="text-sm font-bold text-white">Up to 7.5 HP</span>
                  <span className="text-[10px] text-emerald-400 block mt-0.5 font-semibold">Solar Pumps</span>
                </div>
                <div className="p-3 bg-slate-900/85 backdrop-blur-md rounded-xl border border-slate-700/80 text-center shadow-lg">
                  <span className="text-slate-400 block text-[11px]">Component C</span>
                  <span className="text-sm font-bold text-white">Solarization</span>
                  <span className="text-[10px] text-emerald-400 block mt-0.5 font-semibold">Feeder Sync</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#kusum-form" 
                  className="btn-amber text-xs sm:text-sm py-3 px-5 font-bold shadow-amber-glow"
                >
                  Check Land Feasibility
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('/contact')}
                  className="btn-stone text-xs sm:text-sm py-3 px-5 font-semibold bg-slate-900/90 backdrop-blur-md border border-slate-700 hover:bg-slate-800 text-white"
                >
                  Consult Farming Specialist
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column: Prominent Uncropped Official MNRE Scheme Banner & PM Modi Spotlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl overflow-hidden border-2 border-amber-400/50 bg-slate-900/90 backdrop-blur-xl shadow-2xl p-4 sm:p-5 text-white space-y-4">
                <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-amber-300 font-bold uppercase tracking-wider text-[11px]">
                      Official MNRE Scheme
                    </span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-semibold">
                    Up to 60% Subsidy
                  </span>
                </div>

                {/* Uncropped High-Definition Official Banner */}
                <div className="relative rounded-2xl overflow-hidden border border-amber-400/30 shadow-xl bg-amber-400 group">
                  <img
                    src="/assets/Banner-1-1024x356.png"
                    alt="Official Government of India PM-KUSUM Banner with PM Narendra Modi and MNRE Emblem"
                    className="w-full h-auto object-contain block group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                {/* Scheme Highlights & Subsidy Assurances */}
                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex items-center justify-between font-mono text-[11px] bg-slate-950/60 p-2.5 rounded-xl border border-white/10">
                    <span className="text-slate-300">Central MNRE Subsidy</span>
                    <span className="text-solar-400 font-bold">30% Direct</span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px] bg-slate-950/60 p-2.5 rounded-xl border border-white/10">
                    <span className="text-slate-300">State Govt Grant</span>
                    <span className="text-emerald-400 font-bold">30% Grant</span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px] bg-slate-950/60 p-2.5 rounded-xl border border-white/10">
                    <span className="text-slate-300">Farmer Share</span>
                    <span className="text-white font-bold">Only 10% – 40%</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-300 leading-snug font-sans bg-amber-500/10 border border-amber-400/20 rounded-xl p-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Meghvi Solar handles 100% of the MNRE portal paperwork & sub-station feasibility.</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* The 3 Scheme Components */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-wider text-solar-700 font-bold block mb-1">
                Program Architecture
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                What the PM-KUSUM Scheme Enables
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Tailored for farmers, farmer producer organizations (FPOs), panchayats, and rural co-operatives.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Component A */}
            <StaggerItem className="p-8 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-solar-700 font-bold block mb-1">
                  COMPONENT A
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Ground-Mounted Grid Plants (0.5 to 2 MW)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Set up small solar power plants on barren, fallow, or uncultivable agricultural land within a 5 km radius of rural 33/11 kV sub-stations.
                </p>
                <div className="space-y-2 text-xs text-slate-700 border-t border-stone-200 pt-3">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-solar-600 shrink-0" />
                    <span>25-Year Long-Term PPA with Telangana DISCOM</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-solar-600 shrink-0" />
                    <span>Steady lease rental income per acre / year</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-stone-200 text-xs font-mono text-slate-500">
                Minimum Land Requirement: ~2 Acres / 500 kW
              </div>
            </StaggerItem>

            {/* Component B */}
            <StaggerItem className="p-8 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold block mb-1">
                  COMPONENT B
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Standalone Solar Water Pumps (Up to 7.5 HP)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Replacement of diesel water pumps in off-grid agricultural fields with high-efficiency DC solar submersible pumps.
                </p>
                <div className="space-y-2 text-xs text-slate-700 border-t border-stone-200 pt-3">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>30% Central MNRE Subsidy + 30% State Subsidy</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Farmer contribution only 10% to 40%</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-stone-200 text-xs font-mono text-emerald-700 font-bold">
                Eliminates ₹40,000 to ₹70,000/yr Diesel Costs
              </div>
            </StaggerItem>

            {/* Component C */}
            <StaggerItem className="p-8 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold block mb-1">
                  COMPONENT C
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Solarization of Grid-Connected Agri Pumps
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Individual pump solarization or agricultural feeder solarization, enabling farmers to sell surplus daytime electricity back to the grid.
                </p>
                <div className="space-y-2 text-xs text-slate-700 border-t border-stone-200 pt-3">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Daytime uninterrupted irrigation power</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Net-metered revenue credited for exported units</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-stone-200 text-xs font-mono text-slate-500">
                PPA Tariff fixed by State Regulatory Commission
              </div>
            </StaggerItem>

          </StaggerContainer>

          {/* Dual-Axis Automated Solar Tracking Hardware Showcase */}
          <div className="mt-16 rounded-3xl bg-slate-950 text-white border border-slate-800 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Visual 3D Tracker Pedestal Column */}
              <div className="lg:col-span-6 relative p-6 sm:p-10 flex items-center justify-center bg-radial from-slate-900 to-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-solar-500/10 to-transparent pointer-events-none" />
                
                <div className="relative group w-full max-w-md mx-auto">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-black">
                    <img
                      src="/assets/solar_tracker_pedestal.jpg"
                      alt="Precision Dual-Axis Automated Solar Tracker for Agricultural Irrigation"
                      className="w-full h-72 sm:h-84 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Telemetry Badge */}
                    <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-emerald-400 flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Astronomical Solar Tracking</span>
                    </div>

                    {/* Pedestal Tag */}
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs font-mono flex items-center justify-between text-slate-300">
                      <span>Dual-Axis Continuous Azimuth</span>
                      <span className="text-solar-400 font-bold">+35% Water Yield</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specs & Hardware Narrative Column */}
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-solar-400 font-bold mb-2">
                    <Compass className="w-4 h-4 text-solar-400" />
                    Next-Gen Agricultural Engineering
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    Dual-Axis Smart Trackers for High-Head Submersible Pumps
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Unlike static seasonal tilts, Meghvi’s automated dual-axis tracker rotates continuously to follow the sun's exact orbital azimuth and elevation. Pumping output commences up to 90 minutes earlier in the morning and continues until sunset.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4">
                    <div className="text-solar-400 font-bold font-mono text-lg mb-1">+35% Yield</div>
                    <p className="text-xs text-slate-400 leading-snug">
                      Higher cumulative daily discharge for borewells and drip irrigation channels.
                    </p>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4">
                    <div className="text-emerald-400 font-bold font-mono text-lg mb-1">150 km/h Wind</div>
                    <p className="text-xs text-slate-400 leading-snug">
                      Automated high-wind storm stowage mode protects panels from squalls and hail.
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-solar-400 shrink-0" />
                    <span>Heavy-duty hot-dip galvanized cylindrical pedestal for zero corrosion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-solar-400 shrink-0" />
                    <span>IP67 brushless DC linear actuators with astronomical GPS lookup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-solar-400 shrink-0" />
                    <span>Full compatibility with PM-KUSUM Component B & C subsidies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Consultation Desk */}
      <section id="kusum-form" className="py-20 bg-ivory-100/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <ConsultationForm
              defaultUserType="Commercial"
              title="PM-KUSUM Feasibility & Sub-Station Check"
              subtitle="Enter your land parcel coordinates or nearest 33/11 kV sub-station location to assess DISCOM injection capacity and pump eligibility."
            />
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};
