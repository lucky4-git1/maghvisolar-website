import React from 'react';
import { motion } from 'framer-motion';
import { ConsultationForm } from '../components/ConsultationForm';
import { ProposalCalculator } from '../components/ProposalCalculator';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/motion/MotionWrapper';
import { 
  Sun, ShieldCheck, CheckCircle2, ArrowRight, IndianRupee, FileCheck, Landmark, Check
} from 'lucide-react';

interface Props {
  onNavigate: (path: string) => void;
}

export const PMSuryaGharPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 overflow-x-hidden">
      
      {/* Dignified Editorial Split Hero: Official Government Scheme & Subsidy Architecture */}
      <section className="relative bg-slate-950 text-white py-14 sm:py-20 border-b border-slate-900 overflow-hidden">
        {/* Subtle architectural hairline grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            
            {/* Left Column: Authoritative Scheme Overview & Financial Scale */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-solar-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 font-semibold shadow-xs">
                <Sun className="w-3.5 h-3.5 text-solar-400" />
                Ministry of New & Renewable Energy • National Rooftop Portal
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                  PM Surya Ghar: Muft Bijli Yojana
                </h1>
                <p className="text-lg sm:text-xl font-bold text-solar-400 mt-2">
                  Claim Up to ₹78,000 Direct Central Subsidy for Residential Solar
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                The flagship national rooftop solar program providing direct-to-bank subsidies for Indian households. Meghvi Solar is an empanelled EPC partner managing end-to-end National Portal filings, DISCOM approvals, and system handover.
              </p>

              {/* Clean Financial Schedule Matrix */}
              <div className="border border-slate-800 rounded-2xl bg-slate-900/60 divide-y divide-slate-800/80 overflow-hidden font-mono text-xs">
                <div className="p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-white text-sm">1 kW System</span>
                    <span className="text-slate-400 text-xs hidden sm:inline">• 2–4 Panels</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-400 text-sm">₹30,000</span>
                    <span className="text-slate-400 text-[11px] block">Direct Bank Credit</span>
                  </div>
                </div>

                <div className="p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-white text-sm">2 kW System</span>
                    <span className="text-slate-400 text-xs hidden sm:inline">• 4–6 Panels</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-400 text-sm">₹60,000</span>
                    <span className="text-slate-400 text-[11px] block">Direct Bank Credit</span>
                  </div>
                </div>

                <div className="p-3.5 flex items-center justify-between bg-solar-500/5">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-solar-400 text-sm">3 kW to 10 kW</span>
                    <span className="text-solar-300/70 text-xs hidden sm:inline">• 6–20 Panels</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-solar-400 text-sm">₹78,000</span>
                    <span className="text-solar-300/80 text-[11px] block font-semibold">Maximum Grant</span>
                  </div>
                </div>
              </div>

              {/* Restrained Tactile Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#subsidy-calculator" 
                  className="btn-amber text-xs sm:text-sm py-3 px-5 font-bold shadow-amber-glow"
                >
                  Calculate Net Cost After Subsidy
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#subsidy-form" 
                  className="btn-stone text-xs sm:text-sm py-3 px-5 font-semibold bg-slate-900 border border-slate-800 hover:bg-slate-850 text-white"
                >
                  Check Feeder Eligibility
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column: Pristine High-Resolution Official Scheme Showcase */}
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
                    Official Central Government Portal
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-semibold">
                    MNRE Verified
                  </span>
                </div>

                {/* High-Resolution Uncropped Official Banner */}
                <div className="relative bg-black overflow-hidden group">
                  <img
                    src="/assets/Banner-4-1024x570.png"
                    alt="Official PM Surya Ghar Muft Bijli Yojana Central Scheme Banner with PM Narendra Modi"
                    className="w-full h-auto object-cover block group-hover:scale-102 transition-transform duration-700"
                  />
                </div>

                {/* Statutory Assurances Strip */}
                <div className="p-4 bg-slate-950/90 border-t border-slate-800/80 space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-solar-400 shrink-0" />
                    <span>Direct Bank Transfer (DBT) to Aadhaar-linked account</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Zero upfront fee on National Portal registration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Complete TSSPDCL / TSNPDCL net-meter sync</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Subsidy Structure Table */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs uppercase font-mono tracking-wider text-solar-700 font-bold block mb-1">
                Central Subsidy Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Official PM Surya Ghar Subsidy Scale
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-100 border-b border-stone-200 font-mono text-xs uppercase text-slate-600">
                    <tr>
                      <th className="py-3 px-4 sm:px-6">System Capacity</th>
                      <th className="py-3 px-4 sm:px-6">Avg Monthly Units</th>
                      <th className="py-3 px-4 sm:px-6">Central Subsidy Amount</th>
                      <th className="py-3 px-4 sm:px-6">Net Homeowner Investment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-mono">
                    <tr className="hover:bg-stone-50">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">1 kW</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600">120 – 140 Units</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-600">₹30,000</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-900 font-bold">~₹45,000</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">2 kW</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600">240 – 280 Units</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-600">₹60,000</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-900 font-bold">~₹85,000</td>
                    </tr>
                    <tr className="bg-solar-50/50 hover:bg-solar-50 font-bold">
                      <td className="py-3.5 px-4 sm:px-6 text-solar-900">3 kW (Most Popular)</td>
                      <td className="py-3.5 px-4 sm:px-6 text-solar-800">360 – 420 Units</td>
                      <td className="py-3.5 px-4 sm:px-6 text-emerald-700">₹78,000 (Maximum)</td>
                      <td className="py-3.5 px-4 sm:px-6 text-solar-950 font-extrabold">~₹1,27,000</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">5 kW</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600">600 – 700 Units</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-600">₹78,000</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-900 font-bold">~₹2,32,000</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">10 kW</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600">1,200 – 1,400 Units</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-600">₹78,000</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-900 font-bold">~₹4,72,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* 5-Step Process */}
          <div className="mt-16">
            <ScrollReveal direction="up">
              <h3 className="text-xl font-bold text-slate-900 text-center mb-8">
                How Meghvi Solar Secures Your Subsidy
              </h3>
            </ScrollReveal>

            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <StaggerItem className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-mono text-xs text-solar-600 font-bold block mb-1">STEP 01</span>
                <h4 className="font-bold text-xs text-slate-900">National Portal Registration</h4>
                <p className="text-xs text-slate-500 mt-1">We register your electricity consumer number on pmsuryaghar.gov.in.</p>
              </StaggerItem>

              <StaggerItem className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-mono text-xs text-solar-600 font-bold block mb-1">STEP 02</span>
                <h4 className="font-bold text-xs text-slate-900">DISCOM Feasibility Approval</h4>
                <p className="text-xs text-slate-500 mt-1">TSSPDCL grants technical feasibility sanction for rooftop capacity.</p>
              </StaggerItem>

              <StaggerItem className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-mono text-xs text-solar-600 font-bold block mb-1">STEP 03</span>
                <h4 className="font-bold text-xs text-slate-900">Tier-1 EPC Installation</h4>
                <p className="text-xs text-slate-500 mt-1">Meghvi Solar deploys ALMM-listed panels, inverter, and GI framing.</p>
              </StaggerItem>

              <StaggerItem className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-mono text-xs text-solar-600 font-bold block mb-1">STEP 04</span>
                <h4 className="font-bold text-xs text-slate-900">Net Meter Inspection</h4>
                <p className="text-xs text-slate-500 mt-1">DISCOM engineer inspects the array and commissions the bi-directional meter.</p>
              </StaggerItem>

              <StaggerItem className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="font-mono text-xs text-emerald-700 font-bold block mb-1">STEP 05</span>
                <h4 className="font-bold text-xs text-slate-900">Direct Bank Transfer</h4>
                <p className="text-xs text-slate-600 mt-1">Central Government credits ₹78,000 straight into your bank account.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>

        </div>
      </section>

      {/* Sizing Tool */}
      <section id="subsidy-calculator" className="py-16 bg-ivory-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <ProposalCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Commissioned Showcase Gallery */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal direction="left" className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-xl relative group">
                <img
                  src="/assets/pm_surya_ghar_hyderabad_home.jpg"
                  alt="Commissioned PM Surya Ghar 5kW Residential Rooftop in Hyderabad"
                  className="w-full h-80 sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700/80 text-xs text-white">
                  <div className="flex items-center justify-between font-mono mb-1">
                    <span className="text-solar-400 font-bold">5 kW Villa Pergola System</span>
                    <span className="text-emerald-400 font-semibold">TSSPDCL Net-Meter Active</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Elevated GI structure retaining full terrace lifestyle space with 580Wp bifacial glass-to-glass modules.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase font-mono tracking-wider text-solar-700 font-bold">
                Field Commissioning Benchmark
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Turnkey Compliance with National Portal Mandates
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Under the PM Surya Ghar guidelines, all rooftop installations must deploy DCR (Domestic Content Requirement) certified photovoltaic cells and MNRE-approved ALMM inverters. Meghvi Solar handles 100% of the portal liaison:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="font-bold text-slate-900 block mb-0.5">DCR Compliant Solar Cells</span>
                  <span className="text-slate-600">Manufactured in India to unlock direct central government DBT disbursement.</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="font-bold text-slate-900 block mb-0.5">End-to-End Net Metering</span>
                  <span className="text-slate-600">Liaison with TSSPDCL / TSNPDCL assistant engineers for bi-directional testing.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Subsidy Assistance Consultation Form */}
      <section id="subsidy-form" className="py-20 bg-ivory-100/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <ConsultationForm
              defaultUserType="Residential"
              title="Apply for PM Surya Ghar Feasibility Approval"
              subtitle="Enter your DISCOM consumer number / mobile to check your sanctioned load and book guaranteed ₹78,000 subsidy processing."
            />
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};
