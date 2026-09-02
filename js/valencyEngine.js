/**
 * AXIOM ICSE 7 - Chemical Criss-Cross Valency & Formula Studio
 * Interactive tool for Class 7 Chemistry:
 * - Basic Radicals (Electropositive Cations)
 * - Acid Radicals (Electronegative Anions)
 * - Step-by-step Criss-Cross algorithm with common factor reduction
 */

export const CATIONS = [
  { id: 'Na', name: 'Sodium', symbol: 'Na', charge: 1, valency: 1, type: 'Monovalent Cation' },
  { id: 'K', name: 'Potassium', symbol: 'K', charge: 1, valency: 1, type: 'Monovalent Cation' },
  { id: 'NH4', name: 'Ammonium', symbol: 'NH₄', charge: 1, valency: 1, isPolyatomic: true, type: 'Monovalent Polyatomic Cation' },
  { id: 'H', name: 'Hydrogen', symbol: 'H', charge: 1, valency: 1, type: 'Monovalent Cation' },
  { id: 'Mg', name: 'Magnesium', symbol: 'Mg', charge: 2, valency: 2, type: 'Divalent Cation' },
  { id: 'Ca', name: 'Calcium', symbol: 'Ca', charge: 2, valency: 2, type: 'Divalent Cation' },
  { id: 'Zn', name: 'Zinc', symbol: 'Zn', charge: 2, valency: 2, type: 'Divalent Cation' },
  { id: 'Fe2', name: 'Iron(II) / Ferrous', symbol: 'Fe', charge: 2, valency: 2, type: 'Divalent Cation' },
  { id: 'Cu2', name: 'Copper(II) / Cupric', symbol: 'Cu', charge: 2, valency: 2, type: 'Divalent Cation' },
  { id: 'Al', name: 'Aluminium', symbol: 'Al', charge: 3, valency: 3, type: 'Trivalent Cation' },
  { id: 'Fe3', name: 'Iron(III) / Ferric', symbol: 'Fe', charge: 3, valency: 3, type: 'Trivalent Cation' }
];

export const ANIONS = [
  { id: 'Cl', name: 'Chloride', symbol: 'Cl', charge: -1, valency: 1, type: 'Monovalent Anion' },
  { id: 'OH', name: 'Hydroxide', symbol: 'OH', charge: -1, valency: 1, isPolyatomic: true, type: 'Monovalent Polyatomic Anion' },
  { id: 'NO3', name: 'Nitrate', symbol: 'NO₃', charge: -1, valency: 1, isPolyatomic: true, type: 'Monovalent Polyatomic Anion' },
  { id: 'HCO3', name: 'Bicarbonate / Hydrogen Carbonate', symbol: 'HCO₃', charge: -1, valency: 1, isPolyatomic: true, type: 'Monovalent Polyatomic Anion' },
  { id: 'O', name: 'Oxide', symbol: 'O', charge: -2, valency: 2, type: 'Divalent Anion' },
  { id: 'S', name: 'Sulfide', symbol: 'S', charge: -2, valency: 2, type: 'Divalent Anion' },
  { id: 'SO4', name: 'Sulfate', symbol: 'SO₄', charge: -2, valency: 2, isPolyatomic: true, type: 'Divalent Polyatomic Anion' },
  { id: 'CO3', name: 'Carbonate', symbol: 'CO₃', charge: -2, valency: 2, isPolyatomic: true, type: 'Divalent Polyatomic Anion' },
  { id: 'PO4', name: 'Phosphate', symbol: 'PO₄', charge: -3, valency: 3, isPolyatomic: true, type: 'Trivalent Polyatomic Anion' }
];

// Greatest Common Divisor helper
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

export function computeChemicalFormula(cation, anion) {
  const v1 = cation.valency;
  const v2 = anion.valency;
  const commonDivisor = gcd(v1, v2);

  const reducedSubscriptCation = v2 / commonDivisor;
  const reducedSubscriptAnion = v1 / commonDivisor;

  let cationPart = cation.symbol;
  if (reducedSubscriptCation > 1) {
    if (cation.isPolyatomic) {
      cationPart = `(${cation.symbol})${reducedSubscriptCation}`;
    } else {
      cationPart = `${cation.symbol}${reducedSubscriptCation}`;
    }
  }

  let anionPart = anion.symbol;
  if (reducedSubscriptAnion > 1) {
    if (anion.isPolyatomic) {
      anionPart = `(${anion.symbol})${reducedSubscriptAnion}`;
    } else {
      anionPart = `${anion.symbol}${reducedSubscriptAnion}`;
    }
  }

  const finalFormula = `${cationPart}${anionPart}`;
  const compoundName = `${cation.name} ${anion.name}`;

  return {
    cation,
    anion,
    v1,
    v2,
    commonDivisor,
    subscriptCation: reducedSubscriptCation,
    subscriptAnion: reducedSubscriptAnion,
    rawIntermediary: `${cation.symbol}${v2}${anion.symbol}${v1}`,
    finalFormula,
    compoundName
  };
}

export function renderValencyStudio(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let selectedCation = CATIONS[0]; // Sodium
  let selectedAnion = ANIONS[0];   // Chloride

  const renderStudio = () => {
    const result = computeChemicalFormula(selectedCation, selectedAnion);

    container.innerHTML = `
      <div class="space-y-6 max-w-7xl mx-auto pb-12">
        <!-- Header -->
        <div class="academic-card p-6 bg-white border border-slate-200">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="badge-academic bg-emerald-50 text-emerald-700 border border-emerald-200">Class 7 Chemistry Studio</span>
                <span class="badge-academic bg-blue-50 text-blue-700 border border-blue-200">CISCE Rule of Valency</span>
              </div>
              <h1 class="text-xl md:text-2xl font-bold text-slate-900">Criss-Cross Chemical Formula &amp; Valency Lab</h1>
              <p class="text-xs text-slate-600 mt-1 max-w-3xl">
                Combine electropositive basic radicals (cations) and electronegative acid radicals (anions) to derive authentic empirical chemical formulas step-by-step.
              </p>
            </div>
            <span class="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200">
              Rule: Sum of Positive Charges = Sum of Negative Charges
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Left Column: Cation & Anion Selectors (5 cols) -->
          <div class="lg:col-span-5 space-y-5">
            <!-- Cations Panel -->
            <div class="academic-card p-5 bg-white border border-slate-200 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
                  Step 1: Select Electropositive Radical (Cation)
                </h3>
                <span class="text-[11px] font-mono text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded">Basic Radical</span>
              </div>
              <div class="grid grid-cols-2 gap-2 text-xs">
                ${CATIONS.map(c => `
                  <button 
                    class="cation-select-btn p-2.5 rounded-lg border text-left transition flex flex-col justify-between ${c.id === selectedCation.id ? 'border-blue-600 bg-blue-50/70 text-blue-900 font-bold shadow-sm' : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'}"
                    data-id="${c.id}">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-sm font-mono">${c.symbol}<sup>${c.charge > 1 ? c.charge + '+' : '+'}</sup></span>
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">Valency: ${c.valency}</span>
                    </div>
                    <span class="text-[11px] text-slate-600 mt-1 truncate">${c.name}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Anions Panel -->
            <div class="academic-card p-5 bg-white border border-slate-200 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
                  Step 2: Select Electronegative Radical (Anion)
                </h3>
                <span class="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">Acid Radical</span>
              </div>
              <div class="grid grid-cols-2 gap-2 text-xs">
                ${ANIONS.map(a => `
                  <button 
                    class="anion-select-btn p-2.5 rounded-lg border text-left transition flex flex-col justify-between ${a.id === selectedAnion.id ? 'border-emerald-600 bg-emerald-50/70 text-emerald-900 font-bold shadow-sm' : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'}"
                    data-id="${a.id}">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-sm font-mono">${a.symbol}<sup>${Math.abs(a.charge) > 1 ? Math.abs(a.charge) + '-' : '-'}</sup></span>
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">Valency: ${a.valency}</span>
                    </div>
                    <span class="text-[11px] text-slate-600 mt-1 truncate">${a.name}</span>
                  </button>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Derivation & Animated Criss-Cross Canvas (7 cols) -->
          <div class="lg:col-span-7 space-y-5">
            <!-- Main Visual Derivation Card -->
            <div class="academic-card p-6 bg-white border border-slate-200 space-y-6">
              <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <i data-lucide="sparkles" class="w-4 h-4 text-purple-600"></i>
                  <span>Criss-Cross Formula Derivation Mechanism</span>
                </h3>
                <span class="text-xs font-mono text-slate-500 font-semibold">CISCE Method</span>
              </div>

              <!-- Visual Criss-Cross Diagram Area -->
              <div class="p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center justify-center space-y-6">
                <!-- Symbols and initial valencies -->
                <div class="flex items-center justify-around w-full max-w-md">
                  <!-- Cation Card -->
                  <div class="flex flex-col items-center p-4 bg-white rounded-xl border-2 border-blue-200 shadow-sm w-36">
                    <span class="text-[10px] font-extrabold uppercase text-blue-600 tracking-wider">Cation (Basic)</span>
                    <span class="text-2xl font-bold font-mono text-slate-900 mt-1">${selectedCation.symbol}</span>
                    <div class="mt-2 px-2.5 py-1 bg-blue-50 text-blue-800 rounded-md text-xs font-bold font-mono border border-blue-200">
                      Valency: ${selectedCation.valency}
                    </div>
                  </div>

                  <!-- Criss Cross Vector Arrows -->
                  <div class="flex flex-col items-center justify-center px-4 text-purple-600">
                    <svg width="100" height="60" viewBox="0 0 100 60" class="overflow-visible">
                      <!-- Arrow 1: Cation to Anion Subscript -->
                      <path d="M 15 15 L 85 45" stroke="#9333ea" stroke-width="2.5" stroke-dasharray="4,3" marker-end="url(#purple-arrow)" />
                      <!-- Arrow 2: Anion to Cation Subscript -->
                      <path d="M 85 15 L 15 45" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4,3" marker-end="url(#blue-arrow)" />
                      <defs>
                        <marker id="purple-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                          <path d="M 0 0 L 10 5 L 0 10 z" fill="#9333ea" />
                        </marker>
                        <marker id="blue-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                          <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
                        </marker>
                      </defs>
                    </svg>
                    <span class="text-[10px] font-bold text-slate-400 mt-1">Criss-Cross</span>
                  </div>

                  <!-- Anion Card -->
                  <div class="flex flex-col items-center p-4 bg-white rounded-xl border-2 border-emerald-200 shadow-sm w-36">
                    <span class="text-[10px] font-extrabold uppercase text-emerald-600 tracking-wider">Anion (Acid)</span>
                    <span class="text-2xl font-bold font-mono text-slate-900 mt-1">${selectedAnion.symbol}</span>
                    <div class="mt-2 px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-md text-xs font-bold font-mono border border-emerald-200">
                      Valency: ${selectedAnion.valency}
                    </div>
                  </div>
                </div>

                <!-- Final Compound Display Box -->
                <div class="w-full bg-white rounded-xl p-5 border border-slate-200 text-center space-y-2 shadow-sm">
                  <span class="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Resulting Chemical Formula</span>
                  <div class="text-3xl font-extrabold font-mono text-blue-700 tracking-wide">
                    ${result.finalFormula}
                  </div>
                  <div class="text-sm font-bold text-slate-800">
                    ${result.compoundName}
                  </div>
                </div>
              </div>

              <!-- Step-by-Step Derivation Breakdown List -->
              <div class="space-y-3 pt-2">
                <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider">Formal ICSE Derivation Steps:</h4>
                <div class="space-y-2 text-xs">
                  <div class="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span class="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[11px] shrink-0">1</span>
                    <p class="text-slate-700">
                      <strong>Write symbols side by side:</strong> Electropositive radical first (${selectedCation.symbol}), followed by electronegative radical (${selectedAnion.symbol}).
                    </p>
                  </div>

                  <div class="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span class="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[11px] shrink-0">2</span>
                    <p class="text-slate-700">
                      <strong>Assign respective valencies:</strong> ${selectedCation.symbol} has valency <strong>${selectedCation.valency}</strong>, and ${selectedAnion.symbol} has valency <strong>${selectedAnion.valency}</strong>.
                    </p>
                  </div>

                  <div class="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span class="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[11px] shrink-0">3</span>
                    <p class="text-slate-700">
                      <strong>Interchange (Criss-Cross) valencies:</strong> Subscript of ${selectedCation.symbol} = ${selectedAnion.valency}, Subscript of ${selectedAnion.symbol} = ${selectedCation.valency}.
                    </p>
                  </div>

                  ${result.commonDivisor > 1 ? `
                    <div class="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50 border border-amber-200">
                      <span class="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-[11px] shrink-0">4</span>
                      <p class="text-amber-900">
                        <strong>Common Factor Reduction:</strong> Both valencies share a common divisor of <strong>${result.commonDivisor}</strong>. Divide both subscripts by ${result.commonDivisor} to produce the simplest whole-number ratio.
                      </p>
                    </div>
                  ` : ''}

                  <div class="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                    <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[11px] shrink-0">${result.commonDivisor > 1 ? '5' : '4'}</span>
                    <p class="text-emerald-900">
                      <strong>Final Formula:</strong> <strong>${result.finalFormula}</strong> (${result.compoundName}). ${selectedAnion.isPolyatomic && result.subscriptAnion > 1 ? 'Notice that the polyatomic radical is enclosed in parentheses before adding the subscript.' : ''}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    // Event listeners
    container.querySelectorAll('.cation-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        selectedCation = CATIONS.find(c => c.id === id) || CATIONS[0];
        renderStudio();
      });
    });

    container.querySelectorAll('.anion-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        selectedAnion = ANIONS.find(a => a.id === id) || ANIONS[0];
        renderStudio();
      });
    });
  };

  renderStudio();
}
