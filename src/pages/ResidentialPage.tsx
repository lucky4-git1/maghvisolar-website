import React from 'react';
import { motion } from 'framer-motion';
import { ProposalCalculator } from '../components/ProposalCalculator';
import { ConsultationForm } from '../components/ConsultationForm';
import { PartnerStrip } from '../components/PartnerStrip';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { SolarRoofSimulator } from '../components/SolarRoofSimulator';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/motion/MotionWrapper';
import { 
  Home, ShieldCheck, Sun, CheckCircle2, ArrowRight, Zap, IndianRupee, Clock, Activity, FileText, Layers, Check
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/solarData';

interface Props {
  onNavigate: (path: string) => void;
}

export const ResidentialPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 overflow-x-hidden">
      
      {/* Hero Header with Rich Architectural Background Image */}
      <section className="relative bg-slate-950 text-white py-20 sm:py-28 border-b border-slate-800 overflow-hidden">
        {/* Full-bleed Architectural Villa Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/luxury_hyderabad_solar_villa.jpg"
            alt="Residential Solar Villa Architecture in Hyderabad"
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
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-solar-400 bg-solar-500/10 px-2.5 py-1 rounded-md border border-solar-500/30">
                <Home className="w-3.5 h-3.5 text-solar-400" />
                Residential Rooftop Solar Engineering
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Slash Your Electricity Bills by Up to 90% with Precision Home Solar
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Engineered for individual bungalows, independent villas, and row houses across Hyderabad & Telangana. Direct TSSPDCL/TSNPDCL net-metering synchronization with up to ₹78,000 Central Government subsidy under PM Surya Ghar.
              </p>

              {/* 4 Feature Badges from Meghvi Solar with authentic scraped badge assets */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex flex-col items-center text-center shadow-xs">
                  <img src="/assets/Government-Subsidy.png" alt="Govt Subsidy" className="h-10 w-auto mb-1 object-contain" />
                  <span className="text-xs font-bold text-emerald-400">₹78k Subsidy</span>
                  <span className="text-xs text-slate-400">Direct Account Credit</span>
                </div>
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex flex-col items-center text-center shadow-xs">
                  <img src="/assets/25-Years-Performance-Assurance.png" alt="25 Years Warranty" className="h-10 w-auto mb-1 object-contain" />
                  <span className="text-xs font-bold text-solar-400">30-Yr Warranty</span>
                  <span className="text-xs text-slate-400">Linear Performance</span>
                </div>
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex flex-col items-center text-center shadow-xs">
                  <img src="/assets/Precision-Based-Installation.png" alt="Precision Installation" className="h-10 w-auto mb-1 object-contain" />
                  <span className="text-xs font-bold text-blue-400">Zero Leakage</span>
                  <span className="text-xs text-slate-400">Chemical Stud Anchoring</span>
                </div>
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex flex-col items-center text-center shadow-xs">
                  <img src="/assets/Save-_1-lakh-on-Solar-Today.png" alt="Save 1 Lakh" className="h-10 w-auto mb-1 object-contain" />
                  <span className="text-xs font-bold text-amber-400">Max Savings</span>
                  <span className="text-xs text-slate-400">₹1L+ Year 1 Offset</span>
                </div>
              </div>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="#residential-survey"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('residential-survey')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-amber text-xs font-bold py-3 px-5 rounded-xl shadow-md inline-flex items-center gap-2"
                >
                  <span>Request Free Rooftop Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#residential-calculator"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('residential-calculator')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-stone text-xs font-bold py-3 px-5 rounded-xl inline-flex items-center gap-2"
                >
                  <span>Calculate Monthly Savings</span>
                </a>
              </div>

            </motion.div>

            {/* Visual Architectural Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl overflow-hidden border border-white/20 bg-slate-900/90 shadow-2xl backdrop-blur-xl">
                {/* Showcase Top Bar */}
                <div className="px-5 py-3.5 bg-slate-950/80 border-b border-white/10 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="font-mono text-slate-200 font-semibold truncate">
                      Jubilee Hills, Hyderabad
                    </span>
                  </div>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-solar-500/20 text-solar-300 border border-solar-400/30 shrink-0 font-medium">
                    15 kW Turnkey Pergola
                  </span>
                </div>

                {/* Villa Showcase Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden group">
                  <img
                    src="/assets/luxury_hyderabad_solar_villa.jpg"
                    alt="Residential solar villa architecture in Hyderabad"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top-Right Performance Tag */}
                  <div className="absolute top-3.5 right-3.5 backdrop-blur-md bg-slate-950/70 border border-white/20 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-300 font-semibold flex items-center gap-1.5 shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>100% Monthly Bill Offset</span>
                  </div>
                </div>

                {/* Integrated Feature Deck with Solar Bulb Asset */}
                <div className="p-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-white/10">
                  <div className="flex items-center gap-4">
                    {/* Solar Bulb Innovation Icon Pod */}
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-solar-500/20 to-amber-500/10 border border-solar-500/30 p-2 flex items-center justify-center shadow-lg">
                        <motion.img
                          src="/assets/solar_bulb_innovation.png"
                          alt="Solar Photovoltaic Clean Innovation Bulb"
                          className="w-full h-full object-contain filter drop-shadow-md"
                          animate={{ rotate: [0, 4, -4, 0] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                    </div>

                    {/* Architectural Description */}
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-solar-400 font-bold">
                          Tier-1 TOPCon Cells
                        </span>
                        <span className="text-slate-600 text-xs">•</span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                          Zero Roof Penetration
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-snug font-sans">
                        Elevated architectural pergola preserves 100% usable terrace space for family leisure while cutting power bills to zero.
                      </p>
                    </div>
                  </div>

                  {/* Key Assurance Chips */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-white/10 text-[11px] font-mono text-center">
                    <div className="bg-white/5 border border-white/10 rounded-lg py-1.5 px-2">
                      <span className="text-solar-400 font-bold block">150 km/h</span>
                      <span className="text-slate-400 text-[10px]">Cyclone Rated</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg py-1.5 px-2">
                      <span className="text-emerald-400 font-bold block">₹0 Discom</span>
                      <span className="text-slate-400 text-[10px]">Monthly Net Bill</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg py-1.5 px-2">
                      <span className="text-blue-400 font-bold block">25-Yr</span>
                      <span className="text-slate-400 text-[10px]">Linear Warranty</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SYSTEM ARCHITECTURE BLUEPRINT SECTION */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal direction="right" className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase font-mono tracking-wider text-solar-700 font-bold block">
                Technical Architecture
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                Anatomy of a Meghvi Grid-Tied Solar PV System
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every component is engineered for durability, zero moisture intrusion, and maximum energy harvest across 300+ sunny days in Telangana.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-700">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Tier-1 TOPCon Monocrystalline Cells</strong>
                    <span>Ultra-high &gt;22% efficiency with superior heat coefficient preventing Hyderabad summer degradation.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Transformerless Smart String Inverter</strong>
                    <span>Dual MPPT tracking, IP65 waterproof housing, and built-in Wi-Fi real-time generation telemetry.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Bi-Directional Net-Meter & Surge BOS</strong>
                    <span>Synchronizes with TSSPDCL/TSNPDCL grid feeder with dedicated copper earth pits and Class-II SPD protection.</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-6">
              <div className="bg-stone-50 p-4 sm:p-6 rounded-3xl border border-stone-200 shadow-md">
                <img
                  src="/assets/Solar_PV_System-1024x512.png"
                  alt="Meghvi Solar Grid Connected Photovoltaic System Diagram"
                  className="w-full h-auto object-contain rounded-2xl"
                />
                <span className="text-xs font-mono text-slate-500 block text-center mt-3">
                  Grid-Tie Schematic: Solar PV Array → DCDB → Inverter → ACDB → Bi-Directional Net Meter → Grid / Home Loads
                </span>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* NEW INTERACTIVE SOLAR ROOF & SUN-PATH SIMULATOR */}
      <section className="py-12 bg-ivory-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <SolarRoofSimulator onNavigate={onNavigate} />
          </ScrollReveal>
        </div>
      </section>

      {/* COMPLETED RESIDENTIAL PROJECTS GALLERY */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <ProjectShowcase
              category="Residential"
              title="Actual Residential Installations in Greater Hyderabad"
              subtitle="Explore real rooftop solar arrays deployed on villas, independent houses, and duplex homes across Hyderabad."
              showFilters={false}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* OWN SOLAR WITH ZERO UPFRONT COST (4 STEPS) */}
      <section className="py-16 bg-ivory-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-mono tracking-wider text-solar-700 font-bold block mb-1">
                Frictionless Ownership
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                Own Solar With ZERO Upfront Cost
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Nationalized bank solar loans structured so your power bill savings pay the monthly installment.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StaggerItem className="p-6 rounded-2xl bg-white border border-stone-200 text-center shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-solar-500 text-slate-950 flex items-center justify-center mx-auto mb-3 font-mono font-bold text-lg">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Zero Down Payment</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Apply for concessional solar financing with minimal documentation and quick digital sanction.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-2xl bg-white border border-stone-200 text-center shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3 font-mono font-bold text-lg">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Immediate Savings</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Electricity bills plunge by up to 90% immediately upon bi-directional meter activation.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-2xl bg-white border border-stone-200 text-center shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 font-mono font-bold text-lg">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Bill Offsets EMI</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                The money you save every month covers the loan EMI without impacting your family budget.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-2xl bg-white border border-stone-200 text-center shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center mx-auto mb-3 font-mono font-bold text-lg">
                4
              </div>
              <h3 className="text-base font-bold text-slate-900">25+ Years Free Power</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                After the loan is cleared in 3 to 5 years, enjoy free solar electricity for decades.
              </p>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

      {/* Embedded Sizing Tool */}
      <section id="residential-calculator" className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <ProposalCalculator />
          </ScrollReveal>
        </div>
      </section>

      <PartnerStrip />

      {/* Residential Consultation Form */}
      <section id="residential-survey" className="py-20 bg-ivory-100/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <ConsultationForm
              defaultUserType="Residential"
              title="Book Your Residential Rooftop Solar Assessment"
              subtitle="Our Hyderabad solar engineer will assess your terrace orientation, shadow clearances, and sanctioned load."
            />
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};
