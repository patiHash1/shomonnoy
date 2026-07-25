# Project Shomonnoy — Technical & Architecture Documentation

**Project Shomonnoy** (শমোন্নয় — Bengali for *"balance"*) is a student-led Teach For Bangladesh capstone project designed to help Grade 6–7 students build a healthy balance between screen time and real-life activities (creativity, offline hobbies, friendships, and community).

This document serves as a comprehensive technical guide for developers, volunteers, and fellows maintaining or extending the Shomonnoy single-page marketing and informational website.

---

## 1. Project Directory Structure

The codebase is built entirely with vanilla web technologies (HTML, CSS, and JS) to ensure zero build steps, fast loading times, and offline compatibility.

```
shomonnoy/
├── doc/
│   └── project_overview.md      # This technical documentation
├── docs/
│   └── design-reference-brilliant.md  # Design system inspiration notes (brilliant.org)
├── assets/                       # Brand assets, logos, and quote visual cards
│   ├── project_shmonnoy.jpg       # Main brand logo (nav, footer, favicon)
│   ├── teach_for_bangladesh.jpg   # Teach For Bangladesh organization logo
│   └── patiHash_logo.jpg          # patiHash "powered by" credit badge
├── style/
│   ├── color.css                 # Color design tokens & elevation definitions
│   └── style.css                 # Layout, spacing, typography, motion, & keyframes
├── js/
│   └── main.js                   # I18n translation logic, gallery renderers, & interactivity
├── l10n/
│   ├── en.js                     # English site copy & dynamic feed arrays (Source of Truth)
│   └── bn.js                     # Bengali translations of all site copy & feeds
├── index.html                    # Main HTML markup structure with default fallback copy
├── vercel.json                   # Vercel deployment configuration (URL cleaning & caching headers)
└── README.md                     # General quickstart guide
```

---

## 2. Core Architecture & Design Patterns

### 2.1 Client-Side I18n Engine (Translation)

The website features a custom lightweight client-side internationalization (I18n) framework. This enables language switching without reloading the page or requesting remote JSON bundles. It allows the page to function perfectly even when run locally via the `file://` protocol.

*   **Data Bundles**: All site copy is defined in standard JavaScript objects loaded globally in the browser: `window.I18N_EN` in [en.js](file:///i:/PatiHash/shomonnoy/l10n/en.js) and `window.I18N_BN` in [bn.js](file:///i:/PatiHash/shomonnoy/l10n/bn.js).
*   **Active Language State**: Managed in [main.js](file:///i:/PatiHash/shomonnoy/js/main.js) through a local storage item (`shomonnoy_lang`).
*   **DOM Binding Attributes**: The HTML tags represent dynamic contents via specific translation attributes:
    *   `data-i18n="[path.to.key]"`: Replaces element text content with the translated value.
    *   `data-i18n-html="[path.to.key]"`: Replaces inner HTML (used for rich copy containing spans, accents, line breaks).
    *   `data-i18n-placeholder="[path.to.key]"`: Replaces placeholder values in inputs/textareas.
    *   `data-i18n-aria-label="[path.to.key]"`: Injects accessibility ARIA labels dynamically.

*   **Dot-Path Resolver Function**:
    ```javascript
    function t(path) {
      return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, window.I18N);
    }
    ```
    This function splits the string key path (e.g. `hero.ctaPartner`) and traverses the active language object to retrieve the copy.

---

### 2.2 Color and Layout Separation

Styling is split cleanly into two stylesheets to maintain a strict design token system:
1.  **[style/color.css](file:///i:/PatiHash/shomonnoy/style/color.css)**: Houses all brand colors, gradient scales, border colors, dynamic glows, and shadow elevations as CSS custom properties (`var(--name)`). **There are zero raw hex/HSL colors in the main stylesheet.**
2.  **[style/style.css](file:///i:/PatiHash/shomonnoy/style/style.css)**: Configures layouts (Flexbox, CSS Grid), dimensions, padding, typography sizing, animations, and transitions. It references color tokens strictly.

#### Visual Theme & Accent Rotation
The styling rotates through a playful navy, blue, mint, and orange palette. Key variables in use:
*   `--navy` (`#0F2854`): Base branding color.
*   `--ink` (`#192A47`): Body text color.
*   `--blue` (`#4988C4`): Primary cool brand action accent.
*   `--mint` (`#4988C4`): Secondary fresh activity accent.
*   `--orange` (`#1C4D8D`): Warm CTA accent.
*   `--paper` (`#FBFCFE`): Standard off-white background.

---

### 2.3 Interactive Features

*   **Hero Balance Beam (Interactive SVG)**: In the Hero section, a custom SVG illustration of a balance scale is loaded. When the user moves their pointer over the balance stage (`#balanceStage`), a mouse-coordinate event listener calculates the pointer offset and tilts the scale beam dynamically using a 2D transform rotation (`rotate(Xdeg)`). On mouse leave, it smoothly resets to equilibrium (`rotate(0deg)`).
*   **Scroll Reveal Animation**: Uses the browser's native `IntersectionObserver` API. Elements with the `.reveal` class receive the `.in` class once they scroll into view (15% threshold), triggering hardware-accelerated CSS translation and opacity fade-ins.
*   **Mobile Hamburger Navigation**: Uses CSS transforms to slide in/out a fullscreen sidebar drawer for links, managed by a toggle state class `.open`.

---

## 3. Dynamic Feeds & Arrays

To keep the markup clean and maintainable, several layout sections are dynamically rendered from arrays defined directly inside the translation bundles.

| Data Array Location | Render Target ID | Section Name | Notes / Custom Rendering |
|---|---|---|---|
| `updates.items` | `#updatesFeed` | Club Updates Feed | Renders date blocks, color-coded tag pills, and text descriptions. Displays 3 by default with a "Load more" button. |
| `network.items` | `#galleryGrid` | Shomonnoy Network | Displays a grid of cards using embedded inline SVGs representing activities (e.g. laptop, camera, contract, painting palette, campfire). |
| `ebooks.items` | `#resourceGrid` | E-Book Resource Center | Renders resource cards with PDF metadata and custom themed icons. Links trigger file downloads. |
| `messages.quotes` | `#messagesGrid` | Supporter Testimonials | Displays quotes, translation toggles (if multi-lingual), and user avatars. |

---

## 4. Maintenance & Operations Guide

### 4.1 How to Update Website Copy
To edit headings, descriptions, or link labels, **do not edit the HTML file**. Instead:
1.  Open the active language file, e.g., English [en.js](file:///i:/PatiHash/shomonnoy/l10n/en.js) or Bengali [bn.js](file:///i:/PatiHash/shomonnoy/l10n/bn.js).
2.  Locate the matching key structure (e.g., `hero.lead` or `about.cards.background.text`).
3.  Modify the string text.
4.  If the value contains HTML formatting, ensure it is assigned to a key inside the HTML translation parser (like `titleHtml` using `data-i18n-html` in the markup).

### 4.2 How to Add a Club Update
New posts appear in the "Club Updates" feed.
1.  Open [l10n/en.js](file:///i:/PatiHash/shomonnoy/l10n/en.js).
2.  Locate the `updates.items` array.
3.  Add a new object to the top of the array:
    ```javascript
    {
      date: "APR\n2026",
      tag: "event",           // Categories: 'event', 'milestone', or 'partnership'
      tagLabel: "Event",
      title: "New Event Title Here",
      desc: "Short description of the event details."
    }
    ```
4.  Open [l10n/bn.js](file:///i:/PatiHash/shomonnoy/l10n/bn.js) and append the translated version in the same position to maintain order symmetry.

### 4.3 How to Add a New Downloadable Resource (E-Book)
1.  Place the new PDF document inside the `assets/` directory (or host it externally).
2.  Open [l10n/en.js](file:///i:/PatiHash/shomonnoy/l10n/en.js) and locate the `ebooks.items` array.
3.  Append a new card configuration:
    ```javascript
    {
      title: "Title of the Resource",
      desc: "Brief explanation of who this pack is for.",
      size: "2.4 MB · PDF",
      icon: "file-text",       // Lucide icon identifier string
      grad: "linear-gradient(160deg, var(--blue), var(--blue-dark))"
    }
    ```
4.  Update the resource link selector in `index.html` or update the static resource list inside [js/main.js](file:///i:/PatiHash/shomonnoy/js/main.js) (specifically `renderResources` function) to swap `#` for the actual asset download path.
5.  Add translations to [l10n/bn.js](file:///i:/PatiHash/shomonnoy/l10n/bn.js).

### 4.4 How to Add a New Language (e.g., Spanish)
1.  Copy [l10n/en.js](file:///i:/PatiHash/shomonnoy/l10n/en.js) and rename it (e.g., `l10n/es.js`).
2.  Rename the global object in the file to `window.I18N_ES` and translate all of the text values, keeping the keys identical.
3.  Import the new script in [index.html](file:///i:/PatiHash/shomonnoy/index.html) header:
    ```html
    <script src="l10n/es.js"></script>
    ```
4.  Update the language switcher function inside [js/main.js](file:///i:/PatiHash/shomonnoy/js/main.js) and the language toggle button inside the navbar in [index.html](file:///i:/PatiHash/shomonnoy/index.html) to support the new locale code `es`.

---

## 5. Deployment

### 5.1 Local Testing
The project works out-of-the-box simply by opening `index.html` in any browser. To run a local static server:
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### 5.2 Vercel Deployment
The repository includes a [vercel.json](file:///i:/PatiHash/shomonnoy/vercel.json) config file. 
*   **Clean URLs**: Allows URLs like `/index` to map clean path suffixes.
*   **Caches**: Sets immutable one-year cache control header policies for items inside directory routes `style/`, `js/`, `assets/`, and `l10n/` to optimize static loading performance.
