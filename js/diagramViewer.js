/**
 * High-Fidelity Interactive SVG Diagram Engine for ICSE Class 7 Explainer
 * Clean White/Light styling, precise geometric alignment, interactive hotspots & callouts.
 */

export const DIAGRAM_RENDERERS = {
  densityCylinder: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="waterGrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#93c5fd" stop-opacity="0.75"/>
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.85"/>
        </linearGradient>
        <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#f8fafc" stop-opacity="0.9"/>
          <stop offset="20%" stop-color="#ffffff" stop-opacity="0.4"/>
          <stop offset="80%" stop-color="#e2e8f0" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#cbd5e1" stop-opacity="0.8"/>
        </linearGradient>
        <filter id="subtleDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.08"/>
        </filter>
      </defs>

      <!-- Grid Background -->
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>
      
      <!-- Stage 1: Initial State -->
      <g transform="translate(70, 40)">
        <text x="75" y="25" text-anchor="middle" class="text-xs font-bold fill-slate-700">Initial Level (V₁ = 40 mL)</text>
        <!-- Cylinder base -->
        <rect x="30" y="320" width="90" height="14" rx="4" fill="#64748b"/>
        <!-- Glass body -->
        <rect x="40" y="50" width="70" height="270" rx="6" fill="url(#glassGrad)" stroke="#64748b" stroke-width="2.5"/>
        <!-- Water Column -->
        <rect x="42" y="190" width="66" height="128" fill="url(#waterGrad1)" rx="2"/>
        <ellipse cx="75" cy="190" rx="33" ry="5" fill="#60a5fa"/>
        
        <!-- Tick marks -->
        <line x1="100" y1="190" x2="110" y2="190" stroke="#1e293b" stroke-width="2"/>
        <text x="120" y="194" class="text-[11px] font-mono font-semibold fill-blue-800">40 mL</text>
        <line x1="102" y1="130" x2="110" y2="130" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="120" y="134" class="text-[10px] font-mono fill-slate-400">70 mL</text>
        <line x1="102" y1="70" x2="110" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="120" y="74" class="text-[10px] font-mono fill-slate-400">100 mL</text>
      </g>

      <!-- Transfer Arrow -->
      <g transform="translate(250, 180)">
        <path d="M10 20 L55 20 M45 10 L60 20 L45 30" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="35" y="0" text-anchor="middle" class="text-[11px] font-bold fill-blue-700">Immerse Stone (120g)</text>
      </g>

      <!-- Stage 2: Final State with Stone Submerged -->
      <g transform="translate(360, 40)">
        <text x="75" y="25" text-anchor="middle" class="text-xs font-bold fill-slate-700">Final Level (V₂ = 70 mL)</text>
        <!-- Cylinder base -->
        <rect x="30" y="320" width="90" height="14" rx="4" fill="#64748b"/>
        <!-- Glass body -->
        <rect x="40" y="50" width="70" height="270" rx="6" fill="url(#glassGrad)" stroke="#64748b" stroke-width="2.5"/>
        <!-- Water Column Raised -->
        <rect x="42" y="130" width="66" height="188" fill="url(#waterGrad1)" rx="2"/>
        <ellipse cx="75" cy="130" rx="33" ry="5" fill="#60a5fa"/>
        
        <!-- Suspension Thread -->
        <line x1="75" y1="20" x2="75" y2="255" stroke="#475569" stroke-dasharray="3,3" stroke-width="1.5"/>
        
        <!-- Submerged Stone -->
        <path d="M60 250 Q65 240 78 242 Q92 248 88 265 Q85 280 72 278 Q58 275 60 250 Z" fill="#64748b" stroke="#334155" stroke-width="2" filter="url(#subtleDrop)"/>
        <text x="75" y="263" text-anchor="middle" class="text-[10px] font-bold fill-white">Solid</text>

        <!-- Tick marks -->
        <line x1="100" y1="130" x2="110" y2="130" stroke="#1e293b" stroke-width="2"/>
        <text x="120" y="134" class="text-[11px] font-mono font-semibold fill-blue-800">70 mL</text>
        <line x1="102" y1="190" x2="110" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="120" y="194" class="text-[10px] font-mono fill-slate-400">40 mL</text>
      </g>

      <!-- Bottom Formula Summary Banner -->
      <g transform="translate(50, 375)">
        <rect width="500" height="34" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="250" y="22" text-anchor="middle" class="text-xs font-semibold fill-slate-800">
          Displaced Volume = V₂ - V₁ = 70 - 40 = 30 cm³ &nbsp;|&nbsp; Density = 120g / 30cm³ = <tspan fill="#2563eb" font-weight="bold">4.0 g/cm³</tspan>
        </text>
      </g>
    </svg>
  `,

  simplePendulum: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bobGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#fbbf24"/>
          <stop offset="70%" stop-color="#d97706"/>
          <stop offset="100%" stop-color="#92400e"/>
        </radialGradient>
      </defs>
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <!-- Rigid Ceiling Support -->
      <rect x="200" y="25" width="200" height="14" fill="#475569" rx="3"/>
      <!-- Hatching lines on ceiling -->
      <path d="M210 25 L220 15 M235 25 L245 15 M260 25 L270 15 M285 25 L295 15 M310 25 L320 15 M335 25 L345 15 M360 25 L370 15 M385 25 L395 15" stroke="#64748b" stroke-width="2"/>
      
      <!-- Suspension Point S -->
      <circle cx="300" cy="39" r="5" fill="#0f172a"/>
      <text x="300" y="18" text-anchor="middle" class="text-[11px] font-bold fill-slate-700">Point of Suspension (S)</text>

      <!-- Oscillation Arc -->
      <path d="M150 250 Q300 290 450 250" fill="none" stroke="#cbd5e1" stroke-dasharray="4,4" stroke-width="2"/>

      <!-- Left Extreme Position A -->
      <line x1="300" y1="39" x2="160" y2="245" stroke="#94a3b8" stroke-dasharray="3,3" stroke-width="1.5"/>
      <circle cx="160" cy="245" r="18" fill="url(#bobGrad)" opacity="0.6" stroke="#b45309" stroke-width="1.5"/>
      <text x="160" y="250" text-anchor="middle" class="text-xs font-bold fill-white">A</text>
      <text x="160" y="280" text-anchor="middle" class="text-[11px] font-semibold fill-slate-600">Left Extreme (v = 0)</text>

      <!-- Right Extreme Position B -->
      <line x1="300" y1="39" x2="440" y2="245" stroke="#94a3b8" stroke-dasharray="3,3" stroke-width="1.5"/>
      <circle cx="440" cy="245" r="18" fill="url(#bobGrad)" opacity="0.6" stroke="#b45309" stroke-width="1.5"/>
      <text x="440" y="250" text-anchor="middle" class="text-xs font-bold fill-white">B</text>
      <text x="440" y="280" text-anchor="middle" class="text-[11px] font-semibold fill-slate-600">Right Extreme (v = 0)</text>

      <!-- Equilibrium / Mean Position O (Solid) -->
      <line x1="300" y1="39" x2="300" y2="270" stroke="#0f172a" stroke-width="2.5"/>
      <circle cx="300" cy="270" r="22" fill="url(#bobGrad)" stroke="#78350f" stroke-width="2"/>
      <text x="300" y="276" text-anchor="middle" class="text-sm font-bold fill-white">O</text>
      <text x="300" y="312" text-anchor="middle" class="text-xs font-bold fill-blue-700">Mean Position (Max Kinetic Energy)</text>

      <!-- Amplitude Indicator -->
      <line x1="300" y1="340" x2="440" y2="340" stroke="#2563eb" stroke-width="2"/>
      <polygon points="440,340 432,336 432,344" fill="#2563eb"/>
      <polygon points="300,340 308,336 308,344" fill="#2563eb"/>
      <text x="370" y="358" text-anchor="middle" class="text-[11px] font-bold fill-blue-700">Amplitude (a)</text>

      <!-- Time period rule -->
      <rect x="60" y="375" width="480" height="32" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
      <text x="300" y="396" text-anchor="middle" class="text-[11px] font-semibold fill-slate-700">
        One Complete Oscillation: <tspan font-weight="bold" fill="#0f172a">O → A → O → B → O</tspan> &nbsp;|&nbsp; Time Period: <tspan font-weight="bold" fill="#2563eb">T = t / n</tspan>
      </text>
    </svg>
  `,

  reflectionRayDiagram: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="rayArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
        </marker>
        <marker id="reflArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
        </marker>
      </defs>
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <!-- Plane Mirror -->
      <rect x="80" y="270" width="440" height="12" fill="#cbd5e1" stroke="#475569" stroke-width="2" rx="2"/>
      <!-- Mirror silvered backing hatch marks -->
      <g stroke="#94a3b8" stroke-width="1.5">
        <line x1="90" y1="282" x2="80" y2="295"/>
        <line x1="120" y1="282" x2="110" y2="295"/>
        <line x1="150" y1="282" x2="140" y2="295"/>
        <line x1="180" y1="282" x2="170" y2="295"/>
        <line x1="210" y1="282" x2="200" y2="295"/>
        <line x1="240" y1="282" x2="230" y2="295"/>
        <line x1="270" y1="282" x2="260" y2="295"/>
        <line x1="300" y1="282" x2="290" y2="295"/>
        <line x1="330" y1="282" x2="320" y2="295"/>
        <line x1="360" y1="282" x2="350" y2="295"/>
        <line x1="390" y1="282" x2="380" y2="295"/>
        <line x1="420" y1="282" x2="410" y2="295"/>
        <line x1="450" y1="282" x2="440" y2="295"/>
        <line x1="480" y1="282" x2="470" y2="295"/>
        <line x1="510" y1="282" x2="500" y2="295"/>
      </g>
      <text x="530" y="278" class="text-xs font-bold fill-slate-700">Plane Mirror (M M')</text>

      <!-- Point of Incidence O -->
      <circle cx="300" cy="270" r="5" fill="#0f172a"/>
      <text x="300" y="295" text-anchor="middle" class="text-xs font-bold fill-slate-900">O (Point of Incidence)</text>

      <!-- Normal ON -->
      <line x1="300" y1="50" x2="300" y2="270" stroke="#047857" stroke-width="2.5" stroke-dasharray="6,4"/>
      <text x="308" y="65" class="text-xs font-bold fill-emerald-800">Normal (N)</text>
      <!-- Right angle symbol -->
      <path d="M 285 270 L 285 255 L 300 255" fill="none" stroke="#047857" stroke-width="1.5"/>

      <!-- Incident Ray AO -->
      <line x1="120" y1="80" x2="215" y2="180" stroke="#2563eb" stroke-width="3" marker-end="url(#rayArrow)"/>
      <line x1="215" y1="180" x2="300" y2="270" stroke="#2563eb" stroke-width="3"/>
      <circle cx="120" cy="80" r="4" fill="#2563eb"/>
      <text x="105" y="75" class="text-xs font-bold fill-blue-700">A (Incident Ray)</text>

      <!-- Reflected Ray OB -->
      <line x1="300" y1="270" x2="395" y2="170" stroke="#dc2626" stroke-width="3" marker-end="url(#reflArrow)"/>
      <line x1="395" y1="170" x2="480" y2="80" stroke="#dc2626" stroke-width="3"/>
      <circle cx="480" cy="80" r="4" fill="#dc2626"/>
      <text x="490" y="75" class="text-xs font-bold fill-red-700">B (Reflected Ray)</text>

      <!-- Angle Arcs -->
      <!-- Angle of Incidence i -->
      <path d="M 255 220 A 70 70 0 0 1 300 200" fill="none" stroke="#2563eb" stroke-width="2"/>
      <text x="268" y="195" class="text-xs font-bold fill-blue-700">∠i</text>

      <!-- Angle of Reflection r -->
      <path d="M 300 200 A 70 70 0 0 1 345 220" fill="none" stroke="#dc2626" stroke-width="2"/>
      <text x="325" y="195" class="text-xs font-bold fill-red-700">∠r</text>

      <!-- Law Summary Card -->
      <rect x="60" y="340" width="480" height="60" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="300" y="362" text-anchor="middle" class="text-xs font-bold fill-slate-800">1st Law: Angle of Incidence (∠i) = Angle of Reflection (∠r)</text>
      <text x="300" y="385" text-anchor="middle" class="text-[11px] font-semibold fill-slate-600">2nd Law: Incident ray, Normal, and Reflected ray all lie in the same plane</text>
    </svg>
  `,

  electricCircuit: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <!-- Circuit Loop Outline -->
      <rect x="100" y="80" width="400" height="240" fill="none" stroke="#334155" stroke-width="3" rx="16"/>

      <!-- 1. DC Cell / Battery Top -->
      <rect x="250" y="65" width="100" height="30" fill="#f8fafc"/>
      <!-- Long thin (+) plate -->
      <line x1="285" y1="65" x2="285" y2="95" stroke="#0f172a" stroke-width="3"/>
      <!-- Short thick (-) plate -->
      <line x1="315" y1="72" x2="315" y2="88" stroke="#0f172a" stroke-width="7"/>
      <!-- Connecting leads -->
      <line x1="240" y1="80" x2="285" y2="80" stroke="#334155" stroke-width="3"/>
      <line x1="315" y1="80" x2="360" y2="80" stroke="#334155" stroke-width="3"/>
      <text x="275" y="60" class="text-xs font-bold fill-blue-700">+</text>
      <text x="325" y="60" class="text-xs font-bold fill-slate-700">-</text>
      <text x="300" y="45" text-anchor="middle" class="text-xs font-bold fill-slate-800">Electric Cell (1.5V)</text>

      <!-- Current Flow Arrows -->
      <polygon points="210,76 210,84 222,80" fill="#2563eb"/>
      <text x="215" y="68" text-anchor="middle" class="text-[10px] font-bold fill-blue-600">Current (I)</text>

      <!-- 2. Switch Right Side -->
      <rect x="485" y="170" width="30" height="60" fill="#f8fafc"/>
      <circle cx="500" cy="180" r="4" fill="#0f172a"/>
      <circle cx="500" cy="220" r="4" fill="#0f172a"/>
      <line x1="500" y1="180" x2="515" y2="210" stroke="#dc2626" stroke-width="3.5" stroke-linecap="round"/>
      <text x="545" y="205" class="text-xs font-bold fill-slate-800">Key (Open)</text>

      <!-- 3. Bulb / Lamp Bottom -->
      <rect x="260" y="305" width="80" height="30" fill="#f8fafc"/>
      <circle cx="300" cy="320" r="20" fill="#fef08a" stroke="#d97706" stroke-width="2.5"/>
      <!-- Filament cross -->
      <path d="M 290 327 L 297 312 L 303 327 L 310 312" fill="none" stroke="#b45309" stroke-width="2"/>
      <text x="300" y="365" text-anchor="middle" class="text-xs font-bold fill-slate-800">Incandescent Bulb (Load)</text>

      <!-- 4. Ammeter Left Side -->
      <rect x="85" y="170" width="30" height="60" fill="#f8fafc"/>
      <circle cx="100" cy="200" r="22" fill="#ffffff" stroke="#2563eb" stroke-width="2.5"/>
      <text x="100" y="206" text-anchor="middle" class="text-base font-bold fill-blue-700">A</text>
      <text x="50" y="205" text-anchor="middle" class="text-xs font-bold fill-slate-800">Ammeter</text>

      <!-- Status Explanation -->
      <rect x="80" y="375" width="440" height="32" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="300" y="396" text-anchor="middle" class="text-xs font-semibold fill-slate-700">
        When switch is closed → Circuit becomes <tspan fill="#16a34a" font-weight="bold">CLOSED</tspan> → Bulb glows with continuous current
      </text>
    </svg>
  `,

  heatTransfer: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="metalHeat" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#ef4444"/>
          <stop offset="40%" stop-color="#f97316"/>
          <stop offset="80%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#64748b"/>
        </linearGradient>
      </defs>
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <!-- Panel 1: Conduction -->
      <g transform="translate(30, 40)">
        <rect width="160" height="310" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
        <text x="80" y="28" text-anchor="middle" class="text-xs font-bold fill-slate-800">1. CONDUCTION</text>
        <text x="80" y="44" text-anchor="middle" class="text-[10px] fill-slate-500">In Solids / Metals</text>
        
        <!-- Metal Rod -->
        <rect x="20" y="100" width="120" height="18" rx="4" fill="url(#metalHeat)" stroke="#334155"/>
        
        <!-- Wax dropped pins -->
        <line x1="45" y1="118" x2="45" y2="150" stroke="#d97706" stroke-width="2"/>
        <circle cx="45" cy="155" r="4" fill="#b45309"/>
        
        <line x1="80" y1="118" x2="80" y2="150" stroke="#d97706" stroke-width="2"/>
        <circle cx="80" cy="155" r="4" fill="#b45309"/>
        
        <line x1="115" y1="118" x2="115" y2="150" stroke="#d97706" stroke-width="2"/>
        <circle cx="115" cy="155" r="4" fill="#b45309"/>

        <!-- Flame -->
        <path d="M20 130 Q15 110 25 90 Q35 110 30 130 Z" fill="#ef4444"/>
        <path d="M22 125 Q18 112 25 100 Q32 112 28 125 Z" fill="#f59e0b"/>

        <text x="80" y="200" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">Direct molecule</text>
        <text x="80" y="215" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">vibration without bulk</text>
        <text x="80" y="230" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">particle displacement</text>
      </g>

      <!-- Panel 2: Convection -->
      <g transform="translate(220, 40)">
        <rect width="160" height="310" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
        <text x="80" y="28" text-anchor="middle" class="text-xs font-bold fill-slate-800">2. CONVECTION</text>
        <text x="80" y="44" text-anchor="middle" class="text-[10px] fill-slate-500">In Fluids (Liq & Gas)</text>
        
        <!-- Flask -->
        <path d="M60 90 L60 110 L30 180 Q80 200 130 180 L100 110 L100 90 Z" fill="#eff6ff" stroke="#475569" stroke-width="2"/>
        
        <!-- Convection Currents Arrows -->
        <path d="M80 170 Q50 140 70 125 Q90 140 80 170" fill="none" stroke="#ef4444" stroke-width="2"/>
        <polygon points="70,125 73,132 66,131" fill="#ef4444"/>

        <path d="M80 170 Q110 140 90 125 Q70 140 80 170" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <polygon points="90,125 87,132 94,131" fill="#3b82f6"/>

        <!-- Flame -->
        <path d="M80 210 Q70 190 80 175 Q90 190 80 210 Z" fill="#ef4444"/>

        <text x="80" y="240" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">Warm fluid rises,</text>
        <text x="80" y="255" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">cool dense fluid</text>
        <text x="80" y="270" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">sinks down</text>
      </g>

      <!-- Panel 3: Radiation -->
      <g transform="translate(410, 40)">
        <rect width="160" height="310" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
        <text x="80" y="28" text-anchor="middle" class="text-xs font-bold fill-slate-800">3. RADIATION</text>
        <text x="80" y="44" text-anchor="middle" class="text-[10px] fill-slate-500">In Vacuum & Space</text>
        
        <!-- Sun / Heat Source -->
        <circle cx="80" cy="115" r="25" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
        
        <!-- Infrared Waves -->
        <path d="M 40 160 Q 60 170 80 160 Q 100 150 120 160" fill="none" stroke="#ef4444" stroke-width="2"/>
        <path d="M 40 180 Q 60 190 80 180 Q 100 170 120 180" fill="none" stroke="#ef4444" stroke-width="2"/>
        <path d="M 40 200 Q 60 210 80 200 Q 100 190 120 200" fill="none" stroke="#ef4444" stroke-width="2"/>

        <text x="80" y="240" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">Electromagnetic waves</text>
        <text x="80" y="255" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">No material medium</text>
        <text x="80" y="270" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">required to travel</text>
      </g>

      <!-- Bottom Note -->
      <rect x="30" y="365" width="540" height="36" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="300" y="388" text-anchor="middle" class="text-xs font-semibold fill-slate-700">
        Thermal conductors (metals) allow rapid conduction; Insulators (wood, air, glass) resist it.
      </text>
    </svg>
  `,

  soundWave: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <!-- Tuning Fork Source -->
      <g transform="translate(40, 70)">
        <path d="M20 90 L20 140 L26 140 L26 90 Z" fill="#64748b"/>
        <path d="M10 30 L10 90 L16 90 L16 30 Z" fill="#475569"/>
        <path d="M30 30 L30 90 L36 90 L36 30 Z" fill="#475569"/>
        <path d="M10 90 Q23 105 36 90" fill="none" stroke="#475569" stroke-width="6"/>
        <!-- Vibration lines -->
        <path d="M5 25 Q1 45 5 65 M41 25 Q45 45 41 65" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="23" y="165" text-anchor="middle" class="text-[10px] font-bold fill-slate-700">Tuning Fork</text>
      </g>

      <!-- Longitudinal Particle Density Wave -->
      <g transform="translate(120, 70)">
        <rect width="440" height="90" fill="#ffffff" stroke="#cbd5e1" rx="6"/>
        
        <!-- Compressions & Rarefactions lines -->
        <!-- C1 -->
        <g stroke="#1e293b" stroke-width="1.5">
          <line x1="30" y1="10" x2="30" y2="80"/><line x1="33" y1="10" x2="33" y2="80"/><line x1="36" y1="10" x2="36" y2="80"/><line x1="39" y1="10" x2="39" y2="80"/><line x1="42" y1="10" x2="42" y2="80"/>
        </g>
        <text x="36" y="105" text-anchor="middle" class="text-[10px] font-bold fill-blue-700">C (High P)</text>

        <!-- R1 -->
        <g stroke="#94a3b8" stroke-width="1">
          <line x1="80" y1="10" x2="80" y2="80"/><line x1="105" y1="10" x2="105" y2="80"/><line x1="130" y1="10" x2="130" y2="80"/>
        </g>
        <text x="105" y="105" text-anchor="middle" class="text-[10px] font-bold fill-slate-500">R (Low P)</text>

        <!-- C2 -->
        <g stroke="#1e293b" stroke-width="1.5">
          <line x1="170" y1="10" x2="170" y2="80"/><line x1="173" y1="10" x2="173" y2="80"/><line x1="176" y1="10" x2="176" y2="80"/><line x1="179" y1="10" x2="179" y2="80"/><line x1="182" y1="10" x2="182" y2="80"/>
        </g>
        <text x="176" y="105" text-anchor="middle" class="text-[10px] font-bold fill-blue-700">C</text>

        <!-- R2 -->
        <g stroke="#94a3b8" stroke-width="1">
          <line x1="220" y1="10" x2="220" y2="80"/><line x1="245" y1="10" x2="245" y2="80"/><line x1="270" y1="10" x2="270" y2="80"/>
        </g>
        <text x="245" y="105" text-anchor="middle" class="text-[10px] font-bold fill-slate-500">R</text>

        <!-- C3 -->
        <g stroke="#1e293b" stroke-width="1.5">
          <line x1="310" y1="10" x2="310" y2="80"/><line x1="313" y1="10" x2="313" y2="80"/><line x1="316" y1="10" x2="316" y2="80"/><line x1="319" y1="10" x2="319" y2="80"/><line x1="322" y1="10" x2="322" y2="80"/>
        </g>
        <text x="316" y="105" text-anchor="middle" class="text-[10px] font-bold fill-blue-700">C</text>
      </g>

      <!-- Sine Wave Graphical Equivalent -->
      <g transform="translate(120, 200)">
        <line x1="0" y1="70" x2="440" y2="70" stroke="#64748b" stroke-width="1.5"/>
        <text x="450" y="74" class="text-[10px] font-bold fill-slate-500">Distance</text>
        
        <!-- Wave curve -->
        <path d="M 0 70 Q 35 15 70 70 T 140 70 T 210 70 T 280 70 T 350 70 T 420 70" fill="none" stroke="#2563eb" stroke-width="3"/>
        
        <!-- Wavelength marker -->
        <line x1="35" y1="10" x2="175" y2="10" stroke="#059669" stroke-width="2"/>
        <polygon points="35,10 42,7 42,13" fill="#059669"/>
        <polygon points="175,10 168,7 168,13" fill="#059669"/>
        <text x="105" y="0" text-anchor="middle" class="text-xs font-bold fill-emerald-700">Wavelength (λ)</text>

        <!-- Amplitude marker -->
        <line x1="35" y1="15" x2="35" y2="70" stroke="#dc2626" stroke-width="2" stroke-dasharray="2,2"/>
        <text x="45" y="45" class="text-[10px] font-bold fill-red-600">Amplitude (A)</text>
      </g>

      <!-- Formula footer -->
      <rect x="50" y="365" width="500" height="36" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="300" y="388" text-anchor="middle" class="text-xs font-semibold fill-slate-800">
        Wave Relation: <tspan font-weight="bold" fill="#2563eb">v = f × λ</tspan> (Speed = Frequency × Wavelength) &nbsp;|&nbsp; Loudness ∝ (Amplitude)²
      </text>
    </svg>
  `,

  distillationApparatus: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="condenserWater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#93c5fd" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#60a5fa" stop-opacity="0.7"/>
        </linearGradient>
      </defs>
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <!-- 1. Heat Source (Bunsen Burner + Tripod) -->
      <g transform="translate(100, 240)">
        <!-- Stand & Gauze -->
        <rect x="20" y="60" width="80" height="6" fill="#475569"/>
        <line x1="30" y1="66" x2="20" y2="120" stroke="#475569" stroke-width="3"/>
        <line x1="90" y1="66" x2="100" y2="120" stroke="#475569" stroke-width="3"/>
        <!-- Burner & Flame -->
        <rect x="50" y="90" width="20" height="30" fill="#64748b"/>
        <path d="M60 90 Q52 72 60 55 Q68 72 60 90 Z" fill="#3b82f6"/>
        <path d="M60 85 Q56 74 60 62 Q64 74 60 85 Z" fill="#60a5fa"/>
        <text x="60" y="135" text-anchor="middle" class="text-[10px] font-bold fill-slate-700">Bunsen Burner</text>
      </g>

      <!-- 2. Distillation Flask (Round Bottom) -->
      <g transform="translate(120, 90)">
        <!-- Liquid in flask -->
        <circle cx="40" cy="180" r="35" fill="#fef08a" opacity="0.8"/>
        <!-- Boiling chips -->
        <circle cx="35" cy="205" r="2.5" fill="#78350f"/>
        <circle cx="45" cy="210" r="2.5" fill="#78350f"/>
        <!-- Glass Flask outline -->
        <path d="M30 60 L30 148 A 38 38 0 1 0 50 148 L50 60 Z" fill="none" stroke="#475569" stroke-width="2.5"/>
        <rect x="27" y="55" width="26" height="8" rx="2" fill="#cbd5e1"/>
        <!-- Side arm -->
        <line x1="50" y1="90" x2="110" y2="125" stroke="#475569" stroke-width="5"/>
        
        <!-- Thermometer -->
        <rect x="38" y="30" width="4" height="75" fill="#ffffff" stroke="#0f172a" stroke-width="1"/>
        <circle cx="40" cy="105" r="3" fill="#dc2626"/>
        <text x="40" y="20" text-anchor="middle" class="text-[10px] font-bold fill-red-700">Thermometer (100°C)</text>
      </g>

      <!-- 3. Liebig Condenser (Tilted) -->
      <g transform="translate(225, 210) rotate(30)">
        <!-- Outer Cooling Jacket -->
        <rect x="0" y="-14" width="180" height="28" rx="6" fill="url(#condenserWater)" stroke="#3b82f6" stroke-width="2"/>
        <!-- Inner Vapor Tube -->
        <line x1="-15" y1="0" x2="195" y2="0" stroke="#475569" stroke-width="4"/>
        
        <!-- Cold water inlet (bottom) -->
        <rect x="140" y="14" width="8" height="18" fill="#3b82f6"/>
        <text x="144" y="44" text-anchor="middle" class="text-[9px] font-bold fill-blue-700">Water IN</text>

        <!-- Warm water outlet (top) -->
        <rect x="30" y="-32" width="8" height="18" fill="#3b82f6"/>
        <text x="34" y="-38" text-anchor="middle" class="text-[9px] font-bold fill-blue-700">Water OUT</text>
      </g>

      <!-- 4. Receiving Flask -->
      <g transform="translate(420, 280)">
        <path d="M30 40 L10 90 Q35 100 60 90 L40 40 Z" fill="#dbeafe" stroke="#475569" stroke-width="2"/>
        <text x="35" y="115" text-anchor="middle" class="text-[10px] font-bold fill-slate-800">Distillate (Pure Water)</text>
      </g>

      <!-- Bottom Principle Card -->
      <rect x="60" y="365" width="480" height="36" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="300" y="388" text-anchor="middle" class="text-xs font-semibold fill-slate-700">
        Distillation = <tspan font-weight="bold" fill="#dc2626">Vaporization</tspan> (Boiling in flask) + <tspan font-weight="bold" fill="#2563eb">Condensation</tspan> (Cooling in Liebig condenser)
      </text>
    </svg>
  `,

  phScaleDiagram: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#ef4444"/>
          <stop offset="25%" stop-color="#f97316"/>
          <stop offset="45%" stop-color="#facc15"/>
          <stop offset="50%" stop-color="#22c55e"/>
          <stop offset="70%" stop-color="#06b6d4"/>
          <stop offset="85%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="#7c3aed"/>
        </linearGradient>
      </defs>
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <text x="300" y="35" text-anchor="middle" class="text-sm font-bold fill-slate-900">The ICSE Class 7 pH Spectrum & Indicator Guide</text>

      <!-- Main pH Spectrum Bar -->
      <rect x="40" y="60" width="520" height="40" rx="8" fill="url(#phGrad)" stroke="#64748b" stroke-width="1.5"/>

      <!-- Number Ticks 0 to 14 -->
      <g class="text-[11px] font-bold fill-white" text-anchor="middle">
        <text x="50" y="85">0</text>
        <text x="87" y="85">1</text>
        <text x="124" y="85">2</text>
        <text x="161" y="85">3</text>
        <text x="198" y="85">4</text>
        <text x="235" y="85">5</text>
        <text x="272" y="85">6</text>
        <text x="300" y="85" class="fill-slate-900 font-extrabold">7</text>
        <text x="328" y="85">8</text>
        <text x="365" y="85">9</text>
        <text x="402" y="85">10</text>
        <text x="439" y="85">11</text>
        <text x="476" y="85">12</text>
        <text x="513" y="85">13</text>
        <text x="550" y="85">14</text>
      </g>

      <!-- Regions -->
      <!-- Acidic -->
      <path d="M 40 110 L 280 110" stroke="#dc2626" stroke-width="3"/>
      <text x="160" y="130" text-anchor="middle" class="text-xs font-bold fill-red-700">ACIDIC REGION (pH &lt; 7)</text>
      <text x="160" y="145" text-anchor="middle" class="text-[10px] fill-slate-500">Gastric Acid (1.5), Lemon (2.2), Vinegar (3.0)</text>

      <!-- Neutral -->
      <line x1="300" y1="105" x2="300" y2="135" stroke="#16a34a" stroke-width="2.5"/>
      <text x="300" y="148" text-anchor="middle" class="text-xs font-bold fill-green-700">NEUTRAL (pH = 7)</text>
      <text x="300" y="162" text-anchor="middle" class="text-[10px] fill-slate-500">Pure Distilled Water, NaCl Salt</text>

      <!-- Basic / Alkaline -->
      <path d="M 320 110 L 560 110" stroke="#7c3aed" stroke-width="3"/>
      <text x="440" y="130" text-anchor="middle" class="text-xs font-bold fill-purple-700">BASIC / ALKALI REGION (pH &gt; 7)</text>
      <text x="440" y="145" text-anchor="middle" class="text-[10px] fill-slate-500">Baking Soda (9), Milk of Magnesia (10.5), NaOH (14)</text>

      <!-- Indicator Color Comparison Table -->
      <g transform="translate(40, 180)">
        <rect width="520" height="165" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        
        <!-- Header -->
        <rect width="520" height="32" rx="8" fill="#f1f5f9"/>
        <text x="80" y="21" class="text-[11px] font-bold fill-slate-700">Indicator Test</text>
        <text x="210" y="21" class="text-[11px] font-bold fill-red-700">In Acidic Medium</text>
        <text x="330" y="21" class="text-[11px] font-bold fill-green-700">In Neutral</text>
        <text x="450" y="21" class="text-[11px] font-bold fill-purple-700">In Basic Medium</text>

        <!-- Rows -->
        <!-- Row 1: Litmus -->
        <line x1="0" y1="65" x2="520" y2="65" stroke="#f1f5f9"/>
        <text x="20" y="52" class="text-[11px] font-semibold fill-slate-800">Blue / Red Litmus</text>
        <text x="210" y="52" class="text-[11px] font-bold fill-red-600">Turns RED</text>
        <text x="330" y="52" class="text-[11px] fill-slate-500">No Change</text>
        <text x="450" y="52" class="text-[11px] font-bold fill-blue-600">Turns BLUE</text>

        <!-- Row 2: Phenolphthalein -->
        <line x1="0" y1="100" x2="520" y2="100" stroke="#f1f5f9"/>
        <text x="20" y="87" class="text-[11px] font-semibold fill-slate-800">Phenolphthalein</text>
        <text x="210" y="87" class="text-[11px] fill-slate-600">Colorless</text>
        <text x="330" y="87" class="text-[11px] fill-slate-500">Colorless</text>
        <text x="450" y="87" class="text-[11px] font-bold fill-pink-600">Vibrant PINK</text>

        <!-- Row 3: Methyl Orange -->
        <line x1="0" y1="135" x2="520" y2="135" stroke="#f1f5f9"/>
        <text x="20" y="122" class="text-[11px] font-semibold fill-slate-800">Methyl Orange</text>
        <text x="210" y="122" class="text-[11px] font-bold fill-red-600">RED / Orange</text>
        <text x="330" y="122" class="text-[11px] fill-slate-500">Orange</text>
        <text x="450" y="122" class="text-[11px] font-bold fill-amber-500">YELLOW</text>

        <!-- Row 4: China Rose -->
        <text x="20" y="153" class="text-[11px] font-semibold fill-slate-800">China Rose Solution</text>
        <text x="210" y="153" class="text-[11px] font-bold fill-pink-700">Dark Pink (Magenta)</text>
        <text x="330" y="153" class="text-[11px] fill-slate-500">Pink</text>
        <text x="450" y="153" class="text-[11px] font-bold fill-emerald-600">GREEN</text>
      </g>

      <!-- Bottom Neutralization Formula -->
      <rect x="40" y="360" width="520" height="42" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="300" y="385" text-anchor="middle" class="text-xs font-semibold fill-slate-800">
        Neutralization Law: <tspan font-weight="bold" fill="#dc2626">Acid</tspan> + <tspan font-weight="bold" fill="#2563eb">Base</tspan> → <tspan font-weight="bold" fill="#16a34a">Salt</tspan> + <tspan font-weight="bold" fill="#0284c7">Water</tspan> &nbsp;[e.g., HCl + NaOH → NaCl + H₂O]
      </text>
    </svg>
  `,

  airComposition: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <text x="300" y="32" text-anchor="middle" class="text-sm font-bold fill-slate-900">Volumetric Composition of Atmospheric Air</text>

      <!-- Pie Chart Center (220, 190) -->
      <!-- Nitrogen Sector (78.08% = ~281 deg) -->
      <path d="M 220 190 L 220 50 A 140 140 0 1 1 82 216 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
      <!-- Oxygen Sector (20.95% = ~75.4 deg) -->
      <path d="M 220 190 L 82 216 A 140 140 0 0 1 205 51 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
      <!-- Trace Gases Sector (0.97%) -->
      <path d="M 220 190 L 205 51 A 140 140 0 0 1 220 50 Z" fill="#10b981" stroke="#047857" stroke-width="2"/>

      <!-- Nitrogen Label inside pie -->
      <text x="270" y="210" text-anchor="middle" class="text-base font-extrabold fill-white">Nitrogen</text>
      <text x="270" y="232" text-anchor="middle" class="text-sm font-bold fill-blue-100">78.08%</text>

      <!-- Oxygen Label inside pie -->
      <text x="130" y="140" text-anchor="middle" class="text-xs font-bold fill-white">Oxygen</text>
      <text x="130" y="155" text-anchor="middle" class="text-xs font-semibold fill-red-100">20.95%</text>

      <!-- Breakdown Cards on Right -->
      <g transform="translate(380, 50)">
        <!-- Nitrogen Card -->
        <rect width="180" height="60" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
        <circle cx="16" cy="18" r="6" fill="#3b82f6"/>
        <text x="30" y="22" class="text-xs font-bold fill-blue-900">Nitrogen (N₂) ~ 78%</text>
        <text x="10" y="42" class="text-[10px] fill-slate-600">Inert gas, controls combustion, essential for plant protein.</text>

        <!-- Oxygen Card -->
        <g transform="translate(0, 70)">
          <rect width="180" height="60" rx="6" fill="#fef2f2" stroke="#fecaca"/>
          <circle cx="16" cy="18" r="6" fill="#ef4444"/>
          <text x="30" y="22" class="text-xs font-bold fill-red-900">Oxygen (O₂) ~ 21%</text>
          <text x="10" y="42" class="text-[10px] fill-slate-600">Vital for respiration, supports combustion and burning.</text>
        </g>

        <!-- CO2 Card -->
        <g transform="translate(0, 140)">
          <rect width="180" height="60" rx="6" fill="#f0fdf4" stroke="#bbf7d0"/>
          <circle cx="16" cy="18" r="6" fill="#10b981"/>
          <text x="30" y="22" class="text-xs font-bold fill-emerald-900">Carbon Dioxide ~ 0.04%</text>
          <text x="10" y="42" class="text-[10px] fill-slate-600">Used in photosynthesis; greenhouse heat regulation.</text>
        </g>

        <!-- Argon & Trace Card -->
        <g transform="translate(0, 210)">
          <rect width="180" height="60" rx="6" fill="#faf5ff" stroke="#e9d5ff"/>
          <circle cx="16" cy="18" r="6" fill="#a855f7"/>
          <text x="30" y="22" class="text-xs font-bold fill-purple-900">Argon & Rare Gases ~ 0.93%</text>
          <text x="10" y="42" class="text-[10px] fill-slate-600">Argon in filament bulbs, Neon in glow signs.</text>
        </g>
      </g>

      <!-- Bottom Banner -->
      <rect x="40" y="360" width="520" height="42" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="300" y="385" text-anchor="middle" class="text-xs font-semibold fill-slate-700">
        Rusting Condition: <tspan font-weight="bold" fill="#0f172a">4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O</tspan> (Hydrated Ferric Oxide)
      </text>
    </svg>
  `,

  crissCrossMethod: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="crossArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
        </marker>
        <marker id="crossArrowRed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
        </marker>
      </defs>
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <text x="300" y="35" text-anchor="middle" class="text-sm font-bold fill-slate-900">Writing Chemical Formula: Aluminium Oxide</text>

      <!-- Step 1 Box -->
      <g transform="translate(60, 60)">
        <rect width="480" height="80" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="20" y="28" class="text-xs font-bold fill-slate-800">Step 1: Write Symbols with Valencies on Top</text>
        
        <!-- Element Symbols -->
        <text x="180" y="65" text-anchor="middle" class="text-2xl font-bold fill-blue-700">Al</text>
        <text x="205" y="45" class="text-sm font-bold fill-blue-600">+3</text>

        <text x="320" y="65" text-anchor="middle" class="text-2xl font-bold fill-red-700">O</text>
        <text x="340" y="45" class="text-sm font-bold fill-red-600">-2</text>
      </g>

      <!-- Step 2 Box with Criss-Cross Arrows -->
      <g transform="translate(60, 160)">
        <rect width="480" height="110" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="20" y="28" class="text-xs font-bold fill-slate-800">Step 2: Criss-Cross the Valency Numbers as Subscripts</text>

        <!-- Symbols -->
        <text x="180" y="65" text-anchor="middle" class="text-2xl font-bold fill-blue-700">Al</text>
        <text x="205" y="45" class="text-base font-bold fill-blue-600">3</text>

        <text x="320" y="65" text-anchor="middle" class="text-2xl font-bold fill-red-700">O</text>
        <text x="340" y="45" class="text-base font-bold fill-red-600">2</text>

        <!-- Crossing Arrows -->
        <path d="M 210 48 L 325 90" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#crossArrow)"/>
        <path d="M 335 48 L 195 90" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#crossArrowRed)"/>
      </g>

      <!-- Step 3 Final Result -->
      <g transform="translate(60, 290)">
        <rect width="480" height="100" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <text x="240" y="30" text-anchor="middle" class="text-xs font-bold fill-blue-900">Step 3: Final Balanced Chemical Formula</text>
        
        <text x="240" y="75" text-anchor="middle" class="text-3xl font-extrabold fill-slate-900">
          Al<tspan dy="6" font-size="20" fill="#dc2626">2</tspan><tspan dy="-6">O</tspan><tspan dy="6" font-size="20" fill="#2563eb">3</tspan>
        </text>
      </g>
    </svg>
  `,

  plantVascularTissues: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <text x="300" y="30" text-anchor="middle" class="text-sm font-bold fill-slate-900">Vascular Bundle: Xylem vs Phloem Vessels</text>

      <!-- Left Panel: Xylem Vessel -->
      <g transform="translate(50, 50)">
        <rect width="230" height="300" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="115" y="28" text-anchor="middle" class="text-xs font-bold fill-blue-700">XYLEM TISSUE</text>
        <text x="115" y="44" text-anchor="middle" class="text-[10px] fill-slate-500">Unidirectional Upward Flow</text>

        <!-- Xylem Tube -->
        <rect x="75" y="65" width="80" height="180" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3" rx="4"/>
        <!-- Thick Lignin wall markings -->
        <line x1="75" y1="100" x2="155" y2="100" stroke="#1e40af" stroke-width="2"/>
        <line x1="75" y1="150" x2="155" y2="150" stroke="#1e40af" stroke-width="2"/>
        <line x1="75" y1="200" x2="155" y2="200" stroke="#1e40af" stroke-width="2"/>

        <!-- Upward Arrow -->
        <line x1="115" y1="230" x2="115" y2="85" stroke="#2563eb" stroke-width="4"/>
        <polygon points="115,75 107,90 123,90" fill="#2563eb"/>
        <text x="115" y="175" text-anchor="middle" class="text-[10px] font-bold fill-blue-900">Water & Minerals</text>

        <text x="115" y="270" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">Dead cells, lignified walls</text>
        <text x="115" y="285" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">No cross-walls (continuous tube)</text>
      </g>

      <!-- Right Panel: Phloem Vessel -->
      <g transform="translate(320, 50)">
        <rect width="230" height="300" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="115" y="28" text-anchor="middle" class="text-xs font-bold fill-emerald-700">PHLOEM TISSUE</text>
        <text x="115" y="44" text-anchor="middle" class="text-[10px] fill-slate-500">Bidirectional Translocation</text>

        <!-- Phloem Sieve Tube -->
        <rect x="75" y="65" width="80" height="180" fill="#d1fae5" stroke="#059669" stroke-width="3" rx="4"/>
        
        <!-- Sieve Plates with pores -->
        <g stroke="#047857" stroke-width="2">
          <line x1="75" y1="120" x2="155" y2="120"/>
          <line x1="75" y1="180" x2="155" y2="180"/>
        </g>
        <circle cx="95" cy="120" r="2" fill="#047857"/>
        <circle cx="115" cy="120" r="2" fill="#047857"/>
        <circle cx="135" cy="120" r="2" fill="#047857"/>
        <circle cx="95" cy="180" r="2" fill="#047857"/>
        <circle cx="115" cy="180" r="2" fill="#047857"/>
        <circle cx="135" cy="180" r="2" fill="#047857"/>

        <!-- Two way arrows -->
        <line x1="105" y1="90" x2="105" y2="220" stroke="#059669" stroke-width="3"/>
        <polygon points="105,80 99,95 111,95" fill="#059669"/>
        <polygon points="105,230 99,215 111,215" fill="#059669"/>
        
        <!-- Companion Cell -->
        <rect x="160" y="100" width="25" height="110" rx="3" fill="#a7f3d0" stroke="#047857" stroke-width="1.5"/>
        <circle cx="172" cy="155" r="4" fill="#065f46"/>
        <text x="172" y="90" text-anchor="middle" class="text-[8px] font-bold fill-emerald-800">Companion Cell</text>

        <text x="115" y="270" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">Living cells with cytoplasm</text>
        <text x="115" y="285" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">Perforated sieve plates</text>
      </g>

      <!-- Bottom Summary -->
      <rect x="50" y="365" width="500" height="38" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="300" y="388" text-anchor="middle" class="text-xs font-semibold fill-slate-800">
        Xylem conducts <tspan fill="#2563eb" font-weight="bold">Water & Minerals UP</tspan> | Phloem translocates <tspan fill="#059669" font-weight="bold">Synthesized Sucrose UP & DOWN</tspan>
      </text>
    </svg>
  `,

  neuronStructure: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="axonGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="100%" stop-color="#fde047"/>
        </linearGradient>
      </defs>
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <text x="300" y="30" text-anchor="middle" class="text-sm font-bold fill-slate-900">Anatomy of a Multipolar Neuron (Nerve Cell)</text>

      <!-- 1. Cyton / Cell Body -->
      <g transform="translate(130, 200)">
        <polygon points="0,0 20,-40 60,-20 70,20 40,50 -10,35" fill="#fbcfe8" stroke="#db2777" stroke-width="2.5"/>
        <!-- Nucleus -->
        <circle cx="30" cy="5" r="14" fill="#9d174d"/>
        <circle cx="30" cy="5" r="5" fill="#fdf2f8"/>
        <text x="30" y="-55" text-anchor="middle" class="text-xs font-bold fill-pink-800">Cyton (Soma)</text>

        <!-- Dendrites branching out -->
        <path d="M 0 0 L -40 -30 M -40 -30 L -60 -25 M -40 -30 L -55 -50" stroke="#db2777" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M 20 -40 L 15 -75 M 15 -75 L 30 -90 M 15 -75 L 0 -85" stroke="#db2777" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M -10 35 L -45 50 M -45 50 L -65 40 M -45 50 L -50 70" stroke="#db2777" stroke-width="2.5" stroke-linecap="round"/>
        <text x="-65" y="-5" class="text-xs font-bold fill-pink-900">Dendrites</text>
      </g>

      <!-- 2. Axon with Myelin Sheath Schwann Cells -->
      <g transform="translate(200, 200)">
        <!-- Core Axon Fiber -->
        <line x1="0" y1="5" x2="250" y2="5" stroke="#eab308" stroke-width="5"/>

        <!-- Myelin Sheath segments -->
        <g fill="url(#axonGrad)" stroke="#ca8a04" stroke-width="2">
          <rect x="20" y="-12" width="45" height="34" rx="8"/>
          <rect x="75" y="-12" width="45" height="34" rx="8"/>
          <rect x="130" y="-12" width="45" height="34" rx="8"/>
          <rect x="185" y="-12" width="45" height="34" rx="8"/>
        </g>
        
        <!-- Nodes of Ranvier gaps -->
        <line x1="70" y1="-5" x2="70" y2="15" stroke="#0f172a" stroke-width="2"/>
        <text x="70" y="45" text-anchor="middle" class="text-[9px] font-bold fill-slate-700">Node of Ranvier</text>

        <text x="125" y="-25" text-anchor="middle" class="text-xs font-bold fill-amber-800">Myelin Sheath</text>
        <text x="125" y="70" text-anchor="middle" class="text-xs font-bold fill-amber-700">Axon (Nerve Fiber)</text>

        <!-- Impulse direction arrow -->
        <line x1="30" y1="-45" x2="190" y2="-45" stroke="#2563eb" stroke-width="3"/>
        <polygon points="200,-45 185,-50 185,-40" fill="#2563eb"/>
        <text x="110" y="-55" text-anchor="middle" class="text-[10px] font-bold fill-blue-700">Direction of Nerve Impulse</text>
      </g>

      <!-- 3. Axon Terminal & Synapse -->
      <g transform="translate(450, 200)">
        <path d="M 0 5 L 40 -25 M 40 -25 L 60 -35 M 0 5 L 40 35 M 40 35 L 60 45" stroke="#eab308" stroke-width="3" stroke-linecap="round"/>
        <!-- Synaptic Knobs -->
        <circle cx="60" cy="-35" r="5" fill="#ef4444"/>
        <circle cx="60" cy="45" r="5" fill="#ef4444"/>
        <circle cx="50" cy="5" r="5" fill="#ef4444"/>
        <text x="75" y="10" class="text-xs font-bold fill-red-700">Synaptic Knobs</text>
      </g>

      <!-- Bottom Card -->
      <rect x="50" y="360" width="500" height="42" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="300" y="385" text-anchor="middle" class="text-xs font-semibold fill-slate-800">
        Impulse Transmission: <tspan fill="#db2777" font-weight="bold">Dendrite</tspan> → <tspan fill="#db2777" font-weight="bold">Cyton</tspan> → <tspan fill="#ca8a04" font-weight="bold">Axon</tspan> → <tspan fill="#ef4444" font-weight="bold">Synaptic Knob</tspan> (Neurotransmitters)
      </text>
    </svg>
  `,

  fiveKingdoms: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <text x="300" y="30" text-anchor="middle" class="text-sm font-bold fill-slate-900">Whittaker Five Kingdom Classification System</text>

      <!-- Tree Hierarchy Branches -->
      <!-- Monera (Base) -->
      <g transform="translate(180, 310)">
        <rect width="240" height="50" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
        <text x="120" y="24" text-anchor="middle" class="text-xs font-bold fill-red-900">1. Kingdom MONERA</text>
        <text x="120" y="40" text-anchor="middle" class="text-[10px] fill-slate-600">Unicellular, Prokaryotic (Bacteria, Blue-green algae)</text>
      </g>

      <!-- Trunk to Protista -->
      <line x1="300" y1="310" x2="300" y2="260" stroke="#64748b" stroke-width="3"/>

      <!-- Protista -->
      <g transform="translate(180, 210)">
        <rect width="240" height="50" rx="8" fill="#fefce8" stroke="#eab308" stroke-width="2"/>
        <text x="120" y="24" text-anchor="middle" class="text-xs font-bold fill-amber-900">2. Kingdom PROTISTA</text>
        <text x="120" y="40" text-anchor="middle" class="text-[10px] fill-slate-600">Unicellular, Eukaryotic (Amoeba, Paramecium)</text>
      </g>

      <!-- 3 Branches from Protista -->
      <line x1="220" y1="210" x2="100" y2="140" stroke="#64748b" stroke-width="2.5"/>
      <line x1="300" y1="210" x2="300" y2="140" stroke="#64748b" stroke-width="2.5"/>
      <line x1="380" y1="210" x2="500" y2="140" stroke="#64748b" stroke-width="2.5"/>

      <!-- Plantae Left -->
      <g transform="translate(20, 70)">
        <rect width="170" height="70" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
        <text x="85" y="24" text-anchor="middle" class="text-xs font-bold fill-green-900">3. PLANTAE</text>
        <text x="85" y="42" text-anchor="middle" class="text-[9px] fill-slate-600">Multicellular, Autotrophic</text>
        <text x="85" y="56" text-anchor="middle" class="text-[9px] fill-slate-600">Cellulose cell wall, Chlorophyll</text>
      </g>

      <!-- Fungi Middle -->
      <g transform="translate(215, 70)">
        <rect width="170" height="70" rx="8" fill="#faf5ff" stroke="#a855f7" stroke-width="2"/>
        <text x="85" y="24" text-anchor="middle" class="text-xs font-bold fill-purple-900">4. FUNGI</text>
        <text x="85" y="42" text-anchor="middle" class="text-[9px] fill-slate-600">Multicellular, Heterotrophic</text>
        <text x="85" y="56" text-anchor="middle" class="text-[9px] fill-slate-600">Saprophytic, Chitinous wall</text>
      </g>

      <!-- Animalia Right -->
      <g transform="translate(410, 70)">
        <rect width="170" height="70" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
        <text x="85" y="24" text-anchor="middle" class="text-xs font-bold fill-blue-900">5. ANIMALIA</text>
        <text x="85" y="42" text-anchor="middle" class="text-[9px] fill-slate-600">Multicellular, Heterotrophic</text>
        <text x="85" y="56" text-anchor="middle" class="text-[9px] fill-slate-600">No cell walls, Locomotion</text>
      </g>

      <!-- Footer criteria -->
      <rect x="50" y="375" width="500" height="34" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="300" y="396" text-anchor="middle" class="text-[11px] font-semibold fill-slate-700">
        Classification Criteria: Cell structure (Prokaryote/Eukaryote) + Body organization + Mode of Nutrition
      </text>
    </svg>
  `,

  stomataApparatus: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <text x="300" y="30" text-anchor="middle" class="text-sm font-bold fill-slate-900">Stomatal Mechanism: Turgid (Open) vs Flaccid (Closed)</text>

      <!-- Left: Open Stoma -->
      <g transform="translate(50, 50)">
        <rect width="230" height="300" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="115" y="26" text-anchor="middle" class="text-xs font-bold fill-emerald-700">OPEN STOMA (Daytime / Turgid)</text>

        <!-- Surrounding Epidermal Cells -->
        <rect x="25" y="60" width="180" height="180" rx="12" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5"/>

        <!-- Kidney Guard Cell Left (Curved out) -->
        <path d="M 90 90 Q 55 150 90 210 Q 75 150 90 90 Z" fill="#86efac" stroke="#15803d" stroke-width="2.5"/>
        <!-- Kidney Guard Cell Right (Curved out) -->
        <path d="M 140 90 Q 175 150 140 210 Q 155 150 140 90 Z" fill="#86efac" stroke="#15803d" stroke-width="2.5"/>

        <!-- Stomatal Aperture in between -->
        <ellipse cx="115" cy="150" rx="14" ry="36" fill="#047857"/>

        <!-- Chloroplasts inside guard cells -->
        <circle cx="78" cy="130" r="3" fill="#14532d"/>
        <circle cx="78" cy="165" r="3" fill="#14532d"/>
        <circle cx="152" cy="130" r="3" fill="#14532d"/>
        <circle cx="152" cy="165" r="3" fill="#14532d"/>

        <text x="115" y="265" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">Water enters → Guard cells turgid</text>
        <text x="115" y="280" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">Outer walls stretch → Pore opens</text>
      </g>

      <!-- Right: Closed Stoma -->
      <g transform="translate(320, 50)">
        <rect width="230" height="300" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="115" y="26" text-anchor="middle" class="text-xs font-bold fill-slate-700">CLOSED STOMA (Night / Flaccid)</text>

        <!-- Surrounding Epidermal Cells -->
        <rect x="25" y="60" width="180" height="180" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>

        <!-- Kidney Guard Cells straight together -->
        <path d="M 105 90 Q 90 150 105 210 Q 112 150 105 90 Z" fill="#bbf7d0" stroke="#4ade80" stroke-width="2"/>
        <path d="M 125 90 Q 140 150 125 210 Q 118 150 125 90 Z" fill="#bbf7d0" stroke="#4ade80" stroke-width="2"/>

        <!-- Closed seam -->
        <line x1="115" y1="90" x2="115" y2="210" stroke="#15803d" stroke-width="2"/>

        <!-- Chloroplasts -->
        <circle cx="100" cy="140" r="3" fill="#14532d"/>
        <circle cx="130" cy="140" r="3" fill="#14532d"/>

        <text x="115" y="265" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">Water leaves → Guard cells flaccid</text>
        <text x="115" y="280" text-anchor="middle" class="text-[10px] font-semibold fill-slate-700">Inner walls close together → Pore shut</text>
      </g>

      <!-- Bottom Equation -->
      <rect x="50" y="365" width="500" height="38" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="300" y="388" text-anchor="middle" class="text-xs font-semibold fill-slate-800">
        Photosynthesis: <tspan font-weight="bold" fill="#059669">6CO₂ + 12H₂O + Sunlight → C₆H₁₂O₆ (Glucose) + 6O₂ + 6H₂O</tspan>
      </text>
    </svg>
  `,

  excretorySystem: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="kidneyGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#b91c1c"/>
          <stop offset="100%" stop-color="#7f1d1d"/>
        </radialGradient>
      </defs>
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <text x="300" y="30" text-anchor="middle" class="text-sm font-bold fill-slate-900">The Human Urinary Excretory System</text>

      <!-- Blood Vessels: Aorta & Vena Cava -->
      <!-- Vena Cava (Blue) -->
      <path d="M 280 50 L 280 320" stroke="#2563eb" stroke-width="12" stroke-linecap="round"/>
      <text x="250" y="65" class="text-[10px] font-bold fill-blue-700">Inferior Vena Cava</text>

      <!-- Dorsal Aorta (Red) -->
      <path d="M 315 50 L 315 320" stroke="#dc2626" stroke-width="12" stroke-linecap="round"/>
      <text x="340" y="65" class="text-[10px] font-bold fill-red-700">Dorsal Aorta</text>

      <!-- Left Kidney (on right of diagram) -->
      <g transform="translate(360, 110)">
        <path d="M20 20 Q5 60 20 100 Q65 110 70 60 Q65 10 20 20 Z" fill="url(#kidneyGrad)" stroke="#450a0a" stroke-width="2"/>
        <text x="95" y="65" class="text-xs font-bold fill-red-950">Left Kidney</text>
        <line x1="20" y1="60" x2="-45" y2="60" stroke="#dc2626" stroke-width="5"/>
        <line x1="20" y1="70" x2="-80" y2="70" stroke="#2563eb" stroke-width="5"/>
      </g>

      <!-- Right Kidney (on left of diagram - slightly lower) -->
      <g transform="translate(170, 125)">
        <path d="M50 20 Q65 60 50 100 Q5 110 0 60 Q5 10 50 20 Z" fill="url(#kidneyGrad)" stroke="#450a0a" stroke-width="2"/>
        <text x="-40" y="65" class="text-xs font-bold fill-red-950">Right Kidney</text>
        <line x1="50" y1="60" x2="145" y2="60" stroke="#dc2626" stroke-width="5"/>
        <line x1="50" y1="70" x2="110" y2="70" stroke="#2563eb" stroke-width="5"/>
      </g>

      <!-- Ureters -->
      <path d="M 215 200 Q 230 270 275 305" fill="none" stroke="#ca8a04" stroke-width="4" stroke-linecap="round"/>
      <path d="M 385 190 Q 370 270 325 305" fill="none" stroke="#ca8a04" stroke-width="4" stroke-linecap="round"/>
      <text x="180" y="260" class="text-xs font-bold fill-amber-800">Right Ureter</text>
      <text x="400" y="260" class="text-xs font-bold fill-amber-800">Left Ureter</text>

      <!-- Urinary Bladder -->
      <g transform="translate(300, 325)">
        <path d="M -35 -20 Q 0 -35 35 -20 Q 40 25 0 35 Q -40 25 -35 -20 Z" fill="#fed7aa" stroke="#c2410c" stroke-width="2.5"/>
        <text x="0" y="5" text-anchor="middle" class="text-[11px] font-bold fill-amber-950">Urinary Bladder</text>
        
        <!-- Urethra -->
        <rect x="-6" y="35" width="12" height="20" fill="#fdba74" stroke="#c2410c" stroke-width="1.5"/>
        <text x="40" y="50" class="text-xs font-bold fill-amber-900">Urethra</text>
      </g>

      <!-- Footer -->
      <rect x="50" y="385" width="500" height="28" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="300" y="403" text-anchor="middle" class="text-[11px] font-semibold fill-slate-700">
        Urine Formation in Nephrons: <tspan font-weight="bold" fill="#2563eb">Ultrafiltration</tspan> → <tspan font-weight="bold" fill="#059669">Selective Reabsorption</tspan> → <tspan font-weight="bold" fill="#dc2626">Tubular Secretion</tspan>
      </text>
    </svg>
  `,

  humanEye: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lensGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#e0f2fe"/>
          <stop offset="100%" stop-color="#7dd3fc"/>
        </radialGradient>
      </defs>
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <text x="300" y="30" text-anchor="middle" class="text-sm font-bold fill-slate-900">Horizontal Section of the Human Eyeball</text>

      <!-- Eyeball Outer Sclera Sphere -->
      <circle cx="340" cy="210" r="140" fill="#ffffff" stroke="#94a3b8" stroke-width="3"/>

      <!-- Choroid layer -->
      <circle cx="340" cy="210" r="134" fill="none" stroke="#78350f" stroke-width="2.5"/>

      <!-- Retina (Inner sensory layer) -->
      <path d="M 235 120 A 128 128 0 1 1 235 300" fill="none" stroke="#ef4444" stroke-width="4"/>
      <text x="420" y="115" class="text-xs font-bold fill-red-700">Retina (Photoreceptors)</text>

      <!-- Fovea Centralis (Yellow Spot) -->
      <circle cx="468" cy="210" r="4" fill="#eab308"/>
      <text x="480" y="214" class="text-[10px] font-bold fill-amber-700">Fovea (Sharpest vision)</text>

      <!-- Optic Nerve Exit (Blind Spot) -->
      <path d="M 460 250 L 530 280 L 530 305 L 450 270" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
      <text x="540" y="295" class="text-xs font-bold fill-orange-800">Optic Nerve</text>

      <!-- Cornea (Anterior curved bulge) -->
      <path d="M 235 120 A 100 100 0 0 0 235 300" fill="#f0f9ff" stroke="#0284c7" stroke-width="3.5"/>
      <text x="130" y="215" text-anchor="middle" class="text-xs font-bold fill-sky-800">Cornea</text>

      <!-- Iris Diaphragm -->
      <line x1="245" y1="135" x2="255" y2="180" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
      <line x1="245" y1="285" x2="255" y2="240" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
      <text x="215" y="155" class="text-xs font-bold fill-slate-800">Iris</text>

      <!-- Pupil (Aperture between iris blades) -->
      <line x1="255" y1="180" x2="255" y2="240" stroke="#0284c7" stroke-dasharray="2,2" stroke-width="1.5"/>
      <text x="215" y="215" class="text-xs font-bold fill-blue-700">Pupil</text>

      <!-- Crystalline Biconvex Lens -->
      <path d="M 270 170 Q 285 210 270 250 Q 255 210 270 170 Z" fill="url(#lensGrad)" stroke="#0369a1" stroke-width="2.5"/>
      <text x="280" y="160" text-anchor="middle" class="text-xs font-bold fill-sky-900">Lens</text>

      <!-- Ciliary Body & Suspensory Ligaments -->
      <line x1="270" y1="170" x2="260" y2="140" stroke="#b91c1c" stroke-width="2"/>
      <line x1="270" y1="250" x2="260" y2="280" stroke="#b91c1c" stroke-width="2"/>
      <text x="290" y="295" class="text-[10px] font-bold fill-red-800">Ciliary Muscle</text>

      <!-- Vitreous Chamber -->
      <text x="360" y="215" text-anchor="middle" class="text-xs font-semibold fill-slate-400">Vitreous Humour</text>

      <!-- Footer Summary -->
      <rect x="50" y="370" width="500" height="36" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="300" y="392" text-anchor="middle" class="text-xs font-semibold fill-slate-700">
        Light Path: <tspan fill="#0284c7" font-weight="bold">Cornea</tspan> → <tspan fill="#1e293b" font-weight="bold">Pupil</tspan> → <tspan fill="#0369a1" font-weight="bold">Biconvex Lens</tspan> → <tspan fill="#ef4444" font-weight="bold">Retina (Real, Inverted Image)</tspan>
      </text>
    </svg>
  `,

  statesOfMatter: () => `
    <svg viewBox="0 0 600 420" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="420" fill="#f8fafc" rx="12"/>

      <text x="300" y="30" text-anchor="middle" class="text-sm font-bold fill-slate-900">Kinetic Molecular Theory: Three States of Matter</text>

      <!-- Solid Box -->
      <g transform="translate(30, 60)">
        <rect width="160" height="260" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="80" y="26" text-anchor="middle" class="text-xs font-bold fill-blue-700">SOLID STATE</text>
        
        <!-- Jar container -->
        <rect x="25" y="45" width="110" height="120" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- Ordered Lattice of Particles -->
        <g fill="#2563eb" stroke="#1d4ed8" stroke-width="1">
          <circle cx="45" cy="115" r="7"/><circle cx="63" cy="115" r="7"/><circle cx="81" cy="115" r="7"/><circle cx="99" cy="115" r="7"/><circle cx="117" cy="115" r="7"/>
          <circle cx="45" cy="131" r="7"/><circle cx="63" cy="131" r="7"/><circle cx="81" cy="131" r="7"/><circle cx="99" cy="131" r="7"/><circle cx="117" cy="131" r="7"/>
          <circle cx="45" cy="147" r="7"/><circle cx="63" cy="147" r="7"/><circle cx="81" cy="147" r="7"/><circle cx="99" cy="147" r="7"/><circle cx="117" cy="147" r="7"/>
        </g>

        <text x="80" y="190" text-anchor="middle" class="text-[10px] font-bold fill-slate-800">Definite Shape & Vol</text>
        <text x="80" y="206" text-anchor="middle" class="text-[9px] fill-slate-600">Negligible space</text>
        <text x="80" y="220" text-anchor="middle" class="text-[9px] fill-slate-600">Max attraction force</text>
        <text x="80" y="234" text-anchor="middle" class="text-[9px] fill-slate-600">Only vibrate in place</text>
      </g>

      <!-- Liquid Box -->
      <g transform="translate(220, 60)">
        <rect width="160" height="260" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="80" y="26" text-anchor="middle" class="text-xs font-bold fill-emerald-700">LIQUID STATE</text>
        
        <!-- Jar container -->
        <rect x="25" y="45" width="110" height="120" rx="4" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
        
        <!-- Loosely arranged particles -->
        <g fill="#10b981" stroke="#047857" stroke-width="1">
          <circle cx="42" cy="120" r="7"/><circle cx="68" cy="115" r="7"/><circle cx="95" cy="122" r="7"/><circle cx="118" cy="118" r="7"/>
          <circle cx="50" cy="138" r="7"/><circle cx="78" cy="142" r="7"/><circle cx="110" cy="136" r="7"/>
          <circle cx="40" cy="155" r="7"/><circle cx="65" cy="158" r="7"/><circle cx="92" cy="154" r="7"/><circle cx="120" cy="156" r="7"/>
        </g>

        <text x="80" y="190" text-anchor="middle" class="text-[10px] font-bold fill-slate-800">Indefinite Shape, Fixed Vol</text>
        <text x="80" y="206" text-anchor="middle" class="text-[9px] fill-slate-600">Moderate space</text>
        <text x="80" y="220" text-anchor="middle" class="text-[9px] fill-slate-600">Moderate attraction</text>
        <text x="80" y="234" text-anchor="middle" class="text-[9px] fill-slate-600">Fluid sliding motion</text>
      </g>

      <!-- Gas Box -->
      <g transform="translate(410, 60)">
        <rect width="160" height="260" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="80" y="26" text-anchor="middle" class="text-xs font-bold fill-purple-700">GASEOUS STATE</text>
        
        <!-- Jar container with lid -->
        <rect x="25" y="45" width="110" height="120" rx="4" fill="#faf5ff" stroke="#a855f7" stroke-width="2"/>
        <rect x="20" y="40" width="120" height="8" rx="2" fill="#64748b"/>

        <!-- Widely separated fast particles with vector lines -->
        <g fill="#a855f7" stroke="#7e22ce" stroke-width="1">
          <circle cx="45" cy="65" r="6"/>
          <line x1="45" y1="65" x2="60" y2="75" stroke="#7e22ce" stroke-width="1.5"/>

          <circle cx="105" cy="80" r="6"/>
          <line x1="105" y1="80" x2="85" y2="90" stroke="#7e22ce" stroke-width="1.5"/>

          <circle cx="55" cy="120" r="6"/>
          <line x1="55" y1="120" x2="70" y2="135" stroke="#7e22ce" stroke-width="1.5"/>

          <circle cx="115" cy="140" r="6"/>
          <line x1="115" y1="140" x2="95" y2="130" stroke="#7e22ce" stroke-width="1.5"/>
        </g>

        <text x="80" y="190" text-anchor="middle" class="text-[10px] font-bold fill-slate-800">No Fixed Shape / Volume</text>
        <text x="80" y="206" text-anchor="middle" class="text-[9px] fill-slate-600">Maximum space</text>
        <text x="80" y="220" text-anchor="middle" class="text-[9px] fill-slate-600">Negligible attraction</text>
        <text x="80" y="234" text-anchor="middle" class="text-[9px] fill-slate-600">Random high speed</text>
      </g>

      <!-- Interconversion arrows -->
      <rect x="40" y="345" width="520" height="60" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="300" y="368" text-anchor="middle" class="text-xs font-bold fill-slate-800">Phase Interconversions</text>
      <text x="300" y="390" text-anchor="middle" class="text-[11px] font-semibold fill-slate-600">
        Solid ⇄ (Melting/Freezing) ⇄ Liquid ⇄ (Boiling/Condensation) ⇄ Gas &nbsp;|&nbsp; <tspan fill="#7c3aed" font-weight="bold">Sublimation</tspan>: Solid → Gas direct
      </text>
    </svg>
  `
};
