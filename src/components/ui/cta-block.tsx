"use client"

import { Button } from "./button"

interface CTABlockProps {
  className?: string
}

export function CTABlock({ className }: CTABlockProps) {
  return (
    <div className={className}>
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <a href="https://cal.com/michaelsf/setup-clawdbot" target="_blank" rel="noopener noreferrer">
          <Button variant="primary">Book a free call</Button>
        </a>
        <a href="#waitlist">
          <Button variant="secondary">Join waitlist</Button>
        </a>
      </div>
      <p className="text-sm text-zinc-500 mt-3 text-center sm:text-left">
        30-min call. We'll tell you if this is a fit.
      </p>
    </div>
  )
}
