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
    <div className="bg-card rounded-lg p-4 mb-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium">
            Phase {currentPhaseIndex + 1} of {phases.length}
          </span>
          <span className="text-muted-foreground">
            {Math.round(((currentPhaseIndex + 1) / phases.length) * 100)}% Complete
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${((currentPhaseIndex + 1) / phases.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex overflow-x-auto mt-4 pb-2 -mx-2 px-2 space-x-2 scrollbar-hide">
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
    </div>
  )
}
