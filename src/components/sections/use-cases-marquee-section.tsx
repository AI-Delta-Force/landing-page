import { Container, Section, Marquee } from "@/components/ui"
import { useCases } from "@/lib/content"

export function UseCasesMarqueeSection() {
  return (
    <Section className="py-20 overflow-hidden">
      <Container className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">What can OpenClaw do for you?</h2>
        <p className="text-xl text-zinc-400 text-center">One assistant, thousands of use cases</p>
      </Container>

      <div className="space-y-4">
        {useCases.rows.map((row, rowIndex) => (
          <Marquee 
            key={rowIndex}
            direction={rowIndex % 2 === 0 ? "left" : "right"}
            speed={30 + rowIndex * 5}
          >
            {row.map((item, i) => (
              <span
                key={i}
                className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-zinc-300 whitespace-nowrap"
              >
                {item.label}
              </span>
            ))}
          </Marquee>
        ))}
      </div>

      <Container className="mt-8 text-center">
        <p className="text-sm text-zinc-500">PS. You can add as many use cases as you want via natural language</p>
      </Container>
    </Section>
  )
}
