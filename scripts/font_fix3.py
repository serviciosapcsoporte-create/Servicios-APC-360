import os, re

base = "C:/Users/pc/Documents/serviciosapc-site/dist"
css_path = os.path.join(base, "assets/index-CLeSbt-4.css")

with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# Targeted replacements for Tailwind-generated font classes
css = css.replace("font-family:DM Mono,monospace", "font-family:monospace")
css = css.replace("font-family:Archivo,system-ui,sans-serif", "font-family:system-ui,sans-serif")
css = css.replace("font-family:Playfair Display,Georgia,serif", "font-family:Georgia,serif")

# Also remove any remaining Google Fonts references
css = css.replace("DM Mono", "monospace")
css = css.replace("Playfair Display", "Georgia")
css = css.replace("Archivo", "system-ui")

# Remove Google Fonts @import if present
css = re.sub(r"@import[^;]*fonts\.googleapis[^;]*;", '', css)
css = re.sub(r"@import[^;]*fonts\.gstatic[^;]*;", '', css)

# Remove url() references to Google Fonts CDN
css = re.sub(r"url\([^)]*fonts\.googleapis[^)]*\)", '', css)
css = re.sub(r"url\([^)]*fonts\.gstatic[^)]*\)", '', css)

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

# Verify
remaining = re.findall(r'(?:Playfair|Archivo|DM Mono|fonts\.googleapis|fonts\.gstatic)', css)
print(f"Remaining Google Font references: {len(remaining)}")
print(f"CSS size: {os.path.getsize(css_path) / 1024:.1f} KiB")
