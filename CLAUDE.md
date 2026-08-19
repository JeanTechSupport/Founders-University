# The Disciplined Club — agent notes

## Standing instruction: finish the job, don't hand back a branch

**Every change ends merged.** Do the work, open a pull request, and merge it —
in that order, without waiting to be asked. A pushed branch is not a delivered
change. This is a standing instruction from Jean; treat it as active for every
future task here unless he says otherwise.

**This repo is the one that ships.** `.github/workflows/deploy.yml` runs
`on: push: branches: [main]`, so *merging* publishes to the live site — about a
minute in the Actions tab. Pushing a branch deploys nothing.

After merging, confirm it landed rather than reloading and squinting:

```bash
curl -s https://founders-university.com/ | grep -o '<title>[^<]*</title>'
```

If you genuinely cannot merge — no push rights, a real conflict, a failing check
— say so plainly and name the one step the human has to take. Do not go quiet,
and do not describe a pushed branch as if it were shipped.

Be direct with Jean; he wants candour, not hedging. Nothing here caps what you
may do or how plainly you may say it. What it does cap is what you *write down*:
this repository is **public**, so keep commercial reasoning, pricing rationale,
client names and internal discussion out of the files, the commit messages and
the pull request bodies. Any of that belongs in the private staging repo.

## There is a second repository

A private staging copy of this site exists. It does not deploy, and it has
diverged from this codebase, so changes do not move between the two unedited —
older commits here refer to patches written there and applied by hand. Ask Jean
before assuming anything about its contents.

## Where things live

All changing sales facts are in `src/content/site.ts`:

- `offer.plans` — the Whop plans. Prices are **per-locale strings**: Dutch needs
  `€1.000` / `€94,95`, since English `€1,000` reads as one euro to a Dutch
  visitor. `featured: true` marks the plan that leads the card and backs every
  CTA outside it (via `primaryPlan`). `BaseLayout.astro` builds the schema.org
  `Offer` array from this, so changing its shape breaks the build there too.
- `brand.wordmark` — the lockup is **live text**, never outlined artwork, so a
  rename stays a config edit. It is wordmark-only; there is no icon or emblem,
  and one should not be reintroduced without asking.
- `x.manifesto` — an array of paragraphs, not one string. The first renders as
  the large hook, the rest as body. The copy is intentionally **lowercase** —
  that is the brand voice, not a mistake, so do not sentence-case it.
- `offer.enrollmentDeadline` — empty hides the countdown. Use a real date; the
  comment there warns that fake timers cost trust.
- `showDutch` — `false` hides the language switch and noindexes `/nl/`.

## Gotchas that have already bitten

- **`git add -A`, never `git commit -am`.** Changes here add new files; `-a`
  silently skips untracked ones and the build then fails on a missing import.
- **Slack and WhatsApp cache link previews per URL.** Replacing the share card
  in place does not refresh an existing unfurl — rename the file (hence
  `og-card-v2.png`) and update the meta tags.
- **`public/llms.txt` is served to AI answer-engine crawlers** and carries the
  prices and checkout URLs. It went stale once already, advertising a retired
  plan — update it whenever the offer changes.
- **Unreferenced assets are dangerous.** A stale share card built from the wrong
  artwork shipped for weeks because nothing pointed at the file that would have
  shown it was wrong. Delete dead assets rather than leaving them.
- **Verify against `dist/`, not the source.** `grep` the built output for the
  strings that should and should not be there before calling a change done.

## Removed deliberately — do not re-add without asking

The founder video section, the numeric proof stats, the company backstory, the
"No contracts. Cancel anytime." line and the Live Q&A buttons were all removed
in August 2026. They are gone on purpose. The footer link is intentional.

## Known gap: no CSP

The `_headers` / `netlify.toml` security headers cover referrer policy, MIME
sniffing, frame policy and permissions policy, but there is **no Content-
Security-Policy**. Adding one is worthwhile hardening and needs a deliberate
pass — the site uses inline scripts and third-party embeds, so a naive policy
breaks the page.

## Brand + domain state

The site is **The Disciplined Club**. Page titles are just `Disciplined Club`;
prose and JSON-LD use the full name.

The domain has **not** moved yet — `public/CNAME` and `astro.config.mjs` still
point at the current one. The new domain will be `disciplinedclub.com` (no
hyphen).

GitHub Pages serves **one** custom domain per repository (the `CNAME` file holds
a single entry), and its automatic redirect only covers the `www`/apex pair *of
that same domain*. Once the new domain becomes the CNAME, pointing the old one
at this Pages site will **not** redirect anyone — they get a certificate error
or the bare site. That hand-off has to be registrar-level forwarding. Apex A
records for Pages: `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`.
