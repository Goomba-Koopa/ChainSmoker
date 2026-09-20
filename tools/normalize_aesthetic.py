import os
import re

base_dir = r"C:\Users\chand\.gemini\antigravity\scratch\icse-explainer-desktop\topics"

# 1. Delete legacy/duplicate files
files_to_delete = [
    "biology_04_human_digestive_system.html",
    "physics_04_sound_and_vibrations.html",
    "index.html"
]

for f in files_to_delete:
    path = os.path.join(base_dir, f)
    if os.path.exists(path):
        os.remove(path)
        print(f"[DELETED] {f}")

# 2. Normalize Unique Files
files_to_normalize = [
    "biology_05_human_circulatory_system.html",
    "biology_07_human_excretory_system.html",
    "biology_08_human_nervous_system.html",
    "chemistry_03_elements_compounds_mixtures.html",
    "chemistry_06_acids_bases_salts_indicators.html",
    "chemistry_08_water_solutions_solubility.html",
    "chemistry_09_air_oxygen_combustion.html"
]

master_css = """
    <style>
      :root {
        --bg-warm: #fcfbf9;
        --bg-surface: #f7f5f0;
        --bg-card: #ffffff;
        --border-subtle: #e6dfd3;
        --border-strong: #d3c7b4;
        --ink-black: #121214;
        --ink-secondary: #423d38;
        --ink-muted: #797166;
        --terracotta: #c2410c;
        --terracotta-soft: #fbf0ea;
        --emerald-accent: #059669;
        --emerald-soft: #f0f7f2;
        --font-serif: 'Newsreader', Georgia, serif;
        --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
      }
      body {
        background-color: var(--bg-warm);
        color: var(--ink-black);
        font-family: var(--font-sans);
        line-height: 1.6;
        margin: 0;
        padding: 2rem;
      }
      h1, h2, h3, h4, h5, h6, .serif {
        font-family: var(--font-serif);
        color: var(--ink-black);
      }
      .accent-terracotta { color: var(--terracotta); }
      .accent-emerald { color: var(--emerald-accent); }
    </style>
"""

katex_scripts = """
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body, {delimiters: [{left: '$$', right: '$$', display: true}, {left: '\\\\(', right: '\\\\)', display: false}]});"></script>
"""

for f in files_to_normalize:
    path = os.path.join(base_dir, f)
    if not os.path.exists(path):
        continue
    
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Strip bad styles block
    content = re.sub(r'<style>.*?</style>', '', content, flags=re.DOTALL)
    
    # Purge forbidden corporate SaaS classes
    content = content.replace("bg-slate-50", "")
    content = content.replace("bg-slate-100", "")
    content = content.replace("bg-slate-800", "")
    content = content.replace("text-blue-600", "accent-terracotta")
    content = content.replace("text-blue-500", "accent-terracotta")
    content = content.replace("#2563eb", "var(--terracotta)")
    content = content.replace("font-mono", "")
    
    # Remove monospace badge tags
    content = re.sub(r'\[EDITION \d+\]', '', content)
    
    # Inject Master CSS and KaTeX into head
    if "</head>" in content:
        if "katex.min.css" not in content:
            content = content.replace("</head>", f"{katex_scripts}\n{master_css}\n</head>")
        else:
            content = content.replace("</head>", f"{master_css}\n</head>")
    else:
        # Prepend if no head
        content = f"<head>{katex_scripts}\n{master_css}</head>\n" + content
        
    with open(path, 'w', encoding='utf-8') as file:
        file.write(content)
        print(f"[NORMALIZED] {f}")
