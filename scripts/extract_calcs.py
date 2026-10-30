import re

with open('scraped_pages/home.html', 'r', encoding='utf-8', errors='ignore') as f:
    h = f.read()

scripts = re.findall(r'<script[\s\S]*?</script>', h)
extracted = []
for i, s in enumerate(scripts):
    if any(k in s.lower() for k in ['const data={', 'solarloan', 'emi', 'calculate', 'proposal']):
        extracted.append(f"// Script {i}\n" + s)

with open('scraped_pages/calculator_source.js', 'w', encoding='utf-8') as out:
    out.write("\n\n// ===================\n\n".join(extracted))

print("Extracted", len(extracted), "calculator scripts.")
