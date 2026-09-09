import glob, sys, os, re
sys.stdout.reconfigure(encoding="utf-8")

TOPICS_DIR = "topics"
topics = sorted(glob.glob(os.path.join(TOPICS_DIR, "*.html")))
print(f"Starting sanitization of {len(topics)} topic files...")

def sanitize_brand_title(title_html):
    title_html = title_html.replace("âš›ï¸\x8f", "").replace("âš›ï¸", "")
    title_html = title_html.replace("â€¢", "•")
    for em in ["⚛️", "⚛", "🧪", "🌿", "📐", "📜", "⚗️", "⚗", "\ufe0f", "\x8f"]:
        title_html = title_html.replace(em, "")
    title_html = title_html.strip()
    return title_html

def fix_mojibake_physics_07(text):
    text = text.replace("âš›ï¸\x8f", "")
    text = text.replace("âš›ï¸", "")
    text = text.replace("â€¢", "•")
    text = text.replace("â†\x90", "←")
    text = text.replace("â† ", "←")
    text = text.replace("â†“", "↓")
    text = text.replace("âˆ’", "−")
    text = text.replace("Â°C", "°C")
    text = text.replace("Â°F", "°F")
    text = text.replace("Â°", "°")
    text = text.replace("0°Câ€“4°C", "0°C–4°C")
    text = text.replace("â€“", "–")
    return text

results = []

for tpath in topics:
    fname = os.path.basename(tpath)
    with open(tpath, "r", encoding="utf-8") as f:
        content = f.read()

    orig_len = len(content)
    
    # 0. Fix mojibake in physics_07 if present
    if fname == "physics_07_heat_and_temperature.html":
        content = fix_mojibake_physics_07(content)

    # 1. Scrub Cartoon Emojis from <a class="brand-title">
    def repl_brand(match):
        pre, text, post = match.group(1), match.group(2), match.group(3)
        clean_text = sanitize_brand_title(text)
        return f"{pre}{clean_text}{post}"

    content = re.sub(
        r'(<a[^>]*class=["\'][^"\']*brand-title[^"\']*["\'][^>]*>)(.*?)(</a>)',
        repl_brand,
        content,
        flags=re.DOTALL
    )

    # 2. Fix Raw LaTeX: In topic headers and subtexts (and body math), replace single-dollar inline math $math$ with \(math\)
    # First, handle article-header explicitly:
    def repl_header_math(m_header):
        h_text = m_header.group(0)
        # replace $...$ with \(...\)
        h_text = re.sub(r'(?<!\$)\$(?!\$)([^\n\$]+?)(?<!\$)\$(?!\$)', r'\(\1\)', h_text)
        return h_text

    content = re.sub(r'<section class=["\']article-header["\'][^>]*>.*?</section>', repl_header_math, content, flags=re.DOTALL)

    # Also replace any remaining single-dollar math throughout the file (e.g. physics_08, chemistry_09)
    content = re.sub(r'(?<!\$)\$(?!\$)([^\n\$]+?)(?<!\$)\$(?!\$)', r'\(\1\)', content)

    # 3. Empty the 120px Side Margin: Remove <aside class="margin-sketch">...</aside>
    margin_sketch_pattern = r'\s*(?:<!--\s*120PX DESK MARGIN:[^\n]*-->\s*)?<aside class=["\']margin-sketch["\'][^>]*>.*?</aside>'
    sketch_removed = False
    if re.search(margin_sketch_pattern, content, re.DOTALL):
        content = re.sub(margin_sketch_pattern, '', content, flags=re.DOTALL)
        sketch_removed = True

    # 4. Update font variables in <style>
    content = re.sub(
        r"--font-heading:\s*'[^']+',[^;]+;\s*--font-serif:\s*'[^']+',[^;]+;\s*--font-body:\s*'[^']+',[^;]+;\s*--font-sans:\s*'[^']+',[^;]+;",
        "--font-heading: 'Roboto Slab', serif;\n      --font-serif: 'Roboto Slab', serif;\n      --font-body: 'Atkinson Hyperlegible', sans-serif;\n      --font-sans: 'Atkinson Hyperlegible', sans-serif;",
        content
    )

    # 5. Update footer font credits if present
    content = re.sub(
        r'<div>(?:Zilla Slab|Newsreader|Hepta Slab)[^<]*• KaTeX for math</div>',
        '<div>Roboto Slab &amp; Atkinson Hyperlegible • KaTeX for math</div>',
        content
    )

    with open(tpath, "w", encoding="utf-8") as f:
        f.write(content)

    results.append((fname, sketch_removed, orig_len - len(content)))

print("\n--- SANITIZATION VERIFICATION SUMMARY ---")
for fname, removed, bytes_reduced in results:
    status = "CLEANED" if removed else "NO_SKETCH"
    print(f"[{status}] {fname} (delta: -{bytes_reduced} bytes)")

print(f"\nCompleted sanitization across all {len(results)} topic files.")
