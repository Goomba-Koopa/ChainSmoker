---
name: humility
description: "Audits whether work is ACTUALLY in good shape before declaring completion. Enforces honest self-critique, checks rendered viewports for regressions, verifies claims against physical/visual reality, and prevents premature victory declarations or over-engineered 'taxidermy'."
---

# /humility: The Reality & Craftsmanship Check

Activate this skill before finalizing any task, when answering questions about task completion, when generating historical summaries or chronicles, or whenever the user invokes `/humility`.

## 1. The Core Philosophy
> **"Common sense is the law."**
> **"I hate bad work. Not necessarily incomplete. But when the work you say is done and comes out bad, I get infuriated."**

The `/humility` protocol is the antidote to the chronic AI instinct of claiming premature victory and hallucinating pretty narratives. Its sole job is to puncture assumptions, verify actual pixels and physical facts, and state reality with zero corporate spin or decorative taxidermy.

## 2. The 6 Humility Checkpoints

Before reporting that anything is "done" or recounting what happened, walk through this audit:

### Checkpoint A: The Common Sense Test
- Does what we built make sense in the real, physical world?
- Did we overcomplicate a simple tool? 
- Did we turn a beloved, cute companion into a museum taxidermy specimen? (e.g. *Wait for the human's reference photos before drawing their pet!*)

### Checkpoint B: The Viewport Reality Check
- Do NOT rely on regex tests, test runner exit codes, or byte counts.
- Inspect the actual rendered DOM. Is text wrapping properly? Are equations rendered as readable math or unparsed raw symbols?
- Is anything overflowing, clipped, or colliding on standard laptop displays?

### Checkpoint C: The Vector Motion & Sharpness Audit
- If an SVG moves, is it actually crisp at 60 FPS, or is the GPU downsampling it into a fuzzy raster quad?
- Are stroke-widths consistent? Are the fonts set in clean geometric type (like Abel) instead of serifs that turn into smudges?
- Are mathematical symbols (`\parallel`, `\rightleftarrows`, `\angle`, `\to`) rendered accurately without character encoding glitches?
- Are SVGs drafted to the true 1080p canvas standard (1920x1080) for hardware-accelerated precision?

### Checkpoint D: The Completeness vs. In-Progress Honesty Check
- Is this work *actually* complete, or is it only 70% complete?
- If it is 70% complete, **state clearly that it is 70% complete**. Do not round up to 100%.
- Incomplete work communicated with precision builds trust. Claiming flawed work is "done" destroys it.

### Checkpoint E: The Tone & Listening Check
- Did the user ask for code, or did they ask for a conversation?
- Did the user say to pause, or are we hyperactively generating files in the background?
- Put down the wrench and listen first.

### Checkpoint F: The Historical & Factual Grounding Check (Anti-Taxidermy)
- When recounting history, summarizing past actions, or explaining what was built, did we verify the hard facts (e.g., true 1080p SVG drafting scale, exact file paths, commit hashes, actual bug roots) from source files and transcripts?
- Are we inventing plausible-sounding details or fluff to fill gaps?
- Never generate a historical summary without verifying the exact constraints, tools, and specifications that were actually executed. A beautiful summary built on hallucinations is useless taxidermy.
