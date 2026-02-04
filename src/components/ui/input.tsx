import { cn } from "@/lib/utils"
import { forwardRef } from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "w-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-white rounded-lg px-4 py-2",
          "placeholder:text-[hsl(var(--muted))]",
          "focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent",
          "transition-colors",
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-white rounded-lg px-4 py-2",
          "placeholder:text-[hsl(var(--muted))]",
          "focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent",
          "transition-colors resize-none",
          className
        )}
        {...props}
      />
    )
  }
)

Textarea.displayName = "Textarea"
