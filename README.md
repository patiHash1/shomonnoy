# Project Shomonnoy

**Shomonnoy** (শমোন্নয়) — Bengali for *"balance"* — is a student-led [Teach For Bangladesh](https://teachforbangladesh.org/) capstone project helping Grade 6–7 students build a healthy balance between screen time and real life: creativity, hobbies, friendships, and community.

This repository contains the project's single-page marketing/informational website.

## About the project

- **Background** — Designed and built by a Teach For Bangladesh Fellow as a student-facing capstone, developed together with Grade 6–7 students, teachers, and school leadership.
- **The problem** — Rising screen time among 11–14 year-olds is crowding out sleep, outdoor play, reading, and face-to-face friendships.
- **The approach** — Not about villainizing screens, but helping students build a healthy, self-aware relationship with technology through workshops, challenges, and peer clubs — equipping them with habits, not just warnings.

## Project structure

```
shomonnoy/
├── shomonnoy-website.html   # Main page markup — structure only, no copy or styling
├── style/
│   ├── color.css             # Every color in the site, as CSS custom properties
│   └── style.css              # Layout, spacing, type, motion — imports color.css, has zero raw colors
├── js/
│   └── main.js                 # Rendering + interactivity (nav, reveal-on-scroll, form, etc.)
├── l10n/
│   └── en.js                    # Every user-facing string on the site (the source of truth for copy)
├── assets/                       # Images and brand assets
│   ├── project_shmonnoy.jpg       # Project Shomonnoy logo — the site's logo (nav, footer, favicon)
│   ├── teach_for_bangladesh.jpg   # Teach For Bangladesh logo — footer credit badge
│   ├── patiHash_logo.jpg          # patiHash logo — footer "powered by" credit
│   └── image_2026-07-16_23-38-18.png     # patiHash founder/CEO quote card (unused)
└── README.md
```

## Running locally

The site is static — no build step required. Open `shomonnoy-website.html` directly in a browser, or serve the folder with any static file server, e.g.:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/shomonnoy-website.html`.

## Editing content

**All site copy lives in `l10n/en.js`**, assigned to a global `window.I18N` object — not in the HTML. The HTML holds English fallback text for readability and no-JS/SEO robustness, but on load `js/main.js` overwrites every element tagged `data-i18n` (text), `data-i18n-html` (rich text, e.g. the hero headline's accent span), `data-i18n-placeholder`, or `data-i18n-aria-label` with the matching value from `I18N`. **To change any text on the site, edit `l10n/en.js`** — editing the HTML fallback alone won't stick once JS runs.

To add a second language: copy `l10n/en.js` to e.g. `l10n/bn.js`, translate the values (keep every key identical), and swap which file the page's `<script src="l10n/en.js">` tag loads.

Content feeds are arrays inside `I18N`, rendered by `js/main.js`:

| `I18N` key | Powers | Notes |
|---|---|---|
| `updates.items` | "Club Updates" feed | Add a new object to the top of the array for the latest update |
| `network.items` | "Shomonnoy Network" gallery | Currently rendered as icon/gradient placeholders |
| `ebooks.items` | "E-Book Resource Center" cards | Update the resource-card download link once real files are hosted |
| `messages.quotes` | "Messages" testimonials | |
| `contact.form.role.options` | "I am a..." dropdown | Rebuilt into `<option>` elements on load |

Every other raw color has been replaced with a CSS variable, so `style.css` itself contains no color values at all — only `color.css` does. Design tokens for spacing, type, and motion live at the top of `style/style.css` under `:root`.

## Assets

`assets/project_shmonnoy.jpg` is the site's logo — used as the nav brand mark, the footer brand mark, and the browser favicon (cropped to a circle via CSS `border-radius`). `assets/teach_for_bangladesh.jpg` and `assets/patiHash_logo.jpg` appear in the footer credit line (the `powered by patiHash` line links to [patihash.com](https://www.patihash.com/)). `image_2026-07-16_23-38-18.png` (a patiHash founder/CEO quote card) isn't currently used anywhere.

## Design references

[`docs/design-reference-brilliant.md`](docs/design-reference-brilliant.md) — notes on brilliant.org's design system (typography, button/shape/motion language, layout patterns), for future use as inspiration. Keeps Shomonnoy's existing navy/blue/mint/orange palette; only structural/stylistic patterns are meant to carry over.

## Tech

- Plain HTML/CSS/JS — no framework or build tooling
- [Lucide](https://lucide.dev/) icon set (loaded via CDN)
- Google Fonts: Baloo 2, Inter, Space Mono
- The contact form is a front-end placeholder — connect it to an email service or backend to receive real submissions
- `l10n/en.js` is a plain script (not JSON fetched via `fetch()`), so the localized text loads correctly even when the HTML file is opened directly (`file://`) with no server running
