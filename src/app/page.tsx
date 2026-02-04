import {
  HeroSection,
  ExecutiveAgentSection,
  ValuePropSection,
  SocialProofSection,
  RegionsSection,
  PricingSection,
  PostPricingCTASection,
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
      <SocialProofSection />
      <RegionsSection />
      <PricingSection />
      <PostPricingCTASection />
      <HowItWorksSection />
      <FAQSection />
      <SecuritySection />
      <ManagedWaitlistSection />
      <RegionalWaitlistSection />
      <FooterSection />
    </main>
  )
}
