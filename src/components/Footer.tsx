import React from 'react';
import { COMPANY_DETAILS } from '../data/solarData';
import { Phone, Mail, MapPin, ShieldCheck, Sun, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<Props> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 overflow-hidden">
      {/* Photovoltaic Solar Panel Array Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/assets/commercial_industrial_solar_rooftop.jpg"
          alt="Photovoltaic Solar Panel Array Background"
          className="w-full h-full object-cover object-center filter brightness-[0.40] contrast-125 saturate-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/95" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 flex items-center">
                <img
                  src="/assets/Logo-6-e1778049478712.png"
                  alt="Meghvi Solar Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <span className="block text-base font-bold text-white tracking-tight">Meghvi Solar</span>
                <span className="block text-xs text-solar-400 font-mono">Energy, Engineered Beautifully</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Empanelled Solar EPC specialized in high-efficiency rooftop photovoltaic plants, residential net-metering, commercial solar micro-grids, and PM Surya Ghar government subsidy processing.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5" /> MNRE Empanelled
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-solar-400 font-mono">
                <Sun className="w-3.5 h-3.5" /> TSSPDCL Ready
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Solar Solutions
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="/residential"
                  onClick={(e) => { e.preventDefault(); onNavigate('/residential'); }}
                  className="hover:text-solar-400 transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Residential Rooftop Solar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/commercial"
                  onClick={(e) => { e.preventDefault(); onNavigate('/commercial'); }}
                  className="hover:text-solar-400 transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Commercial & Industrial Solar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/housing-societies"
                  onClick={(e) => { e.preventDefault(); onNavigate('/housing-societies'); }}
                  className="hover:text-solar-400 transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Apartments & Housing Societies</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/pm-surya-ghar"
                  onClick={(e) => { e.preventDefault(); onNavigate('/pm-surya-ghar'); }}
                  className="hover:text-solar-400 transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>PM Surya Ghar: Muft Bijli Yojana</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/pm-kusum"
                  onClick={(e) => { e.preventDefault(); onNavigate('/pm-kusum'); }}
                  className="hover:text-solar-400 transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>PM-KUSUM Agri-Solar Scheme</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/calculator"
                  onClick={(e) => { e.preventDefault(); onNavigate('/calculator'); }}
                  className="hover:text-solar-400 transition-colors text-left flex items-center justify-between w-full group text-solar-400 font-semibold"
                >
                  <span>Solar Savings & EMI Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-100" />
                </a>
              </li>
            </ul>
          </div>

          {/* Office & Headquarters */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Hyderabad Engineering Headquarters
            </h4>

            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-solar-500 shrink-0 mt-1" />
                <address className="not-italic text-slate-300 leading-snug">
                  {COMPANY_DETAILS.address}
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-solar-500 shrink-0" />
                <div className="space-x-3">
                  <a href={`tel:${COMPANY_DETAILS.phone1.replace(/\s+/g, '')}`} className="text-white hover:text-solar-400 font-mono">
                    {COMPANY_DETAILS.phone1}
                  </a>
                  <span>/</span>
                  <a href={`tel:${COMPANY_DETAILS.phone2.replace(/\s+/g, '')}`} className="text-white hover:text-solar-400 font-mono">
                    {COMPANY_DETAILS.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-solar-500 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-white hover:text-solar-400 font-mono">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>

            {/* Operating Regions */}
            <div className="pt-3 border-t border-slate-900">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block mb-2">
                Operational Coverage & Engineering Dispatch:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {COMPANY_DETAILS.statesSupported.map((st) => (
                  <span
                    key={st}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-slate-900 text-slate-400 border border-slate-800"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_DETAILS.legalName}. All rights reserved. Precision Solar EPC Engineering.</p>
          <div className="flex items-center gap-6">
            <span>TSSPDCL / TSNPDCL Net-Metering Ready</span>
            <span>MNRE Tier-1 Modules</span>
            <span>Zero-Damage Roof Fasteners</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
