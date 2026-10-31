# EpicSoftLogix

An Angular website with five hash-routed views: Home, Services, Our work, About us, and Contact. Built with standalone Angular components, TypeScript, and Vite. The initial design uses Angular's runtime template compiler.

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
- Contact collects name, email, company, service, budget, timeline, and project scope. The summary updates as fields change.
- A validated brief can be saved in localStorage, downloaded as plain text, or cleared. No data is transmitted by the form. Discovery call CTAs open this inquiry page; no appointment is booked.

## Before a public launch

Connect the form to your selected backend/CRM and calendar, provide verified client stories and team details, establish your privacy policy, and configure epicsoftlogix.com. The custom domain has not been connected. For further production optimization, migrate runtime template compilation to Angular AOT and route-level code splitting.

## Design

Cool white surfaces, midnight navy typography, electric blue and violet conversion buttons, and a blue glass engineering illustration. Rounded cards and a dark navy call-to-action carry the refreshed visual identity across all five pages. DM Sans and Manrope load from Google Fonts with system fallbacks. All illustrations and project mockups are CSS/SVG; no external image assets are required.
