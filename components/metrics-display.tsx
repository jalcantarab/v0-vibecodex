import { cn } from "@/lib/utils"
import { AnimatedCounter } from "@/components/ui/animated-counter"

interface MetricsDisplayProps {
  className?: string
}

export function MetricsDisplay({ className }: MetricsDisplayProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8", className)}>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-2">
          <AnimatedCounter from={0} to={500} duration={2} />+
        </div>
        <p className="text-sm uppercase tracking-wider text-muted-foreground">AI Prompts</p>
      </div>

      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-2">10x</div>
        <p className="text-sm uppercase tracking-wider text-muted-foreground">Faster Development</p>
      </div>

      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-2">24/7</div>
        <p className="text-sm uppercase tracking-wider text-muted-foreground">AI Pair Programming</p>
      </div>
    </div>
  )
}
