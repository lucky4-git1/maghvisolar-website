import os
import re
from bs4 import BeautifulSoup

pages = ['home.html', 'residential.html', 'commercial.html', 'housing-societies.html', 'pm-surya-ghar.html', 'pm-kusum.html', 'about-us.html', 'contact.html']

with open('original_pages_analysis.txt', 'w', encoding='utf-8') as out:
    for p in pages:
        path = os.path.join('scraped_pages', p)
        if not os.path.exists(path):
            continue
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            html = f.read()
        
        soup = BeautifulSoup(html, 'html.parser')
        h1s = [h.get_text(strip=True) for h in soup.find_all(['h1', 'h2', 'h3'])]
        imgs = [img.get('src') for img in soup.find_all('img') if img.get('src') and 'uploads' in img.get('src')]
        basenames = [os.path.basename(i) for i in imgs]
        
        out.write(f"\n==================== {p} ====================\n")
        out.write("Headings:\n" + "\n".join(f" - {h}" for h in h1s[:12]) + "\n")
        out.write(f"Upload Images ({len(basenames)}):\n" + "\n".join(f" * {b}" for b in list(dict.fromkeys(basenames))) + "\n")

print("Written to original_pages_analysis.txt")

