#!/usr/bin/env python3
"""Normaliza los 19 MDX a LF puro (repara CRLF que rompia el parser)."""
import glob
n = 0
for f in sorted(glob.glob(r"C:\Users\pc\Documents\serviciosapc-site\src\app\blog\posts\*.mdx")):
    with open(f, "rb") as fh:
        data = fh.read()
    fixed = data.replace(b"\r\n", b"\n")
    if fixed != data:
        with open(f, "wb") as fh:
            fh.write(fixed)
        n += 1
        print("LF:", f.split("\\")[-1])
print("normalizados:", n)
