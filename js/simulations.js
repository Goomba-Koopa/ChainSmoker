/**
 * ICSE Class 7 Interactive Virtual Laboratories & Real-time Simulations
 * Clean White/Light UI with high performance SVG & Canvas interactive rendering.
 */

import { ELEMENTS_1_TO_20 } from '../src/data/curriculumData.js';

export const SIMULATIONS = {
  // 1. Light Reflection Sandbox
  renderReflectionSim: (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    let angle = 45;
    let showProtractor = true;

    const render = () => {
      const rad = (angle * Math.PI) / 180;
      const rayLength = 220;
      
      // Point O at (300, 260)
      const ox = 300;
      const oy = 260;
      
      // Incident ray start point: A
      const ax = ox - rayLength * Math.sin(rad);
      const ay = oy - rayLength * Math.cos(rad);
      
      // Reflected ray end point: B
      const bx = ox + rayLength * Math.sin(rad);
      const by = oy - rayLength * Math.cos(rad);

      const glancingAngle = 90 - angle;

      container.innerHTML = `
        <div class="academic-card p-5 bg-white space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <h3 class="text-base font-bold text-slate-900">Virtual Optical Bench: Law of Reflection</h3>
              <p class="text-xs text-slate-500">Adjust the Angle of Incidence (∠i) and observe the corresponding Reflected Ray (∠r).</p>
            </div>
            <div class="flex items-center gap-2">
              <button id="toggle-protractor-btn" class="px-3 py-1.5 text-xs font-semibold rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700 transition">
                ${showProtractor ? 'Hide Protractor' : 'Show Protractor'}
              </button>
              <span class="badge-academic bg-blue-50 text-blue-700 border border-blue-200 font-mono">∠i = ∠r = ${angle}°</span>
            </div>
          </div>

          <!-- Controls Bar -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
            <div>
              <div class="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Angle of Incidence (∠i):</span>
                <span class="text-blue-600 font-bold font-mono">${angle}°</span>
              </div>
              <input type="range" id="angle-slider" min="0" max="85" step="1" value="${angle}" class="w-full accent-blue-600 cursor-pointer">
            </div>

            <div class="flex flex-col justify-center bg-white p-2.5 rounded border border-slate-200">
              <span class="text-slate-500 font-medium">Glancing Angle (with surface):</span>
              <span class="text-amber-600 font-bold font-mono text-sm">g = 90° - ${angle}° = ${glancingAngle}°</span>
            </div>

            <div class="flex flex-col justify-center bg-white p-2.5 rounded border border-slate-200">
              <span class="text-slate-500 font-medium">Deviation Angle (δ):</span>
              <span class="text-purple-600 font-bold font-mono text-sm">δ = 180° - 2(${angle}°) = ${180 - 2 * angle}°</span>
            </div>
          </div>

          <!-- SVG Visualizer Stage -->
          <div class="diagram-stage-container w-full h-[360px] bg-slate-50 flex items-center justify-center relative">
            <svg viewBox="0 0 600 340" class="w-full h-full">
              <defs>
                <marker id="simRayArr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
                </marker>
                <marker id="simReflArr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                </marker>
              </defs>

              ${showProtractor ? `
                <!-- Protractor Arc -->
                <g opacity="0.35">
                  <path d="M 120 260 A 180 180 0 0 1 480 260 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
                  <!-- Degree Ticks -->
                  <circle cx="300" cy="260" r="170" fill="none" stroke="#cbd5e1" stroke-dasharray="2,8"/>
                  <line x1="300" y1="260" x2="300" y2="80" stroke="#94a3b8" stroke-width="1"/>
                  <text x="300" y="74" font-size="9" text-anchor="middle" fill="#64748b font-mono">0° (Normal)</text>
                  <text x="135" y="255" font-size="9" text-anchor="middle" fill="#64748b font-mono">90°</text>
                  <text x="465" y="255" font-size="9" text-anchor="middle" fill="#64748b font-mono">90°</text>
                </g>
              ` : ''}

              <!-- Plane Mirror Surface -->
              <rect x="60" y="260" width="480" height="14" rx="2" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
              <!-- Hatching -->
              <g stroke="#94a3b8" stroke-width="1.5">
                ${Array.from({ length: 24 }).map((_, i) => `<line x1="${75 + i * 20}" y1="274" x2="${65 + i * 20}" y2="288"/>`).join('')}
              </g>
              <text x="545" y="271" font-size="11" font-weight="700" fill="#334155">Mirror M M'</text>

              <!-- Point of Incidence O -->
              <circle cx="${ox}" cy="${oy}" r="5" fill="#0f172a"/>
              <text x="${ox}" y="${oy + 22}" font-size="11" font-weight="700" text-anchor="middle" fill="#0f172a">O (Point of Incidence)</text>

              <!-- Normal Line ON -->
              <line x1="${ox}" y1="50" x2="${ox}" y2="${oy}" stroke="#059669" stroke-width="2" stroke-dasharray="5,4"/>
              <text x="${ox + 6}" y="65" font-size="11" font-weight="700" fill="#047857">Normal (N)</text>

              <!-- Incident Ray AO -->
              <line x1="${ax}" y1="${ay}" x2="${ox}" y2="${oy}" stroke="#2563eb" stroke-width="3.5" marker-mid="url(#simRayArr)"/>
              <circle cx="${ax}" cy="${ay}" r="5" fill="#2563eb"/>
              <text x="${ax - 10}" y="${ay - 8}" font-size="11" font-weight="700" fill="#1d4ed8">Incident Ray (AO)</text>

              <!-- Reflected Ray OB -->
              <line x1="${ox}" y1="${oy}" x2="${bx}" y2="${by}" stroke="#dc2626" stroke-width="3.5" marker-mid="url(#simReflArr)"/>
              <circle cx="${bx}" cy="${by}" r="5" fill="#dc2626"/>
              <text x="${bx + 10}" y="${by - 8}" font-size="11" font-weight="700" fill="#b91c1c">Reflected Ray (OB)</text>

              <!-- Angle Arc for i -->
              <path d="M ${ox - 60 * Math.sin(rad)} ${oy - 60 * Math.cos(rad)} A 60 60 0 0 1 ${ox} ${oy - 60}" fill="none" stroke="#2563eb" stroke-width="2"/>
              <text x="${ox - 30 * Math.sin(rad / 2) - 10}" y="${oy - 45}" font-size="11" font-weight="700" fill="#1d4ed8">i=${angle}°</text>

              <!-- Angle Arc for r -->
              <path d="M ${ox} ${oy - 60} A 60 60 0 0 1 ${ox + 60 * Math.sin(rad)} ${oy - 60 * Math.cos(rad)}" fill="none" stroke="#dc2626" stroke-width="2"/>
              <text x="${ox + 30 * Math.sin(rad / 2) + 6}" y="${oy - 45}" font-size="11" font-weight="700" fill="#b91c1c">r=${angle}°</text>
            </svg>
          </div>

          <!-- Rationale Card -->
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 leading-relaxed">
            <span class="font-bold">First Law Verified:</span> The angle formed between the incident ray and the normal is exactly equal to the angle formed between the reflected ray and the normal (<span class="font-mono font-bold">∠i = ∠r</span>). Both rays and the normal lie in the same plane.
          </div>
        </div>
      `;

      // Event Listeners
      const slider = container.querySelector('#angle-slider');
      if (slider) {
        slider.addEventListener('input', (e) => {
          angle = parseInt(e.target.value, 10);
          render();
        });
      }

      const toggleBtn = container.querySelector('#toggle-protractor-btn');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          showProtractor = !showProtractor;
          render();
        });
      }
    };

    render();
  },

  // 2. Open-Tube U-Tube Manometer Sandbox
  renderManometerSim: (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    let pGasKPa = 108; // Gas pressure in kPa (101.3 is atmospheric)
    let fluidType = 'water'; // 'water' (1000 kg/m3) or 'mercury' (13600 kg/m3)

    const render = () => {
      const pAtmKPa = 101.325;
      const deltaPKPa = pGasKPa - pAtmKPa; // in kPa
      const deltaPPa = deltaPKPa * 1000; // in Pascals

      const density = fluidType === 'water' ? 1000 : 13600;
      const g = 9.8;

      // Delta h in meters: Δh = ΔP / (ρ * g)
      const deltaHMeters = deltaPPa / (density * g);
      const deltaHCm = deltaHMeters * 100; // in cm

      // Visual scaling: base height level at y = 200 in SVG
      // Clamp visual displacement for clean aesthetic
      const visualDisplacement = Math.min(Math.max(deltaHCm * 4, -90), 90);
      
      const leftLevel = 200 + visualDisplacement / 2; // Depressed when P > Patm
      const rightLevel = 200 - visualDisplacement / 2; // Raised when P > Patm

      container.innerHTML = `
        <div class="academic-card p-5 bg-white space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <h3 class="text-base font-bold text-slate-900">Hydrostatic Lab: U-Tube Liquid Manometer</h3>
              <p class="text-xs text-slate-500">Measure gauge pressure and compute liquid height difference using <span class="font-mono font-bold">P = P₀ + ρgh</span>.</p>
            </div>
            <div class="flex items-center gap-2">
              <select id="fluid-select" class="px-2.5 py-1.5 text-xs font-semibold rounded-md border border-slate-200 bg-white text-slate-800">
                <option value="water" ${fluidType === 'water' ? 'selected' : ''}>Fluid: Water (ρ = 1000 kg/m³)</option>
                <option value="mercury" ${fluidType === 'mercury' ? 'selected' : ''}>Fluid: Mercury (ρ = 13600 kg/m³)</option>
              </select>
            </div>
          </div>

          <!-- Controls Bar -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
            <div>
              <div class="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Enclosed Gas Pressure (P_gas):</span>
                <span class="text-blue-600 font-bold font-mono">${pGasKPa.toFixed(1)} kPa</span>
              </div>
              <input type="range" id="pgas-slider" min="95" max="115" step="0.2" value="${pGasKPa}" class="w-full accent-blue-600 cursor-pointer">
              <div class="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>Suction (95 kPa)</span>
                <span>Atm (101.3 kPa)</span>
                <span>Positive (115 kPa)</span>
              </div>
            </div>

            <div class="flex flex-col justify-center bg-white p-2.5 rounded border border-slate-200">
              <span class="text-slate-500 font-medium">Gauge Pressure (P - P₀):</span>
              <span class="font-bold font-mono text-sm ${deltaPKPa >= 0 ? 'text-emerald-700' : 'text-red-600'}">
                ${deltaPKPa >= 0 ? '+' : ''}${deltaPKPa.toFixed(2)} kPa (${deltaPPa.toFixed(0)} Pa)
              </span>
            </div>

            <div class="flex flex-col justify-center bg-white p-2.5 rounded border border-slate-200">
              <span class="text-slate-500 font-medium">Calculated Column Difference (Δh):</span>
              <span class="text-blue-700 font-bold font-mono text-sm">${deltaHCm >= 0 ? '+' : ''}${deltaHCm.toFixed(2)} cm</span>
            </div>
          </div>

          <!-- Visual Manometer Stage -->
          <div class="diagram-stage-container w-full h-[360px] bg-slate-50 flex items-center justify-center relative">
            <svg viewBox="0 0 600 340" class="w-full h-full">
              <defs>
                <linearGradient id="waterFluid" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#38bdf8"/>
                  <stop offset="100%" stop-color="#0284c7"/>
                </linearGradient>
                <linearGradient id="mercuryFluid" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#94a3b8"/>
                  <stop offset="100%" stop-color="#475569"/>
                </linearGradient>
              </defs>

              <!-- Gas Container Left -->
              <circle cx="120" cy="120" r="50" fill="#f1f5f9" stroke="#64748b" stroke-width="2.5"/>
              <text x="120" y="115" font-size="12" font-weight="700" text-anchor="middle" fill="#0f172a">GAS RESERVOIR</text>
              <text x="120" y="132" font-size="11" font-weight="600" text-anchor="middle" fill="#2563eb font-mono">${pGasKPa.toFixed(1)} kPa</text>

              <!-- Connecting tube to Left limb -->
              <path d="M 170 120 L 250 120 L 250 200" fill="none" stroke="#64748b" stroke-width="20" stroke-linejoin="round"/>
              <path d="M 170 120 L 250 120 L 250 200" fill="none" stroke="#ffffff" stroke-width="14" stroke-linejoin="round"/>

              <!-- Glass U-Tube Outer -->
              <!-- Left limb (250), U-bend at bottom (300), Right limb (350) -->
              <path d="M 235 60 L 235 270 Q 300 330 365 270 L 365 60" fill="none" stroke="#64748b" stroke-width="2.5"/>
              <path d="M 265 60 L 265 260 Q 300 295 335 260 L 335 60" fill="none" stroke="#64748b" stroke-width="2.5"/>

              <!-- Liquid Column in U-Tube -->
              <path d="M 236 ${leftLevel} L 236 270 Q 300 328 364 270 L 364 ${rightLevel} L 336 ${rightLevel} L 336 260 Q 300 294 264 260 L 264 ${leftLevel} Z" 
                    fill="${fluidType === 'water' ? 'url(#waterFluid)' : 'url(#mercuryFluid)'}" opacity="0.85"/>

              <!-- Meniscus Left -->
              <ellipse cx="250" cy="${leftLevel}" rx="14" ry="4" fill="${fluidType === 'water' ? '#0284c7' : '#334155'}"/>
              <text x="195" y="${leftLevel + 4}" font-size="10" font-weight="700" fill="#0f172a">h₁ (Gas)</text>

              <!-- Meniscus Right -->
              <ellipse cx="350" cy="${rightLevel}" rx="14" ry="4" fill="${fluidType === 'water' ? '#0284c7' : '#334155'}"/>
              <text x="405" y="${rightLevel + 4}" font-size="10" font-weight="700" fill="#0f172a">h₂ (Atm)</text>

              <!-- Atmospheric Pressure Arrow Top Right -->
              <line x1="350" y1="20" x2="350" y2="55" stroke="#059669" stroke-width="3"/>
              <polygon points="350,55 345,45 355,45" fill="#059669"/>
              <text x="350" y="15" font-size="10" font-weight="700" text-anchor="middle" fill="#047857">P₀ = 101.3 kPa</text>

              <!-- Isobaric Datum Line across lower level -->
              ${deltaHCm >= 0 ? `
                <line x1="220" y1="${leftLevel}" x2="380" y2="${leftLevel}" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4"/>
                <text x="430" y="${leftLevel + 4}" font-size="9" font-weight="700" fill="#b91c1c">Datum (P_A = P_B)</text>
                
                <!-- Delta h dimension bracket -->
                <line x1="380" y1="${leftLevel}" x2="380" y2="${rightLevel}" stroke="#2563eb" stroke-width="2"/>
                <polygon points="380,${rightLevel} 376,${rightLevel + 6} 384,${rightLevel + 6}" fill="#2563eb"/>
                <polygon points="380,${leftLevel} 376,${leftLevel - 6} 384,${leftLevel - 6}" fill="#2563eb"/>
                <text x="400" y="${(leftLevel + rightLevel) / 2 + 4}" font-size="11" font-weight="700" fill="#1d4ed8">Δh = ${deltaHCm.toFixed(1)} cm</text>
              ` : `
                <line x1="220" y1="${rightLevel}" x2="380" y2="${rightLevel}" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4"/>
                <text x="430" y="${rightLevel + 4}" font-size="9" font-weight="700" fill="#b91c1c">Datum (P_A = P_B)</text>
              `}
            </svg>
          </div>

          <!-- Formula explainer -->
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 leading-relaxed font-mono">
            <strong>Formula Application:</strong> P_gas = P_atm + ρ·g·Δh = 101325 + (${density} × 9.8 × ${(deltaHMeters).toFixed(3)}) = ${(101325 + density * 9.8 * deltaHMeters).toFixed(0)} Pa (${((101325 + density * 9.8 * deltaHMeters) / 1000).toFixed(2)} kPa).
          </div>
        </div>
      `;

      // Event listeners
      const slider = container.querySelector('#pgas-slider');
      if (slider) {
        slider.addEventListener('input', (e) => {
          pGasKPa = parseFloat(e.target.value);
          render();
        });
      }

      const select = container.querySelector('#fluid-select');
      if (select) {
        select.addEventListener('change', (e) => {
          fluidType = e.target.value;
          render();
        });
      }
    };

    render();
  },

  // 3. Dynamic Bohr Atomic Structure Explorer (Elements 1-20)
  renderBohrSim: (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    let selectedZ = 11; // Sodium default

    const render = () => {
      const element = ELEMENTS_1_TO_20.find(e => e.atomicNumber === selectedZ) || ELEMENTS_1_TO_20[10];
      const { K, L, M, N } = element.shellConfig;

      // Helper to generate electron dots around a radius
      const renderElectronsOnRing = (count, radius, cx = 250, cy = 180) => {
        if (count === 0) return '';
        const dots = [];
        for (let i = 0; i < count; i++) {
          const angle = (2 * Math.PI * i) / count - Math.PI / 2;
          const ex = cx + radius * Math.cos(angle);
          const ey = cy + radius * Math.sin(angle);
          dots.push(`
            <circle cx="${ex}" cy="${ey}" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/>
          `);
        }
        return dots.join('');
      };

      container.innerHTML = `
        <div class="academic-card p-5 bg-white space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <h3 class="text-base font-bold text-slate-900">Bohr-Rutherford Atomic Shell Generator (Elements 1–20)</h3>
              <p class="text-xs text-slate-500">Interactive electronic configurations, principal shells (K, L, M, N), and valency rules.</p>
            </div>
            <div class="flex items-center gap-2">
              <span class="badge-academic bg-blue-50 text-blue-700 border border-blue-200">Z = ${element.atomicNumber}</span>
              <span class="badge-academic bg-emerald-50 text-emerald-700 border border-emerald-200">${element.category}</span>
            </div>
          </div>

          <!-- Element Selector Buttons Grid -->
          <div class="flex flex-wrap gap-1.5 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            ${ELEMENTS_1_TO_20.map(el => `
              <button data-z="${el.atomicNumber}" class="el-btn px-2 py-1 text-xs font-bold rounded transition border ${el.atomicNumber === selectedZ ? 'bg-blue-600 text-white border-blue-700 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'}">
                ${el.symbol} <span class="text-[10px] opacity-75 font-normal">(${el.atomicNumber})</span>
              </button>
            `).join('')}
          </div>

          <!-- Main Visualizer Grid -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
            <!-- Left 7 cols: SVG Atom Visualizer -->
            <div class="md:col-span-7 diagram-stage-container h-[360px] bg-slate-50 flex items-center justify-center">
              <svg viewBox="0 0 500 360" class="w-full h-full">
                <!-- Center Nucleus at (250, 180) -->
                <!-- Concentric Shell Rings -->
                <!-- K Shell (r = 45) -->
                <circle cx="250" cy="180" r="45" fill="none" stroke="${K > 0 ? '#94a3b8' : '#e2e8f0'}" stroke-width="1.5" stroke-dasharray="3,3"/>
                ${K > 0 ? `<text x="250" y="130" font-size="9" font-weight="700" text-anchor="middle" fill="#64748b">K (n=1)</text>` : ''}
                
                <!-- L Shell (r = 75) -->
                ${L > 0 || K === 2 ? `
                  <circle cx="250" cy="180" r="75" fill="none" stroke="${L > 0 ? '#94a3b8' : '#e2e8f0'}" stroke-width="1.5" stroke-dasharray="3,3"/>
                  <text x="250" y="100" font-size="9" font-weight="700" text-anchor="middle" fill="#64748b">L (n=2)</text>
                ` : ''}

                <!-- M Shell (r = 105) -->
                ${M > 0 ? `
                  <circle cx="250" cy="180" r="105" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
                  <text x="250" y="70" font-size="9" font-weight="700" text-anchor="middle" fill="#64748b">M (n=3)</text>
                ` : ''}

                <!-- N Shell (r = 135) -->
                ${N > 0 ? `
                  <circle cx="250" cy="180" r="135" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
                  <text x="250" y="40" font-size="9" font-weight="700" text-anchor="middle" fill="#64748b">N (n=4)</text>
                ` : ''}

                <!-- Electrons on Shells -->
                ${renderElectronsOnRing(K, 45)}
                ${renderElectronsOnRing(L, 75)}
                ${renderElectronsOnRing(M, 105)}
                ${renderElectronsOnRing(N, 135)}

                <!-- Dense Central Nucleus -->
                <circle cx="250" cy="180" r="24" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
                <text x="250" y="176" font-size="10" font-weight="800" text-anchor="middle" fill="#ffffff">${element.protons}p⁺</text>
                <text x="250" y="190" font-size="10" font-weight="800" text-anchor="middle" fill="#fed7aa">${element.neutrons}n⁰</text>
              </svg>
            </div>

            <!-- Right 5 cols: Structured Atomic Facts Card -->
            <div class="md:col-span-5 flex flex-col justify-between bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs space-y-3">
              <div>
                <div class="flex items-baseline justify-between">
                  <h4 class="text-base font-bold text-slate-900">${element.name} (${element.symbol})</h4>
                  <span class="font-mono text-xs font-semibold text-slate-500">Atomic # ${element.atomicNumber}</span>
                </div>
                <p class="text-slate-600 mt-1">Mass Number A = <span class="font-bold text-slate-900 font-mono">${element.massNumber}</span> (Nucleons = ${element.protons}p + ${element.neutrons}n)</p>
              </div>

              <!-- Shell Breakdown Table -->
              <div class="bg-white p-2.5 rounded border border-slate-200">
                <span class="text-[11px] font-bold text-slate-700 block mb-1.5">Electronic Configuration:</span>
                <div class="grid grid-cols-4 gap-1 text-center font-mono font-bold">
                  <div class="p-1 bg-blue-50 text-blue-800 rounded">K: ${K}</div>
                  <div class="p-1 bg-blue-50 text-blue-800 rounded">L: ${L}</div>
                  <div class="p-1 bg-blue-50 text-blue-800 rounded">M: ${M}</div>
                  <div class="p-1 bg-blue-50 text-blue-800 rounded">N: ${N}</div>
                </div>
              </div>

              <!-- Valency & Reactivity -->
              <div class="grid grid-cols-2 gap-2">
                <div class="p-2 bg-white rounded border border-slate-200">
                  <span class="text-slate-500 block text-[10px]">Valency:</span>
                  <span class="text-sm font-bold text-blue-700 font-mono">${element.valency}</span>
                </div>
                <div class="p-2 bg-white rounded border border-slate-200">
                  <span class="text-slate-500 block text-[10px]">Valence Electrons:</span>
                  <span class="text-sm font-bold text-emerald-700 font-mono">${N > 0 ? N : (M > 0 ? M : (L > 0 ? L : K))}</span>
                </div>
              </div>

              <!-- ICSE Note -->
              <div class="p-2.5 bg-amber-50 border border-amber-200 rounded text-amber-900 text-[11px] leading-relaxed">
                <strong>ICSE Tip:</strong> ${element.icseExamNote}
              </div>
            </div>
          </div>
        </div>
      `;

      // Event listeners
      container.querySelectorAll('.el-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          selectedZ = parseInt(btn.getAttribute('data-z'), 10);
          render();
        });
      });
    };

    render();
  },

  // 4. Acid, Base & Indicator Virtual Chemistry Lab
  renderPhLabSim: (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const solutions = [
      { id: 'hcl', name: 'Dilute Hydrochloric Acid (HCl)', ph: 1.5, type: 'Strong Acid', formula: 'HCl' },
      { id: 'lemon', name: 'Fresh Lemon Juice (Citric Acid)', ph: 2.3, type: 'Weak Organic Acid', formula: 'C₆H₈O₇' },
      { id: 'vinegar', name: 'Vinegar (Acetic Acid)', ph: 3.0, type: 'Weak Acid', formula: 'CH₃COOH' },
      { id: 'water', name: 'Pure Distilled Water', ph: 7.0, type: 'Neutral', formula: 'H₂O' },
      { id: 'baking', name: 'Baking Soda Solution', ph: 8.5, type: 'Mild Base', formula: 'NaHCO₃' },
      { id: 'magnesia', name: 'Milk of Magnesia', ph: 10.5, type: 'Base / Antacid', formula: 'Mg(OH)₂' },
      { id: 'naoh', name: 'Sodium Hydroxide (Caustic Soda)', ph: 13.5, type: 'Strong Alkali', formula: 'NaOH' }
    ];

    let currentSolId = 'lemon';
    let currentIndicator = 'blue_litmus';

    const getIndicatorColor = (ph, ind) => {
      if (ind === 'blue_litmus') {
        return ph < 7 ? '#ef4444' : '#3b82f6';
      }
      if (ind === 'red_litmus') {
        return ph > 7 ? '#3b82f6' : '#ef4444';
      }
      if (ind === 'phenolphthalein') {
        return ph >= 8.3 ? '#ec4899' : '#f8fafc';
      }
      if (ind === 'methyl_orange') {
        if (ph < 3.1) return '#dc2626';
        if (ph <= 4.4) return '#f97316';
        return '#facc15';
      }
      if (ind === 'universal') {
        if (ph <= 2) return '#ef4444';
        if (ph <= 4) return '#f97316';
        if (ph <= 6) return '#facc15';
        if (ph === 7) return '#22c55e';
        if (ph <= 9) return '#06b6d4';
        if (ph <= 11) return '#3b82f6';
        return '#7c3aed';
      }
      return '#38bdf8';
    };

    const render = () => {
      const sol = solutions.find(s => s.id === currentSolId) || solutions[0];
      const liquidColor = getIndicatorColor(sol.ph, currentIndicator);

      container.innerHTML = `
        <div class="academic-card p-5 bg-white space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <h3 class="text-base font-bold text-slate-900">Virtual Chemistry Lab: Acid-Base Indicators & pH Testing</h3>
              <p class="text-xs text-slate-500">Add test reagents into solutions to witness qualitative color shifts and neutralizations.</p>
            </div>
            <span class="badge-academic ${sol.ph < 7 ? 'bg-red-50 text-red-700 border-red-200' : (sol.ph === 7 ? 'bg-green-50 text-green-700 border-green-200' : 'bg-purple-50 text-purple-700 border-purple-200')} font-mono">
              pH ${sol.ph} • ${sol.type}
            </span>
          </div>

          <!-- Selection Controls -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
            <div>
              <label class="block font-bold text-slate-700 mb-1">1. Choose Test Sample Solution:</label>
              <select id="sol-select" class="w-full px-2.5 py-1.5 rounded border border-slate-200 bg-white font-medium text-slate-800">
                ${solutions.map(s => `<option value="${s.id}" ${s.id === currentSolId ? 'selected' : ''}>${s.name} (pH ${s.ph})</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">2. Choose Chemical Indicator:</label>
              <select id="ind-select" class="w-full px-2.5 py-1.5 rounded border border-slate-200 bg-white font-medium text-slate-800">
                <option value="blue_litmus" ${currentIndicator === 'blue_litmus' ? 'selected' : ''}>Blue Litmus Paper / Solution</option>
                <option value="red_litmus" ${currentIndicator === 'red_litmus' ? 'selected' : ''}>Red Litmus Paper / Solution</option>
                <option value="phenolphthalein" ${currentIndicator === 'phenolphthalein' ? 'selected' : ''}>Phenolphthalein Indicator</option>
                <option value="methyl_orange" ${currentIndicator === 'methyl_orange' ? 'selected' : ''}>Methyl Orange Indicator</option>
                <option value="universal" ${currentIndicator === 'universal' ? 'selected' : ''}>Universal pH Indicator</option>
              </select>
            </div>
          </div>

          <!-- Beaker Visualizer -->
          <div class="diagram-stage-container w-full h-[320px] bg-slate-50 flex items-center justify-center">
            <svg viewBox="0 0 500 300" class="w-full h-full">
              <!-- Lab Bench surface -->
              <rect x="50" y="260" width="400" height="12" rx="2" fill="#cbd5e1" stroke="#64748b"/>

              <!-- Glass Beaker at center -->
              <g transform="translate(180, 70)">
                <!-- Beaker body -->
                <rect x="0" y="0" width="140" height="180" rx="8" fill="none" stroke="#475569" stroke-width="3"/>
                <!-- Lip -->
                <path d="M -6 0 L 146 0" stroke="#475569" stroke-width="4"/>

                <!-- Liquid with animated smooth transition -->
                <rect x="4" y="60" width="132" height="116" rx="4" fill="${liquidColor}" opacity="0.85" style="transition: fill 0.4s ease;"/>
                <ellipse cx="70" cy="60" rx="66" ry="8" fill="${liquidColor}" opacity="0.95" style="transition: fill 0.4s ease;"/>

                <!-- Measurement markings on glass -->
                <line x1="120" y1="80" x2="135" y2="80" stroke="#334155" stroke-width="1.5"/>
                <text x="110" y="83" font-size="8" fill="#334155" text-anchor="end font-mono">150 mL</text>
                <line x1="125" y1="110" x2="135" y2="110" stroke="#334155" stroke-width="1.5"/>
                <line x1="120" y1="140" x2="135" y2="140" stroke="#334155" stroke-width="1.5"/>
                <text x="110" y="143" font-size="8" fill="#334155" text-anchor="end font-mono">50 mL</text>

                <!-- Solution Label Inside Beaker -->
                <text x="70" y="125" font-size="11" font-weight="700" text-anchor="middle" fill="#0f172a">${sol.formula}</text>
              </g>

              <!-- Dropper with Indicator above beaker -->
              <g transform="translate(245, 10)">
                <rect x="3" y="0" width="4" height="40" fill="#cbd5e1" stroke="#475569"/>
                <circle cx="5" cy="45" r="4" fill="${liquidColor}"/>
              </g>

              <!-- Result Callout -->
              <g transform="translate(340, 100)">
                <rect width="140" height="90" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
                <text x="10" y="20" font-size="10" font-weight="700" fill="#0f172a">Observation:</text>
                <text x="10" y="40" font-size="11" font-weight="bold" fill="${liquidColor === '#f8fafc' ? '#64748b' : liquidColor}">
                  ${liquidColor === '#f8fafc' ? 'Colorless / No Shift' : 'Turns this Color'}
                </text>
                <text x="10" y="60" font-size="9" fill="#64748b">Nature: ${sol.type}</text>
                <text x="10" y="75" font-size="9" fill="#64748b font-mono">Tested with ${currentIndicator.replace('_', ' ')}</text>
              </g>
            </svg>
          </div>
        </div>
      `;

      // Event listeners
      const solSelect = container.querySelector('#sol-select');
      if (solSelect) {
        solSelect.addEventListener('change', (e) => {
          currentSolId = e.target.value;
          render();
        });
      }

      const indSelect = container.querySelector('#ind-select');
      if (indSelect) {
        indSelect.addEventListener('change', (e) => {
          currentIndicator = e.target.value;
          render();
        });
      }
    };

    render();
  }
};
