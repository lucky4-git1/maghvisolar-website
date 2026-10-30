import subprocess
import os
import time

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
os.makedirs("screenshots", exist_ok=True)

routes = [
    ('/', 'home_desktop', (1440, 900)),
    ('/', 'home_mobile', (390, 844)),
    ('/residential', 'residential_desktop', (1440, 900)),
    ('/commercial', 'commercial_desktop', (1440, 900)),
    ('/calculator', 'calculator_desktop', (1440, 900)),
    ('/pm-surya-ghar', 'pmsuryaghar_desktop', (1440, 900)),
]

for route, name, (w, h) in routes:
    url = f"http://localhost:5174{route}"
    out_file = os.path.abspath(f"screenshots/{name}.png")
    cmd = [
        chrome_path,
        "--headless=new",
        f"--window-size={w},{h}",
        f"--screenshot={out_file}",
        "--hide-scrollbars",
        "--disable-gpu",
        url
    ]
    print(f"Capturing {url} at {w}x{h} -> {name}.png...")
    try:
        subprocess.run(cmd, timeout=15, check=True)
        if os.path.exists(out_file):
            print(f"Captured {name}.png ({os.path.getsize(out_file)} bytes)")
    except Exception as e:
        print(f"Failed to capture {name}: {e}")

print("Screenshot capture complete.")
