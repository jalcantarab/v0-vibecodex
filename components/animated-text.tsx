"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <span
      className={cn(
        "transition-all duration-700",
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
    >
      {text}
    </span>
  )
}
