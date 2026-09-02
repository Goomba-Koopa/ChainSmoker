/**
 * AXIOM ICSE 7 - Exam Reasoning & Distinctions Explorer
 * Formal CISCE examination response templates:
 * 1. "Give Scientific Reasons" with core underlying principles
 * 2. "Differentiate Between" with tabular comparative criteria
 * 3. Key Examiner Distinctions & Keyword Analysis
 */

export const EXAM_REASONING_DATA = [
  // --- PHYSICS ---
  {
    id: 'reason-phy-01',
    subject: 'physics',
    category: 'Give Scientific Reasons',
    question: 'Why is mercury preferred over water as a thermometric and barometric liquid?',
    examMarks: '3 Marks',
    chapter: 'Heat & Measurement',
    keyPoints: [
      'Mercury does not stick to the inner glass walls (cohesive forces exceed adhesive forces).',
      'It has a high boiling point (357°C) and low freezing point (-39°C), giving a wide liquid operating range.',
      'It has a uniform coefficient of thermal expansion and high thermal conductivity.',
      'It is opaque and shiny, making the meniscus distinctly visible without adding dye.',
      'Water has anomalous expansion between 0°C and 4°C and high vapor pressure.'
    ],
    modelAnswer: 'Mercury is preferred because: (1) It is opaque and silvery-white, ensuring easy meniscus reading. (2) It does not wet glass due to strong cohesive forces. (3) It possesses a wide liquid range (-39°C to 357°C) with uniform thermal expansion. In contrast, water wets glass, has anomalous expansion between 0°C and 4°C, and evaporates easily.'
  },
  {
    id: 'reason-phy-02',
    subject: 'physics',
    category: 'Give Scientific Reasons',
    question: 'Why is the space between the double walls of a thermos flask evacuated to create a vacuum?',
    examMarks: '2 Marks',
    chapter: 'Heat Transfer',
    keyPoints: [
      'Conduction requires material particles in physical contact to transfer kinetic energy.',
      'Convection requires fluid medium particles to move and form circulation currents.',
      'A vacuum completely eliminates both conduction and convection heat losses.'
    ],
    modelAnswer: 'A vacuum is created in the annular space between the double glass walls to completely prevent heat loss or gain by conduction and convection, both of which strictly require a material medium.'
  },
  {
    id: 'reason-phy-03',
    subject: 'physics',
    category: 'Give Scientific Reasons',
    question: 'Why does an iron nail sink in water, while a massive ship made of iron floats?',
    examMarks: '3 Marks',
    chapter: 'Density & Flotation',
    keyPoints: [
      'Principle of Flotation: An object floats when its weight is equal to the buoyant force (weight of displaced water).',
      'An iron nail is solid, so its average density is 7.8 g/cm³, which is greater than the density of water (1.0 g/cm³).',
      'A ship is hollow and encloses a large volume of air, making its average density much less than that of water.'
    ],
    modelAnswer: 'A solid iron nail has a density (~7.8 g/cm³) greater than water (1.0 g/cm³), so the gravitational force on the nail exceeds the maximum upthrust, causing it to sink. A ship is constructed hollow with a vast enclosed air cavity, vastly increasing its total volume and reducing its average density below that of water. Consequently, it displaces a weight of water equal to its own weight.'
  },
  {
    id: 'dist-phy-01',
    subject: 'physics',
    category: 'Differentiate Between',
    title: 'Conduction vs Convection vs Radiation',
    examMarks: '3 Marks',
    chapter: 'Heat Transfer',
    criteria: [
      {
        feature: 'Medium Requirement',
        col1: 'Requires a solid material medium',
        col2: 'Requires a liquid or gaseous fluid medium',
        col3: 'Requires no material medium (travels through vacuum as EM waves)'
      },
      {
        feature: 'Particle Movement',
        col1: 'Particles vibrate about fixed positions without bodily movement',
        col2: 'Particles physically move from hotter to colder regions (convection currents)',
        col3: 'No particle involvement; propagates at the speed of light (3 × 10⁸ m/s)'
      },
      {
        feature: 'Direction of Transfer',
        col1: 'In all directions towards colder contact regions',
        col2: 'Primarily vertically upwards (heated fluid expands and becomes lighter)',
        col3: 'In all straight-line directions from the thermal source'
      }
    ]
  },
  {
    id: 'dist-phy-02',
    subject: 'physics',
    category: 'Differentiate Between',
    title: 'Mass vs Weight',
    examMarks: '3 Marks',
    chapter: 'Measurement',
    criteria: [
      {
        feature: 'Definition',
        col1: 'Quantity of matter contained in a body',
        col2: 'Gravitational pull exerted by the Earth on a body (W = mg)'
      },
      {
        feature: 'Nature of Quantity',
        col1: 'Scalar quantity (magnitude only)',
        col2: 'Vector quantity (magnitude + directed downwards towards Earth\'s center)'
      },
      {
        feature: 'Constancy',
        col1: 'Constant everywhere in the universe',
        col2: 'Varies with local acceleration due to gravity (g)'
      },
      {
        feature: 'SI Unit & Device',
        col1: 'Kilogram (kg); measured with Beam / Physical Balance',
        col2: 'Newton (N); measured with Spring Balance'
      }
    ]
  },

  // --- CHEMISTRY ---
  {
    id: 'reason-chem-01',
    subject: 'chemistry',
    category: 'Give Scientific Reasons',
    question: 'Why is an atom electrically neutral despite containing charged subatomic particles?',
    examMarks: '2 Marks',
    chapter: 'Atomic Structure',
    keyPoints: [
      'Protons carry a unit positive charge (+1) and reside in the nucleus.',
      'Electrons carry an equal unit negative charge (-1) and orbit in energy shells.',
      'In a neutral atom, the number of protons equals the number of electrons (Z = p⁺ = e⁻).'
    ],
    modelAnswer: 'An atom is electrically neutral because the total number of positively charged protons located in the nucleus is exactly equal to the total number of negatively charged electrons revolving in the orbits. The opposing charges cancel out completely.'
  },
  {
    id: 'reason-chem-02',
    subject: 'chemistry',
    category: 'Give Scientific Reasons',
    question: 'Why are noble gases (Helium, Neon, Argon) chemically inert and unreactive?',
    examMarks: '2 Marks',
    chapter: 'Atomic Structure & Valency',
    keyPoints: [
      'Helium has a completely filled K-shell with 2 electrons (stable duplet).',
      'Neon and Argon have completely filled outermost shells with 8 electrons (stable octet).',
      'They have zero valency and do not need to lose, gain, or share electrons.'
    ],
    modelAnswer: 'Noble gases have a completely filled valence shell—Helium achieves a stable duplet (2 electrons in K-shell), while Neon and Argon achieve a stable octet (8 electrons in the outermost shell). Because their electronic configurations are completely saturated, they have zero valency and do not participate in chemical bonding.'
  },
  {
    id: 'dist-chem-01',
    subject: 'chemistry',
    category: 'Differentiate Between',
    title: 'Physical Change vs Chemical Change',
    examMarks: '3 Marks',
    chapter: 'Physical & Chemical Changes',
    criteria: [
      {
        feature: 'Formation of New Substance',
        col1: 'No new substance is formed; molecular identity remains identical',
        col2: 'One or more entirely new substances with different properties are formed'
      },
      {
        feature: 'Reversibility',
        col1: 'Usually easily reversible by simple physical methods (e.g. melting of ice)',
        col2: 'Usually irreversible and permanent (e.g. rusting of iron, burning of wood)'
      },
      {
        feature: 'Energy Exchange',
        col1: 'Very small or negligible heat/light energy exchange',
        col2: 'Significant absorption or evolution of energy (exothermic/endothermic)'
      },
      {
        feature: 'Mass Alteration',
        col1: 'Total mass of the individual original substance remains unchanged',
        col2: 'Individual mass of reactants changes as they convert into products'
      }
    ]
  },
  {
    id: 'dist-chem-02',
    subject: 'chemistry',
    category: 'Differentiate Between',
    title: 'Acids vs Bases',
    examMarks: '3 Marks',
    chapter: 'Acids, Bases & Salts',
    criteria: [
      {
        feature: 'Taste & Touch',
        col1: 'Sour taste; causes burning sensation on skin',
        col2: 'Bitter taste; slippery and soapy to the touch'
      },
      {
        feature: 'Litmus Test',
        col1: 'Turns blue litmus paper RED',
        col2: 'Turns red litmus paper BLUE'
      },
      {
        feature: 'Phenolphthalein',
        col1: 'Remains COLORLESS',
        col2: 'Turns deep PINK / MAGENTA'
      },
      {
        feature: 'Methyl Orange',
        col1: 'Turns PINK / RED',
        col2: 'Turns YELLOW'
      },
      {
        feature: 'Ion Produced in Water',
        col1: 'Releases Hydrogen ions (H⁺ / H₃O⁺)',
        col2: 'Releases Hydroxyl ions (OH⁻)'
      }
    ]
  },

  // --- BIOLOGY ---
  {
    id: 'reason-bio-01',
    subject: 'biology',
    category: 'Give Scientific Reasons',
    question: 'Why are stomata primarily located on the lower surface of dorsiventral (dicot) leaves?',
    examMarks: '2 Marks',
    chapter: 'Photosynthesis & Transpiration',
    keyPoints: [
      'The upper surface receives direct sunlight and radiant thermal energy.',
      'Positioning stomata on the cooler, shaded lower epidermis reduces excessive water loss through transpiration.',
      'Allows optimal carbon dioxide intake while preserving plant hydration.'
    ],
    modelAnswer: 'Stomata are predominantly distributed on the shaded lower epidermis of dicot leaves to minimize excessive water loss via transpiration caused by direct sunlight exposure and high temperature on the upper surface.'
  },
  {
    id: 'dist-bio-01',
    subject: 'biology',
    category: 'Differentiate Between',
    title: 'Xylem vs Phloem',
    examMarks: '3 Marks',
    chapter: 'Plant Tissues',
    criteria: [
      {
        feature: 'Nature of Cells',
        col1: 'Consists predominantly of dead lignified cells (Tracheids, Vessels)',
        col2: 'Consists predominantly of living cells (Sieve Tubes, Companion Cells)'
      },
      {
        feature: 'Substance Transported',
        col1: 'Water and dissolved mineral ions absorbed by roots',
        col2: 'Synthesized soluble food (sucrose/amino acids) from leaves'
      },
      {
        feature: 'Direction of Flow',
        col1: 'Strictly UNIDIRECTIONAL (upward from roots to leaves)',
        col2: 'BIDIRECTIONAL (upward and downward to growing/storage organs)'
      },
      {
        feature: 'Mechanical Support',
        col1: 'Provides high tensile mechanical strength due to thick lignin walls',
        col2: 'Provides minimal mechanical support; specialized for translocation'
      }
    ]
  },

  // --- HISTORY & CIVICS ---
  {
    id: 'reason-his-01',
    subject: 'history_civics',
    category: 'Give Scientific Reasons',
    question: 'Why did Alauddin Khalji introduce strict market control regulations (Diwan-i-Riyasat) in Delhi?',
    examMarks: '3 Marks',
    chapter: 'The Delhi Sultanate',
    keyPoints: [
      'He needed to maintain a massive, highly disciplined standing army to repel Mongol invasions.',
      'Paying high cash salaries would exhaust the royal treasury quickly.',
      'Fixing prices of grain, cloth, cattle, and daily necessities ensured soldiers could live comfortably on moderate wages.'
    ],
    modelAnswer: 'Alauddin Khalji established price control to maintain a vast standing army required to thwart frequent Mongol invasions and expand his empire across the Deccan. By legally fixing the prices of food grains and essential commodities, he ensured his soldiers could sustain their families on modest, fixed cash salaries without depleting the state exchequer.'
  },
  {
    id: 'dist-civ-01',
    subject: 'history_civics',
    category: 'Differentiate Between',
    title: 'Fundamental Rights vs Directive Principles of State Policy',
    examMarks: '3 Marks',
    chapter: 'The Constitution of India',
    criteria: [
      {
        feature: 'Constitutional Part',
        col1: 'Enshrined in Part III of the Constitution (Articles 12–35)',
        col2: 'Enshrined in Part IV of the Constitution (Articles 36–51)'
      },
      {
        feature: 'Legal Enforceability',
        col1: 'JUSTICIABLE: Enforceable by High Courts and Supreme Court (Art. 32)',
        col2: 'NON-JUSTICIABLE: Cannot be directly enforced in courts of law'
      },
      {
        feature: 'Nature & Objective',
        col1: 'Negative injunctions on the State; establishes political democracy',
        col2: 'Positive guidelines for the State; establishes socio-economic democracy (Welfare State)'
      },
      {
        feature: 'Suspension',
        col1: 'Can be suspended during a National Emergency (except Articles 20 & 21)',
        col2: 'Cannot be suspended as they are permanent governance guidelines'
      }
    ]
  }
];

export function renderExamReasoningView(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-6 max-w-7xl mx-auto">
      <div class="academic-card p-6 bg-white border border-slate-200">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="badge-academic bg-amber-50 text-amber-800 border border-amber-200">CISCE Exam Benchmark</span>
              <span class="badge-academic bg-blue-50 text-blue-700 border border-blue-200">Class 7 Standard</span>
            </div>
            <h1 class="text-xl md:text-2xl font-bold text-slate-900">ICSE "Give Reasons &amp; Distinctions" Studio</h1>
            <p class="text-xs text-slate-600 mt-1 max-w-3xl">
              Master the exact structural conventions required by ICSE board evaluators: concise scientific keywords, comparative tabular distinction columns, and underlying causal principles.
            </p>
          </div>

          <!-- Subject filter buttons -->
          <div class="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg shrink-0">
            <button class="reason-filter-btn px-3 py-1.5 text-xs font-bold rounded-md bg-white text-slate-900 shadow-sm transition" data-filter="all">All</button>
            <button class="reason-filter-btn px-3 py-1.5 text-xs font-semibold rounded-md text-slate-600 hover:text-slate-900 transition" data-filter="physics">Physics</button>
            <button class="reason-filter-btn px-3 py-1.5 text-xs font-semibold rounded-md text-slate-600 hover:text-slate-900 transition" data-filter="chemistry">Chemistry</button>
            <button class="reason-filter-btn px-3 py-1.5 text-xs font-semibold rounded-md text-slate-600 hover:text-slate-900 transition" data-filter="biology">Biology</button>
            <button class="reason-filter-btn px-3 py-1.5 text-xs font-semibold rounded-md text-slate-600 hover:text-slate-900 transition" data-filter="history_civics">History &amp; Civics</button>
          </div>
        </div>
      </div>

      <!-- Items Grid -->
      <div id="reasoning-items-grid" class="space-y-5"></div>
    </div>
  `;

  const renderItems = (filter = 'all') => {
    const grid = container.querySelector('#reasoning-items-grid');
    if (!grid) return;

    const filtered = filter === 'all' 
      ? EXAM_REASONING_DATA 
      : EXAM_REASONING_DATA.filter(item => item.subject === filter);

    grid.innerHTML = filtered.map(item => {
      if (item.category === 'Give Scientific Reasons') {
        return `
          <div class="academic-card p-6 bg-white border border-slate-200 space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div class="flex items-center gap-2">
                <span class="badge-academic bg-amber-50 text-amber-800 border border-amber-200">${item.category}</span>
                <span class="text-xs font-semibold text-slate-500 font-mono">${item.chapter}</span>
              </div>
              <span class="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-100">${item.examMarks}</span>
            </div>

            <div>
              <h3 class="text-base font-bold text-slate-900">Q: ${item.question}</h3>
            </div>

            <!-- Key Evaluator Points -->
            <div class="bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-2">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-700 block">Crucial Examiner Keywords &amp; Marking Criteria:</span>
              <ul class="space-y-1.5 list-disc list-inside text-xs text-slate-600">
                ${item.keyPoints.map(pt => `<li>${pt}</li>`).join('')}
              </ul>
            </div>

            <!-- Model ICSE Answer -->
            <div class="bg-blue-50/60 rounded-lg p-4 border border-blue-200 space-y-1.5">
              <div class="flex items-center gap-1.5 text-xs font-bold text-blue-900">
                <i data-lucide="check-circle" class="w-4 h-4 text-blue-600"></i>
                <span>Model ICSE Examination Answer:</span>
              </div>
              <p class="text-xs text-slate-800 leading-relaxed pl-5 font-serif italic">
                "${item.modelAnswer}"
              </p>
            </div>
          </div>
        `;
      } else {
        // Tabular Differentiate Between
        return `
          <div class="academic-card p-6 bg-white border border-slate-200 space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div class="flex items-center gap-2">
                <span class="badge-academic bg-emerald-50 text-emerald-800 border border-emerald-200">${item.category}</span>
                <span class="text-xs font-semibold text-slate-500 font-mono">${item.chapter}</span>
              </div>
              <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100">${item.examMarks}</span>
            </div>

            <div>
              <h3 class="text-base font-bold text-slate-900">Tabular Distinction: ${item.title}</h3>
              <p class="text-xs text-slate-500 mt-0.5">CISCE standard requirement: Differences must always be tabulated with clear comparison criteria.</p>
            </div>

            <!-- Distinction Table -->
            <div class="overflow-x-auto rounded-lg border border-slate-200">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="bg-slate-100 border-b border-slate-200 font-bold text-slate-800">
                    <th class="p-3 border-r border-slate-200 w-1/4">Comparison Criterion</th>
                    <th class="p-3 border-r border-slate-200 w-[37.5%]">${item.title.split(' vs ')[0]}</th>
                    <th class="p-3 w-[37.5%]">${item.title.split(' vs ')[1] || 'Secondary'}</th>
                    ${item.criteria[0].col3 ? `<th class="p-3 w-1/3">${item.title.split(' vs ')[2] || 'Tertiary'}</th>` : ''}
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                  ${item.criteria.map(row => `
                    <tr class="hover:bg-slate-50/80 transition">
                      <td class="p-3 font-semibold text-slate-900 border-r border-slate-200 bg-slate-50/50">${row.feature}</td>
                      <td class="p-3 text-slate-700 border-r border-slate-200 leading-relaxed">${row.col1}</td>
                      <td class="p-3 text-slate-700 leading-relaxed ${row.col3 ? 'border-r border-slate-200' : ''}">${row.col2}</td>
                      ${row.col3 ? `<td class="p-3 text-slate-700 leading-relaxed">${row.col3}</td>` : ''}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  };

  renderItems('all');

  // Filter click handlers
  container.querySelectorAll('.reason-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.reason-filter-btn').forEach(b => {
        b.classList.remove('bg-white', 'text-slate-900', 'shadow-sm', 'font-bold');
        b.classList.add('text-slate-600');
      });
      btn.classList.add('bg-white', 'text-slate-900', 'shadow-sm', 'font-bold');
      btn.classList.remove('text-slate-600');
      renderItems(btn.getAttribute('data-filter'));
    });
  });
}
