"use client"

import { testimonials, hero } from "@/lib/content"
import { Container, Section } from "@/components/ui"
import { Reveal } from "@/components/motion/reveal"

export function SocialProofSection() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <div className="space-y-8">
          <Reveal>
            <a
              href={hero.socialProof.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-sm text-zinc-400">Featured</span>
              </div>
              <p className="text-white font-medium">
                {hero.socialProof.text}
              </p>
            </a>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 h-full">
                  <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-sm">
                    <span className="text-white font-medium">{testimonial.author}</span>
                    {testimonial.handle && (
                      <span className="text-zinc-500 ml-1">{testimonial.handle}</span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
