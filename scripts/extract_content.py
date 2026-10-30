import os
import re
from bs4 import BeautifulSoup
import json

pages = ['home.html', 'residential.html', 'commercial.html', 'housing-societies.html', 'pm-surya-ghar.html', 'pm-kusum.html', 'about-us.html', 'contact.html']

summary = {}

for p in pages:
    path = os.path.join('scraped_pages', p)
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()

    # Search for forms
    forms = []
    form_matches = re.findall(r'<form[\s\S]*?</form>', html, re.I)
    for fm in form_matches:
        action = re.search(r'action=[\'"]([^\'"]*)[\'"]', fm, re.I)
        inputs = re.findall(r'<input[^>]+name=[\'"]([^\'"]+)[\'"][^>]*>', fm, re.I)
        selects = re.findall(r'<select[^>]+name=[\'"]([^\'"]+)[\'"][^>]*>', fm, re.I)
        forms.append({
            'action': action.group(1) if action else '',
            'inputs': inputs,
            'selects': selects
        })

    # Search for headings
    headings = re.findall(r'<h[1-3][^>]*>([\s\S]*?)</h[1-3]>', html, re.I)
    cleaned_headings = [re.sub(r'<[^>]+>', '', h).strip() for h in headings if len(re.sub(r'<[^>]+>', '', h).strip()) > 3]

    # Search for scripts related to calculators or EMI
    calc_scripts = []
    scripts = re.findall(r'<script[\s\S]*?</script>', html, re.I)
    for s in scripts:
        if any(w in s.lower() for w in ['calculator', 'emi', 'proposal', 'subsidy', 'bill', 'kw', 'units']):
            calc_scripts.append(s[:500])

    summary[p] = {
        'headings': cleaned_headings[:15],
        'forms': forms,
        'has_calc_script': len(calc_scripts) > 0,
        'calc_sample': calc_scripts[0] if calc_scripts else ''
    }

with open('scraped_pages/content_summary.json', 'w') as out:
    json.dump(summary, out, indent=2)

print("Content summary written to scraped_pages/content_summary.json")
