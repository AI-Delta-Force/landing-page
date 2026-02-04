import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  divider?: boolean
  "aria-labelledby"?: string
}

export function Section({ children, className, id, divider = false, "aria-labelledby": ariaLabelledby }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "py-14 md:py-20",
        divider && "border-t border-zinc-800",
        className
      )}
    >
      {children}
    </section>
  )
}
