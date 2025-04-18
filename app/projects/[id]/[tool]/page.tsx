"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Copy, ExternalLink, HelpCircle, Check } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { projectsMockData, toolsMockData } from "@/lib/mock-data"
import { PromptDisplay } from "@/components/ui/prompt-display"
import { IntegrationGuide } from "@/components/ui/integration-guide"
import { PhaseNavigation } from "@/components/phase-navigation"
import { ToolLogo } from "@/components/tool-logo"
import { PhaseCompletionStatus } from "@/components/phase-completion-status"

export default function PromptLibraryPage({
  params,
}: {
  params: { id: string; tool: string }
}) {
  const { toast } = useToast()
  const router = useRouter()
  const [activeToolTab, setActiveToolTab] = useState(params.tool)
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0)

  // In a real app, we would fetch this data from an API
  const project = projectsMockData.find((p) => p.id === params.id) || projectsMockData[0]
  const tool = toolsMockData.find((t) => t.id === activeToolTab) || toolsMockData[0]
  const phases = project.phases
  const currentPhase = phases[currentPhaseIndex]
  const prompt = currentPhase.prompts[tool.id] || { content: "Prompt not available for this tool.", tooltips: [] }

  const progressPercentage = ((currentPhaseIndex + 1) / phases.length) * 100

  // Update URL when tool changes
  useEffect(() => {
    if (activeToolTab !== params.tool) {
      router.push(`/projects/${params.id}/${activeToolTab}`)
    }
  }, [activeToolTab, params.id, params.tool, router])

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

        <PhaseNavigation phases={phases} currentPhaseIndex={currentPhaseIndex} onSelectPhase={setCurrentPhaseIndex} />

        <div className="grid gap-6 mt-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <CardTitle>
                    Phase {currentPhaseIndex + 1}: {currentPhase.title}
                  </CardTitle>
                  <Tabs
                    defaultValue={tool.id}
                    value={activeToolTab}
                    onValueChange={setActiveToolTab}
                    className="w-full md:w-[400px]"
                  >
                    <TabsList className="grid grid-cols-4">
                      {toolsMockData.map((t) => (
                        <TabsTrigger key={t.id} value={t.id} className="text-xs py-1.5">
                          <div className="flex items-center gap-1.5">
                            <ToolLogo toolId={t.id} size="sm" className="h-5 w-5" />
                            <span>{t.name}</span>
                          </div>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>
                <CardDescription>{currentPhase.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <PromptDisplay prompt={prompt} />

                <div className="flex flex-wrap gap-3">
                  <Button className="flex-1" variant="outline" onClick={handleCopyPrompt}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Prompt
                  </Button>
                  <Button className="flex-1" asChild>
                    <a href={`${tool.linkPattern}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open in {tool.name}
                    </a>
                  </Button>
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
          </div>

          <div className="space-y-6">
            <Card>
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
                  <Progress value={progressPercentage} className="h-2" />
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
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Phase Completion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <PhaseCompletionStatus
                  phaseIndex={currentPhaseIndex}
                  totalPhases={phases.length}
                  onComplete={handlePhaseComplete}
                />
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
