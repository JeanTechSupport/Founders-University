# Founders University

Premium single-page marketing site for Founders University. Static **Astro** site in
**TypeScript** — dark editorial theme, a single brass accent, Space Grotesk type, and a
self-hosted intro video from the founder (Kim). English-only for now; a full Dutch
translation is built but hidden.

> **Picking this project up? Read [`docs/HANDOFF.md`](./docs/HANDOFF.md) first** — it has the
> full current state, the page anatomy, the video pipeline, deploy steps, and open TODOs.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check (type-check) + astro build -> dist/
npm run preview    # serve the built dist/
```

## Routes

- `/` — English (primary, indexed)
- `/nl/` — Dutch (built but **hidden** and `noindex`; set `showDutch = true` in
  `src/content/site.ts` to re-enable the language switch)

## Edit the copy or offer

Everything changeable lives in [`src/content/site.ts`](./src/content/site.ts) — offer,
brand links, feature flags, and all EN/NL copy. Notable knobs:

- `offer.enrollmentDeadline` — drives the pricing countdown. **Currently a placeholder** —
  set the real cohort-close date (or empty it to hide the countdown).
- `showDutch` — `false` hides the language switch and `noindex`es `/nl/`.

## The intro video

Self-hosted at `public/kim-message.mp4` (8-bit SDR H.264) with poster `public/kim-thumb.png`;
it is **click-to-play**. Kim's raw footage is 4K HDR 10-bit, which must be converted to
8-bit SDR before use — the exact `ffmpeg` pipeline is in
[`docs/HANDOFF.md`](./docs/HANDOFF.md#6-the-founder-video-self-hosted).

## Deploy

`npm run build`, then drag the `dist/` folder (or a zip of its contents) onto
[Netlify Drop](https://app.netlify.com/drop) for a shareable preview URL. `netlify.toml` and
`public/_headers` (security headers) are included. See the handoff doc for connecting the
repo to Netlify for automatic previews.

## Release checklist

1. Set the real `offer.enrollmentDeadline` (or remove the countdown).
2. Replace the hidden founder portrait placeholder with a real photo (remove `hidden` in the
   Story section of `src/components/LandingPage.astro`).
3. Decide on Dutch (`showDutch`) and have a fluent reviewer check the NL copy.
4. Confirm the checkout URL, price, and enrollment state with the client.
5. Confirm the production domain in `astro.config.mjs` (`site`).
6. `npm run build` and test `/` (and `/nl/` if enabling Dutch) on mobile + desktop.

## Supporting docs

- [`docs/HANDOFF.md`](./docs/HANDOFF.md) — full project state + how to continue
- [`docs/landing-page-plan.md`](./docs/landing-page-plan.md) — strategy brief
- [`docs/creative-assets-brief.md`](./docs/creative-assets-brief.md) — creative/production brief
