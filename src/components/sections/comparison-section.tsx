import { Container, Section } from "@/components/ui"
import { comparison } from "@/lib/content"

export function ComparisonSection() {
  return (
    <Section className="py-24">
      <Container>
        <p className="text-sm text-zinc-500 mb-3 text-center uppercase tracking-wider">Comparison</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
          {comparison.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional - with subtle red/orange tint to indicate pain */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl blur-xl group-hover:from-red-500/10 group-hover:to-orange-500/10 transition-all duration-500" />
            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-white/20 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-8 text-zinc-300">{comparison.traditional.title}</h3>
              <ul className="space-y-4 mb-8">
                {comparison.traditional.steps.map((step, i) => (
                  <li key={i} className="flex items-center justify-between text-sm group/item">
                    <span className="flex items-center gap-3 text-zinc-400">
                      <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-zinc-500">{i + 1}</span>
                      {step.step}
                    </span>
                    <span className="text-zinc-600 font-mono text-xs">{step.time}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="text-zinc-400">Total</span>
                <span className="text-2xl font-bold text-red-400/80">{comparison.traditional.totalTime}</span>
              </div>
            </div>
          </div>

          {/* SimpleClaw - with green glow to indicate success */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:from-emerald-500/20 group-hover:to-cyan-500/20 transition-all duration-500" />
            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-center items-center text-center hover:border-emerald-500/30 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-zinc-300">{comparison.simpleclaw.title}</h3>
              <p className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                {comparison.simpleclaw.time}
              </p>
              <p className="text-zinc-400 mb-6 max-w-sm leading-relaxed">{comparison.simpleclaw.description}</p>
              <p className="text-sm text-zinc-500 max-w-xs">{comparison.simpleclaw.note}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
