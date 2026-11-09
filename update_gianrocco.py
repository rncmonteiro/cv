from pathlib import Path
import re

source = Path('_includes/content/team.md')
if not source.exists():
    raise SystemExit('Run this script from the root of your cloned GitHub CV repository.')
text = source.read_text(encoding='utf-8')
photo = '<img src="/cv/assets/gianrocco-mucedero.png" alt="Gianrocco Mucedero" width="90" style="float:right; margin:0 0 12px 18px; border-radius:5px;">'
# Insert before each named entry, leaving all original text untouched.
pattern = re.compile(r'(?m)^(\*\*Gianrocco Mucedero\*\*(?: \(Italy\))?)')
if photo in text:
    print('Photograph markup is already present; no changes made.')
else:
    updated, n = pattern.subn(lambda m: photo + '\n\n' + m.group(1), text)
    if n != 2:
        raise SystemExit(f'Expected exactly 2 Gianrocco entries; found {n}. No file changed.')
    source.write_text(updated, encoding='utf-8')
    print('Updated 2 entries in', source)
