# downbad.app

Placeholder landing page for [DownBad](https://downbad.app) — deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Build & Preview

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` auto-deploy via GitHub Actions to GitHub Pages.

### DNS Setup (Route 53)

Point `downbad.app` to GitHub Pages:

| Type  | Name          | Value                       |
|-------|---------------|-----------------------------|
| A     | downbad.app   | 185.199.108.153             |
| A     | downbad.app   | 185.199.109.153             |
| A     | downbad.app   | 185.199.110.153             |
| A     | downbad.app   | 185.199.111.153             |
| CNAME | www           | downbadapp.github.io        |

### Bluesky Verification

The `.well-known/atproto-did` file is included for Bluesky handle verification at `downbad.app`.

1. Find your Bluesky DID at: Settings → Advanced → DID
2. Replace the placeholder in `public/.well-known/atproto-did` with your actual DID
3. Deploy, then change your Bluesky handle to `downbad.app`

For personal handles (`jason.downbad.app`, `tom.downbad.app`), use DNS TXT records instead:

| Type | Name                       | Value                          |
|------|----------------------------|--------------------------------|
| TXT  | _atproto.jason.downbad.app | did:plc:YOUR_JASON_DID_HERE    |
| TXT  | _atproto.tom.downbad.app   | did:plc:YOUR_TOM_DID_HERE      |

### Buttondown

Email signups go to the [DownBad Buttondown](https://buttondown.com/downbad) newsletter.

## This is a Placeholder

This site will be replaced by a full Astro site with docs, blog, and marketing pages once the product approaches public beta.
