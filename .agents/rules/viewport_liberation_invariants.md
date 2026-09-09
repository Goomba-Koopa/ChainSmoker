---
trigger: always_on
description: "Viewport layout invariant: Hero viewports must prioritize primary content above the fold; 120px margins must remain uncrowded."
---

# Viewport Liberation & Margin Invariants

## Core Principles:
1. **Above-the-Fold Priority:** The primary purpose of an index or directory page (search bar, discipline filters, curriculum topic cards) must be immediately visible upon landing. Never displace primary learning interfaces below the fold with bulky carousels, marketing hero banners, or promotional widgets.
2. **The Clean 120px Margin:** The right-hand 120px column in the asymmetrical desk grid (`1fr 120px`) exists strictly for marginal breathing room, brief peer notes (`.desk-note`), or subtle technical annotations. It must never hold heavy widgets, multiple stacked interactive cards, or stray decorative doodles.
3. **Zero Stray SVG Doodles:** Never clutter reading surfaces with ungrounded decorative SVG doodles. Technical diagrams must be either:
   - Rehomed cleanly to the dedicated Motion Studio / Vector Lab (`src/animated_svgs.html`), or
   - Embedded directly inline within concept sections at high resolution (1080p) where pedagogical context justifies them.
4. **No Cartoon Emojis:** Mastheads, discipline tabs, and reading titles must use clean typographic styling, never cartoon unicode emojis.
