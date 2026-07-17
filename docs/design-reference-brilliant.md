# Design reference: brilliant.org

Notes on brilliant.org's visual/interaction design system, for future use as inspiration on `shomonnoy-website.html`. **Scope: borrow the structural/stylistic language below — type scale, shape, motion, button style, layout patterns — not Brilliant's actual colors.** Shomonnoy keeps its existing navy + blue + mint + orange theme (`style/color.css`); every recommendation at the end maps a Brilliant pattern onto that existing palette instead of introducing Brilliant's own hues.

## How this was researched

- **Verified directly**: color values, font-family names, border-radius scale, box-shadow values, and transition timings, extracted from Brilliant's actual shipped CSS bundle (`_next/static/css/*.css`, fetched 2026-07-16).
- **From a page-content pass** (rendered/cached snapshot, not independently re-verified): hero copy, section order, stats, testimonial/logo usage. Treat these as "likely accurate, moderately confident" rather than hard fact — Brilliant's homepage is a client-rendered Next.js app, so exact current wording may drift.

## Typography

- Custom display typefaces: **"CoFo Brilliant"** and **"CoFo Robert"** for headings, with a companion **"CoFo Semi Mono"** for numeric/label accents (stats, tags) — a serif-free, geometric-humanist pairing.
- Body copy uses **"Soleil"**; code/technical snippets use **"Source Code Pro"**.
- Font weights in active use: 400, 500, 600, 700 — a fairly wide range, giving strong hierarchy between headline, subhead, and body without needing many different sizes.
- *Shomonnoy already does something similar*: Baloo 2 (display) + Inter (body) + Space Mono (label accents) is the same three-role pattern (playful display / clean body / mono accent). No structural change needed here — just keep leaning on that existing pairing confidently.

## Color system (for context only — do not port the hues)

Directly observed in the CSS: a near-black ink (`#141414`) and white on a warm off-white background (`#f5f3f1`), plus a wide, playful multi-hue accent set used **per component variant** rather than one dominant brand color: periwinkle blue (`#7491ff`/`#5d74cc`), gold/yellow (`#f7c325`/`#c69c1e`), pink (`#ff90e0`/`#cc73b3`), green/mint/teal, purple, papaya (orange), and red — each with its own named token scale (e.g. `blue.600`, `mint.800`, `papaya.600`).

**Mapping to Shomonnoy's existing tokens** (see [color.css](../style/color.css)): Brilliant's "one accent hue per component/context" idea maps directly onto rotating through `--blue` / `--mint` / `--orange` (already exactly a 3-hue accent system) instead of one color doing everything. Brilliant's ink/paper roles already correspond to Shomonnoy's `--navy`/`--ink` and `--paper`/`--mist`.

## Shape language

- A full radii scale (`xs → 3xl`, plus named `full`, `pill`, `circle` tokens) rather than 2–3 fixed values.
- Generous, friendly rounding in practice — literal radii of 24px and 44px show up on cards/buttons.
- *Shomonnoy has* `--radius-sm/md/lg` (12/18/28px) already in the same spirit; a `--radius-xl` (~36–40px) tier for hero-level cards would extend it cleanly without a redesign.

## Elevation & shadows

- Shadows are mostly **soft ambient glows**: no offset, large blur (15–24px), low-opacity black (`rgba(0,0,0,.06–.35)`) — a floating-card feel rather than a hard drop shadow.
- Interactive elements get a colored glow ring on hover/focus (`color-mix(in srgb, var(--accent) 30–40%, transparent)`), not just a darker background.
- *Shomonnoy already has this instinct*: `--orange-glow` / `--orange-glow-strong` (added when colors were split out into `color.css`) are exactly this pattern, just currently only defined for orange. Worth extending a matching glow pair for `--blue` and `--mint` so any button/card variant can use the same hover treatment.

## Signature component: the "3D button"

The most distinctive, ownable pattern on the site. Each button is two stacked layers:
1. A **face** — the visible pill-shaped button, full accent color.
2. A **shadow base** — a slightly-offset-down layer in a *darker shade of the same hue*, sitting behind/beneath the face.

On press, the face translates down toward the base and the visible "step" shrinks — a tactile, game-like click, reminiscent of Duolingo-style ed-tech buttons. The shadow-base color is swapped per variant (`blue-600`, `green-600`, `papaya-600`, etc.), so every button color has its own matching darker "base" shade rather than one universal shadow.

**Direct translation for Shomonnoy**: give `.btn-primary` (orange) a `--orange-dark`/`#C97A1E`-ish base layer, and do the same for any navy or mint button variants — turning the current flat `translateY(-3px)` hover lift into a proper press-down interaction (down on `:active`, not just up on `:hover`).

## Motion

- Hover-state transitions are fast and restrained: `all .15s ease` to `.3s ease-in-out`, almost entirely on `background`, `border-color`, and `color` — snappy micro-interactions, not slow choreography.
- *Shomonnoy's* `--ease` timing (`cubic-bezier(.22,.9,.32,1)`) at 0.25–0.35s is close in spirit; could tighten hover-specific transitions (not the scroll-reveal ones) toward the 150–250ms end for a crisper feel.

## Theming

- The web app supports light/dark via native CSS `light-dark()`, but marketing/landing pages (including the homepage) are explicitly **forced to light mode** regardless of system preference. Worth noting only because it validates a choice Shomonnoy already makes implicitly (no dark mode) — not a recommendation to add one.

## Layout & content patterns (from the rendered homepage)

1. **Hero**: bold centered headline + one-line subhead + two segmented CTAs side by side (audience-specific, e.g. "I'm a learner" / "I'm a parent or teacher").
2. **Stats strip**: 3 large-number credibility stats directly under the hero.
3. **Feature/benefit cards**: ~4 cards, short heading + 1–2 sentence explanation each.
4. **Subject/topic tabs**: content areas grouped into clickable tabs revealing a bullet list per tab.
5. **Credibility signals**: real product screenshots, campus/people photography, and partner-institution logos (MIT, Harvard, Stanford, etc.) as trust markers.
6. **Testimonials**: rotating carousel, quote + portrait + name/role, cycling through varied personas.
7. **Closing CTA**: a final, strong call-to-action bridging to conversion right before the footer.

## Recommendations mapped onto `shomonnoy-website.html` (color theme unchanged)

| Brilliant pattern | Shomonnoy section | Suggested change |
|---|---|---|
| Segmented dual hero CTA | Hero | Already has 2 CTAs ("Partner With Us" / "Explore Resources") — give them the 3D-button treatment described above |
| Stats strip under hero | Hero stats | Already present (4 stats) — mostly needs typographic weight/size tuning to feel bolder, pattern itself doesn't need to change |
| ~4 benefit cards | About cards / Values grid | Already the same shape (3 + 4 cards) — consider a subtle top-edge accent color per card, rotating navy/blue/mint/orange |
| Credibility logo strip | — (new) | The unused `assets/photo_..._285` (Teach For Bangladesh logo) is a natural fit for a small credibility strip near the hero or footer |
| Testimonial carousel | Messages section | Currently a static 2-card grid (already rendered from `l10n/en.js` → `messages.quotes`); as more testimonials are added, consider rotating/auto-advancing instead of a fixed grid |
| Ambient glow shadows on hover | Buttons/cards generally | Extend `--orange-glow` pattern to `--blue`/`--mint` variants in `color.css` |
| 3D button press interaction | `.btn-primary`, `.btn-outline`, `.nav-cta` | Add a darker same-hue "base" layer and an `:active` press-down transform |
| Faster hover transitions | Global | Tighten non-scroll hover transitions toward 150–250ms |

## What NOT to copy

- Brilliant's actual color palette (periwinkle blue, gold, pink, etc.) — Shomonnoy keeps navy/blue/mint/orange.
- Any Koji/AI-tutor-specific product content, app-store download badges, or university-partner logos that don't apply to Shomonnoy.
- Dark-mode theming — out of scope unless separately requested.
