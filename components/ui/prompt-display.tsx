"use client"

import type React from "react"

import { useState } from "react"
import { HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PromptDisplayProps {
  prompt: {
    content: string
    tooltips: {
      text: string
      explanation: string
      highlightColor: string
    }[]
  }
}

export function PromptDisplay({ prompt }: PromptDisplayProps) {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  // Function to highlight parts of the prompt with tooltips
  const renderPromptWithTooltips = () => {
    if (!prompt.tooltips || prompt.tooltips.length === 0) {
      return <p className="whitespace-pre-wrap">{prompt.content}</p>
    }

    let lastIndex = 0
    const elements: React.ReactNode[] = []

    prompt.tooltips.forEach((tooltip, i) => {
      const startIndex = prompt.content.indexOf(tooltip.text, lastIndex)
      if (startIndex === -1) return

      // Add text before the tooltip
      if (startIndex > lastIndex) {
        elements.push(<span key={`text-${i}`}>{prompt.content.substring(lastIndex, startIndex)}</span>)
      }

      // Add the tooltip
      elements.push(
        <TooltipProvider key={`tooltip-${i}`}>
          <Tooltip
            open={activeTooltip === `tooltip-${i}`}
            onOpenChange={(open) => {
              if (open) setActiveTooltip(`tooltip-${i}`)
              else if (activeTooltip === `tooltip-${i}`) setActiveTooltip(null)
            }}
          >
            <TooltipTrigger asChild>
              <span
                className="relative cursor-help font-medium"
                style={{ backgroundColor: `${tooltip.highlightColor}30` }}
                onClick={() => setActiveTooltip(activeTooltip === `tooltip-${i}` ? null : `tooltip-${i}`)}
              >
                {tooltip.text}
                <span className="absolute -top-1 -right-1 text-primary">
                  <HelpCircle className="h-3 w-3" />
                </span>
              </span>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-sm p-4">
              <p>{tooltip.explanation}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>,
      )

      lastIndex = startIndex + tooltip.text.length
    })

    // Add any remaining text
    if (lastIndex < prompt.content.length) {
      elements.push(<span key="text-end">{prompt.content.substring(lastIndex)}</span>)
    }

    return <div className="whitespace-pre-wrap">{elements}</div>
  }

  return (
    <div className="rounded-md border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
      {renderPromptWithTooltips()}
    </div>
  )
}
