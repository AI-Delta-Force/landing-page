import { cn } from "@/lib/utils"
import { forwardRef } from "react"

type ButtonVariant = "primary" | "secondary" | "ghost"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  asChild?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "h-11 md:h-12 bg-red-500 text-white rounded-lg px-6 font-medium hover:bg-red-600 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] active:bg-red-700 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  secondary:
    "h-11 md:h-12 bg-transparent border border-zinc-700 text-white rounded-lg px-6 font-medium hover:border-zinc-500 hover:bg-white/5 active:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  ghost:
    "bg-transparent text-white underline underline-offset-4 hover:text-[hsl(var(--muted))] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded",
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(variantStyles[variant], className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
