"use client"

import type React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Circle, Code, Rocket, Sparkles, Zap } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"

export default function LearningPathPage() {
  const [activeTab, setActiveTab] = useState("beginner")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden relative">
        <AnimatedBackground />

        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Your AI Development Journey
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A structured learning path to take you from beginner to confident AI-assisted developer
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <GradientButton asChild size="lg">
                <Link href="#learning-paths" className="inline-flex items-center whitespace-nowrap">
                  Find Your Path
                  <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                </Link>
              </GradientButton>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">Browse Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning paths section */}
      <section id="learning-paths" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Choose Your Path</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Select the learning path that matches your current experience level and goals
            </p>
          </div>

          <Tabs defaultValue="beginner" value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Custom styled tabs to match the design in the image */}
            <div className="mb-8">
              <div className="grid w-full grid-cols-3 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950 p-1">
                <TabButton
                  id="beginner"
                  active={activeTab === "beginner"}
                  onClick={() => setActiveTab("beginner")}
                  icon={<Sparkles className="h-5 w-5" />}
                  label="Beginner"
                  description="New to coding"
                />
                <TabButton
                  id="intermediate"
                  active={activeTab === "intermediate"}
                  onClick={() => setActiveTab("intermediate")}
                  icon={<Code className="h-5 w-5" />}
                  label="Intermediate"
                  description="Some experience"
                />
                <TabButton
                  id="advanced"
                  active={activeTab === "advanced"}
                  onClick={() => setActiveTab("advanced")}
                  icon={<Rocket className="h-5 w-5" />}
                  label="Advanced"
                  description="Experienced coder"
                />
              </div>
            </div>

            <TabsContent value="beginner" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-violet-100 px-3 py-1 text-sm text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 mb-2">
                    Beginner Path
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Start Your AI Development Journey</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Perfect for those with little to no coding experience. This path will guide you through creating
                    your first projects using AI tools, with no coding required.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
                    <GradientButton asChild>
                      <Link href="#beginner-milestones" className="flex items-center whitespace-nowrap">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                      </Link>
                    </GradientButton>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="rounded-lg overflow-hidden border shadow-lg">
                    <img
                      src="/step1-ideation-sketch.png"
                      alt="Beginner learning path"
                      className="aspect-video object-cover"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>

              <div id="beginner-milestones" className="space-y-6">
                <h3 className="text-2xl font-bold">Your Learning Milestones</h3>
                <p className="text-muted-foreground">
                  Follow these steps to go from complete beginner to confidently building with AI assistance
                </p>

                <div className="space-y-6">
                  <LearningPathMilestone
                    number={1}
                    title="Build Your First Project with v0"
                    description="Create a simple project using v0 without writing any code"
                    estimatedTime="1-2 hours"
                    tools={["v0"]}
                    skills={["Prompt writing", "Project planning", "Basic UI concepts"]}
                    projectType="Quick Win"
                    completed={false}
                  >
                    <div className="space-y-4">
                      <h4 className="font-medium">Getting Started Checklist:</h4>
                      <div className="space-y-2">
                        <ChecklistItem checked={false} text="Create a v0 account" />
                        <ChecklistItem checked={false} text="Complete a simple project (landing page or form)" />
                        <ChecklistItem checked={false} text="Deploy your project directly from v0" />
                        <ChecklistItem checked={false} text="Share your creation with others" />
                      </div>
                      <div className="pt-4">
                        <GradientButton asChild size="sm">
                          <Link href="/projects?difficulty=beginner&tool=v0" className="inline-flex items-center">
                            Find Beginner Projects
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </GradientButton>
                      </div>
                    </div>
                  </LearningPathMilestone>

                  <LearningPathMilestone
                    number={2}
                    title="Save & Manage Your Code"
                    description="Learn how to save your AI-generated code and prepare for more advanced development"
                    estimatedTime="Half-day"
                    tools={["github"]}
                    skills={["GitHub basics", "Code organization", "Simple code editing"]}
                    projectType="Shareable"
                    completed={false}
                  >
                    <div className="space-y-4">
                      <h4 className="font-medium">Version Control Basics:</h4>
                      <div className="space-y-2">
                        <ChecklistItem checked={false} text="Create a GitHub account" />
                        <ChecklistItem checked={false} text="Export your v0 project to GitHub" />
                        <ChecklistItem checked={false} text="Install GitHub Desktop" />
                        <ChecklistItem checked={false} text="Make a simple change and commit it" />
                        <ChecklistItem checked={false} text="Deploy your project from GitHub" />
                        <ChecklistItem checked={false} text="Understand when to transition from v0 to Cursor" />
                      </div>
                      <div className="pt-4">
                        <Button asChild variant="outline" size="sm">
                          <Link href="/guides/github-basics" className="inline-flex items-center">
                            GitHub Basics Guide
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </LearningPathMilestone>

                  <LearningPathMilestone
                    number={3}
                    title="Extend Your Project with an IDE"
                    description="Move from v0 to Cursor when your project grows beyond 40-50 files"
                    estimatedTime="Full day"
                    tools={["cursor"]}
                    skills={["IDE basics", "Code navigation", "Making larger changes"]}
                    projectType="Working Prototype"
                    completed={false}
                  >
                    <div className="space-y-4">
                      <h4 className="font-medium">IDE Introduction:</h4>
                      <div className="space-y-2">
                        <ChecklistItem checked={false} text="Install Cursor (AI-powered code editor)" />
                        <ChecklistItem checked={false} text="Clone your GitHub repository" />
                        <ChecklistItem checked={false} text="Navigate and understand your project structure" />
                        <ChecklistItem checked={false} text="Make changes with AI assistance in Cursor" />
                        <ChecklistItem checked={false} text="Commit and push changes back to GitHub" />
                      </div>
                      <div className="pt-4">
                        <Button asChild variant="outline" size="sm">
                          <Link href="/guides/cursor-basics" className="inline-flex items-center">
                            Cursor Basics Guide
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </LearningPathMilestone>

                  <LearningPathMilestone
                    number={4}
                    title="Build a Complete Application"
                    description="Create a more complex project using everything you've learned"
                    estimatedTime="Weekend"
                    tools={["v0", "github", "cursor", "vercel"]}
                    skills={["Full project workflow", "Adding features", "Debugging", "Deployment"]}
                    projectType="MVP"
                    completed={false}
                  >
                    <div className="space-y-4">
                      <h4 className="font-medium">Complete Project Workflow:</h4>
                      <div className="space-y-2">
                        <ChecklistItem checked={false} text="Plan a more complex project" />
                        <ChecklistItem checked={false} text="Start with v0 for the initial structure" />
                        <ChecklistItem checked={false} text="Move to Cursor for detailed development" />
                        <ChecklistItem checked={false} text="Use GitHub for version control" />
                        <ChecklistItem checked={false} text="Deploy your finished application" />
                        <ChecklistItem checked={false} text="Share your work with the community" />
                      </div>
                      <div className="pt-4">
                        <GradientButton asChild size="sm">
                          <Link href="/projects?difficulty=intermediate" className="inline-flex items-center">
                            Find Intermediate Projects
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </GradientButton>
                      </div>
                    </div>
                  </LearningPathMilestone>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-8">
              {/* Intermediate path content - simplified for brevity */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 mb-2">
                    Intermediate Path
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Level Up Your AI Development Skills
                  </h2>
                  <p className="text-muted-foreground md:text-lg">
                    For those with some coding experience. This path will help you integrate AI tools into your existing
                    workflow and build more complex applications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
                    <Button variant="secondary">Coming Soon</Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="rounded-lg overflow-hidden border shadow-lg">
                    <img
                      src="/step2-ai-prompt.png"
                      alt="Intermediate learning path"
                      className="aspect-video object-cover"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-8">
              {/* Advanced path content - simplified for brevity */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 mb-2">
                    Advanced Path
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Master AI-Assisted Development</h2>
                  <p className="text-muted-foreground md:text-lg">
                    For experienced developers. This path will help you maximize productivity with AI tools and build
                    complex, production-ready applications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
                    <Button variant="secondary">Coming Soon</Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="rounded-lg overflow-hidden border shadow-lg">
                    <img
                      src="/step3-final-app.png"
                      alt="Advanced learning path"
                      className="aspect-video object-cover"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

interface TabButtonProps {
  id: string
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
  description: string
}

function TabButton({ id, active, onClick, icon, label, description }: TabButtonProps) {
  return (
    <div className={`relative col-span-1 ${active ? "text-white" : "text-muted-foreground"}`}>
      <button
        onClick={onClick}
        className="relative z-20 flex w-full flex-col items-center gap-1 rounded-lg py-3 text-center"
      >
        <span className="flex items-center justify-center">{icon}</span>
        <div>
          <p className="font-medium">{label}</p>
          <p className="text-xs text-muted-foreground dark:text-slate-400">{description}</p>
        </div>
      </button>
      {active && <div className="absolute inset-0 z-10 rounded-lg bg-violet-600 dark:bg-violet-600 shadow-md"></div>}
    </div>
  )
}

interface ChecklistItemProps {
  checked: boolean
  text: string
}

function ChecklistItem({ checked, text }: ChecklistItemProps) {
  return (
    <div className="flex items-start">
      {checked ? (
        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
      ) : (
        <Circle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5 mr-2" />
      )}
      <span className={checked ? "text-primary" : ""}>{text}</span>
    </div>
  )
}

interface LearningPathMilestoneProps {
  number: number
  title: string
  description: string
  estimatedTime: string
  tools: string[]
  skills: string[]
  projectType: string
  completed: boolean
  children: React.ReactNode
}

function LearningPathMilestone({
  number,
  title,
  description,
  estimatedTime,
  tools,
  skills,
  projectType,
  completed,
  children,
}: LearningPathMilestoneProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full 
            ${
              completed
                ? "bg-primary text-primary-foreground"
                : "border border-muted-foreground/30 text-muted-foreground"
            } mr-4`}
          >
            {completed ? <CheckCircle2 className="h-5 w-5" /> : <span>{number}</span>}
          </div>
          <div className="space-y-1 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <Zap className="mr-1 h-3.5 w-3.5" />
                {estimatedTime}
              </Badge>
              <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-200 dark:text-amber-400">
                {projectType}
              </Badge>
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span className="font-medium">Tools:</span>
            <div className="flex items-center gap-2">
              {tools.map((tool) => (
                <ToolIcon key={tool} toolId={tool} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          <span className="text-sm font-medium text-muted-foreground">Skills:</span>
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        <Button variant="ghost" className="mt-4 w-full justify-center" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide Details" : "Show Details"}
        </Button>

        {expanded && <div className="mt-4 pt-4 border-t">{children}</div>}
      </div>
    </Card>
  )
}

function ToolIcon({ toolId }: { toolId: string }) {
  // Map tool IDs to their respective icons
  const getToolIcon = (id: string) => {
    switch (id) {
      case "v0":
        return "/v0-logo.png"
      case "github":
        return "/github-logo.png"
      case "cursor":
        return "/cursor-logo.png"
      case "vercel":
        return "/vercel-logo.png"
      default:
        return "/placeholder.svg"
    }
  }

  return (
    <div className="flex items-center gap-1.5">
      <div className="h-5 w-5 flex-shrink-0 overflow-hidden rounded-sm">
        <img
          src={getToolIcon(toolId) || "/placeholder.svg"}
          alt={`${toolId} logo`}
          className="h-full w-full object-contain"
        />
      </div>
      <span className="capitalize">{toolId}</span>
    </div>
  )
}
