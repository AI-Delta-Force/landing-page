import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-[hsl(var(--surface))] border border-[hsl(var(--border))] rounded-xl p-6",
        hover && "hover:border-[hsl(var(--muted))] transition-colors",
        className
      )}
    >
      {children}
    </div>
  )
}
