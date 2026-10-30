import React from 'react';
import { motion } from 'framer-motion';
import { PARTNER_BRANDS, CLIENT_LOGOS } from '../data/solarData';
import { ScrollReveal, StaggerContainer, StaggerItem } from './motion/MotionWrapper';
import { ShieldCheck, Award } from 'lucide-react';

export const PartnerStrip: React.FC = () => {
  // Brand optical scaling helper to guarantee uniform visual weight
  const getBrandScaleClass = (name: string) => {
    switch (name) {
      case 'Havells':
        return 'scale-[1.32] sm:scale-[1.38]';
      case 'Sungrow':
        return 'scale-[1.25] sm:scale-[1.3]';
      case 'Microtek':
        return 'scale-[1.2] sm:scale-[1.25]';
      case 'Schneider Electric':
        return 'scale-[1.12] sm:scale-[1.18]';
      case 'Polycab':
        return 'scale-[1.08]';
      case 'Tata Power Solar':
        return 'scale-[1.05]';
      default:
        return 'scale-100';
    }
  };

  return (
    <section className="py-14 bg-white border-y border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Tier-1 Brands Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
              <Award className="w-4 h-4 text-solar-500" />
              Verified Tier-1 Supply Chain
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Engineered Exclusively With Globally Certified Components
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              We never deploy unbranded or uncertified B-grade modules. Every panel carries MNRE ALMM listing and verifiable barcodes.
            </p>
          </div>
        </ScrollReveal>

        {/* Equipment Brands Grid with Synchronized Left-to-Right Rhythmic Wave */}
        <StaggerContainer staggerDelay={0.04} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 items-center justify-items-center">
          {PARTNER_BRANDS.map((b, idx) => {
            // Column-based rhythm: left-to-right wave across the 6 columns
            const colIndex = idx % 6;
            const waveDelay = colIndex * 0.36;

            return (
              <StaggerItem key={b.name} className="w-full">
                <motion.div
                  whileHover={{ y: -4, scale: 1.04 }}
                  animate={{
                    borderColor: [
                      'rgba(226, 232, 240, 0.85)',
                      'rgba(245, 158, 11, 0.75)',
                      'rgba(226, 232, 240, 0.85)'
                    ],
                    backgroundColor: [
                      '#fafaf9',
                      '#ffffff',
                      '#fafaf9'
                    ],
                    boxShadow: [
                      '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
                      '0 8px 24px -4px rgba(245, 158, 11, 0.18)',
                      '0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                    ]
                  }}
                  transition={{
                    duration: 3.0,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: waveDelay
                  }}
                  className="w-full h-24 sm:h-28 rounded-2xl border p-3 flex flex-col items-center justify-center transition-all group cursor-default relative overflow-hidden"
                >
                  <div className="h-12 sm:h-14 w-full flex items-center justify-center overflow-visible">
                    <motion.img
                      src={b.logo}
                      alt={`${b.name} Solar Components`}
                      className={`max-h-10 sm:max-h-12 w-auto max-w-[88%] object-contain transition-transform origin-center ${getBrandScaleClass(b.name)}`}
                      animate={{
                        filter: [
                          'grayscale(85%) opacity(0.68)',
                          'grayscale(0%) opacity(1)',
                          'grayscale(85%) opacity(0.68)'
                        ],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 3.0,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: waveDelay
                      }}
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] text-slate-500 group-hover:text-slate-900 mt-1 font-mono tracking-tight text-center transition-colors font-medium truncate w-full">
                    {b.name}
                  </span>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Industrial & Commercial Clients Strip with Smooth Continuous Marquee */}
        <div className="mt-12 pt-8 border-t border-stone-100">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-slate-500 font-semibold">
                  Commercial & Institutional Deployments
                </span>
                <h3 className="text-sm font-bold text-slate-800">
                  Trusted by Telangana Hospitality, Logistics & Manufacturing Leaders
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                Over 2.5+ MW Industrial EPC Installed
              </div>
            </div>
          </ScrollReveal>

          {/* Marquee Track with Edge Gradients and Pause-on-Hover */}
          <div className="relative overflow-hidden w-full py-2">
            {/* Left & Right gradient masks for smooth fade */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <motion.div 
              className="flex items-center gap-4 w-max cursor-default"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                ease: 'linear',
                duration: 26,
                repeat: Infinity,
              }}
            >
              {/* Duplicate array 3 times for seamless infinite scroll across all resolutions */}
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, idx) => (
                <div
                  key={`${c.name}-${idx}`}
                  className="w-44 sm:w-48 h-18 bg-stone-50 hover:bg-white rounded-2xl border border-stone-200/90 p-3.5 flex items-center justify-center hover:border-solar-400 hover:shadow-md transition-all shrink-0 group cursor-default"
                >
                  <img
                    src={c.logo}
                    alt={`${c.name} Client Project`}
                    className="max-h-9 max-w-[85%] object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
