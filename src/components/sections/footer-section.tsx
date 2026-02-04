import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { footerLinks } from "@/lib/content"

export function FooterSection() {
  return (
    <Section className="border-t border-zinc-800">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[hsl(var(--muted))] text-sm">
            Questions?{" "}
            <a
              href={footerLinks.contact.calendar}
              className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors"
            >
              Book a call
            </a>{" "}
            or DM{" "}
            <a
              href={footerLinks.contact.twitter}
              className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors"
            >
              @michael_chomsky
            </a>
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href={footerLinks.terms}
              className="text-[hsl(var(--muted))] hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href={footerLinks.privacy}
              className="text-[hsl(var(--muted))] hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
