import type * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "dark" | "frosted"
  hoverEffect?: "lift" | "glow" | "scale" | "none"
  intensity?: "low" | "medium" | "high"
}

export function GlassCard({
  className,
  variant = "light",
  hoverEffect = "none",
  intensity = "medium",
  ...props
}: GlassCardProps) {
  // Base styles
  const baseStyles = "rounded-xl border overflow-hidden"

  // Variant styles
  const variantStyles = {
    light: "bg-white/70 backdrop-blur-md border-white/20 dark:bg-slate-900/70 dark:border-white/10",
    dark: "bg-black/20 backdrop-blur-md border-white/10 dark:bg-slate-800/40 dark:border-slate-700/40",
    frosted: "bg-white/10 backdrop-blur-lg border-white/5 dark:bg-white/5 dark:border-white/5",
  }

  // Intensity styles
  const intensityStyles = {
    low: {
      light: "bg-white/40 dark:bg-slate-900/40",
      dark: "bg-black/10 dark:bg-slate-800/20",
      frosted: "bg-white/5 dark:bg-white/5",
    },
    medium: {
      light: "bg-white/70 dark:bg-slate-900/60",
      dark: "bg-black/20 dark:bg-slate-800/40",
      frosted: "bg-white/10 dark:bg-white/5",
    },
    high: {
      light: "bg-white/90 dark:bg-slate-900/80",
      dark: "bg-black/40 dark:bg-slate-800/60",
      frosted: "bg-white/20 dark:bg-white/10",
    },
  }

  // Hover effect styles
  const hoverStyles = {
    lift: "transition-transform hover:translate-y-[-2px]",
    glow: "transition-shadow hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] dark:hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]",
    scale: "transition-transform hover:scale-[1.02]",
    none: "",
  }

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        intensityStyles[intensity][variant],
        hoverStyles[hoverEffect],
        className,
      )}
      {...props}
    />
  )
}
