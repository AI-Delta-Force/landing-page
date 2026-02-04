import { implementationPricing, managedCarePricing } from "@/lib/content"
import { Container, Section } from "@/components/ui"
import { Reveal } from "@/components/motion/reveal"

function PricingCard({ tier }: { tier: typeof implementationPricing[0] }) {
  return (
    <div className="border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 hover:bg-zinc-900/30 transition-colors">
      <div className="flex justify-between items-baseline mb-1">
        <span className="font-medium text-white">{tier.name}</span>
        <span className="font-bold text-white">{tier.price}</span>
      </div>
      <p className="text-sm text-zinc-500">{tier.description}</p>
      {tier.note && <p className="text-xs text-zinc-600 mt-1">{tier.note}</p>}
    </div>
  )
}

export function PricingSection() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <div className="space-y-8">
          <Reveal>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wide">
                Implementation (one-time)
              </h3>
              <div className="flex flex-col gap-3">
                {implementationPricing.map((tier) => (
                  <PricingCard key={tier.name} tier={tier} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wide">
                Managed Care (monthly)
              </h3>
              <div className="flex flex-col gap-3">
                {managedCarePricing.map((tier) => (
                  <PricingCard key={tier.name} tier={tier} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
