"use client"

import { Container, Section } from "@/components/ui"
import { Reveal } from "@/components/motion/reveal"
import { hero } from "@/lib/content"

export function HeroSection() {
  return (
    <Section className="pt-24 pb-16 relative overflow-hidden">
      {/* Subtle gradient glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-red-500/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-zinc-500/5 via-transparent to-transparent blur-2xl" />
      </div>

      <Container variant="narrow" className="text-center">
        <Reveal>
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-4xl text-red-500" role="img" aria-label="Claw emoji">🦞</span>
            <h1 className="text-4xl font-bold">{hero.tagline}</h1>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Description */}
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-8">
            {hero.description}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          {/* Integrations */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <span className="text-sm text-zinc-500">Connects to</span>
            <ul className="flex flex-wrap items-center justify-center gap-2 list-none" aria-label="Supported integrations">
              {hero.integrations.map((name) => (
                <li
                  key={name}
                  className="px-3 py-1 text-xs border border-zinc-800 rounded-full hover:border-zinc-600 hover:bg-zinc-900/50 transition-colors"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          {/* Social proof */}
          <a
            href={hero.socialProof.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-white underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
          >
            {hero.socialProof.text}
          </a>
        </Reveal>
      </Container>
    </Section>
  )
}
