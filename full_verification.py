import glob, sys, os, re
sys.stdout.reconfigure(encoding="utf-8")

print("="*80)
print("              LINE-BY-LINE VERIFICATION SUITE")
print("="*80)

failures = []

# --- CHECK 1: index_clone_beta.html ---
print("\n[CHECK 1] Verifying index_clone_beta.html:")
with open("index_clone_beta.html", "r", encoding="utf-8") as f:
    beta_html = f.read()

# 1a. Companion spotlight markup removed
if "desk-companion-spotlight" in beta_html:
    failures.append("FAIL: desk-companion-spotlight still found in index_clone_beta.html")
    print("  [FAIL] desk-companion-spotlight still present in HTML")
else:
    print("  [PASS] desk-companion-spotlight completely removed from HTML")

# 1b. Companion keyframes CSS removed
for kf in ["turtle-heave", "pendulum-swing", "orbit-circle", "balance-sway", "fl-gait"]:
    if kf in beta_html:
        failures.append(f"FAIL: Keyframe {kf} still found in index_clone_beta.html CSS")
        print(f"  [FAIL] Keyframe {kf} still present")
else:
    print("  [PASS] Companion keyframe animation CSS completely removed")

# 1c. Bottom utility dock right above footer
expected_dock = '<div class="bottom-utility-bar" style="text-align: center; padding: 24px 16px; border-top: 1px solid var(--border-subtle);"><a href="src/animated_svgs.html" class="btn-studio-dock" style="display: inline-flex; align-items: center; gap: 8px; background: var(--bg-surface); border: 1px solid var(--border-strong); padding: 10px 18px; border-radius: 6px; font-family: \'Atkinson Hyperlegible\', sans-serif; font-size: 14px; font-weight: 600; color: var(--ink-black); text-decoration: none;">📐 Open Motion Studio & Vector Lab ↗</a></div>'
if expected_dock in beta_html:
    print("  [PASS] Bottom utility dock exactly matched right above footer")
else:
    failures.append("FAIL: Bottom utility dock markup mismatch in index_clone_beta.html")
    print("  [FAIL] Bottom utility dock markup mismatch")

# 1d. PHY-03 snippet
if "n = (360°/θ) - 1." in beta_html:
    print("  [PASS] PHY-03 snippet character glitch fixed to '(360°/θ) - 1'")
else:
    failures.append("FAIL: PHY-03 snippet character glitch not fixed in index_clone_beta.html")
    print("  [FAIL] PHY-03 snippet glitch still present")

# 1e. Google Fonts in beta
if "family=Abel&family=Atkinson+Hyperlegible" in beta_html and "family=Roboto+Slab" in beta_html:
    print("  [PASS] Google Fonts imports Abel, Roboto Slab, Atkinson Hyperlegible in index_clone_beta.html")
else:
    failures.append("FAIL: Google Fonts link missing required families in index_clone_beta.html")
    print("  [FAIL] Google Fonts link missing families in index_clone_beta.html")


# --- CHECK 2: fonts/fonts.css & styles.css ---
print("\n[CHECK 2] Verifying Global Stylesheet & Typography (fonts/fonts.css & styles.css):")
for fpath in ["fonts/fonts.css", "styles.css"]:
    with open(fpath, "r", encoding="utf-8") as f:
        css = f.read()
    print(f"\n  Checking {fpath}:")
    
    # 2a. @import check
    if "family=Abel&family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Slab:wght@100..900&display=swap" in css:
        print("    [PASS] @import Google Fonts URL correct")
    else:
        failures.append(f"FAIL: {fpath} @import missing exact Google Fonts URL")
        print("    [FAIL] @import Google Fonts URL mismatch")

    # 2b. --font-heading: 'Roboto Slab', serif !important;
    if re.search(r"--font-heading:\s*'Roboto Slab',\s*serif\s*!important;", css):
        print("    [PASS] --font-heading: 'Roboto Slab', serif !important;")
    else:
        failures.append(f"FAIL: {fpath} --font-heading rule mismatch")
        print("    [FAIL] --font-heading rule mismatch")

    # 2c. --font-body: 'Atkinson Hyperlegible', sans-serif !important;
    if re.search(r"--font-body:\s*'Atkinson Hyperlegible',\s*sans-serif\s*!important;", css):
        print("    [PASS] --font-body: 'Atkinson Hyperlegible', sans-serif !important;")
    else:
        failures.append(f"FAIL: {fpath} --font-body rule mismatch")
        print("    [FAIL] --font-body rule mismatch")

    # 2d. .heading, h1, h2, h3, h4, h5, h6, .brand-title
    if re.search(r"\.heading,\s*h1,\s*h2,\s*h3,\s*h4,\s*h5,\s*h6,\s*\.brand-title\s*\{[^}]*font-family:\s*'Roboto Slab',\s*serif\s*!important;", css):
        print("    [PASS] .heading, h1, h2, h3, h4, h5, h6, .brand-title font-family correct")
    else:
        failures.append(f"FAIL: {fpath} heading/brand-title font-family mismatch")
        print("    [FAIL] heading/brand-title font-family mismatch")

    # 2e. .technical-label, .dimension-label, svg text
    if re.search(r"\.technical-label,\s*\.dimension-label,\s*svg\s+text\s*\{[^}]*font-family:\s*'Abel',\s*sans-serif;", css):
        print("    [PASS] .technical-label, .dimension-label, svg text font-family correct")
    else:
        failures.append(f"FAIL: {fpath} technical-label font-family mismatch")
        print("    [FAIL] technical-label font-family mismatch")


# --- CHECK 3: topics/*.html Sanitization across 44 topics ---
print("\n[CHECK 3] Verifying All 44 Topic Files in topics/:")
topics = sorted(glob.glob("topics/*.html"))
print(f"  Found {len(topics)} files to inspect.")

emojis_to_check = ["⚛️", "⚛", "🧪", "🌿", "📐", "📜", "⚗️", "⚗", "âš›"]
emoji_clean_count = 0
latex_clean_count = 0
margin_empty_count = 0

for tpath in topics:
    fname = os.path.basename(tpath)
    with open(tpath, "r", encoding="utf-8") as f:
        tc = f.read()

    # 3a. Cartoon Emojis scrubbed from brand-title
    m_brand = re.search(r'<a[^>]*class=["\'][^"\']*brand-title[^"\']*["\'][^>]*>(.*?)</a>', tc, re.DOTALL)
    if m_brand:
        bt = m_brand.group(1)
        found_em = [em for em in emojis_to_check if em in bt]
        if found_em:
            failures.append(f"FAIL: {fname} brand-title has emojis: {found_em} (text: '{bt}')")
        else:
            emoji_clean_count += 1
    else:
        failures.append(f"FAIL: {fname} brand-title element not found")

    # 3b. Raw LaTeX in header and subtext: no single-dollar math
    m_header = re.search(r'<(?:section|header) class=["\']article-header["\'][^>]*>(.*?)</(?:section|header)>', tc, re.DOTALL)
    if m_header:
        header_text = m_header.group(1)
        dollar_matches = re.findall(r'(?<!\$)\$(?!\$)([^\n\$]+?)(?<!\$)\$(?!\$)', header_text)
        if dollar_matches:
            failures.append(f"FAIL: {fname} header has unescaped raw LaTeX: {dollar_matches}")
        else:
            latex_clean_count += 1
    else:
        failures.append(f"FAIL: {fname} article-header not found")

    # 3c. Empty the 120px Side Margin: no margin-sketch block with doodles
    if "<aside class=\"margin-sketch\"" in tc or "class='margin-sketch'" in tc:
        # check if empty
        m_aside = re.search(r'<aside class=["\']margin-sketch["\'][^>]*>(.*?)</aside>', tc, re.DOTALL)
        if m_aside and m_aside.group(1).strip():
            failures.append(f"FAIL: {fname} margin-sketch still contains content")
        else:
            margin_empty_count += 1
    else:
        # completely removed
        margin_empty_count += 1

print(f"  [SUMMARY] Brand title emoji clean: {emoji_clean_count}/44")
print(f"  [SUMMARY] Header raw LaTeX clean: {latex_clean_count}/44")
print(f"  [SUMMARY] Margin sketch eliminated: {margin_empty_count}/44")

# Check entire topics folder for any single-dollar math in any file
any_dollars = []
for tpath in topics:
    with open(tpath, "r", encoding="utf-8") as f:
        tc = f.read()
    dm = re.findall(r'(?<!\$)\$(?!\$)([^\n\$]+?)(?<!\$)\$(?!\$)', tc)
    if dm:
        any_dollars.append((os.path.basename(tpath), len(dm)))
if any_dollars:
    print(f"  [NOTE] Remaining single-dollar math in files: {any_dollars}")
else:
    print("  [PASS] Zero single-dollar math across all 44 topic files!")

# --- FINAL RESULT ---
print("\n" + "="*80)
if failures:
    print(f"FAILED WITH {len(failures)} ISSUES:")
    for fail in failures:
        print(f"  - {fail}")
    sys.exit(1)
else:
    print("ALL VERIFICATION CHECKS PASSED WITH 100% SUCCESS!")
    print("="*80)
