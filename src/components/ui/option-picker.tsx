"use client"
import { cn } from "@/lib/utils"

interface Option {
  id: string
  label: string
  comingSoon?: boolean
}

interface OptionPickerProps {
  options: Option[]
  value: string
  onChange: (id: string) => void
  className?: string
}

export function OptionPicker({ options, value, onChange, className }: OptionPickerProps) {
  return (
    <div className={cn("grid grid-cols-3 gap-3", className)} role="radiogroup">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          role="radio"
          aria-checked={value === option.id}
          disabled={option.comingSoon}
          onClick={() => !option.comingSoon && onChange(option.id)}
          className={cn(
            "relative px-4 py-3 rounded-lg border text-sm font-medium transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
            value === option.id
              ? "border-white/30 bg-white/10 text-white"
              : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/[0.07]",
            option.comingSoon && "opacity-50 cursor-not-allowed"
          )}
        >
          {option.label}
          {option.comingSoon && (
            <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] bg-zinc-700 rounded text-zinc-300">
              Coming soon
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
