import os, re, json

topics_dir = r"C:\Users\chand\.gemini\antigravity\scratch\icse-explainer-desktop\topics"
with open(r"C:\Users\chand\.gemini\antigravity\scratch\icse-explainer-desktop\topic_order.json") as f:
    files = json.load(f)

summary = {}
for fname in files:
    fpath = os.path.join(topics_dir, fname)
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    
    title_m = re.search(r'<h1[^>]*class=["\']topic-title["\'][^>]*>(.*?)</h1>', content, re.DOTALL)
    title = title_m.group(1).strip() if title_m else fname
    title = re.sub(r'<[^>]+>', '', title)
    
    subtext_m = re.search(r'<p[^>]*class=["\']topic-subtext["\'][^>]*>(.*?)</p>', content, re.DOTALL)
    subtext = subtext_m.group(1).strip() if subtext_m else ''
    subtext = re.sub(r'<[^>]+>', '', subtext)
    
    sections = re.findall(r'<h2[^>]*class=["\']section-heading["\'][^>]*>(.*?)</h2>', content)
    clean_sections = [re.sub(r'<[^>]+>', '', s).strip() for s in sections]
    
    # Also find any specific physical anchors or key formulas mentioned
    formulas = re.findall(r'\$\$([^$]+)\$\$', content)
    clean_formulas = [f.strip() for f in formulas[:4]]
    
    summary[fname] = {
        "title": title,
        "subtext": subtext,
        "sections": clean_sections,
        "key_formulas": clean_formulas
    }

with open("topics_analyzed.json", "w", encoding="utf-8") as f:
    json.dump(summary, f, indent=2)

print(f"Successfully analyzed {len(summary)} topics.")
