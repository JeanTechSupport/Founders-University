export type Locale = "en" | "nl";

export interface PlanConfig {
  /** Stable id — styling/analytics hook, never shown to visitors. */
  id: string;
  /** Keep matching the Whop plan title so checkout feels continuous. */
  name: Record<Locale, string>;
  /** Early-bird price, pre-formatted per locale (NL uses a comma decimal). */
  price: Record<Locale, string>;
  /** Regular price, rendered struck through. Omit the field to hide it. */
  compareAtPrice?: Record<Locale, string>;
  cadence: Record<Locale, string>;
  checkoutUrl: string;
  /** Leads the card visually. Exactly one plan should set this. */
  featured?: boolean;
  /** Small pill above the price. Omit the field to hide it. */
  badge?: Record<Locale, string>;
  /** Saving against the other plan. Omit the field to hide it. */
  savingsNote?: Record<Locale, string>;
}

export interface OfferConfig {
  /** Product name as it reads on the Whop checkout, so the hand-off matches. */
  productName: string;
  plans: PlanConfig[];
  enrollmentState: "draft" | "waitlist" | "open";
  /** ISO 8601 date for the enrollment countdown. Leave empty to hide it.
      Use a REAL deadline (cohort close / price rise) — fake timers hurt trust. */
  enrollmentDeadline?: string;
  youtubeVideoId?: string;
}

export const offer: OfferConfig = {
  productName: "The Disciplined Club",
  plans: [
    {
      id: "monthly",
      name: { en: "Early Bird Monthly", nl: "Early Bird Maandelijks" },
      price: { en: "€94.95", nl: "€94,95" },
      compareAtPrice: { en: "€118.69", nl: "€118,69" },
      cadence: { en: "/ month", nl: "/ maand" },
      checkoutUrl:
        "https://whop.com/disciplined-by-kim/early-bird-monthly-the-disciplined-club/",
      // Kim wants the low entry price to draw the clicks. Move `featured` to the
      // yearly plan to lead with the better per-year value instead.
      featured: true,
      badge: { en: "Most popular", nl: "Meest gekozen" },
    },
    {
      id: "yearly",
      name: { en: "Early Bird Yearly", nl: "Early Bird Jaarlijks" },
      price: { en: "€1,000", nl: "€1.000" },
      compareAtPrice: { en: "€1,250", nl: "€1.250" },
      cadence: { en: "/ year", nl: "/ jaar" },
      checkoutUrl:
        "https://whop.com/disciplined-by-kim/early-bird-year-the-disciplined-club/",
      savingsNote: {
        en: "Save €139.40 vs paying monthly",
        nl: "Bespaar €139,40 t.o.v. maandelijks",
      },
    },
  ],
  enrollmentState: "open",
  // Countdown is HIDDEN while this is empty. When Kim confirms the real close
  // date, set a full ISO timestamp (e.g. "2026-06-15T23:59:59") to show it again.
  enrollmentDeadline: "",
  youtubeVideoId: "CS1D5EZrDgg",
};

/** Plan that every CTA outside the pricing card points at. */
export const primaryPlan: PlanConfig =
  offer.plans.find((plan) => plan.featured) ?? offer.plans[0];

export const brand = {
  name: "The Disciplined Club",
  /** Two-line lockup set beside the eagle. Kept as text — never outlined into
      an SVG — so a future rename stays a one-line edit. */
  wordmark: { lead: "Disciplined", tail: "Club" },
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
  motionVideos: [
    {
      id: "U60GAKeFNCk",
      title: "Q&A: How I Actually Went From Broke to Where I Am Now",
    },
    {
      id: "RXuHNNu-WyU",
      title: "I Used to Be Broke. Here's What My Day Actually Looks Like Now",
    },
    {
      id: "bXLWloYWBTo",
      title: "If I was broke in my 20's, here's the system I would build",
    },
  ],
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
  hero: {
    titleLead: string;
    titleEmphasis: string;
    titleTail: string;
    imageAlt: string;
  };
  motion: {
    eyebrow: string;
    title: string;
    body: string;
    watchLabel: string;
    cues: string[];
    ticker: string[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    cards: Array<{ title: string; body: string; points: string[] }>;
  };
  method: {
    eyebrow: string;
    title: string;
    body: string;
    navigationLabel: string;
    nextLabel: string;
    cta: string;
    steps: Array<{ number: string; title: string; body: string; checkpoint: string }>;
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
    regularPrice: string;
    includesTitle: string;
    included: string[];
    cta: string;
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
    companyLink: string;
    youtubeLink: string;
  };
}

export const copy: Record<Locale, SiteCopy> = {
  en: {
    meta: {
      title: "Disciplined Club",
      description:
        "The Disciplined Club gives ambitious beginners monthly modules, live guidance and a private community to build online with structure.",
    },
    navigation: {
      cta: "Start now",
      accessibilityLabel: "Choose language",
    },
    hero: {
      titleLead: "What is",
      titleEmphasis: "holding you",
      titleTail: "back?",
      imageAlt: "Mountain peak rising above a sea of clouds.",
    },
    motion: {
      eyebrow: "Kim in motion",
      title: "Guidance you can feel before you join.",
      body:
        "A glimpse of the mindset, leadership and business thinking Kim brings into the community.",
      watchLabel: "Watch full video",
      cues: ["Mindset", "Leadership", "Scale"],
      ticker: ["Direction", "Discipline", "Live guidance", "Community", "Momentum"],
    },
    benefits: {
      eyebrow: "What you get inside",
      title: "A system for progress, not another folder of videos.",
      cards: [
        {
          title: "New monthly modules",
          body: "Keep building relevant business and life skills each month.",
          points: [
            "Discover ways to make money online",
            "Explore high-income skills and opportunities",
            "Stay current with practical strategies",
          ],
        },
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
          title: "Weekly live Q&A",
          body: "Get clarity when you are unsure what action comes next.",
          points: [
            "Ask direct questions",
            "Understand your next steps",
            "Learn through regular feedback",
          ],
        },
        {
          title: "Private community",
          body: "Build alongside people committed to growth and improvement.",
          points: [
            "Meet ambitious peers",
            "Stay accountable",
            "Grow in the right environment",
          ],
        },
      ],
    },
    method: {
      eyebrow: "Your first 30 days",
      title: "Turn intention into weekly momentum.",
      body:
        "Explore a realistic first month inside The Disciplined Club. Tap each stage to see how learning becomes action.",
      navigationLabel: "Explore your first month",
      nextLabel: "Next step",
      cta: "Start your journey",
      steps: [
        {
          number: "01",
          title: "Choose direction",
          body: "Begin with a focused module that helps you choose a path worth testing instead of chasing every possibility.",
          checkpoint: "You leave with one clear next action.",
        },
        {
          number: "02",
          title: "Build the habit",
          body: "Translate what you learn into a small weekly commitment you can actually execute alongside real life.",
          checkpoint: "Your idea becomes visible progress.",
        },
        {
          number: "03",
          title: "Remove blockers",
          body: "Bring questions to a weekly live Q&A and get clarity before confusion becomes another month of delay.",
          checkpoint: "You know what to fix or try next.",
        },
        {
          number: "04",
          title: "Stay in motion",
          body: "Share progress with a private community of people building with the same intention and accountability.",
          checkpoint: "Consistency no longer depends on motivation alone.",
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
      title: "Everything you need to start building online.",
      body: "Join The Disciplined Club and build with guidance every week.",
      plansTitle: "Choose your plan",
      regularPrice: "Regular price",
      includesTitle: "Your membership includes",
      included: [
        "Monthly growth modules",
        "Weekly live Q&A calls",
        "Private like-minded community",
        "Guidance, discipline and structure",
      ],
      cta: "Start now",
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Questions before you begin.",
      items: [
        {
          question: "What exactly do members get?",
          answer:
            "Members receive monthly modules, weekly live Q&A calls, access to a private community, and ongoing guidance focused on online business skills, consistency and personal growth.",
        },
        {
          question: "Who is this program for?",
          answer:
            "It is designed for ambitious people who feel stuck, lost or unsure where to begin online, whether they are complete beginners or already trying to build something.",
        },
        {
          question: "Do I need experience or credentials to join?",
          answer:
            "No. You do not need an existing business or previous credentials. The community is intended to help you start with direction and develop from there.",
        },
        {
          question: "Can I cancel anytime?",
          answer:
            "Yes. The membership is monthly, with no long-term contract, and can be cancelled at any time.",
        },
        {
          question: "What makes this different from other courses?",
          answer:
            "Information alone rarely creates progress. The Disciplined Club combines content with weekly guidance, accountability and a community of people committed to taking action.",
        },
      ],
    },
    footer: {
      statement: "Build what matters. Become who it requires.",
      blurb:
        "a private community of people building the same discipline, with a new module every month and a weekly live q&a.",
      disclaimer:
        "Individual results vary. The Disciplined Club provides education and community support; it does not guarantee earnings or business outcomes.",
      companyLink: "Easy Scale Media",
      youtubeLink: "Kim on YouTube",
    },
  },
  nl: {
    meta: {
      title: "Disciplined Club",
      description:
        "The Disciplined Club geeft ambitieuze beginners maandelijkse modules, live begeleiding en een private community om gestructureerd online te bouwen.",
    },
    navigation: {
      cta: "Start nu",
      accessibilityLabel: "Kies taal",
    },
    hero: {
      titleLead: "Wat houdt",
      titleEmphasis: "jou nog",
      titleTail: "tegen?",
      imageAlt: "Bergtop die boven een zee van wolken uitsteekt.",
    },
    motion: {
      eyebrow: "Kim in beweging",
      title: "Begeleiding die je voelt voordat je instapt.",
      body:
        "Een blik op de mindset, het leiderschap en de businessinzichten die Kim meebrengt naar de community.",
      watchLabel: "Bekijk volledige video",
      cues: ["Mindset", "Leiderschap", "Schaal"],
      ticker: ["Richting", "Discipline", "Live begeleiding", "Community", "Momentum"],
    },
    benefits: {
      eyebrow: "Wat je krijgt",
      title: "Een systeem voor vooruitgang, geen map vol video's.",
      cards: [
        {
          title: "Nieuwe maandelijkse modules",
          body: "Ontwikkel elke maand relevante vaardigheden voor business en leven.",
          points: [
            "Ontdek manieren om online inkomen op te bouwen",
            "Verken waardevolle vaardigheden en kansen",
            "Blijf bij met praktische strategieën",
          ],
        },
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
          title: "Wekelijkse live Q&A",
          body: "Krijg duidelijkheid wanneer je niet weet wat de volgende actie is.",
          points: [
            "Stel directe vragen",
            "Begrijp je volgende stappen",
            "Leer door regelmatige feedback",
          ],
        },
        {
          title: "Private community",
          body: "Bouw samen met mensen die toegewijd zijn aan groei.",
          points: [
            "Ontmoet ambitieuze peers",
            "Blijf verantwoordelijk",
            "Groei in de juiste omgeving",
          ],
        },
      ],
    },
    method: {
      eyebrow: "Je eerste 30 dagen",
      title: "Maak van intentie wekelijks momentum.",
      body:
        "Verken een realistische eerste maand binnen The Disciplined Club. Tik op elke fase om te zien hoe leren actie wordt.",
      navigationLabel: "Verken je eerste maand",
      nextLabel: "Volgende stap",
      cta: "Start je reis",
      steps: [
        {
          number: "01",
          title: "Kies richting",
          body: "Begin met een gerichte module die je helpt een kans te kiezen om te testen, in plaats van alles tegelijk na te jagen.",
          checkpoint: "Je vertrekt met een duidelijke volgende actie.",
        },
        {
          number: "02",
          title: "Bouw de gewoonte",
          body: "Zet wat je leert om in een kleine wekelijkse inzet die uitvoerbaar is naast je echte leven.",
          checkpoint: "Je idee wordt zichtbare vooruitgang.",
        },
        {
          number: "03",
          title: "Verwijder obstakels",
          body: "Neem vragen mee naar een wekelijkse live Q&A en krijg duidelijkheid voordat twijfel weer tijd kost.",
          checkpoint: "Je weet wat je als volgende verbetert of test.",
        },
        {
          number: "04",
          title: "Blijf bewegen",
          body: "Deel vooruitgang met een private community van mensen die met dezelfde intentie bouwen.",
          checkpoint: "Consistentie hangt niet langer alleen af van motivatie.",
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
      title: "Alles wat je nodig hebt om online te beginnen bouwen.",
      body: "Word lid van The Disciplined Club en bouw iedere week met begeleiding.",
      plansTitle: "Kies je plan",
      regularPrice: "Normale prijs",
      includesTitle: "Je lidmaatschap bevat",
      included: [
        "Maandelijkse groeimodules",
        "Wekelijkse live Q&A-calls",
        "Private community met gelijkgestemden",
        "Begeleiding, discipline en structuur",
      ],
      cta: "Start nu",
    },
    faq: {
      eyebrow: "Veelgestelde vragen",
      title: "Vragen voordat je begint.",
      items: [
        {
          question: "Wat krijgen leden precies?",
          answer:
            "Leden krijgen maandelijkse modules, wekelijkse live Q&A-calls, toegang tot een private community en begeleiding rond online businessvaardigheden, consistentie en persoonlijke groei.",
        },
        {
          question: "Voor wie is dit programma?",
          answer:
            "Het is ontworpen voor ambitieuze mensen die vastzitten of niet weten waar online te beginnen, of je nu compleet nieuw bent of al iets probeert te bouwen.",
        },
        {
          question: "Heb ik ervaring of kwalificaties nodig?",
          answer:
            "Nee. Je hebt geen bestaand bedrijf of eerdere kwalificaties nodig. De community helpt je gericht te starten en van daaruit te ontwikkelen.",
        },
        {
          question: "Kan ik op elk moment opzeggen?",
          answer:
            "Ja. Het lidmaatschap is maandelijks, zonder langlopend contract, en kan op elk moment worden opgezegd.",
        },
        {
          question: "Wat maakt dit anders dan andere cursussen?",
          answer:
            "Informatie alleen leidt zelden tot vooruitgang. The Disciplined Club combineert content met wekelijkse begeleiding, verantwoordelijkheid en een community die actie wil nemen.",
        },
      ],
    },
    footer: {
      statement: "Bouw wat telt. Word wie daarvoor nodig is.",
      blurb:
        "een private community van mensen die dezelfde discipline bouwen, met elke maand een nieuwe module en een wekelijkse live q&a.",
      disclaimer:
        "Individuele resultaten verschillen. The Disciplined Club biedt educatie en community-ondersteuning; het garandeert geen inkomen of zakelijke resultaten.",
      companyLink: "Easy Scale Media",
      youtubeLink: "Kim op YouTube",
    },
  },
};

// --- V2 ("The Ascent") supplemental content ---------------------------------
// Additive only. V2 reuses the shared `copy` above and layers these net-new
// strings on top, so the live V1 page is never affected. Every value here is a
// one-line swap, the same as the rest of the content model.

export interface V2Copy {
  loaderTagline: string;
  scrollCue: string;
  manifestoEyebrow: string;
  manifesto: string[];
  ethos: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; body: string }>;
  };
  storyRole: string;
  sectionLabels: string[];
  status: { open: string; waitlist: string; draft: string };
  planLabel: string;
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
    scrollCue: "Scroll to begin",
    manifestoEyebrow: "Why this exists",
    manifesto: [
      "you are not behind. you are undisciplined.",
      "that's the missing piece. not the room, not the timing, not the people around you — the decision to show up when you don't feel like it.",
      "and here's the part no one tells you: you already know this. you've known it for months. you've made the same promise to yourself on a sunday night a hundred times. and by wednesday you're back to the same version of you.",
      "that's not a motivation problem. that's a structure problem. you don't have a system that makes discipline the default instead of the exception.",
    ],
    ethos: {
      eyebrow: "What we stand for",
      title: "Principles, not promises.",
      items: [
        {
          title: "Environment over willpower",
          body: "Discipline gets easier when the room around you expects it. We build the room.",
        },
        {
          title: "Action over information",
          body: "You already know enough to start. Progress comes from doing the work and reviewing it every week.",
        },
        {
          title: "Direction over noise",
          body: "One path tested beats ten tabs open. We help you choose, then commit.",
        },
        {
          title: "A room, not an audience",
          body: "Nobody here is performing discipline at you. Everyone is running the same modules and showing up to the same weekly call.",
        },
      ],
    },
    storyRole: "Co-founder, The Disciplined Club",
    sectionLabels: [
      "Basecamp",
      "The reason",
      "Inside",
      "First 30 days",
      "Principles",
      "The fit",
      "Enrollment",
      "Questions",
      "In motion",
    ],
    status: { open: "Enrollment open", waitlist: "Join the waitlist", draft: "Opening soon" },
    planLabel: "Monthly membership",
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
    scrollCue: "Scroll om te beginnen",
    manifestoEyebrow: "Waarom dit bestaat",
    manifesto: [
      "je loopt niet achter. je bent ongedisciplineerd.",
      "dat is het ontbrekende stuk. niet de ruimte, niet de timing, niet de mensen om je heen — de keuze om op te komen dagen als je er geen zin in hebt.",
      "en dit vertelt niemand je: je weet dit al. je weet het al maanden. je hebt jezelf op een zondagavond honderd keer dezelfde belofte gedaan. en woensdag ben je terug bij dezelfde versie van jezelf.",
      "dat is geen motivatieprobleem. dat is een structuurprobleem. je hebt geen systeem dat discipline de standaard maakt in plaats van de uitzondering.",
    ],
    ethos: {
      eyebrow: "Waar we voor staan",
      title: "Principes, geen beloftes.",
      items: [
        {
          title: "Omgeving boven wilskracht",
          body: "Discipline wordt makkelijker als je omgeving het van je verwacht. Wij bouwen die ruimte.",
        },
        {
          title: "Actie boven informatie",
          body: "Je weet al genoeg om te beginnen. Vooruitgang komt door te doen en het elke week te bespreken.",
        },
        {
          title: "Richting boven ruis",
          body: "Eén pad getest verslaat tien tabbladen open. Wij helpen je kiezen en doorzetten.",
        },
        {
          title: "Een ruimte, geen publiek",
          body: "Niemand speelt hier discipline voor je. Iedereen draait dezelfde modules en komt naar dezelfde wekelijkse call.",
        },
      ],
    },
    storyRole: "Medeoprichter, The Disciplined Club",
    sectionLabels: [
      "Basiskamp",
      "De reden",
      "Binnenin",
      "Eerste 30 dagen",
      "Principes",
      "De match",
      "Inschrijven",
      "Vragen",
      "In beweging",
    ],
    status: { open: "Inschrijving open", waitlist: "Wachtlijst", draft: "Binnenkort" },
    planLabel: "Maandelijks lidmaatschap",
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
