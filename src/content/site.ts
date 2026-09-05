export type Locale = "en" | "nl";

export interface PlanConfig {
  /** Stable id — styling/analytics hook, never shown to visitors. */
  id: string;
  /** Keep matching the Whop plan title so checkout feels continuous. */
  name: Record<Locale, string>;
  /** Price, pre-formatted per locale (NL uses a comma decimal). */
  price: Record<Locale, string>;
  /** Sits under the price. Kim quotes prices as "incl. VAT", not per period. */
  cadence: Record<Locale, string>;
  /** Whop checkout. EMPTY = the plan renders as "coming soon", not a dead link. */
  checkoutUrl: string;
  /** Leads the card visually and backs every CTA outside it. Exactly one plan. */
  featured?: boolean;
  /** Small pill above the price. Omit the field to hide it. */
  badge?: Record<Locale, string>;
  /** What this plan includes. Rendered inside the plan, never as a shared list —
      the two plans differ, so a single site-wide "includes" list would lie. */
  features: Record<Locale, string[]>;
}

export interface OfferConfig {
  /** Product name as it reads on the Whop checkout, so the hand-off matches. */
  productName: string;
  plans: PlanConfig[];
  enrollmentState: "draft" | "waitlist" | "open";
  /** ISO 8601 date for the enrollment countdown. Leave empty to hide it.
      Use a REAL deadline (cohort close / price rise) — fake timers hurt trust. */
  enrollmentDeadline?: string;
}

export const offer: OfferConfig = {
  productName: "The Disciplined Club",
  plans: [
    {
      id: "discipline",
      name: { en: "The Discipline Plan", nl: "The Discipline Plan" },
      price: { en: "€34.95", nl: "€34,95" },
      cadence: { en: "incl. VAT", nl: "incl. btw" },
      // TODO: paste the Whop link from Kim. Until it is filled in, the plan
      // shows `pricing.ctaPending` instead of a button that goes nowhere.
      checkoutUrl: "",
      // Kim wants the low entry price to draw the clicks. Move `featured` to
      // the plus plan to lead with the fuller offer instead.
      featured: true,
      features: {
        en: [
          "Immediate access to the FULL course",
          "EVERY month a new video",
          "Cancel anytime, no long-term commitment",
        ],
        nl: [
          "Direct toegang tot de VOLLEDIGE cursus",
          "ELKE maand een nieuwe video",
          "Altijd opzegbaar, geen langlopend contract",
        ],
      },
    },
    {
      id: "discipline-plus",
      name: { en: "The Discipline + Plan", nl: "The Discipline + Plan" },
      price: { en: "€149.95", nl: "€149,95" },
      cadence: { en: "incl. VAT", nl: "incl. btw" },
      // TODO: paste the Whop link from Kim.
      checkoutUrl: "",
      features: {
        en: [
          "Weekly Q&A with the community",
          "Private WhatsApp group to stay accountable",
          "Monthly updated content so you keep growing after the 90 days",
          "Implement everything and become the person you're dreaming of",
        ],
        nl: [
          "Wekelijkse Q&A met de community",
          "Private WhatsApp-groep om verantwoordelijk te blijven",
          "Maandelijks nieuwe content zodat je na de 90 dagen blijft groeien",
          "Implementeer alles en word de persoon die je voor ogen hebt",
        ],
      },
    },
  ],
  enrollmentState: "open",
  // Countdown is HIDDEN while this is empty. When Kim confirms the real close
  // date, set a full ISO timestamp (e.g. "2026-06-15T23:59:59") to show it again.
  enrollmentDeadline: "",
};

/** Plan that every CTA outside the pricing card points at. */
export const primaryPlan: PlanConfig =
  offer.plans.find((plan) => plan.featured) ?? offer.plans[0];

/** Where an outside CTA sends people. Falls back to the pricing section while
    the checkout link is still missing, so no button is ever a dead end. */
export const primaryCtaHref = primaryPlan.checkoutUrl || "#enrollment";
export const primaryCtaIsExternal = Boolean(primaryPlan.checkoutUrl);

export const brand = {
  name: "The Disciplined Club",
  /** Two-line lockup. Kept as text — never outlined into an SVG — so a future
      rename stays a one-line edit. */
  wordmark: { lead: "Disciplined", tail: "Club" },
  // Not linked in the footer any more (Kim, 5 Sep 2026). Still used as a
  // schema.org `sameAs` signal, which is invisible to visitors.
  companyUrl: "https://www.easyscalemedia.com/",
  youtubeUrl: "https://www.youtube.com/@kimchiaretti",
};

// English-only for now. The Dutch route + translations are kept as a valuable
// asset; flip to true to re-show the language switch and index the NL page.
export const showDutch = false;

// Analytics — OFF by default (nothing loads until you fill one in).
// Plausible is cookieless / GDPR-friendly (recommended in the EU — no cookie banner).
// Google Analytics (GA4) also works but needs a cookie-consent banner in the EU.
export const analytics = {
  // Umami Cloud — FREE + cookieless, works on any host (no DNS change). Recommended.
  // Sign up at cloud.umami.is → Add website → copy the data-website-id (a UUID).
  umamiWebsiteId: "38fdef2f-593d-4947-acfe-5a6aa7cbf1df",
  // Cloudflare Web Analytics — also free + cookieless, but its JS-beacon option is
  // buried and tries to make you move DNS to Cloudflare (not worth it just for this).
  cloudflareToken: "",
  plausibleDomain: "", // Plausible — paid
  googleAnalyticsId: "", // GA4 — needs a cookie-consent banner in the EU
};

export const media = {
  heroImageUrl: "/Mountain.png" as string | undefined,
};

export const localeSettings: Record<
  Locale,
  { lang: string; path: string; switchLabel: string; localeName: string }
> = {
  en: { lang: "en", path: "/", switchLabel: "EN", localeName: "English" },
  nl: { lang: "nl", path: "/nl/", switchLabel: "NL", localeName: "Nederlands" },
};

interface SiteCopy {
  meta: { title: string; description: string };
  navigation: { cta: string; accessibilityLabel: string };
  hero: { imageAlt: string };
  benefits: {
    eyebrow: string;
    title: string;
    cards: Array<{ title: string; body: string; points: string[] }>;
  };
  method: {
    eyebrow: string;
    title: string;
    navigationLabel: string;
    stepLabel: string;
    cta: string;
    steps: Array<{ number: string; title: string; points: string[] }>;
  };
  fit: {
    eyebrow: string;
    title: string;
    forTitle: string;
    forPoints: string[];
    notTitle: string;
    notPoints: string[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    body: string;
    plansTitle: string;
    cta: string;
    /** Shown in place of the button while a plan has no checkout link yet. */
    ctaPending: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: {
    statement: string;
    blurb: string;
    disclaimer: string;
  };
}

export const copy: Record<Locale, SiteCopy> = {
  en: {
    meta: {
      title: "Disciplined Club",
      description:
        "The Disciplined Club is a system to become your best self: the full course, a new module every month, and an optional weekly Q&A with a private accountability group.",
    },
    navigation: {
      cta: "Start now",
      accessibilityLabel: "Choose language",
    },
    hero: {
      imageAlt: "Mountain peak rising above a sea of clouds.",
    },
    benefits: {
      eyebrow: "What you get inside",
      title:
        "A system to become your best self, not another random course full of weak information.",
      cards: [
        {
          title: "Discipline & accountability",
          body: "Turn ambition into routines that hold up in real life.",
          points: [
            "Build consistency",
            "Develop real focus",
            "Create habits that move you forward",
          ],
        },
        {
          title: "New monthly modules",
          body: "Keep building relevant business and life skills each month.",
          points: [
            "Discover the systems to become your best self",
            "Explore high-income skills and opportunities",
            "Stay current with practical strategies",
          ],
        },
        {
          title: "Simple systems",
          body: "Routines that survive a bad week, not just a good one.",
          points: [
            "No overcomplicated routines",
            "Systems designed to work even on your lowest days",
            "Repeatable habits, not one-time motivation",
          ],
        },
      ],
    },
    method: {
      eyebrow: "How it works",
      title: "Stop overthinking. Start doing.",
      navigationLabel: "Explore the four steps",
      stepLabel: "Step",
      cta: "Start now",
      steps: [
        {
          number: "01",
          title: "Watch Module 1 — Habits",
          points: [
            "Build a morning routine that actually sticks, no willpower required",
            "Design an evening routine that sets up tomorrow before it even starts",
            "Become the person who shows up consistently, not just when motivated",
          ],
        },
        {
          number: "02",
          title: "Watch Modules 2-5 — Mind, Body & Income",
          points: [
            "Reprogram your mindset so discipline feels automatic, not forced",
            "Build physical discipline that carries into every other area of your life",
            "Learn the high-income skills that actually move your life forward",
          ],
        },
        {
          number: "03",
          title: "Become THAT Person",
          points: [
            "Strengthen your spirit and inner alignment, not just your habits",
            "Cut out the people quietly keeping you stuck",
            "Remove the bad habits that don't fit who you're becoming",
          ],
        },
        {
          number: "04",
          title: "Implement & Stay Focused",
          points: [
            "Apply everything in real life, not just in theory",
            "Get new content every month so you never get stuck again",
            "Stay accountable",
          ],
        },
      ],
    },
    fit: {
      eyebrow: "Are you a good fit?",
      title: "This program is not for everyone.",
      forTitle: "This is for you if",
      forPoints: [
        "You feel lost and do not know where to begin online.",
        "You want more discipline, focus and direction in your life.",
        "You are serious about building skills and income over time.",
      ],
      notTitle: "This is not for you if",
      notPoints: [
        "You want success without consistent effort.",
        "You keep researching but are unwilling to take action.",
        "You are not ready to take responsibility for your growth.",
      ],
    },
    pricing: {
      eyebrow: "Start your journey today",
      title: "Everything you need to start building your 90-day transformation.",
      body: "Join The Disciplined Club and build with structure from day one.",
      plansTitle: "Choose your plan",
      cta: "Start now",
      ctaPending: "Payment link coming soon",
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Questions before you begin.",
      items: [
        {
          question: "What exactly do members get?",
          answer:
            "Every member gets immediate access to the full course and a new module every month. The Discipline + plan adds a weekly live Q&A with the community and a private WhatsApp group to keep you accountable.",
        },
        {
          question: "Who is this program for?",
          answer:
            "It is designed for ambitious people who feel stuck, lost or unsure where to begin online, whether they are complete beginners or already trying to build something.",
        },
        {
          question: "Do I need experience or credentials to join?",
          answer:
            "No. You do not need an existing business or previous credentials. The course is intended to help you start with direction and develop from there.",
        },
        {
          question: "Can I cancel anytime?",
          answer:
            "Yes. There is no long-term commitment, and you can cancel at any time.",
        },
        {
          question: "What makes this different from other courses?",
          answer:
            "Information alone rarely creates progress. The Disciplined Club pairs the course with simple systems built to work on your lowest days, and, on the Discipline + plan, weekly guidance and a group of people taking the same action.",
        },
      ],
    },
    footer: {
      statement: "Build what matters. Become who you're meant to be.",
      blurb:
        "the full course, a new module every month, and simple systems that hold up on the days you do not feel like it.",
      disclaimer:
        "Individual results vary. The Disciplined Club provides education and community support; it does not guarantee earnings or business outcomes.",
    },
  },
  nl: {
    meta: {
      title: "Disciplined Club",
      description:
        "The Disciplined Club is een systeem om je beste zelf te worden: de volledige cursus, elke maand een nieuwe module en optioneel een wekelijkse Q&A met een private accountability-groep.",
    },
    navigation: {
      cta: "Start nu",
      accessibilityLabel: "Kies taal",
    },
    hero: {
      imageAlt: "Bergtop die boven een zee van wolken uitsteekt.",
    },
    benefits: {
      eyebrow: "Wat je krijgt",
      title:
        "Een systeem om je beste zelf te worden, geen zoveelste cursus vol zwakke informatie.",
      cards: [
        {
          title: "Discipline & verantwoordelijkheid",
          body: "Maak van ambitie routines die standhouden in het echte leven.",
          points: [
            "Bouw consistentie op",
            "Ontwikkel echte focus",
            "Maak gewoontes die je vooruitbrengen",
          ],
        },
        {
          title: "Nieuwe maandelijkse modules",
          body: "Ontwikkel elke maand relevante vaardigheden voor business en leven.",
          points: [
            "Ontdek de systemen om je beste zelf te worden",
            "Verken waardevolle vaardigheden en kansen",
            "Blijf bij met praktische strategieën",
          ],
        },
        {
          title: "Simpele systemen",
          body: "Routines die een slechte week overleven, niet alleen een goede.",
          points: [
            "Geen overgecompliceerde routines",
            "Systemen die ook op je slechtste dagen werken",
            "Herhaalbare gewoontes, geen eenmalige motivatie",
          ],
        },
      ],
    },
    method: {
      eyebrow: "Zo werkt het",
      title: "Stop met overdenken. Begin met doen.",
      navigationLabel: "Verken de vier stappen",
      stepLabel: "Stap",
      cta: "Start nu",
      steps: [
        {
          number: "01",
          title: "Bekijk Module 1 — Gewoontes",
          points: [
            "Bouw een ochtendroutine die echt blijft hangen, zonder wilskracht",
            "Ontwerp een avondroutine die morgen al klaarzet voordat die begint",
            "Word iemand die consistent opdaagt, niet alleen als de motivatie er is",
          ],
        },
        {
          number: "02",
          title: "Bekijk Module 2-5 — Mind, Body & Inkomen",
          points: [
            "Herprogrammeer je mindset zodat discipline vanzelf gaat",
            "Bouw fysieke discipline die doorwerkt in elk ander gebied van je leven",
            "Leer de vaardigheden die je leven echt vooruit brengen",
          ],
        },
        {
          number: "03",
          title: "Word DIE Persoon",
          points: [
            "Versterk je innerlijke rust en richting, niet alleen je gewoontes",
            "Neem afstand van de mensen die je stilletjes vasthouden",
            "Laat de gewoontes los die niet passen bij wie je wordt",
          ],
        },
        {
          number: "04",
          title: "Implementeer & Blijf Gefocust",
          points: [
            "Pas alles toe in het echte leven, niet alleen in theorie",
            "Krijg elke maand nieuwe content zodat je nooit meer vastloopt",
            "Blijf verantwoordelijk",
          ],
        },
      ],
    },
    fit: {
      eyebrow: "Past dit bij jou?",
      title: "Dit programma is niet voor iedereen.",
      forTitle: "Dit is voor jou als",
      forPoints: [
        "Je je verloren voelt en niet weet waar online te beginnen.",
        "Je meer discipline, focus en richting in je leven wilt.",
        "Je serieus bent over het ontwikkelen van vaardigheden en inkomen.",
      ],
      notTitle: "Dit is niet voor jou als",
      notPoints: [
        "Je succes wilt zonder consistente inzet.",
        "Je blijft zoeken maar geen actie wilt nemen.",
        "Je niet klaar bent om verantwoordelijkheid te nemen voor je groei.",
      ],
    },
    pricing: {
      eyebrow: "Start vandaag jouw reis",
      title: "Alles wat je nodig hebt voor je transformatie van 90 dagen.",
      body: "Word lid van The Disciplined Club en bouw vanaf dag één met structuur.",
      plansTitle: "Kies je plan",
      cta: "Start nu",
      ctaPending: "Betaallink volgt binnenkort",
    },
    faq: {
      eyebrow: "Veelgestelde vragen",
      title: "Vragen voordat je begint.",
      items: [
        {
          question: "Wat krijgen leden precies?",
          answer:
            "Elk lid krijgt direct toegang tot de volledige cursus en elke maand een nieuwe module. Het Discipline + plan voegt daar een wekelijkse live Q&A met de community en een private WhatsApp-groep aan toe.",
        },
        {
          question: "Voor wie is dit programma?",
          answer:
            "Het is ontworpen voor ambitieuze mensen die vastzitten of niet weten waar online te beginnen, of je nu compleet nieuw bent of al iets probeert te bouwen.",
        },
        {
          question: "Heb ik ervaring of kwalificaties nodig?",
          answer:
            "Nee. Je hebt geen bestaand bedrijf of eerdere kwalificaties nodig. De cursus helpt je gericht te starten en van daaruit te ontwikkelen.",
        },
        {
          question: "Kan ik op elk moment opzeggen?",
          answer:
            "Ja. Er is geen langlopend contract en je kunt op elk moment opzeggen.",
        },
        {
          question: "Wat maakt dit anders dan andere cursussen?",
          answer:
            "Informatie alleen leidt zelden tot vooruitgang. The Disciplined Club combineert de cursus met simpele systemen die ook op je slechtste dagen werken, en op het Discipline + plan wekelijkse begeleiding en een groep die dezelfde stappen zet.",
        },
      ],
    },
    footer: {
      statement: "Bouw wat telt. Word wie je bedoeld bent te zijn.",
      blurb:
        "de volledige cursus, elke maand een nieuwe module en simpele systemen die standhouden op de dagen dat je er geen zin in hebt.",
      disclaimer:
        "Individuele resultaten verschillen. The Disciplined Club biedt educatie en community-ondersteuning; het garandeert geen inkomen of zakelijke resultaten.",
    },
  },
};

// --- Supplemental content ---------------------------------------------------
// Strings that sit outside the section-by-section `copy` model above.

export interface V2Copy {
  loaderTagline: string;
  manifestoEyebrow: string;
  /** Opens the page. The first entry is the hook and renders as the H1; the
      rest are the explanation directly beneath it. Kim's copy is deliberately
      lowercase — that is her voice, not a mistake. */
  manifesto: string[];
  sectionLabels: string[];
  status: { open: string; waitlist: string; draft: string };
  countdown: {
    caption: string;
    ended: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  backToTop: string;
}

export const v2: Record<Locale, V2Copy> = {
  en: {
    loaderTagline: "Begin the ascent",
    manifestoEyebrow: "Why this exists",
    manifesto: [
      "you are not behind. you are undisciplined.",
      "that's the missing piece. not the room, not the timing, not the people around you — the decision to show up when you don't feel like it.",
      "and here's the part no one tells you: you already know this. you've known it for months. you've made the same promise to yourself on a sunday night a hundred times. and by wednesday you're back to the same version of you.",
      "that's not a motivation problem. that's a structure problem. you don't have a system that makes discipline the default instead of the exception.",
    ],
    sectionLabels: ["The reason", "Inside", "How it works", "The fit", "Enrollment", "Questions"],
    status: { open: "Enrollment open", waitlist: "Join the waitlist", draft: "Opening soon" },
    countdown: {
      caption: "Enrollment for this class closes in",
      ended: "Enrollment closes soon",
      days: "Days",
      hours: "Hrs",
      minutes: "Min",
      seconds: "Sec",
    },
    backToTop: "Back to top",
  },
  nl: {
    loaderTagline: "Begin de klim",
    manifestoEyebrow: "Waarom dit bestaat",
    manifesto: [
      "je loopt niet achter. je bent ongedisciplineerd.",
      "dat is het ontbrekende stuk. niet de ruimte, niet de timing, niet de mensen om je heen — de keuze om op te komen dagen als je er geen zin in hebt.",
      "en dit vertelt niemand je: je weet dit al. je weet het al maanden. je hebt jezelf op een zondagavond honderd keer dezelfde belofte gedaan. en woensdag ben je terug bij dezelfde versie van jezelf.",
      "dat is geen motivatieprobleem. dat is een structuurprobleem. je hebt geen systeem dat discipline de standaard maakt in plaats van de uitzondering.",
    ],
    sectionLabels: ["De reden", "Binnenin", "Zo werkt het", "De match", "Inschrijven", "Vragen"],
    status: { open: "Inschrijving open", waitlist: "Wachtlijst", draft: "Binnenkort" },
    countdown: {
      caption: "Inschrijving voor deze class sluit over",
      ended: "Inschrijving sluit binnenkort",
      days: "Dagen",
      hours: "Uur",
      minutes: "Min",
      seconds: "Sec",
    },
    backToTop: "Terug naar boven",
  },
};
