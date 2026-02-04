// Types
export interface HeroContent {
  tagline: string
  description: string
  integrations: string[]
  socialProof: { text: string; url: string }
}

export interface ExecutiveAgentContent {
  title: string
  description: string
  note: string
}

export interface ValuePropContent {
  title: string
  paragraphs: string[]
  notes: string[]
}

export interface Region {
  type: "in-person" | "remote"
  location: string
  note: string
}

export interface Step {
  number: number
  title: string
  description: string
}

export interface PricingTier {
  name: string
  price: string
  description: string
  note?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface SecurityPoint {
  text: string
}

// Data - extract from setupclaw.com:

export const hero: HeroContent = {
  tagline: "SetupClaw",
  description: "White-glove OpenClaw deployment for founders and exec teams. We professionally deploy and maintain the AI assistant that clears your inbox, manages your calendar, and actually does work — on your hardware, with security hardening and ongoing care. Built for companies with 4–50+ employees where the CEO/CFO/Head of Sales needs leverage without creating new security risk.",
  integrations: ["Slack", "Gmail", "Calendar", "iMessage", "+20 more"],
  socialProof: {
    text: "2.5k+ likes and 500k+ views on the launch tweet",
    url: "https://x.com/michael_chomsky/status/2017127819722256686"
  }
}

export const executiveAgent: ExecutiveAgentContent = {
  title: "What's an \"Executive Agent\"?",
  description: "1 Executive Agent = 1 OpenClaw instance configured for one primary identity (CEO inbox/calendar, CFO inbox, Head of Sales, shared EA inbox). This keeps pricing fair and security boundaries clean.",
  note: "Most 4–50 employee teams deploy 2–6 agents."
}

export const valueProp: ValuePropContent = {
  title: "Why not just set it up yourself?",
  paragraphs: [
    "You can — OpenClaw is open-source. But most teams need custom integrations beyond the defaults, and even experienced engineers spend several hours getting everything wired up.",
    "Then there's the ongoing maintenance: updates, drift, broken workflows, security patches. We handle all of it — deployed securely from day one, following the official hardening guide, so your team gets leverage instead of another project to maintain.",
    "It's the Collison Install — we show up and do it for you."
  ],
  notes: [
    "Hardware at cost or bring your own. Mac mini required for iMessage.",
    "Implementation includes 14-day hypercare. Ongoing support requires Managed Care.",
    "Not sure which plan? Book a free call →"
  ]
}

export const regions: Region[] = [
  { type: "in-person", location: "SF Bay Area", note: "Expanding to more cities soon via licensed operators" },
  { type: "remote", location: "Available worldwide", note: "We deploy on your hardware or VPS over a call" }
]

export const howItWorks: Step[] = [
  { number: 1, title: "Kickoff", description: "Goals, systems (Google/Microsoft), security posture" },
  { number: 2, title: "Implementation", description: "Install + harden + connect integrations + build workflows" },
  { number: 3, title: "Go-live", description: "You start using it the same day" },
  { number: 4, title: "Hypercare", description: "14 days of fast fixes and tuning via your dedicated Slack Connect channel" },
  { number: 5, title: "Managed Care", description: "Monitoring, updates, drift checks, and ongoing improvements" }
]

export const implementationPricing: PricingTier[] = [
  { name: "Remote", price: "$1,500", description: "per Executive Agent", note: "Available worldwide" },
  { name: "In-person", price: "$2,500", description: "per Executive Agent", note: "SF Bay Area" },
  { name: "Enterprise", price: "Custom", description: "Multi-agent rollouts", note: "Contact us" }
]

export const managedCarePricing: PricingTier[] = [
  { name: "Starter", price: "$500/mo", description: "1 agent", note: "Monitoring + updates" },
  { name: "Growth", price: "$1,000/mo", description: "Up to 3 agents", note: "Priority support" },
  { name: "Scale", price: "$2,000/mo", description: "Up to 6 agents", note: "Dedicated channel" }
]

export const faqs: FAQ[] = [
  { question: "What is OpenClaw?", answer: "An open-source AI assistant that can triage email, schedule meetings, draft replies, and automate workflows across your tools — running on your own hardware." },
  { question: "What's included in implementation?", answer: "Install + hardening, email + calendar integration, up to 3 mission-critical workflows, documentation, and 14-day hypercare. For in-person (SF Bay Area), we come to your location." },
  { question: "How long does setup take?", answer: "Expect 5–8 hours all-in for most teams (more with multi-agent rollouts). You go live the same day, typically across one or two sessions." },
  { question: "Do you offer support after setup?", answer: "Every customer gets a dedicated Slack Connect channel for direct support. Implementation includes 14-day hypercare. For ongoing monitoring, updates, and support, you'll need a Managed Care plan." },
  { question: "Is OpenClaw safe to run?", answer: "It's never 100% safe — it's an AI with access to your email and calendar. The bigger risk is your InfoSec or CISO blocking it as shadow AI before you get any value from it. We configure it to pass security review: audit trails, access controls, hardening. We help you make the decisions necessary to get it to production instead of stuck in compliance limbo." },
  { question: "What access do you need during setup?", answer: "Temporary access to the machine/network and the accounts you're connecting (email, calendar, messaging). We use least privilege and recommend credential rotation after go-live." },
  { question: "Do you do multi-agent deployments?", answer: "Yes — this is the common case for 4–50 employee teams. We'll help decide which roles need their own agent vs shared workflows." }
]

export const securityPoints: SecurityPoint[] = [
  { text: "Inbound access locked — DM pairing, mention-gating in groups, explicit allowlists" },
  { text: "Network exposure minimized — loopback-only binding, no public endpoints" },
  { text: "Tool blast radius limited — elevated tools restricted, sandboxing enabled" },
  { text: "File permissions set — credentials and config locked to your user" },
  { text: "Credentials in env vars — not in prompts, redacted from logs" },
  { text: "Plugins explicitly allowed — no third-party or unaudited code" },
  { text: "Security audit before handoff — you can re-run it anytime" }
]

export const footerLinks = {
  terms: "/terms",
  privacy: "/privacy",
  contact: { twitter: "https://x.com/michael_chomsky", calendar: "https://cal.com/michaelsf/setup-clawdbot" }
}
