import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sun, Compass, Zap, Shield, ArrowRight, Gauge, Sliders } from 'lucide-react';
import { ScrollReveal } from './motion/MotionWrapper';

export const SolarRoofSimulator: React.FC<{ onNavigate?: (path: string) => void }> = ({ onNavigate }) => {
  const [tiltAngle, setTiltAngle] = useState<number>(18); // Hyderabad optimal is ~17-18 deg South
  const [orientation, setOrientation] = useState<'South' | 'South-West' | 'West' | 'East'>('South');
  const [systemSize, setSystemSize] = useState<number>(5); // 5 kW default
  const [roofType, setRoofType] = useState<'RCC Flat Roof' | 'Elevated Pergola' | 'Sloped Metal Shed'>('Elevated Pergola');

  // Hyderabad solar physics calculations
  const simulation = useMemo(() => {
    // Hyderabad latitude is ~17.38° N. Optimal annual tilt is ~17.5°.
    // Tilt deviation penalty
    const optimalTilt = 17.5;
    const tiltDiff = Math.abs(tiltAngle - optimalTilt);
    const tiltEfficiency = Math.max(0.82, 1 - (tiltDiff * 0.008));

    // Orientation multiplier
    const orientationEfficiency = {
      'South': 1.0,
      'South-West': 0.96,
      'West': 0.89,
      'East': 0.91,
    }[orientation];

    // Total solar irradiance efficiency factor
    const totalEfficiency = tiltEfficiency * orientationEfficiency;

    // Daily and annual generation in Hyderabad (Avg 4.4 - 5.0 peak sun hours/day)
    const dailyUnits = Number((systemSize * 4.6 * totalEfficiency).toFixed(1));
    const annualUnits = Math.round(dailyUnits * 365);
    const annualSavings = Math.round(annualUnits * 7.45); // Avg TSSPDCL slab tariff ₹7.45/unit
    const spaceRequired = systemSize * 90; // ~90 sq.ft per kW for 550W TopCon panels

    return {
      efficiencyPercent: Math.round(totalEfficiency * 100),
      dailyUnits,
      annualUnits,
      annualSavings,
      spaceRequired,
      isOptimal: tiltDiff <= 3 && orientation === 'South'
    };
  }, [tiltAngle, orientation, systemSize]);

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 my-12">
      {/* Header */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-solar-700 bg-solar-50 px-2.5 py-1 rounded-md border border-solar-200 mb-3 font-semibold">
          <Sliders className="w-3.5 h-3.5" />
          Hyderabad Solar Geometry Engine
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Interactive Rooftop Solar & Sun-Path Simulator
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          Simulate panel tilt angles, azimuth orientations, and structural mounting for Hyderabad coordinates (17.3850° N, 78.4867° E) to measure live irradiation capture and TSSPDCL net-meter generation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Structural Type Selector */}
          <div>
            <label className="block text-xs uppercase font-mono tracking-wider text-slate-500 font-semibold mb-2">
              1. Rooftop Structure Archetype
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['RCC Flat Roof', 'Elevated Pergola', 'Sloped Metal Shed'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setRoofType(type)}
                  className={`py-2 px-2.5 text-center text-xs font-semibold rounded-xl border transition-all ${
                    roofType === type
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 text-slate-700 border-stone-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* System Capacity Selector */}
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="uppercase font-mono tracking-wider text-slate-500 font-semibold">
                2. Sizing Capacity: <strong className="text-slate-950 font-bold font-sans">{systemSize} kW Array</strong>
              </span>
              <span className="text-slate-500 font-mono text-xs">
                Need ~{simulation.spaceRequired} sq.ft
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[3, 5, 8, 10].map((kw) => (
                <button
                  key={kw}
                  type="button"
                  onClick={() => setSystemSize(kw)}
                  className={`py-2 text-center text-xs font-bold rounded-xl border transition-all ${
                    systemSize === kw
                      ? 'bg-solar-500 text-slate-950 border-solar-500 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 text-slate-700 border-stone-200'
                  }`}
                >
                  {kw} kW
                </button>
              ))}
            </div>
          </div>

          {/* Tilt Angle Slider */}
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="uppercase font-mono tracking-wider text-slate-500 font-semibold">
                3. Module Inclination Tilt: <strong className="text-slate-950 font-bold font-sans">{tiltAngle}°</strong>
              </span>
              <span className={`text-xs font-mono font-medium px-2 py-0.5 rounded border ${
                simulation.isOptimal 
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                  : 'bg-stone-100 text-slate-600 border-stone-200'
              }`}>
                {simulation.isOptimal ? 'Optimal for Hyderabad (18°)' : `${Math.abs(tiltAngle - 18)}° from optimal`}
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={40}
              step={1}
              value={tiltAngle}
              onChange={(e) => setTiltAngle(Number(e.target.value))}
              aria-label="Panel Tilt Angle"
              className="w-full accent-solar-600 cursor-pointer h-2 bg-stone-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
              <span>5° (Low Rain Runoff)</span>
              <span>18° (Hyderabad Optimal)</span>
              <span>40° (High Monsoonal Tilt)</span>
            </div>
          </div>

          {/* Orientation Azimuth */}
          <div>
            <label className="block text-xs uppercase font-mono tracking-wider text-slate-500 font-semibold mb-2">
              4. Compass Azimuth Orientation
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['South', 'South-West', 'West', 'East'] as const).map((dir) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => setOrientation(dir)}
                  className={`py-2 px-2 text-center text-xs font-semibold rounded-xl border transition-all ${
                    orientation === dir
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 text-slate-700 border-stone-200'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5 mx-auto mb-1 text-solar-400" />
                  {dir}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Visual Simulation & Yield Dashboard */}
        <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-6 text-white border border-slate-800 space-y-6">
          
          {/* 2D Elevation Viewport */}
          <div className="relative h-44 bg-slate-900/90 rounded-xl border border-slate-800 overflow-hidden flex items-end justify-center p-4">
            
            {/* Sun Rays Visualizer */}
            <div className="absolute top-3 left-6 flex items-center gap-2">
              <Sun className="w-6 h-6 text-amber-400 animate-spin-slow" />
              <div className="text-left font-mono">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Sun Elevation</span>
                <span className="text-xs font-bold text-amber-300">Hyderabad Solstice Arc</span>
              </div>
            </div>

            {/* Simulated Solar Panel Tilt Plane */}
            <div className="relative w-48 h-24 flex items-end justify-center">
              {/* Roof Base */}
              <div className="w-full h-3 bg-stone-700 rounded-sm" />
              
              {/* Structural Frame Legs */}
              <div className="absolute left-8 bottom-3 w-1.5 h-14 bg-stone-400" />
              <div className="absolute right-8 bottom-3 w-1.5 h-8 bg-stone-400" />

              {/* Tilted Solar Module Plane */}
              <motion.div
                animate={{ rotate: -tiltAngle }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="absolute bottom-10 origin-bottom-left w-40 h-3 bg-solar-500 rounded-sm shadow-[0_0_15px_rgba(245,158,11,0.4)] border border-amber-300 flex items-center justify-between px-1"
              >
                <span className="text-[8px] font-mono font-bold text-slate-950 uppercase">TopCon</span>
                <span className="text-[8px] font-mono font-bold text-slate-950">{tiltAngle}°</span>
              </motion.div>
            </div>

            {/* Live Efficiency Tag */}
            <div className="absolute bottom-3 right-3 bg-slate-900/90 border border-slate-700 px-2.5 py-1 rounded text-right font-mono">
              <span className="text-[10px] text-slate-400 block">Relative Yield</span>
              <span className="text-xs font-bold text-emerald-400">{simulation.efficiencyPercent}% Irradiance</span>
            </div>
          </div>

          {/* Performance Yield Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Daily Generation</span>
              <span className="text-lg font-bold text-white font-mono tabular-nums">{simulation.dailyUnits}</span>
              <span className="text-xs text-slate-400 ml-1">kWh / day</span>
            </div>

            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Annual Yield</span>
              <span className="text-lg font-bold text-white font-mono tabular-nums">{simulation.annualUnits.toLocaleString('en-IN')}</span>
              <span className="text-xs text-slate-400 ml-1">Units/yr</span>
            </div>

            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
              <span className="text-[11px] font-mono uppercase text-solar-400 block mb-1">Annual Value</span>
              <span className="text-lg font-bold text-solar-300 font-mono tabular-nums">₹{simulation.annualSavings.toLocaleString('en-IN')}</span>
              <span className="text-xs text-slate-400 block">TSSPDCL offset</span>
            </div>
          </div>

          {/* Structural Guarantee Note */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Certified for 150 km/h Hyderabad Cyclonic Windloads</span>
            </div>
            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate('/calculator')}
                className="text-solar-400 hover:text-solar-300 font-bold inline-flex items-center gap-1 shrink-0"
              >
                <span>Calculate ROI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
