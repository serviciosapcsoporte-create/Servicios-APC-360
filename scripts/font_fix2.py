import os, re

base = "C:/Users/pc/Documents/serviciosapc-site/dist"
css_path = os.path.join(base, "assets/index-CLeSbt-4.css")

with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# Remove ALL Google Font references from CSS
# Pattern 1: @import url('https://fonts.googleapis.com/...')
css = re.sub(r"@import[^;]*?['\"]https?://[^'\"]*?['\"];?", '', css)

# Pattern 2: font-family with Google Font names
# Match various formats: font-family:"Archivo",...  font-family:"Playfair Display",...  etc.
css = re.sub(r'font-family:"Archivo"[^;]*;?', 'font-family:system-ui,sans-serif;', css)
css = re.sub(r'font-family:"Playfair Display"[^;]*;?', 'font-family:Georgia,serif;', css)
css = re.sub(r'font-family:"DM Mono"[^;]*;?', 'font-family:monospace;', css)

# Pattern 3: Any remaining font-family references to these fonts
css = css.replace('"Archivo"', 'system-ui')
css = css.replace('"Playfair Display"', 'Georgia')
css = css.replace('"DM Mono"', 'monospace')

# Pattern 4: Remove any url() references to Google Fonts
css = re.sub(r"url\(['\"]?https?://[^'\"]*?fonts\.googleapis[^'\"]*?['\"]?\)", '', css)
css = re.sub(r"url\(['\"]?https?://[^'\"]*?fonts\.gstatic[^'\"]*?['\"]?\)", '', css)

# Pattern 5: Remove any @import url() that might reference Google Fonts
css = re.sub(r"@import\s+url\(['\"]?https?://[^'\"]*?fonts\.googleapis[^'\"]*?['\"]?\)\s*;", '', css)
css = re.sub(r"@import\s+url\(['\"]?https?://[^'\"]*?fonts\.gstatic[^'\"]*?['\"]?\)\s*;", '', css)

# Pattern 6: Remove any font-weight references that might reference Google Fonts
css = re.sub(r"font-weight:\s*(300|400|500|600|700|900)\s*!important", 'font-weight:\\1', css)

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

# Verify
has_google = 'fonts.googleapis' in css or 'fonts.gstatic' in css or 'Playfair' in css or '"Archivo"' in css or '"DM Mono"' in css
print(f"CSS still has Google Fonts: {has_google}")

# Check remaining references
remaining = re.findall(r'(?:Playfair|Archivo|DM Mono|fonts\.googleapis|fonts\.gstatic)', css)
print(f"Remaining references: {len(remaining)}")

# Save backup
backup_path = os.path.join(base, "assets/index-CLeSbt-4.css.bak")
with open(backup_path, "w", encoding="utf-8") as f:
    f.write(css)
print(f"Backup saved to: {backup_path}")

# Check file size
print(f"CSS size: {os.path.getsize(css_path) / 1024:.1f} KiB")
