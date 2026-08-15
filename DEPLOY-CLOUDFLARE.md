# Deploying to Cloudflare Workers

This replaces the Linode VM plan. No server to patch, no nginx, no
certbot, no fail2ban — Cloudflare handles all of that for you.

## One-time setup

1. Install dependencies:
   ```
   cd leduyduc-astro
   npm install
   ```
2. Log in to Cloudflare (opens a browser to authorize):
   ```
   npx wrangler login
   ```

## Deploy

```
npm run build
npx wrangler deploy
```

That's it — `wrangler` uploads everything in `dist/` and gives you a live
URL on `*.workers.dev` immediately. Or just run `npm run deploy`, which
does both steps at once (already wired up in `package.json`).

## Connecting leduyduc.com

1. In the Cloudflare dashboard, go to your Worker (**Workers & Pages** →
   the site's name) → **Settings** → **Domains & Routes** → **Add** →
   **Custom Domain** → enter `leduyduc.com`.
2. If your domain's nameservers already point to Cloudflare (recommended —
   free plan, and it's what makes step 1 a one-click binding instead of
   manual DNS records), Cloudflare wires it up automatically, including
   HTTPS. If your domain is registered elsewhere and only has an A/CNAME
   record pointed at Cloudflare, add a CNAME for `leduyduc.com` to your
   `<worker-name>.workers.dev` address instead.
3. Repeat for `www.leduyduc.com` if you use it.

## Updating content going forward

Same workflow as before, just a different last step:

1. Edit/add `.md` files under `src/content/`.
2. `npm run build` to check it locally (`npm run dev` for a live preview).
3. `npx wrangler deploy` (or `npm run deploy`) to push live.

No VM to SSH into, no `rsync`, no rebuilding on a remote server — the
build happens on your machine (or Cloudflare's CI, if you connect a git
repo instead of deploying from your machine), and `wrangler deploy`
uploads the finished result directly.

## Decommissioning the Linode VM

Once you've confirmed the Cloudflare version is live and correct, you can
cancel/destroy the Linode instance — nothing on this new setup depends on
it. No rush; DNS can point at Cloudflare while the VM still exists as a
fallback until you're confident.
