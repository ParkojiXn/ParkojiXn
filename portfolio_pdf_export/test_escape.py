import os
import subprocess

def escape_tex(text):
    if not text:
        return ""
    chars = {
        '&': r'\&',
        '%': r'\%',
        '$': r'\$',
        '#': r'\#',
        '_': r'\_',
        '{': r'\{',
        '}': r'\}',
        '~': r'\textasciitilde{}',
        '^': r'\textasciicircum{}',
        '\\': r'\textbackslash{}',
    }
    return "".join(chars.get(c, c) for c in str(text))

print("Escape helper tested:", escape_tex("BoQ/RAB & S-Curve 100% #1"))
