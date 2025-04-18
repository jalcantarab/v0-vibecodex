"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function GoalSettingPage() {
  const router = useRouter()
  const [selectedGoal, setSelectedGoal] = useState("quick-win")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/projects")
  }

  return (
    <div className="container max-w-4xl py-10">
      <Link href="/" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to home
      </Link>

      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">What are you looking to achieve?</h1>
        <p className="text-muted-foreground">Select a goal that matches your available time and ambition.</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <RadioGroup defaultValue="quick-win" value={selectedGoal} onValueChange={setSelectedGoal}>
          <div className="grid gap-4">
            <Card className="relative border-2 border-primary/20 [&:has(:checked)]:border-primary cursor-pointer">
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

            <Card className="relative border-2 border-primary/20 [&:has(:checked)]:border-primary cursor-pointer">
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

            <Card className="relative border-2 border-primary/20 [&:has(:checked)]:border-primary cursor-pointer">
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

            <Card className="relative border-2 border-primary/20 [&:has(:checked)]:border-primary cursor-pointer">
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

            <Card className="relative border-2 border-primary/20 [&:has(:checked)]:border-primary cursor-pointer">
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
          </div>
        </RadioGroup>

        <div className="flex justify-end">
          <Button
            type="submit"
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600"
          >
            Continue to Projects
          </Button>
        </div>
      </form>
    </div>
  )
}
