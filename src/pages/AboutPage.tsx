import React from 'react';
import { motion } from 'framer-motion';
import { PartnerStrip } from '../components/PartnerStrip';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/motion/MotionWrapper';
import { COMPANY_DETAILS } from '../data/solarData';
import { 
  Building2, ShieldCheck, Sun, CheckCircle2, ArrowRight, Award, MapPin, Phone, Mail, Wrench, Activity 
} from 'lucide-react';

interface Props {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 overflow-x-hidden">
      
      {/* Hero Header with Full-Bleed Engineering Background Image */}
      <section className="relative bg-slate-950 text-white py-20 sm:py-28 border-b border-slate-800 overflow-hidden">
        {/* Full-bleed Architectural Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/about-5.jpg"
            alt="Meghvi Solar Engineering Team in Hyderabad"
            className="w-full h-full object-cover object-center filter brightness-[0.48] contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/75 to-slate-950/45" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-solar-400 bg-solar-500/10 px-2.5 py-1 rounded-md border border-solar-500/30 font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              About Meghvi Solar
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Energy, Engineered with Precision & Integrity
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Meghvi Solar is a premier Solar EPC firm headquartered in Chandanagar, Hyderabad. We specialize in precision rooftop photovoltaic systems for residences, commercial campuses, and housing societies across Telangana and South India.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Philosophy & Craft */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal direction="right" className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-solar-700 font-bold block">
                Engineering Discipline
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                Why We Built Meghvi Solar Differently
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Solar installations are expected to generate clean electricity reliably for 25 to 30 years. Unfortunately, many market providers deploy uncertified sub-tier modules, low-grade MS mounting that rusts in monsoons, and leave customers stranded when dealing with DISCOM bureaucracy.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                At Meghvi Solar, we treat every terrace as a specialized structural and electrical project. From 3D drone shadow profiling to hot-dip galvanized mounting and complete DISCOM net-meter commissioning, we maintain accountability for every unit of energy generated.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-3 font-mono text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 shadow-2xs">
                  <span className="text-slate-500 block text-xs">Standards</span>
                  <span className="font-bold text-slate-900">MNRE & IEC Compliant</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 shadow-2xs">
                  <span className="text-slate-500 block text-xs">Turnkey EPC</span>
                  <span className="font-bold text-slate-900">100% In-House Engineers</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md group">
                <img
                  src="/assets/about-5.jpg"
                  alt="Solar engineering technicians at work"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md group">
                <img
                  src="/assets/about-6.jpg"
                  alt="Solar array verification in Hyderabad"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 5-YEAR SMART MONITORING & TELEMETRY SUITE */}
      <section className="py-16 bg-ivory-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-mono tracking-wider text-solar-700 font-bold block mb-1">
                Active Telemetry
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                5-Year Comprehensive Smart Monitoring
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Every kilowatt produced by your solar plant is monitored in real-time by our Hyderabad engineering center.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            <StaggerItem className="bg-white p-5 rounded-2xl border border-stone-200 text-center shadow-xs">
              <img src="/assets/5-Years-Smart-Monitoring-10.png" alt="Generation Tracking" className="h-12 w-auto mx-auto mb-2 object-contain" />
              <h3 className="text-xs font-bold text-slate-900">Real-Time Yield</h3>
              <p className="text-xs text-slate-500 mt-1">Live daily generation stats via mobile app</p>
            </StaggerItem>

            <StaggerItem className="bg-white p-5 rounded-2xl border border-stone-200 text-center shadow-xs">
              <img src="/assets/5-Years-Smart-Monitoring-11.png" alt="Inverter Health" className="h-12 w-auto mx-auto mb-2 object-contain" />
              <h3 className="text-xs font-bold text-slate-900">Inverter Health</h3>
              <p className="text-xs text-slate-500 mt-1">String voltage & MPPT efficiency curves</p>
            </StaggerItem>

            <StaggerItem className="bg-white p-5 rounded-2xl border border-stone-200 text-center shadow-xs">
              <img src="/assets/5-Years-Smart-Monitoring-12.png" alt="Fault Alerts" className="h-12 w-auto mx-auto mb-2 object-contain" />
              <h3 className="text-xs font-bold text-slate-900">Instant Alerts</h3>
              <p className="text-xs text-slate-500 mt-1">Automated grid outage & trip notifications</p>
            </StaggerItem>

            <StaggerItem className="bg-white p-5 rounded-2xl border border-stone-200 text-center shadow-xs">
              <img src="/assets/5-Years-Smart-Monitoring-13.png" alt="Net Meter Logs" className="h-12 w-auto mx-auto mb-2 object-contain" />
              <h3 className="text-xs font-bold text-slate-900">Net Meter Logs</h3>
              <p className="text-xs text-slate-500 mt-1">Exported vs imported grid energy balancing</p>
            </StaggerItem>

            <StaggerItem className="bg-white p-5 rounded-2xl border border-stone-200 text-center shadow-xs col-span-2 sm:col-span-1">
              <img src="/assets/5-Years-Smart-Monitoring-14.png" alt="5 Years Guarantee" className="h-12 w-auto mx-auto mb-2 object-contain" />
              <h3 className="text-xs font-bold text-slate-900">5-Yr O&M Free</h3>
              <p className="text-xs text-slate-500 mt-1">Preventive panel cleanings & diagnostics</p>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

      {/* Hyderabad Headquarters Details */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-stone-200 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-solar-100 text-solar-800 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Headquarters</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-mono">
                {COMPANY_DETAILS.address}
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Direct Engineering Line</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-mono">
                {COMPANY_DETAILS.phone1} / {COMPANY_DETAILS.phone2}
              </p>
              <span className="text-xs text-emerald-700 block font-semibold">Available Mon – Sat, 9:00 AM – 7:00 PM</span>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Email Enquiries</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-mono">
                {COMPANY_DETAILS.email}
              </p>
              <span className="text-xs text-slate-500 block">Response within 2 business hours</span>
            </div>
          </div>

        </div>
      </section>

      <PartnerStrip />

    </div>
  );
};
