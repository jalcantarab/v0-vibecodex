"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { GradientButton } from "@/components/ui/gradient-button"

export default function GoalSettingPage() {
  const router = useRouter()
  const [selectedGoal, setSelectedGoal] = useState("quick-win")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store the selected goal in localStorage for future reference
    localStorage.setItem("selectedGoal", selectedGoal)
    // Navigate to projects page
    router.push("/projects")
  }

  // Function to handle card click
  const handleCardClick = (value: string) => {
    setSelectedGoal(value)
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="container max-w-4xl py-10">
      <Link href="/" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to home
      </Link>

      <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">What are you looking to achieve?</h1>
          <p className="text-muted-foreground">Select a goal that matches your available time and ambition.</p>
        </motion.div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <RadioGroup defaultValue="quick-win" value={selectedGoal} onValueChange={setSelectedGoal}>
            <motion.div variants={container} className="grid gap-4">
              <motion.div variants={item}>
                <Card
                  className={`relative border-2 cursor-pointer transition-all ${
                    selectedGoal === "quick-win" ? "border-primary" : "border-primary/20"
                  }`}
                  onClick={() => handleCardClick("quick-win")}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Just a quick win</CardTitle>
                        <CardDescription>Something I can build in a single sitting (1-2 hours)</CardDescription>
                      </div>
                      <RadioGroupItem value="quick-win" id="quick-win" className="mt-1" />
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card
                  className={`relative border-2 cursor-pointer transition-all ${
                    selectedGoal === "shareable" ? "border-primary" : "border-primary/20"
                  }`}
                  onClick={() => handleCardClick("shareable")}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Something I can share</CardTitle>
                        <CardDescription>A project I can show colleagues or friends (half-day)</CardDescription>
                      </div>
                      <RadioGroupItem value="shareable" id="shareable" className="mt-1" />
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card
                  className={`relative border-2 cursor-pointer transition-all ${
                    selectedGoal === "prototype" ? "border-primary" : "border-primary/20"
                  }`}
                  onClick={() => handleCardClick("prototype")}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Working prototype</CardTitle>
                        <CardDescription>A functional demo of a product idea (full day)</CardDescription>
                      </div>
                      <RadioGroupItem value="prototype" id="prototype" className="mt-1" />
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card
                  className={`relative border-2 cursor-pointer transition-all ${
                    selectedGoal === "mvp" ? "border-primary" : "border-primary/20"
                  }`}
                  onClick={() => handleCardClick("mvp")}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Minimum viable product</CardTitle>
                        <CardDescription>A basic but complete version of my app idea (weekend)</CardDescription>
                      </div>
                      <RadioGroupItem value="mvp" id="mvp" className="mt-1" />
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card
                  className={`relative border-2 cursor-pointer transition-all ${
                    selectedGoal === "existing" ? "border-primary" : "border-primary/20"
                  }`}
                  onClick={() => handleCardClick("existing")}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Build on existing codebase</CardTitle>
                        <CardDescription>Add features to something I already started</CardDescription>
                      </div>
                      <RadioGroupItem value="existing" id="existing" className="mt-1" />
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
          </RadioGroup>

          <motion.div variants={item} className="flex justify-end">
            <GradientButton type="submit" size="lg" className="px-8">
              Continue to Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </GradientButton>
          </motion.div>
        </form>
      </motion.div>
    </div>
  )
}
