"use client"
import { useState } from "react"
import { Container, Section, OptionPicker } from "@/components/ui"
import { landingHero } from "@/lib/content"

// Official Claude/Anthropic logo - orange "A" flower shape
const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
    <path d="M16.604 2.206c-.534-.322-1.058-.322-1.593 0L9.74 5.382c-.445.268-.712.632-.712 1.068v1.9L4.955 5.382c-.445-.268-.801-.322-1.246-.054-.445.268-.712.632-.712 1.068v10.208c0 .436.267.8.712 1.068l5.27 3.122c.445.268.802.322 1.247.054.445-.268.712-.632.712-1.068v-1.9l4.072 2.968c.535.322 1.059.322 1.593 0l5.271-3.122c.445-.268.712-.632.712-1.068V6.45c0-.436-.267-.8-.712-1.068l-5.27-3.176z" fill="#D97757"/>
  </svg>
)

// Official OpenAI logo - hexagonal swirl
const GPTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
)

// Official Google Gemini logo - sparkle/star
const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <defs>
      <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285F4"/>
        <stop offset="50%" stopColor="#9B72CB"/>
        <stop offset="100%" stopColor="#D96570"/>
      </linearGradient>
    </defs>
    <path fill="url(#gemini-gradient)" d="M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12c.956 0 1.887-.117 2.784-.323C9.968 22.556 6.168 17.793 6.168 12.168c0-5.832 4.08-10.68 9.576-11.832C14.4.12 13.2 0 12 0zm0 3.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8z"/>
    <path fill="url(#gemini-gradient)" d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8 8 8 0 0 0 8 8c1.5 0 2.9-.4 4.1-1.1a6 6 0 0 1-4.1-5.7 6 6 0 0 1 4.1-5.7A8 8 0 0 0 12 4"/>
  </svg>
)

// Official Telegram logo - paper airplane in circle
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <circle cx="12" cy="12" r="12" fill="#0088cc"/>
    <path fill="#fff" d="M9.417 15.181l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218l-10.226 9.182z"/>
  </svg>
)

// Official Discord logo - Clyde
const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
)

// Official WhatsApp logo - phone in speech bubble
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <circle cx="12" cy="12" r="12" fill="#25D366"/>
    <path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  </svg>
)

export function HeroAuthSection() {
  const [selectedModel, setSelectedModel] = useState(landingHero.modelOptions[0].id)
  const [selectedChannel, setSelectedChannel] = useState(landingHero.channelOptions[0].id)

  const modelOptionsWithIcons = landingHero.modelOptions.map(opt => ({
    ...opt,
    icon: opt.id === "claude" ? <ClaudeIcon /> : opt.id === "gpt" ? <GPTIcon /> : <GeminiIcon />
  }))

  const channelOptionsWithIcons = landingHero.channelOptions.map(opt => ({
    ...opt,
    icon: opt.id === "telegram" ? <TelegramIcon /> : opt.id === "discord" ? <DiscordIcon /> : <WhatsAppIcon />
  }))

  return (
    <Section className="pt-8 pb-20 relative overflow-hidden">
      {/* Enhanced gradient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-radial from-purple-500/15 via-blue-500/5 to-transparent blur-3xl" />
        <div className="absolute top-40 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-60 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-pink-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Contact Support header */}
      <Container className="flex justify-end mb-12">
        <a 
          href="mailto:chiayongkang@hotmail.com?subject=SimpleClaw%20Support%20Inquiry"
          className="text-sm text-zinc-500 hover:text-white transition-colors duration-200"
        >
          Contact Support
        </a>
      </Container>

      <Container variant="narrow" className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
          {landingHero.headline}
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          {landingHero.subheadline}
        </p>

        {/* Model selection */}
        <h2 className="text-lg font-medium text-zinc-300 mb-5">Which model do you want as default?</h2>
        <OptionPicker 
          options={modelOptionsWithIcons}
          value={selectedModel}
          onChange={setSelectedModel}
          className="max-w-lg mx-auto mb-12"
        />

        {/* Channel selection */}
        <h2 className="text-lg font-medium text-zinc-300 mb-5">Which channel do you want to use for sending messages?</h2>
        <OptionPicker
          options={channelOptionsWithIcons}
          value={selectedChannel}
          onChange={setSelectedChannel}
          className="max-w-lg mx-auto mb-12"
        />

        {/* Telegram CTA */}
        <a 
          href="https://t.me/chiayong"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#0088cc] text-white font-semibold rounded-xl hover:bg-[#0099dd] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#0088cc]/20 mb-4"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          Chat on Telegram
        </a>
        <p className="text-sm text-zinc-500">Message @chiayong to get started with your deployment.</p>
      </Container>
    </Section>
  )
}
