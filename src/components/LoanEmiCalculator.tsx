import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Landmark, ArrowRight, CheckCircle, Percent, Calendar, Shield, IndianRupee } from 'lucide-react';

export const LoanEmiCalculator: React.FC = () => {
  const [cost, setCost] = useState<number>(220000);
  const [tenureMonths, setTenureMonths] = useState<number>(60);
  const [fdPercent, setFdPercent] = useState<number>(20);
  const [rate1, setRate1] = useState<number>(8.5); // Concessional Solar Bank Loan
  const [rate2, setRate2] = useState<number>(10.5); // Standard Unsecured Personal/Home Loan
  const [fdRate, setFdRate] = useState<number>(7.0);

  // EMI Math
  const calculateEmi = (principal: number, annualRate: number, months: number) => {
    if (months <= 0 || principal <= 0) return 0;
    const r = annualRate / 100 / 12;
    const emi = (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    return isNaN(emi) ? 0 : emi;
  };

  const emi1 = calculateEmi(cost, rate1, tenureMonths);
  const emi2 = calculateEmi(cost, rate2, tenureMonths);

  const totalPayable1 = emi1 * tenureMonths;
  const totalPayable2 = emi2 * tenureMonths;

  const fdAmount = cost * (fdPercent / 100);
  const years = tenureMonths / 12;
  const fdReturn = fdAmount * Math.pow(1 + fdRate / 100, years);
  const processingFee = cost * 0.015 * 1.18; // 1.5% + 18% GST

  const netEffectiveCost1 = totalPayable1 + processingFee - fdReturn;
  const netEffectiveCost2 = totalPayable2 + processingFee;
  const netSavings = Math.max(0, netEffectiveCost2 - netEffectiveCost1);

  const format = (v: number) => "₹" + Math.round(v).toLocaleString('en-IN');

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden">
      {/* Top Banner with Solar Panel Background */}
      <div className="relative bg-slate-900 text-white p-6 sm:p-8 overflow-hidden">
        {/* Photovoltaic Solar Panel Rooftop Background Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/assets/commercial_industrial_solar_rooftop.jpg"
            alt="Solar PV Panels Background"
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-125 saturate-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/75 to-slate-900/80" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10" />
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono text-solar-400 bg-solar-500/10 px-2.5 py-1 rounded-md border border-solar-500/30 mb-2 font-semibold">
              <Landmark className="w-3.5 h-3.5" />
              Green Energy Banking Studio
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Solar Loan & EMI Intelligence Calculator
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              Compare institutional Solar Loans against ordinary financing with FD security deposit yield offsets.
            </p>
          </div>
          <div className="text-xs text-slate-300 border border-slate-700/80 bg-slate-950/60 px-3 py-2 rounded-xl backdrop-blur-xs">
            Partnered with SBI, Canara, Union Bank & IREDA Green Windows
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 font-mono">
                  Turnkey Project Cost
                </label>
                <span className="text-base font-bold text-slate-900 font-mono tabular-nums">
                  {format(cost)}
                </span>
              </div>
              <input
                type="range"
                min="80000"
                max="1000000"
                step="10000"
                value={cost}
                aria-label="Turnkey Project Cost"
                onChange={(e) => setCost(Number(e.target.value))}
                className="w-full accent-solar-500 cursor-pointer h-2 bg-stone-200 rounded-lg"
              />
              <div className="flex justify-between text-xs text-slate-500 font-mono mt-1">
                <span>₹80,000 (1kW)</span>
                <span>₹2.2L (3kW)</span>
                <span>₹5.8L (10kW)</span>
                <span>₹10L+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 font-mono">
                  Repayment Tenure
                </label>
                <span className="text-sm font-bold text-slate-900 font-mono">
                  {tenureMonths} Months ({tenureMonths / 12} Years)
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[36, 60, 84, 120].map((m) => {
                  const isSelected = tenureMonths === m;
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setTenureMonths(m)}
                      className={`relative py-2 text-xs font-semibold rounded-lg border transition-all z-10 ${
                        isSelected
                          ? 'text-white font-bold border-slate-900'
                          : 'bg-stone-50 hover:bg-stone-100 text-slate-700 border-stone-200'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="tenure-pill"
                          className="absolute inset-0 bg-slate-900 rounded-lg shadow-xs -z-10"
                          transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">{m / 12} Yrs ({m}m)</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-stone-100">
              <div>
                <label className="block text-xs uppercase font-mono text-slate-500 font-semibold mb-1">
                  Solar Bank Rate (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={rate1}
                    aria-label="Solar Bank Interest Rate"
                    onChange={(e) => setRate1(Number(e.target.value))}
                    className="w-full text-sm font-mono font-semibold px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl focus:bg-white"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-mono">% p.a.</span>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono text-slate-500 font-semibold mb-1">
                  Standard Loan Rate (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={rate2}
                    aria-label="Standard Loan Interest Rate"
                    onChange={(e) => setRate2(Number(e.target.value))}
                    className="w-full text-sm font-mono font-semibold px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl focus:bg-white"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-mono">% p.a.</span>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600">Fixed Deposit Security Yield</span>
                <span className="font-mono font-semibold text-slate-800">{fdRate}% p.a.</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600">FD Allocation</span>
                <span className="font-mono font-semibold text-slate-800">{fdPercent}% ({format(fdAmount)})</span>
              </div>
              <div className="flex justify-between items-center text-xs border-t border-stone-200/60 pt-2 text-emerald-700 font-medium">
                <span>Maturity Yield Value</span>
                <span className="font-mono font-bold">+{format(fdReturn)}</span>
              </div>
            </div>
          </div>

          {/* Results Side by Side */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Option 1: Green Solar Loan (Recommended) */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 border-2 border-solar-500 relative shadow-lg flex flex-col justify-between">
                <div className="absolute -top-3 right-4 bg-solar-500 text-slate-950 text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-md shadow-sm">
                  Recommended Architecture
                </div>

                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400">Institutional Option A</span>
                  <h4 className="text-lg font-bold text-white mt-1">Concessional Green Solar Loan</h4>
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <span className="text-xs text-slate-400 block font-mono">Monthly EMI</span>
                    <div className="text-3xl font-extrabold text-white mt-0.5 font-mono tabular-nums">
                      {format(emi1)} <span className="text-xs font-normal text-slate-400">/ mo</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-xs text-slate-300 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Loan Payable:</span>
                      <span>{format(totalPayable1)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Processing Fee (1.5% + GST):</span>
                      <span>{format(processingFee)}</span>
                    </div>
                    <div className="flex justify-between text-emerald-400">
                      <span>FD Compounded Yield:</span>
                      <span>-{format(fdReturn)}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-800 pt-2 font-bold text-white">
                      <span>Net Effective Cost:</span>
                      <span className="text-solar-400">{format(netEffectiveCost1)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Lower effective outlay over tenure</span>
                </div>
              </div>

              {/* Option 2: Standard Loan */}
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-500">Financing Option B</span>
                  <h4 className="text-lg font-bold text-slate-900 mt-1">Standard Unsecured Loan</h4>
                  
                  <div className="mt-4 pt-3 border-t border-stone-200">
                    <span className="text-xs text-slate-500 block font-mono">Monthly EMI</span>
                    <div className="text-3xl font-bold text-slate-800 mt-0.5 font-mono tabular-nums">
                      {format(emi2)} <span className="text-xs font-normal text-slate-500">/ mo</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-xs text-slate-600 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Total Loan Payable:</span>
                      <span>{format(totalPayable2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Processing Fee (1.5% + GST):</span>
                      <span>{format(processingFee)}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>FD Compounded Yield:</span>
                      <span>₹0 (None)</span>
                    </div>
                    <div className="flex justify-between border-t border-stone-200 pt-2 font-bold text-slate-900">
                      <span>Net Effective Cost:</span>
                      <span>{format(netEffectiveCost2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-rose-600 font-medium">
                  Additional interest burden of {format(totalPayable2 - totalPayable1)}
                </div>
              </div>

            </div>

            {/* Savings Callout */}
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-emerald-800 font-semibold block uppercase tracking-wider font-mono">
                    Net Financial Advantage with Option A
                  </span>
                  <span className="text-xl font-bold text-emerald-950 font-mono tabular-nums">
                    Save {format(netSavings)} overall ({((netSavings / (netEffectiveCost2 || 1)) * 100).toFixed(1)}% Lower Cost)
                  </span>
                </div>
              </div>

              <a
                href="#consultation-form"
                className="btn-primary text-xs py-2.5 px-4"
              >
                Apply for Solar Loan Assistance
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
