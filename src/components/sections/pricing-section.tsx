import { implementationPricing, managedCarePricing } from "@/lib/content"
import { Container, Section, PricingTable } from "@/components/ui"
import { Reveal } from "@/components/motion/reveal"

export function PricingSection() {
  return (
    <Section aria-labelledby="pricing-heading">
      <Container className="max-w-3xl">
        <h2 id="pricing-heading" className="sr-only">Pricing</h2>
        <div className="space-y-8">
          <Reveal>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wide">
                Implementation (one-time)
              </h3>
              <PricingTable tiers={implementationPricing} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wide">
                Managed Care (monthly)
              </h3>
              <PricingTable tiers={managedCarePricing} />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
