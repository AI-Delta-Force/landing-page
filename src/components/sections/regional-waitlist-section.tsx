import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { WaitlistForm } from "@/components/ui/waitlist-form"
import { Reveal } from "@/components/motion/reveal"

export function RegionalWaitlistSection() {
  return (
    <Section aria-labelledby="regional-waitlist-heading">
      <Container className="max-w-md">
        <Reveal>
          <div className="text-center mb-8">
            <h2 id="regional-waitlist-heading" className="text-2xl font-semibold text-white mb-4">
              Not in the Bay Area?
            </h2>
            <p className="text-[hsl(var(--muted))]">
              We&apos;re expanding to more cities via licensed operators. Let us
              know where you are and we&apos;ll reach out when we&apos;re in your
              area.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <WaitlistForm source="regional" showCity showMessage />
        </Reveal>
      </Container>
    </Section>
  )
}
