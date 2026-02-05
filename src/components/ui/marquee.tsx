"use client"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: ReactNode
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
  className?: string
}

export function Marquee({ children, speed = 20, direction = "left", pauseOnHover = true, className }: MarqueeProps) {
  return (
    <div className={cn("group flex overflow-hidden", className)}>
      <div 
        className={cn(
          "flex min-w-full shrink-0 gap-4 animate-marquee",
          direction === "right" && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div 
        className={cn(
          "flex min-w-full shrink-0 gap-4 animate-marquee",
          direction === "right" && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
        aria-hidden
      >
        {children}
      </div>
    </div>
  )
}
