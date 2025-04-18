"use client"

import { cn } from "@/lib/utils"

interface PhaseNavigationProps {
  phases: {
    id: string
    title: string
    description: string
    order: number
  }[]
  currentPhaseIndex: number
  onSelectPhase: (index: number) => void
}

export function PhaseNavigation({ phases, currentPhaseIndex, onSelectPhase }: PhaseNavigationProps) {
  return (
    <div className="flex overflow-x-auto pb-2 -mx-2 px-2 space-x-2 scrollbar-hide">
      {phases.map((phase, index) => (
        <button
          key={phase.id}
          onClick={() => onSelectPhase(index)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors",
            index === currentPhaseIndex
              ? "bg-primary text-primary-foreground"
              : index < currentPhaseIndex
                ? "bg-primary/10 hover:bg-primary/20"
                : "bg-muted hover:bg-muted/80",
          )}
        >
          Phase {index + 1}: {phase.title}
        </button>
      ))}
    </div>
  )
}
