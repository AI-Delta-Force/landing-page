// SimpleClaw Landing Page Content

export interface ModelOption {
  id: string;
  label: string;
}

export interface ChannelOption {
  id: string;
  label: string;
  comingSoon?: boolean;
}

export interface LandingHeroContent {
  productName: string;
  headline: string;
  subheadline: string;
  modelOptions: ModelOption[];
  channelOptions: ChannelOption[];
}

export interface TraditionalStep {
  step: string;
  time: string;
}

export interface TraditionalMethod {
  title: string;
  totalTime: string;
  steps: TraditionalStep[];
}

export interface SimpleClawMethod {
  title: string;
  time: string;
  description: string;
  note: string;
}

export interface ComparisonContent {
  title: string;
  traditional: TraditionalMethod;
  simpleclaw: SimpleClawMethod;
}

export interface UseCaseItem {
  label: string;
}

export interface UseCasesContent {
  rows: UseCaseItem[][];
}

export interface SimpleFooterContent {
  author: {
    name: string;
    url: string;
  };
  contactEmail: string;
}

export const landingHero: LandingHeroContent = {
  productName: "SimpleClaw",
  headline: "Deploy OpenClaw under 1 minute",
  subheadline:
    "Avoid all technical complexity and one click deploy your own 24/7 active OpenClaw instance under 1 minute.",
  modelOptions: [
    { id: "claude", label: "Claude Opus 4.5" },
    { id: "gpt", label: "GPT-5.2" },
    { id: "gemini", label: "Gemini 3 Flash" },
  ],
  channelOptions: [
    { id: "telegram", label: "Telegram" },
    { id: "discord", label: "Discord" },
    { id: "whatsapp", label: "WhatsApp", comingSoon: true },
  ],
};

export const comparison: ComparisonContent = {
  title: "Traditional Method vs SimpleClaw",
  traditional: {
    title: "Traditional",
    totalTime: "30 min",
    steps: [
      { step: "Setup a server", time: "5 min" },
      { step: "Install Docker", time: "3 min" },
      { step: "SSH into server", time: "2 min" },
      { step: "Setup OpenClaw Environment", time: "10 min" },
      { step: "Configure API keys", time: "3 min" },
      { step: "Setup Telegram bot", time: "5 min" },
      { step: "Test and debug", time: "2 min" },
    ],
  },
  simpleclaw: {
    title: "SimpleClaw",
    time: "<1 min",
    description:
      "Pick a model, connect Telegram, deploy — done under 1 minute.",
    note: "Servers, SSH and OpenClaw Environment are already setuped waiting to get assigned. Simple, secure and fast connection to your bot.",
  },
};

export const useCases: UseCasesContent = {
  rows: [
    [
      { label: "Read & summarize email" },
      { label: "Draft replies and follow-ups" },
      { label: "Translate messages" },
      { label: "Organize inbox" },
      { label: "Answer support tickets" },
      { label: "Summarize documents" },
      { label: "Notify before meeting" },
      { label: "Schedule meetings" },
    ],
    [
      { label: "Remind of deadlines" },
      { label: "Plan week" },
      { label: "Take meeting notes" },
      { label: "Sync time zones" },
      { label: "Do taxes" },
      { label: "Track expenses" },
      { label: "Compare insurance" },
      { label: "Manage subscriptions" },
    ],
    [
      { label: "Run payroll" },
      { label: "Negotiate refunds" },
      { label: "Find coupons" },
      { label: "Find best prices" },
      { label: "Find discount codes" },
      { label: "Price-drop alerts" },
      { label: "Compare product specs" },
      { label: "Negotiate deals" },
    ],
    [
      { label: "Write contracts/NDAs" },
      { label: "Research competitors" },
      { label: "Screen leads" },
      { label: "Generate invoices" },
      { label: "Create presentations" },
      { label: "Book travel" },
      { label: "Find recipes" },
      { label: "Draft social posts" },
    ],
    [
      { label: "Monitor news" },
      { label: "Set goals" },
      { label: "Screen cold outreach" },
      { label: "Draft job descriptions" },
      { label: "Run standup summaries" },
      { label: "Track OKRs/KPIs" },
    ],
  ],
};

export const simpleFooter: SimpleFooterContent = {
  author: {
    name: "Yong Kang",
    url: "https://x.com/chiayongkang",
  },
  contactEmail: "chiayongkang@hotmail.com",
};
