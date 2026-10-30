import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROPOSAL_DATA, SystemProposal, COMPANY_DETAILS } from '../data/solarData';
import { 
  ShieldCheck, TrendingUp, IndianRupee, ArrowRight, CheckCircle2, Sun, Printer, X, FileText, Check, PhoneCall
} from 'lucide-react';

interface Props {
  onSelectPlan?: (proposal: SystemProposal) => void;
  className?: string;
}

export const ProposalCalculator: React.FC<Props> = ({ onSelectPlan, className = "" }) => {
  const [selectedBill, setSelectedBill] = useState<number>(3000);
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);
  const current = PROPOSAL_DATA[selectedBill] || PROPOSAL_DATA[3000];

  const billOptions = [
    { value: 1000, label: "< ₹1,500" },
    { value: 2000, label: "₹1.5k – ₹2.5k" },
    { value: 3000, label: "₹2.5k – ₹4k", recommended: true },
    { value: 5000, label: "₹4k – ₹7k" },
    { value: 8000, label: "₹7k – ₹10k" },
    { value: 10000, label: "₹10,000+" },
  ];

  const formatCurrency = (val: number) => {
    return "₹" + val.toLocaleString('en-IN');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`bg-white rounded-3xl border border-stone-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      
      {/* Printable Official Proposal Modal */}
      <AnimatePresence>
        {showPrintModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-stone-200 shadow-2xl space-y-6 text-slate-900"
            >
              {/* Modal Top Controls (Hidden in Print) */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-4 print:hidden">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase">
                  <FileText className="w-4 h-4 text-solar-600" />
                  <span>EPC Solar Estimation Quotation</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="btn-amber text-xs font-bold py-1.5 px-3 rounded-lg flex items-center gap-1.5 shadow-xs"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print / Save as PDF</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPrintModal(false)}
                    aria-label="Close Proposal"
                    className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-stone-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Printable Document Body */}
              <div className="space-y-6 font-sans">
                {/* Official Letterhead */}
                <div className="flex items-start justify-between border-b-2 border-slate-900 pb-5">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-slate-950">
                      MEGHVI SOLAR ENERGY SOLUTIONS
                    </h2>
                    <p className="text-xs text-slate-600 mt-0.5">
                      MNRE Empanelled Rooftop Solar EPC Contractor
                    </p>
                    <p className="text-xs text-slate-500 mt-1 font-mono">
                      Chandanagar, Hyderabad, Telangana • Phone: +91 97000 02812
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono bg-stone-100 border border-stone-200 px-2 py-0.5 rounded text-slate-700 font-bold block">
                      REF: MVR-HYD-2026
                    </span>
                    <span className="text-xs text-slate-500 mt-1 block">
                      Date: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                </div>

                {/* Sizing & Financial Summary Table */}
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                    1. Proposed System Architecture & Subsidy
                  </h3>
                  <div className="border border-stone-200 rounded-xl overflow-hidden text-xs">
                    <div className="grid grid-cols-2 bg-stone-100 p-2.5 font-semibold text-slate-700 border-b border-stone-200">
                      <span>Specification Parameter</span>
                      <span className="text-right">Engineering Metric</span>
                    </div>
                    <div className="grid grid-cols-2 p-2.5 border-b border-stone-100">
                      <span className="text-slate-600">Solar PV Array Capacity</span>
                      <span className="text-right font-bold font-mono text-slate-900">{current.capacity} (Tier-1 TOPCon)</span>
                    </div>
                    <div className="grid grid-cols-2 p-2.5 border-b border-stone-100">
                      <span className="text-slate-600">Monthly Expected Generation</span>
                      <span className="text-right font-bold font-mono text-slate-900">{current.monthlyUnits} Units / Month</span>
                    </div>
                    <div className="grid grid-cols-2 p-2.5 border-b border-stone-100">
                      <span className="text-slate-600">Annual Solar Generation</span>
                      <span className="text-right font-bold font-mono text-slate-900">{current.monthlyUnits * 12} Units / Year</span>
                    </div>
                    <div className="grid grid-cols-2 p-2.5 border-b border-stone-100">
                      <span className="text-slate-600">Gross Turnkey EPC Cost</span>
                      <span className="text-right font-bold font-mono text-slate-900">{formatCurrency(current.totalCost)}</span>
                    </div>
                    <div className="grid grid-cols-2 p-2.5 border-b border-stone-100 bg-emerald-50/50">
                      <span className="text-emerald-800 font-semibold">PM Surya Ghar Central Subsidy</span>
                      <span className="text-right font-bold font-mono text-emerald-700">-{formatCurrency(current.subsidy)}</span>
                    </div>
                    <div className="grid grid-cols-2 p-3 bg-solar-50/60 font-bold text-sm">
                      <span className="text-solar-950">Net Payable Customer Investment</span>
                      <span className="text-right font-mono text-solar-900">{formatCurrency(current.netCost)}</span>
                    </div>
                  </div>
                </div>

                {/* Savings Projections */}
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                    2. Lifetime Financial Returns
                  </h3>
                  <div className="grid grid-cols-3 gap-3 text-center text-xs">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <span className="text-slate-500 block">Monthly Bill Relief</span>
                      <strong className="text-base text-slate-900 block mt-1 font-mono">{formatCurrency(current.monthlySavings)}</strong>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <span className="text-slate-500 block">Year 1 Net Savings</span>
                      <strong className="text-base text-slate-900 block mt-1 font-mono">{formatCurrency(current.annualSavings)}</strong>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                      <span className="text-emerald-800 block">25-Yr Cumulative Savings</span>
                      <strong className="text-base text-emerald-900 block mt-1 font-mono">{formatCurrency(current.annualSavings * 25)}</strong>
                    </div>
                  </div>
                </div>

                {/* Warranties & Grid Standards */}
                <div className="space-y-2 text-xs text-slate-600 bg-stone-50 p-4 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-slate-900 font-mono uppercase">
                    3. Turnkey Scope & Technical Guarantee
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>25-Year Linear Power Degradation Warranty</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>12-Year Equipment Inverter & BOS Guarantee</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>TSSPDCL / TSNPDCL Net-Metering Sync</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>80-Micron Hot-Dip Galvanized Mounting</span>
                    </li>
                  </ul>
                </div>

                {/* Footer Signoff */}
                <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Prepared by: Meghvi Solar Engineering Division</span>
                  <span>Contact: meghvisolar@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Header bar with Solar Panel Background */}
      <div className="relative bg-slate-900 text-white p-6 sm:p-8 border-b border-slate-800 overflow-hidden">
        {/* Photovoltaic Solar Panel Rooftop Background Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/assets/commercial_industrial_solar_rooftop.jpg"
            alt="Solar PV Panels Background"
            className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-125"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/80" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-solar-400 bg-solar-500/10 px-2.5 py-1 rounded-md border border-solar-500/30 mb-2 font-semibold">
              <Sun className="w-3.5 h-3.5 animate-spin-slow" />
              Instant Engineering Estimation Engine
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Solar Proposal & Savings Studio
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              Configured with current TSSPDCL/TSNPDCL tariffs & PM Surya Ghar central subsidies.
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 block font-mono">MNRE Approved EPC</span>
            <span className="text-xs font-semibold text-emerald-400 border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-1 rounded-md block mt-1">
              Telangana DISCOM Ready
            </span>
          </div>
        </div>

        {/* Step 1: Select Bill */}
        <div className="relative z-10 mt-6 pt-6 border-t border-slate-800">
          <span id="bill-selector-label" className="block text-xs uppercase tracking-wider font-mono text-slate-300 mb-3 font-semibold">
            Select Your Current Monthly Electricity Bill:
          </span>
          <div role="group" aria-labelledby="bill-selector-label" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {billOptions.map((opt) => {
              const isSelected = selectedBill === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedBill(opt.value)}
                  className={`relative py-3 px-3 text-center rounded-xl text-sm font-semibold transition-all duration-150 border z-10 ${
                    isSelected
                      ? 'text-slate-950 font-bold border-solar-400'
                      : 'hover:bg-slate-800 text-slate-200 border-slate-700 bg-slate-800/80'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="proposal-bill-selected"
                      className="absolute inset-0 bg-solar-500 rounded-xl shadow-[0_0_16px_rgba(245,158,11,0.35)] ring-2 ring-solar-400/50 -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  {opt.recommended && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-600 text-xs text-white px-2 py-0.5 rounded-md font-bold uppercase tracking-wider shadow-xs z-20">
                      Popular
                    </span>
                  )}
                  <span className="relative z-10">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Proposal Display */}
      <div className="p-6 sm:p-8 bg-gradient-to-b from-stone-50/50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Key Metric Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-500">Recommended System</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-solar-100 text-solar-800 border border-solar-200">
                  {current.capacity} Rooftop Array
                </span>
              </div>

              <div className="mt-4">
                <span className="text-xs text-slate-500 block">Estimated Net Customer Investment</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tabular-nums">
                    {formatCurrency(current.netCost)}
                  </span>
                  <span className="text-sm line-through text-slate-400 tabular-nums">
                    {formatCurrency(current.totalCost)}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Includes {formatCurrency(current.subsidy)} Direct Central Subsidy</span>
                </div>
              </div>

              {/* Sizing & Payback stats */}
              <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-stone-100">
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Terrace Area Needed</span>
                  <span className="text-sm font-bold text-slate-800">{current.areaRequiredSqFt} sq.ft</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Simple ROI Payback</span>
                  <span className="text-sm font-bold text-emerald-700">{current.payback}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 space-y-2">
              <button
                type="button"
                onClick={() => setShowPrintModal(true)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Printer className="w-4 h-4 text-solar-400" />
                <span>View & Print Official EPC Proposal</span>
              </button>

              <a
                href="#consultation-desk"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-desk')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full btn-amber text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <span>Book Free Technical Site Survey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Savings & Production Breakdown */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-500">Monthly Bill Reduction</span>
                  <div className="text-2xl font-bold text-slate-900 mt-1 tabular-nums">
                    {formatCurrency(current.monthlySavings)} <span className="text-xs font-normal text-slate-500">/ mo</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3 border-t border-stone-100 pt-2">
                  Generates approx. <strong className="text-slate-800">{current.monthlyUnits} units</strong> of green power monthly.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-solar-100 text-solar-700 flex items-center justify-center mb-3">
                    <IndianRupee className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-500">Annual Return (Year 1)</span>
                  <div className="text-2xl font-bold text-slate-900 mt-1 tabular-nums">
                    {formatCurrency(current.annualSavings)} <span className="text-xs font-normal text-slate-500">/ yr</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3 border-t border-stone-100 pt-2">
                  25-Year Cumulative Savings: <strong className="text-emerald-700">{formatCurrency(current.annualSavings * 25)}</strong>
                </p>
              </div>

            </div>

            {/* Engineering Credibility Strip */}
            <div className="bg-stone-100/70 p-5 rounded-2xl border border-stone-200/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-solar-600" />
                Meghvi Solar Engineering Guarantee
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>12 Yr</strong> Equipment Warranty</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>25-30 Yr</strong> Generation Guarantee</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>5 Yr</strong> Free Maintenance</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>150 km/h</strong> Wind Rated Structure</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Zero Roof Waterproof Leakage</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Direct DISCOM Net Metering</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-solar-50 border border-solar-200/70 rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-solar-500 text-slate-950 flex items-center justify-center font-bold">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-solar-900 block">Want a customized engineering layout?</span>
                  <span className="text-sm font-bold text-slate-900">+91 97000 02812 / 99000 02812</span>
                </div>
              </div>
              <a
                href="https://wa.me/919700002812?text=Hello%20Meghvi%20Solar,%20I%20would%20like%20a%20site%20assessment%20for%20my%20rooftop"
                target="_blank"
                rel="noreferrer"
                className="btn-stone text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs inline-flex items-center gap-1.5"
              >
                <span>WhatsApp Layout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
