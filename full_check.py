#!/usr/bin/env python3
"""
AXIOM ICSE Class 7 Comprehensive Audit Suite (full_check.py)
Validates all 44 topics across Physics, Chemistry, Biology, and Mathematics
against 12 rigorous editorial and structural quality criteria:
1. Depth Check (Minimum 12,000 bytes)
2. Left-Aligned Layout Check (1fr 120px asymmetrical grid layout)
3. Typography Check (Newsreader + Plus Jakarta Sans)
4. KaTeX Math Check
5. Worked Problems Check (At least 2 worked problem boxes)
6. Collapsible Solution Drawers Check
7. Conceptual Reasoning / Curiosity Check (At least 2 reasoning Q&As)
8. Heads-Up Callouts (Emerald callouts for student cognitive traps)
9. Masthead Backlink to ../index.html
10. Clean Language Check (Zero exemplar(s), compendium(s), canonical(s))
11. Scope Check (No out-of-scope high school physics/chemistry terms)
12. Bespoke Margin Sketch, SVG Validation & Discipline Color Palette Check
"""

import os
import sys
import re
import json

TOPICS_DIR = r"C:\Users\chand\.gemini\antigravity\scratch\icse-explainer-desktop\topics"
TOPIC_ORDER_PATH = r"C:\Users\chand\.gemini\antigravity\scratch\icse-explainer-desktop\topic_order.json"

BANNED_OUT_OF_SCOPE = [
    "bernoulli", "navier-stokes", "hamiltonian", "schrodinger",
    "differential equation", "avogadro constant"
]

BANNED_PRETENTIOUS_TERMS = [
    "exemplar", "compendium", "canonical", "axiom"
]

DISCIPLINE_PALETTES = {
    "physics": {"wash": "#fbf0ea", "accent": "#c2410c"},
    "chemistry": {"wash": "#f0f7f2", "accent": "#15803d"},
    "biology": {"wash": "#edf5ef", "accent": "#2e382b"},
    "math": {"wash": "#fef8ea", "accent": "#d97706"}
}

def audit_topic(filepath):
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()

    size = os.path.getsize(filepath)
    issues = []

    # 1. Depth Check (Minimum 12,000 bytes)
    if size < 12000:
        issues.append(f"[DEPTH] Size {size} bytes is below 12,000 byte minimum threshold")

    # 2. Left-Aligned Layout Check (No centered reading prose, has 1fr 120px grid)
    if "grid-template-columns: 1fr 120px" not in html and "1fr 120px" not in html:
        issues.append("[LAYOUT] Missing required 1fr 120px asymmetrical grid layout")
    if "margin: 0 auto" in html:
        if re.search(r'\.(article-body|main-canvas|article-header)\s*\{[^}]*margin:\s*0\s+auto', html):
            issues.append("[LAYOUT] Centered prose styling (margin: 0 auto) detected")

    # 3. Typography Check (Newsreader + Plus Jakarta Sans)
    if "Newsreader" not in html or "Plus Jakarta Sans" not in html:
        issues.append("[TYPOGRAPHY] Missing Newsreader or Plus Jakarta Sans fonts")

    # 4. KaTeX Math Check
    has_katex = ("$" in html) or ("\\(" in html) or ("\\frac" in html) or ("katex" in html.lower())
    if not has_katex:
        issues.append("[MATH] Missing KaTeX mathematical delimiters or formulas")

    # 5. Worked Problems Check (At least 2 worked problems)
    prob_count = len(re.findall(r'class\s*=\s*["\']problem-box["\']', html))
    if prob_count < 2:
        alt_probs = len(re.findall(r'problem-header|problem-title', html))
        if alt_probs < 2:
            issues.append(f"[PROBLEMS] Only found {prob_count} worked problem boxes (minimum 2 required)")

    # 6. Collapsible Solution Drawers Check
    has_drawers = ("toggleSolution" in html or "solution-drawer" in html or "btn-toggle" in html)
    if not has_drawers:
        issues.append("[DRAWERS] Missing interactive solution reveal drawers or toggle functions")

    # 7. Conceptual Reasoning / Curiosity Check (At least 2 reasoning Q&As)
    reason_count = len(re.findall(r'class\s*=\s*["\']reasoning-(question|qa|item)["\']', html))
    if reason_count < 2:
        alt_reason = len(re.findall(r'toggleReasoning|Curiosity\s+\d+|Give Scientific Reason', html, re.IGNORECASE))
        if alt_reason < 2:
            issues.append(f"[REASONING] Only found {reason_count} conceptual reasoning items (minimum 2 required)")

    # 8. Heads-Up Callouts (Friendly student tips & misconceptions)
    has_headsup = ("headsup-box" in html or "heads-up" in html.lower() or "trap-box" in html or "misconception" in html.lower())
    if not has_headsup:
        issues.append("[HEADS_UP] Missing friendly Heads-Up callout box")

    # 9. Backlink to Index
    if 'href="../index.html"' not in html and "href='/index.html'" not in html:
        issues.append("[NAV] Missing masthead backlink to ../index.html")

    # 10. Clean Language Check (Zero exemplar(s), compendium(s), canonical(s))
    for term in BANNED_PRETENTIOUS_TERMS:
        matches = re.findall(rf'\b{term}s?\b', html, re.IGNORECASE)
        if matches:
            issues.append(f"[LANGUAGE] Found forbidden term '{term}' ({len(matches)} occurrences)")

    # 11. Scope Check (No out-of-scope high school physics/chemistry terms)
    for term in BANNED_OUT_OF_SCOPE:
        if term in html.lower():
            issues.append(f"[SCOPE] Detected out-of-syllabus term: '{term}'")

    # 12. Bespoke Margin Sketch, SVG Validation & Discipline Color Palette Check
    if "margin-sketch" not in html or "desk-note" not in html:
        issues.append("[MARGIN] Missing required .margin-sketch or .desk-note component")
    
    if "<svg" in html.lower():
        if "viewbox" not in html.lower() or "xmlns" not in html.lower():
            issues.append("[SVG] Malformed SVG detected missing viewBox or xmlns attributes")
        
        # Check palette in margin sketch
        m = re.search(r'<aside class="margin-sketch"[^>]*>(.*?)</aside>', html, re.DOTALL)
        if m:
            aside_content = m.group(1).lower()
            disc = filename.split("_")[0]
            if disc in DISCIPLINE_PALETTES:
                palette = DISCIPLINE_PALETTES[disc]
                if palette["wash"] not in aside_content:
                    issues.append(f"[PALETTE] Missing discipline wash {palette['wash']} in margin sketch")
                if palette["accent"] not in aside_content:
                    issues.append(f"[PALETTE] Missing discipline accent {palette['accent']} in margin sketch")
        else:
            issues.append("[MARGIN] Could not locate <aside class='margin-sketch'> block")

    return issues

def main():
    if not os.path.exists(TOPICS_DIR):
        print(f"Error: Topics directory not found at {TOPICS_DIR}")
        sys.exit(1)

    topics = [f for f in sorted(os.listdir(TOPICS_DIR)) if f.endswith(".html")]
    print("="*80)
    print("          AXIOM ICSE 7 // FULL AUDIT SUITE (44 TOPICS)")
    print("="*80)
    print(f"Scanning {len(topics)} topic files in {TOPICS_DIR}...\n")

    total_topics = len(topics)
    passed_topics = 0
    failed_topics = 0

    for t in topics:
        fpath = os.path.join(TOPICS_DIR, t)
        issues = audit_topic(fpath)

        if not issues:
            passed_topics += 1
            print(f"  [PASS] {t}")
        else:
            failed_topics += 1
            print(f"  [FAIL] {t} ({len(issues)} issues)")
            for iss in issues:
                print(f"         -> {iss}")

    print("\n" + "="*80)
    print(f"AUDIT SUMMARY: {passed_topics}/{total_topics} passed ({(passed_topics/total_topics)*100:.1f}%)")
    print("="*80)

    # Validate topic_order.json
    if os.path.exists(TOPIC_ORDER_PATH):
        with open(TOPIC_ORDER_PATH, "r", encoding="utf-8") as f:
            order_data = json.load(f)
        if len(order_data) != total_topics:
            print(f"Warning: topic_order.json has {len(order_data)} topics, expected {total_topics}")

    if failed_topics > 0:
        print(f"\nResult: FAILED ({failed_topics} topics have issues that need resolution)")
        return 1
    else:
        print("\nResult: 100% CLEAN BILL OF HEALTH ACROSS ALL 44 TOPICS!")
        return 0

if __name__ == "__main__":
    sys.exit(main())
