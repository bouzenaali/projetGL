import httpx
from selectolax.parser import HTMLParser
from urllib.parse import urljoin
from dataclasses import dataclass, asdict, fields
import json
from typing import List


@dataclass
class LawyerData:
    full_name: str | None
    email: str | None
    Tel: str | None
    address: str | None  
    categories: List[str] | None
    

def get_html(url, **Kwargs):
    headers = {
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    if Kwargs.get("page"):
        resp = httpx.get(
            url + str(Kwargs.get("page")), headers=headers, follow_redirects=True
        )
    else:
        resp = httpx.get(
            url, headers=headers, follow_redirects=True
        )

    try:
        resp.raise_for_status()
    except httpx.HTTPStatusError as exc:
        print(f"Error response {exc.response.status_code} while requesting {exc.request.url!r}. Page limit exceeded.")
        return False
    html = HTMLParser(resp.text)
    return html


def extract_text(html, sel):
    try:
        text = html.css_first(sel).text()
        return clean_data(text)
    except AttributeError:
        return None

def export_to_json(products):
    with open("data.json", "w", encoding="utf-8") as f:
        json.dump(products, f, ensure_ascii=False, indent=4)
    print("saved to json")

def clean_data(value):
    chars_to_remove = ['Catégories',]
    for char in chars_to_remove:
        if char in value:
            value = value.replace(char, "")
    return value.strip()

def parse_search_page(html):
    entries = html.css(".list .entry-title a")

    for entry in entries:
        yield urljoin("https://avocatalgerien.com/listings/", entry.attrs["href"])

def parse_lawyer_page(html):
    new_lawyer = LawyerData(
        full_name = extract_text(html, "h1.entry-title"),
        email = extract_text(html, "a[href^='mailto:']"),
        Tel = None,
        address = extract_text(html, ".address"),
        categories = [extract_text(html, ".listing-cat")],
    )
    return asdict(new_lawyer)



def main():
    lawyers = []
    baseurl = "https://avocatalgerien.com/listings/page/"
    for x in range(1, 30):
        print(f"Getting page: {x}")
        html = get_html(baseurl, page=x)
        if not html:
            break
        entry_urls = parse_search_page(html)
        for url in entry_urls:
            print(url)
            html = get_html(url)
            lawyers.append(parse_lawyer_page(html))
        export_to_json(lawyers)


if __name__ == '__main__':
    main()