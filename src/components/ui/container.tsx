import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "narrow"
}

const containerVariants = {
  default: "max-w-6xl",
  narrow: "max-w-[680px]",
}

export function Container({ children, className, variant = "default" }: ContainerProps) {
  return (
    <div className={cn("mx-auto px-6", containerVariants[variant], className)}>
      {children}
    </div>
  )
}
