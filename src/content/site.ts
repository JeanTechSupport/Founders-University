export type Locale = "en" | "nl";

export interface OfferConfig {
  monthlyPrice: string;
  billingCadence: Record<Locale, string>;
  checkoutUrl: string;
  enrollmentState: "draft" | "waitlist" | "open";
  /** ISO 8601 date for the enrollment countdown. Leave empty to hide it.
      Use a REAL deadline (cohort close / price rise) — fake timers hurt trust. */
  enrollmentDeadline?: string;
  youtubeVideoId?: string;
  cancelAnytime: boolean;
}

export const offer: OfferConfig = {
  monthlyPrice: "€49.95",
  billingCadence: { en: "/ month", nl: "/ maand" },
  checkoutUrl: "https://whop.com/checkout/plan_cj8jSLue9jjfn",
  enrollmentState: "open",
  // Countdown is HIDDEN while this is empty. When Kim confirms the real close
  // date, set a full ISO timestamp (e.g. "2026-06-15T23:59:59") to show it again.
  enrollmentDeadline: "",
  youtubeVideoId: "CS1D5EZrDgg",
  cancelAnytime: true,
};

export const brand = {
  name: "Founders University",
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
  plausibleDomain: "", // e.g. "founders-university.com"
  googleAnalyticsId: "", // e.g. "G-XXXXXXXXXX"
};

export const media = {
  heroImageUrl: "/Mountain.png" as string | undefined,
  motionVideos: [
    {
      id: "LJlXCLT0-LY",
      title: "The Real Reason Your Life Hasn't Changed Yet",
    },
    {
      id: "kBT0ncfEisY",
      title: "How to Make Your Team Actually Respect You (Not Just Fear You)",
    },
    {
      id: "r_1GjBdkD-c",
      title: "Why Most Businesses Fail to Scale (And How to Avoid It)",
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
  video: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    fallbackCta: string;
    iframeTitle: string;
    placeholderTitle: string;
    placeholderBody: string;
  };
  proof: Array<{ value: string; label: string }>;
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    attribution: string;
    mediaEyebrow: string;
    mediaTitle: string;
    mediaBody: string;
    founders: string[];
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
    includesTitle: string;
    included: string[];
    cta: string;
    assurance: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: {
    statement: string;
    disclaimer: string;
    companyLink: string;
    youtubeLink: string;
  };
}

export const copy: Record<Locale, SiteCopy> = {
  en: {
    meta: {
      title: "Founders University | Build Online With Direction",
      description:
        "Founders University gives ambitious beginners monthly modules, live guidance and a private community to build online with structure.",
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
    video: {
      eyebrow: "A special message from Kim",
      title: "",
      body: "",
      cta: "Explore membership",
      fallbackCta: "Watch Kim on YouTube",
      iframeTitle: "Founders University introduction by Kim Chiaretti",
      placeholderTitle: "Autoplay video placeholder",
      placeholderBody: "Choose a YouTube video and it will start here automatically, muted and responsive.",
    },
    proof: [
      { value: "5+", label: "years building businesses online" },
      { value: "35+", label: "people in the team" },
      { value: "500+", label: "e-commerce brands worked with" },
    ],
    story: {
      eyebrow: "Why Founders University",
      title: "You do not need more noise. You need a direction.",
      paragraphs: [
        "I was working a customer service 9-to-5 with no clear direction for my future. I saw other people build lives online while I stayed stuck, overthinking every move and trying to choose between conflicting opportunities.",
        "Over the last five years, that changed. Together with my brothers Bob and Luca, I helped build Easy Scale Media, a team serving e-commerce brands worldwide, alongside multiple online businesses and a lifestyle grounded in growth and discipline.",
        "Founders University is the guidance, structure and environment I wish I had when I started.",
      ],
      attribution: "Kim Chiaretti, co-founder",
      mediaEyebrow: "Founded by operators",
      mediaTitle: "Kim, Bob & Luca Chiaretti",
      mediaBody:
        "The founders behind Easy Scale Media bring real-world business experience into a community built for your next step.",
      founders: ["KIM", "BOB", "LUCA"],
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
        "Explore a realistic first month inside Founders University. Tap each stage to see how learning becomes action.",
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
      body: "Join Founders University and build with guidance every week.",
      includesTitle: "Your membership includes",
      included: [
        "Monthly growth modules",
        "Weekly live Q&A calls",
        "Private like-minded community",
        "Guidance, discipline and structure",
      ],
      cta: "Start now",
      assurance: "No contracts. Cancel anytime.",
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
            "Information alone rarely creates progress. Founders University combines content with weekly guidance, accountability and a community of people committed to taking action.",
        },
      ],
    },
    footer: {
      statement: "Build what matters. Become who it requires.",
      disclaimer:
        "Individual results vary. Founders University provides education and community support; it does not guarantee earnings or business outcomes.",
      companyLink: "Easy Scale Media",
      youtubeLink: "Kim on YouTube",
    },
  },
  nl: {
    meta: {
      title: "Founders University | Bouw Online Met Richting",
      description:
        "Founders University geeft ambitieuze beginners maandelijkse modules, live begeleiding en een private community om gestructureerd online te bouwen.",
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
    video: {
      eyebrow: "Een speciale boodschap van Kim",
      title: "",
      body: "",
      cta: "Bekijk het lidmaatschap",
      fallbackCta: "Bekijk Kim op YouTube",
      iframeTitle: "Founders University introductie door Kim Chiaretti",
      placeholderTitle: "Placeholder voor autoplay-video",
      placeholderBody: "Kies een YouTube-video en deze start hier automatisch, gedempt en responsive.",
    },
    proof: [
      { value: "5+", label: "jaar online bedrijven gebouwd" },
      { value: "35+", label: "mensen in het team" },
      { value: "500+", label: "e-commerce merken ondersteund" },
    ],
    story: {
      eyebrow: "Waarom Founders University",
      title: "Je hebt geen extra ruis nodig. Je hebt richting nodig.",
      paragraphs: [
        "Ik werkte in een klantenservicebaan van negen tot vijf, zonder helder beeld van mijn toekomst. Terwijl anderen online hun leven opbouwden, bleef ik vastzitten in twijfel en tegenstrijdige mogelijkheden.",
        "De afgelopen vijf jaar veranderde dat. Samen met mijn broers Bob en Luca bouwde ik mee aan Easy Scale Media, een team dat e-commerce merken wereldwijd ondersteunt, naast meerdere online bedrijven en een leven gericht op groei en discipline.",
        "Founders University is de begeleiding, structuur en omgeving die ik zelf had willen hebben toen ik begon.",
      ],
      attribution: "Kim Chiaretti, medeoprichter",
      mediaEyebrow: "Opgericht door ondernemers",
      mediaTitle: "Kim, Bob & Luca Chiaretti",
      mediaBody:
        "De founders achter Easy Scale Media brengen echte bedrijfservaring naar een community voor jouw volgende stap.",
      founders: ["KIM", "BOB", "LUCA"],
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
        "Verken een realistische eerste maand binnen Founders University. Tik op elke fase om te zien hoe leren actie wordt.",
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
      body: "Word lid van Founders University en bouw iedere week met begeleiding.",
      includesTitle: "Je lidmaatschap bevat",
      included: [
        "Maandelijkse groeimodules",
        "Wekelijkse live Q&A-calls",
        "Private community met gelijkgestemden",
        "Begeleiding, discipline en structuur",
      ],
      cta: "Start nu",
      assurance: "Geen contract. Altijd opzegbaar.",
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
            "Informatie alleen leidt zelden tot vooruitgang. Founders University combineert content met wekelijkse begeleiding, verantwoordelijkheid en een community die actie wil nemen.",
        },
      ],
    },
    footer: {
      statement: "Bouw wat telt. Word wie daarvoor nodig is.",
      disclaimer:
        "Individuele resultaten verschillen. Founders University biedt educatie en community-ondersteuning; het garandeert geen inkomen of zakelijke resultaten.",
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
  manifesto: string;
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
    manifesto:
      "You are not behind. You are missing the environment that makes building inevitable — the room, the rhythm, and the people who refuse to let you drift.",
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
          title: "Operators, not gurus",
          body: "Built by the team behind Easy Scale Media — people who run real businesses, not a course about courses.",
        },
      ],
    },
    storyRole: "Co-founder, Founders University",
    sectionLabels: [
      "Basecamp",
      "From Kim",
      "The reason",
      "The story",
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
    manifesto:
      "Je loopt niet achter. Je mist de omgeving die bouwen onvermijdelijk maakt — de ruimte, het ritme en de mensen die je niet laten afdwalen.",
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
          title: "Ondernemers, geen goeroes",
          body: "Gebouwd door het team achter Easy Scale Media — mensen met echte bedrijven, geen cursus over cursussen.",
        },
      ],
    },
    storyRole: "Medeoprichter, Founders University",
    sectionLabels: [
      "Basiskamp",
      "Van Kim",
      "De reden",
      "Het verhaal",
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
