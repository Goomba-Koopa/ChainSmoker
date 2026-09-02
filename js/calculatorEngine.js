/**
 * ICSE Class 7 Formula Breakdown & Step-by-step Calculation Engine
 * Clean interactive algebra solver with dimensional unit analysis.
 */

export const CALCULATORS = [
  {
    id: 'calc-density',
    name: 'Density, Mass & Volume',
    formulaLatex: 'd = \\frac{m}{V}',
    concept: 'Mass per unit volume of a homogeneous substance',
    targets: [
      {
        id: 'd',
        name: 'Solve for Density (d)',
        unit: 'g/cm³ (or kg/m³)',
        inputs: [
          { key: 'm', label: 'Mass of Substance (m)', unit: 'grams (g)', default: 120, min: 1, max: 1000 },
          { key: 'V', label: 'Volume Displaced (V)', unit: 'cm³ (or mL)', default: 30, min: 1, max: 500 }
        ],
        solve: (v) => {
          const res = v.m / v.V;
          return {
            steps: [
              `1. Standard Formula: \\( d = \\frac{m}{V} \\)`,
              `2. Substitute given values: \\( d = \\frac{${v.m}\\text{ g}}{${v.V}\\text{ cm}^3} \\)`,
              `3. Compute quotient: \\( d = ${res.toFixed(3)}\\text{ g/cm}^3 \\) (${(res * 1000).toFixed(1)} kg/m³ in SI)`
            ],
            result: `${res.toFixed(3)} g/cm³`
          };
        }
      },
      {
        id: 'm',
        name: 'Solve for Mass (m)',
        unit: 'grams (g)',
        inputs: [
          { key: 'd', label: 'Density (d)', unit: 'g/cm³', default: 2.7, min: 0.1, max: 25 },
          { key: 'V', label: 'Volume (V)', unit: 'cm³', default: 50, min: 1, max: 1000 }
        ],
        solve: (v) => {
          const res = v.d * v.V;
          return {
            steps: [
              `1. Rearranged Formula: \\( m = d \\times V \\)`,
              `2. Substitute given values: \\( m = 2.7\\text{ g/cm}^3 \\times ${v.V}\\text{ cm}^3 \\)`,
              `3. Resulting Mass: \\( m = ${res.toFixed(2)}\\text{ g} \\)`
            ],
            result: `${res.toFixed(2)} g`
          };
        }
      }
    ]
  },
  {
    id: 'calc-speed',
    name: 'Speed, Distance & Elapsed Time',
    formulaLatex: 'v = \\frac{s}{t}',
    concept: 'Rate of distance covered per unit time',
    targets: [
      {
        id: 'v',
        name: 'Solve for Speed (v)',
        unit: 'm/s',
        inputs: [
          { key: 's', label: 'Distance Covered (s)', unit: 'meters (m)', default: 450, min: 1, max: 50000 },
          { key: 't', label: 'Time Taken (t)', unit: 'seconds (s)', default: 15, min: 0.1, max: 3600 }
        ],
        solve: (v) => {
          const res = v.s / v.t;
          const kmh = res * 3.6;
          return {
            steps: [
              `1. Standard Formula: \\( v = \\frac{s}{t} \\)`,
              `2. Substitute values: \\( v = \\frac{${v.s}\\text{ m}}{${v.t}\\text{ s}} \\)`,
              `3. Speed in SI: \\( v = ${res.toFixed(2)}\\text{ m/s} \\) (${kmh.toFixed(2)} km/h)`
            ],
            result: `${res.toFixed(2)} m/s (${kmh.toFixed(2)} km/h)`
          };
        }
      }
    ]
  },
  {
    id: 'calc-pendulum',
    name: 'Simple Pendulum Time Period & Frequency',
    formulaLatex: 'T = \\frac{t}{n} \\quad | \\quad f = \\frac{1}{T}',
    concept: 'Time taken for one complete back-and-forth oscillation',
    targets: [
      {
        id: 'T',
        name: 'Solve for Time Period (T) & Frequency (f)',
        unit: 'seconds (s) and Hertz (Hz)',
        inputs: [
          { key: 't', label: 'Total Time Recorded (t)', unit: 'seconds (s)', default: 60, min: 1, max: 600 },
          { key: 'n', label: 'Number of Oscillations (n)', unit: 'count', default: 30, min: 1, max: 200 }
        ],
        solve: (v) => {
          const T = v.t / v.n;
          const f = 1 / T;
          return {
            steps: [
              `1. Time Period Formula: \\( T = \\frac{\\text{Total Time } (t)}{\\text{Number of Oscillations } (n)} \\)`,
              `2. Substitute: \\( T = \\frac{${v.t}\\text{ s}}{${v.n}} = ${T.toFixed(2)}\\text{ s} \\)`,
              `3. Frequency: \\( f = \\frac{1}{T} = \\frac{1}{${T.toFixed(2)}} = ${f.toFixed(2)}\\text{ Hz} \\)`
            ],
            result: `T = ${T.toFixed(2)} s, f = ${f.toFixed(2)} Hz`
          };
        }
      }
    ]
  },
  {
    id: 'calc-temp',
    name: 'Celsius & Fahrenheit Temperature Converter',
    formulaLatex: '\\frac{C}{5} = \\frac{F - 32}{9}',
    concept: 'Interconversion between standard thermometric scales',
    targets: [
      {
        id: 'F',
        name: 'Convert Celsius (°C) to Fahrenheit (°F)',
        unit: '°F',
        inputs: [
          { key: 'C', label: 'Temperature in Celsius (C)', unit: '°C', default: 37, min: -100, max: 300 }
        ],
        solve: (v) => {
          const F = (v.C * 9) / 5 + 32;
          const K = v.C + 273.15;
          return {
            steps: [
              `1. Conversion Formula: \\( F = \\left( C \\times \\frac{9}{5} \\right) + 32 \\)`,
              `2. Substitute given Celsius: \\( F = \\left( ${v.C} \\times 1.8 \\right) + 32 = ${(v.C * 1.8).toFixed(1)} + 32 \\)`,
              `3. Temperature in Fahrenheit: \\( F = ${F.toFixed(2)}^\\circ\\text{F} \\) (Absolute Kelvin: ${K.toFixed(2)} K)`
            ],
            result: `${F.toFixed(2)} °F`
          };
        }
      },
      {
        id: 'C',
        name: 'Convert Fahrenheit (°F) to Celsius (°C)',
        unit: '°C',
        inputs: [
          { key: 'F', label: 'Temperature in Fahrenheit (F)', unit: '°F', default: 98.6, min: -148, max: 572 }
        ],
        solve: (v) => {
          const C = ((v.F - 32) * 5) / 9;
          return {
            steps: [
              `1. Conversion Formula: \\( C = (F - 32) \\times \\frac{5}{9} \\)`,
              `2. Substitute Fahrenheit: \\( C = (${v.F} - 32) \\times \\frac{5}{9} = ${(v.F - 32).toFixed(1)} \\times 0.5556 \\)`,
              `3. Temperature in Celsius: \\( C = ${C.toFixed(2)}^\\circ\\text{C} \\)`
            ],
            result: `${C.toFixed(2)} °C`
          };
        }
      }
    ]
  },
  {
    id: 'calc-mirror-images',
    name: 'Number of Images in Inclined Plane Mirrors',
    formulaLatex: 'n = \\frac{360^\\circ}{\\theta} - 1',
    concept: 'Multiple reflection image formation for two mirrors inclined at angle θ',
    targets: [
      {
        id: 'n',
        name: 'Solve for Number of Images (n)',
        unit: 'integer count',
        inputs: [
          { key: 'theta', label: 'Angle of Inclination θ', unit: 'degrees (°)', default: 90, min: 10, max: 180 }
        ],
        solve: (v) => {
          const ratio = 360 / v.theta;
          const isEven = Math.floor(ratio) % 2 === 0;
          const n = isEven ? Math.floor(ratio) - 1 : Math.floor(ratio);
          return {
            steps: [
              `1. Calculate ratio: \\( \\frac{360^\\circ}{\\theta} = \\frac{360^\\circ}{${v.theta}^\\circ} = ${ratio.toFixed(2)} \\)`,
              `2. Apply parity rule: ${isEven ? 'Since ratio is even, number of images n = (360/θ) - 1' : 'Number of images n = [360/θ]'}`,
              `3. Total Images Formed: \\( n = ${n} \\)`
            ],
            result: `${n} images`
          };
        }
      }
    ]
  }
];

export const renderCalculatorView = (containerId) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  let selectedCalcIdx = 0;
  let selectedTargetIdx = 0;
  let inputValues = {};

  const initValues = () => {
    const calc = CALCULATORS[selectedCalcIdx];
    const target = calc.targets[selectedTargetIdx];
    inputValues = {};
    target.inputs.forEach(inp => {
      inputValues[inp.key] = inp.default;
    });
  };

  initValues();

  const render = () => {
    const calc = CALCULATORS[selectedCalcIdx];
    const target = calc.targets[selectedTargetIdx];
    const solved = target.solve(inputValues);

    container.innerHTML = `
      <div class="academic-card p-6 bg-white space-y-6">
        <!-- Header -->
        <div class="border-b border-slate-200 pb-4">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 class="text-lg font-bold text-slate-900">${calc.name}</h3>
              <p class="text-xs text-slate-500">${calc.concept}</p>
            </div>
            <span class="badge-academic bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs">
              ${calc.formulaLatex}
            </span>
          </div>

          <!-- Calculator Selection Tabs -->
          <div class="flex flex-wrap gap-2 mt-4">
            ${CALCULATORS.map((c, i) => `
              <button data-calc-idx="${i}" class="calc-tab-btn px-3 py-1.5 text-xs font-semibold rounded-md border transition ${i === selectedCalcIdx ? 'bg-blue-600 text-white border-blue-700 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}">
                ${c.name.split(',')[0]}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Target Solver Selection -->
        ${calc.targets.length > 1 ? `
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-700">Mode:</span>
            <div class="flex flex-wrap gap-2">
              ${calc.targets.map((t, idx) => `
                <button data-target-idx="${idx}" class="target-tab-btn px-2.5 py-1 text-xs font-medium rounded border transition ${idx === selectedTargetIdx ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}">
                  ${t.name}
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Inputs and Live Solution Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Inputs Column -->
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-600">Input Variables</h4>
            ${target.inputs.map(inp => `
              <div class="space-y-1.5">
                <div class="flex justify-between text-xs font-semibold text-slate-700">
                  <span>${inp.label}</span>
                  <span class="font-mono text-blue-700 font-bold">${inputValues[inp.key]} ${inp.unit}</span>
                </div>
                <input 
                  type="range" 
                  data-input-key="${inp.key}" 
                  min="${inp.min}" 
                  max="${inp.max}" 
                  step="${inp.max - inp.min > 20 ? 1 : 0.1}" 
                  value="${inputValues[inp.key]}" 
                  class="w-full accent-blue-600 cursor-pointer">
              </div>
            `).join('')}
          </div>

          <!-- Step-by-Step Output Column -->
          <div class="bg-blue-50/50 p-5 rounded-lg border border-blue-200 flex flex-col justify-between space-y-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-2">Step-by-Step Derivation</span>
              <div class="space-y-2 text-xs font-medium text-slate-800 leading-relaxed font-mono">
                ${solved.steps.map(step => `<div class="p-2 bg-white rounded border border-blue-100">${step}</div>`).join('')}
              </div>
            </div>

            <!-- Final Result Box -->
            <div class="p-3 bg-white rounded-lg border border-blue-300 shadow-sm flex items-center justify-between">
              <span class="text-xs font-bold text-slate-700">Computed Output:</span>
              <span class="text-base font-extrabold text-blue-700 font-mono">${solved.result}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Event listeners
    container.querySelectorAll('.calc-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedCalcIdx = parseInt(btn.getAttribute('data-calc-idx'), 10);
        selectedTargetIdx = 0;
        initValues();
        render();
      });
    });

    container.querySelectorAll('.target-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedTargetIdx = parseInt(btn.getAttribute('data-target-idx'), 10);
        initValues();
        render();
      });
    });

    container.querySelectorAll('input[type="range"]').forEach(range => {
      range.addEventListener('input', (e) => {
        const key = e.target.getAttribute('data-input-key');
        inputValues[key] = parseFloat(e.target.value);
        render();
      });
    });
  };

  render();
};
