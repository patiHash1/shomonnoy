# Project Shomonnoy - Overview

**Project Shomonnoy** (meaning *"Balance"* in Bengali) is a student-led Teach For Bangladesh capstone initiative. It is designed to help Grade 6 and 7 students cultivate a healthy, self-aware relationship with technology, trading excessive screen time for real-life activities, creativity, hobbies, and face-to-face friendships.

---

## 1. Background & Context

In the modern digital era, screen time among young teens (ages 11–14) has climbed significantly. This often crowds out essential offline activities such as:
- Adequate sleep
- Outdoor physical play
- Reading books
- Personal face-to-face friendships
- Hands-on creative hobbies

Developed by a Teach For Bangladesh Fellow in collaboration with Grade 6–7 students, teachers, and school leadership, Project Shomonnoy was created to address this problem in a practical, playful, and sustainable manner.

---

## 2. Key Objectives

Unlike apps or initiatives that advocate for complete restriction or villainize screens, Project Shomonnoy focuses on **balance**.

*   **Self-Awareness:** Equip students with digital tracking logs to notice and reflect on their own screen habits.
*   **Alternative Engagement:** Promote offline hobbies (sports, arts, writing) as natural, enjoyable rewards rather than tasks.
*   **Community Building:** Leverage peer networks and school clubs (like the *RFZ Digital Wellbeing Club*) to make habit-building a collective, social effort.
*   **Resource Distribution:** Provide guidebooks, parents' reference cards, and classroom activities to create a supportive circle around the students.

---

## 3. Technology Stack Overview

The project is built as a lightweight, modern, and highly interactive Single Page Application (SPA):

*   **Core Framework:** [Angular v17+](https://angular.dev/) using **Standalone Components** for minimal overhead and faster load times.
*   **State Management:** Angular **Signals** (`signal`, `computed`, `effect`) for reactive UI state (theme toggle, language selection, responsive viewport tracking) without expensive change detection.
*   **Styling & Design:** Vanilla SCSS organized into clean variables, mixins, and viewport-driven scroll animations.
*   **Internationalization (i18n):** A custom, lightweight, compile-time checked translation system written in TypeScript (supporting English and Bengali) that avoids fetching dynamic JSON files over HTTP.
*   **Icons:** [Lucide Icons](https://lucide.dev/) loaded dynamically to keep assets lightweight.
