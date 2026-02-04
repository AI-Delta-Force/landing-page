import { howItWorks } from "@/lib/content"
import { Container, Section } from "@/components/ui"
import { Reveal } from "@/components/motion/reveal"

export function HowItWorksSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <h2 className="text-sm uppercase tracking-wide text-zinc-400 mb-8">
            How it works
          </h2>
        </Reveal>
        <div className="space-y-6">
          {howItWorks.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1}>
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-medium group-hover:border-zinc-700 group-hover:bg-zinc-800 transition-colors">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-medium mb-1">{step.title}</h3>
                  <p className="text-sm text-zinc-500">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4}>
          <p className="text-sm text-zinc-500 mt-8">
            Most companies are 5–8 hours all-in, especially with multiple agents.
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}
