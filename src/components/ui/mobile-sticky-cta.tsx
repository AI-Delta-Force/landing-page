"use client"
import { Button } from "./button"

interface MobileStickyCTAProps {
  href?: string
  label?: string
}

export function MobileStickyCTA({ href = "#book", label = "Book a call" }: MobileStickyCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-black/80 backdrop-blur-md border-t border-zinc-800 p-4 pb-safe">
      <a href={href} className="block">
        <Button className="w-full">{label}</Button>
      </a>
    </div>
  )
}
