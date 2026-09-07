#!/usr/bin/env python3
"""
AXIOM ICSE 7 // Master Topic Enrichment & Desk Margin Visual Integrator
Enriches all 44 topics across Physics, Chemistry, Biology, and Mathematics with:
- 1fr 120px CSS grid margin ergonomics (.margin-sketch and .desk-note in grid-column: 2)
- Bespoke hand-inked SVGs with discipline watercolor washes:
  * Physics: Terracotta #fbf0ea / #c2410c
  * Chemistry: Emerald #f0f7f2 / #15803d
  * Biology: Moss Olive #edf5ef / #2e382b
  * Mathematics: Ochre #fef8ea / #d97706
- Side-necked turtle (Pleurodira) cameos in selected science chapters
- Emerald Heads-Up callout boxes for 7th grade cognitive traps
- Complete elimination of 'compendium' and 'exemplar' (including plurals)
"""

import os
import re
import glob

TOPICS_DIR = r"C:\Users\chand\.gemini\antigravity\scratch\icse-explainer-desktop\topics"

# Side-necked turtle SVG generator for margin (100x100 viewbox)
def get_turtle_margin_svg(wash="#edf5ef", accent="#2e382b", caption="Pleurodira (6yo)"):
    return f'''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Soft organic wash -->
  <ellipse cx="50" cy="52" rx="38" ry="34" fill="{wash}"/>
  <!-- Rear Flippers/Paddles -->
  <path d="M26 68 C20 72 15 78 14 84 C18 86 24 82 28 74 Z" fill="{wash}" stroke="#161514" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M74 68 C80 72 85 78 86 84 C82 86 76 82 72 74 Z" fill="{wash}" stroke="#161514" stroke-width="1.2" stroke-linecap="round"/>
  <!-- Front Flippers/Paddles -->
  <path d="M24 38 C16 34 10 28 8 22 C14 20 22 25 27 34 Z" fill="{wash}" stroke="#161514" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M76 38 C84 34 90 28 92 22 C86 20 78 25 73 34 Z" fill="{wash}" stroke="#161514" stroke-width="1.2" stroke-linecap="round"/>
  <!-- Side-curved Neck & Head (Pleurodira anatomy) -->
  <path d="M46 32 C44 24 43 18 47 14 C49 12 55 12 57 15 C59 20 57 26 54 32 Z" fill="{wash}" stroke="#161514" stroke-width="1.2" stroke-linejoin="round"/>
  <circle cx="47" cy="14" r="1.2" fill="#161514"/>
  <circle cx="53" cy="14" r="1.2" fill="#161514"/>
  <!-- Rounded Carapace -->
  <ellipse cx="50" cy="52" rx="28" ry="24" fill="{wash}" stroke="#161514" stroke-width="1.4"/>
  <!-- Vertebral & Costal Scute Inking -->
  <path d="M50 32 L56 38 L56 46 L50 50 L44 46 L44 38 Z" stroke="#161514" stroke-width="1" fill="none"/>
  <path d="M50 50 L56 56 L56 64 L50 68 L44 64 L44 56 Z" stroke="#161514" stroke-width="1" fill="none"/>
  <path d="M44 42 L26 44 M56 42 L74 44 M44 60 L26 62 M56 60 L74 62" stroke="#161514" stroke-width="0.9" stroke-linecap="round"/>
  <!-- Accent pip -->
  <circle cx="50" cy="50" r="2" fill="{accent}"/>
</svg>'''

# Topic specific metadata dictionary
TOPIC_DATA = {
    # ==========================================
    # PHYSICS (12 Topics) - Terracotta Palette (#fbf0ea / #c2410c)
    # ==========================================
    "physics_01_motion_and_speed.html": {
        "discipline": "Physics",
        "headsup": {
            "title": "Distance vs Displacement Directionality",
            "body": "Remember that <strong>distance</strong> is the total path length traveled (always positive and cumulative), whereas <strong>displacement</strong> is the straight-line shortcut vector between starting and ending points. If you walk 50 m east and 50 m west, your distance is 100 m, but your displacement is exactly 0 m."
        },
        "svg": get_turtle_margin_svg("#fbf0ea", "#c2410c", "Pleurodira (v = 0.08 m/s)"),
        "desk_note": {
            "title": "Anatomical Velocity",
            "body": "Our 6yo side-necked turtle crawls at a uniform translatory speed of \\(v \\approx 0.08\\text{ m/s}\\). Notice how parallel carapace scutes maintain uniform orientation across horizontal translations."
        }
    },
    "physics_02_energy_and_machines.html": {
        "discipline": "Physics",
        "headsup": {
            "title": "Energy Transfer vs Mechanical Work",
            "body": "No matter how heavy a load you push, if the object does not move in the direction of the applied force (\\(d = 0\\)), the physical work done is <strong>zero</strong> (\\(W = F \\cdot 0 = 0\\)). Straining against a brick wall tires your muscles biologically, but does zero physical work on the wall."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 80 L88 80 L88 32 Z" fill="#fbf0ea" stroke="#161514" stroke-width="1.3" stroke-linejoin="round"/>
  <rect x="42" y="44" width="18" height="14" transform="rotate(-32 42 44)" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <path d="M56 36 L72 26" stroke="#c2410c" stroke-width="1.3" stroke-linecap="round"/>
  <polygon points="72,26 66,28 68,32" fill="#c2410c"/>
  <circle cx="88" cy="32" r="6" fill="#fbf0ea" stroke="#161514" stroke-width="1.2"/>
  <text x="24" y="74" font-family="'Newsreader', serif" font-size="11" font-style="italic" fill="#797166">W = F·d</text>
</svg>''',
        "desk_note": {
            "title": "Inclined Plane Vector",
            "body": "An inclined plane reduces the required effort force by increasing the travel distance along the ramp, keeping total input work \\(W = F \\cdot d\\) invariant under ideal zero-friction conditions."
        }
    },
    "physics_03_light_and_reflection.html": {
        "discipline": "Physics",
        "headsup": {
            "title": "Angles Measured from Normal, Not Mirror Surface",
            "body": "In ray optics, the <strong>angle of incidence (\\(i\\))</strong> and <strong>angle of reflection (\\(r\\))</strong> are strictly measured between the light ray and the <em>perpendicular normal line</em>, never against the polished glass plane itself."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="50" rx="36" ry="36" fill="#fbf0ea"/>
  <line x1="16" y1="50" x2="84" y2="50" stroke="#161514" stroke-width="1.5"/>
  <path d="M18 53 L22 58 M30 53 L34 58 M42 53 L46 58 M54 53 L58 58 M66 53 L70 58 M78 53 L82 58" stroke="#161514" stroke-width="1"/>
  <line x1="50" y1="16" x2="50" y2="50" stroke="#797166" stroke-width="1" stroke-dasharray="3 2"/>
  <line x1="24" y1="24" x2="50" y2="50" stroke="#c2410c" stroke-width="1.3"/>
  <line x1="50" y1="50" x2="76" y2="24" stroke="#c2410c" stroke-width="1.3"/>
  <path d="M42 38 C45 36 48 36 50 36" stroke="#c2410c" stroke-width="1" fill="none"/>
  <text x="36" y="32" font-family="'Newsreader', serif" font-size="10" font-style="italic" fill="#c2410c">∠i = ∠r</text>
</svg>''',
        "desk_note": {
            "title": "Specular Symmetry",
            "body": "Every reflected wavefront maintains strict planar coplanarity: incident ray, normal, and reflected ray lie in a single geometric plane."
        }
    },
    "physics_04_sound_and_vibration.html": {
        "discipline": "Physics",
        "headsup": {
            "title": "Sound Requires a Material Medium",
            "body": "Sound is a mechanical longitudinal wave requiring physical atoms to collide and transmit vibrations. Unlike light, sound <strong>cannot propagate through a vacuum</strong> because there are no particles to compress or rarefy."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 50 C24 30 76 30 84 50 C76 70 24 70 16 50 Z" fill="#fbf0ea"/>
  <path d="M38 30 V56 C38 64 48 64 48 56 V30" stroke="#161514" stroke-width="1.5" stroke-linecap="round" fill="none"/>
  <line x1="43" y1="62" x2="43" y2="82" stroke="#161514" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Acoustic Wavefronts -->
  <path d="M60 40 C66 45 66 55 60 60" stroke="#c2410c" stroke-width="1.2" stroke-linecap="round" fill="none"/>
  <path d="M68 34 C77 42 77 58 68 66" stroke="#c2410c" stroke-width="1.2" stroke-linecap="round" fill="none"/>
  <path d="M76 28 C88 40 88 60 76 72" stroke="#c2410c" stroke-width="1" stroke-dasharray="2 2" stroke-linecap="round" fill="none"/>
  <text x="18" y="80" font-family="'Newsreader', serif" font-size="10" font-style="italic" fill="#797166">256 Hz</text>
</svg>''',
        "desk_note": {
            "title": "Harmonic Oscillation",
            "body": "The prongs of a steel tuning fork execute periodic simple harmonic vibrations, displacing surrounding air molecules into repeating zones of high pressure (compressions) and low pressure (rarefactions)."
        }
    },
    "physics_05_electricity_and_circuits.html": {
        "discipline": "Physics",
        "headsup": {
            "title": "Current vs Electron Flow Convention",
            "body": "By historical convention, <strong>electric current</strong> is defined as flowing from the positive terminal to the negative terminal (\\(+ \\to -\\)), even though physical subatomic electrons actually drift in the opposite direction (\\(- \\to +\\))."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="16" y="16" width="68" height="68" rx="8" fill="#fbf0ea"/>
  <path d="M22 46 H38 M44 38 V54 M48 42 V50 M54 46 H78 V74 H22 Z" stroke="#161514" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <!-- Bulb -->
  <circle cx="50" cy="74" r="8" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <path d="M46 78 L54 70 M46 70 L54 78" stroke="#c2410c" stroke-width="1.1"/>
  <!-- Switch -->
  <circle cx="34" cy="16" r="2" fill="#161514"/>
  <circle cx="66" cy="16" r="2" fill="#161514"/>
  <line x1="22" y1="46" x2="22" y2="16" stroke="#161514" stroke-width="1.3"/>
  <line x1="22" y1="16" x2="34" y2="16" stroke="#161514" stroke-width="1.3"/>
  <line x1="34" y1="16" x2="62" y2="10" stroke="#c2410c" stroke-width="1.3"/>
  <line x1="66" y1="16" x2="78" y2="16" stroke="#161514" stroke-width="1.3"/>
  <line x1="78" y1="16" x2="78" y2="46" stroke="#161514" stroke-width="1.3"/>
</svg>''',
        "desk_note": {
            "title": "Closed Circuit Loop",
            "body": "Charge requires a continuous, unbroken conducting pathway from anode to cathode for electric potential difference to sustain an active current \\(I = Q/t\\)."
        }
    },
    "physics_06_force_and_pressure.html": {
        "discipline": "Physics",
        "headsup": {
            "title": "Thrust is Total Force, Pressure is Area-Dependent",
            "body": "<strong>Thrust</strong> is the total perpendicular force measured in Newtons (N). <strong>Pressure</strong> is thrust divided by contact area (\\(P = F/A\\)) measured in Pascals (\\(\\text{N/m}^2\\)). The same 500 N thrust creates enormous pressure on a needle point, but mild pressure under a flat snowshoe."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="50" rx="36" ry="36" fill="#fbf0ea"/>
  <polygon points="30,55 70,55 60,75 20,75" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <line x1="50" y1="18" x2="50" y2="48" stroke="#c2410c" stroke-width="1.6"/>
  <polygon points="50,48 46,40 54,40" fill="#c2410c"/>
  <text x="56" y="32" font-family="'Newsreader', serif" font-size="12" font-style="italic" fill="#c2410c">F</text>
  <text x="32" y="70" font-family="'Newsreader', serif" font-size="10" font-style="italic" fill="#797166">Area A</text>
</svg>''',
        "desk_note": {
            "title": "Hydrostatic Gradient",
            "body": "Pressure \\(P = \\frac{F}{A}\\) increases sharply as contact area \\(A\\) diminishes, concentrating perpendicular normal thrust onto minimal surface planes."
        }
    },
    "physics_07_heat_and_temperature.html": {
        "discipline": "Physics",
        "headsup": {
            "title": "Heat is Energy, Temperature is Molecular Measure",
            "body": "<strong>Heat</strong> is total thermal energy in transit (Joules), while <strong>temperature</strong> is the measure of the average kinetic energy of individual particles (°C or K). A warm bathtub contains far more thermal heat than a glowing red-hot steel needle, even though the needle has a much higher temperature."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25 15 C20 40 20 60 30 80 C40 95 60 95 70 80 C80 60 80 40 75 15 Z" fill="#fbf0ea"/>
  <rect x="46" y="16" width="8" height="50" rx="4" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <circle cx="50" cy="74" r="10" fill="#c2410c" stroke="#161514" stroke-width="1.2"/>
  <rect x="48" y="36" width="4" height="32" fill="#c2410c"/>
  <line x1="56" y1="26" x2="60" y2="26" stroke="#161514" stroke-width="1"/>
  <line x1="56" y1="36" x2="62" y2="36" stroke="#161514" stroke-width="1"/>
  <line x1="56" y1="46" x2="60" y2="46" stroke="#161514" stroke-width="1"/>
  <line x1="56" y1="56" x2="62" y2="56" stroke="#161514" stroke-width="1"/>
  <text x="66" y="40" font-family="'Newsreader', serif" font-size="10" font-style="italic" fill="#797166">100°C</text>
</svg>''',
        "desk_note": {
            "title": "Thermal Expansion",
            "body": "Linear thermometric response relies on the uniform thermal expansion coefficient of liquid mercury inside a narrow capillary bore under constant atmospheric pressure."
        }
    },
    "physics_08_density_and_buoyancy.html": {
        "discipline": "Physics",
        "headsup": {
            "title": "Relative Density Has No Units",
            "body": "<strong>Relative Density (RD)</strong> is a pure ratio comparing a substance's density to pure water at 4°C (\\(\\text{RD} = \\frac{\\rho_{\\text{substance}}}{\\rho_{\\text{water}}}\\)). Because both numerator and denominator share the same units (\\(\\text{g/cm}^3\\)), the units cancel out completely, leaving RD purely <strong>dimensionless</strong>."
        },
        "svg": get_turtle_margin_svg("#fbf0ea", "#c2410c", "Pleurodira (Neutral Buoyancy)"),
        "desk_note": {
            "title": "Hydrostatic Buoyancy",
            "body": "By regulating air volume in its pulmonary sacs, the side-necked turtle precisely matches average body density \\(\\rho_{\\text{body}} \\approx \\rho_{\\text{water}} = 1.0\\text{ g/cm}^3\\) for effortless neutral suspension."
        }
    },
    "physics_09_magnetism_and_fields.html": {
        "discipline": "Physics",
        "headsup": {
            "title": "Magnetic Monopoles Do Not Exist",
            "body": "If you snap a bar magnet in half, you do not get an isolated North pole and an isolated South pole. Instead, you instantly create two complete, smaller bar magnets, each with its own North and South pole."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="20" width="72" height="60" rx="8" fill="#fbf0ea"/>
  <rect x="25" y="42" width="25" height="16" fill="#c2410c" stroke="#161514" stroke-width="1.2"/>
  <rect x="50" y="42" width="25" height="16" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <text x="33" y="54" font-family="'Newsreader', serif" font-size="11" font-weight="bold" fill="#ffffff">N</text>
  <text x="59" y="54" font-family="'Newsreader', serif" font-size="11" font-weight="bold" fill="#161514">S</text>
  <!-- Field Arcs -->
  <path d="M30 42 C30 22 70 22 70 42" stroke="#c2410c" stroke-width="1.1" stroke-linecap="round" fill="none"/>
  <path d="M30 58 C30 78 70 78 70 58" stroke="#c2410c" stroke-width="1.1" stroke-linecap="round" fill="none"/>
  <polygon points="50,22 46,25 46,19" fill="#c2410c"/>
  <polygon points="50,78 54,75 54,81" fill="#c2410c"/>
</svg>''',
        "desk_note": {
            "title": "Magnetic Field Lines",
            "body": "Continuous magnetic flux loops emerge from the North pole and curve seamlessly into the South pole outside the magnet, with density indicating field intensity \\(B\\)."
        }
    },
    "physics_10_spherical_mirrors_and_images.html": {
        "discipline": "Physics",
        "headsup": {
            "title": "Focal Length is Exactly Half the Radius of Curvature",
            "body": "For spherical mirrors with small apertures, the principal focus lies precisely halfway between the pole \\(P\\) and center of curvature \\(C\\). Therefore, \\(f = \\frac{R}{2}\\) or \\(R = 2f\\). Remember that a concave mirror has a real focal point, while a convex mirror has a virtual focal point behind the reflective surface."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 15 C45 35 45 65 15 85" fill="#fbf0ea"/>
  <path d="M28 20 C42 35 42 65 28 80" stroke="#161514" stroke-width="1.6" stroke-linecap="round" fill="none"/>
  <line x1="10" y1="50" x2="90" y2="50" stroke="#797166" stroke-width="1" stroke-dasharray="3 2"/>
  <circle cx="36" cy="50" r="1.8" fill="#161514"/>
  <circle cx="56" cy="50" r="1.8" fill="#c2410c"/>
  <circle cx="78" cy="50" r="1.8" fill="#161514"/>
  <text x="34" y="62" font-family="'Newsreader', serif" font-size="9" fill="#161514">P</text>
  <text x="54" y="62" font-family="'Newsreader', serif" font-size="9" font-weight="bold" fill="#c2410c">F</text>
  <text x="76" y="62" font-family="'Newsreader', serif" font-size="9" fill="#161514">C</text>
  <path d="M80 30 L36 50" stroke="#c2410c" stroke-width="1.1"/>
  <path d="M36 50 L80 70" stroke="#c2410c" stroke-width="1.1"/>
</svg>''',
        "desk_note": {
            "title": "Concave Optics",
            "body": "Paraxial rays parallel to the principal axis reflect through the focal point \\(F = R/2\\), producing converging real inversions for distant objects."
        }
    },
    "physics_11_static_electricity_and_charges.html": {
        "discipline": "Physics",
        "headsup": {
            "title": "Electrostatic Induction Involves Zero Physical Charge Transfer",
            "body": "In <strong>electrostatic induction</strong>, bringing a charged body near an uncharged conductor rearranges existing free electrons without any physical contact or loss of charge from the inducing object. Only when grounded or touched does actual net electron transfer occur."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 20 C20 10 80 10 80 20 C80 80 20 80 20 20 Z" fill="#fbf0ea"/>
  <rect x="42" y="16" width="16" height="6" rx="2" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <line x1="50" y1="22" x2="50" y2="54" stroke="#161514" stroke-width="1.4"/>
  <path d="M50 54 L40 76 M50 54 L60 76" stroke="#c2410c" stroke-width="1.4" stroke-linecap="round"/>
  <!-- Gold Leaf diverge -->
  <text x="24" y="32" font-family="'Newsreader', serif" font-size="10" font-weight="bold" fill="#c2410c">+ + +</text>
  <text x="32" y="82" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">Divergence</text>
</svg>''',
        "desk_note": {
            "title": "Gold-Leaf Electroscope",
            "body": "Mutual electrostatic repulsion causes light gold leaves to diverge with angular displacement proportional to the magnitude of acquired net charge \\(Q\\)."
        }
    },
    "physics_12_simple_machines_and_efficiency.html": {
        "discipline": "Physics",
        "headsup": {
            "title": "Efficiency Can Never Exceed 100%",
            "body": "Because of internal friction and machine part weight, output work is always slightly less than input work (\\(W_{\\text{out}} < W_{\\text{in}}\\)). Consequently, <strong>efficiency (\\(\\eta\\))</strong> is always strictly less than \\(100\\%\\) (\\(\\eta < 1\\))."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 70 L88 70 L50 20 Z" fill="#fbf0ea"/>
  <line x1="16" y1="46" x2="84" y2="46" stroke="#161514" stroke-width="1.8" stroke-linecap="round"/>
  <polygon points="50,46 44,60 56,60" fill="#c2410c" stroke="#161514" stroke-width="1.2"/>
  <rect x="22" y="34" width="12" height="12" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <text x="25" y="43" font-family="'Newsreader', serif" font-size="8" font-weight="bold" fill="#161514">L</text>
  <circle cx="76" cy="40" r="6" fill="#fbf0ea" stroke="#c2410c" stroke-width="1.2"/>
  <text x="73" y="43" font-family="'Newsreader', serif" font-size="8" font-weight="bold" fill="#c2410c">E</text>
  <text x="32" y="78" font-family="'Newsreader', serif" font-size="10" font-style="italic" fill="#797166">MA = L / E</text>
</svg>''',
        "desk_note": {
            "title": "Principle of Moments",
            "body": "At equilibrium, clockwork balance requires \\(\\text{Load} \\times d_L = \\text{Effort} \\times d_E\\), giving mechanical advantage without ever creating free energy."
        }
    },

    # ==========================================
    # CHEMISTRY (12 Topics) - Emerald Palette (#f0f7f2 / #15803d)
    # ==========================================
    "chemistry_01_matter_and_composition.html": {
        "discipline": "Chemistry",
        "headsup": {
            "title": "Mass and Space are the Defining Pillars of Matter",
            "body": "To be classified as <strong>matter</strong>, a substance must possess inertia (mass) and occupy physical space (volume). Heat, light, and electricity are forms of energy, not matter, because they possess zero rest mass."
        },
        "svg": get_turtle_margin_svg("#f0f7f2", "#15803d", "Biocomposite Mineralization"),
        "desk_note": {
            "title": "Biomineral Lattice",
            "body": "The rigid carapace of our side-necked turtle is a biological composite solid of crystalline calcium phosphate (hydroxyapatite) embedded within fibrous keratin protein chains."
        }
    },
    "chemistry_02_atomic_structure_and_valency.html": {
        "discipline": "Chemistry",
        "headsup": {
            "title": "Mass Number vs Atomic Number Distinction",
            "body": "<strong>Atomic number (\\(Z\\))</strong> is the number of protons and defines the element's identity. <strong>Mass number (\\(A\\))</strong> is the sum of protons and neutrons (\\(A = Z + N\\)). Electrons contribute negligible mass to the atom."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="38" fill="#f0f7f2"/>
  <!-- Concentric Shells -->
  <circle cx="50" cy="50" r="22" stroke="#161514" stroke-width="1" stroke-dasharray="3 2" fill="none"/>
  <circle cx="50" cy="50" r="34" stroke="#161514" stroke-width="1" stroke-dasharray="3 2" fill="none"/>
  <!-- Nucleus -->
  <circle cx="50" cy="50" r="8" fill="#15803d" stroke="#161514" stroke-width="1.2"/>
  <text x="46" y="53" font-family="'Newsreader', serif" font-size="8" font-weight="bold" fill="#ffffff">+6</text>
  <!-- Electrons -->
  <circle cx="50" cy="28" r="2" fill="#15803d"/>
  <circle cx="50" cy="72" r="2" fill="#15803d"/>
  <circle cx="16" cy="50" r="2" fill="#15803d"/>
  <circle cx="84" cy="50" r="2" fill="#15803d"/>
  <text x="36" y="92" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">K=2, L=4 (Carbon)</text>
</svg>''',
        "desk_note": {
            "title": "Bohr Atomic Model",
            "body": "Electrons inhabit discrete quantized orbits (\\(K, L, M\\)) governed by \\(2n^2\\) capacity limits surrounding the compact positive nucleus."
        }
    },
    "chemistry_03_elements_and_compounds.html": {
        "discipline": "Chemistry",
        "headsup": {
            "title": "Compounds Have Fixed Mass Ratios, Mixtures Do Not",
            "body": "In a <strong>compound</strong> (like \\(\\text{H}_2\\text{O}\\)), constituent elements are chemically bound in a strict, unvarying ratio by mass (1:8 for hydrogen to oxygen) with completely new properties. In a <strong>mixture</strong>, components retain their original identities and can mix in any arbitrary proportion."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 20 C10 50 10 70 20 85 C35 95 65 95 80 85 C90 70 90 50 80 20 Z" fill="#f0f7f2"/>
  <path d="M42 20 H58 V36 L74 72 C76 76 74 80 68 80 H32 C26 80 24 76 26 72 L42 36 Z" stroke="#161514" stroke-width="1.3" stroke-linejoin="round" fill="none"/>
  <!-- Liquid level -->
  <path d="M30 68 C40 66 60 70 70 68 L74 72 H26 Z" fill="#15803d" opacity="0.6"/>
  <!-- Bubbles -->
  <circle cx="44" cy="62" r="2" fill="#15803d"/>
  <circle cx="56" cy="58" r="1.5" fill="#15803d"/>
  <text x="36" y="92" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">H₂O Pure Phase</text>
</svg>''',
        "desk_note": {
            "title": "Chemical Bonding",
            "body": "Elemental atoms combine chemically through covalent or ionic bonding, creating distinct compound entities with fixed stoichiometric proportions."
        }
    },
    "chemistry_04_atoms_molecules_radicals.html": {
        "discipline": "Chemistry",
        "headsup": {
            "title": "Radicals Act as a Single Charged Unit",
            "body": "A <strong>radical</strong> (such as Sulfate \\(\\text{SO}_4^{2-}\\) or Nitrate \\(\\text{NO}_3^-\\)) is a cluster of tightly bonded atoms that carries an overall net charge and participates in reactions as a single indivisible unit during formula criss-cross balancing."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="38" fill="#f0f7f2"/>
  <!-- Polyatomic radical cluster -->
  <circle cx="50" cy="50" r="12" fill="#15803d" stroke="#161514" stroke-width="1.2"/>
  <text x="46" y="54" font-family="'Newsreader', serif" font-size="11" font-weight="bold" fill="#ffffff">S</text>
  <circle cx="50" cy="26" r="8" fill="#ffffff" stroke="#161514" stroke-width="1.1"/>
  <text x="47" y="29" font-family="'Newsreader', serif" font-size="9" font-weight="bold" fill="#161514">O</text>
  <circle cx="50" cy="74" r="8" fill="#ffffff" stroke="#161514" stroke-width="1.1"/>
  <text x="47" y="77" font-family="'Newsreader', serif" font-size="9" font-weight="bold" fill="#161514">O</text>
  <circle cx="26" cy="50" r="8" fill="#ffffff" stroke="#161514" stroke-width="1.1"/>
  <text x="23" y="53" font-family="'Newsreader', serif" font-size="9" font-weight="bold" fill="#161514">O</text>
  <circle cx="74" cy="50" r="8" fill="#ffffff" stroke="#161514" stroke-width="1.1"/>
  <text x="71" y="53" font-family="'Newsreader', serif" font-size="9" font-weight="bold" fill="#161514">O</text>
  <text x="76" y="24" font-family="'Newsreader', serif" font-size="10" font-weight="bold" fill="#15803d">[SO₄]²⁻</text>
</svg>''',
        "desk_note": {
            "title": "Valency Criss-Cross",
            "body": "Polyatomic radicals behave as single charged ionic blocks whose collective valencies govern the stoichiometry of neutral salts."
        }
    },
    "chemistry_05_chemical_reactions_balancing.html": {
        "discipline": "Chemistry",
        "headsup": {
            "title": "Never Alter Chemical Subscripts While Balancing",
            "body": "When balancing chemical equations, only adjust the <strong>stoichiometric coefficients</strong> in front of formulas (e.g., \\(2\\text{H}_2\\text{O}\\)). Changing subscript numbers (like turning \\(\\text{H}_2\\text{O}\\) into \\(\\text{H}_2\\text{O}_2\\)) fundamentally changes the chemical compound into an entirely different molecule."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 75 L85 75 L50 20 Z" fill="#f0f7f2"/>
  <line x1="20" y1="48" x2="80" y2="48" stroke="#161514" stroke-width="1.6" stroke-linecap="round"/>
  <polygon points="50,48 44,62 56,62" fill="#15803d" stroke="#161514" stroke-width="1.2"/>
  <circle cx="30" cy="40" r="8" fill="#ffffff" stroke="#161514" stroke-width="1.1"/>
  <text x="24" y="43" font-family="'Newsreader', serif" font-size="8" fill="#161514">React</text>
  <circle cx="70" cy="40" r="8" fill="#ffffff" stroke="#161514" stroke-width="1.1"/>
  <text x="65" y="43" font-family="'Newsreader', serif" font-size="8" fill="#161514">Prod</text>
  <text x="24" y="80" font-family="'Newsreader', serif" font-size="10" font-style="italic" fill="#797166">Σ Atoms = Invariant</text>
</svg>''',
        "desk_note": {
            "title": "Mass Conservation",
            "body": "In accordance with Lavoisier's conservation law, the total count of each atomic species across reactants must strictly match products."
        }
    },
    "chemistry_06_acids_bases_and_salts.html": {
        "discipline": "Chemistry",
        "headsup": {
            "title": "Acid Dilution Rule: Always Add Acid to Water",
            "body": "Always add concentrated <strong>acid slowly into water</strong> along the side of the beaker with constant stirring. Never pour water into concentrated acid—the exothermic reaction will cause dangerous localized boiling, splashing boiling acid droplets onto your skin."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="50" rx="36" ry="36" fill="#f0f7f2"/>
  <!-- Beaker -->
  <path d="M30 30 V72 C30 76 34 80 40 80 H60 C66 80 70 76 70 72 V30" stroke="#161514" stroke-width="1.3" stroke-linecap="round" fill="none"/>
  <!-- Neutralization boundary -->
  <rect x="32" y="54" width="36" height="24" fill="#15803d" opacity="0.4"/>
  <!-- Dip strip -->
  <rect x="46" y="20" width="8" height="46" rx="2" fill="#ffffff" stroke="#161514" stroke-width="1.1"/>
  <rect x="46" y="46" width="8" height="20" fill="#c2410c"/>
  <text x="28" y="92" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">pH Neutralization</text>
</svg>''',
        "desk_note": {
            "title": "Hydronium Equilibrium",
            "body": "Neutralization \\(\\text{H}^+ + \\text{OH}^- \\to \\text{H}_2\\text{O}\\) pairs acidic cations with basic hydroxyl anions to yield neutral aqueous salts."
        }
    },
    "chemistry_07_metals_nonmetals_reactivity.html": {
        "discipline": "Chemistry",
        "headsup": {
            "title": "A More Reactive Metal Displaces a Less Reactive Metal",
            "body": "In single displacement reactions, a metal can only displace another metal from its salt solution if it sits <strong>higher</strong> in the electrochemical reactivity series (e.g., \\(\\text{Zn} + \\text{CuSO}_4 \\to \\text{ZnSO}_4 + \\text{Cu}\\)). Copper cannot displace zinc."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="8" fill="#f0f7f2"/>
  <!-- Reactivity ladder -->
  <line x1="30" y1="25" x2="30" y2="75" stroke="#161514" stroke-width="1.5"/>
  <polygon points="30,22 26,28 34,28" fill="#15803d"/>
  <text x="38" y="30" font-family="'Newsreader', serif" font-size="10" font-weight="bold" fill="#15803d">K (Top)</text>
  <text x="38" y="45" font-family="'Newsreader', serif" font-size="9" fill="#161514">Fe</text>
  <text x="38" y="60" font-family="'Newsreader', serif" font-size="9" fill="#161514">Cu</text>
  <text x="38" y="75" font-family="'Newsreader', serif" font-size="9" fill="#797166">Au (Base)</text>
</svg>''',
        "desk_note": {
            "title": "Electrochemical Series",
            "body": "Electron-donating electropositive potential decreases progressively from Potassium (\\(\\text{K}\\)) down to Gold (\\(\\text{Au}\\))."
        }
    },
    "chemistry_08_water_solutions_solubility.html": {
        "discipline": "Chemistry",
        "headsup": {
            "title": "Solubility Depends on Temperature",
            "body": "For most solid solutes (like sugar or salt in water), solubility increases as temperature rises. However, for <strong>gases dissolved in liquids</strong> (like oxygen or carbon dioxide), solubility decreases as temperature rises, which is why boiling water drives out dissolved air."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="50" rx="36" ry="36" fill="#f0f7f2"/>
  <path d="M26 36 V70 C26 76 30 80 38 80 H62 C70 80 74 76 74 70 V36" stroke="#161514" stroke-width="1.3" fill="none"/>
  <ellipse cx="50" cy="46" rx="22" ry="6" stroke="#15803d" stroke-width="1.1" fill="#15803d" opacity="0.3"/>
  <!-- Crystal solute dissolving -->
  <polygon points="46,58 54,58 50,66" fill="#15803d"/>
  <circle cx="40" cy="62" r="1.5" fill="#15803d"/>
  <circle cx="60" cy="60" r="1.5" fill="#15803d"/>
  <text x="24" y="92" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">Aqueous Solvation</text>
</svg>''',
        "desk_note": {
            "title": "Hydration Shells",
            "body": "Dipolar water molecules surround and dissociate solute crystal lattices into solvated aqueous ions."
        }
    },
    "chemistry_09_air_oxygen_combustion.html": {
        "discipline": "Chemistry",
        "headsup": {
            "title": "Oxygen Supports Combustion, But Does Not Burn Itself",
            "body": "Oxygen is a <strong>supporter of combustion</strong>, not a combustible fuel. When hydrogen or coal burns in air, it is the fuel reacting chemically with oxygen to release heat and light."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="8" fill="#f0f7f2"/>
  <!-- Candle -->
  <rect x="44" y="52" width="12" height="26" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <path d="M50 52 V44" stroke="#161514" stroke-width="1.2"/>
  <path d="M50 44 C46 38 48 30 50 26 C52 30 54 38 50 44 Z" fill="#c2410c"/>
  <circle cx="50" cy="38" r="2" fill="#fef3c7"/>
  <!-- Inverted Bell Jar -->
  <path d="M30 78 V32 C30 24 70 24 70 32 V78" stroke="#15803d" stroke-width="1.2" stroke-dasharray="3 2" fill="none"/>
  <text x="24" y="92" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">21% O₂ Active Fraction</text>
</svg>''',
        "desk_note": {
            "title": "Atmospheric Composition",
            "body": "Lavoisier demonstrated that oxygen constitutes precisely one-fifth (\\(\\approx 21\\%\\)) of atmospheric air volume by measuring the active fraction consumed during phosphorus combustion."
        }
    },
    "chemistry_10_carbon_and_allotropes.html": {
        "discipline": "Chemistry",
        "headsup": {
            "title": "Same Element, Radically Different Physical Structures",
            "body": "<strong>Allotropy</strong> is the existence of the same element in different structural forms. Diamond and graphite both consist purely of elemental Carbon atoms, but diamond is a 3D tetrahedral insulator while graphite is a 2D hexagonal electrical conductor."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="38" fill="#f0f7f2"/>
  <!-- Hexagonal Graphite Ring -->
  <polygon points="50,24 68,34 68,54 50,64 32,54 32,34" fill="#ffffff" stroke="#161514" stroke-width="1.3"/>
  <circle cx="50" cy="24" r="2.5" fill="#15803d"/>
  <circle cx="68" cy="34" r="2.5" fill="#15803d"/>
  <circle cx="68" cy="54" r="2.5" fill="#15803d"/>
  <circle cx="50" cy="64" r="2.5" fill="#15803d"/>
  <circle cx="32" cy="54" r="2.5" fill="#15803d"/>
  <circle cx="32" cy="34" r="2.5" fill="#15803d"/>
  <text x="26" y="82" font-family="'Newsreader', serif" font-size="10" font-style="italic" fill="#797166">sp² Delocalized Sheet</text>
</svg>''',
        "desk_note": {
            "title": "Allotropic Bonding",
            "body": "Graphite's layered planar sheets slide easily under lateral shear stress, with delocalized \\(\\pi\\)-electrons imparting electrical conductivity."
        }
    },
    "chemistry_11_water_hardness_and_treatment.html": {
        "discipline": "Chemistry",
        "headsup": {
            "title": "Temporary vs Permanent Hardness Chemistry",
            "body": "<strong>Temporary hardness</strong> is caused by dissolved calcium and magnesium <em>bicarbonates</em> and can be removed simply by boiling. <strong>Permanent hardness</strong> is caused by dissolved calcium and magnesium <em>chlorides and sulfates</em> and requires chemical treatment with washing soda."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="8" fill="#f0f7f2"/>
  <!-- Two test tubes: Hard vs Soft -->
  <rect x="28" y="24" width="16" height="48" rx="4" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <rect x="56" y="24" width="16" height="48" rx="4" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <!-- Scum in hard tube -->
  <path d="M28 54 H44" stroke="#c2410c" stroke-width="2"/>
  <text x="30" y="80" font-family="'Newsreader', serif" font-size="8" fill="#c2410c">Scum</text>
  <!-- Foam in soft tube -->
  <circle cx="62" cy="40" r="3" fill="#15803d" opacity="0.4"/>
  <circle cx="66" cy="44" r="2" fill="#15803d" opacity="0.4"/>
  <text x="58" y="80" font-family="'Newsreader', serif" font-size="8" fill="#15803d">Lather</text>
</svg>''',
        "desk_note": {
            "title": "Ion Precipitation",
            "body": "Dissolved \\(\\text{Ca}^{2+}\\) and \\(\\text{Mg}^{2+}\\) cations react with soap stearate anions to form insoluble curdy precipitates until neutralized."
        }
    },
    "chemistry_12_oxides_acid_rain_and_atmosphere.html": {
        "discipline": "Chemistry",
        "headsup": {
            "title": "Metal Oxides are Basic, Non-Metal Oxides are Acidic",
            "body": "As a fundamental chemical rule: <strong>metal oxides</strong> (like \\(\\text{Na}_2\\text{O}, \\text{CaO}\\)) dissolve in water to form alkaline/basic solutions, while <strong>non-metal oxides</strong> (like \\(\\text{SO}_2, \\text{CO}_2, \\text{NO}_2\\)) form acidic solutions that contribute to acid rain."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 20 C10 40 10 70 20 85 C40 95 60 95 80 85 C90 70 90 40 80 20 Z" fill="#f0f7f2"/>
  <!-- Cloud -->
  <path d="M30 40 C24 40 22 32 28 28 C30 22 42 22 46 26 C52 20 66 22 66 30 C72 32 72 40 64 40 Z" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <!-- Acid Rain Droplets -->
  <line x1="36" y1="48" x2="32" y2="58" stroke="#15803d" stroke-width="1.3" stroke-linecap="round"/>
  <line x1="48" y1="48" x2="44" y2="58" stroke="#15803d" stroke-width="1.3" stroke-linecap="round"/>
  <line x1="60" y1="48" x2="56" y2="58" stroke="#15803d" stroke-width="1.3" stroke-linecap="round"/>
  <text x="24" y="78" font-family="'Newsreader', serif" font-size="10" font-style="italic" fill="#797166">H₂SO₄ pH &lt; 5.6</text>
</svg>''',
        "desk_note": {
            "title": "Acid Precipitation",
            "body": "Gaseous non-metal oxides \\(\\text{SO}_2\\) and \\(\\text{NO}_2\\) undergo atmospheric oxidation, hydrolyzing into dilute sulfuric and nitric acids."
        }
    },

    # ==========================================
    # BIOLOGY (12 Topics) - Moss Olive Palette (#edf5ef / #2e382b)
    # ==========================================
    "biology_01_plant_and_animal_tissues.html": {
        "discipline": "Biology",
        "headsup": {
            "title": "Xylem Carries Water Upward, Phloem Distributes Food Everywhere",
            "body": "<strong>Xylem</strong> conducts water and mineral salts strictly <em>unidirectionally</em> upwards from roots to leaves through dead, lignified tubes. <strong>Phloem</strong> conducts synthesized sugars <em>bidirectionally</em> to all growing plant parts through living sieve tubes."
        },
        "svg": get_turtle_margin_svg("#edf5ef", "#2e382b", "Pleurodira Epithelial Tissue"),
        "desk_note": {
            "title": "Epithelial Stratification",
            "body": "The outer scutes of the 6yo side-necked turtle represent stratified, cornified epithelial tissue rich in insoluble beta-keratin, shielding internal tissues against desiccation."
        }
    },
    "biology_02_photosynthesis_and_respiration.html": {
        "discipline": "Biology",
        "headsup": {
            "title": "Plants Respire Continuously Day and Night",
            "body": "A common misconception is that plants only breathe during the night. In reality, plants carry out <strong>cellular respiration 24 hours a day</strong>. During bright daylight, the rate of photosynthesis far exceeds respiration, resulting in a net output of oxygen."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 20 C10 40 10 70 20 85 C40 95 60 95 80 85 C90 70 90 40 80 20 Z" fill="#edf5ef"/>
  <!-- Leaf -->
  <path d="M24 74 C24 74 32 46 54 34 C76 22 82 20 82 20 C82 20 78 44 60 62 C42 80 24 74 24 74 Z" fill="#ffffff" stroke="#161514" stroke-width="1.3" stroke-linejoin="round"/>
  <path d="M24 74 Q52 46 82 20" stroke="#2e382b" stroke-width="1.3" stroke-linecap="round"/>
  <path d="M42 56 L54 58 M52 46 L64 48" stroke="#2e382b" stroke-width="1" stroke-linecap="round"/>
  <text x="18" y="92" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">6CO₂ + 6H₂O → C₆H₁₂O₆</text>
</svg>''',
        "desk_note": {
            "title": "Chloroplast Energetics",
            "body": "Thylakoid membrane stacks (grana) capture radiant solar photons, exciting chlorophyll electrons to drive photolysis of water into chemical bond energy."
        }
    },
    "biology_03_cell_structure_organelles.html": {
        "discipline": "Biology",
        "headsup": {
            "title": "Cell Wall vs Cell Membrane Functional Difference",
            "body": "The outer <strong>cell wall</strong> (found only in plants) is rigid, non-living, and <em>freely permeable</em> to all solutes. The inner <strong>cell membrane</strong> is living, flexible, and <em>selectively permeable</em>, regulating exactly what enters and leaves the cytoplasm."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="8" fill="#edf5ef"/>
  <!-- Cell Wall & Membrane -->
  <rect x="20" y="20" width="60" height="60" rx="6" fill="#ffffff" stroke="#161514" stroke-width="1.5"/>
  <rect x="24" y="24" width="52" height="52" rx="4" fill="#edf5ef" stroke="#2e382b" stroke-width="1"/>
  <!-- Nucleus -->
  <circle cx="50" cy="50" r="12" fill="#2e382b" stroke="#161514" stroke-width="1.2"/>
  <circle cx="50" cy="50" r="4" fill="#ffffff"/>
  <!-- Large Vacuole -->
  <ellipse cx="64" cy="38" rx="8" ry="6" fill="#ffffff" stroke="#797166" stroke-width="1"/>
  <text x="24" y="92" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">Eukaryotic Architecture</text>
</svg>''',
        "desk_note": {
            "title": "Cellular Compartments",
            "body": "Membrane-bound organelles maintain specialized micro-environments for metabolic synthesis, genetic transcription, and ATP respiration."
        }
    },
    "biology_04_digestive_system.html": {
        "discipline": "Biology",
        "headsup": {
            "title": "Bile Contains No Digestive Enzymes",
            "body": "<strong>Bile</strong> (produced by the liver and stored in the gall bladder) contains bile salts, not digestive enzymes. Its crucial role is mechanical: neutralizing acidic stomach chyme and <em>emulsifying large fat globules</em> into microscopic droplets for lipase enzymes to digest."
        },
        "svg": get_turtle_margin_svg("#edf5ef", "#2e382b", "Comparative Poikilotherm Digestion"),
        "desk_note": {
            "title": "Vertebrate Metabolism",
            "body": "As a poikilotherm, our 6yo side-necked turtle requires a lower basal metabolic energy expenditure than mammals, processing cellulose and aquatic prey efficiently through prolonged intestinal transit."
        }
    },
    "biology_05_circulatory_system.html": {
        "discipline": "Biology",
        "headsup": {
            "title": "Arteries vs Veins: Direction Defines the Vessel",
            "body": "<strong>Arteries</strong> strictly carry blood <em>away from the heart</em> under high pressure (thick elastic walls). <strong>Veins</strong> strictly carry blood <em>towards the heart</em> (thin walls with pocket valves). The Pulmonary Artery carries deoxygenated blood, while the Pulmonary Vein carries oxygenated blood."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 20 C10 40 10 70 20 85 C40 95 60 95 80 85 C90 70 90 40 80 20 Z" fill="#edf5ef"/>
  <!-- Four Chamber Heart Schema -->
  <rect x="28" y="28" width="44" height="44" rx="8" fill="#ffffff" stroke="#161514" stroke-width="1.4"/>
  <line x1="50" y1="28" x2="50" y2="72" stroke="#161514" stroke-width="1.3"/>
  <line x1="28" y1="50" x2="72" y2="50" stroke="#161514" stroke-width="1.3"/>
  <circle cx="50" cy="50" r="3" fill="#2e382b"/>
  <text x="35" y="42" font-family="'Newsreader', serif" font-size="9" font-weight="bold" fill="#2563eb">RA</text>
  <text x="57" y="42" font-family="'Newsreader', serif" font-size="9" font-weight="bold" fill="#c2410c">LA</text>
  <text x="35" y="64" font-family="'Newsreader', serif" font-size="9" font-weight="bold" fill="#2563eb">RV</text>
  <text x="57" y="64" font-family="'Newsreader', serif" font-size="9" font-weight="bold" fill="#c2410c">LV</text>
  <text x="26" y="88" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">Double Circulation</text>
</svg>''',
        "desk_note": {
            "title": "Cardiovascular Pressure",
            "body": "The muscular left ventricle generates peak systolic pressure to drive oxygenated systemic perfusion through the ascending aorta."
        }
    },
    "biology_06_human_respiratory_system.html": {
        "discipline": "Biology",
        "headsup": {
            "title": "Breathing is Mechanical, Respiration is Cellular",
            "body": "<strong>Breathing (ventilation)</strong> is the physical, mechanical inhalation and exhalation of air by rib cage and diaphragm movement. <strong>Respiration</strong> is the biochemical enzymatic oxidation of glucose inside cells to release energy (ATP)."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="50" rx="36" ry="36" fill="#edf5ef"/>
  <!-- Trachea and Bronchi -->
  <line x1="50" y1="18" x2="50" y2="42" stroke="#161514" stroke-width="1.6"/>
  <path d="M50 42 L34 58 M50 42 L66 58" stroke="#161514" stroke-width="1.4"/>
  <!-- Alveoli Clusters -->
  <circle cx="30" cy="64" r="6" fill="#2e382b" opacity="0.6"/>
  <circle cx="26" cy="72" r="5" fill="#2e382b" opacity="0.6"/>
  <circle cx="70" cy="64" r="6" fill="#2e382b" opacity="0.6"/>
  <circle cx="74" cy="72" r="5" fill="#2e382b" opacity="0.6"/>
  <text x="24" y="92" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">Alveolar Diffusion</text>
</svg>''',
        "desk_note": {
            "title": "Alveolar Gas Exchange",
            "body": "Extensive pulmonary micro-capillary beds maximize surface area to volume ratio for passive Fickian diffusion of \\(\\text{O}_2\\) and \\(\\text{CO}_2\\)."
        }
    },
    "biology_07_excretory_system.html": {
        "discipline": "Biology",
        "headsup": {
            "title": "Excretion vs Egestion Distinction",
            "body": "<strong>Excretion</strong> is the removal of metabolic toxic waste products produced <em>inside cells</em> (such as urea, uric acid, and excess salts by kidneys). <strong>Egestion</strong> is the passing out of undigested food residue through the anus that never crossed into bodily cells."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="8" fill="#edf5ef"/>
  <!-- Kidney Bean Shape -->
  <path d="M38 28 C26 36 26 64 38 72 C48 78 60 72 62 60 C64 52 56 50 56 46 C56 42 64 40 62 32 C60 22 48 20 38 28 Z" fill="#ffffff" stroke="#161514" stroke-width="1.3"/>
  <!-- Renal Artery & Ureter -->
  <path d="M56 46 L76 44" stroke="#c2410c" stroke-width="1.2"/>
  <path d="M56 50 L76 54" stroke="#2563eb" stroke-width="1.2"/>
  <path d="M48 68 L54 84" stroke="#2e382b" stroke-width="1.3"/>
  <text x="24" y="92" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">Nephron Ultrafiltration</text>
</svg>''',
        "desk_note": {
            "title": "Renal Homeostasis",
            "body": "Million microscopic nephrons perform pressure ultrafiltration at Bowman's capsules followed by selective tubular reabsorption of water and glucose."
        }
    },
    "biology_08_nervous_system.html": {
        "discipline": "Biology",
        "headsup": {
            "title": "Nerve Impulses Travel in One Direction Only",
            "body": "Across a synapse, neurotransmitter chemicals are released only from the axon terminal bulbs and picked up by receptor sites on the dendrites of the next neuron. This ensures nerve signals travel <strong>unidirectionally</strong> from dendrite to axon."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="38" fill="#edf5ef"/>
  <!-- Multipolar Neuron -->
  <circle cx="34" cy="40" r="10" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <circle cx="34" cy="40" r="3" fill="#2e382b"/>
  <!-- Dendrites -->
  <path d="M26 34 L18 26 M32 30 L30 20 M38 32 L44 24 M24 44 L16 48" stroke="#161514" stroke-width="1.1"/>
  <!-- Axon -->
  <path d="M44 42 L80 66" stroke="#161514" stroke-width="1.4"/>
  <rect x="52" y="44" width="8" height="6" rx="2" transform="rotate(32 52 44)" fill="#2e382b" opacity="0.4"/>
  <rect x="64" y="52" width="8" height="6" rx="2" transform="rotate(32 64 52)" fill="#2e382b" opacity="0.4"/>
  <text x="22" y="92" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">Synaptic Transmission</text>
</svg>''',
        "desk_note": {
            "title": "Action Potential",
            "body": "Saltatory conduction along myelinated axons accelerates electro-chemical signal transmission across central and peripheral nervous circuits."
        }
    },
    "biology_09_reproduction_in_plants_animals.html": {
        "discipline": "Biology",
        "headsup": {
            "title": "Pollination Must Precede Fertilization",
            "body": "<strong>Pollination</strong> is the physical transfer of pollen grains from an anther to a receptive stigma. <strong>Fertilization</strong> occurs later when the male gamete inside the pollen tube fuses with the female ovule inside the ovary to form a zygote."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 20 C10 40 10 70 20 85 C40 95 60 95 80 85 C90 70 90 40 80 20 Z" fill="#edf5ef"/>
  <!-- Flower Carpel/Pistil -->
  <path d="M48 24 H52 V50 C44 54 42 66 50 72 C58 66 56 54 48 50 Z" fill="#ffffff" stroke="#161514" stroke-width="1.3"/>
  <circle cx="50" cy="24" r="3" fill="#2e382b"/>
  <!-- Stamens -->
  <path d="M34 40 C34 40 40 60 44 68" stroke="#161514" stroke-width="1.1"/>
  <circle cx="32" cy="38" r="2.5" fill="#c2410c"/>
  <path d="M66 40 C66 40 60 60 56 68" stroke="#161514" stroke-width="1.1"/>
  <circle cx="68" cy="38" r="2.5" fill="#c2410c"/>
  <text x="24" y="90" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">Gametic Syngamy</text>
</svg>''',
        "desk_note": {
            "title": "Angiosperm Floral Organs",
            "body": "Haploid microspores (pollen) germinate upon the sticky stigmatic surface, extending a pollen tube into the carpel ovary for double fertilization."
        }
    },
    "biology_10_classification_of_organisms.html": {
        "discipline": "Biology",
        "headsup": {
            "title": "Binomial Nomenclature Formatting Rules",
            "body": "In scientific naming, the <strong>Genus</strong> is always capitalized while the <strong>species</strong> is always in lowercase. Both names must be italicized in print (e.g., <em>Homo sapiens</em>, <em>Pleurodira</em>) or individually underlined when handwritten."
        },
        "svg": get_turtle_margin_svg("#edf5ef", "#2e382b", "Pleurodira (Side-Necked)"),
        "desk_note": {
            "title": "Suborder Pleurodira",
            "body": "Our 6yo desk companion belongs to Class Reptilia, Order Testudines, Suborder Pleurodira—characterized by folding its cervical vertebrae horizontally sideways under the anterior marginal shell rim."
        }
    },
    "biology_11_health_hygiene_and_diseases.html": {
        "discipline": "Biology",
        "headsup": {
            "title": "Antibiotics Kill Bacteria, Not Viruses",
            "body": "<strong>Antibiotics</strong> interfere with bacterial cell wall synthesis and metabolic machinery. Because viruses lack cell walls and reproduce strictly by hijacking human host cells, antibiotics have zero effect against viral infections like the common cold, flu, or chickenpox."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="38" fill="#edf5ef"/>
  <!-- Antibody Y-shape -->
  <path d="M50 76 V50 M50 50 L32 30 M50 50 L68 30" stroke="#161514" stroke-width="2" stroke-linecap="round"/>
  <!-- Antigen binding tips -->
  <rect x="28" y="24" width="6" height="6" fill="#2e382b"/>
  <rect x="66" y="24" width="6" height="6" fill="#2e382b"/>
  <circle cx="50" cy="36" r="3" fill="#c2410c" opacity="0.6"/>
  <text x="24" y="92" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">Humoral Immunity</text>
</svg>''',
        "desk_note": {
            "title": "Immunological Specificity",
            "body": "Immunoglobulin antibodies feature hypervariable antigen-binding Fab regions that dock onto pathogen surface epitopes with lock-and-key complementary precision."
        }
    },
    "biology_12_ecosystems_and_food_chains.html": {
        "discipline": "Biology",
        "headsup": {
            "title": "Lindeman's 10% Energy Transfer Law",
            "body": "Only about <strong>10% of energy</strong> at one trophic level is incorporated into biomass at the next trophic level; the remaining 90% is dissipated as metabolic heat and respiration. This sharp energy drop limits food chains to 4 or 5 links."
        },
        "svg": get_turtle_margin_svg("#edf5ef", "#2e382b", "Wetland Trophic Consumer"),
        "desk_note": {
            "title": "Aquatic Food Webs",
            "body": "In freshwater wetland ecosystems, our side-necked turtle occupies the secondary consumer trophic tier, grazing on aquatic macro-invertebrates and submerged vegetation."
        }
    },

    # ==========================================
    # MATHEMATICS (8 Topics) - Ochre Palette (#fef8ea / #d97706)
    # ==========================================
    "math_01_number_continuum.html": {
        "discipline": "Mathematics",
        "headsup": {
            "title": "Multiplying Two Negative Numbers Yields a Positive",
            "body": "Multiplication by a negative number represents a 180° directional reversal on the real number line. Multiplying negative by negative reverses direction twice, returning you to positive: \\((-a) \\times (-b) = +(ab)\\)."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="38" fill="#fef8ea"/>
  <line x1="16" y1="50" x2="84" y2="50" stroke="#161514" stroke-width="1.4"/>
  <polygon points="84,50 78,47 78,53" fill="#161514"/>
  <polygon points="16,50 22,47 22,53" fill="#161514"/>
  <circle cx="50" cy="50" r="2.5" fill="#d97706"/>
  <text x="48" y="64" font-family="'Newsreader', serif" font-size="10" font-weight="bold" fill="#161514">0</text>
  <line x1="30" y1="46" x2="30" y2="54" stroke="#161514" stroke-width="1"/>
  <text x="26" y="64" font-family="'Newsreader', serif" font-size="9" fill="#797166">-1</text>
  <line x1="70" y1="46" x2="70" y2="54" stroke="#161514" stroke-width="1"/>
  <text x="67" y="64" font-family="'Newsreader', serif" font-size="9" fill="#797166">+1</text>
  <text x="22" y="32" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#d97706">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</text>
</svg>''',
        "desk_note": {
            "title": "Dedekind Density",
            "body": "Between any two rational numbers \\(a < b\\), there exists an infinite continuum of intermediate rationals \\(\\frac{a+b}{2}\\)."
        }
    },
    "math_02_laws_of_indices.html": {
        "discipline": "Mathematics",
        "headsup": {
            "title": "Why Any Non-Zero Number to Power Zero Equals 1",
            "body": "By the division rule of powers, \\(\\frac{a^m}{a^m} = a^{m-m} = a^0\\). But any quantity divided by itself is identically 1 (\\(\\frac{a^m}{a^m} = 1\\)). Therefore, \\(a^0 = 1\\) for all \\(a \\neq 0\\)."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="8" fill="#fef8ea"/>
  <!-- Exponential curve -->
  <path d="M22 75 Q45 72 60 50 T80 20" stroke="#d97706" stroke-width="1.8" fill="none"/>
  <circle cx="60" cy="50" r="2.5" fill="#161514"/>
  <text x="25" y="36" font-family="'Newsreader', serif" font-size="11" font-weight="bold" fill="#161514">aᵐ · aⁿ = aᵐ⁺ⁿ</text>
  <text x="32" y="80" font-family="'Newsreader', serif" font-size="10" font-style="italic" fill="#797166">a⁰ = 1 (a ≠ 0)</text>
</svg>''',
        "desk_note": {
            "title": "Exponential Scaling",
            "body": "Exponents turn multiplicative scaling into linear index addition, unifying cosmic notation \\(10^{24}\\) and subatomic dimensions \\(10^{-15}\\)."
        }
    },
    "math_03_algebraic_expressions.html": {
        "discipline": "Mathematics",
        "headsup": {
            "title": "Distribute Minus Signs Across All Terms in Brackets",
            "body": "When expanding expressions with a negative multiplier like \\(-(3x - 5)\\), remember that the minus sign applies to <em>every</em> term inside the bracket, resulting in \\(-3x + 5\\), not \\(-3x - 5\\)."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="8" fill="#fef8ea"/>
  <!-- Area dissection model: (x+a)(x+b) -->
  <rect x="25" y="25" width="28" height="28" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <text x="36" y="42" font-family="'Newsreader', serif" font-size="9" fill="#161514">x²</text>
  <rect x="53" y="25" width="22" height="28" fill="#fef8ea" stroke="#161514" stroke-width="1.2"/>
  <text x="60" y="42" font-family="'Newsreader', serif" font-size="9" fill="#d97706">bx</text>
  <rect x="25" y="53" width="28" height="22" fill="#fef8ea" stroke="#161514" stroke-width="1.2"/>
  <text x="34" y="66" font-family="'Newsreader', serif" font-size="9" fill="#d97706">ax</text>
  <rect x="53" y="53" width="22" height="22" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <text x="59" y="66" font-family="'Newsreader', serif" font-size="9" fill="#161514">ab</text>
</svg>''',
        "desk_note": {
            "title": "Geometric Algebra",
            "body": "Polynomial distribution corresponds to rectangular area dissection: \\((x+a)(x+b) = x^2 + (a+b)x + ab\\)."
        }
    },
    "math_04_linear_equations.html": {
        "discipline": "Mathematics",
        "headsup": {
            "title": "Maintain Equality Balance in Every Step",
            "body": "An equation is a balanced pair of scales. Whatever operation you perform on the left-hand side (adding, subtracting, multiplying, or dividing), you must perform the <strong>exact same operation on the right-hand side</strong> to maintain equality."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 75 L88 75 L50 20 Z" fill="#fef8ea"/>
  <line x1="20" y1="46" x2="80" y2="46" stroke="#161514" stroke-width="1.8" stroke-linecap="round"/>
  <polygon points="50,46 44,60 56,60" fill="#d97706" stroke="#161514" stroke-width="1.2"/>
  <!-- Pans -->
  <polygon points="20,46 36,46 28,54" fill="#ffffff" stroke="#161514" stroke-width="1.1"/>
  <text x="24" y="43" font-family="'Newsreader', serif" font-size="8" font-weight="bold" fill="#161514">ax+b</text>
  <polygon points="64,46 80,46 72,54" fill="#ffffff" stroke="#161514" stroke-width="1.1"/>
  <text x="70" y="43" font-family="'Newsreader', serif" font-size="8" font-weight="bold" fill="#d97706">c</text>
  <text x="26" y="80" font-family="'Newsreader', serif" font-size="10" font-style="italic" fill="#797166">x = (c - b) / a</text>
</svg>''',
        "desk_note": {
            "title": "The Balance Model",
            "body": "Transposition represents symmetric algebraic operations applied to both pans to isolate the unknown variable \\(x\\)."
        }
    },
    "math_05_ratios_and_proportions.html": {
        "discipline": "Mathematics",
        "headsup": {
            "title": "Quantities in a Ratio Must Have Identical Units",
            "body": "You cannot find the ratio between 50 paise and ₹2 directly. First convert them to the same units: ₹2 = 200 paise, giving \\(50 : 200 = 1 : 4\\). Ratios are pure numbers and carry <strong>no units</strong>."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="38" fill="#fef8ea"/>
  <!-- Extreme and Mean Rectangles -->
  <rect x="22" y="32" width="24" height="36" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <rect x="54" y="32" width="24" height="36" fill="#fef8ea" stroke="#d97706" stroke-width="1.2"/>
  <text x="26" y="54" font-family="'Newsreader', serif" font-size="11" font-weight="bold" fill="#161514">a : b</text>
  <text x="58" y="54" font-family="'Newsreader', serif" font-size="11" font-weight="bold" fill="#d97706">c : d</text>
  <text x="24" y="82" font-family="'Newsreader', serif" font-size="10" font-style="italic" fill="#797166">ad = bc (Extremes = Means)</text>
</svg>''',
        "desk_note": {
            "title": "Proportion Equality",
            "body": "In every valid proportion \\(a:b :: c:d\\), the product of the extremes strictly equals the product of the means (\\(a \\cdot d = b \\cdot c\\))."
        }
    },
    "math_06_commercial_mathematics.html": {
        "discipline": "Mathematics",
        "headsup": {
            "title": "Profit and Loss % is Strictly Calculated on Cost Price",
            "body": "Unless explicitly stated otherwise in an ICSE examination question, <strong>Profit Percentage</strong> and <strong>Loss Percentage</strong> are calculated strictly on the <strong>Cost Price (CP)</strong>: \\(\\text{Profit }\\% = \\frac{\\text{Profit}}{\\text{CP}} \\times 100\\)."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="8" fill="#fef8ea"/>
  <!-- Commercial Ribbon -->
  <path d="M22 34 H78 V46 H22 Z" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <text x="26" y="43" font-family="'Newsreader', serif" font-size="8" font-weight="bold" fill="#161514">CP (Base)</text>
  <path d="M22 56 H58 V68 H22 Z" fill="#fef8ea" stroke="#d97706" stroke-width="1.2"/>
  <text x="26" y="65" font-family="'Newsreader', serif" font-size="8" font-weight="bold" fill="#d97706">SP (Revenue)</text>
  <text x="24" y="82" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">Profit % = (P/CP)·100</text>
</svg>''',
        "desk_note": {
            "title": "Commercial Dynamics",
            "body": "Marked price discounts and profit margins operate on separate base baselines: discount applies to MP, while net gain is evaluated on CP."
        }
    },
    "math_07_lines_and_angles.html": {
        "discipline": "Mathematics",
        "headsup": {
            "title": "Co-Interior Angles are Supplementary (Sum to 180°)",
            "body": "When a transversal intersects two parallel lines: Alternate interior angles (Z-angles) are equal, Corresponding angles (F-angles) are equal, but <strong>Co-interior angles (C-angles) are supplementary</strong> (\\(\\angle 1 + \\angle 2 = 180^\\circ\\)), not equal."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="38" fill="#fef8ea"/>
  <line x1="16" y1="36" x2="84" y2="36" stroke="#161514" stroke-width="1.4"/>
  <line x1="16" y1="64" x2="84" y2="64" stroke="#161514" stroke-width="1.4"/>
  <line x1="32" y1="20" x2="68" y2="80" stroke="#d97706" stroke-width="1.5"/>
  <!-- Alternate Angle Arcs -->
  <path d="M47 36 C47 40 45 44 42 46" stroke="#d97706" stroke-width="1.2" fill="none"/>
  <path d="M53 64 C53 60 55 56 58 54" stroke="#d97706" stroke-width="1.2" fill="none"/>
  <text x="24" y="88" font-family="'Newsreader', serif" font-size="9" font-style="italic" fill="#797166">Parallel Transversals (Z, F, C)</text>
</svg>''',
        "desk_note": {
            "title": "Transversal Invariants",
            "body": "Euclid's fifth postulate establishes that parallel lines cut by a transversal form identical alternating interior angle pairs."
        }
    },
    "math_08_triangles_and_congruence.html": {
        "discipline": "Mathematics",
        "headsup": {
            "title": "AAA and SSA are NOT Valid Congruence Criteria",
            "body": "Three equal angles (AAA) only proves that two triangles are <em>similar</em> (same shape, different size), not congruent. The only four valid ICSE criteria for triangle congruence are <strong>SSS, SAS, ASA, and RHS</strong>."
        },
        "svg": '''<svg class="desk-svg" viewBox="0 0 100 100" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="38" fill="#fef8ea"/>
  <!-- Congruent Triangle Pair -->
  <polygon points="20,68 46,68 33,32" fill="#ffffff" stroke="#161514" stroke-width="1.2"/>
  <polygon points="54,68 80,68 67,32" fill="#ffffff" stroke="#d97706" stroke-width="1.2"/>
  <!-- Ticks on sides -->
  <line x1="25" y1="50" x2="28" y2="48" stroke="#161514" stroke-width="1.2"/>
  <line x1="59" y1="50" x2="62" y2="48" stroke="#d97706" stroke-width="1.2"/>
  <text x="24" y="84" font-family="'Newsreader', serif" font-size="10" font-style="italic" fill="#797166">△ABC ≅ △PQR (CPCTC)</text>
</svg>''',
        "desk_note": {
            "title": "Congruence Rigor",
            "body": "Congruence ensures complete superposability: Corresponding Parts of Congruent Triangles are strictly Congruent (CPCTC)."
        }
    }
}

CSS_ENRICHMENT = """
    /* ==========================================================================
       DESK MARGIN AESTHETICS & HEADS-UP CALLOUT ENRICHMENT
       ========================================================================== */
    .headsup-box {
      background: var(--emerald-soft, #f0f7f2);
      border: 1px solid #bbf7d0;
      border-left: 4px solid var(--emerald-accent, #15803d);
      border-radius: 0 8px 8px 0;
      padding: 20px 24px;
      font-size: 14.5px;
      color: #166534;
      line-height: 1.65;
      margin: 12px 0 20px;
    }
    .headsup-title {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 0.05em;
      display: block;
      margin-bottom: 6px;
      color: var(--emerald-accent, #15803d);
    }
    .headsup-box p {
      color: #166534;
      font-size: 14.5px;
      line-height: 1.65;
    }
    .headsup-box strong {
      color: #14532d;
    }

    .margin-sketch {
      grid-column: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      margin-top: 6px;
    }
    .margin-sketch svg {
      width: 100%;
      max-width: 100px;
      height: auto;
      filter: drop-shadow(0 2px 6px rgba(22, 21, 20, 0.04));
    }
    .desk-note {
      grid-column: 2;
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 12.5px;
      line-height: 1.45;
      color: var(--ink-muted);
      border-left: 1.5px solid var(--border-subtle);
      padding-left: 10px;
      margin-top: 4px;
      width: 100%;
    }
    .desk-note strong {
      font-style: normal;
      font-weight: 600;
      color: var(--ink-secondary);
      display: block;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 3px;
    }

    .article-body > .margin-sketch,
    .article-body > .desk-note {
      grid-column: 2;
    }

    @media (max-width: 768px) {
      .article-body > .margin-sketch,
      .article-body > .desk-note {
        grid-column: 1 !important;
        margin: 16px 0;
      }
    }
"""

def clean_language(html):
    # Clean banned words
    html = re.sub(r'\bReal-World Exemplars\b', 'Real-World Examples', html, flags=re.IGNORECASE)
    html = re.sub(r'\bcompendiums\b', 'References', html, flags=re.IGNORECASE)
    html = re.sub(r'\bcompendium\b', 'Reference', html, flags=re.IGNORECASE)
    html = re.sub(r'\bexemplars\b', 'Worked Problems', html, flags=re.IGNORECASE)
    html = re.sub(r'\bexemplar\b', 'Worked Problem', html, flags=re.IGNORECASE)
    html = re.sub(r'\bcanonicals\b', 'Standard Models', html, flags=re.IGNORECASE)
    html = re.sub(r'\bcanonical\b', 'Standard Model', html, flags=re.IGNORECASE)
    return html

def process_topic(filepath):
    filename = os.path.basename(filepath)
    if filename not in TOPIC_DATA:
        print(f"Skipping unknown file: {filename}")
        return

    data = TOPIC_DATA[filename]
    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Clean forbidden language
    html = clean_language(html)

    # 2. Inject or ensure CSS for desk-note / margin-sketch / headsup-box
    if ".margin-sketch" not in html or ".headsup-box" not in html:
        html = html.replace("</style>", CSS_ENRICHMENT + "\n  </style>", 1)

    # 3. Ensure Heads-Up Callout box is present
    has_headsup = ("headsup-box" in html or "heads-up" in html.lower() or "trap-box" in html or "misconception" in html.lower())
    if not has_headsup and "headsup" in data:
        headsup_info = data["headsup"]
        headsup_html = f'''
      <!-- HEADS-UP COGNITIVE CLARITY CALLOUT -->
      <div class="headsup-box">
        <span class="headsup-title">💡 Heads-Up &bull; {headsup_info["title"]}</span>
        <p>{headsup_info["body"]}</p>
      </div>
'''
        # Insert after the first definition-box or concept-callout or before first worked problem
        if 'class="definition-box"' in html:
            match = re.search(r'(<div class="definition-box">.*?</div>)', html, re.DOTALL)
            if match:
                idx = match.end()
                html = html[:idx] + headsup_html + html[idx:]
        elif 'class="concept-callout"' in html:
            match = re.search(r'(<div class="concept-callout">.*?</div>)', html, re.DOTALL)
            if match:
                idx = match.end()
                html = html[:idx] + headsup_html + html[idx:]
        elif 'class="section-block"' in html:
            match = re.search(r'(<section class="section-block">.*?</h2>)', html, re.DOTALL)
            if match:
                idx = match.end()
                html = html[:idx] + headsup_html + html[idx:]
        else:
            match = re.search(r'(<main class="article-body">)', html)
            if match:
                idx = match.end()
                html = html[:idx] + headsup_html + html[idx:]

    # 4. Inject or Replace bespoke margin sketch SVG and desk note in column 2
    margin_html = f'''    <!-- 120PX DESK MARGIN: TECHNICAL DRAFTING SKETCH & COMMENTARY -->
    <aside class="margin-sketch" aria-label="Technical Margin Illustration">
      {data["svg"]}
      <div class="desk-note">
        <strong>{data["desk_note"]["title"]}</strong>
        {data["desk_note"]["body"]}
      </div>
    </aside>'''

    if 'class="margin-sketch"' in html:
        # Replace existing aside
        html = re.sub(
            r'<!--\s*120PX DESK MARGIN:.*?</aside>',
            lambda m: margin_html,
            html,
            flags=re.DOTALL
        )
        if 'class="margin-sketch"' not in html:
            # Fallback regex if comment format differed
            html = re.sub(
                r'<aside class="margin-sketch".*?</aside>',
                lambda m: margin_html,
                html,
                flags=re.DOTALL
            )
    else:
        match = re.search(r'(<main class="article-body">)', html)
        if match:
            idx = match.end()
            html = html[:idx] + "\n" + margin_html + html[idx:]

    # Write updated file
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)

    print(f"Enriched: {filename}")

def main():
    files = sorted(glob.glob(os.path.join(TOPICS_DIR, "*.html")))
    print(f"Processing {len(files)} topic files...")
    for f in files:
        process_topic(f)
    print("All topics enriched successfully.")

if __name__ == "__main__":
    main()
