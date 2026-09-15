from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import re
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
KEY_PAGES = [
    Path("index.html"),
    Path("projects/index.html"),
    Path("projects/lcd-bitmap-ide.html"),
    Path("ru/index.html"),
    Path("ru/projects/index.html"),
    Path("ru/projects/lcd-bitmap-ide.html"),
]

errors: list[str] = []

class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.canonicals: list[str] = []
        self.alternates: dict[str, str] = {}
        self.images: list[str] = []
        self.descriptions: list[str] = []
        self.lang: str | None = None

    def handle_starttag(self, tag: str, attrs):
        a = dict(attrs)
        if tag == "html":
            self.lang = a.get("lang")
        elif tag == "link" and a.get("rel") == "canonical" and a.get("href"):
            self.canonicals.append(a["href"])
        elif tag == "link" and a.get("rel") == "alternate" and a.get("hreflang") and a.get("href"):
            self.alternates[a["hreflang"]] = a["href"]
        elif tag == "img" and a.get("src"):
            self.images.append(a["src"])
        elif tag == "meta" and a.get("name") == "description" and a.get("content"):
            self.descriptions.append(a["content"])


def local_target(page: Path, ref: str) -> Path | None:
    parsed = urlparse(ref)
    if parsed.scheme or parsed.netloc or ref.startswith("data:"):
        return None
    target = (ROOT / page.parent / parsed.path).resolve()
    try:
        target.relative_to(ROOT.resolve())
    except ValueError:
        return None
    return target

for page in KEY_PAGES:
    path = ROOT / page
    if not path.exists():
        errors.append(f"missing key page: {page}")
        continue
    text = path.read_text(encoding="utf-8")
    parser = PageParser()
    parser.feed(text)
    if len(parser.canonicals) != 1:
        errors.append(f"{page}: expected exactly one canonical, found {len(parser.canonicals)}")
    if not parser.descriptions:
        errors.append(f"{page}: missing meta description")
    for lang in ("en", "ru"):
        if lang not in parser.alternates:
            errors.append(f"{page}: missing hreflang={lang}")
    expected_lang = "ru" if str(page).startswith("ru/") else "en"
    if parser.lang != expected_lang:
        errors.append(f"{page}: html lang={parser.lang!r}, expected {expected_lang!r}")
    if "data-en=" in text or "data-ru=" in text or "data-language=" in text:
        errors.append(f"{page}: contains legacy in-page bilingual markup")
    for src in parser.images:
        target = local_target(page, src)
        if target is not None and not target.exists():
            errors.append(f"{page}: missing local image {src}")

media_dir = ROOT / "assets/projects/lcd-bitmap-ide"
for name in ("fsm-graph-editor.webp", "lcd-editor.webp", "control-panel-editor.webp", "text-registry.webp"):
    path = media_dir / name
    if not path.exists():
        errors.append(f"missing media: {path.relative_to(ROOT)}")
        continue
    data = path.read_bytes()
    if len(data) < 20 or data[:4] != b"RIFF" or data[8:12] != b"WEBP":
        errors.append(f"invalid WebP container: {path.relative_to(ROOT)}")

sitemap = ROOT / "sitemap.xml"
image_sitemap = ROOT / "sitemap-images.xml"
for xml_file in (sitemap, image_sitemap):
    if not xml_file.exists():
        errors.append(f"missing {xml_file.name}")
    else:
        try:
            ET.parse(xml_file)
        except ET.ParseError as exc:
            errors.append(f"{xml_file.name}: XML parse error: {exc}")

if sitemap.exists():
    xml = sitemap.read_text(encoding="utf-8")
    required_urls = [
        "https://myahlovvlad.github.io/",
        "https://myahlovvlad.github.io/ru/",
        "https://myahlovvlad.github.io/projects/",
        "https://myahlovvlad.github.io/ru/projects/",
        "https://myahlovvlad.github.io/projects/lcd-bitmap-ide.html",
        "https://myahlovvlad.github.io/ru/projects/lcd-bitmap-ide.html",
    ]
    for url in required_urls:
        if f"<loc>{url}</loc>" not in xml:
            errors.append(f"sitemap.xml: missing {url}")

robots = (ROOT / "robots.txt").read_text(encoding="utf-8") if (ROOT / "robots.txt").exists() else ""
if "Disallow: /pr-preview/" not in robots:
    errors.append("robots.txt: PR previews are not excluded")
for required in ("sitemap.xml", "sitemap-images.xml"):
    if required not in robots:
        errors.append(f"robots.txt: missing {required}")

if errors:
    print("SEO/media validation failed:")
    for error in errors:
        print(f" - {error}")
    sys.exit(1)

print(f"SEO/media validation passed for {len(KEY_PAGES)} localized key pages.")
