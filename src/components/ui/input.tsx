import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, label, id, ...props }, ref) => {
    const inputId = id || props.name
    return (
      <div className="relative">
        {label && (
          <label htmlFor={inputId} className="sr-only">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={cn(
            "w-full h-11 md:h-12 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg px-4",
            "placeholder:text-[hsl(var(--muted))]",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:border-red-500/60",
            "transition-all duration-200",
            "autofill-dark",
            error && "border-red-500 focus-visible:ring-red-500/60 focus-visible:border-red-500/60",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = "Input"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  label?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, id, ...props }, ref) => {
    const textareaId = id || props.name
    return (
      <div className="relative">
        {label && (
          <label htmlFor={textareaId} className="sr-only">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-lg px-4 py-3",
            "placeholder:text-[hsl(var(--muted))]",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:border-red-500/60",
            "transition-all duration-200 resize-none",
            "autofill-dark",
            error && "border-red-500 focus-visible:ring-red-500/60 focus-visible:border-red-500/60",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          {...props}
        />
      </div>
    )
  }
)

Textarea.displayName = "Textarea"
