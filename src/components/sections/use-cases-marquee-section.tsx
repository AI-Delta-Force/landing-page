import { Container, Section, Marquee } from "@/components/ui"
import { useCases } from "@/lib/content"

export function UseCasesMarqueeSection() {
  return (
    <Section className="py-24 overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-purple-500/5 via-transparent to-transparent blur-3xl" />
      </div>

      <Container className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
          What can OpenClaw do for you?
        </h2>
        <p className="text-xl text-zinc-400 text-center">One assistant, thousands of use cases</p>
      </Container>

      {/* Fade edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <div className="space-y-4">
          {useCases.rows.map((row, rowIndex) => (
            <Marquee 
              key={rowIndex}
              direction={rowIndex % 2 === 0 ? "left" : "right"}
              speed={25 + rowIndex * 3}
            >
              {row.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-full text-sm text-zinc-300 whitespace-nowrap hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 cursor-default"
                >
                  {item.label}
                </span>
              ))}
            </Marquee>
          ))}
        </div>
      </div>

      <Container className="mt-12 text-center">
        <p className="text-sm text-zinc-500 italic">PS. You can add as many use cases as you want via natural language</p>
      </Container>
    </Section>
  )
}
