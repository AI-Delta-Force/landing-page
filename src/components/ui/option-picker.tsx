"use client"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface Option {
  id: string
  label: string
  icon?: ReactNode
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
            "relative flex flex-col items-center gap-2 px-4 py-4 rounded-xl border text-sm font-medium transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
            value === option.id
              ? "border-white/40 bg-white/10 text-white shadow-lg shadow-white/5"
              : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.06]",
            option.comingSoon && "opacity-50 cursor-not-allowed"
          )}
        >
          {option.icon && <span className="text-2xl">{option.icon}</span>}
          <span>{option.label}</span>
          {option.comingSoon && (
            <span className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] bg-zinc-800 border border-zinc-700 rounded-full text-zinc-400">
              Soon
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
