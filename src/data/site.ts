// All studio identity, offer, examples and copy live here.
// This is the single edit point — change the studio name, price, links and
// content below without touching the page markup.

export const site = {
  // --- Identity ---------------------------------------------------------
  studioName: "Petrov Web Studio",
  owner: "Boyan Petrov",
  location: "Leeds & West Yorkshire",
  // The contact form routes here via Web3Forms regardless of what is shown.
  email: "brpetrov@outlook.com",
  // Leave phone empty to hide the phone line until a business number is set.
  phoneDisplay: "",
  phoneHref: "",

  // Web3Forms: enquiries land in the inbox tied to this key (web3forms.com).
  web3formsKey: "10ae9f41-4a72-4f53-8c76-ccdff4d6e50c",

  links: {
    portfolio: "https://boyan-petrov.pages.dev",
    github: "https://github.com/brpetrov",
    linkedin: "https://www.linkedin.com/in/boyan-petrov-a64a2b199/",
  },

  // --- The offer --------------------------------------------------------
  offer: {
    price: "£600",
    timeline: "live in 2 weeks",
    carePrice: "£25/month",
  },

  seo: {
    title: "Petrov Web Studio | Websites for local businesses — £600, live in 2 weeks",
    description:
      "A professional, fast, mobile-friendly website for your business — £600, live in 2 weeks. Built by a local software developer in Leeds. Real examples inside.",
  },
} as const;

// What the £600 package includes — the fixed scope, spelled out for the buyer.
export const included = [
  {
    icon: "layout",
    title: "Up to 5 sections",
    body: "Everything a customer needs on one clean, modern page — or split across a few. Home, services, about, reviews, contact.",
  },
  {
    icon: "smartphone",
    title: "Looks great on phones",
    body: "Most people will find you on their phone. Your site is built mobile-first and loads fast on any device.",
  },
  {
    icon: "mail",
    title: "Contact form + click-to-call",
    body: "Enquiries land straight in your inbox. On mobile, your phone number is one tap to call — no copying, no typing.",
  },
  {
    icon: "map-pin",
    title: "Google Maps + Business profile",
    body: "Your service area on the map, and I connect the site to your Google Business profile so you show up in local searches.",
  },
  {
    icon: "search",
    title: "Basic SEO, done right",
    body: "Proper page titles, descriptions and structured data so Google understands who you are and where you work.",
  },
  {
    icon: "shield-check",
    title: "Privacy policy + secure",
    body: "SSL, a proper privacy policy for your contact form, and clean code — the things cheap template sites skip.",
  },
];

// The two live demo sites shown as proof.
export const examples = [
  {
    name: "Marsden & Son Plumbing",
    kind: "Trade business",
    goal: "Built to make the phone ring — big call button, service area, fast callback form.",
    image: "images/example-marsden.jpg",
    url: "https://marsden-plumbing.pages.dev",
  },
  {
    name: "The Fade Room",
    kind: "Barbershop",
    goal: "Built for bookings — pick a slot without picking up the phone, price list, gallery.",
    image: "images/example-fade-room.jpg",
    url: "https://fade-room-batley.pages.dev",
  },
];

// How it works — the delivery process, from the customer's point of view.
export const steps = [
  {
    n: "01",
    title: "A quick chat",
    body: "A 15-minute call about your business, who your customers are, and what the site needs to do. No jargon.",
  },
  {
    n: "02",
    title: "You send me the bits",
    body: "Your logo, a few photos, your services and hours. Bullet points are fine — I write it up properly for you.",
  },
  {
    n: "03",
    title: "I build it",
    body: "Two weeks from when your content arrives. You get one preview link and one round of changes.",
  },
  {
    n: "04",
    title: "We go live",
    body: "I connect your domain, get you on Google, and test everything on mobile. Then it's yours.",
  },
];

// FAQ — the real questions (and objections) local owners actually raise.
export const faqs = [
  {
    q: "My nephew can do it on Wix for free — why pay?",
    a: "He might do a great job! What you're paying for is that it's done in two weeks, it loads fast, it ranks on Google, the phone number works on mobile, and there's someone to call when it breaks. Most DIY sites stall at 80% done and stay there.",
  },
  {
    q: "I saw someone doing websites for £150.",
    a: "A £150 site is usually a template with your name pasted in — no SEO setup, no support afterwards. Mine is £600 because it's built to actually bring you calls and bookings, and I'm around after launch to keep it working.",
  },
  {
    q: "I get all my work from word of mouth — do I even need one?",
    a: "That's exactly who a website works best for. When someone gets recommended you, the first thing they do is Google your name. Right now they find nothing — or they find your competitor.",
  },
  {
    q: "What happens after it's live?",
    a: "It's yours — the domain stays in your name. If you'd like me to keep it running, the optional care plan is £25/month: hosting, security, uptime monitoring and up to 30 minutes of changes a month. No pressure, and easy to cancel.",
  },
  {
    q: "How does payment work?",
    a: "Fixed price, no surprises. 50% to book your slot and start, the balance before it goes live. Bank transfer, proper invoice. That's it.",
  },
];
