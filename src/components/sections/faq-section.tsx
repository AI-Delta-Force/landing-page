"use client"
import { useState } from "react"
import { Container, Section } from "@/components/ui"
import { Reveal } from "@/components/motion/reveal"
import { faqs } from "@/lib/content"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section>
      <Container>
        <Reveal>
          <h2 className="text-xs uppercase tracking-widest text-zinc-400 mb-8">FAQ</h2>
        </Reveal>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <div className="border-b border-zinc-800 pb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left flex justify-between items-center hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-zinc-500 transition-transform duration-200" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                </button>
                {openIndex === index && (
                  <p id={`faq-${index}`} className="mt-3 text-sm text-zinc-400">
                    {faq.answer}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
