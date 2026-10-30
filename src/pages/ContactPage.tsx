import React from 'react';
import { motion } from 'framer-motion';
import { ConsultationForm } from '../components/ConsultationForm';
import { ScrollReveal } from '../components/motion/MotionWrapper';
import { COMPANY_DETAILS } from '../data/solarData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, MessageSquare, ArrowRight, Zap, CheckCircle2, ExternalLink } from 'lucide-react';

interface Props {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 overflow-x-hidden">
      
      {/* High-Impact Architectural Banner */}
      <section className="relative bg-slate-950 text-white py-20 sm:py-32 border-b border-slate-800 overflow-hidden">
        {/* Full-bleed Vivid Architectural Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/commercial_industrial_solar_rooftop.jpg"
            alt="Meghvi Solar Engineering Campus and Operations"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/50 to-slate-950/25" />
          <div className="absolute inset-0 bg-radial from-transparent via-slate-950/40 to-slate-950/85 pointer-events-none" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-solar-400 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-solar-500/30 font-semibold shadow-lg">
              <MessageSquare className="w-3.5 h-3.5" />
              Direct Engineering Consultation Desk
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Connect with Our Solar Engineering Team
            </h1>

            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
              Have questions about system sizing, TSSPDCL feasibility, or PM Surya Ghar subsidies? We are based in Chandanagar, Hyderabad and ready to assist you.
            </p>

            {/* Quick Status Chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3 text-xs font-mono">
              <span className="bg-slate-900/90 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-md text-emerald-400 flex items-center gap-1.5 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Hyderabad HQ Open Mon–Sat 9am–7pm
              </span>
              <span className="bg-slate-900/90 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-md text-solar-300 flex items-center gap-1.5 shadow-xs">
                <Zap className="w-3.5 h-3.5" />
                Rapid 2-Hour Response Time
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-20 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Column */}
            <ScrollReveal direction="right" className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xs space-y-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-solar-700 font-bold block mb-1">
                    Hyderabad Headquarters
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">
                    Meghvi Solar Energy Solutions
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-solar-100 text-solar-800 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-mono">Registered Office</span>
                      <p className="font-medium mt-0.5 leading-relaxed font-mono text-xs">
                        {COMPANY_DETAILS.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-mono">Technical Dispatch & Enquiries</span>
                      <p className="font-bold text-slate-900 mt-0.5 font-mono text-xs">
                        {COMPANY_DETAILS.phone1} / {COMPANY_DETAILS.phone2}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-mono">Email Communication</span>
                      <p className="font-semibold text-slate-900 mt-0.5 font-mono text-xs">
                        {COMPANY_DETAILS.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-stone-100 text-slate-800 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-mono">Operations Hours</span>
                      <p className="font-medium text-slate-800 mt-0.5 text-xs">
                        Monday – Saturday: 9:00 AM – 7:00 PM <br />
                        Sunday: Site Visits by Prior Appointment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-slate-600">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Serving Entire Telangana State</span>
                  </div>
                  <p className="text-slate-500 text-xs">
                    Hyderabad Urban, Cyberabad, Secunderabad, Medchal-Malkajgiri, Rangareddy, Sangareddy, Warangal, and Karimnagar.
                  </p>
                </div>
              </div>

            </ScrollReveal>

            {/* Form Column */}
            <ScrollReveal direction="left" className="lg:col-span-7">
              <ConsultationForm
                title="Send a Direct Technical Enquiry"
                subtitle="Fill out your rooftop details below. Our senior engineering manager will get in touch with you directly."
              />
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* Interactive Google Maps Embedding Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-solar-700 font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-solar-500" />
                  Engineering Headquarters Map
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Locate Our Hyderabad Central Office in Chandanagar
                </h3>
              </div>
              <a
                href="https://maps.google.com/?q=Chandanagar%2C%20Hyderabad%2C%20Telangana%20500050"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-xl text-xs font-semibold text-slate-800 transition-colors w-fit shadow-2xs"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden border border-stone-300 shadow-xl bg-stone-100 relative">
              <iframe
                title="Meghvi Solar Energy Solutions Chandanagar Hyderabad Headquarters"
                src="https://maps.google.com/maps?q=Chandanagar%2C%20Hyderabad%2C%20Telangana%20500050&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-80 sm:h-96"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};
