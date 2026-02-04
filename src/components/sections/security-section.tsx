import { securityPoints } from "@/lib/content"
import { Container, Section } from "@/components/ui"
import { Reveal } from "@/components/motion/reveal"

export function SecuritySection() {
  return (
    <Section className="border-t border-zinc-800">
      <Container>
        <Reveal>
          <h2 className="text-xl font-semibold mb-4">Security & your data</h2>
          <p className="text-zinc-400 mb-6">
            OpenClaw runs locally — your data stays on your hardware. We follow the{" "}
            <a
              href="https://github.com/anthropics/anthropic-cookbook/blob/main/misc/safe_computer_use.md"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              official hardening guide
            </a>
            :
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="space-y-2">
            {securityPoints.map((point, index) => (
              <li key={index} className="flex gap-2 text-sm text-zinc-400">
                <span className="text-zinc-600">•</span>
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  )
}
