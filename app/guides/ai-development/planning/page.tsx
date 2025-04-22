"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, FileCode, Layers, Lightbulb, Pencil } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlassCard } from "@/components/ui/glass-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GradientBorder } from "@/components/ui/gradient-border"
import { GradientButton } from "@/components/ui/gradient-button"
import { Badge } from "@/components/ui/badge"

export default function PlanningWithAIPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Link href="/guides/ai-development" className="inline-flex items-center text-sm font-medium hover:underline">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to AI Development Guide
          </Link>
          <span className="text-muted-foreground mx-2">/</span>
          <Badge
            variant="outline"
            className="bg-amber-100/50 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800"
          >
            Planning with AI
          </Badge>
        </div>

        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Planning with AI</h1>
          <p className="text-xl text-muted-foreground">
            Learn how to effectively plan your projects with AI assistance, from initial concept to architecture design.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>Introduction to AI-Assisted Planning</CardTitle>
                <CardDescription>How AI can transform your project planning process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Planning is a critical phase in any development project, and AI tools can significantly enhance this
                  process. By leveraging AI during planning, you can:
                </p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Generate comprehensive project structures and architectures</li>
                  <li>Explore multiple approaches to solving problems</li>
                  <li>Identify potential challenges before writing code</li>
                  <li>Create detailed technical specifications</li>
                  <li>Design database schemas and API endpoints</li>
                </ul>
                <p className="mt-4">
                  This guide will walk you through the process of using AI effectively during the planning phase of your
                  projects.
                </p>
              </CardContent>
            </Card>

            {/* Planning Phases */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Planning Phases</h2>
              <p className="text-muted-foreground">
                AI can assist in each phase of the planning process. Explore each phase below.
              </p>

              <Tabs defaultValue="concept" className="w-full">
                <TabsList className="grid grid-cols-4 h-12">
                  <TabsTrigger value="concept">Concept</TabsTrigger>
                  <TabsTrigger value="architecture">Architecture</TabsTrigger>
                  <TabsTrigger value="technical">Technical Spec</TabsTrigger>
                  <TabsTrigger value="visual">Visual Design</TabsTrigger>
                </TabsList>
                <TabsContent value="concept" className="mt-4 space-y-4">
                  <GlassCard>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                        Concept Development
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>
                        AI tools excel at helping you refine your initial project concept. Start with a rough idea and
                        use AI to:
                      </p>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>Explore different approaches to implementing your idea</li>
                        <li>Identify key features and prioritize them</li>
                        <li>Generate user stories and acceptance criteria</li>
                        <li>Research similar existing solutions</li>
                      </ul>
                      <div className="bg-muted p-4 rounded-md mt-4">
                        <h4 className="font-medium mb-2">Example Prompt:</h4>
                        <div className="bg-card p-3 rounded border text-sm font-mono">
                          I want to build a personal finance tracking app. Can you help me define the core features,
                          potential user stories, and suggest a tech stack that would be appropriate for this project?
                        </div>
                      </div>
                    </CardContent>
                  </GlassCard>
                </TabsContent>
                <TabsContent value="architecture" className="mt-4 space-y-4">
                  <GlassCard>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Layers className="h-5 w-5 mr-2 text-blue-500" />
                        Architecture Planning
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>Once you have a clear concept, AI can help you design the architecture of your application:</p>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>Design system components and their interactions</li>
                        <li>Create database schemas and entity relationships</li>
                        <li>Plan API endpoints and data flows</li>
                        <li>Identify potential scalability challenges</li>
                        <li>Suggest appropriate design patterns</li>
                      </ul>
                      <div className="bg-muted p-4 rounded-md mt-4">
                        <h4 className="font-medium mb-2">Example Prompt:</h4>
                        <div className="bg-card p-3 rounded border text-sm font-mono">
                          For my personal finance app, I need to track transactions, categories, and generate reports.
                          Can you design a database schema with the necessary tables and relationships? Also, suggest an
                          architecture for the backend API that would support these features.
                        </div>
                      </div>
                    </CardContent>
                  </GlassCard>
                </TabsContent>
                <TabsContent value="technical" className="mt-4 space-y-4">
                  <GlassCard>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileCode className="h-5 w-5 mr-2 text-violet-500" />
                        Technical Specification
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>AI can help you create detailed technical specifications for your project:</p>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>Define data models and validation rules</li>
                        <li>Specify API endpoints with request/response formats</li>
                        <li>Document authentication and authorization requirements</li>
                        <li>Plan error handling and logging strategies</li>
                        <li>Create test plans and scenarios</li>
                      </ul>
                      <div className="bg-muted p-4 rounded-md mt-4">
                        <h4 className="font-medium mb-2">Example Prompt:</h4>
                        <div className="bg-card p-3 rounded border text-sm font-mono">
                          Based on the database schema and architecture we've discussed for the finance app, can you
                          create a detailed API specification document? Include endpoints for CRUD operations on
                          transactions and categories, as well as endpoints for generating reports.
                        </div>
                      </div>
                    </CardContent>
                  </GlassCard>
                </TabsContent>
                <TabsContent value="visual" className="mt-4 space-y-4">
                  <GlassCard>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Pencil className="h-5 w-5 mr-2 text-cyan-500" />
                        Visual Design Planning
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>AI can assist in planning the visual aspects of your project:</p>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>Generate wireframes and mockups</li>
                        <li>Suggest UI component hierarchies</li>
                        <li>Create user flow diagrams</li>
                        <li>Recommend color schemes and typography</li>
                        <li>Design responsive layouts for different devices</li>
                      </ul>
                      <div className="bg-muted p-4 rounded-md mt-4">
                        <h4 className="font-medium mb-2">Example Prompt:</h4>
                        <div className="bg-card p-3 rounded border text-sm font-mono">
                          For my personal finance app, I need a clean, modern UI. Can you suggest a wireframe for the
                          main dashboard that shows transaction history, spending by category, and budget progress?
                          Also, suggest a color scheme that conveys trust and financial stability.
                        </div>
                      </div>
                    </CardContent>
                  </GlassCard>
                </TabsContent>
              </Tabs>
            </div>

            {/* Best Practices */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Best Practices for AI-Assisted Planning</h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <GradientBorder className="h-full">
                  <Card className="h-full border-0">
                    <CardHeader>
                      <CardTitle>Do's</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-2 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900/30 dark:text-green-400 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span>Start with clear objectives and constraints</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900/30 dark:text-green-400 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span>Iterate on AI suggestions rather than accepting them blindly</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900/30 dark:text-green-400 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span>Ask AI to explain its reasoning and recommendations</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900/30 dark:text-green-400 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span>Use AI to explore multiple approaches to the same problem</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900/30 dark:text-green-400 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span>Document AI-generated plans and your modifications</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </GradientBorder>

                <GradientBorder className="h-full" fromColor="from-red-400" toColor="to-red-500">
                  <Card className="h-full border-0">
                    <CardHeader>
                      <CardTitle>Don'ts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-2 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 dark:bg-red-900/30 dark:text-red-400 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3"
                            >
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </div>
                          <span>Rely solely on AI without critical evaluation</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 dark:bg-red-900/30 dark:text-red-400 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3"
                            >
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </div>
                          <span>Skip validating AI-generated architecture with team members</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 dark:bg-red-900/30 dark:text-red-400 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3"
                            >
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </div>
                          <span>Use vague prompts that lead to generic results</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 dark:bg-red-900/30 dark:text-red-400 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3"
                            >
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </div>
                          <span>Ignore business requirements in favor of technical elegance</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 dark:bg-red-900/30 dark:text-red-400 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3"
                            >
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </div>
                          <span>Attempt to plan the entire project at once without iterations</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </GradientBorder>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Planning Checklist</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 rounded-full bg-muted flex items-center justify-center text-muted-foreground mt-0.5">
                      <span className="text-xs">1</span>
                    </div>
                    <span>Define project goals and success criteria</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 rounded-full bg-muted flex items-center justify-center text-muted-foreground mt-0.5">
                      <span className="text-xs">2</span>
                    </div>
                    <span>Identify target users and their needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 rounded-full bg-muted flex items-center justify-center text-muted-foreground mt-0.5">
                      <span className="text-xs">3</span>
                    </div>
                    <span>List core features and prioritize them</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 rounded-full bg-muted flex items-center justify-center text-muted-foreground mt-0.5">
                      <span className="text-xs">4</span>
                    </div>
                    <span>Design system architecture and data models</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 rounded-full bg-muted flex items-center justify-center text-muted-foreground mt-0.5">
                      <span className="text-xs">5</span>
                    </div>
                    <span>Create technical specifications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 rounded-full bg-muted flex items-center justify-center text-muted-foreground mt-0.5">
                      <span className="text-xs">6</span>
                    </div>
                    <span>Plan visual design and user interface flows</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 rounded-full bg-muted flex items-center justify-center text-muted-foreground mt-0.5">
                      <span className="text-xs">7</span>
                    </div>
                    <span>Identify potential challenges and risks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 rounded-full bg-muted flex items-center justify-center text-muted-foreground mt-0.5">
                      <span className="text-xs">8</span>
                    </div>
                    <span>Create a development timeline and milestones</span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <Card>
              <CardHeader>
                <CardTitle>AI Planning Tools</CardTitle>
                <CardDescription>Recommended tools for AI-assisted planning</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 h-8 w-8 rounded-md bg-violet-100 flex items-center justify-center text-violet-600 dark:bg-violet-900/30 dark:text-violet-400 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.29 7 12 12 20.71 7" />
                        <line x1="12" y1="22" x2="12" y2="12" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">ChatGPT / GPT-4</span>
                      <p className="text-sm text-muted-foreground">
                        Excellent for brainstorming and architecture planning
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-8 w-8 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Claude</span>
                      <p className="text-sm text-muted-foreground">Great for detailed technical specifications</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-8 w-8 rounded-md bg-amber-100 flex items-center justify-center text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="3" y1="9" x2="21" y2="9" />
                        <line x1="9" y1="21" x2="9" y2="9" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Midjourney</span>
                      <p className="text-sm text-muted-foreground">Visual design concepts and mockups</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-8 w-8 rounded-md bg-cyan-100 flex items-center justify-center text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">GitHub Copilot</span>
                      <p className="text-sm text-muted-foreground">Code structure and implementation planning</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-between pt-6 mt-8 border-t">
          <Link
            href="/guides/ai-development"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Guide Hub
          </Link>
          <GradientButton asChild>
            <Link href="/guides/ai-development/workflow" className="flex items-center whitespace-nowrap">
              Next: Development Workflow
              <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
            </Link>
          </GradientButton>
        </div>
      </div>
    </div>
  )
}
