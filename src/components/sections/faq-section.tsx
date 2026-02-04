"use client"
import { Container, Section, Accordion } from "@/components/ui"
import { Reveal } from "@/components/motion/reveal"
import { faqs } from "@/lib/content"

export function FAQSection() {
  return (
    <Section aria-labelledby="faq-heading">
      <Container>
        <Reveal>
          <h2 id="faq-heading" className="text-xs uppercase tracking-widest text-zinc-400 mb-8">FAQ</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion items={faqs} />
        </Reveal>
      </Container>
    </Section>
  )
}
