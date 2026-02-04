import { regions } from "@/lib/content"
import { Container, Section } from "@/components/ui"
import { Reveal } from "@/components/motion/reveal"

export function RegionsSection() {
  return (
    <Section className="border-t border-zinc-800" aria-labelledby="regions-heading">
      <Container>
        <Reveal>
          <h2 id="regions-heading" className="text-xl font-semibold mb-6">Where we operate</h2>
        </Reveal>
        <ul className="grid md:grid-cols-2 gap-4 list-none">
          {regions.map((region, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <li className="border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 hover:bg-zinc-900/30 transition-colors">
                <span className="text-xs uppercase tracking-wide text-zinc-500 mb-2 block">
                  {region.type}
                </span>
                <p className="font-medium mb-1">{region.location}</p>
                <p className="text-sm text-zinc-500">{region.note}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
