# EpicSoftLogix

An Angular website with six hash-routed views: Home, Services, Our work, About us, Contact, and Accessibility. Built with standalone Angular components, TypeScript, and Vite. The initial design uses Angular's runtime template compiler.

## Local development

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory. Hash routes work on static hosting without rewrite rules. `.openai/hosting.json` records the private Sites project.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds and publishes `dist/` whenever changes reach `main`, or when run manually from GitHub Actions. It uses the lockfile with `npm ci` and Node.js 24.

In the target GitHub repository, select **Settings → Pages → Source → GitHub Actions**. Push this project's source to `main`, then wait for **Deploy EpicSoftLogix to GitHub Pages** to succeed. Use the URL returned by the deployment, rather than assuming a hostname.

`vite.config.ts` uses relative asset paths so the build works under a repository subpath and at a custom-domain root. Hash routes require no server rewrite rules. The build contains only public site files; `.openai/hosting.json` is not deployed to Pages. No custom domain is configured by this workflow.

## Content and interactions

- All project examples and dashboard figures are explicitly illustrative.
- No client names, testimonials, commercial performance metrics, or team biographies are fabricated.
- Portfolio filters open accessible project dialogs with Escape support and keyboard focus containment.
- The project brief form requires only name, email, and scope. Company, service, budget, and timeline are optional. Field errors are linked from a focused summary.
- A validated brief can be saved in localStorage, downloaded as plain text, or cleared. No data is transmitted by the form. Project CTAs clearly open the brief builder; no appointment is booked. Clearing a saved draft offers an undo action.

## Before a public launch

Connect the form to your selected backend/CRM and calendar, provide verified client stories and team details, establish your privacy policy, and configure epicsoftlogix.com. The custom domain has not been connected. For further production optimization, migrate runtime template compilation to Angular AOT and route-level code splitting.

## Design

White surfaces, bold navy typography, restrained electric blue accents, and a blue glass engineering illustration. SSI Decisions informed the spacious enterprise presentation and service hierarchy; its content, client claims, and assets are not reused. DM Sans and Manrope load from Google Fonts with system fallbacks. All illustrations and project mockups are CSS/SVG; no external image assets are required.

## Brand assets

Custom code-bracket logo surrounding a central diamond, with blue and cyan on a navy tile. `public/logo.svg` is the navy wordmark; `public/logo-light.svg` is the white version for dark backgrounds. `public/logo-mark.svg` is the standalone mark and `public/favicon.svg` is its browser icon. The Angular header and footer import `src/logo-mark.svg`. All assets are editable vectors.

## Accessibility and UX

The technical target is WCAG 2.2 AA. See [ACCESSIBILITY.md](ACCESSIBILITY.md) for tested changes, results, and remaining review. An accessibility statement is available at `#/accessibility`. This is an implementation target, not a certification of ADA compliance.

For local automated checks, open `http://127.0.0.1:5173/?audit` after `npm run dev`. Use **Run accessibility audit** to scan all six views, or **Audit this view** for an interaction state. The development audit module is excluded from the production bundle.
