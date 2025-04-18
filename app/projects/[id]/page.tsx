"use client"

import Link from "next/link"
import { ArrowLeft, Check, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projectsMockData, toolsMockData } from "@/lib/mock-data"
import { ToolLogo } from "@/components/tool-logo"

export default function ProjectOverviewPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch this data from an API
  const project = projectsMockData.find((p) => p.id === params.id) || projectsMockData[0]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/projects" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Projects
        </Link>

        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Project Roadmap</h2>
              <div className="space-y-3">
                {project.phases.map((phase, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${index === 0 ? "bg-primary" : "border border-muted-foreground/30"} mr-3 mt-1`}
                    >
                      {index === 0 && <Check className="h-3 w-3 text-primary-foreground" />}
                      {index !== 0 && <span className="text-xs text-muted-foreground">{index + 1}</span>}
                    </div>
                    <div>
                      <h3 className="font-medium leading-none">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">What You'll Learn</h2>
              <ul className="space-y-2">
                {project.learningPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Choose your tool</CardTitle>
                <CardDescription>Select the AI tool you want to use for this project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {toolsMockData.map((tool) => (
                  <Card key={tool.id} className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <CardHeader className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-base">{tool.name}</CardTitle>
                          <CardDescription className="text-xs">{tool.description}</CardDescription>
                        </div>
                        <ToolLogo toolId={tool.id} size="sm" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Button asChild size="sm" className="w-full">
                        <Link href={`/projects/${params.id}/${tool.id}`}>
                          Get Started
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Difficulty:</span>
                  <span className="text-sm font-medium">{project.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Time Estimate:</span>
                  <span className="text-sm font-medium">{project.timeEstimate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Completions:</span>
                  <span className="text-sm font-medium">{project.completionCount}+ builders</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
