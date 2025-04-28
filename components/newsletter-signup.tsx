"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface NewsletterSignupProps {
  title?: string
  description?: string
  buttonText?: string
  className?: string
  variant?: "default" | "inline" | "card"
}

export function NewsletterSignup({
  title = "Join the Codex Crew",
  description = "Get early access to our AI development prompts and stay updated with the latest drops.",
  buttonText = "JOIN THE CODEX CREW",
  className = "",
  variant = "default",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail("")

    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="max-w-xs"
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Joining..." : isSubmitted ? "Joined!" : buttonText}
        </Button>
      </form>
    )
  }

  if (variant === "card") {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Joining..." : isSubmitted ? "Joined!" : buttonText}
            </Button>
          </form>
        </CardContent>
      </Card>
    )
  }

  // Default variant
  return (
    <div className={`bg-black/90 rounded-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />
        <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white" disabled={isSubmitting}>
          {isSubmitting ? "Joining..." : isSubmitted ? "Joined!" : buttonText}
        </Button>
      </form>
    </div>
  )
}
