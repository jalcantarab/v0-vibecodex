"use client"

import { useState } from "react"
import { Check, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
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
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center",
            status === "not-started" && "bg-muted text-muted-foreground",
            status === "in-progress" && "bg-amber-100 text-amber-600",
            status === "completed" && "bg-green-100 text-green-600",
          )}
        >
          {status === "not-started" && <Clock className="h-4 w-4" />}
          {status === "in-progress" && <Clock className="h-4 w-4" />}
          {status === "completed" && <Check className="h-4 w-4" />}
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

      <Button
        className="w-full"
        variant={status === "completed" ? "outline" : "default"}
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
      </Button>
    </div>
  )
}
