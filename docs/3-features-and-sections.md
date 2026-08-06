# Features & UI Sections

This document describes the various UI sections making up the single-page application of Project Shomonnoy, explaining their functionality, layout, and user interactions.

---

## 1. Navbar (`src/app/shared/navbar/`)

*   **Type:** Shared Component (Fixed Header)
*   **Key Features:**
    *   **Sticky Scroll Tracking:** Becomes opaque with blur filters and shadow classes once the page scrolls down by more than `30px` (managed via `ScrollService.isScrolled()`).
    *   **Interactive Mobile Drawer:** A slide-out hamburger menu that opens on smaller viewports and closes automatically upon link clicks.
    *   **Language Switcher:** Toggle buttons allowing users to change the application language between English (`EN`) and Bengali (`BN`).
    *   **Theme Switcher (`app-theme-toggle`):** Embeds the theme toggle component that lets users switch between light and dark modes.
    *   **Section Navigation:** Navigation links hook into `ScrollService.scrollTo(sectionId)` to navigate smoothly down the single-page layout.

---

## 2. Hero & Banner (`src/app/features/home/`)

*   **Type:** Feature Section
*   **Key Features:**
    *   **Interactive Balance Beam:** A custom SVG element representing a balance scale. It listens to `pointermove` coordinates and dynamically tilts (`rotate(...)`) in response to mouse/pointer movements, returning to balance on pointer leave.
    *   **Statistics Panel:** Displays key performance indicators logged by the project:
        *   **500+** Stakeholders Reached
        *   **12+** In-house Workshops Organized
        *   **40+ Hours** of Screen-Free Play Logged
        *   **3** Sustainability Partners

---

## 3. About (`src/app/features/about/`)

*   **Type:** Feature Section
*   **Key Features:**
    *   Fades in when scrolled into viewport using the reveal observer utility.
    *   Splits the motivation behind the capstone into three card-based columns:
        1.  **Background:** The student-facing capstone project developed by a Teach For Bangladesh Fellow with Grade 6–7 students.
        2.  **The Problem:** Documenting the steep rise in digital screen dependency, sleep deprivation, and lack of physical play.
        3.  **Why It Matters:** Guiding students to notice their screen time without completely demonizing technology.

---

## 4. Vision & Values (`src/app/features/vision/`)

*   **Type:** Feature Section
*   **Key Features:**
    *   Features primary two-column blocks for **Vision** ("A generation that chooses balance, not restriction") and **Mission** ("Equip students with habits, not just warnings").
    *   Lists four core value blocks in a responsive grid layout:
        *   **Curiosity:** Redirecting online energy to search for real answers.
        *   **Balance:** Embracing technology in moderation rather than total restriction.
        *   **Community:** Building healthy habits together.
        *   **Creativity:** Investing time in hobbies and artistic expression.

---

## 5. Club Updates (`src/app/features/updates/`)

*   **Type:** Feature Section
*   **Key Features:**
    *   Chronological timeline list detailing events, milestones, and partnerships.
    *   **Lazy Loading / Pagination:** Initially prints only the first `3` entries. Clicking the "Load more updates" button reactively grows the list count by `3` and triggers a reveal animation refresh.
    *   Features tags like `milestone`, `event`, and `partnership`, each with dedicated styles.

---

## 6. Network Gallery (`src/app/features/network/`)

*   **Type:** Feature Section
*   **Key Features:**
    *   An interactive gallery presenting photographs and highlight blocks from community campaigns, leadership workshops, and signature events.
    *   Utilizes CSS grid with gradient overlays and micro-animations that lift the blocks on hover.

---

## 7. E-Book Resource Center (`src/app/features/ebooks/`)

*   **Type:** Feature Section
*   **Key Features:**
    *   Houses download resources targeted at parents, students, and teachers.
    *   Current downloadable items:
        1.  *The Shomonnoy Guidebook* (Grade 6–7 student companion handbook)
        2.  *Parent's Quick Reference* (conversation starters for guardians)
        3.  *Classroom Activity Pack* (teacher tools)
    *   Each card highlights the document size, type, and icon. Links are retrieved dynamically from `src/app/core/i18n/resource-links.ts`.

---

## 8. Messages & Testimonials (`src/app/features/messages/`)

*   **Type:** Feature Section
*   **Key Features:**
    *   Displays supporter messages and testimonials from sponsors or organizers.
    *   Features bilingual quotes with English translation overlays, supporter names, and roles.

---

## 9. Contact & Partners (`src/app/features/contact/`)

*   **Type:** Feature Section
*   **Key Features:**
    *   **Partnership Box:** Details call-to-action text encouraging schools, NGOs, and donors to collaborate.
    *   **Contact Form:** A validation-enabled reactive form powered by Angular template-driven `FormsModule`.
    *   **Success Feedback:** A Signal-driven overlay notifies the user upon successful simulation of form submission.
    *   **QR Code Widget:** Displays a QR code targeting the patiHash website.
