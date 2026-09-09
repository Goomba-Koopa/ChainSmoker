# ICSE Class 7 Science & Mathematics: Margin SVG & Desk-Note Architectural Blueprint

This document specifies the topic-by-topic visual and pedagogical blueprint for populating the $120\text{px}$ desk margin across all 44 lessons in the curriculum.

---

## 🏛️ Layout Architecture: The Dual-Anchor Cadence

To avoid clustering graphics at the top of a 3,000-pixel lesson, each topic features **two vertically distributed margin anchors**:

1. **Anchor 1 (Physical Phenomenon / Intuitive Anchor):** Sits alongside Section 1 or 2. Grounded in tangible physical reality, real-world phenomena, or biological mechanisms.
2. **Anchor 2 (Derivation Scratchpad / Mnemonic Whisper):** Sits opposite Section 3 or 4 (Worked Problems or Mathematical Derivations). Features step-by-step ratio cancellations, dimensional checks, or geometric mnemonics.

---

## 🎨 Discipline Palette & Stroke Invariants

All vector SVGs are constrained to a maximum width of $96\text{px}$ (inside the $120\text{px}$ margin column) with responsive mobile degradation:

| Discipline | Wash Tint (Fill) | Line Ink (Stroke) | Accent Tone | Aesthetic Key |
| :--- | :--- | :--- | :--- | :--- |
| **Physics** | Soft Terracotta (`#fbf0ea`) | Carbon Ink (`#161514`) | Muted Terracotta (`#c2410c`) | Drafting angles, vectors, force arrows, ray optics |
| **Chemistry** | Mint Emerald (`#f0f7f2`) | Carbon Ink (`#161514`) | Emerald (`#15803d`) | Bohr shells, orbital dots, glassware, crystal lattices |
| **Biology** | Moss Olive (`#edf5ef`) | Carbon Ink (`#161514`) | Moss Olive (`#2e382b`) | Cellular anatomy, tissue cross-sections, organ systems |
| **Mathematics** | Warm Ochre (`#fef8ea`) | Carbon Ink (`#161514`) | Deep Ochre (`#d97706`) | Number lines, balance beams, geometric overlays |

---

## ⚡ Part 1: Physics (12 Lessons)

### `PHY-01`: Motion & Speed
* **Anchor 1 (Physical Anchor):** **The Sliding Desk Notebook ($AB \parallel A'B'$)**
  * *Visual:* Isometric view of a notebook translating diagonally across desk grain. Two points $A$ and $B$ on the leading edge translate to $A'$ and $B'$ with parallel dashed displacement vectors ($\vec{d}_A = \vec{d}_B$).
* **Anchor 2 (Derivation Scratchpad):** **$\frac{5}{18}$ Unit Conversion Factor**
  * *Visual:* Scratchpad ratio cancellation: $\frac{1000\text{ m}}{3600\text{ s}} = \frac{5}{18}\text{ m/s}$ with pencil slash cancellations through zeros.
* **Desk Companion:** Features the 6yo *Pleurodira* crawling at uniform rectilinear speed ($v \approx 0.08\text{ m/s}$).

### `PHY-02`: Energy & Machines
* **Anchor 1 (Physical Anchor):** **The Frictionless Pendulum Energy Exchange**
  * *Visual:* Simple pendulum swinging through dashed arc. At extremes: $E_p = mgh, E_k = 0$. At mean datum line: $E_k = \frac{1}{2}mv^2, E_p = 0$. Energy bar chart showing $E_{\text{total}} = \text{constant}$.
* **Anchor 2 (Derivation Scratchpad):** **The Zero-Work Wall Paradox**
  * *Visual:* Figure pushing against a solid brick wall with $100\text{ N}$ force. Distance vector arrow $d = 0\text{ m} \implies W = F \cdot d = 0\text{ J}$. Note: *"Biological fatigue $\neq$ Physical work"*.

### `PHY-03`: Light & Reflection
* **Anchor 1 (Physical Anchor):** **Pinhole Camera Ray Inversion**
  * *Visual:* Illuminated candle flame, dark pinhole box aperture, and inverted diminished flame image on greasepaper screen traced by straight intersecting light rays.
* **Anchor 2 (Derivation Scratchpad):** **Specular Reflection with Normal Construction**
  * *Visual:* Polished mirror with dashed perpendicular normal line, angle arcs $\angle i$ and $\angle r$, and label: $\angle i = \angle r \text{ (measured from normal)}$.

### `PHY-04`: Sound & Vibration
* **Anchor 1 (Physical Anchor):** **Tuning Fork & Pressure Wave Bands**
  * *Visual:* Steel tuning fork with vibrating prong arcs. Concentric density bands showing alternating compression ($C$) and rarefaction ($R$) air zones with wavelength marker $\lambda$.
* **Anchor 2 (Derivation Scratchpad):** **Waveform Morphology (Amplitude vs Pitch)**
  * *Visual:* Comparative waveforms on grid: Wave 1 with tall amplitude ($2A$, loud); Wave 2 with rapid tight crests ($2f$, high pitch shrill).

### `PHY-05`: Electricity & Circuits
* **Anchor 1 (Physical Anchor):** **Canonical Circuit Schematic Loop**
  * *Visual:* Single-loop schematic: DC cell ($+ -$), knife switch, filament bulb with light arcs, and dual counter-arrows: Electron Flow ($-$ to $+$) vs Conventional Current ($+$ to $-$).
* **Anchor 2 (Derivation Scratchpad):** **Resistance Constriction Analogy**
  * *Visual:* Fluid pipe section: Potential Difference ($V$), constriction Resistance ($R$), and fluid volume flow rate Current ($I$).

### `PHY-06`: Force & Pressure
* **Anchor 1 (Physical Anchor):** **The Sharp Nail vs Blunt Block**
  * *Visual:* Hammer striking sharp point ($A \to 0 \implies P \to \infty$) penetrating wood vs broad flat block distributing force across wide area ($A \text{ large} \implies P \text{ small}$).
* **Anchor 2 (Derivation Scratchpad):** **Hydrostatic Liquid Column Depth ($h \rho g$)**
  * *Visual:* Transparent liquid container with three spout jets at depths $h_1 < h_2 < h_3$. Lowest spout ejects with maximum trajectory velocity ($P \propto h$).

### `PHY-07`: Heat & Temperature
* **Anchor 1 (Physical Anchor):** **Bimetallic Strip Thermal Curvature**
  * *Visual:* Two bonded metal bars: Brass (top) and Iron (bottom). At room temperature ($20^\circ\text{C}$): straight. Heated ($100^\circ\text{C}$): curves downward into a concave arc ($\alpha_{\text{brass}} > \alpha_{\text{iron}}$).
* **Anchor 2 (Derivation Scratchpad):** **Temperature Scale Proportionality**
  * *Visual:* Side-by-side Celsius ($0\text{–}100^\circ\text{C}$) and Fahrenheit ($32\text{–}212^\circ\text{F}$) stems. Scratch derivation: $\frac{C}{100} = \frac{F-32}{180} \implies \frac{C}{5} = \frac{F-32}{9}$.

### `PHY-08`: Density & Buoyancy
* **Anchor 1 (Physical Anchor):** **The Eureka Overflow Can**
  * *Visual:* Overflow vessel filled to spout level. Suspended irregular stone immersed; displaced fluid collected into graduated cylinder ($V_{\text{stone}} = V_{\text{displaced}}$).
* **Anchor 2 (Derivation Scratchpad):** **Floating Equilibrium Vectors**
  * *Visual:* Floating body with downward gravity force $W = mg$ balancing upward buoyant force $F_B = V_{\text{sub}} \rho_w g$.
* **Desk Companion:** Features 6yo *Pleurodira* adjusting buoyancy through lung expansion.

### `PHY-09`: Magnetism & Fields
* **Anchor 1 (Physical Anchor):** **Bar Magnet Dipolar Field Loops**
  * *Visual:* Bar magnet with $N$ and $S$ poles. Symmetrical closed field loops emerging from $N$ and entering $S$, with tangential compass needles.
* **Anchor 2 (Derivation Scratchpad):** **Magnetic Induction Chain**
  * *Visual:* Permanent magnet suspending soft iron clips by induced magnetic polarization without direct electrical contact.

### `PHY-10`: Spherical Mirrors & Images
* **Anchor 1 (Physical Anchor):** **Concave Mirror Principal Ray Tracing**
  * *Visual:* Concave reflective arc with Center of Curvature $C$, Focus $F$, Pole $P$. Parallel ray focusing through $F$; focal length $f = R/2$.
* **Anchor 2 (Derivation Scratchpad):** **Convex Mirror Wide Field of View**
  * *Visual:* Convex surface dispersing incoming parallel rays outward, creating diminished virtual upright image behind mirror surface.

### `PHY-11`: Static Electricity & Charges
* **Anchor 1 (Physical Anchor):** **Gold Leaf Electroscope (GLE) Divergence**
  * *Visual:* Brass cap, insulating stopper, metal rod, and diverging gold foil leaves showing electrostatic repulsion of like charges.
* **Anchor 2 (Derivation Scratchpad):** **Charging by Induction Polarization**
  * *Visual:* Charged ebonite rod near neutral metal sphere, separating charges without physical contact.

### `PHY-12`: Simple Machines & Efficiency
* **Anchor 1 (Physical Anchor):** **The Three Lever Classes**
  * *Visual:* Three horizontal balance beams: Class I ($F$ in middle), Class II ($L$ in middle), Class III ($E$ in middle) with color-coded markers.
* **Anchor 2 (Derivation Scratchpad):** **Two-Pulley Block & Tackle ($VR = 2$)**
  * *Visual:* Fixed top pulley and movable bottom pulley suspended by two supporting rope strands ($MA = 2$).

---

## ⚗️ Part 2: Chemistry (12 Lessons)

### `CHE-01`: Matter & Composition
* **Anchor 1:** Three states particle viewports (Solid lattice, Liquid clusters, Gas free-flight).
* **Anchor 2:** Sublimation inverted funnel apparatus (solid iodine crystals converting directly to vapor).

### `CHE-02`: Atomic Structure & Valency
* **Anchor 1:** Bohr electron shells for Sodium ($_{11}\text{Na}: K=2, L=8, M=1$) highlighting lone valence electron.
* **Anchor 2:** $2n^2$ shell capacity rule scratchpad ($K=2, L=8, M=18$).

### `CHE-03`: Elements & Compounds
* **Anchor 1:** Iron + Sulfur mixture (magnet separates filings) vs Iron(II) Sulfide compound ($FeS$, non-magnetic).
* **Anchor 2:** Definite mass proportion in water ($2\text{ u} : 16\text{ u} = 1:8$).

### `CHE-04`: Atoms, Molecules & Radicals
* **Anchor 1:** Criss-cross valency vectors ($Al^{3+} + O^{2-} \to Al_2O_3$).
* **Anchor 2:** Polyatomic radical bracket notation ($Al_2(SO_4)_3$).

### `CHE-05`: Chemical Reactions & Balancing
* **Anchor 1:** Lavoisier mass balance beam ($2H_2 + O_2$ balancing $2H_2O$).
* **Anchor 2:** Atom ledger scratchpad verifying stoichiometric conservation.

### `CHE-06`: Acids, Bases & Salts
* **Anchor 1:** Litmus paper dip color transition (blue to red in acid; red to blue in base).
* **Anchor 2:** Neutralization ionic breakdown ($H^+ + OH^- \to H_2O$).

### `CHE-07`: Metals, Non-Metals & Reactivity
* **Anchor 1:** Single displacement test tube (zinc strip displacing copper from blue $CuSO_4$).
* **Anchor 2:** Reactivity series stepped ladder with $[H]$ threshold.

### `CHE-08`: Water, Solutions & Solubility
* **Anchor 1:** Water dipole envelope ($104.5^\circ$ angle) orienting around $Na^+$ and $Cl^-$ ions.
* **Anchor 2:** Solubility temperature curve plot ($KNO_3$ curve).

### `CHE-09`: Air, Oxygen & Combustion
* **Anchor 1:** Inverted bell jar water trough experiment showing 1/5th ($21\%$) volume air consumption.
* **Anchor 2:** Fire triangle schematic (Fuel, Oxygen, Ignition Temperature).

### `CHE-10`: Carbon & Its Allotropes
* **Anchor 1:** Diamond rigid 3D tetrahedral network vs graphite 2D layered slippery sheets.
* **Anchor 2:** Limewater milky precipitate reaction ($Ca(OH)_2 + CO_2 \to CaCO_3\downarrow$).

### `CHE-11`: Water Hardness & Treatment
* **Anchor 1:** Teakettle heating element scale ($Ca(HCO_3)_2 \xrightarrow{\Delta} CaCO_3\downarrow$).
* **Anchor 2:** Soap tail micelle vs calcium curd precipitation.

### `CHE-12`: Oxides, Acid Rain & Atmosphere
* **Anchor 1:** Marble column corrosion under acid precipitation ($CaCO_3 + H_2SO_4$).
* **Anchor 2:** Greenhouse infrared thermal trapping reflection schematic.

---

## 🌿 Part 3: Biology (12 Lessons)

### `BIO-01`: Plant & Animal Tissues
* **Anchor 1:** Xylem spiral-lignified vessel vs Phloem perforated sieve tube.
* **Anchor 2:** Collenchyma corner cellulose thickening micrograph.
* **Desk Companion:** Carapace skeletal bone & scute histology of the side-necked turtle.

### `BIO-02`: Photosynthesis & Respiration
* **Anchor 1:** Stomatal guard cell turgor valve (open turgid vs closed flaccid).
* **Anchor 2:** Microscopic stratified leaf mesophyll layer stack.

### `BIO-03`: Cell Structure & Organelles
* **Anchor 1:** Mitochondrion cristae cutaway with ATP synthase sites.
* **Anchor 2:** Cellulose plant cell wall vs flexible animal lipid bilayer.

### `BIO-04`: Digestive System
* **Anchor 1:** Intestinal mucosal villus micro-anatomy with lacteal vessel and capillary loop.
* **Anchor 2:** Esophageal circular and longitudinal peristaltic wave bolus motion.

### `BIO-05`: Circulatory System
* **Anchor 1:** Heart 4-chamber directional schematic with tricuspid and bicuspid valves.
* **Anchor 2:** Artery thick elastic tunic vs vein wide lumen with pocket valve.

### `BIO-06`: Human Respiratory System
* **Anchor 1:** Alveolus balloon gas exchange interface with pulmonary capillary mesh.
* **Anchor 2:** Diaphragm contraction (inhalation) vs dome relaxation (exhalation).

### `BIO-07`: Excretory System
* **Anchor 1:** Nephron Bowman's capsule and glomerulus ultrafiltration unit.
* **Anchor 2:** Kidney coronal section (Cortex, Medullary Pyramids, Renal Pelvis).

### `BIO-08`: Nervous System
* **Anchor 1:** The reflex arc spinal circuit (receptor $\to$ sensory $\to$ interneuron $\to$ motor $\to$ effector).
* **Anchor 2:** Multipolar neuron anatomy with myelin sheath nodes and synaptic terminals.

### `BIO-09`: Reproduction in Plants & Animals
* **Anchor 1:** Complete flower longitudinal section showing all 4 reproductive whorls.
* **Anchor 2:** Germinating pollen tube growth through style tissue into ovule micropyle.

### `BIO-10`: Classification of Organisms
* **Anchor 1:** Five-Kingdom rooted tree of life (Monera $\to$ Protista $\to$ Fungi/Plantae/Animalia).
* **Anchor 2:** Invertebrate exoskeleton vs vertebrate endoskeleton split ring.
* **Desk Companion:** Taxonomic classification hierarchy of *Pleurodira*.

### `BIO-11`: Health, Hygiene & Diseases
* **Anchor 1:** Pathogen morphologies (bacteriophage virus vs flagellated bacterium).
* **Anchor 2:** $Y$-shaped antibody variable pocket binding surface antigen spikes.

### `BIO-12`: Ecosystems & Food Chains
* **Anchor 1:** Lindeman's 10% trophic energy pyramid ($10,000\text{ J} \to 1,000\text{ J} \to 100\text{ J} \to 10\text{ J}$).
* **Anchor 2:** Biomagnification pesticide concentration multiplication cascade.

---

## 📐 Part 4: Mathematics (8 Lessons)

### `MATH-01`: Number Continuum & Rationals
* **Anchor 1:** Number line magnifier zooming into rational density between fractions.
* **Anchor 2:** Denominator prime factor test ($2^m \cdot 5^n$) for terminating decimals.

### `MATH-02`: Index Laws & Scientific Notation
* **Anchor 1:** Power-of-two geometric staircase ($2^0=1, 2^1=2, 2^2=4, 2^3=8$).
* **Anchor 2:** Division identity algebraic proof of $a^0 = 1$ ($\frac{a^m}{a^m} = a^{m-m} = a^0 = 1$).

### `MATH-03`: Algebraic Expressions & Polynomials
* **Anchor 1:** Geometric area model of bracket distribution ($a(b + c) = ab + ac$).
* **Anchor 2:** Like-term sorting bins ($x^2$ bin vs $x$ bin).

### `MATH-04`: Linear Equations
* **Anchor 1:** Two-pan mechanical balance beam model ($x + 2\text{ kg} = 5\text{ kg}$).
* **Anchor 2:** Transposition inverse operation mapping ($+ \leftrightarrow -$, $\times \leftrightarrow \div$).

### `MATH-05`: Ratios, Proportions & Unitary Method
* **Anchor 1:** Similar right triangles and shadow stick ratio ($\frac{h_1}{s_1} = \frac{h_2}{s_2}$).
* **Anchor 2:** Product of extremes equals product of means ($ad = bc$).

### `MATH-06`: Commercial Mathematics
* **Anchor 1:** Retail price ribbon: Cost Price ($CP$) + Markup $\to$ Marked Price ($MP$) $-$ Discount $\to$ Selling Price ($SP$).
* **Anchor 2:** Profit percentage formula reminder (denominator strictly $CP$, never $SP$).

### `MATH-07`: Lines, Angles & Transversals
* **Anchor 1:** Parallel lines with transversal highlighting alternate interior ($Z$) and corresponding ($F$) angles.
* **Anchor 2:** Linear pair supplementary angle equality proof for vertically opposite angles.

### `MATH-08`: Triangles, Congruence & Mensuration
* **Anchor 1:** Exterior angle theorem ($e = \angle A + \angle B$) on extended base triangle.
* **Anchor 2:** Side-Angle-Side (SAS) congruence superposition tick-mark test.
