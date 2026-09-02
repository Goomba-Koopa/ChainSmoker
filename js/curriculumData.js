/**
 * ICSE Class 7 Comprehensive Science Curriculum Data
 * Subjects: Physics, Chemistry, Biology
 * Aligned with CISCE (Council for the Indian School Certificate Examinations) Standards
 */

export const CURRICULUM_DATA = {
  subjects: [
    {
      id: 'physics',
      name: 'Physics',
      tagline: 'Mechanics, Heat, Optics & Electrical Phenomena',
      icon: 'zap',
      badge: 'ICSE Science I',
      color: 'blue',
      accentColor: '#2563eb',
      accentBg: '#eff6ff',
      totalUnits: 6,
      masteryThreshold: 80,
      chapters: [
        {
          id: 'phy-ch1',
          code: 'PHY-701',
          title: 'Physical Quantities & Measurement',
          estimatedTime: '45 mins',
          masteryScore: 0,
          summary: 'Measurement of volume of regular and irregular solids, estimation of area using graph paper, mass, density, and speed calculations with SI units.',
          learningObjectives: [
            'Understand volume measurement of irregular solids using a measuring cylinder',
            'Compute density using mass and volume formulas',
            'Differentiate between mass and weight',
            'Estimate area of irregular lamina using graph sheets'
          ],
          diagrams: [
            {
              id: 'diag-density-cylinder',
              title: 'Measuring Cylinder: Irregular Solid Volume',
              subtitle: 'Displacement method for volume determination',
              type: 'svg-interactive',
              diagramKey: 'densityCylinder',
              hotspots: [
                { id: 'h1', x: 50, y: 25, label: 'Initial Water Level (V₁)', text: 'The initial meniscus reading before immersing the stone. Measure at the bottom of the concave meniscus.' },
                { id: 'h2', x: 50, y: 65, label: 'Submerged Solid', text: 'An insoluble, irregular solid (like a stone) tied with a thin thread completely immersed in liquid.' },
                { id: 'h3', x: 50, y: 15, label: 'Final Water Level (V₂)', text: 'The raised water level after complete immersion. Volume of Solid = V₂ - V₁.' }
              ]
            }
          ],
          formulas: [
            {
              id: 'f-density',
              name: 'Density Formula',
              equation: 'd = \\frac{m}{V}',
              rendered: 'Density (d) = Mass (m) / Volume (V)',
              siUnit: 'kg/m³ (CGS: g/cm³)',
              variables: [
                { symbol: 'd', name: 'Density', unit: 'kg/m³ or g/cm³', default: 2.7, min: 0.1, max: 20, step: 0.1 },
                { symbol: 'm', name: 'Mass', unit: 'grams (g) or kg', default: 54, min: 1, max: 500, step: 1 },
                { symbol: 'V', name: 'Volume', unit: 'cm³ or m³', default: 20, min: 1, max: 200, step: 1 }
              ],
              calculate: (params) => {
                if (params.target === 'd') return params.m / params.V;
                if (params.target === 'm') return params.d * params.V;
                if (params.target === 'V') return params.m / params.d;
                return 0;
              },
              example: 'A brass cylinder of mass 252 g occupies a volume of 30 cm³. Find its density: d = 252 / 30 = 8.4 g/cm³.'
            },
            {
              id: 'f-speed',
              name: 'Speed Formula',
              equation: 'v = \\frac{s}{t}',
              rendered: 'Speed (v) = Distance (s) / Time (t)',
              siUnit: 'm/s (or km/h)',
              variables: [
                { symbol: 'v', name: 'Speed', unit: 'm/s', default: 20, min: 1, max: 120, step: 0.5 },
                { symbol: 's', name: 'Distance', unit: 'meters (m)', default: 200, min: 10, max: 5000, step: 10 },
                { symbol: 't', name: 'Time', unit: 'seconds (s)', default: 10, min: 1, max: 300, step: 1 }
              ],
              calculate: (params) => {
                if (params.target === 'v') return params.s / params.t;
                if (params.target === 's') return params.v * params.t;
                if (params.target === 't') return params.s / params.v;
                return 0;
              },
              example: 'A car covers 180 km in 3 hours. Its speed = 180 / 3 = 60 km/h (16.67 m/s).'
            }
          ],
          quizQuestions: [
            {
              id: 'q-phy-101',
              question: 'A piece of stone of mass 120 g is immersed into a measuring cylinder containing 40 mL of water. The level rises to 70 mL. What is the density of the stone?',
              options: [
                '4.0 g/cm³',
                '3.0 g/cm³',
                '2.5 g/cm³',
                '1.71 g/cm³'
              ],
              correctIndex: 0,
              explanation: 'Volume displaced = Final reading (70 mL) - Initial reading (40 mL) = 30 mL = 30 cm³. Density = Mass / Volume = 120 g / 30 cm³ = 4.0 g/cm³.',
              hint: 'Calculate the volume of the stone first: V = V2 - V1.'
            },
            {
              id: 'q-phy-102',
              question: 'Which of the following is the standard SI unit of density?',
              options: [
                'g/cm³',
                'kg/m³',
                'kg/L',
                'g/mL'
              ],
              correctIndex: 1,
              explanation: 'In the International System of Units (SI), mass is measured in kilograms (kg) and volume in cubic meters (m³), making the SI unit kg/m³.',
              hint: 'Think about the SI units of mass and volume.'
            }
          ]
        },
        {
          id: 'phy-ch2',
          code: 'PHY-702',
          title: 'Motion & Force',
          estimatedTime: '55 mins',
          masteryScore: 0,
          summary: 'Types of motion (rectilinear, circular, periodic, oscillatory), scalar and vector concepts, and effects of balanced & unbalanced forces.',
          learningObjectives: [
            'Classify various types of motion with real-world examples',
            'Understand uniform vs non-uniform motion with distance-time graphs',
            'Analyze balanced vs unbalanced forces on bodies at rest and in motion'
          ],
          diagrams: [
            {
              id: 'diag-motion-types',
              title: 'Classification of Motion & Simple Pendulum',
              subtitle: 'Oscillatory motion and periodic components',
              type: 'svg-interactive',
              diagramKey: 'simplePendulum',
              hotspots: [
                { id: 'p1', x: 50, y: 10, label: 'Rigid Support', text: 'Fixed point of suspension for the inextensible thread.' },
                { id: 'p2', x: 50, y: 55, label: 'Mean Position (O)', text: 'The equilibrium position where the net force on the bob is zero.' },
                { id: 'p3', x: 20, y: 48, label: 'Extreme Position (A)', text: 'Maximum displacement to one side; velocity becomes zero instantaneously.' },
                { id: 'p4', x: 80, y: 48, label: 'Extreme Position (B)', text: 'Opposite extreme displacement; potential energy is at maximum.' }
              ]
            }
          ],
          formulas: [
            {
              id: 'f-time-period',
              name: 'Time Period of Pendulum',
              equation: 'T = \\frac{\\text{Total Time}}{\\text{Number of Oscillations}}',
              rendered: 'Time Period (T) = Total Time (t) / Number of Oscillations (n)',
              siUnit: 'seconds (s)',
              variables: [
                { symbol: 'T', name: 'Time Period', unit: 'seconds (s)', default: 2.0, min: 0.1, max: 10, step: 0.1 },
                { symbol: 't', name: 'Total Time', unit: 'seconds (s)', default: 40, min: 1, max: 300, step: 1 },
                { symbol: 'n', name: 'Oscillations', unit: 'count', default: 20, min: 1, max: 100, step: 1 }
              ],
              calculate: (params) => {
                if (params.target === 'T') return params.t / params.n;
                if (params.target === 't') return params.T * params.n;
                if (params.target === 'n') return params.t / params.T;
                return 0;
              },
              example: 'A pendulum takes 36 seconds to complete 18 oscillations. Its time period T = 36 / 18 = 2.0 seconds.'
            }
          ],
          quizQuestions: [
            {
              id: 'q-phy-201',
              question: 'A simple pendulum completes 40 oscillations in 80 seconds. What is its frequency of oscillation?',
              options: [
                '2.0 Hz',
                '0.5 Hz',
                '4.0 Hz',
                '0.25 Hz'
              ],
              correctIndex: 1,
              explanation: 'Frequency (f) = Number of oscillations / Total time = 40 / 80 = 0.5 Hz (or f = 1/T where T = 80/40 = 2s, f = 1/2 = 0.5 Hz).',
              hint: 'Frequency is the number of complete oscillations made in one second.'
            },
            {
              id: 'q-phy-202',
              question: 'The motion of the blades of a spinning ceiling fan is an example of:',
              options: [
                'Rectilinear motion',
                'Rotatory / Circular motion',
                'Periodic oscillatory motion',
                'Random motion'
              ],
              correctIndex: 1,
              explanation: 'The fan blades rotate around a fixed central axis, which characterizes rotatory (circular) motion.',
              hint: 'Every point on the blade moves in a circle around a central axle.'
            }
          ]
        },
        {
          id: 'phy-ch3',
          code: 'PHY-703',
          title: 'Light & Optics',
          estimatedTime: '60 mins',
          masteryScore: 0,
          summary: 'Reflection of light, Laws of reflection, Plane mirrors and image characteristics, lateral inversion, pinhole camera principles.',
          learningObjectives: [
            'Verify the Laws of Reflection: Angle of Incidence = Angle of Reflection',
            'Construct ray diagrams for images formed by plane mirrors',
            'Identify image characteristics: virtual, erect, same size, laterally inverted',
            'Examine image formation in pinhole cameras and shadow formation'
          ],
          diagrams: [
            {
              id: 'diag-reflection-laws',
              title: 'Laws of Reflection at a Plane Mirror',
              subtitle: 'Incident ray, Reflected ray, and Normal on reflective boundary',
              type: 'svg-interactive',
              diagramKey: 'reflectionRayDiagram',
              hotspots: [
                { id: 'r1', x: 25, y: 25, label: 'Incident Ray (AO)', text: 'The incoming light ray traveling towards the reflecting surface.' },
                { id: 'r2', x: 50, y: 50, label: 'Point of Incidence (O)', text: 'The exact point where the incident ray strikes the mirror surface.' },
                { id: 'r3', x: 50, y: 20, label: 'Normal (ON)', text: 'An imaginary line drawn perpendicular (at 90°) to the reflecting surface at the point of incidence.' },
                { id: 'r4', x: 75, y: 25, label: 'Reflected Ray (OB)', text: 'The ray of light bouncing back into the same medium after reflection.' },
                { id: 'r5', x: 38, y: 35, label: 'Angle of Incidence (∠i)', text: 'The angle between the incident ray and the normal. ∠i = ∠r.' },
                { id: 'r6', x: 62, y: 35, label: 'Angle of Reflection (∠r)', text: 'The angle between the reflected ray and the normal. Equal to ∠i.' }
              ]
            }
          ],
          formulas: [
            {
              id: 'f-reflection-law',
              name: 'Law of Reflection',
              equation: '\\angle i = \\angle r',
              rendered: 'Angle of Incidence (i) = Angle of Reflection (r)',
              siUnit: 'Degrees (°)',
              variables: [
                { symbol: 'i', name: 'Angle of Incidence', unit: 'degrees (°)', default: 45, min: 0, max: 89, step: 1 },
                { symbol: 'r', name: 'Angle of Reflection', unit: 'degrees (°)', default: 45, min: 0, max: 89, step: 1 }
              ],
              calculate: (params) => {
                if (params.target === 'r') return params.i;
                if (params.target === 'i') return params.r;
                return params.i;
              },
              example: 'If an incident light ray strikes a plane mirror at an angle of 35° to the normal, the reflected ray exits at exactly 35° to the normal.'
            },
            {
              id: 'f-mirror-images',
              name: 'Number of Images in Inclined Mirrors',
              equation: 'n = \\frac{360^\\circ}{\\theta} - 1',
              rendered: 'Number of Images (n) = (360° / θ) - 1',
              siUnit: 'Integer Count',
              variables: [
                { symbol: 'n', name: 'Images Formed', unit: 'count', default: 3, min: 1, max: 35, step: 1 },
                { symbol: 'theta', name: 'Inclination Angle θ', unit: 'degrees (°)', default: 90, min: 10, max: 180, step: 5 }
              ],
              calculate: (params) => {
                if (params.target === 'n') {
                  const val = Math.floor(360 / params.theta);
                  return (360 % params.theta === 0) ? val - 1 : val;
                }
                return 0;
              },
              example: 'When two plane mirrors are placed at 90° to each other: n = (360/90) - 1 = 4 - 1 = 3 images.'
            }
          ],
          quizQuestions: [
            {
              id: 'q-phy-301',
              question: 'A ray of light strikes a plane mirror making a glancing angle of 30° with the mirror surface. What is the angle of reflection?',
              options: [
                '30°',
                '60°',
                '90°',
                '45°'
              ],
              correctIndex: 1,
              explanation: 'The glancing angle is between the ray and mirror surface. Angle of incidence ∠i = 90° - 30° = 60°. According to the first law of reflection, ∠r = ∠i = 60Content.',
              hint: 'Remember that the angle of incidence is measured from the normal, not the mirror surface.'
            }
          ]
        },
        {
          id: 'phy-ch4',
          code: 'PHY-704',
          title: 'Electricity & Circuits',
          estimatedTime: '50 mins',
          masteryScore: 0,
          summary: 'Electric current, simple circuits, conductors & insulators, series and parallel circuit configurations, heating effects and circuit safety.',
          learningObjectives: [
            'Identify standard electrical schematic symbols',
            'Construct simple closed, open, series, and parallel circuits',
            'Explain the function of switches, cells, bulbs, fuses, and meters'
          ],
          diagrams: [
            {
              id: 'diag-electric-circuit',
              title: 'Interactive Complete Electric Circuit',
              subtitle: 'Direct current path with cell, switch, ammeter, and load bulb',
              type: 'svg-interactive',
              diagramKey: 'electricCircuit',
              hotspots: [
                { id: 'c1', x: 25, y: 15, label: 'Electric Cell (DC Source)', text: 'Provides electrical energy through chemical reaction. Long thin line is (+), short thick line is (-).' },
                { id: 'c2', x: 75, y: 15, label: 'Control Key / Switch', text: 'Used to open or close the circuit. When closed, electrons flow continuously.' },
                { id: 'c3', x: 80, y: 55, label: 'Ammeter', text: 'Instrument connected in series to measure electric current magnitude in Amperes (A).' },
                { id: 'c4', x: 50, y: 85, label: 'Electric Lamp (Load)', text: 'Converts electrical energy into light and thermal energy via tungsten filament resistance.' }
              ]
            }
          ],
          formulas: [
            {
              id: 'f-current',
              name: 'Electric Current Definition',
              equation: 'I = \\frac{Q}{t}',
              rendered: 'Current (I) = Electric Charge (Q) / Time (t)',
              siUnit: 'Amperes (A)',
              variables: [
                { symbol: 'I', name: 'Current', unit: 'Amperes (A)', default: 2.5, min: 0.1, max: 20, step: 0.1 },
                { symbol: 'Q', name: 'Charge', unit: 'Coulombs (C)', default: 50, min: 1, max: 500, step: 1 },
                { symbol: 't', name: 'Time', unit: 'seconds (s)', default: 20, min: 1, max: 120, step: 1 }
              ],
              calculate: (params) => {
                if (params.target === 'I') return params.Q / params.t;
                if (params.target === 'Q') return params.I * params.t;
                if (params.target === 't') return params.Q / params.I;
                return 0;
              },
              example: 'If 120 Coulombs of charge flows through a lamp in 60 seconds, current I = 120 / 60 = 2.0 A.'
            }
          ],
          quizQuestions: [
            {
              id: 'q-phy-401',
              question: 'In a series circuit containing three identical incandescent bulbs, what happens if one bulb burns out?',
              options: [
                'The other two bulbs glow brighter',
                'All bulbs turn off immediately',
                'The remaining two bulbs continue with same brightness',
                'The battery reverses polarity'
              ],
              correctIndex: 1,
              explanation: 'In a series circuit, there is only one single continuous path for current. If any component breaks, the circuit opens and current stops flowing everywhere.',
              hint: 'Consider how many paths exist for the electrical current to travel in a series loop.'
            }
          ]
        },
        {
          id: 'phy-ch5',
          code: 'PHY-705',
          title: 'Heat & Temperature',
          estimatedTime: '45 mins',
          masteryScore: 0,
          summary: 'Concepts of heat energy and temperature, thermal expansion in solids, liquids and gases, methods of heat transfer (conduction, convection, radiation).',
          learningObjectives: [
            'Distinguish clearly between Heat (energy in transit) and Temperature (degree of hotness)',
            'Convert between Celsius, Fahrenheit, and Kelvin temperature scales',
            'Explain everyday phenomena of conduction, convection, and radiation'
          ],
          diagrams: [
            {
              id: 'diag-heat-transfer',
              title: 'Three Modes of Heat Transfer',
              subtitle: 'Conduction in metal, Convection in liquid, Radiation in space',
              type: 'svg-interactive',
              diagramKey: 'heatTransfer',
              hotspots: [
                { id: 'ht1', x: 25, y: 40, label: 'Conduction (Solid Rod)', text: 'Transfer of heat through direct particle-to-particle vibration without bulk movement of matter.' },
                { id: 'ht2', x: 50, y: 40, label: 'Convection (Boiling Flask)', text: 'Transfer of heat in fluids through actual circular displacement currents of warmer, less dense fluid rising.' },
                { id: 'ht3', x: 75, y: 40, label: 'Thermal Radiation', text: 'Transfer of heat energy via electromagnetic infrared waves requiring no material medium.' }
              ]
            }
          ],
          formulas: [
            {
              id: 'f-temp-conversion',
              name: 'Celsius to Fahrenheit Scale',
              equation: '\\frac{C}{5} = \\frac{F - 32}{9}',
              rendered: 'F = (C × 9/5) + 32  |  C = (F - 32) × 5/9',
              siUnit: 'Degrees Celsius (°C) / Fahrenheit (°F)',
              variables: [
                { symbol: 'C', name: 'Celsius', unit: '°C', default: 37, min: -40, max: 200, step: 0.5 },
                { symbol: 'F', name: 'Fahrenheit', unit: '°F', default: 98.6, min: -40, max: 392, step: 0.9 }
              ],
              calculate: (params) => {
                if (params.target === 'F') return (params.C * 9 / 5) + 32;
                if (params.target === 'C') return (params.F - 32) * 5 / 9;
                return 0;
              },
              example: 'Normal human body temperature 37°C converts to F: (37 × 1.8) + 32 = 98.6°F.'
            }
          ],
          quizQuestions: [
            {
              id: 'q-phy-501',
              question: 'At what temperature do the Celsius and Fahrenheit thermometers indicate the exact same numerical reading?',
              options: [
                '0°',
                '100°',
                '-40°',
                '-32°'
              ],
              correctIndex: 2,
              explanation: 'Setting C = F in C/5 = (F - 32)/9 gives C/5 = (C - 32)/9 => 9C = 5C - 160 => 4C = -160 => C = -40°.',
              hint: 'Solve the equation C = (C × 9/5) + 32.'
            }
          ]
        },
        {
          id: 'phy-ch6',
          code: 'PHY-706',
          title: 'Sound & Acoustics',
          estimatedTime: '40 mins',
          masteryScore: 0,
          summary: 'Production of sound by vibrating bodies, propagation through solid, liquid, gas mediums, speed of sound, amplitude, pitch, loudness.',
          learningObjectives: [
            'Demonstrate that vibrating objects produce sound',
            'Analyze why sound requires a material medium and cannot propagate in vacuum',
            'Relate loudness to amplitude and pitch to frequency'
          ],
          diagrams: [
            {
              id: 'diag-sound-wave',
              title: 'Sound Wave Anatomy: Longitudinal Wave',
              subtitle: 'Wavelength, Amplitude, and Frequency parameters',
              type: 'svg-interactive',
              diagramKey: 'soundWave',
              hotspots: [
                { id: 'sw1', x: 25, y: 35, label: 'Compression Zone', text: 'Region of high pressure and dense particle crowding.' },
                { id: 'sw2', x: 55, y: 35, label: 'Rarefaction Zone', text: 'Region of low pressure and spread-apart particle spacing.' },
                { id: 'sw3', x: 40, y: 15, label: 'Wavelength (λ)', text: 'The distance between two consecutive compressions or rarefactions.' }
              ]
            }
          ],
          formulas: [
            {
              id: 'f-wave-speed',
              name: 'Wave Speed Formula',
              equation: 'v = f \\times \\lambda',
              rendered: 'Speed (v) = Frequency (f) × Wavelength (λ)',
              siUnit: 'm/s',
              variables: [
                { symbol: 'v', name: 'Wave Speed', unit: 'm/s', default: 340, min: 100, max: 1500, step: 10 },
                { symbol: 'f', name: 'Frequency', unit: 'Hertz (Hz)', default: 170, min: 20, max: 20000, step: 10 },
                { symbol: 'lambda', name: 'Wavelength λ', unit: 'meters (m)', default: 2.0, min: 0.01, max: 20, step: 0.1 }
              ],
              calculate: (params) => {
                if (params.target === 'v') return params.f * params.lambda;
                if (params.target === 'f') return params.v / params.lambda;
                if (params.target === 'lambda') return params.v / params.f;
                return 0;
              },
              example: 'A sound wave of frequency 500 Hz travels in air at 340 m/s. Its wavelength λ = 340 / 500 = 0.68 m.'
            }
          ],
          quizQuestions: [
            {
              id: 'q-phy-601',
              question: 'In which medium does sound travel at the highest speed?',
              options: [
                'Air at 20°C',
                'Distilled Water',
                'Steel / Solid Iron',
                'Vacuum'
              ],
              correctIndex: 2,
              explanation: 'Sound travels fastest through tightly packed solids like steel (~5900 m/s), slower in liquids (~1500 m/s), slowest in gases (~343 m/s), and cannot travel in a vacuum.',
              hint: 'Sound propagation speed increases with the elasticity and density of the medium.'
            }
          ]
        }
      ]
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      tagline: 'Matter, Chemical Changes, Acids & Solutions',
      icon: 'flask-conical',
      badge: 'ICSE Science II',
      color: 'emerald',
      accentColor: '#059669',
      accentBg: '#ecfdf5',
      totalUnits: 5,
      masteryThreshold: 80,
      chapters: [
        {
          id: 'chem-ch1',
          code: 'CHEM-701',
          title: 'Matter & Composition',
          estimatedTime: '45 mins',
          masteryScore: 0,
          summary: 'Particulate nature of matter, kinetic molecular theory, arrangement of particles in solids, liquids and gases, changes of state and interconversions.',
          learningObjectives: [
            'State key postulates of the Kinetic Theory of Matter',
            'Compare intermolecular space and intermolecular attraction across states of matter',
            'Explain melting, boiling, evaporation, condensation, freezing, and sublimation'
          ],
          diagrams: [
            {
              id: 'diag-states-matter',
              title: 'Kinetic States of Matter & Phase Transitions',
              subtitle: 'Solid crystal, Liquid fluidity, and Gas expansion states',
              type: 'svg-interactive',
              diagramKey: 'statesOfMatter',
              hotspots: [
                { id: 'sm1', x: 20, y: 50, label: 'Solid State', text: 'Tightly packed orderly lattice. Negligible intermolecular space, strong intermolecular force. Definite shape and volume.' },
                { id: 'sm2', x: 50, y: 50, label: 'Liquid State', text: 'Loosely held particles with moderate intermolecular spaces. Takes shape of container, definite volume.' },
                { id: 'sm3', x: 80, y: 50, label: 'Gaseous State', text: 'Widely separated fast moving particles. Maximum intermolecular space, negligible attraction. Expands indefinitely.' }
              ]
            }
          ],
          formulas: [],
          quizQuestions: [
            {
              id: 'q-chm-101',
              question: 'Which process describes the direct transformation of a solid into gas without passing through the liquid phase?',
              options: [
                'Vaporization',
                'Condensation',
                'Sublimation',
                'Deposition'
              ],
              correctIndex: 2,
              explanation: 'Sublimation is the direct change from solid to gas on heating (e.g. Ammonium chloride, Camphor, Iodine crystals).',
              hint: 'Think of dry ice or camphor heating up.'
            }
          ]
        },
        {
          id: 'chem-ch2',
          code: 'CHEM-702',
          title: 'Elements, Compounds & Mixtures',
          estimatedTime: '55 mins',
          masteryScore: 0,
          summary: 'Classification of pure substances into elements and compounds, mixtures, and laboratory separation techniques.',
          learningObjectives: [
            'Write chemical symbols for the first 20 elements of the periodic table',
            'Distinguish compounds from mixtures by composition, properties, and separation',
            'Master separation techniques: filtration, evaporation, crystallization, distillation'
          ],
          diagrams: [
            {
              id: 'diag-separation-distillation',
              title: 'Simple Distillation Laboratory Apparatus',
              subtitle: 'Separation of liquid-liquid or solid-liquid homogeneous solutions',
              type: 'svg-interactive',
              diagramKey: 'distillationApparatus',
              hotspots: [
                { id: 'd1', x: 28, y: 70, label: 'Bunsen Burner & Wire Gauze', text: 'Controlled heat source providing uniform thermal energy.' },
                { id: 'd2', x: 28, y: 45, label: 'Round Bottom Distillation Flask', text: 'Contains the solution mixture with porcelain boiling chips to ensure smooth boiling.' },
                { id: 'd3', x: 28, y: 20, label: 'Thermometer Bulb', text: 'Positioned at the side-arm opening to measure the vapor boiling point accurately.' },
                { id: 'd4', x: 58, y: 40, label: 'Liebig Condenser', text: 'Water-jacketed cooling glass tube. Cold water enters bottom (inlet) and leaves top (outlet).' },
                { id: 'd5', x: 85, y: 75, label: 'Conical Receiver Flask', text: 'Collects the condensed purified liquid called the distillate.' }
              ]
            }
          ],
          formulas: [
            {
              id: 'f-mass-percentage',
              name: 'Concentration of Solution (% Mass)',
              equation: '\\text{Concentration} = \\frac{\\text{Mass of Solute}}{\\text{Mass of Solute} + \\text{Mass of Solvent}} \\times 100\\%',
              rendered: 'Mass % = [Mass Solute / (Mass Solute + Mass Solvent)] × 100',
              siUnit: 'Percentage (%)',
              variables: [
                { symbol: 'solute', name: 'Solute Mass', unit: 'grams (g)', default: 15, min: 1, max: 100, step: 1 },
                { symbol: 'solvent', name: 'Solvent Mass (Water)', unit: 'grams (g)', default: 185, min: 10, max: 1000, step: 5 }
              ],
              calculate: (params) => {
                if (params.target === 'conc') {
                  return (params.solute / (params.solute + params.solvent)) * 100;
                }
                return 0;
              },
              example: 'Dissolving 20 g NaCl in 80 g water gives: (20 / (20 + 80)) × 100 = 20% solution by mass.'
            }
          ],
          quizQuestions: [
            {
              id: 'q-chm-201',
              question: 'In a Liebig condenser, why is cold cooling water always fed into the lower inlet and discharged from the upper outlet?',
              options: [
                'To prevent glass breakage due to pressure',
                'To ensure the cooling jacket remains completely filled with water for maximum condensation efficiency',
                'To make the water flow faster due to gravity',
                'To heat up the incoming vapor'
              ],
              correctIndex: 1,
              explanation: 'Introducing water from the bottom guarantees that the jacket fills completely against gravity, avoiding air pockets and maximizing thermal heat exchange.',
              hint: 'Think about how gravity affects water filling a tilted glass cylinder.'
            }
          ]
        },
        {
          id: 'chem-ch3',
          code: 'CHEM-703',
          title: 'Acids, Bases & Salts',
          estimatedTime: '55 mins',
          masteryScore: 0,
          summary: 'Definitions and properties of mineral and organic acids, alkalis, neutral substances, natural and synthetic indicators, and neutralization reactions.',
          learningObjectives: [
            'Classify everyday substances into acidic, basic, and neutral categories',
            'Predict color changes with Blue/Red Litmus, Phenolphthalein, and Universal indicator',
            'Write word and chemical equations for neutralization reactions (Acid + Base -> Salt + Water)'
          ],
          diagrams: [
            {
              id: 'diag-ph-indicators',
              title: 'The pH Scale & Indicator Color Spectrum',
              subtitle: 'Acids (pH 0-6), Neutral (pH 7), and Bases/Alkalis (pH 8-14)',
              type: 'svg-interactive',
              diagramKey: 'phScaleDiagram',
              hotspots: [
                { id: 'ph1', x: 15, y: 50, label: 'Strong Acid (pH 1-2, Gastric HCl)', text: 'Turns blue litmus red, phenolphthalein colorless, methyl orange red. pH < 7.' },
                { id: 'ph2', x: 35, y: 50, label: 'Weak Acid (pH 4-5, Vinegar / Citrus)', text: 'Contains acetic acid / citric acid. Turns blue litmus pale red / orange.' },
                { id: 'ph3', x: 50, y: 50, label: 'Neutral Point (pH 7, Pure Water)', text: 'Neither acidic nor basic. Equal concentrations of H⁺ and OH⁻ ions. Green in universal indicator.' },
                { id: 'ph4', x: 68, y: 50, label: 'Mild Base (pH 9-10, Baking Soda)', text: 'Turns red litmus blue, phenolphthalein pink. Neutralizes excess stomach acid.' },
                { id: 'ph5', x: 88, y: 50, label: 'Strong Alkali (pH 13-14, NaOH Lye)', text: 'Highly corrosive caustic alkali. Turns universal indicator deep violet/purple.' }
              ]
            }
          ],
          formulas: [],
          quizQuestions: [
            {
              id: 'q-chm-301',
              question: 'When a few drops of phenolphthalein indicator are added to Sodium Hydroxide (NaOH) solution, the color turns:',
              options: [
                'Colorless',
                'Deep Pink / Magenta',
                'Yellow',
                'Brick Red'
              ],
              correctIndex: 1,
              explanation: 'Phenolphthalein remains colorless in acidic and neutral solutions, but turns vibrant pink/magenta in alkaline (basic) solutions.',
              hint: 'Phenolphthalein is the standard indicator used to detect alkalis.'
            }
          ]
        },
        {
          id: 'chem-ch4',
          code: 'CHEM-704',
          title: 'Air & Atmosphere',
          estimatedTime: '45 mins',
          masteryScore: 0,
          summary: 'Composition of air, percentage of oxygen, nitrogen, carbon dioxide and rare gases, respiration vs combustion, rusting of iron and its prevention.',
          learningObjectives: [
            'State the volumetric percentage composition of atmospheric gases',
            'Demonstrate that oxygen supports combustion while nitrogen and carbon dioxide do not',
            'Identify conditions required for rusting: iron + oxygen + moisture'
          ],
          diagrams: [
            {
              id: 'diag-air-pie',
              title: 'Atmospheric Composition & Gas Functions',
              subtitle: 'Nitrogen (78%), Oxygen (21%), Argon & Trace Gases (1%)',
              type: 'svg-interactive',
              diagramKey: 'airComposition',
              hotspots: [
                { id: 'air1', x: 35, y: 40, label: 'Nitrogen (78.08%)', text: 'Inert diluent of air; prevents rapid combustion; vital for plant protein synthesis.' },
                { id: 'air2', x: 75, y: 30, label: 'Oxygen (20.95%)', text: 'Essential for respiration of living organisms and supporter of combustion.' },
                { id: 'air3', x: 80, y: 70, label: 'Carbon Dioxide (0.04%)', text: 'Utilized by green plants in photosynthesis; contributes to natural greenhouse warmth.' }
              ]
            }
          ],
          formulas: [],
          quizQuestions: [
            {
              id: 'q-chm-401',
              question: 'Which chemical formula correctly represents the reddish-brown substance known as rust?',
              options: [
                'FeO',
                'Fe₃O₄',
                'Fe₂O₃ · xH₂O (Hydrated Ferric Oxide)',
                'FeSO₄ · 7H₂O'
              ],
              correctIndex: 2,
              explanation: 'Rusting is the slow electrochemical oxidation of iron in the presence of water and oxygen to form hydrated ferric oxide: Fe₂O₃ · xH₂O.',
              hint: 'Rust is a hydrated form of iron(III) oxide.'
            }
          ]
        },
        {
          id: 'chem-ch5',
          code: 'CHEM-705',
          title: 'Language of Chemistry & Equations',
          estimatedTime: '50 mins',
          masteryScore: 0,
          summary: 'Chemical symbols, valency, radicals, writing chemical formulas of binary compounds using criss-cross method, balancing simple chemical equations.',
          learningObjectives: [
            'Master valencies of mono, di, tri, and tetravalent elements and polyatomic radicals',
            'Construct balanced chemical formulas using the criss-cross technique',
            'Balance chemical equations satisfying the Law of Conservation of Mass'
          ],
          diagrams: [
            {
              id: 'diag-criss-cross',
              title: 'The Criss-Cross Chemical Formula Construction',
              subtitle: 'Valency interchange method for neutral ionic & covalent compounds',
              type: 'svg-interactive',
              diagramKey: 'crissCrossMethod',
              hotspots: [
                { id: 'cc1', x: 25, y: 25, label: 'Cation / Positive Radical (e.g. Al³⁺)', text: 'Metal ion or positive radical with positive oxidation valency state.' },
                { id: 'cc2', x: 75, y: 25, label: 'Anion / Negative Radical (e.g. O²⁻)', text: 'Non-metal ion or polyatomic radical with negative valency state.' },
                { id: 'cc3', x: 50, y: 75, label: 'Interchanged Subscripts: Al₂O₃', text: 'Valencies are swapped to the lower right corner and simplified to the lowest whole number ratio.' }
              ]
            }
          ],
          formulas: [],
          quizQuestions: [
            {
              id: 'q-chm-501',
              question: 'What is the chemical formula of Calcium Phosphate (Calcium valency = 2, Phosphate PO₄ valency = 3)?',
              options: [
                'CaPO₄',
                'Ca₂(PO₄)₃',
                'Ca₃(PO₄)₂',
                'Ca₃P₂'
              ],
              correctIndex: 2,
              explanation: 'By the criss-cross method: Ca has valency 2, PO₄ has valency 3. Interchanging valencies yields Ca₃(PO₄)₂.',
              hint: 'Cross the 2 to the phosphate and the 3 to the calcium.'
            }
          ]
        }
      ]
    },
    {
      id: 'biology',
      name: 'Biology',
      tagline: 'Tissues, Kingdom Classification, Human Systems & Ecology',
      icon: 'leaf',
      badge: 'ICSE Science III',
      color: 'teal',
      accentColor: '#0d9488',
      accentBg: '#f0fdfa',
      totalUnits: 5,
      masteryThreshold: 80,
      chapters: [
        {
          id: 'bio-ch1',
          code: 'BIO-701',
          title: 'Plant and Animal Tissues',
          estimatedTime: '60 mins',
          masteryScore: 0,
          summary: 'Structure, location and functions of Plant Tissues (Parenchyma, Collenchyma, Sclerenchyma, Xylem, Phloem) and Animal Tissues (Epithelial, Connective, Muscular, Nervous).',
          learningObjectives: [
            'Differentiate between apical, lateral, and intercalary meristems',
            'Compare simple permanent tissues (Parenchyma, Collenchyma, Sclerenchyma)',
            'Explain vascular transport: Xylem (water & minerals upward) vs Phloem (food bidirectional)',
            'Identify four animal tissue types: Epithelial, Connective, Muscular, Nervous'
          ],
          diagrams: [
            {
              id: 'diag-plant-tissues',
              title: 'Vascular Plant Tissues: Xylem vs Phloem Vessels',
              subtitle: 'Microscopic cross-section of conducting tissue bundle',
              type: 'svg-interactive',
              diagramKey: 'plantVascularTissues',
              hotspots: [
                { id: 'pt1', x: 28, y: 30, label: 'Xylem Tracheids & Vessels', text: 'Thick, lignified dead cells with perforated pits for unidirectional upward transport of water and mineral salts.' },
                { id: 'pt2', x: 72, y: 30, label: 'Phloem Sieve Tubes & Companion Cells', text: 'Living tubular cells with perforated sieve plates for bidirectional translocation of soluble organic sugars.' },
                { id: 'pt3', x: 50, y: 70, label: 'Vascular Cambium', text: 'Lateral meristem layer between xylem and phloem responsible for secondary growth in stem thickness.' }
              ]
            },
            {
              id: 'diag-neuron-structure',
              title: 'Structure of a Multipolar Neuron (Nerve Cell)',
              subtitle: 'Anatomy of impulses: Cyton, Dendrites, Axon, and Synapse',
              type: 'svg-interactive',
              diagramKey: 'neuronStructure',
              hotspots: [
                { id: 'nr1', x: 20, y: 45, label: 'Cyton / Cell Body & Nucleus', text: 'Contains cytoplasm, prominent nucleus, and Nissl granules; metabolic headquarters.' },
                { id: 'nr2', x: 10, y: 25, label: 'Dendrites', text: 'Branching tree-like cytoplasmic projections receiving electrical impulses from sensory receptors or adjoining neurons.' },
                { id: 'nr3', x: 55, y: 45, label: 'Axon & Myelin Sheath', text: 'Long slender nerve fiber insulated by lipid-rich myelin sheath for rapid saltatory nerve impulse conduction.' },
                { id: 'nr4', x: 88, y: 45, label: 'Axon Terminal / Synaptic Knob', text: 'Releases neurotransmitter chemicals (like acetylcholine) to bridge the synaptic gap to adjacent cells.' }
              ]
            }
          ],
          formulas: [],
          quizQuestions: [
            {
              id: 'q-bio-101',
              question: 'Which plant tissue provides high mechanical strength, rigidity and hardness to pear fruit and coconut husk?',
              options: [
                'Parenchyma',
                'Collenchyma',
                'Sclerenchyma',
                'Apical Meristem'
              ],
              correctIndex: 2,
              explanation: 'Sclerenchyma consists of dead cells with heavily thickened lignified secondary cell walls without protoplasts, conferring exceptional mechanical hardness.',
              hint: 'Look for the tissue made of dead cells with thick lignin deposits.'
            }
          ]
        },
        {
          id: 'bio-ch2',
          code: 'BIO-702',
          title: 'Classification of Living Organisms',
          estimatedTime: '55 mins',
          masteryScore: 0,
          summary: 'Whittaker Five Kingdom Classification: Monera, Protista, Fungi, Plantae, Animalia. Key characteristics of Major Invertebrate and Vertebrate Phyla.',
          learningObjectives: [
            'State the five kingdom classification criteria proposed by R.H. Whittaker',
            'Compare prokaryotic (Monera) vs eukaryotic organisms',
            'Classify animals into non-chordates and chordates'
          ],
          diagrams: [
            {
              id: 'diag-five-kingdoms',
              title: 'The Whittaker Five Kingdom Tree of Life',
              subtitle: 'Evolutionary divergence from Monera to Complex Multicellularity',
              type: 'svg-interactive',
              diagramKey: 'fiveKingdoms',
              hotspots: [
                { id: 'fk1', x: 20, y: 80, label: 'Kingdom Monera', text: 'Unicellular prokaryotes lacking membrane-bound nucleus and organelles (Bacteria, Cyanobacteria).' },
                { id: 'fk2', x: 50, y: 70, label: 'Kingdom Protista', text: 'Unicellular eukaryotes possessing true nucleus (Amoeba, Paramecium, Euglena).' },
                { id: 'fk3', x: 80, y: 40, label: 'Kingdom Fungi', text: 'Heterotrophic saprophytic multicellular eukaryotes with chitinous cell walls (Yeast, Rhizopus, Agaricus).' },
                { id: 'fk4', x: 30, y: 30, label: 'Kingdom Plantae', text: 'Autotrophic photosynthetic multicellular organisms with cellulose cell walls.' },
                { id: 'fk5', x: 65, y: 20, label: 'Kingdom Animalia', text: 'Multicellular heterotrophs lacking cell walls, capable of locomotion and sensory responses.' }
              ]
            }
          ],
          formulas: [],
          quizQuestions: [
            {
              id: 'q-bio-201',
              question: 'Which of the following organisms belongs to Kingdom Protista and moves using false feet (pseudopodia)?',
              options: [
                'Escherichia coli',
                'Amoeba proteus',
                'Mucor',
                'Hydra'
              ],
              correctIndex: 1,
              explanation: 'Amoeba is a single-celled eukaryotic organism of Kingdom Protista that captures food and moves via cytoplasmic extensions known as pseudopodia.',
              hint: 'This single-celled aquatic creature constantly alters its shape.'
            }
          ]
        },
        {
          id: 'bio-ch3',
          code: 'BIO-703',
          title: 'Plant Life: Photosynthesis & Respiration',
          estimatedTime: '55 mins',
          masteryScore: 0,
          summary: 'Photosynthesis equation, role of chlorophyll, sunlight, carbon dioxide, stomatal mechanism, transpiration, comparison between photosynthesis and respiration.',
          learningObjectives: [
            'Write the balanced summary equation of Photosynthesis',
            'Explain how stomata open and close via turgidity of guard cells',
            'Compare Photosynthesis with Respiration'
          ],
          diagrams: [
            {
              id: 'diag-stomata-photosynthesis',
              title: 'Stomatal Apparatus & Guard Cell Dynamics',
              subtitle: 'Open stomatal pore (turgid) vs Closed stomatal pore (flaccid)',
              type: 'svg-interactive',
              diagramKey: 'stomataApparatus',
              hotspots: [
                { id: 'st1', x: 35, y: 35, label: 'Bean-shaped Guard Cells', text: 'Specialized kidney-shaped epidermal cells containing chloroplasts with thick inner walls and thin elastic outer walls.' },
                { id: 'st2', x: 50, y: 50, label: 'Stomatal Pore / Stoma', text: 'Central microscopic aperture allowing carbon dioxide gas intake and transpiration water loss.' },
                { id: 'st3', x: 75, y: 40, label: 'Subsidiary / Epidermal Cells', text: 'Surrounding protective epidermal cells providing osmotic water exchange to the guard cells.' }
              ]
            }
          ],
          formulas: [
            {
              id: 'f-photosynthesis-eq',
              name: 'Photosynthesis Overall Chemical Reaction',
              equation: '6\\text{CO}_2 + 12\\text{H}_2\\text{O} \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 + 6\\text{H}_2\\text{O}',
              rendered: '6CO₂ + 12H₂O + Light → C₆H₁₂O₆ (Glucose) + 6O₂ + 6H₂O',
              siUnit: 'Balanced Reaction',
              variables: [],
              calculate: () => 0,
              example: 'Carbon dioxide and water in green chloroplasts yield glucose energy and release breathable oxygen gas.'
            }
          ],
          quizQuestions: [
            {
              id: 'q-bio-301',
              question: 'During photosynthesis, oxygen gas released into the atmosphere originates directly from the photolysis of which molecule?',
              options: [
                'Carbon Dioxide (CO₂)',
                'Water (H₂O)',
                'Glucose (C₆H₁₂O₆)',
                'Chlorophyll pigment'
              ],
              correctIndex: 1,
              explanation: 'During the light-dependent photochemical reaction, water molecules are split (photolysis of water) by light energy, releasing protons, electrons, and oxygen gas.',
              hint: 'Light splits H2O into hydrogen ions and oxygen.'
            }
          ]
        },
        {
          id: 'bio-ch4',
          code: 'BIO-704',
          title: 'Human Excretory System',
          estimatedTime: '50 mins',
          masteryScore: 0,
          summary: 'Excretory organs in humans, gross structure of the kidney, microscopic anatomy of the nephron, formation of urine.',
          learningObjectives: [
            'Identify parts of the human urinary system: Kidneys, Ureters, Urinary Bladder, Urethra',
            'Describe the structure of a nephron (Bowman’s capsule, glomerulus, renal tubule)',
            'Trace the three main steps of urine formation and waste removal'
          ],
          diagrams: [
            {
              id: 'diag-excretory-system',
              title: 'Human Urinary & Excretory System',
              subtitle: 'Renal blood supply, kidney pair, ureters, and urinary bladder',
              type: 'svg-interactive',
              diagramKey: 'excretorySystem',
              hotspots: [
                { id: 'ex1', x: 30, y: 35, label: 'Right & Left Kidneys', text: 'Bean-shaped paired retroperitoneal organs filtering metabolic nitrogenous urea from blood.' },
                { id: 'ex2', x: 45, y: 25, label: 'Renal Artery & Renal Vein', text: 'Renal artery brings oxygenated blood rich in wastes; renal vein carries purified deoxygenated blood back to vena cava.' },
                { id: 'ex3', x: 38, y: 58, label: 'Ureters', text: 'Narrow muscular tubes conducting formed urine from renal pelvis to bladder via peristaltic waves.' },
                { id: 'ex4', x: 50, y: 80, label: 'Urinary Bladder', text: 'Distensible pear-shaped muscular reservoir holding up to 500 mL urine prior to micturition.' }
              ]
            }
          ],
          formulas: [],
          quizQuestions: [
            {
              id: 'q-bio-401',
              question: 'What is the structural and functional filtration unit of the human kidney?',
              options: [
                'Neuron',
                'Nephron',
                'Alveolus',
                'Hepatocyte'
              ],
              correctIndex: 1,
              explanation: 'Each human kidney contains approximately 1 to 1.2 million microscopic functional filtration units called nephrons (renal tubules).',
              hint: 'Be careful not to confuse the nervous unit (neuron) with the renal unit.'
            }
          ]
        },
        {
          id: 'bio-ch5',
          code: 'BIO-705',
          title: 'Human Nervous System & Senses',
          estimatedTime: '50 mins',
          masteryScore: 0,
          summary: 'Central nervous system (Brain, Spinal cord), Peripheral nervous system, Reflex action and reflex arc pathway, structure of the Human Eye.',
          learningObjectives: [
            'Examine parts of the human brain: Cerebrum, Cerebellum, and Medulla Oblongata',
            'Trace the reflex arc path: Receptor -> Sensory Neuron -> Interneuron -> Motor Neuron -> Effector',
            'Identify parts of the human eye (Cornea, Iris, Pupil, Lens, Retina) and their optical functions'
          ],
          diagrams: [
            {
              id: 'diag-human-eye',
              title: 'Anatomy of the Human Eye',
              subtitle: 'Optical focusing system with Cornea, Crystalline Lens, and Retina photoreceptors',
              type: 'svg-interactive',
              diagramKey: 'humanEye',
              hotspots: [
                { id: 'ey1', x: 18, y: 48, label: 'Cornea', text: 'Transparent anterior curved window that provides approximately 70% of the eye’s total optical refraction.' },
                { id: 'ey2', x: 26, y: 35, label: 'Iris & Pupil', text: 'Pigmented muscular diaphragm that contracts and dilates to regulate light entering through the pupil aperture.' },
                { id: 'ey3', x: 33, y: 48, label: 'Crystalline Biconvex Lens', text: 'Flexible transparent protein lens adjusted by ciliary muscles for fine focal distance accommodation.' },
                { id: 'ey4', x: 80, y: 48, label: 'Retina & Fovea Centralis', text: 'Light-sensitive inner layer containing millions of rod (dim light) and cone (color) photoreceptor cells.' },
                { id: 'ey5', x: 92, y: 55, label: 'Optic Nerve', text: 'Transmits converted electrical nerve impulses from retinal photoreceptors directly to the visual cortex of the brain.' }
              ]
            }
          ],
          formulas: [],
          quizQuestions: [
            {
              id: 'q-bio-501',
              question: 'Which region of the human brain is primarily responsible for coordinating muscular balance, equilibrium, and precision of body movements?',
              options: [
                'Cerebrum',
                'Cerebellum',
                'Medulla Oblongata',
                'Hypothalamus'
              ],
              correctIndex: 1,
              explanation: 'The Cerebellum (little brain) coordinates voluntary muscular contraction, balance, and posture maintenance.',
              hint: 'Located at the posterior base of the skull below the cerebral hemispheres.'
            }
          ]
        }
      ]
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      tagline: 'Algebra, Geometry, Mensuration & Number Systems',
      icon: 'shapes',
      badge: 'ICSE Mathematics',
      color: 'purple',
      accentColor: '#9333ea',
      accentBg: '#faf5ff',
      totalUnits: 4,
      chapters: [
        {
          id: 'math-ch1',
          code: 'MTH-701',
          title: 'Algebraic Expressions & Linear Equations',
          estimatedTime: '40 mins',
          summary: 'Variables, coefficients, degree of polynomials, addition/subtraction of like terms, and solving single-variable linear equations $ax + b = c$.',
          learningObjectives: [
            'Identify terms, coefficients, constants, and variables in algebraic expressions',
            'Perform arithmetic operations on polynomials',
            'Solve linear equations using transposition method'
          ],
          diagrams: [],
          formulas: [
            {
              id: 'f-linear-eq',
              name: 'Linear Equation Root',
              equation: 'x = \\frac{c - b}{a}',
              rendered: 'Linear Equation $ax + b = c \\implies x = (c - b) / a$',
              siUnit: 'Dimensionless / Scalar',
              variables: [
                { symbol: 'a', name: 'Coefficient a', unit: 'scalar (a ≠ 0)', default: 3, min: -20, max: 20, step: 1 },
                { symbol: 'b', name: 'Constant b', unit: 'scalar', default: 5, min: -50, max: 50, step: 1 },
                { symbol: 'c', name: 'Constant c', unit: 'scalar', default: 20, min: -50, max: 100, step: 1 }
              ],
              calculate: (params) => (params.c - params.b) / params.a,
              example: 'Solve 3x + 5 = 20: 3x = 15 => x = 5.'
            }
          ],
          quizQuestions: [
            {
              id: 'q-mth-101',
              question: 'If 4x - 7 = 21, what is the value of x?',
              options: ['5', '7', '8', '6'],
              correctIndex: 1,
              explanation: '4x = 21 + 7 => 4x = 28 => x = 28/4 = 7.',
              hint: 'Transpose -7 to the right-hand side first.'
            }
          ]
        },
        {
          id: 'math-ch2',
          code: 'MTH-702',
          title: 'Perimeter, Area & Mensuration',
          estimatedTime: '45 mins',
          summary: 'Perimeter and area of regular geometric figures: Rectangle, Square, Triangle, Parallelogram, and Circle (Circumference $2\\pi r$ and Area $\\pi r^2$).',
          learningObjectives: [
            'Compute perimeter and area of rectilinear figures',
            'Calculate circumference and surface area of circles using $\\pi \\approx \\frac{22}{7}$',
            'Solve textbook word problems involving pathway borders around rectangular fields'
          ],
          diagrams: [],
          formulas: [
            {
              id: 'f-circle-area',
              name: 'Circle Area Formula',
              equation: 'A = \\pi r^2',
              rendered: 'Area = \\pi \\times r^2',
              siUnit: 'cm² or m²',
              variables: [
                { symbol: 'r', name: 'Radius (r)', unit: 'cm or m', default: 7, min: 1, max: 50, step: 0.5 }
              ],
              calculate: (params) => (22 / 7) * Math.pow(params.r, 2),
              example: 'Find the area of a circle with radius 7 cm: A = (22/7) * 7² = 154 cm².'
            }
          ],
          quizQuestions: [
            {
              id: 'q-mth-201',
              question: 'A rectangular field has length 25 m and breadth 16 m. What is its total perimeter?',
              options: ['400 m', '82 m', '64 m', '90 m'],
              correctIndex: 1,
              explanation: 'Perimeter = 2 * (length + breadth) = 2 * (25 + 16) = 2 * 41 = 82 m.',
              hint: 'Use the standard formula P = 2(l + b).'
            }
          ]
        }
      ]
    },
    {
      id: 'history_civics',
      name: 'History & Civics',
      tagline: 'Medieval India, Delhi Sultanate, Mughals & The Indian Constitution',
      icon: 'landmark',
      badge: 'ICSE Social Science',
      color: 'amber',
      accentColor: '#d97706',
      accentBg: '#fffbeb',
      totalUnits: 4,
      chapters: [
        {
          id: 'hist-ch1',
          code: 'HIS-701',
          title: 'The Delhi Sultanate (1206 – 1526 CE)',
          estimatedTime: '45 mins',
          summary: 'Rise of the Mamluk (Slave), Khalji, Tughlaq, Sayyid, and Lodi dynasties. Administrative reforms of Alauddin Khalji (market control) and Muhammad bin Tughlaq’s projects.',
          learningObjectives: [
            'Trace the succession of the five Sultanate dynasties founded by Qutb-ud-din Aibak',
            'Analyze Alauddin Khalji’s military and price-control market regulations (Shahna-i-Mandi)',
            'Evaluate Muhammad bin Tughlaq’s administrative experiments: Transfer of capital to Daulatabad and token copper currency'
          ],
          diagrams: [],
          formulas: [],
          quizQuestions: [
            {
              id: 'q-his-101',
              question: 'Which Sultan of Delhi introduced strict market control regulations and established the department of Diwan-i-Riyasat?',
              options: ['Iltutmish', 'Alauddin Khalji', 'Balban', 'Firoz Shah Tughlaq'],
              correctIndex: 1,
              explanation: 'Alauddin Khalji fixed grain and commodity prices, appointed price superintendents (Shahna-i-Mandi), and maintained a large standing army.',
              hint: 'He was the second ruler of the Khalji dynasty who defended the Sultanate against Mongol invasions.'
            }
          ]
        },
        {
          id: 'hist-ch2',
          code: 'HIS-702',
          title: 'The Mughal Empire: Akbar the Great',
          estimatedTime: '50 mins',
          summary: 'Consolidation of Mughal rule, Akbar’s Rajput alliance policy, Mansabdari administrative system, Sulh-i-Kul (universal peace), and Din-i-Ilahi.',
          learningObjectives: [
            'Understand the Mansabdari system (Zat rank for personal status and Sawar rank for cavalry quota)',
            'Examine Akbar’s land revenue system (Zabt / Todar Mal’s Bandobast)',
            'Appreciate the secular philosophy of Sulh-i-Kul and the construction of the Ibadat Khana at Fatehpur Sikri'
          ],
          diagrams: [],
          formulas: [],
          quizQuestions: [
            {
              id: 'q-his-201',
              question: 'Under Akbar’s Mansabdari system, what did the term "Zat" indicate?',
              options: [
                'The number of horses and cavalry troops maintained',
                'The personal rank, salary, and status of the officer in the imperial hierarchy',
                'The specific revenue-collecting district assigned',
                'The judicial authority of the governor'
              ],
              correctIndex: 1,
              explanation: 'Zat determined the personal status and salary of the Mansabdar, while Sawar indicated the required cavalry contingent.',
              hint: 'Contrast Zat (personal status rank) with Sawar (cavalry quota).'
            }
          ]
        },
        {
          id: 'civ-ch1',
          code: 'CIV-701',
          title: 'The Constitution of India & Preamble',
          estimatedTime: '40 mins',
          summary: 'The framing of the Indian Constitution by the Constituent Assembly (Dr. B.R. Ambedkar), key terms of the Preamble (Sovereign, Socialist, Secular, Democratic, Republic), and Fundamental Rights.',
          learningObjectives: [
            'Explain the role of the Constituent Assembly and Drafting Committee chaired by Dr. B.R. Ambedkar',
            'Define Preamble ideals: Justice, Liberty, Equality, and Fraternity',
            'Identify the Six Fundamental Rights guaranteed under Part III of the Constitution'
          ],
          diagrams: [],
          formulas: [],
          quizQuestions: [
            {
              id: 'q-civ-101',
              question: 'Who served as the Chairman of the Drafting Committee of the Indian Constituent Assembly?',
              options: ['Dr. Rajendra Prasad', 'Dr. B.R. Ambedkar', 'Jawaharlal Nehru', 'Sardar Vallabhbhai Patel'],
              correctIndex: 1,
              explanation: 'Dr. B.R. Ambedkar was the Chairman of the Drafting Committee that framed the Constitution of India.',
              hint: 'Known as the chief architect of the Indian Constitution.'
            }
          ]
        },
        {
          id: 'civ-ch2',
          code: 'CIV-702',
          title: 'Directive Principles & Fundamental Duties',
          estimatedTime: '35 mins',
          summary: 'Directive Principles of State Policy (Part IV) guiding welfare governance, and 11 Fundamental Duties of citizens (Part IVA, Article 51A).',
          learningObjectives: [
            'Distinguish between justiciable Fundamental Rights and non-justiciable Directive Principles',
            'Categorize Directive Principles: Socialistic, Gandhian, and Liberal-Intellectual',
            'List key Fundamental Duties including safeguarding public property and respecting national symbols'
          ],
          diagrams: [],
          formulas: [],
          quizQuestions: [
            {
              id: 'q-civ-201',
              question: 'Are Directive Principles of State Policy directly enforceable (justiciable) by courts of law in India?',
              options: [
                'Yes, any citizen can approach the Supreme Court if a Directive Principle is not implemented',
                'No, they are non-justiciable constitutional guidelines for the State to establish a welfare society',
                'Only during a national emergency',
                'Only for central government laws, not state laws'
              ],
              correctIndex: 1,
              explanation: 'Directive Principles are non-justiciable; they serve as moral and constitutional guidelines for governance without direct judicial enforceability.',
              hint: 'Compare their enforceability with Fundamental Rights.'
            }
          ]
        }
      ]
    }
  ],
  academicScope: {
    grade: 'Class 7 ICSE',
    curriculumBoard: 'CISCE (Council for the Indian School Certificate Examinations)',
    targetDisciplines: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'History & Civics'],
    isExclusivelyClass7: true
  }
};
