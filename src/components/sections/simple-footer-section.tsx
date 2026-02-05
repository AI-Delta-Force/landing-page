import { Container, Section } from "@/components/ui"
import { simpleFooter } from "@/lib/content"

export function SimpleFooterSection() {
  return (
    <footer className="py-12 border-t border-white/5">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        <p className="text-zinc-500">
          Built with <span className="text-red-400">❤</span> by{" "}
          <a 
            href={simpleFooter.author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-500"
          >
            {simpleFooter.author.name}
          </a>
        </p>
        <a 
          href={`mailto:${simpleFooter.contactEmail}?subject=SimpleClaw%20Support%20Inquiry`}
          className="text-zinc-500 hover:text-white transition-colors duration-200"
        >
          Contact Support
        </a>
      </Container>
    </footer>
  )
}
