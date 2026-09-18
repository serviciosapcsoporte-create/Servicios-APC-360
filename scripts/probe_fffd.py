#!/usr/bin/env python3
import glob, re
ws = set()
for f in sorted(glob.glob('src/app/blog/posts/*.mdx')):
    for l in open(f, encoding='utf-8-sig', errors='replace'):
        if '�' in l or '\ufffd' in l:
            ws.update(re.findall(r'[A-Za-z\xc0-\xff\ufffd]{2,}', l))
print(len(ws))
for w in sorted(ws):
    print(repr(w))
