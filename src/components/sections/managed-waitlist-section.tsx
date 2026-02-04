import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { WaitlistForm } from "@/components/ui/waitlist-form"
import { Reveal } from "@/components/motion/reveal"

export function ManagedWaitlistSection() {
  return (
    <Section aria-labelledby="managed-waitlist-heading">
      <Container className="max-w-xl">
        <Reveal>
          <div className="text-center mb-8">
            <h2 id="managed-waitlist-heading" className="text-2xl font-semibold text-white mb-4">
              Want us to handle everything?
            </h2>
            <p className="text-[hsl(var(--muted))]">
              Join the waitlist for our fully managed option. We&apos;ll deploy,
              maintain, and continuously improve your OpenClaw setup — you just
              use it.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <WaitlistForm source="managed" showMessage />
        </Reveal>
      </Container>
    </Section>
  )
}
