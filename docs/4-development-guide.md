# Development Guide

This document provides instructions on how to set up the development environment, extend the application with new features or translations, and adhere to the project's styling and state management patterns.

---

## 1. Setup & Installation

Follow these steps to run the application locally:

```bash
# 1. Clone the repository and navigate to the project root
cd shomonnoy

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run start
# or using Angular CLI
ng serve
```

Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify project files.

---

## 2. Standard Development Rules

### A. Strict Typing
*   **Do not use `any`:** Ensure all models and variables are strictly typed.
*   **Define Models:** Place custom interfaces inside `src/app/core/models/`.

### B. Signal State Management
*   **State Location:** Keep state encapsulated inside services using Angular Signals.
*   **Signal Read/Write:** Expose Signals as read-only or handle updates through service methods (e.g., `themeService.toggleTheme()`) to ensure unidirectional data flow.

---

## 3. How-To: Add or Edit Translations (i18n)

Translations are handled by typescript dictionaries in `src/app/core/i18n/`. Both files (`en.ts` and `bn.ts`) share the same schema structure.

To add a new translation string:
1.  Open `src/app/core/i18n/en.ts` and add your key:
    ```typescript
    export const EN = {
      // ...
      about: {
        newTitle: "New Section Title"
      }
    };
    ```
2.  Open `src/app/core/i18n/bn.ts` and add the matching key with Bengali translation:
    ```typescript
    export const BN = {
      // ...
      about: {
        newTitle: "নতুন বিভাগের শিরোনাম"
      }
    };
    ```
3.  Bind the translation path in your HTML template using `TranslateService`:
    ```html
    <h2>{{ translate.t('about.newTitle') }}</h2>
    ```

---

## 4. How-To: Implement Scroll Reveal Animations

Scroll reveal animations are powered by `IntersectionObserver` via a viewport utility class:

1.  **Add CSS Classes:** In your component template, add the `.reveal` class. You can stagger entry using `.delay-1` through `.delay-12`:
    ```html
    <div class="card reveal delay-3">
      <h3>Self-Awareness Card</h3>
    </div>
    ```
2.  **Initialize the Observer:** Call `initRevealObserver()` inside the `AfterViewInit` life-cycle hook of your component:
    ```typescript
    import { Component, AfterViewInit } from '@angular/core';
    import { initRevealObserver } from '../../core/utils/viewport.util';

    @Component({
      // ...
    })
    export class MySectionComponent implements AfterViewInit {
      ngAfterViewInit() {
        initRevealObserver();
      }
    }
    ```

---

## 5. How-To: Add a New Section

To append a new page section or feature block, follow this checklist:

1.  **Generate the Component:**
    ```bash
    ng generate component features/my-new-section --standalone --style=scss
    ```
2.  **Define Layout Content:**
    Add translations to `en.ts` and `bn.ts` under the key name `myNewSection`.
3.  **Implement Logic & CSS:**
    *   Implement the component template and SCSS.
    *   Register `TranslateService` in the constructor to load translations.
    *   Initialize Lucide icons using `initLucideIcons()` on `AfterViewInit`.
4.  **Register the Section in Root Layout:**
    *   Open `src/app/app.component.ts` and import your component class.
    *   Add it to the `imports` array inside the `@Component` decorator metadata.
    *   Open `src/app/app.component.html` and append `<app-my-new-section></app-my-new-section>` to the layout stack.
5.  **Connect Navigation (Optional):**
    If the section should be accessible from the Navbar, add it to the links dictionary in `en.ts`/`bn.ts`, and set up the corresponding anchor linking with a matching DOM `id`.
