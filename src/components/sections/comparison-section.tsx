import { Container, Section } from "@/components/ui"
import { comparison } from "@/lib/content"

export function ComparisonSection() {
  return (
    <Section className="py-20">
      <Container>
        <p className="text-sm text-zinc-500 mb-2 text-center">Comparison</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{comparison.title}</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Traditional */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6">{comparison.traditional.title}</h3>
            <ul className="space-y-3 mb-6">
              {comparison.traditional.steps.map((step, i) => (
                <li key={i} className="flex justify-between text-sm">
                  <span className="text-zinc-400">{step.step}</span>
                  <span className="text-zinc-500">{step.time}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-white/10 flex justify-between font-medium">
              <span>Total</span>
              <span>{comparison.traditional.totalTime}</span>
            </div>
          </div>

          {/* SimpleClaw */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-semibold mb-4">{comparison.simpleclaw.title}</h3>
            <p className="text-5xl font-bold text-green-400 mb-4">{comparison.simpleclaw.time}</p>
            <p className="text-zinc-400 mb-4">{comparison.simpleclaw.description}</p>
            <p className="text-sm text-zinc-500">{comparison.simpleclaw.note}</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
