import os
import re
import ssl
import json
import urllib.request
from urllib.parse import urljoin, urlparse

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

def fetch_url(url):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
            return resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""

def main():
    with open('scraped_home.html', 'r', encoding='utf-8', errors='ignore') as f:
        home_html = f.read()

    # Find all links
    raw_links = re.findall(r'href=[\'"]([^\'"]+)', home_html)
    routes = set()
    for l in raw_links:
        if l.startswith('#') or l.startswith('javascript:') or l.startswith('mailto:') or l.startswith('tel:'):
            continue
        full = urljoin('https://meghvisolar.com/', l)
        p = urlparse(full)
        if 'meghvisolar.com' in p.netloc:
            # normalize path
            path = p.path.rstrip('/')
            if not path:
                path = '/'
            routes.add(path)

    print("Detected routes:", sorted(routes))

    # Also extract title, meta tags, forms, contact info
    title = re.search(r'<title>(.*?)</title>', home_html, re.I)
    print("Home Title:", title.group(1) if title else "N/A")

    # Download each route to inspect content
    os.makedirs('scraped_pages', exist_ok=True)
    pages_data = {}
    for r in sorted(routes):
        clean_name = "home" if r == "/" else r.strip("/").replace("/", "_")
        url = urljoin('https://meghvisolar.com/', r)
        print(f"Fetching {url} -> {clean_name}...")
        html = fetch_url(url)
        if html:
            with open(f"scraped_pages/{clean_name}.html", "w", encoding="utf-8") as pf:
                pf.write(html)
            # Find title
            t = re.search(r'<title>(.*?)</title>', html, re.I)
            pages_data[r] = {
                'title': t.group(1) if t else '',
                'url': url,
                'file': f"scraped_pages/{clean_name}.html"
            }

    with open('scraped_pages/routes_summary.json', 'w') as sf:
        json.dump(pages_data, sf, indent=2)

    # Scrape all images referenced
    all_imgs = set(re.findall(r'src=[\'"]([^\'"]+\.(?:png|jpg|jpeg|webp|svg))', home_html, re.I))
    print(f"Found {len(all_imgs)} image references in home.")
    os.makedirs('scraped_assets', exist_ok=True)
    img_list = []
    for img_src in sorted(all_imgs):
        full_img_url = urljoin('https://meghvisolar.com/', img_src)
        filename = os.path.basename(urlparse(full_img_url).path)
        if filename:
            img_list.append((full_img_url, filename))

    print(f"Downloading {len(img_list)} images...")
    for full_img_url, filename in img_list[:30]:
        try:
            req = urllib.request.Request(full_img_url, headers=HEADERS)
            with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
                data = resp.read()
                dest = os.path.join('scraped_assets', filename)
                with open(dest, 'wb') as f:
                    f.write(data)
                print(f"Saved asset: {filename} ({len(data)} bytes)")
        except Exception as e:
            print(f"Failed to fetch image {full_img_url}: {e}")

if __name__ == '__main__':
    main()
