/**
 * ICSE CLASS 7 CANONICAL CURRICULUM & INTERACTIVE SCHEMATICS DATASET
 * Standardized according to CISCE (Council for the Indian School Certificate Examinations) Class 7 syllabus.
 */

export const ELEMENTS_1_TO_20 = [
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    protons: 1,
    neutrons: 0,
    electrons: 1,
    massNumber: 1,
    valency: 1,
    category: "Non-metal",
    shellConfig: { K: 1, L: 0, M: 0, N: 0 },
    electronDotNotation: "H·",
    icseExamNote: "Only element whose most common isotope (Protium) contains NO neutrons."
  },
  {
    atomicNumber: 2,
    symbol: "He",
    name: "Helium",
    protons: 2,
    neutrons: 2,
    electrons: 2,
    massNumber: 4,
    valency: 0,
    category: "Noble Gas",
    shellConfig: { K: 2, L: 0, M: 0, N: 0 },
    electronDotNotation: ":He",
    icseExamNote: "Possesses a stable duplet in its outermost (K) shell; chemically inert."
  },
  {
    atomicNumber: 3,
    symbol: "Li",
    name: "Lithium",
    protons: 3,
    neutrons: 4,
    electrons: 3,
    massNumber: 7,
    valency: 1,
    category: "Alkali Metal",
    shellConfig: { K: 2, L: 1, M: 0, N: 0 },
    electronDotNotation: "Li·",
    icseExamNote: "Loses 1 valence electron easily to form Li⁺ ion with helium configuration."
  },
  {
    atomicNumber: 4,
    symbol: "Be",
    name: "Beryllium",
    protons: 4,
    neutrons: 5,
    electrons: 4,
    massNumber: 9,
    valency: 2,
    category: "Alkaline Earth Metal",
    shellConfig: { K: 2, L: 2, M: 0, N: 0 },
    electronDotNotation: "·Be·",
    icseExamNote: "Forms Be²⁺ cations by losing both L shell electrons."
  },
  {
    atomicNumber: 5,
    symbol: "B",
    name: "Boron",
    protons: 5,
    neutrons: 6,
    electrons: 5,
    massNumber: 11,
    valency: 3,
    category: "Metalloid",
    shellConfig: { K: 2, L: 3, M: 0, N: 0 },
    electronDotNotation: ":B·",
    icseExamNote: "Has 3 valence electrons in L shell; exhibits borderline metalloid behavior."
  },
  {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbon",
    protons: 6,
    neutrons: 6,
    electrons: 6,
    massNumber: 12,
    valency: 4,
    category: "Non-metal",
    shellConfig: { K: 2, L: 4, M: 0, N: 0 },
    electronDotNotation: "·C·: (tetravalent)",
    icseExamNote: "Tetravalent atom; shares 4 electrons to complete its octet (Covalent bonds)."
  },
  {
    atomicNumber: 7,
    symbol: "N",
    name: "Nitrogen",
    protons: 7,
    neutrons: 7,
    electrons: 7,
    massNumber: 14,
    valency: 3,
    category: "Non-metal",
    shellConfig: { K: 2, L: 5, M: 0, N: 0 },
    electronDotNotation: ":N···",
    icseExamNote: "Needs 3 electrons to attain stable neon octet (8 - 5 = 3 valency)."
  },
  {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxygen",
    protons: 8,
    neutrons: 8,
    electrons: 8,
    massNumber: 16,
    valency: 2,
    category: "Non-metal",
    shellConfig: { K: 2, L: 6, M: 0, N: 0 },
    electronDotNotation: ":Ö·:·",
    icseExamNote: "Bivalent non-metal; gains 2 electrons to form oxide anion O²⁻."
  },
  {
    atomicNumber: 9,
    symbol: "F",
    name: "Fluorine",
    protons: 9,
    neutrons: 10,
    electrons: 9,
    massNumber: 19,
    valency: 1,
    category: "Halogen",
    shellConfig: { K: 2, L: 7, M: 0, N: 0 },
    electronDotNotation: ":F̈:·",
    icseExamNote: "Most electronegative halogen; gains 1 electron to form F⁻."
  },
  {
    atomicNumber: 10,
    symbol: "Ne",
    name: "Neon",
    protons: 10,
    neutrons: 10,
    electrons: 10,
    massNumber: 20,
    valency: 0,
    category: "Noble Gas",
    shellConfig: { K: 2, L: 8, M: 0, N: 0 },
    electronDotNotation: ":N̈ë:",
    icseExamNote: "Complete stable octet in L shell (2, 8); zero valency."
  },
  {
    atomicNumber: 11,
    symbol: "Na",
    name: "Sodium",
    protons: 11,
    neutrons: 12,
    electrons: 11,
    massNumber: 23,
    valency: 1,
    category: "Alkali Metal",
    shellConfig: { K: 2, L: 8, M: 1, N: 0 },
    electronDotNotation: "Na·",
    icseExamNote: "Starts the 3rd period (M shell); readily loses 1 electron to form Na⁺."
  },
  {
    atomicNumber: 12,
    symbol: "Mg",
    name: "Magnesium",
    protons: 12,
    neutrons: 12,
    electrons: 12,
    massNumber: 24,
    valency: 2,
    category: "Alkaline Earth Metal",
    shellConfig: { K: 2, L: 8, M: 2, N: 0 },
    electronDotNotation: "·Mg·",
    icseExamNote: "Has 2 electrons in M shell; forms Mg²⁺ cations."
  },
  {
    atomicNumber: 13,
    symbol: "Al",
    name: "Aluminium",
    protons: 13,
    neutrons: 14,
    electrons: 13,
    massNumber: 27,
    valency: 3,
    category: "Post-transition Metal",
    shellConfig: { K: 2, L: 8, M: 3, N: 0 },
    electronDotNotation: ":Al·",
    icseExamNote: "Trivalent metal; loses 3 valence electrons to form Al³⁺."
  },
  {
    atomicNumber: 14,
    symbol: "Si",
    name: "Silicon",
    protons: 14,
    neutrons: 14,
    electrons: 14,
    massNumber: 28,
    valency: 4,
    category: "Metalloid",
    shellConfig: { K: 2, L: 8, M: 4, N: 0 },
    electronDotNotation: "·S̈i·",
    icseExamNote: "Tetravalent semiconductor metalloid; shares 4 electrons."
  },
  {
    atomicNumber: 15,
    symbol: "P",
    name: "Phosphorus",
    protons: 15,
    neutrons: 16,
    electrons: 15,
    massNumber: 31,
    valency: 3, // Also 5
    category: "Non-metal",
    shellConfig: { K: 2, L: 8, M: 5, N: 0 },
    electronDotNotation: ":P̈··",
    icseExamNote: "Has 5 electrons in M shell; common valency is 3 (8 - 5 = 3)."
  },
  {
    atomicNumber: 16,
    symbol: "S",
    name: "Sulphur",
    protons: 16,
    neutrons: 16,
    electrons: 16,
    massNumber: 32,
    valency: 2,
    category: "Non-metal",
    shellConfig: { K: 2, L: 8, M: 6, N: 0 },
    electronDotNotation: ":S̈:·",
    icseExamNote: "Bivalent non-metal (8 - 6 = 2); gains 2 electrons to form sulphide S²⁻."
  },
  {
    atomicNumber: 17,
    symbol: "Cl",
    name: "Chlorine",
    protons: 17,
    neutrons: 18,
    electrons: 17,
    massNumber: 35,
    valency: 1,
    category: "Halogen",
    shellConfig: { K: 2, L: 8, M: 7, N: 0 },
    electronDotNotation: ":C̈l̈:·",
    icseExamNote: "Monovalent halogen (8 - 7 = 1); gains 1 electron to form chloride Cl⁻."
  },
  {
    atomicNumber: 18,
    symbol: "Ar",
    name: "Argon",
    protons: 18,
    neutrons: 22,
    electrons: 18,
    massNumber: 40,
    valency: 0,
    category: "Noble Gas",
    shellConfig: { K: 2, L: 8, M: 8, N: 0 },
    electronDotNotation: ":Är̈:",
    icseExamNote: "Stable octet in M shell (2, 8, 8); chemically unreactive noble gas."
  },
  {
    atomicNumber: 19,
    symbol: "K",
    name: "Potassium",
    protons: 19,
    neutrons: 20,
    electrons: 19,
    massNumber: 39,
    valency: 1,
    category: "Alkali Metal",
    shellConfig: { K: 2, L: 8, M: 8, N: 1 },
    electronDotNotation: "K·",
    icseExamNote: "Electrons enter N shell before M shell is completely filled (Bohr-Bury Rule: outermost shell max 8)."
  },
  {
    atomicNumber: 20,
    symbol: "Ca",
    name: "Calcium",
    protons: 20,
    neutrons: 20,
    electrons: 20,
    massNumber: 40,
    valency: 2,
    category: "Alkaline Earth Metal",
    shellConfig: { K: 2, L: 8, M: 8, N: 2 },
    electronDotNotation: "·Ca·",
    icseExamNote: "Electronic configuration is 2, 8, 8, 2. Bivalent metal forming Ca²⁺."
  }
];

export const TOPIC_MODULES = [
  {
    id: "heat_transfer_vacuum_flask",
    title: "Heat Transfer: Working of a Vacuum (Thermos) Flask",
    subject: "Physics",
    icseClass: 7,
    chapter: "Heat & Temperature",
    diagramSvg: "./src/assets/diagrams/vacuum_flask.svg",
    summary: "Comprehensive schematic explaining how the vacuum flask minimizes heat loss/gain through Conduction, Convection, and Radiation.",
    syllabusPoints: [
      "Define three modes of heat transfer: Conduction (solids), Convection (fluids), Radiation (vacuum/electromagnetic waves).",
      "Explain the construction of Sir James Dewar's vacuum flask.",
      "Detail how the double-walled glass, evacuated space, silvering, and insulated stopper inhibit each heat transfer mode.",
      "Understand why a thermos flask maintains both hot and cold liquids at their respective temperatures."
    ],
    keyDefinitions: [
      {
        term: "Conduction",
        definition: "The process of transmission of heat energy in solids from molecule to molecule without the actual movement of particles from their positions.",
        icseImportance: "High"
      },
      {
        term: "Convection",
        definition: "The process of heat transfer in liquids and gases by the actual physical movement of the heated fluid molecules in convection currents.",
        icseImportance: "High"
      },
      {
        term: "Radiation",
        definition: "The process of transmission of heat from a hotter body to a colder body in the form of electromagnetic infrared waves without requiring any material medium.",
        icseImportance: "High"
      },
      {
        term: "Vacuum",
        definition: "A space devoid of all matter and particles, through which neither conduction nor convection can occur.",
        icseImportance: "Crucial"
      }
    ],
    keyFormulas: [
      {
        concept: "Rate of Heat Transfer",
        formula: "Q/t = k · A · (T_hot - T_cold) / d",
        derivation: "Heat transferred Q is directly proportional to surface area A, temperature gradient (ΔT), and inversely proportional to wall thickness d.",
        symbolMeaning: "Q = Heat (Joules), k = Thermal conductivity, A = Area, d = Distance/thickness",
        units: "Joules / second (Watts)"
      }
    ],
    interactiveHotspots: [
      {
        id: "hs_stopper",
        label: "Insulated Stopper (Cork / Plastic)",
        xPct: 44.7,
        yPct: 15.5,
        mechanism: "Conduction & Convection Prevention",
        description: "Made of poor conductors (cork/plastic) with airtight seal to prevent hot air convection currents and conductive heat escape through the neck.",
        mitigationType: "Conduction & Convection"
      },
      {
        id: "hs_vacuum",
        label: "Evacuated Annular Space (Vacuum)",
        xPct: 34.5,
        yPct: 45.0,
        mechanism: "Elimination of Material Medium",
        description: "The space between the double glass walls is evacuated of air. Since conduction and convection require particles to transfer thermal energy, heat cannot cross this vacuum barrier.",
        mitigationType: "Conduction & Convection"
      },
      {
        id: "hs_silvering",
        label: "Silvered Glass Surfaces",
        xPct: 54.0,
        yPct: 38.0,
        mechanism: "Radiation Reflection",
        description: "The inner facing walls are coated with shining silver mirror coating. Inner silvering reflects radiation back into hot liquid; outer silvering reflects external radiant heat away.",
        mitigationType: "Radiation"
      },
      {
        id: "hs_glass_vessel",
        label: "Double-Walled Glass Vessel",
        xPct: 53.0,
        yPct: 58.0,
        mechanism: "Insulation Barrier",
        description: "Glass is a non-metal insulator with very low thermal conductivity (k), minimizing conductive heat leakage across the bottle structure.",
        mitigationType: "Conduction"
      },
      {
        id: "hs_spring_support",
        label: "Spring / Rubber Shock Absorber",
        xPct: 44.7,
        yPct: 78.0,
        mechanism: "Mechanical Shock Cushioning",
        description: "Supports the fragile glass inner vessel firmly within the tough outer plastic/metal casing, preventing physical fractures upon impact.",
        mitigationType: "Mechanical Protection"
      }
    ],
    examTips: [
      "Always state that vacuum prevents BOTH conduction and convection because both require matter/particles to occur.",
      "Remember that silver surfaces do NOT prevent radiation by absorbing; they reflect radiant heat like a mirror.",
      "If asked how to keep ice cold in a flask, state that silvering prevents external radiant heat from entering."
    ],
    formativeQuestions: [
      {
        question: "Why can heat NOT travel through the vacuum of a thermos flask by convection?",
        options: [
          "Because convection only happens in solids",
          "Because convection requires moving fluid particles, which are absent in vacuum",
          "Because silver coating absorbs all convection",
          "Because glass conducts heat instantaneously"
        ],
        correctIndex: 1,
        explanation: "Convection is the bulk movement of fluid molecules. In a vacuum, there are zero molecules, completely eliminating convection currents."
      },
      {
        question: "Which component of the vacuum flask is specifically designed to minimize heat transfer by radiation?",
        options: [
          "The plastic cork stopper",
          "The bottom shock spring",
          "The silvered inner and outer glass surfaces",
          "The outer metallic casing"
        ],
        correctIndex: 2,
        explanation: "Polished silver surfaces are exceptional reflectors of infrared radiant energy and very poor emitters/absorbers."
      }
    ]
  },

  {
    id: "forces_pressure_manometer",
    title: "Forces & Pressure: Open-Tube U-Tube Liquid Manometer",
    subject: "Physics",
    icseClass: 7,
    chapter: "Motion, Force and Pressure",
    diagramSvg: "./src/assets/diagrams/u_tube_manometer.svg",
    summary: "Textbook schematic of an open-ended U-tube manometer displaying hydrostatic balance, isobaric datum level, liquid column differential Δh, and gauge pressure formula.",
    syllabusPoints: [
      "Define Pressure: Force acting perpendicularly per unit area (P = F / A).",
      "State Pascal's Law and the principle of fluid pressure at equal depth in a continuous static fluid.",
      "Understand the construction and working of an open U-tube manometer for measuring enclosed gas pressure.",
      "Apply the hydrostatic pressure equation P = P₀ + ρgh to calculate unknown gas pressures."
    ],
    keyDefinitions: [
      {
        term: "Hydrostatic Pressure",
        definition: "The pressure exerted by a fluid at equilibrium at a given point within the fluid, due to the force of gravity on the column above.",
        icseImportance: "High"
      },
      {
        term: "Atmospheric Pressure (P₀)",
        definition: "The pressure exerted by the weight of the Earth's atmosphere upon any surface in contact with it (~1.013 × 10⁵ Pa at sea level).",
        icseImportance: "High"
      },
      {
        term: "Gauge Pressure",
        definition: "The difference between total absolute pressure (P) and atmospheric pressure (P₀), equal to ρgh.",
        icseImportance: "Medium"
      },
      {
        term: "Isobaric Datum Line",
        definition: "A horizontal reference line across both limbs of a U-tube at which the hydrostatic pressures in continuous fluid are identical.",
        icseImportance: "Crucial"
      }
    ],
    keyFormulas: [
      {
        concept: "Total Gas Pressure in Open Manometer",
        formula: "P_gas = P_0 + ρ · g · Δh",
        derivation: "At datum line: P_left = P_right => P_gas = P_atm + Pressure of liquid column of height Δh.",
        symbolMeaning: "P_gas = Gas pressure (Pa), P_0 = Atmospheric pressure (Pa), ρ = Fluid density (kg/m³), g = 9.8 m/s², Δh = Height difference (m)",
        units: "Pascals (N/m²) or cm of Hg / water"
      },
      {
        concept: "Pressure Definition",
        formula: "P = F / A",
        derivation: "Thrust per unit area of contact.",
        symbolMeaning: "F = Normal thrust force (Newtons), A = Cross-sectional area (m²)",
        units: "Pascals (Pa)"
      }
    ],
    interactiveHotspots: [
      {
        id: "hs_gas_bulb",
        label: "Enclosed Gas Reservoir",
        xPct: 15.5,
        yPct: 40.0,
        mechanism: "Gas Pressure Source (P)",
        description: "Gas molecules exert random kinetic collisions on the left liquid surface, depressing it to level h₁ when P > P₀."
      },
      {
        id: "hs_datum_line",
        label: "Isobaric Datum Line (Equal Pressure Level)",
        xPct: 46.0,
        yPct: 56.5,
        mechanism: "Fundamental Hydrostatic Principle",
        description: "In a continuous static liquid, points at identical horizontal depths experience identical pressures: Pressure at A = Pressure at B."
      },
      {
        id: "hs_delta_h",
        label: "Liquid Height Difference (Δh = h₂ - h₁)",
        xPct: 62.0,
        yPct: 42.0,
        mechanism: "Hydrostatic Balancing Column",
        description: "The vertical height difference of the fluid column. The weight of this excess column balances the excess gas pressure: ΔP = ρgΔh."
      },
      {
        id: "hs_open_limb",
        label: "Open Limb (Atmospheric Pressure P₀)",
        xPct: 58.0,
        yPct: 18.0,
        mechanism: "Atmospheric Reference",
        description: "Directly exposed to the atmosphere, exerting downward atmospheric thrust P₀ on the right meniscus."
      },
      {
        id: "hs_meniscus",
        label: "Meniscus Reading Tan-Point",
        xPct: 18.0,
        yPct: 75.0,
        mechanism: "Parallax-Free Observation",
        description: "For water and wetting fluids, always read along the bottom tangent of the concave meniscus at eye level to prevent parallax error."
      }
    ],
    examTips: [
      "If gas pressure is LESS than atmospheric (vacuum/suction), the liquid level will be HIGHER in the left limb connected to gas: P_gas = P₀ - ρgh.",
      "Density ρ must be in kg/m³ and Δh in meters when calculating pressure in SI Pascals (Pa).",
      "Mercury (Hg) produces a CONVEX meniscus, read at the top apex, while water produces a CONCAVE meniscus read at the base."
    ],
    formativeQuestions: [
      {
        question: "In an open U-tube manometer containing water, if the gas limb is depressed by 10 cm and the open limb rises by 10 cm, what is Δh?",
        options: ["10 cm", "0 cm", "20 cm", "5 cm"],
        correctIndex: 2,
        explanation: "Δh is the total vertical difference between the two limbs: 10 cm + 10 cm = 20 cm."
      },
      {
        question: "What happens to the liquid levels if the enclosed gas pressure P equals atmospheric pressure P₀?",
        options: [
          "The liquid rises completely out of the open arm",
          "Both limbs remain at exactly the same horizontal level (Δh = 0)",
          "The liquid in the gas arm boils",
          "The manometer liquid splits into two layers"
        ],
        correctIndex: 1,
        explanation: "When P = P₀, the net difference ΔP = 0, so the fluid levels in both arms balance at equal heights."
      }
    ]
  },

  {
    id: "atomic_structure_bohr_shells",
    title: "Atomic Structure: Bohr-Rutherford Model & Shells (Elements 1-20)",
    subject: "Chemistry",
    icseClass: 7,
    chapter: "Atomic Structure & Chemical Bonding",
    diagramSvg: "./src/assets/diagrams/bohr_atomic_structure.svg",
    summary: "Interactive Bohr model detailing concentric K, L, M, N energy shells, central nucleus (protons & neutrons), 2n² capacity rule, octet rule, and element data for H (1) to Ca (20).",
    syllabusPoints: [
      "Understand the three fundamental subatomic particles: Protons (p⁺), Neutrons (n⁰), Electrons (e⁻).",
      "State the Bohr-Bury Scheme and maximum shell capacity formula (2n²).",
      "Differentiate between Atomic Number (Z = p⁺ = e⁻ in neutral atom) and Mass Number (A = p⁺ + n⁰).",
      "Write electronic configurations for elements 1 through 20 (Hydrogen to Calcium).",
      "Define Valency, Valence Electrons, Octet Rule, and Duplet Rule."
    ],
    keyDefinitions: [
      {
        term: "Atomic Number (Z)",
        definition: "The total number of protons present in the nucleus of an atom of an element.",
        icseImportance: "Crucial"
      },
      {
        term: "Mass Number (A)",
        definition: "The total sum of the number of protons and neutrons (nucleons) present in the nucleus of an atom.",
        icseImportance: "Crucial"
      },
      {
        term: "Valence Shell & Valence Electrons",
        definition: "The outermost shell of an atom is the valence shell; electrons present in this shell are valence electrons, determining chemical reactivity.",
        icseImportance: "High"
      },
      {
        term: "Octet Rule",
        definition: "The tendency of atoms to acquire 8 electrons in their outermost valence shell to achieve maximum thermodynamic chemical stability.",
        icseImportance: "High"
      }
    ],
    keyFormulas: [
      {
        concept: "Bohr-Bury Maximum Shell Capacity",
        formula: "Capacity = 2 · n²",
        derivation: "Where n is the principal shell number: K(n=1)=>2, L(n=2)=>8, M(n=3)=>18, N(n=4)=>32.",
        symbolMeaning: "n = Shell index (1, 2, 3, 4)",
        units: "electrons per shell"
      },
      {
        concept: "Number of Neutrons Calculation",
        formula: "Neutrons (n) = Mass Number (A) - Atomic Number (Z)",
        derivation: "A = p + n and Z = p => n = A - Z.",
        symbolMeaning: "A = Mass number, Z = Atomic number",
        units: "integer count"
      }
    ],
    interactiveHotspots: [
      {
        id: "hs_nucleus",
        label: "Atomic Nucleus",
        xPct: 35.8,
        yPct: 51.7,
        mechanism: "Dense Central Core",
        description: "Contains virtually the entire mass of the atom packed into a minute volume, consisting of positively charged protons and neutral neutrons."
      },
      {
        id: "hs_k_shell",
        label: "K Shell (n = 1)",
        xPct: 35.8,
        yPct: 43.8,
        mechanism: "Innermost Lowest Energy Orbit",
        description: "Max capacity = 2 × 1² = 2 electrons. Governed by the Duplet Rule (e.g. Helium)."
      },
      {
        id: "hs_l_shell",
        label: "L Shell (n = 2)",
        xPct: 35.8,
        yPct: 37.6,
        mechanism: "Second Energy Level",
        description: "Max capacity = 2 × 2² = 8 electrons. Elements fill this shell from Lithium (3) to Neon (10)."
      },
      {
        id: "hs_m_shell",
        label: "M Shell (n = 3)",
        xPct: 35.8,
        yPct: 31.2,
        mechanism: "Third Energy Level",
        description: "Theoretical capacity = 2 × 3² = 18 electrons, but outermost valence shell can hold max 8 electrons before filling N shell (e.g. Argon 2,8,8)."
      },
      {
        id: "hs_n_shell",
        label: "N Shell (n = 4)",
        xPct: 35.8,
        yPct: 24.7,
        mechanism: "Fourth Energy Level",
        description: "For Potassium (19: 2,8,8,1) and Calcium (20: 2,8,8,2), electrons enter N shell due to octet stability."
      }
    ],
    examTips: [
      "In neutral atoms, Atomic Number Z = Protons = Electrons. However, if it's an ION, only protons remain constant!",
      "Potassium (Z=19) configuration is 2, 8, 8, 1 and NOT 2, 8, 9 because the outermost shell cannot hold more than 8 electrons.",
      "Valency of non-metals with 5, 6, 7 valence electrons is calculated as (8 - valence electrons)."
    ],
    formativeQuestions: [
      {
        question: "What is the electronic configuration of Calcium (Atomic Number = 20)?",
        options: ["2, 8, 10", "2, 8, 8, 2", "2, 18", "2, 8, 9, 1"],
        correctIndex: 1,
        explanation: "According to Bohr-Bury rules, after 8 electrons in M shell, additional electrons fill N shell: 2, 8, 8, 2."
      },
      {
        question: "How many neutrons are present in an atom of Aluminium with Atomic Number 13 and Mass Number 27?",
        options: ["13", "27", "14", "40"],
        correctIndex: 2,
        explanation: "Neutrons = Mass Number (A) - Atomic Number (Z) = 27 - 13 = 14 neutrons."
      }
    ]
  },

  {
    id: "photosynthesis_leaf_anatomy",
    title: "Biology: Transverse Section Anatomy of a Leaf & Photosynthesis",
    subject: "Biology",
    icseClass: 7,
    chapter: "Photosynthesis & Plant Respiration",
    diagramSvg: "./src/assets/diagrams/leaf_anatomy.svg",
    summary: "Anatomical transverse cutaway of a dicot leaf detailing cuticle, upper epidermis, palisade mesophyll, chloroplasts, spongy mesophyll, vascular bundles (xylem/phloem), and stomatal guard cells.",
    syllabusPoints: [
      "Define Photosynthesis and write its balanced chemical equation: 6CO₂ + 12H₂O -> C₆H₁₂O₆ + 6O₂ + 6H₂O.",
      "Identify internal leaf adaptations for maximum light absorption and gas diffusion.",
      "Distinguish functions of Palisade Mesophyll (light harvesting) vs Spongy Mesophyll (air circulation).",
      "Describe the vascular system: Xylem vessels (unidirectional water/mineral transport) and Phloem sieve tubes (bidirectional translocation of sugars).",
      "Explain the opening and closing mechanism of Stomata controlled by turgid guard cells."
    ],
    keyDefinitions: [
      {
        term: "Photosynthesis",
        definition: "The physiological process by which green plants synthesize carbohydrates (glucose) from carbon dioxide and water in the presence of chlorophyll and sunlight, releasing oxygen as a byproduct.",
        icseImportance: "Crucial"
      },
      {
        term: "Palisade Mesophyll",
        definition: "The upper columnar layer of mesophyll cells packed with abundant chloroplasts, positioned perpendicularly to the leaf surface to intercept maximum sunlight.",
        icseImportance: "High"
      },
      {
        term: "Stomata (Singular: Stoma)",
        definition: "Microscopic elliptical pores on the leaf epidermis bounded by two specialized guard cells that regulate transpiration and respiratory/photosynthetic gas exchange.",
        icseImportance: "High"
      },
      {
        term: "Translocation",
        definition: "The transport of soluble organic photosynthetic products (sucrose) from leaves to growing/storage organs via the phloem sieve tubes.",
        icseImportance: "Medium"
      }
    ],
    keyFormulas: [
      {
        concept: "Canonical Photosynthesis Chemical Equation",
        formula: "6CO₂ + 12H₂O ──[ Sunlight / Chlorophyll ]──▶ C₆H₁₂O₆ + 6O₂ ↑ + 6H₂O",
        derivation: "Six molecules of carbon dioxide react with twelve molecules of water powered by light energy absorbed by chlorophyll pigment.",
        symbolMeaning: "CO₂ = Carbon Dioxide, H₂O = Water, C₆H₁₂O₆ = Glucose, O₂ = Oxygen gas",
        units: "Molar stoichiometric ratio"
      }
    ],
    interactiveHotspots: [
      {
        id: "hs_cuticle",
        label: "Waxy Cuticle",
        xPct: 35.0,
        yPct: 19.0,
        mechanism: "Waterproofing Barrier",
        description: "A transparent hydrophobic layer synthesized by epidermal cells to drastically curb non-stomatal cuticular transpiration."
      },
      {
        id: "hs_palisade",
        label: "Palisade Mesophyll Cells",
        xPct: 28.0,
        yPct: 35.0,
        mechanism: "Primary Photosynthetic Engine",
        description: "Tightly packed cylindrical cells oriented vertically. Packed with 80%+ of the leaf's chloroplasts for optimal light interception."
      },
      {
        id: "hs_xylem",
        label: "Xylem Vessels (Vascular Bundle)",
        xPct: 41.0,
        yPct: 51.5,
        mechanism: "Water & Mineral Supply",
        description: "Hollow, lignified dead tubes conducting water and dissolved nitrates/minerals upward from roots against gravity by transpiration pull."
      },
      {
        id: "hs_phloem",
        label: "Phloem Sieve Tubes",
        xPct: 41.0,
        yPct: 58.0,
        mechanism: "Sugar Translocation",
        description: "Living vascular conduits carrying dissolved sucrose and amino acids from photosynthetic source to metabolic sinks (roots, fruits, buds)."
      },
      {
        id: "hs_stomata",
        label: "Stomatal Pore & Guard Cells",
        xPct: 24.5,
        yPct: 66.0,
        mechanism: "Gas Exchange & Turgor Control",
        description: "Flanked by two bean-shaped guard cells. When turgid, the pore dilates allowing CO₂ ingress and O₂ egress; when flaccid, the pore seals."
      }
    ],
    examTips: [
      "State why upper epidermis cells do NOT have chloroplasts: to remain transparent so sunlight penetrates freely to the palisade layer below.",
      "Guard cells are the ONLY epidermal cells that contain chloroplasts.",
      "In aquatic floating leaves (like water lily), stomata are present on the UPPER epidermis, whereas in terrestrial dicots they predominate on the LOWER epidermis."
    ],
    formativeQuestions: [
      {
        question: "Which leaf layer is responsible for the highest rate of photosynthesis?",
        options: [
          "Upper Epidermis",
          "Palisade Mesophyll",
          "Lower Cuticle",
          "Bundle Sheath"
        ],
        correctIndex: 1,
        explanation: "Palisade mesophyll cells are vertically arranged and contain the highest concentration of chloroplasts."
      },
      {
        question: "What is the primary function of xylem vessels within the leaf vein?",
        options: [
          "To translocate manufactured glucose to roots",
          "To transport water and mineral salts from roots to leaves",
          "To absorb carbon dioxide from the air",
          "To open the stomatal aperture"
        ],
        correctIndex: 1,
        explanation: "Xylem conducts water and inorganic ions absorbed by the root hair cells directly to the mesophyll cells for photosynthesis."
      }
    ]
  },

  {
    id: "light_law_of_reflection",
    title: "Physics: Laws of Reflection of Light at a Plane Mirror",
    subject: "Physics",
    icseClass: 7,
    chapter: "Light Energy",
    diagramSvg: "./src/assets/diagrams/law_of_reflection.svg",
    summary: "Canonical ray optics schematic demonstrating incident ray, reflected ray, point of incidence, normal, angle i, angle r, coplanarity, and i = r verification.",
    syllabusPoints: [
      "Define Rectilinear Propagation and Reflection of Light.",
      "Identify the key geometric components: Incident ray, Reflected ray, Normal, Point of incidence, Angle of incidence (i), Angle of reflection (r).",
      "State the First Law of Reflection: Angle of incidence equals Angle of reflection (∠i = ∠r).",
      "State the Second Law of Reflection: Incident ray, reflected ray, and normal all lie in the same geometric plane.",
      "Understand normal incidence (i = 0°, r = 0°) and image characteristics in a plane mirror (virtual, erect, laterally inverted, same size, equidistant)."
    ],
    keyDefinitions: [
      {
        term: "Reflection of Light",
        definition: "The phenomenon of bouncing back of light rays into the same medium when they strike an obstacle or polished reflective interface.",
        icseImportance: "Crucial"
      },
      {
        term: "Normal (ON)",
        definition: "An imaginary perpendicular line drawn to the reflecting surface at the exact point of incidence.",
        icseImportance: "High"
      },
      {
        term: "Angle of Incidence (∠i)",
        definition: "The angle formed between the incident ray and the normal at the point of incidence (NOT with the mirror surface).",
        icseImportance: "High"
      },
      {
        term: "Lateral Inversion",
        definition: "The apparent left-to-right reversal of an object's image when viewed in a plane mirror.",
        icseImportance: "High"
      }
    ],
    keyFormulas: [
      {
        concept: "First Law of Reflection",
        formula: "∠i = ∠r",
        derivation: "Experimental verification via optical pins and protractor measurement from normal.",
        symbolMeaning: "∠i = Angle of incidence, ∠r = Angle of reflection",
        units: "degrees (°)"
      },
      {
        concept: "Glancing Angle Relationship",
        formula: "Glancing Angle (g) = 90° - ∠i = 90° - ∠r",
        derivation: "The angle between incident/reflected ray and the plane mirror surface.",
        symbolMeaning: "g = Glancing angle",
        units: "degrees (°)"
      }
    ],
    interactiveHotspots: [
      {
        id: "hs_incident_ray",
        label: "Incident Ray (AO)",
        xPct: 34.0,
        yPct: 38.0,
        mechanism: "Incoming Light Ray",
        description: "The ray of light traveling from a luminous or illuminated source directed towards the reflecting mirror surface."
      },
      {
        id: "hs_normal",
        label: "Normal Line (ON)",
        xPct: 50.0,
        yPct: 30.0,
        mechanism: "Perpendicular Reference (90°)",
        description: "Perpendicular line to the mirror surface. All angles of incidence and reflection are measured strictly with respect to this normal line."
      },
      {
        id: "hs_reflected_ray",
        label: "Reflected Ray (OB)",
        xPct: 66.0,
        yPct: 38.0,
        mechanism: "Departing Bounced Ray",
        description: "The ray of light bouncing away from the reflective mirror surface at point of incidence O into the original medium."
      },
      {
        id: "hs_point_o",
        label: "Point of Incidence (O)",
        xPct: 50.0,
        yPct: 60.0,
        mechanism: "Reflection Vertex",
        description: "The precise coordinate where the incoming incident ray strikes the plane mirror boundary."
      },
      {
        id: "hs_plane_mirror",
        label: "Plane Mirror (MM')",
        xPct: 50.0,
        yPct: 62.5,
        mechanism: "Silvered Reflective Surface",
        description: "A flat glass plate with a highly reflective silver/aluminum deposit on the rear side covered by protective paint."
      }
    ],
    examTips: [
      "CRUCIAL ICSE DISTINCTION: If a question states 'the ray strikes the mirror at an angle of 35° to the surface', the angle of incidence is NOT 35°! It is (90° - 35°) = 55°.",
      "For a ray falling normally on a mirror (perpendicular), ∠i = 0° and ∠r = 0°, so it retraces its path straight back.",
      "The laws of reflection are universally valid for ALL types of surfaces: smooth plane mirrors, curved spherical mirrors, and rough surfaces (diffuse reflection)."
    ],
    formativeQuestions: [
      {
        question: "If a ray of light is incident on a plane mirror such that the angle between the incident ray and the mirror surface is 30°, what is the angle of reflection?",
        options: ["30°", "60°", "90°", "120°"],
        correctIndex: 1,
        explanation: "The angle with the surface is the glancing angle (30°). The angle of incidence i = 90° - 30° = 60°. Since ∠i = ∠r, the angle of reflection is 60°."
      },
      {
        question: "What happens when a light ray strikes a plane mirror normally (along the normal)?",
        options: [
          "It reflects at an angle of 90°",
          "It is completely absorbed by the glass",
          "It retraces its path back with ∠i = 0° and ∠r = 0°",
          "It bends parallel to the mirror surface"
        ],
        correctIndex: 2,
        explanation: "When incident along the normal, the angle between the ray and normal is 0°. Hence ∠r = 0°, and the light reflects back along the identical path."
      }
    ]
  }
];
