import { cn } from "@/lib/utils"
import { forwardRef } from "react"

type ButtonVariant = "primary" | "secondary" | "ghost"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  asChild?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black rounded-lg px-4 py-2 font-medium hover:bg-zinc-200 active:bg-zinc-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  secondary:
    "bg-transparent border border-[hsl(var(--border))] text-white rounded-lg px-4 py-2 font-medium hover:bg-white/5 hover:border-zinc-600 active:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  ghost:
    "bg-transparent text-white underline underline-offset-4 hover:text-[hsl(var(--muted))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded",
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
