"use client"

import { Container, Section } from "@/components/ui"
import { CTABlock } from "@/components/ui/cta-block"
import { Reveal } from "@/components/motion/reveal"

export function PostPricingCTASection() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <Reveal>
          <div className="text-center">
            <h3 className="text-xl font-medium text-white mb-2">
              Ready to get started?
            </h3>
            <p className="text-zinc-400 mb-6">
              Most teams go live in a single session.
            </p>
            <CTABlock className="flex flex-col items-center" />
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
