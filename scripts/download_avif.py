import os
import re
import ssl
import urllib.request
from urllib.parse import urljoin, urlparse, quote

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

def safe_download(img_url, dest_folder):
    try:
        p = urlparse(img_url)
        quoted_path = quote(p.path)
        safe_url = f"{p.scheme}://{p.netloc}{quoted_path}"
        filename = os.path.basename(p.path)
        clean_filename = re.sub(r'[^\w\-_\.]', '_', filename)
        if not clean_filename:
            return None
        dest_path = os.path.join(dest_folder, clean_filename)
        if os.path.exists(dest_path) and os.path.getsize(dest_path) > 0:
            print(f"Already have {clean_filename}")
            return clean_filename
        req = urllib.request.Request(safe_url, headers=HEADERS)
        with urllib.request.urlopen(req, context=ctx, timeout=12) as resp:
            data = resp.read()
            with open(dest_path, 'wb') as f:
                f.write(data)
            print(f"Downloaded {clean_filename} ({len(data)} bytes)")
            return clean_filename
    except Exception as e:
        print(f"Error fetching {img_url}: {e}")
        return None

def main():
    dest_dir = "public/assets"
    os.makedirs(dest_dir, exist_ok=True)
    all_imgs = set()

    pages = ['home.html', 'residential.html', 'commercial.html', 'housing-societies.html', 'pm-surya-ghar.html', 'pm-kusum.html', 'about-us.html', 'contact.html']
    for p in pages:
        path = os.path.join('scraped_pages', p)
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                matches = re.findall(r'src=[\'"]([^\'"]+\.(?:avif|png|jpg|jpeg|webp|svg))', content, re.I)
                for m in matches:
                    if 'meghvisolar.com' in m or m.startswith('/'):
                        full = urljoin('https://meghvisolar.com/', m)
                        all_imgs.add(full)

    print(f"Total unique images to check: {len(all_imgs)}")
    for img in sorted(all_imgs):
        safe_download(img, dest_dir)

if __name__ == '__main__':
    main()
