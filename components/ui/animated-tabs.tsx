"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedTabsProps {
  tabs: {
    id: string
    label: string
    icon?: React.ReactNode
  }[]
  activeTab: string
  onChange: (id: string) => void
  variant?: "underline" | "pills" | "blocks"
  className?: string
}

export function AnimatedTabs({ tabs, activeTab, onChange, variant = "underline", className }: AnimatedTabsProps) {
  // Styles for different variants
  const variantStyles = {
    underline: {
      container: "border-b",
      tab: "px-4 py-2 -mb-px",
      activeTab: "text-primary",
      inactiveTab: "text-muted-foreground hover:text-foreground",
      indicator: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary",
    },
    pills: {
      container: "p-1 bg-muted/50 rounded-lg",
      tab: "px-4 py-2 rounded-md",
      activeTab: "text-primary-foreground",
      inactiveTab: "text-muted-foreground hover:text-foreground",
      indicator: "absolute inset-0 bg-primary rounded-md",
    },
    blocks: {
      container: "grid grid-flow-col auto-cols-fr gap-2",
      tab: "px-4 py-2 rounded-md border-2 border-transparent",
      activeTab: "text-primary",
      inactiveTab: "text-muted-foreground hover:text-foreground",
      indicator: "absolute inset-0 border-2 border-primary rounded-md",
    },
  }

  return (
    <div className={cn("flex relative", variantStyles[variant].container, className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            "relative flex items-center justify-center font-medium transition-colors",
            variantStyles[variant].tab,
            activeTab === tab.id ? variantStyles[variant].activeTab : variantStyles[variant].inactiveTab,
          )}
        >
          {activeTab === tab.id && variant === "pills" && (
            <motion.div
              layoutId="tab-indicator-pill"
              className={variantStyles[variant].indicator}
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          {tab.icon && <span className="mr-2">{tab.icon}</span>}
          <span className={activeTab === tab.id && variant === "pills" ? "relative z-10" : ""}>{tab.label}</span>
          {activeTab === tab.id && variant !== "pills" && (
            <motion.div
              layoutId={`tab-indicator-${variant}`}
              className={variantStyles[variant].indicator}
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
        </button>
      ))}
    </div>
  )
}
