# Petrov Web Design

The business's own sales page — aimed at local business owners, not recruiters. One
page: the fixed £600 package, live example sites, how it works, straight answers to
the usual objections, and a contact form.

**Live:**
- https://petrov-web-design.pages.dev (Cloudflare Pages — primary)
- https://brpetrov.github.io/petrov-web-design/ (GitHub Pages — mirror)

## Stack

Astro 5 · Tailwind CSS 4 (via `@tailwindcss/vite`) · self-hosted fonts (Fontsource:
Space Grotesk + Inter) · inline SVG icons (no icon dependency) · Web3Forms contact
form. Static, no backend, no CMS.

## Editing

Everything the studio actually changes lives in **`src/data/site.ts`**:

- **Studio name, owner, location, email, phone** — the `site` object. Leave
  `phoneDisplay` empty to hide the phone line until there's a business number.
- **The £600 package contents** — the `included` array (also drives the pricing card).
- **Example sites** — the `examples` array (name, kind, blurb, screenshot, live URL).
- **Process steps** — the `steps` array.
- **FAQ / objection answers** — the `faqs` array.

Screenshots for the examples live in `public/images/` (`example-*.jpg`). Brand tokens
(colours, fonts, radius) are in `src/styles/global.css` under `@theme`.

### Contact form

Submissions go to the inbox tied to the Web3Forms key in `site.ts`
(`web3formsKey`). Get a free key at [web3forms.com](https://web3forms.com).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds twice: once for
GitHub Pages (with the `/petrov-web-design` base path) and once for Cloudflare Pages
(`DEPLOY_TARGET=cf`, served at the root). Cloudflare needs the repo secrets
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.

Any absolute internal link or asset path must go through the `withBase()` helper in
`src/lib/url.ts` so it works under both the base path and the root.
