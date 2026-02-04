import { cn } from "@/lib/utils"

interface SurfaceCardProps {
  children: React.ReactNode
  className?: string
}

export function SurfaceCard({ children, className }: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "border border-white/10 bg-white/[0.02] rounded-xl",
        className
      )}
    >
      {children}
    </div>
  )
}
