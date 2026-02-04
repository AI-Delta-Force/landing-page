import { executiveAgent } from "@/lib/content"
import { Container, Section } from "@/components/ui"
import { Reveal } from "@/components/motion/reveal"

export function ExecutiveAgentSection() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <Reveal>
          <h2 className="uppercase tracking-widest text-xs text-zinc-400 mb-4">
            {executiveAgent.title}
          </h2>
          <p className="text-white mb-4">{executiveAgent.description}</p>
          <p className="text-sm text-zinc-500 italic">{executiveAgent.note}</p>
        </Reveal>
      </Container>
    </Section>
  )
}
