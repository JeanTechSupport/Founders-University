# The Disciplined Club — agent notes

## Standing instruction: finish the job, don't hand back a branch

**Every change ends merged.** Do the work, open a pull request, and merge it —
in that order, without waiting to be asked. A pushed branch is not a delivered
change. This is a direct, standing instruction from Jean (19 Aug 2026); treat it
as active for every future task in this repo unless he says otherwise.

If you genuinely cannot merge — no push rights, a real conflict, a failing check
— say so plainly in your reply and name the one step the human has to take. Do
not go quiet, and do not describe a pushed branch as if it were shipped.

## This repo is the one that ships

`.github/workflows/deploy.yml` runs `on: push: branches: [main]`, so *merging*
publishes to `founders-university.com` — about a minute in the Actions tab.
Pushing a branch deploys nothing. That gap has already cost several round-trips.

`JeanCamposLabs/founders-university` (private) is the staging copy; it deploys
nowhere and has diverged from this codebase, so patches need porting between
them. Its `docs/disciplined-club-sync.md` tracks which are already applied.

The two codebases have **diverged** — a cherry-pick will not apply:

| | This repo | Live repo |
| --- | --- | --- |
| Design at `/` | v1; v2 lives at `/v2/` | v2 promoted to `/` |
| Fonts | Playfair + Jakarta | Space Grotesk |
| Components | `v2/LandingPageV2.astro` | `LandingPage.astro` |
| Stylesheet | `styles/v2.css` | `styles/global.css` |
| Layout | `BaseLayoutV2.astro` | `BaseLayout.astro` — also holds the JSON-LD |
| Extras | — | countdown, Umami events, sitemap, robots.txt, llms.txt |

Ported changes go in `docs/*.patch`, each verified by applying to a pristine
checkout of the live repo and building. `docs/disciplined-club-sync.md` tracks
which patches are already applied — **check it before re-applying anything.**

Sessions rooted on this repo cannot push to `JeanTechSupport` (cross-org attach
is refused, and the git proxy will not inject a credential). To merge there,
start a session with that repo as its source.

## Where things live

All changing sales facts are in `src/content/site.ts`:

- `offer.plans` — the Whop plans. Prices are **per-locale strings**: Dutch needs
  `€1.000` / `€94,95`, since English `€1,000` reads as one euro to a Dutch
  visitor. `featured: true` marks the plan that leads the card and backs every
  CTA outside it (via `primaryPlan`).
- `brand.wordmark` — the lockup is **live text**, never outlined artwork, so a
  rename stays a config edit. It is wordmark-only: the eagle was retired from
  the brand on 19 Aug 2026 at Kim's request, and `eagle.svg` / `favicon-eagle.svg`
  went with it. Do not reintroduce a bird.
- `x.manifesto` — an array of paragraphs, not one string. The first renders as
  the large hook, the rest as body. Kim's copy is deliberately **lowercase** —
  that is her voice, not a mistake, so do not sentence-case it.
- `offer.enrollmentDeadline` (live repo) — empty hides the countdown. Use a real
  date; the comment there warns that fake timers cost trust.

## Gotchas that have already bitten

- **`git add -A`, never `git commit -am`.** Patches here add new files
  (`Lockup.astro`, `LiveQaButton.astro`); `-a` silently skips untracked files and
  the build then fails on a missing import.
- **Slack and WhatsApp cache link previews per URL.** Replacing `og-card.png` in
  place does not refresh an existing unfurl — rename the file (hence
  `og-card-v2.png`) and update the meta tags.
- **`public/llms.txt` is served to AI answer-engine crawlers.** It carries the
  price and checkout URLs. It went stale once already — update it whenever the
  offer changes.
- **Unreferenced assets are dangerous.** A stale `og-card.png` built from the
  wrong eagle artwork shipped for weeks because nothing pointed at the file that
  would have shown it was wrong. Delete dead assets rather than leaving them.
- **Verify against the built output, not the source.** `grep` `dist/` for the
  strings that should and should not be there before claiming a change works.

## Removed on purpose — do not re-add without asking

Cut on 19 Aug 2026 at Kim's request: her video section, the 5+/35+/500+ proof
stats, the Easy Scale Media backstory, the "No contracts. Cancel anytime." line
(a loophole against the yearly plan) and the Live Q&A buttons (Whop-only, for
paying members). The footer still links to Easy Scale Media as plain
attribution; that is intentional.

## Known gap: no CSP

The `_headers` / `netlify.toml` security headers cover referrer policy, MIME
sniffing, frame policy and permissions policy, but there is **no Content-Security
-Policy**. Adding one is worthwhile hardening and needs a deliberate pass — the
site uses inline scripts and third-party embeds, so a naive policy breaks the
page. Carried over from the June 2026 Codex audit, which is otherwise resolved.

## Brand + domain state (as of 19 Aug 2026)

Renamed Founders University → **The Disciplined Club**. Page titles deliberately
drop the leading "The" (`Disciplined Club | …`); prose and JSON-LD keep it.

The domain has **not** moved yet — `CNAME` and `astro.config.mjs` still say
`founders-university.com`. When it does:

The new domain is **`disciplinedclub.com`** — no hyphen. GitHub Pages serves
**one** custom domain per repository, and its automatic
redirect only covers the `www`/apex pair *of that same domain*. Pointing
`founders-university.com` at the Pages site after `disciplinedclub.com` becomes
the CNAME will **not** redirect anyone. That hand-off has to be registrar-level
forwarding (GoDaddy has it built in). Apex A records for Pages:
`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`.
