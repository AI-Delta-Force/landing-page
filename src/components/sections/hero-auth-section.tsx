"use client"
import { useState } from "react"
import { Container, Section, OptionPicker } from "@/components/ui"
import { landingHero } from "@/lib/content"

export function HeroAuthSection() {
  const [selectedModel, setSelectedModel] = useState(landingHero.modelOptions[0].id)
  const [selectedChannel, setSelectedChannel] = useState(landingHero.channelOptions[0].id)

  return (
    <Section className="pt-8 pb-16 relative overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Contact Support header */}
      <Container className="flex justify-end mb-8">
        <a 
          href="mailto:chiayongkang@hotmail.com?subject=SimpleClaw%20Support%20Inquiry"
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          Contact Support
        </a>
      </Container>

      <Container variant="narrow" className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{landingHero.headline}</h1>
        <p className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto">{landingHero.subheadline}</p>

        {/* Model selection */}
        <h2 className="text-xl font-semibold mb-4">Which model do you want as default?</h2>
        <OptionPicker 
          options={landingHero.modelOptions}
          value={selectedModel}
          onChange={setSelectedModel}
          className="max-w-md mx-auto mb-10"
        />

        {/* Channel selection */}
        <h2 className="text-xl font-semibold mb-4">Which channel do you want to use for sending messages?</h2>
        <OptionPicker
          options={landingHero.channelOptions}
          value={selectedChannel}
          onChange={setSelectedChannel}
          className="max-w-md mx-auto mb-10"
        />

        {/* Google Sign In */}
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors mb-3">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign in with Google
        </button>
        <p className="text-sm text-zinc-500">Sign in to deploy your AI assistant and connect your channels.</p>
      </Container>
    </Section>
  )
}
