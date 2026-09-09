---
name: crisp-1080p-svg-drafting
description: "Guidelines and multi-step workflows for drafting razor-sharp, hardware-accelerated technical SVGs in browsers using the 1080p standard and Google Font Abel."
---

# Crisp 1080p Technical SVG Drafting

Use this skill whenever creating, modifying, or animating SVGs for science and mathematics schematics.

## 1. Why SVGs Blur During Motion (The Root Cause)
When SVG elements are animated via CSS `transform` (`translate`, `rotate`, `scale`), browser compositors (Chromium/WebKit) promote that element to an isolated GPU layer. By default, the rasterizer captures a single low-resolution bitmap quad at layout time. During animation frames, the GPU samples and interpolates this texture using bilinear filtering, resulting in fuzzy, blurry lines and illegible text.

## 2. The 1080p Coordinate Standard (`viewBox="0 0 1920 1080"`)
- **Integer Scaling:** 1080p scales with a clean 2x integer multiplier to 4K displays with zero fractional interpolation fuzz (unlike 1440p which uses an imperfect 1.5x scale).
- **VRAM Efficiency:** 1080p requires only ~8.3MB of texture buffer memory, compared to 33.2MB for 4K, maintaining a locked 60 FPS on low-power student devices and mobile browsers.
- **Label Grid Snap:** Text set at 28px–34px inside a 1080p viewBox has ample subpixel sampling headroom, preventing glyph collapse.

## 3. Mandatory SVG Rendering Attributes
Every technical `<svg>` must declare:
```xml
<svg viewBox="0 0 1920 1080"
     shape-rendering="geometricPrecision"
     text-rendering="geometricPrecision"
     xmlns="http://www.w3.org/2000/svg">
```

## 4. Typography Rules: Standardize on Abel
- Never use serif fonts (like Newsreader) for SVG labels; tiny serifs blur when transformed.
- Always use **Google Font Abel** (`font-family: var(--font-abel), sans-serif;`).
- Keep font styles upright (`font-style: normal;`). Abel's tall x-height, open apertures, and condensed architectural stems provide maximum legibility at compact coordinates.

## 5. CSS Motion & Anti-Blur Engine Rules
In CSS, apply the following to prevent texture downsampling:
```css
.anim-svg {
  shape-rendering: geometricPrecision;
  text-rendering: geometricPrecision;
  image-rendering: -webkit-optimize-contrast;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Ensure rotational pivots calculate from vector coordinates, not raster quads */
.anim-svg * {
  transform-box: view-box;
}

.anim-svg text {
  font-family: var(--font-abel), sans-serif !important;
  font-style: normal !important;
  letter-spacing: 0.04em;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
}
```

## 6. Pedagogical Authenticity & Avoiding "Taxidermy"
- **Physical Fidelity:** Parallel translatory displacement arrows ($AB \parallel A'B'$), gravity-stabilized balance pans, and exact geometric angle sweeps.
- **No Over-Engineered Taxidermy:** When modeling organic companions or characters, do NOT over-engineer an anatomical specimen that strips away warmth and character. If drawing a partner's real pet, wait for their actual reference photos!
