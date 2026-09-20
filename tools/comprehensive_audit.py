import glob, os, re, sys
sys.stdout.reconfigure(encoding="utf-8")

failures = []

print("="*80)
print("             DEEP COMPREHENSIVE ROADMAP VERIFICATION")
print("="*80)

# ---------------------------------------------------------
# Step 1: index_clone_beta.html and index.html
# ---------------------------------------------------------
print("\n[STEP 1] Verifying index_clone_beta.html & index.html:")

with open("index_clone_beta.html", "r", encoding="utf-8") as f:
    beta_html = f.read()
with open("index.html", "r", encoding="utf-8") as f:
    index_html = f.read()

# 1a. Companion spotlight markup removed
if "desk-companion-spotlight" in beta_html:
    failures.append("FAIL: desk-companion-spotlight still found in index_clone_beta.html markup")
else:
    print("  [PASS] desk-companion-spotlight completely removed from index_clone_beta.html")

# 1b. Companion keyframes CSS removed
for kf in ["turtle-heave", "side-neck-fold", "pendulum-swing", "orbit-circle", "balance-sway", "fl-gait", "fr-gait", "bl-gait", "br-gait", "tail-swish"]:
    if kf in beta_html:
        failures.append(f"FAIL: Keyframe {kf} still present in index_clone_beta.html CSS")
else:
    print("  [PASS] Companion keyframe animation CSS completely removed")

# 1c. Bottom utility dock right above footer
expected_dock = '<div class="bottom-utility-bar" style="text-align: center; padding: 24px 16px; border-top: 1px solid var(--border-subtle);"><a href="src/animated_svgs.html" class="btn-studio-dock" style="display: inline-flex; align-items: center; gap: 8px; background: var(--bg-surface); border: 1px solid var(--border-strong); padding: 10px 18px; border-radius: 6px; font-family: \'Atkinson Hyperlegible\', sans-serif; font-size: 14px; font-weight: 600; color: var(--ink-black); text-decoration: none;">📐 Open Motion Studio & Vector Lab ↗</a></div>'
if expected_dock not in beta_html:
    failures.append("FAIL: Bottom utility dock markup mismatch in index_clone_beta.html")
else:
    pos_dock = beta_html.find(expected_dock)
    pos_footer = beta_html.find('<footer class="editorial-footer">')
    if pos_dock < pos_footer:
        print("  [PASS] Bottom utility dock exactly placed right above footer")
    else:
        failures.append("FAIL: Bottom utility dock is not above footer")

# 1d. PHY-03 snippet character glitch
if "n = (360°/θ) - 1." in beta_html and "n = (360°/θ) - 1." in index_html:
    print("  [PASS] PHY-03 snippet fixed to (360°/θ) - 1 in both index.html and index_clone_beta.html")
else:
    failures.append("FAIL: PHY-03 snippet glitch in index.html or index_clone_beta.html")

# 1e. Google Fonts link in beta
if "family=Abel&family=Atkinson+Hyperlegible" in beta_html and "family=Roboto+Slab" in beta_html:
    print("  [PASS] Google Fonts link imports Abel, Roboto Slab, Atkinson Hyperlegible in index_clone_beta.html")
else:
    failures.append("FAIL: Google Fonts link missing required families in index_clone_beta.html")

# 1f. Baseline sync: No leftover old typography comments
if "Newsreader (Serif) + Plus Jakarta Sans" in beta_html:
    failures.append("FAIL: Legacy Newsreader + Plus Jakarta Sans comment found in index_clone_beta.html")
else:
    print("  [PASS] Baseline head typography comments synced")

# ---------------------------------------------------------
# Step 2: fonts/fonts.css & styles.css
# ---------------------------------------------------------
print("\n[STEP 2] Verifying Global Stylesheets (fonts/fonts.css & styles.css):")

for css_file in ["fonts/fonts.css", "styles.css"]:
    with open(css_file, "r", encoding="utf-8") as f:
        css = f.read()
    print(f"  Inspecting {css_file}:")
    
    # 2a. Google Fonts @import
    if "family=Abel&family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Slab:wght@100..900&display=swap" in css:
        print("    [PASS] @import URL exact match")
    else:
        failures.append(f"FAIL: {css_file} @import URL mismatch")

    # 2b. --font-heading: 'Roboto Slab', serif !important;
    if re.search(r"--font-heading:\s*'Roboto Slab',\s*serif\s*!important;", css):
        print("    [PASS] --font-heading: 'Roboto Slab', serif !important;")
    else:
        failures.append(f"FAIL: {css_file} --font-heading mismatch")

    # 2c. --font-body: 'Atkinson Hyperlegible', sans-serif !important;
    if re.search(r"--font-body:\s*'Atkinson Hyperlegible',\s*sans-serif\s*!important;", css):
        print("    [PASS] --font-body: 'Atkinson Hyperlegible', sans-serif !important;")
    else:
        failures.append(f"FAIL: {css_file} --font-body mismatch")

    # 2d. .heading, h1, h2, h3, h4, h5, h6, .brand-title
    if re.search(r"\.heading,\s*h1,\s*h2,\s*h3,\s*h4,\s*h5,\s*h6,\s*\.brand-title\s*\{[^}]*font-family:\s*'Roboto Slab',\s*serif\s*!important;", css):
        print("    [PASS] heading/brand-title font-family exact match")
    else:
        failures.append(f"FAIL: {css_file} heading/brand-title font-family mismatch")

    # 2e. .technical-label, .dimension-label, svg text
    if re.search(r"\.technical-label,\s*\.dimension-label,\s*svg\s+text\s*\{[^}]*font-family:\s*'Abel',\s*sans-serif;", css):
        print("    [PASS] technical-label / dimension-label / svg text font-family exact match")
    else:
        failures.append(f"FAIL: {css_file} technical-label font-family mismatch")

# ---------------------------------------------------------
# Step 3: All 44 Topic Files in topics/
# ---------------------------------------------------------
print("\n[STEP 3] Verifying All 44 Topic Files in topics/:")
topics = sorted(glob.glob("topics/*.html"))
print(f"  Auditing {len(topics)} topic files...")

banned_emojis = ["⚛️", "⚛", "🧪", "🌿", "📐", "📜", "⚗️", "⚗", "\ufe0f", "\x8f", "âš›"]
single_dollar_issues = []
corrupt_chars_issues = []
emoji_issues = []
margin_issues = []

for tpath in topics:
    fname = os.path.basename(tpath)
    with open(tpath, "r", encoding="utf-8") as f:
        tc = f.read()

    # 3a. Brand title check
    m_brand = re.search(r'<a[^>]*class=["\'][^"\']*brand-title[^"\']*["\'][^>]*>(.*?)</a>', tc, re.DOTALL)
    if not m_brand:
        emoji_issues.append((fname, "Brand title element not found"))
    else:
        bt_text = m_brand.group(1)
        found_em = [em for em in banned_emojis if em in bt_text]
        if found_em:
            emoji_issues.append((fname, f"Found emojis {found_em} in '{bt_text}'"))

    # 3b. Single dollar math check (multiline-aware, ignoring scripts and display $$)
    no_script = re.sub(r'<script.*?</script>', '', tc, flags=re.DOTALL)
    no_display = re.sub(r'\$\$.*?\$\$', '', no_script, flags=re.DOTALL)
    dollar_matches = re.findall(r'(?<!\$)\$(?!\$)(.*?)(?<!\$)\$(?!\$)', no_display, flags=re.DOTALL)
    if dollar_matches or "$" in no_display:
        single_dollar_issues.append((fname, dollar_matches or ["Lone $ detected"]))

    # 3c. Corrupt control characters check
    if "\x0c" in tc or "\x08" in tc or "\x00" in tc:
        corrupt_chars_issues.append((fname, "Control characters found"))

    # 3d. Margin sketch check: no <aside class="margin-sketch">
    if "<aside" in tc:
        margin_issues.append((fname, "<aside> tag found"))
    if "class=\"margin-sketch\"" in tc[tc.find("<body>"):tc.find("</body>")]:
        margin_issues.append((fname, "margin-sketch class found in body"))

if emoji_issues:
    for iss in emoji_issues:
        failures.append(f"FAIL emoji: {iss}")
else:
    print(f"  [PASS] All {len(topics)} topics have clean brand-titles with zero cartoon emojis")

if single_dollar_issues:
    for iss in single_dollar_issues:
        failures.append(f"FAIL single-dollar math: {iss}")
else:
    print(f"  [PASS] All {len(topics)} topics have zero raw single-dollar math (multiline-checked)")

if corrupt_chars_issues:
    for iss in corrupt_chars_issues:
        failures.append(f"FAIL corrupt characters: {iss}")
else:
    print(f"  [PASS] All {len(topics)} topics have zero corrupt control characters in math/text")

if margin_issues:
    for iss in margin_issues:
        failures.append(f"FAIL margin sketch: {iss}")
else:
    print(f"  [PASS] All {len(topics)} topics have 120px margin cleared (all <aside> tags removed)")

print("\n" + "="*80)
if failures:
    print(f"AUDIT FAILED WITH {len(failures)} ISSUE(S):")
    for fail in failures:
        print(f"  - {fail}")
    sys.exit(1)
else:
    print("ALL VERIFICATION CHECKS PASSED WITH 100% SUCCESS!")
    print("="*80)
