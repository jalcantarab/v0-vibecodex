import type * as React from "react"
import { cn } from "@/lib/utils"

interface GradientBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderWidth?: "thin" | "medium" | "thick"
  gradientDirection?: "to-r" | "to-l" | "to-t" | "to-b" | "to-tr" | "to-tl" | "to-br" | "to-bl"
  fromColor?: string
  toColor?: string
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"
  animate?: boolean
}

export function GradientBorder({
  className,
  children,
  borderWidth = "medium",
  gradientDirection = "to-r",
  fromColor = "from-violet-500",
  toColor = "to-indigo-600",
  rounded = "lg",
  animate = false,
  ...props
}: GradientBorderProps) {
  // Border width styles
  const borderWidthStyles = {
    thin: "p-[1px]",
    medium: "p-[2px]",
    thick: "p-[3px]",
  }

  // Border radius styles
  const roundedStyles = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  }

  return (
    <div
      className={cn(
        `bg-gradient-${gradientDirection} ${fromColor} ${toColor}`,
        borderWidthStyles[borderWidth],
        roundedStyles[rounded],
        animate && "animate-gradient bg-[length:200%_200%]",
        className,
      )}
      {...props}
    >
      <div className={cn("bg-background h-full w-full", roundedStyles[rounded])}>{children}</div>
    </div>
  )
}
