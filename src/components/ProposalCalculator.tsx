import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PROPOSAL_DATA, SystemProposal, COMPANY_DETAILS } from '../data/solarData';
import { 
  ShieldCheck, TrendingUp, IndianRupee, ArrowRight, CheckCircle2, Sun, Printer, X, FileText, Check, PhoneCall, Download, Share2, ExternalLink
} from 'lucide-react';

interface Props {
  onSelectPlan?: (proposal: SystemProposal) => void;
  className?: string;
}

export const ProposalCalculator: React.FC<Props> = ({ onSelectPlan, className = "" }) => {
  const [selectedBill, setSelectedBill] = useState<number>(3000);
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);
  const [isPrinting, setIsPrinting] = useState<boolean>(false);
  const modalScrollRef = useRef<HTMLDivElement>(null);
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

  // Generate standalone printable HTML document for instant download or popup print
  const getProposalHtml = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Meghvi Solar Official EPC Quotation - ${current.capacity}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    body { background: #fff; color: #0f172a; padding: 24px; font-size: 13px; line-height: 1.5; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0f172a; padding-bottom: 16px; margin-bottom: 20px; }
    .title { font-size: 20px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: -0.5px; }
    .subtitle { color: #d97706; font-weight: 600; font-size: 12px; margin-top: 4px; }
    .contact { font-size: 11px; color: #64748b; margin-top: 4px; font-family: monospace; }
    .ref-badge { background: #f1f5f9; border: 1px solid #cbd5e1; padding: 4px 8px; border-radius: 4px; font-family: monospace; font-size: 11px; font-weight: 700; text-align: right; }
    .section-title { font-size: 12px; font-weight: 800; font-family: monospace; text-transform: uppercase; letter-spacing: 0.5px; margin: 16px 0 8px; color: #1e293b; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 16px; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; }
    th, td { padding: 8px 12px; text-align: left; border-bottom: 1px solid #f1f5f9; font-size: 12px; }
    th { background: #f8fafc; font-weight: 700; color: #475569; }
    .text-right { text-align: right; }
    .font-mono { font-family: monospace; }
    .highlight-row { background: #ecfdf5; font-weight: 700; color: #065f46; }
    .total-row { background: #fef3c7; font-weight: 800; font-size: 14px; color: #78350f; border-top: 2px solid #f59e0b; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px; }
    .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; text-align: center; }
    .card-val { font-size: 16px; font-weight: 800; font-family: monospace; color: #0f172a; margin-top: 4px; }
    .card-emerald { background: #ecfdf5; border-color: #a7f3d0; color: #065f46; }
    .guarantees { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-bottom: 20px; }
    .guarantees-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11.5px; color: #334155; margin-top: 8px; }
    .footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 11px; color: #64748b; font-family: monospace; }
    @media print {
      body { padding: 0; }
      @page { size: A4 portrait; margin: 12mm; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="title">MEGHVI SOLAR ENERGY SOLUTIONS</div>
      <div class="subtitle">MNRE Empanelled Rooftop Solar EPC Contractor • TSSPDCL & TSNPDCL Channel Partner</div>
      <div class="contact">Beside Chandanagar Metro, Serilingampally, Hyderabad, Telangana 500050 • Tel: +91 97000 02812</div>
    </div>
    <div style="text-align: right;">
      <div class="ref-badge">REF: MVR-HYD-2026</div>
      <div style="font-size: 11px; color: #64748b; margin-top: 4px;">Date: ${new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
    </div>
  </div>

  <div class="section-title">1. System Architecture & Turnkey EPC Investment</div>
  <table>
    <thead>
      <tr>
        <th>Specification Parameter</th>
        <th class="text-right">Engineering Metric</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Solar PV Array Capacity</td>
        <td class="text-right font-mono"><strong>${current.capacity} (Tier-1 TOPCon)</strong></td>
      </tr>
      <tr>
        <td>Expected Monthly Power Generation</td>
        <td class="text-right font-mono">${current.monthlyUnits} Units / Month</td>
      </tr>
      <tr>
        <td>Annual Clean Solar Generation</td>
        <td class="text-right font-mono">${current.monthlyUnits * 12} Units / Year</td>
      </tr>
      <tr>
        <td>Required Shadow-Free Rooftop Area</td>
        <td class="text-right font-mono">${current.areaRequiredSqFt} sq.ft</td>
      </tr>
      <tr>
        <td>Gross Turnkey EPC Project Cost</td>
        <td class="text-right font-mono">${formatCurrency(current.totalCost)}</td>
      </tr>
      <tr class="highlight-row">
        <td>PM Surya Ghar Direct Central Subsidy</td>
        <td class="text-right font-mono">-${formatCurrency(current.subsidy)}</td>
      </tr>
      <tr class="total-row">
        <td>Net Payable Customer Investment</td>
        <td class="text-right font-mono">${formatCurrency(current.netCost)}</td>
      </tr>
    </tbody>
  </table>

  <div class="section-title">2. Lifetime Financial Returns & Savings</div>
  <div class="grid">
    <div class="card">
      <div style="font-size: 11px; color: #64748b;">Monthly Bill Relief</div>
      <div class="card-val">${formatCurrency(current.monthlySavings)}</div>
    </div>
    <div class="card">
      <div style="font-size: 11px; color: #64748b;">Year 1 Net Savings</div>
      <div class="card-val">${formatCurrency(current.annualSavings)}</div>
    </div>
    <div class="card card-emerald">
      <div style="font-size: 11px; color: #065f46;">25-Yr Cumulative Returns</div>
      <div class="card-val" style="color: #065f46;">${formatCurrency(current.annualSavings * 25)}</div>
    </div>
  </div>

  <div class="guarantees">
    <div style="font-size: 11px; font-weight: 800; font-family: monospace; text-transform: uppercase; color: #1e293b;">
      3. Turnkey Scope & Technical Guarantee
    </div>
    <div class="guarantees-grid">
      <div>✓ 30-Year Linear Power Degradation Warranty</div>
      <div>✓ 12-Year Equipment Inverter & BOS Guarantee</div>
      <div>✓ 5-Year Free Operation & Maintenance (O&M)</div>
      <div>✓ Direct TSSPDCL / TSNPDCL Net-Metering Sync</div>
      <div>✓ 80-Micron Hot-Dip Galvanized Mounting</div>
      <div>✓ 150 km/h Wind Speed Structural Certification</div>
    </div>
  </div>

  <div class="footer">
    <div>
      <strong>Meghvi Solar Engineering Division</strong><br>
      Approved for PM Surya Ghar National Subsidy Portal
    </div>
    <div style="text-align: right;">
      Direct Support: +91 97000 02812 / 99000 02812<br>
      Email: meghvisolar@gmail.com
    </div>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 250);
    };
  <\/script>
</body>
</html>`;
  };

  // Robust multi-environment print handler
  const handlePrint = () => {
    setIsPrinting(true);
    try {
      // 1. Temporarily restore body overflow so browsers can print cleanly
      document.body.style.overflow = 'visible';
      
      // 2. Trigger browser print
      window.print();
      
      setTimeout(() => {
        setIsPrinting(false);
        if (showPrintModal) {
          document.body.style.overflow = 'hidden';
        }
      }, 800);
    } catch (err) {
      console.warn('window.print() prevented, opening popup window:', err);
      setIsPrinting(false);
      openPrintWindow();
    }
  };

  // Fallback: Open dedicated print window
  const openPrintWindow = () => {
    try {
      const printWin = window.open('', '_blank');
      if (printWin) {
        printWin.document.open();
        printWin.document.write(getProposalHtml());
        printWin.document.close();
      } else {
        downloadProposalFile();
      }
    } catch {
      downloadProposalFile();
    }
  };

  // Fallback: Download official quotation file
  const downloadProposalFile = () => {
    try {
      const blob = new Blob([getProposalHtml()], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Meghvi_Solar_EPC_Quotation_${current.capacity.replace(/\s+/g, '_')}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('File download failed:', err);
    }
  };

  // Lock body scroll and reset modal scroll when opening
  useEffect(() => {
    if (showPrintModal) {
      document.body.style.overflow = 'hidden';
      if (modalScrollRef.current) {
        modalScrollRef.current.scrollTop = 0;
      }
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setShowPrintModal(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [showPrintModal]);

  return (
    <div className={`bg-white rounded-3xl border border-stone-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      
      {/* Official Printable Proposal Modal Portaled Directly to document.body */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {showPrintModal && (
            <div id="proposal-print-portal" className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
              <div 
                className="absolute inset-0 cursor-pointer"
                onClick={() => setShowPrintModal(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="print-modal-body bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col border border-stone-200 shadow-2xl text-slate-900 my-auto overflow-hidden relative z-10"
              >
                {/* Modal Top Controls (Hidden in Print) */}
                <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-stone-200 bg-stone-50/90 shrink-0 no-print">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-solar-500 text-slate-950 flex items-center justify-center font-bold">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 block">
                        Official Solar Quotation & Scope
                      </span>
                      <span className="text-[11px] text-slate-500 font-sans block">
                        {current.capacity} Turnkey Rooftop Solar Plant
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="btn-amber text-xs font-bold py-2 px-3.5 rounded-xl flex items-center gap-1.5 shadow-xs cursor-pointer"
                      title="Download as PDF or Print"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>{isPrinting ? 'Preparing...' : 'Print / Save PDF'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={downloadProposalFile}
                      className="btn-stone text-xs font-bold py-2 px-3 rounded-xl hidden sm:flex items-center gap-1.5 shadow-xs cursor-pointer"
                      title="Download Offline HTML Proposal"
                    >
                      <Download className="w-3.5 h-3.5 text-solar-500" />
                      <span>Download</span>
                    </button>
                    <a
                      href={`https://wa.me/919700002812?text=Hello%20Meghvi%20Solar,%20I%20have%20generated%20the%20${encodeURIComponent(current.capacity)}%20rooftop%20solar%20proposal%20(Net:%20${encodeURIComponent(formatCurrency(current.netCost))}).%20Please%20verify%20my%20site%20feasibility.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-stone text-xs font-bold py-2 px-3 rounded-xl hidden md:flex items-center gap-1.5 shadow-xs cursor-pointer"
                      title="Share to WhatsApp"
                    >
                      <Share2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setShowPrintModal(false)}
                      aria-label="Close Proposal Modal"
                      className="p-2 text-slate-400 hover:text-slate-800 rounded-xl hover:bg-stone-200/60 transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Printable Document Body */}
                <div 
                  ref={modalScrollRef} 
                  className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-slate-900"
                >
                  {/* Official Letterhead */}
                  <div className="flex items-start justify-between border-b-2 border-slate-950 pb-5">
                    <div className="flex items-start gap-3.5">
                      <div className="bg-slate-950 p-2 rounded-xl shrink-0 hidden sm:block">
                        <img
                          src="/assets/Logo-6-e1778049478712.png"
                          alt="Meghvi Solar Logo"
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-black tracking-tight text-slate-950 uppercase">
                          Meghvi Solar Energy Solutions
                        </h2>
                        <p className="text-xs font-semibold text-solar-700 mt-0.5">
                          MNRE Empanelled Rooftop Solar EPC Contractor • TSSPDCL & TSNPDCL Channel Partner
                        </p>
                        <p className="text-[11px] text-slate-500 mt-1 font-mono">
                          Beside Chandanagar Metro, Serilingampally, Hyderabad, Telangana 500050 • Tel: +91 97000 02812
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-mono bg-stone-100 border border-stone-200 px-2 py-0.5 rounded text-slate-700 font-bold block">
                        REF: MVR-HYD-2026
                      </span>
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        Date: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </div>

                  {/* Sizing & Financial Summary Table */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 font-mono uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-solar-500"></span>
                      1. Proposed System Architecture & Subsidy Breakdown
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
                        <span className="text-slate-600">Rooftop Terrace Area Required</span>
                        <span className="text-right font-bold font-mono text-slate-900">{current.areaRequiredSqFt} sq.ft Shadow-Free</span>
                      </div>
                      <div className="grid grid-cols-2 p-2.5 border-b border-stone-100">
                        <span className="text-slate-600">Gross Turnkey EPC Cost</span>
                        <span className="text-right font-bold font-mono text-slate-900">{formatCurrency(current.totalCost)}</span>
                      </div>
                      <div className="grid grid-cols-2 p-2.5 border-b border-stone-100 bg-emerald-50/60">
                        <span className="text-emerald-800 font-semibold">PM Surya Ghar Central Subsidy</span>
                        <span className="text-right font-bold font-mono text-emerald-700">-{formatCurrency(current.subsidy)}</span>
                      </div>
                      <div className="grid grid-cols-2 p-3 bg-solar-50/80 font-bold text-sm">
                        <span className="text-solar-950">Net Payable Customer Investment</span>
                        <span className="text-right font-mono text-solar-900 text-base">{formatCurrency(current.netCost)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Savings Projections */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 font-mono uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-solar-500"></span>
                      2. Lifetime Financial Returns & Payback
                    </h3>
                    <div className="grid grid-cols-3 gap-3 text-center text-xs">
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                        <span className="text-slate-500 block text-[11px]">Monthly Bill Relief</span>
                        <strong className="text-sm sm:text-base text-slate-900 block mt-1 font-mono">{formatCurrency(current.monthlySavings)}</strong>
                      </div>
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                        <span className="text-slate-500 block text-[11px]">Year 1 Net Savings</span>
                        <strong className="text-sm sm:text-base text-slate-900 block mt-1 font-mono">{formatCurrency(current.annualSavings)}</strong>
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                        <span className="text-emerald-800 block text-[11px]">25-Yr Cumulative Savings</span>
                        <strong className="text-sm sm:text-base text-emerald-900 block mt-1 font-mono">{formatCurrency(current.annualSavings * 25)}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Warranties & Grid Standards */}
                  <div className="space-y-2 text-xs text-slate-600 bg-stone-50 p-4 rounded-xl border border-stone-200">
                    <h4 className="font-bold text-slate-900 font-mono uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-solar-500"></span>
                      3. Turnkey Scope & Technical Guarantee
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>30-Year Linear Power Degradation Warranty</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>12-Year Equipment Inverter & BOS Guarantee</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>5-Year Comprehensive Free O&M Included</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>TSSPDCL / TSNPDCL Net-Metering Sync</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>80-Micron Hot-Dip Galvanized Mounting</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>150 km/h Wind Speed Structural Certification</span>
                      </li>
                    </ul>
                  </div>

                  {/* Footer Signoff */}
                  <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500 font-mono">
                    <div>
                      <span className="block font-bold text-slate-800">Meghvi Solar Engineering Division</span>
                      <span className="block text-[11px]">Approved for PM Surya Ghar National Subsidy Portal</span>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="block">Direct Support: +91 97000 02812</span>
                      <span className="block text-[11px]">Email: meghvisolar@gmail.com</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer (Hidden in Print) */}
                <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 flex flex-wrap items-center justify-between gap-3 shrink-0 no-print">
                  <div className="text-xs text-slate-500 hidden sm:block">
                    Need a custom 3D shadow analysis? Speak to our Hyderabad engineering team.
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setShowPrintModal(false)}
                      className="btn-secondary text-xs py-2 px-3.5 flex-1 sm:flex-none justify-center cursor-pointer"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={openPrintWindow}
                      className="btn-stone text-xs font-bold py-2 px-3.5 flex-1 sm:flex-none justify-center flex items-center gap-1.5 shadow-xs cursor-pointer"
                      title="Open in new window"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>New Tab</span>
                    </button>
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="btn-amber text-xs font-bold py-2 px-4 flex-1 sm:flex-none justify-center flex items-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Quotation</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Header bar with Solar Panel Background */}
      <div className="relative bg-slate-900 text-white p-6 sm:p-8 border-b border-slate-800 overflow-hidden">
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
