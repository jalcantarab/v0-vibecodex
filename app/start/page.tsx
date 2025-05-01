"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Copy, FileCode, Pencil } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { GradientButton } from "@/components/ui/gradient-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GoalSettingPage() {
  const router = useRouter()
  const [selectedGoal, setSelectedGoal] = useState("quick-win")
  const [selectedTab, setSelectedTab] = useState("time")
  const [projectType, setProjectType] = useState("template")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Store the selected goal and project type in localStorage for future reference
    localStorage.setItem("selectedGoal", selectedGoal)
    localStorage.setItem("projectType", projectType)

    // Navigate based on the selection
    if (projectType === "template") {
      // Navigate directly to projects page for templates
      router.push("/projects")
    } else if (projectType === "custom") {
      // Navigate to custom project creation page
      router.push("/create-custom")
    } else if (projectType === "clone") {
      // Navigate to clone existing page
      router.push("/clone-existing")
    }
  }

  // Function to handle direct navigation to projects with a specific goal
  const handleDirectNavigation = (goal: string, type: string) => {
    localStorage.setItem("selectedGoal", goal)
    localStorage.setItem("projectType", type)

    if (type === "template") {
      router.push("/projects")
    } else if (type === "custom") {
      router.push("/create-custom")
    } else if (type === "clone") {
      router.push("/clone-existing")
    }
  }

  // Function to handle card click
  const handleCardClick = (value: string) => {
    setSelectedGoal(value)
  }

  // Function to handle project type selection
  const handleProjectTypeClick = (value: string) => {
    setProjectType(value)
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
          <h1 className="text-3xl font-bold tracking-tight">Let's find the right project for you</h1>
          <p className="text-muted-foreground">
            We'll help you choose a project that matches your goals, available time, and ambition.
          </p>
        </motion.div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="time">Based on Time</TabsTrigger>
            <TabsTrigger value="project">Based on Project Type</TabsTrigger>
          </TabsList>

          <TabsContent value="time" className="space-y-6">
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
                          <div className="flex items-start gap-3">
                            <Clock className="h-5 w-5 mt-1 text-primary" />
                            <div>
                              <CardTitle>Just a quick win</CardTitle>
                              <CardDescription>Something I can build in a single sitting (1-2 hours)</CardDescription>
                            </div>
                          </div>
                          <RadioGroupItem value="quick-win" id="quick-win" className="mt-1" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <GradientButton
                            size="sm"
                            variant="secondary"
                            onClick={(e) => {
                              e.preventDefault()
                              handleDirectNavigation("quick-win", "template")
                            }}
                          >
                            Browse Templates
                          </GradientButton>
                          <GradientButton
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault()
                              handleDirectNavigation("quick-win", "custom")
                            }}
                          >
                            Create Custom
                          </GradientButton>
                        </div>
                      </CardContent>
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
                          <div className="flex items-start gap-3">
                            <Clock className="h-5 w-5 mt-1 text-primary" />
                            <div>
                              <CardTitle>Something I can share</CardTitle>
                              <CardDescription>A project I can show colleagues or friends (half-day)</CardDescription>
                            </div>
                          </div>
                          <RadioGroupItem value="shareable" id="shareable" className="mt-1" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <GradientButton
                            size="sm"
                            variant="secondary"
                            onClick={(e) => {
                              e.preventDefault()
                              handleDirectNavigation("shareable", "template")
                            }}
                          >
                            Browse Templates
                          </GradientButton>
                          <GradientButton
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault()
                              handleDirectNavigation("shareable", "custom")
                            }}
                          >
                            Create Custom
                          </GradientButton>
                        </div>
                      </CardContent>
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
                          <div className="flex items-start gap-3">
                            <Clock className="h-5 w-5 mt-1 text-primary" />
                            <div>
                              <CardTitle>Working prototype</CardTitle>
                              <CardDescription>A functional demo of a product idea (full day)</CardDescription>
                            </div>
                          </div>
                          <RadioGroupItem value="prototype" id="prototype" className="mt-1" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <GradientButton
                            size="sm"
                            variant="secondary"
                            onClick={(e) => {
                              e.preventDefault()
                              handleDirectNavigation("prototype", "template")
                            }}
                          >
                            Browse Templates
                          </GradientButton>
                          <GradientButton
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault()
                              handleDirectNavigation("prototype", "custom")
                            }}
                          >
                            Create Custom
                          </GradientButton>
                        </div>
                      </CardContent>
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
                          <div className="flex items-start gap-3">
                            <Clock className="h-5 w-5 mt-1 text-primary" />
                            <div>
                              <CardTitle>Minimum viable product</CardTitle>
                              <CardDescription>A basic but complete version of my app idea (weekend)</CardDescription>
                            </div>
                          </div>
                          <RadioGroupItem value="mvp" id="mvp" className="mt-1" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <GradientButton
                            size="sm"
                            variant="secondary"
                            onClick={(e) => {
                              e.preventDefault()
                              handleDirectNavigation("mvp", "template")
                            }}
                          >
                            Browse Templates
                          </GradientButton>
                          <GradientButton
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault()
                              handleDirectNavigation("mvp", "custom")
                            }}
                          >
                            Create Custom
                          </GradientButton>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </RadioGroup>

              <motion.div variants={item} className="space-y-4">
                <h2 className="text-xl font-semibold">How would you like to build it?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card
                    className={`relative border-2 cursor-pointer transition-all ${
                      projectType === "template" ? "border-primary" : "border-primary/20"
                    }`}
                    onClick={() => handleProjectTypeClick("template")}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center gap-2">
                        <FileCode className="h-8 w-8 text-primary" />
                        <h3 className="font-medium">Use a Template</h3>
                        <p className="text-sm text-muted-foreground">Start with a pre-designed project template</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`relative border-2 cursor-pointer transition-all ${
                      projectType === "custom" ? "border-primary" : "border-primary/20"
                    }`}
                    onClick={() => handleProjectTypeClick("custom")}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center gap-2">
                        <Pencil className="h-8 w-8 text-primary" />
                        <h3 className="font-medium">Custom Project</h3>
                        <p className="text-sm text-muted-foreground">Describe your own project idea</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`relative border-2 cursor-pointer transition-all ${
                      projectType === "clone" ? "border-primary" : "border-primary/20"
                    }`}
                    onClick={() => handleProjectTypeClick("clone")}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center gap-2">
                        <Copy className="h-8 w-8 text-primary" />
                        <h3 className="font-medium">Clone Existing</h3>
                        <p className="text-sm text-muted-foreground">Clone an existing website or app</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex justify-end">
                <GradientButton type="submit" size="lg" className="px-8">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </GradientButton>
              </motion.div>
            </form>
          </TabsContent>

          <TabsContent value="project" className="space-y-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <RadioGroup defaultValue="template" value={projectType} onValueChange={setProjectType}>
                <motion.div variants={container} className="grid gap-4">
                  <motion.div variants={item}>
                    <Card
                      className={`relative border-2 cursor-pointer transition-all ${
                        projectType === "template" ? "border-primary" : "border-primary/20"
                      }`}
                      onClick={() => handleProjectTypeClick("template")}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <FileCode className="h-5 w-5 mt-1 text-primary" />
                            <div>
                              <CardTitle>Use a Template</CardTitle>
                              <CardDescription>
                                Start with a pre-designed project template that you can customize to your needs. Perfect
                                for learning and getting quick results.
                              </CardDescription>
                            </div>
                          </div>
                          <RadioGroupItem value="template" id="template" className="mt-1" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <GradientButton
                          onClick={(e) => {
                            e.preventDefault()
                            handleDirectNavigation(selectedGoal, "template")
                          }}
                        >
                          Browse Templates
                        </GradientButton>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={item}>
                    <Card
                      className={`relative border-2 cursor-pointer transition-all ${
                        projectType === "custom" ? "border-primary" : "border-primary/20"
                      }`}
                      onClick={() => handleProjectTypeClick("custom")}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <Pencil className="h-5 w-5 mt-1 text-primary" />
                            <div>
                              <CardTitle>Custom Project</CardTitle>
                              <CardDescription>
                                Describe your own project idea and we'll help you build it from scratch. Great for
                                unique ideas and specific requirements.
                              </CardDescription>
                            </div>
                          </div>
                          <RadioGroupItem value="custom" id="custom" className="mt-1" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <GradientButton
                          onClick={(e) => {
                            e.preventDefault()
                            handleDirectNavigation(selectedGoal, "custom")
                          }}
                        >
                          Create Custom Project
                        </GradientButton>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={item}>
                    <Card
                      className={`relative border-2 cursor-pointer transition-all ${
                        projectType === "clone" ? "border-primary" : "border-primary/20"
                      }`}
                      onClick={() => handleProjectTypeClick("clone")}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <Copy className="h-5 w-5 mt-1 text-primary" />
                            <div>
                              <CardTitle>Clone Existing</CardTitle>
                              <CardDescription>
                                Clone an existing website or app design that you admire. Perfect for learning how
                                popular interfaces are built.
                              </CardDescription>
                            </div>
                          </div>
                          <RadioGroupItem value="clone" id="clone" className="mt-1" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <GradientButton
                          onClick={(e) => {
                            e.preventDefault()
                            handleDirectNavigation(selectedGoal, "clone")
                          }}
                        >
                          Clone Existing Site
                        </GradientButton>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </RadioGroup>

              <motion.div variants={item} className="space-y-4">
                <h2 className="text-xl font-semibold">How much time do you have?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card
                    className={`relative border-2 cursor-pointer transition-all ${
                      selectedGoal === "quick-win" || selectedGoal === "shareable"
                        ? "border-primary"
                        : "border-primary/20"
                    }`}
                    onClick={() => setSelectedGoal(selectedGoal === "shareable" ? "quick-win" : "shareable")}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center gap-2">
                        <Clock className="h-8 w-8 text-primary" />
                        <h3 className="font-medium">A few hours</h3>
                        <p className="text-sm text-muted-foreground">Quick projects (1-4 hours)</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`relative border-2 cursor-pointer transition-all ${
                      selectedGoal === "prototype" || selectedGoal === "mvp" ? "border-primary" : "border-primary/20"
                    }`}
                    onClick={() => setSelectedGoal(selectedGoal === "mvp" ? "prototype" : "mvp")}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center gap-2">
                        <Clock className="h-8 w-8 text-primary" />
                        <h3 className="font-medium">A day or more</h3>
                        <p className="text-sm text-muted-foreground">Larger projects (full day or weekend)</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex justify-end">
                <GradientButton type="submit" size="lg" className="px-8">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </GradientButton>
              </motion.div>
            </form>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
