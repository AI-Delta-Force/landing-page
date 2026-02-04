import {
  HeroSection,
  ExecutiveAgentSection,
  ValuePropSection,
  RegionsSection,
  PricingSection,
  HowItWorksSection,
  FAQSection,
  SecuritySection,
  ManagedWaitlistSection,
  RegionalWaitlistSection,
  FooterSection,
} from "@/components/sections"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExecutiveAgentSection />
      <ValuePropSection />
      <RegionsSection />
      <PricingSection />
      <HowItWorksSection />
      <FAQSection />
      <SecuritySection />
      <ManagedWaitlistSection />
      <RegionalWaitlistSection />
      <FooterSection />
    </main>
  )
}
