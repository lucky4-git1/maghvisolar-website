import React from 'react';
import { motion } from 'framer-motion';
import { ProposalCalculator } from '../components/ProposalCalculator';
import { LoanEmiCalculator } from '../components/LoanEmiCalculator';
import { ConsultationForm } from '../components/ConsultationForm';
import { ScrollReveal } from '../components/motion/MotionWrapper';
import { Calculator, ArrowRight, ShieldCheck, IndianRupee, SunMedium } from 'lucide-react';

interface Props {
  onNavigate: (path: string) => void;
}

export const CalculatorPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 overflow-x-clip">
      
      {/* Header with Full-Bleed Hybrid Storage & Telemetry Asset */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
        {/* Full-bleed Architectural Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/smart_inverter_battery_storage.jpg"
            alt="Solar Proposal & Financial Telemetry Studio"
            className="w-full h-full object-cover object-center filter brightness-[0.48] contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/75 to-slate-950/45" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-solar-400 bg-solar-500/10 px-2.5 py-1 rounded-md border border-solar-500/30 mb-3 font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              Engineering & Financial Modeling Suite
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Solar Proposal & Loan Intelligence Studio
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Transparent solar calculations calibrated to current Telangana DISCOM residential/commercial tariff brackets and PM Surya Ghar central subsidies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool 1: Proposal Calculator */}
      <section className="py-16 bg-ivory-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <div className="mb-8">
              <span className="text-xs uppercase font-mono tracking-wider text-solar-700 font-bold block mb-1">Tool 01</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Instant Solar Rooftop Sizing & Proposal Engine
              </h2>
            </div>
            <ProposalCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Tool 2: Loan EMI Modeling */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <div className="mb-8">
              <span className="text-xs uppercase font-mono tracking-wider text-solar-700 font-bold block mb-1">Tool 02</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Concessional Solar Bank Loan & EMI Simulator
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Evaluate how monthly electricity savings offset bank loan EMIs, providing zero net out-of-pocket costs.
              </p>
            </div>
            <LoanEmiCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Consultation Desk */}
      <section className="py-20 bg-ivory-100/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <ConsultationForm
              title="Request an Official Engineering Feasibility Quotation"
              subtitle="Get an official feasibility report with detailed 25-year financial returns sent straight to your WhatsApp."
            />
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};
