"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function useThemeMounted() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  return { theme, setTheme, mounted }
}
