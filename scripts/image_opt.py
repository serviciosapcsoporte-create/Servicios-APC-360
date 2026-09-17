import os, sys, subprocess
try:
    from PIL import Image
except ImportError:
    print("PIL not available, installing...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

# Check logo.png
img = Image.open("public/logo.png")
print(f"Logo original: {img.size}")

# Convert to WebP with proper dimensions
img_webp = img.convert("RGB")
img_webp.save("public/logo.webp", "WEBP", quality=75, method=6)
img_webp_small = img.resize((120, 120)).convert("RGB")
img_webp_small.save("public/logo-small.webp", "WEBP", quality=75, method=6)
print("Created logo.webp and logo-small.webp")

# Check file sizes
orig_size = os.path.getsize("public/logo.png") / 1024
webp_size = os.path.getsize("public/logo.webp") / 1024
small_size = os.path.getsize("public/logo-small.webp") / 1024
print(f"Original PNG: {orig_size:.1f} KiB")
print(f"WebP (full): {webp_size:.1f} KiB")
print(f"WebP (120x120): {small_size:.1f} KiB")
print("Done!")
