# Accessibility and UX review

Reviewed October 31, 2026. Technical target: WCAG 2.2 Level AA. This is not a legal certification, an independent audit, or a claim that every WCAG criterion has been fully evaluated.

## Implemented

- A keyboard-visible skip link, named primary navigation, current-page state, and a single main landmark.
- Focus moves to the page heading after navigation, or directly to a requested service section.
- Mobile navigation exposes its expanded state and controlled region, moves focus into its links, and closes with Escape.
- Concept dialogs have a name and description, inert background content, focus containment, Escape dismissal, and return focus to the exact initiating card after rendering.
- Larger text, explicit required/optional labels, 44px or larger primary touch controls, and visible focus indicators.
- Higher text contrast, clear field boundaries, reduced-motion support, and forced-colors styles.
- Portfolio filter state and a polite result-count announcement.
- Form errors use text, invalid-field state, linked field descriptions, and a focused error summary with working field links.
- Only name, email, and project scope are required; budget, timeline, company, and service remain optional.
- Draft saving is explicitly local, download is available, and clearing a draft supports undo. No inquiry or appointment is falsely reported as sent/booked.
- A public accessibility statement describes current features and limitations without claiming certification.

## Verification

The TypeScript check and Vite production build pass. axe-core checks with `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, and `wcag22aa` tags reported **zero violations** across Home, Services, Our work, About, Contact, and Accessibility at both **1280px and 320px** viewport widths. All six views had document width equal to viewport width at 320px. The invalid-form state and an open concept dialog were also checked with zero reported violations.

Manual browser checks covered the skip link, heading focus, service-section focus, dialog Tab/Shift+Tab containment, Escape, return focus, mobile menu focus, linked errors, invalid email detection, successful saving, clearing, and undo. Automated checks cannot determine complete conformance.

Some contrast results on transformed illustrations and gradients require manual review. Decorative illustration content is grouped into an image or hidden from assistive technology, with meaningful descriptions retained. The dialog close control uses the standard visible × glyph with the accessible name “Close case study.”

Representative contrast calculations (gradient text uses the brighter composited background):

| Element | Foreground / background | Contrast |
| --- | --- | --- |
| Body text | `#50617b` / `#ffffff` | 6.29:1 |
| Primary button | `#ffffff` / `#2855dc` | 6.13:1 |
| Form boundary | `#7389b0` / `#ffffff` | 3.54:1 |
| Error text | `#a51d20` / `#fff8f7` | 7.16:1 |
| CTA body | `#c1cde7` / `#1b2c5e` | 8.39:1 |
| CTA eyebrow | `#bbcbed` / `#1b2c5e` | 8.21:1 |
| About text | `#eef3ff` / `#22336a` | 10.8:1 |

## Remaining work and limitations

- Perform independent manual testing with VoiceOver/Safari and NVDA or JAWS, including reading order and announcements. These assistive-technology combinations have not been certified by this review.
- Test actual browser zoom up to 400%, user text-spacing overrides, and operating-system high-contrast modes. Responsive 320px reflow is verified, but does not replace every magnification test.
- Establish a monitored accessibility feedback channel. None has been supplied; the public statement discloses this.
- Connect and assess any future inquiry backend, scheduling service, cookie consent, embeds, and privacy notices before collecting/transmitting information. The current form stores a draft locally and downloads plain text only.
- Recheck new content, components, and third-party integrations.

## Reproduce

Run `npm ci` and `npm run dev`, then open `http://127.0.0.1:5173/?audit`. Use the development audit controls to scan every route or the current interaction state. The audit module is not included in production output.

Standards and guidance: [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and [DOJ web accessibility guidance](https://www.ada.gov/resources/web-guidance/).
