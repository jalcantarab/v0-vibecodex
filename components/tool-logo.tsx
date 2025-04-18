"use client"
import { cn } from "@/lib/utils"

interface ToolLogoProps {
  toolId: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export function ToolLogo({ toolId, size = "md", className }: ToolLogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  // Custom styling for each tool logo
  const getLogoStyle = (id: string) => {
    switch (id) {
      case "bolt":
        return "bg-[#1a2332] p-1 rounded-md" // Dark background for white Bolt logo
      case "v0":
        return "p-0.5" // Slight padding for v0 logo
      case "lovable":
        return "p-0" // No padding for Lovable logo
      case "replit":
        return "p-0.5" // Slight padding for Replit logo
      default:
        return ""
    }
  }

  return (
    <div
      className={cn(
        sizeClasses[size],
        "relative flex items-center justify-center overflow-hidden",
        getLogoStyle(toolId),
        className,
      )}
    >
      {toolId === "lovable" ? (
        // Special handling for SVG logo
        <img src="/lovable-logo.svg" alt="Lovable" className="w-full h-full object-contain" />
      ) : (
        <img src={`/${toolId}-logo.png`} alt={toolId} className="w-full h-full object-contain" />
      )}
    </div>
  )
}
