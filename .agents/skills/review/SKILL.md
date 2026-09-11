---
name: review
description: "Structured workflow for summarizing conversation history, project progression, code audits, and milestones. Enforces factual grounding against physical files, git logs, and transcripts, strictly preventing hallucinations, superficial taxidermy, or corporate fluff."
---

# /review: The Factual Project & Conversation Summarizer

Activate this skill whenever asked to review, summarize, chronicle, recap progress, audit milestones, or when the user invokes `/review`.

---

## 1. The Core Philosophy

> **"Never write a summary from ungrounded memory. An elegant summary built on fabricated details is nothing more than museum taxidermy."**

A true review is not a creative writing exercise or corporate victory lap. It is an honest, physical mirror of what actually happened, what exists in the repository right now, and what remains pending.

---

## 2. The 5-Step Review Protocol

Before writing any summary, milestone recap, or chronicle, execute these 5 steps:

### Step 1: Hard Evidence Retrieval
- **Check Git History**: Run `git status` and `git log -n 10 --oneline` to verify actual commits, branch names, and staged/unstaged changes.
- **Check Physical Files**: Verify exact file names, sizes, and paths on disk rather than assuming from memory.
- **Check Transcripts**: If summarizing past conversation context, inspect the actual conversation transcript (`transcript.jsonl`) for verbatim user requests, bug reports, and exact technical parameters.

### Step 2: The Ground Truth Audit (Humility Gate)
- Cross-check every numerical or technical claim:
  - SVG dimensions (e.g., true **1080p** standard 1920x1080, not arbitrary thumbnails).
  - Exact CSS rules and selectors (e.g., `span { font-family: inherit !important; }`).
  - Active fonts (e.g., `Roboto Slab`, `Atkinson Hyperlegible`, `Abel`).
  - True branch states (`main`, `beta`, `unstable`).
- If a detail is not verified from disk or transcript, **do not guess or invent it**. Check or explicitly state that it is unverified.

### Step 3: Capture Both the Technical & Human Dynamics
A complete review must capture:
1. **Architectural & Code Milestones**: Real refactors, files modified, tools eliminated (e.g., killing unnecessary background Python servers).
2. **User Directives & Feedback**: Sharp QA catches (e.g., font discrepancies, layout misalignments), humor (e.g., "Sealed Evacuation Nipple"), and boundaries (e.g., study rhythms, cooldown periods).
3. **Established Invariants & Mandates**: Permanent rules born from the work (e.g., *Mandate 6: Turtle Prohibition*, Viewport Liberation, 5:5 Scaffolding).

### Step 4: Status Categorization
Every component reviewed must be placed into one of three unambiguous categories:
- **SHIPPED & VERIFIED**: Confirmed by DOM render, test, or physical file inspection.
- **IN PROGRESS / LOCAL ONLY**: Committed locally but pending external action (e.g., local branch committed but waiting for manual `git push origin --all` due to credential popups).
- **BLOCKED / SHELVED**: Explicitly paused, rejected, or missing tooling (e.g., missing Node.js environment for browser MCP).

### Step 5: Deliver with Zero Fluff
- If the user asks for a brief summary, provide a sharp, bulleted executive brief.
- If the user asks for a comprehensive deep-dive or set word count, fill that space with **rich technical substance, exact derivations, architectural trade-offs, and verifiable history**—never repetitive adjective salads or decorative filler.
