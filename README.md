# Dharshan B — Engineering Portfolio

A responsive personal portfolio built with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion and Radix UI primitives. It uses a dark-first editorial visual system, with a saved light/dark theme choice and reduced-motion support.

## Run locally

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

## Update portfolio content

Edit [`src/data/portfolio.ts`](src/data/portfolio.ts) to change the name, hero copy, section headings, contact links, skills, project case studies, education timeline and certifications. The site’s portfolio content is typed and kept in this one file. Set each project’s `liveUrl` and `githubUrl` and each certification’s `credentialUrl` to your exact URLs when ready; missing project URLs appear as inactive link icons.

Replace `public/resume.pdf` with the latest resume and keep the filename the same, or change `resumePath` in the data file. The current PDF is copied from the supplied resume. It also supplies the email, GitHub/LinkedIn profiles, education and project outcomes shown here. Update any statement that changes over time, including availability, in the data file before publishing. The hero artwork is the original transparent illustration at `public/hero-avatar.webp`; replace it with your own optimized portrait if you prefer, then update `heroImage.src` and `heroImage.alt` in the data file.

The page title and structured person data are in `index.html`. Update the deployment domain in `index.html` (`og:url` and image URLs), `public/robots.txt`, and `public/sitemap.xml` after choosing a permanent domain. `public/og-image.png` is the social preview card and `public/og-image.svg` is its vector companion; update both if you change the branding.

## Contact

The contact section links directly to the email address in `src/data/portfolio.ts`. Visitors can open a new email or copy the address. No third-party form service or environment variable is required.

## Deploy to Vercel

Import this repository into Vercel. Vercel detects Vite; use `npm run build` as the build command and `dist` as the output directory. No rewrite configuration is needed for this single-page portfolio.

## Design notes

- Midnight navy and cool blue accents, with Manrope display type and DM Sans body type, keep the page polished and easy to read.
- The hero uses a locally stored original illustration beside a large animated role headline. Project previews are lightweight CSS compositions; each case-study dialog explains the problem, approach, outcome and stack.
- Skills use bundled Simple Icons and Font Awesome brand SVGs, so the open logo rows do not make external logo requests. The credential cards group the three CCNA courses together.
- The system theme is used until someone selects a theme; explicit choices persist in local storage.
- The Java code intro reveals its lines one by one on page load, then the navbar and hero reveal in a short stagger. The hero role types and erases between capitalized titles. Hero, card and section motion honors reduced-motion preferences; cards and controls use subtle hover states.
- Project repository and live-demo URLs are populated in the data file and can be edited there. Certification verification URLs remain optional and can be added to each `credentialUrl` field.
