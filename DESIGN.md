---
name: Meghvi Solar Design System
description: Mineral architectural energy aesthetic. Warm ivory surfaces, deep graphite contrast, restrained solar amber accents, and precision tabular typography.

colors:
  # Brand Anchors
  solar-amber: "#F59E0B"
  solar-amber-dark: "#D97706"
  emerald-accent: "#047857"
  
  # Surfaces
  ivory-base: "#FCFCF9"
  ivory-surface: "#F7F7F2"
  white-elevated: "#FFFFFF"
  obsidian-ground: "#0B0F17"
  obsidian-panel: "#0F172A"

  # Typography
  text-slate-950: "#020617"
  text-slate-800: "#1E293B"
  text-slate-600: "#475569"
  text-slate-400: "#94A3B8"

typography:
  primary: "Manrope, Plus Jakarta Sans, system-ui, sans-serif"
  mono: "JetBrains Mono, ui-monospace, monospace"
---

# Meghvi Solar Visual System

## 1. Core Surfaces & Elevation
- Base ground: Mineral ivory `#FCFCF9`.
- Elevated cards: Pure white `#FFFFFF` with hairline border `border-stone-200/90`.
- Dark sections: Deep obsidian slate `#0F172A` and `#0B0F17` for technical credibility.
- Button highlights: Inset top specular light `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]`.

## 2. Interaction & Physics
- Push tactile feedback: `active:scale-[0.98]` on all buttons and cards.
- Timing: `duration-150 ease-out` for snappy state transitions.
- Focus: `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-solar-500`.

## 3. High Information Density
- All currency and kW values use `tabular-nums` and monospace styling where appropriate.
- Sizing tables and loan comparators prioritize clarity over decorative padding.
