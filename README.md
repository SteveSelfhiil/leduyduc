# leduyduc.com — Astro + Tailwind v4

Rebuilt on Astro 7 (static output) + Tailwind CSS v4, deployed to Cloudflare
Workers as static assets. Replaces the previous plain-Node.js generator in
`../leduyduc-site` (kept as a backup — safe to delete once you're happy with
this one).

## Structure

- `src/content/{essays,poems,photos,pages}/*.md` — all content. Front
  matter fields: `title`, `tags`, `order` (lower = shown first / featured on
  homepage), `excerpt`, `cover`, `coverCaption`, `gallery`.
- `src/content.config.ts` — the schema for those four collections.
- `src/config.ts` — site name/tagline and the `SECTIONS` list that drives
  the nav, homepage spotlight blocks, and section listing pages. Add a
  section here (and a matching folder under `src/content/`) to add a new
  category — nothing else to wire up.
- `src/layouts/FullLayout.astro` — header/nav/footer, used for the homepage
  and section index pages.
- `src/layouts/MinimalLayout.astro` — no header/footer, just a back link —
  used for individual posts and standalone pages (About, Contact).
- `src/pages/[section]/index.astro` and `[slug].astro` — generic listing +
  post routes shared by essays/poems/photos.
- `src/styles/global.css` — Tailwind v4 (`@import "tailwindcss"`) plus the
  design tokens in `@theme` and all the original hand-written component
  CSS ported over unchanged.
- `public/` — static files served as-is at the site root. Drop `logo.png`
  and/or `favicon.ico` here to replace the text logo (auto-detected at
  build time, same as before). `public/media/` is where post images go
  (referenced in front matter/content as `/media/filename.jpg`).

## Commands

```
npm install
npm run dev       # local preview at localhost:4321
npm run build     # outputs to dist/
npm run deploy    # build + wrangler deploy (Cloudflare Workers)
```

## Still missing: images

These filenames are referenced in content but the actual image files
aren't in `public/media/` yet — the site builds fine without them, the
`<img>` tags just won't have anything to show until you add them:

- `profile-steve.jpg` (home page)
- `ho-ta-dung.jpg`
- `dran.jpg`, `vung-tau-bai-truoc.jpg`, `sai-gon.jpg`,
  `ngoan-muc-pass-dalat.jpg`, `ben-ninh-kieu.jpg` (in "The Land That Fills
  My Heart")
- `cau-dat-wind-turbine.jpg`, `family-on-a-bike.jpg`, `ngoan-muc-pass.jpg`

Drop them into `public/media/` with those exact names and rebuild.
