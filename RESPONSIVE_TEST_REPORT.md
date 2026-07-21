# SensorDeck Responsive Adaptation Report

Date: 2026-07-21

## Scope

Responsive implementation and source-level validation covered:

- `/contact`
- `/`
- `/platform`
- `/products`
- `/products/runtime-investigation`
- `/products/runtime-sensor-governance`
- `/category`
- `/problem`
- `/library`

Each route was checked in both `zh` and `en`, for 18 route-language combinations.

Target breakpoints:

- Mobile: 320px-767px
- Tablet: 768px-1023px
- Desktop: 1024px and above
- Full bilingual desktop navigation: `xl` (1280px), preventing English navigation overflow near 1024px

## Issues Found And Fixed

### Shared Header And Navigation

- Reduced the mobile logo from a fixed 64px height to responsive `40px / 48px / 64px` sizing.
- Kept tablet widths on the hamburger navigation through 1279px to avoid English navigation overflow.
- Replaced the native `details` menu with a controlled mobile menu.
- Added `aria-expanded`, `aria-controls`, Escape handling, outside-click closing, and route-link closing.
- Replaced the hover-only language selector with a click/touch menu.
- Added Escape and outside-click closing to the language selector.
- Used icon-only language presentation below `sm` to preserve 320px header space.
- Set brand, menu, language, navigation, and CTA targets to at least 44px high.
- Constrained the mobile menu to `min(20rem, 100vw - 2rem)`.

### Contact Page

- Reduced the mobile hero title from 48px to 36px, scaling through `sm` and `md`.
- Reduced mobile description size and vertical spacing.
- Kept form field pairs single-column below `sm` and two-column from `sm`.
- Added `min-width: 0` behavior to the form and office cards.
- Set form controls to at least 48px high.
- Set mobile input text to 16px to prevent automatic iOS form zoom.
- Made the submit CTA full-width on mobile and content-width from `sm`.
- Reduced mobile office-card padding from 32px to 20px.
- Added safe wrapping for long office email addresses.
- Increased office email touch height to 44px.
- Reduced global-office grid gaps on mobile and retained two columns from `md`.

### Home Page

- Increased mobile hero height to reserve space for three CTAs.
- Changed the three hero CTAs to a vertical, full-width mobile stack.
- Restored wrapped horizontal CTAs from `sm` and desktop positioning from `lg`.
- Reduced mobile horizontal hero padding.
- Converted documentation and final CTA groups to full-width mobile controls.

### Platform, Products, Category, Problem, And Library

- Reduced mobile section padding and heading sizes.
- Applied responsive card padding (`p-5`, then `sm`/`md` expansion).
- Made grouped CTAs full-width on mobile.
- Added 44px minimum height to product and library action links.
- Removed unnecessary fixed minimum card height on mobile library cards.
- Kept multi-column grids behind `sm`, `md`, or `lg` breakpoints.

### Runtime Product Pages

- Reduced mobile product hero titles from 38px to 34px.
- Stacked hero and final CTAs on mobile.
- Changed the Runtime Investigation reference grid to one column on mobile and two from `sm`.
- Added word wrapping to long reference identifiers.
- Preserved existing `md`/`lg` capability grids.

### Global Responsive Foundations

- Changed shared section padding to `px-4`, then `sm:px-6`, `md:px-8`, and `lg:px-10`.
- Changed shared card padding to `p-5 sm:p-6`.
- Added safe button text wrapping and `max-width: 100%`.
- Added `overflow-x: clip` to the document body.
- Added global responsive bounds for images and SVG elements.
- Ensured form controls inherit the configured font.
- Increased footer navigation targets to 44px.
- Updated the floating animated-card controls for mobile stacking and 44px targets.

## Automated Verification

### Production Build

Command:

```text
npm run build
```

Result:

- Compilation passed.
- TypeScript passed.
- 44 pages generated successfully.
- All requested route modules were present in `.next/server/app`.

### ESLint

Command:

```text
npm run lint
```

Result:

- 0 errors.
- 2 pre-existing warnings:
  - Unused `e` in `scripts/analyze-zendesk-motion.mjs`.
  - Unused `mission` in `src/app/[lang]/company/page.tsx`.

### Bilingual SSR Route Audit

The production route handlers were invoked directly with proxy-equivalent locale headers.

Result: 18/18 passed.

| Route | zh | en |
| --- | --- | --- |
| `/` | Pass | Pass |
| `/contact` | Pass | Pass |
| `/platform` | Pass | Pass |
| `/products` | Pass | Pass |
| `/products/runtime-investigation` | Pass | Pass |
| `/products/runtime-sensor-governance` | Pass | Pass |
| `/category` | Pass | Pass |
| `/problem` | Pass | Pass |
| `/library` | Pass | Pass |

Each SSR check validated:

- HTTP 200 result
- Correct `html lang`
- Expected localized H1
- Header and Footer output
- Mobile menu SSR state and ARIA controls
- Language selector label
- No rendered Next.js application error

Contact-specific SSR checks passed in both languages:

- 5 input elements
- 2 select elements
- 1 textarea
- 1 submit button
- 2 global office cards

Machine-readable results are stored in:

```text
output/responsive-ssr-audit.json
```

### Static Responsive Audit

The requested page sources were scanned for common overflow risks.

Result:

- No unguarded `grid-cols-2` or larger grids in the target pages.
- No fixed pixel widths that can force mobile overflow.
- The only fixed-width match is the intentional `max-w-[1920px]` cap on the products architecture image.
- `git diff --check` passed.

## Browser Test Limitation

Full Chrome DevTools device-emulation testing could not be completed in the current execution environment:

- Next.js could not bind `0.0.0.0:3000` or `127.0.0.1:3001`; both returned `EPERM`.
- Playwright Chromium could not launch because macOS denied the browser Mach port registration.
- No in-app browser session was available.
- Chrome and Edge UI control was not approved for this session.

Therefore, this report does not claim completed visual screenshot verification or live hamburger-menu clicking in Chrome DevTools. Build output, SSR output, component behavior, breakpoint classes, touch-target declarations, and overflow-risk patterns were verified. A final manual pass should still be run in an unrestricted local Chrome session at 320, 390, 768, 820, 1024, and 1440px widths.
