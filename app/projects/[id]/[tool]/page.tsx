"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Copy, ExternalLink, HelpCircle, Check, Clock } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { projectsMockData, toolsMockData } from "@/lib/mock-data"
import { PromptDisplay } from "@/components/ui/prompt-display"
import { IntegrationGuide } from "@/components/ui/integration-guide"
import { PhaseNavigation } from "@/components/phase-navigation"
import { ToolLogo } from "@/components/tool-logo"
import { GlassCard } from "@/components/ui/glass-card"

export default function PromptLibraryPage({
  params,
}: {
  params: { id: string; tool: string }
}) {
  const { toast } = useToast()
  const router = useRouter()
  const [activeToolTab, setActiveToolTab] = useState(params.tool)
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  // In a real app, we would fetch this data from an API
  const project = projectsMockData.find((p) => p.id === params.id) || projectsMockData[0]
  const tool = toolsMockData.find((t) => t.id === activeToolTab) || toolsMockData[0]
  const phases = project.phases
  const currentPhase = phases[currentPhaseIndex]
  const prompt = currentPhase.prompts[tool.id] || { content: "Prompt not available for this tool.", tooltips: [] }

  const progressPercentage = ((currentPhaseIndex + 1) / phases.length) * 100

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Update URL when tool changes
  useEffect(() => {
    if (activeToolTab !== params.tool) {
      router.push(`/projects/${params.id}/${activeToolTab}`)
    }
  }, [activeToolTab, params.id, params.tool, router])

  // Function to encode prompt for v0
  const getToolUrl = () => {
    if (tool.id === "v0") {
      // Encode the prompt for v0
      const encodedPrompt = encodeURIComponent(prompt.content)
      return `${tool.linkPattern}?q=${encodedPrompt}`
    }
    return tool.linkPattern
  }

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content)
      toast({
        title: "Copied to clipboard",
        description: "The prompt has been copied to your clipboard.",
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually.",
        variant: "destructive",
      })
    }
  }

  const handleNextPhase = () => {
    if (currentPhaseIndex < phases.length - 1) {
      setCurrentPhaseIndex(currentPhaseIndex + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePreviousPhase = () => {
    if (currentPhaseIndex > 0) {
      setCurrentPhaseIndex(currentPhaseIndex - 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePhaseComplete = () => {
    if (currentPhaseIndex < phases.length - 1) {
      setCurrentPhaseIndex(currentPhaseIndex + 1)
      window.scrollTo(0, 0)
    } else {
      // Navigate to completion page when all phases are done
      router.push(`/projects/${params.id}/complete`)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/projects/${params.id}`}
          className="inline-flex items-center text-sm font-medium mb-6 hover:underline"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Project Overview
        </Link>

        <div className="space-y-2 mb-6">
          <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Building with</span>
            <div className="flex items-center gap-1.5">
              <ToolLogo toolId={tool.id} size="sm" />
              <span className="font-medium">{tool.name}</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-2 mb-6 overflow-x-auto">
          <Tabs defaultValue={tool.id} value={activeToolTab} onValueChange={setActiveToolTab} className="w-full">
            <TabsList className="grid grid-cols-4 h-12">
              {toolsMockData.map((t) => (
                <TabsTrigger key={t.id} value={t.id} className="py-3">
                  <div className="flex items-center gap-2">
                    <ToolLogo toolId={t.id} size="sm" className="h-5 w-5" />
                    <span>{t.name}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <PhaseNavigation phases={phases} currentPhaseIndex={currentPhaseIndex} onSelectPhase={setCurrentPhaseIndex} />

        <div className="grid gap-6 mt-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <motion.div
              key={`${currentPhaseIndex}-${activeToolTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-2 border-border/50">
                <CardHeader className="bg-muted/30">
                  <CardTitle>
                    Phase {currentPhaseIndex + 1}: {currentPhase.title}
                  </CardTitle>
                  <CardDescription>{currentPhase.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <PromptDisplay prompt={prompt} />

                  <div className="flex flex-wrap gap-3">
                    <Button className="flex-1 h-12" variant="outline" onClick={handleCopyPrompt}>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Prompt
                    </Button>
                    <GradientButton className="flex-1 h-12" asChild>
                      <a href={getToolUrl()} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open in {tool.name}
                      </a>
                    </GradientButton>
                  </div>

                  <IntegrationGuide phase={currentPhase} tool={tool} />

                  <div className="flex justify-between pt-4 mt-6 border-t">
                    <Button variant="outline" onClick={handlePreviousPhase} disabled={currentPhaseIndex === 0}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous Phase
                    </Button>
                    <Button onClick={handleNextPhase} disabled={currentPhaseIndex === phases.length - 1}>
                      Next Phase
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-6">
            <GlassCard variant="light" hoverEffect="none" className="overflow-visible">
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>
                      Phase {currentPhaseIndex + 1} of {phases.length}
                    </span>
                    <span>{Math.round(progressPercentage)}% Complete</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2 bg-muted" />
                </div>

                <div className="space-y-3">
                  {phases.map((phase, index) => (
                    <div
                      key={index}
                      className={`flex items-start ${index === currentPhaseIndex ? "bg-muted/50 -mx-2 px-2 py-1 rounded-md" : ""}`}
                    >
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                          index < currentPhaseIndex
                            ? "bg-primary"
                            : index === currentPhaseIndex
                              ? "bg-primary/80 border border-primary"
                              : "border border-muted-foreground/30"
                        } mr-3 mt-1`}
                      >
                        {index < currentPhaseIndex && <Check className="h-3 w-3 text-primary-foreground" />}
                        {index >= currentPhaseIndex && (
                          <span className="text-xs text-muted-foreground">{index + 1}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium leading-none">{phase.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </GlassCard>

            <Card className="border-2 border-border/50">
              <CardHeader className="bg-muted/30">
                <CardTitle>Phase Completion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 dark:bg-amber-900/30 dark:text-amber-300">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Phase {currentPhaseIndex + 1} of {phases.length}
                    </h3>
                    <p className="text-sm text-muted-foreground">In progress</p>
                  </div>
                </div>

                <GradientButton size="lg" className="w-full h-12" onClick={handlePhaseComplete}>
                  Mark as Complete & Continue
                </GradientButton>

                <Button variant="outline" className="w-full justify-start mt-2" asChild>
                  <Link href="#">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Need Help with This Phase?
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
