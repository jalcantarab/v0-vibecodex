import type * as React from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description: string
  variant?: "default" | "bordered" | "glass"
  iconBackground?: "gradient" | "solid" | "light" | "none"
}

export function FeatureCard({
  className,
  icon,
  title,
  description,
  variant = "default",
  iconBackground = "gradient",
  ...props
}: FeatureCardProps) {
  // Variant styles
  const variantStyles = {
    default: "bg-card shadow-sm",
    bordered: "border-2 border-border",
    glass: "bg-white/70 backdrop-blur-md border border-white/20 dark:bg-black/20 dark:border-white/10",
  }

  // Icon background styles
  const iconBgStyles = {
    gradient: "bg-gradient-to-br from-violet-500 to-indigo-600 text-white",
    solid: "bg-primary text-primary-foreground",
    light: "bg-primary/10 text-primary",
    none: "",
  }

  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-xl transition-all duration-300 hover:shadow-md",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {icon && (
        <div
          className={cn(
            "w-12 h-12 flex items-center justify-center rounded-lg mb-4",
            iconBackground !== "none" && iconBgStyles[iconBackground],
          )}
        >
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
