"use client"

import { useState } from "react"
import { Check, Clock } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import { cn } from "@/lib/utils"

interface PhaseCompletionStatusProps {
  phaseIndex: number
  totalPhases: number
  onComplete: () => void
}

export function PhaseCompletionStatus({ phaseIndex, totalPhases, onComplete }: PhaseCompletionStatusProps) {
  const [status, setStatus] = useState<"not-started" | "in-progress" | "completed">("in-progress")

  const handleComplete = () => {
    setStatus("completed")
    onComplete()
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            status === "not-started" && "bg-muted text-muted-foreground",
            status === "in-progress" && "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300",
            status === "completed" && "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300",
          )}
        >
          {status === "not-started" && <Clock className="h-5 w-5" />}
          {status === "in-progress" && <Clock className="h-5 w-5" />}
          {status === "completed" && <Check className="h-5 w-5" />}
        </div>
        <div>
          <p className="font-medium">
            Phase {phaseIndex + 1} of {totalPhases}
          </p>
          <p className="text-sm text-muted-foreground">
            {status === "not-started" && "Not started yet"}
            {status === "in-progress" && "In progress"}
            {status === "completed" && "Completed"}
          </p>
        </div>
      </div>

      <GradientButton
        className="w-full h-12"
        variant={status === "completed" ? "secondary" : "primary"}
        onClick={handleComplete}
        disabled={status === "completed"}
      >
        {phaseIndex < totalPhases - 1
          ? status === "completed"
            ? "Completed"
            : "Mark as Complete & Continue"
          : status === "completed"
            ? "Project Completed"
            : "Mark Project as Complete"}
      </GradientButton>
    </div>
  )
}
