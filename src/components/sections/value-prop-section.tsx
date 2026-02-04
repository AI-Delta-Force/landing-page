import { valueProp } from "@/lib/content"
import { Container, Section } from "@/components/ui"
import { Reveal } from "@/components/motion/reveal"

export function ValuePropSection() {
  return (
    <Section aria-labelledby="value-prop-heading">
      <Container className="max-w-3xl">
        <Reveal>
          <h2 id="value-prop-heading" className="uppercase tracking-widest text-xs text-zinc-400 mb-4">
            {valueProp.title}
          </h2>
          <div className="space-y-4">
            {valueProp.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-zinc-300">
                {index === 1 ? (
                  <>
                    Then there&apos;s the ongoing maintenance: updates, drift, broken
                    workflows, security patches. We handle all of it — deployed
                    securely from day one, following the{" "}
                    <a
                      href="https://github.com/anthropics/anthropic-cookbook/blob/main/misc/prompt_caching.ipynb"
                      className="underline hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      official hardening guide
                    </a>
                    , so your team gets leverage instead of another project to
                    maintain.
                  </>
                ) : index === 2 ? (
                  <>
                    It&apos;s the{" "}
                    <a
                      href="https://patrickcollison.com/advice"
                      className="underline hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Collison Install
                    </a>{" "}
                    — we show up and do it for you.
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 space-y-2">
            {valueProp.notes.map((note, index) => (
              <p key={index} className="text-sm text-zinc-500">
                {index === 2 ? (
                  <>
                    Not sure which plan?{" "}
                    <a
                      href="https://cal.com/michaelsf/setup-clawdbot"
                      className="underline hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a free call
                    </a>{" "}
                    →
                  </>
                ) : (
                  note
                )}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
