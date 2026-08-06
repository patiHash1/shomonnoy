# Project Architecture & Structure

This document details the codebase layout, single-page application structure, state management, core services, and styling design system.

---

## 1. Directory Layout

The workspace follows a modular standalone Angular structure, separating structural code (**Core**), reusable templates (**Shared**), and page sections (**Features**):

```
src/
├── index.html                      # Entry HTML (imports fonts & global CDNs)
├── main.ts                        # Application bootstrapper (standalone mode)
├── styles.scss                    # Main stylesheet containing global resets
│
├── styles/                        # Global SCSS Design System
│   ├── _variables.scss            # Design tokens (colors, fonts, radii, glows)
│   ├── _mixins.scss               # Reusable styles (glassmorphism, media queries)
│   └── _animations.scss           # Keyframes and viewport scroll reveal styles
│
└── app/
    ├── app.config.ts              # Providers config (routing, animations, etc.)
    ├── app.routes.ts              # Single-page catch-all routes mapping
    ├── app.component.ts           # Root component listing all features
    ├── app.component.html         # Vertical layout file stacking sections
    │
    ├── core/                      # Core infrastructure singletons
    │   ├── i18n/                  # English (en.ts) & Bengali (bn.ts) dictionaries
    │   ├── services/              # Theme, translation, and scroll services
    │   └── utils/                 # Viewport reveal and icon loading utilities
    │
    ├── shared/                    # Reusable components
    │   ├── navbar/                # Sticky header with lang/theme triggers
    │   ├── footer/                # Bottom content and copyright block
    │   └── theme-toggle/          # Light/Dark mode visually switch button
    │
    └── features/                  # Section components stacked on the home page
        ├── about/                 # Section explaining project motivation
        ├── contact/               # Partner/Inquiry form & social icons
        ├── ebooks/                # Downloadable resources & PDFs
        ├── home/                  # Landing page hero & main stats banner
        ├── messages/              # Supporter testimonials carousel/quotes
        ├── network/               # Campaign & workshop image gallery grid
        ├── updates/               # Chronological log of events & milestones
        └── vision/                # Vision, Mission, and Core Values card decks
```

---

## 2. Single-Page Application (SPA) Integration

Instead of routing between distinct views, the app loads all major feature sections onto a single viewport stack. 

1.  **Routing (`src/app/app.routes.ts`):** Only a single route is configured, loading `HomeComponent` at the root path `''` and redirecting all undefined routes back to the root.
2.  **App Template (`src/app/app.component.html`):** The sections are stacked sequentially:
    ```html
    <app-navbar></app-navbar>
    <app-home></app-home>
    <app-about></app-about>
    <app-vision></app-vision>
    <app-updates></app-updates>
    <app-network></app-network>
    <app-ebooks></app-ebooks>
    <app-messages></app-messages>
    <app-contact></app-contact>
    <app-footer></app-footer>
    ```
    This vertical structure allows seamless, smooth scroll transitions between pages when navigation links are clicked.

---

## 3. Core Services (Signal-based State)

The app relies on three custom services in `src/app/core/services/` to manage global settings reactively:

### A. Theme Service (`theme.service.ts`)
*   **Purpose:** Manages light/dark styling.
*   **Default:** Light mode.
*   **Behavior:** Reacts to theme shifts using a Signal effect. Updates the `data-theme` attribute of the root `<html>` node and synchronizes with localStorage key `shomonnoy_theme`.

### B. Translate Service (`translate.service.ts`)
*   **Purpose:** Handles language translations (English & Bengali).
*   **Mechanism:** Exposes the safe path-resolver method `t(path: string): any`. This method splits a dot-notation key (e.g., `'about.cards.background.title'`) and retrieves the translated string, list, or configuration object from the active dictionary.
*   **Caching:** Synchronizes choice inside local storage as `shomonnoy_lang` and dynamically updates the `lang` attribute on the `<html>` document.

### C. Scroll Service (`scroll.service.ts`)
*   **Purpose:** Tracks scroll position and manages active sections.
*   **Functionality:**
    *   Listens to window scroll events to update a boolean signal `isScrolled` (true when scroll offset > 30px, used by the Navbar to add backdrop blurs and shadows).
    *   Exposes `scrollTo(sectionId: string)` which locates the DOM element by its ID and performs a hardware-accelerated smooth scroll to the section.

---

## 4. Viewport Utilities (`src/app/core/utils/viewport.util.ts`)

*   **`initRevealObserver(selector, activeClass)`:** Uses a standard `IntersectionObserver` to trigger fade-in animations on elements carrying the `.reveal` CSS class. The observer stops watching the elements once they fade in, ensuring maximum performance.
*   **`initLucideIcons()`:** Polls until the global `lucide` object is injected by the script CDN, then runs `lucide.createIcons()` to render SVGs safely.

---

## 5. SCSS Design System

Styles are built modularly using design tokens under `src/styles/`:

*   **`_variables.scss`:** Establishes color properties for light/dark modes (mapping brand blues, navy, oranges, paper surfaces, lines, and custom button shadows), border radii, fonts, and transitions.
*   **`_mixins.scss`:** Includes styling helpers like `@mixin glass()` for modern background blurring and dynamic media query breakpoints.
*   **`_animations.scss`:** Handles custom transitions and the scroll reveal effects.
