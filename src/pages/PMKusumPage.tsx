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
      
      {/* Dignified Editorial Split Hero: PM-KUSUM Central Scheme Architecture */}
      <section className="relative bg-slate-950 text-white py-14 sm:py-20 border-b border-slate-900 overflow-hidden">
        {/* Subtle architectural hairline grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            
            {/* Left Column: Authoritative Scheme Overview & Component Schedule */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-solar-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 font-semibold shadow-xs">
                <Sprout className="w-3.5 h-3.5 text-solar-400" />
                Ministry of New & Renewable Energy • Agricultural Solar EPC
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                  PM-KUSUM Scheme
                </h1>
                <p className="text-lg sm:text-xl font-bold text-solar-400 mt-2">
                  Subsidized Solar Pumps & 25-Year Feeder Power Generation
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Achieve daylight irrigation independence and earn steady income through 25-year DISCOM Power Purchase Agreements (PPAs) on uncultivated land. Standalone solar pumps and grid-connected farm power with up to 60% combined central and state subsidy.
              </p>

              {/* Clean Component Architecture Schedule */}
              <div className="border border-slate-800 rounded-2xl bg-slate-900/60 divide-y divide-slate-800/80 overflow-hidden font-mono text-xs">
                <div className="p-3.5 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white text-sm block">Component A: Ground Plants</span>
                    <span className="text-slate-400 text-[11px]">0.5 to 2 MW on barren land • 25-Year DISCOM PPA</span>
                  </div>
                  <span className="text-solar-400 font-bold text-xs bg-solar-500/10 px-2.5 py-1 rounded border border-solar-500/20">
                    Steady Lease
                  </span>
                </div>

                <div className="p-3.5 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white text-sm block">Component B: Standalone Solar Pumps</span>
                    <span className="text-slate-400 text-[11px]">Up to 7.5 HP submersible DC pumps • Zero diesel cost</span>
                  </div>
                  <span className="text-emerald-400 font-bold text-xs bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                    60% Subsidy
                  </span>
                </div>

                <div className="p-3.5 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white text-sm block">Component C: Feeder Solarization</span>
                    <span className="text-slate-400 text-[11px]">Solarization of agricultural pumps • Daytime grid power</span>
                  </div>
                  <span className="text-blue-400 font-bold text-xs bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20">
                    DISCOM Sync
                  </span>
                </div>
              </div>

              {/* Tactile Action Buttons */}
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
                  className="btn-stone text-xs sm:text-sm py-3 px-5 font-semibold bg-slate-900 border border-slate-800 hover:bg-slate-850 text-white"
                >
                  Consult Farming Specialist
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column: Pristine High-Resolution Official MNRE Scheme Banner Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl overflow-hidden">
                {/* Showcase Header */}
                <div className="px-5 py-3 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-300 font-semibold tracking-wide">
                    Official Central Government Scheme
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-semibold">
                    MNRE Empanelled
                  </span>
                </div>

                {/* High-Resolution Uncropped Official Banner with PM Narendra Modi & MNRE Emblem */}
                <div className="relative bg-amber-400 overflow-hidden group">
                  <img
                    src="/assets/Banner-1-1024x356.png"
                    alt="Official Government of India PM-KUSUM Banner with PM Narendra Modi and MNRE Emblem"
                    className="w-full h-auto object-contain block group-hover:scale-102 transition-transform duration-700"
                  />
                </div>

                {/* Statutory Subsidy Breakdown */}
                <div className="p-4 bg-slate-950/90 border-t border-slate-800/80 space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                    <span className="text-slate-400">Central MNRE Subsidy</span>
                    <span className="text-solar-400 font-bold">30% Direct</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                    <span className="text-slate-400">Telangana State Grant</span>
                    <span className="text-emerald-400 font-bold">30% Direct</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Farmer Net Contribution</span>
                    <span className="text-white font-bold">Only 10% to 40%</span>
                  </div>
                </div>

                {/* Bottom Assurance Note */}
                <div className="px-4 py-3 bg-slate-900 border-t border-slate-800 text-[11px] text-slate-400 font-sans flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-solar-400 shrink-0" />
                  <span>Meghvi Solar manages DISCOM sub-station feasibility & turnkey commissioning.</span>
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
