"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-cyan-50 dark:from-violet-950/20 dark:to-cyan-950/20 animate-gradient" />

      {/* Animated circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-200/30 rounded-full blur-3xl dark:bg-violet-900/20 animate-float" />
      <div
        className="absolute top-1/2 -left-24 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl dark:bg-cyan-900/20 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-48 h-48 bg-pink-200/20 rounded-full blur-3xl dark:bg-pink-900/10 animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] dark:opacity-[0.03]" />
    </div>
  )
}
