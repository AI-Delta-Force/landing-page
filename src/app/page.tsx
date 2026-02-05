import {
  HeroAuthSection,
  ComparisonSection,
  UseCasesMarqueeSection,
  SimpleFooterSection,
} from "@/components/sections"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroAuthSection />
      <ComparisonSection />
      <UseCasesMarqueeSection />
      <SimpleFooterSection />
    </main>
  )
}
