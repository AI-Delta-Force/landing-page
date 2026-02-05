import { Container, Section } from "@/components/ui"
import { simpleFooter } from "@/lib/content"

export function SimpleFooterSection() {
  return (
    <Section className="py-8 border-t border-white/10">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <p>
          Built with ❤️ by{" "}
          <a 
            href={simpleFooter.author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            {simpleFooter.author.name}
          </a>
        </p>
        <a 
          href={`mailto:${simpleFooter.contactEmail}?subject=SimpleClaw%20Support%20Inquiry`}
          className="hover:text-white transition-colors"
        >
          Contact Support
        </a>
      </Container>
    </Section>
  )
}
