"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, GitBranch, Bug, TestTube, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { GradientButton } from "@/components/ui/gradient-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BestPracticesPage() {
  return (
    <div className="container py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Link href="/guides/ai-development" className="inline-flex items-center text-sm font-medium hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to AI Development Guide
        </Link>
        <span className="text-muted-foreground mx-2">/</span>
        <Badge
          variant="outline"
          className="bg-emerald-100/50 text-emerald-800 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800"
        >
          Best Practices
        </Badge>
      </div>

      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Best Practices</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Learn essential best practices for version control, testing, debugging, and continuous learning.
        </p>
      </div>

      <div className="grid gap-12">
        {/* Section 1: Version Control */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              <GitBranch className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold">Version Control (Low Effort, High Reward)</h2>
          </div>

          <p className="mb-6">
            Version control prevents catastrophic loss when AI modifies your codebase. It's one of the simplest yet most
            important practices for AI-assisted development.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Why Version Control is Essential</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Prevents catastrophic loss when AI modifies your codebase</li>
                  <li>Allows you to revert to previous working versions</li>
                  <li>Tracks changes and progress over time</li>
                  <li>Facilitates collaboration with others</li>
                  <li>Provides a safety net for experimentation</li>
                </ul>
                <div className="bg-muted p-4 rounded-md mt-4">
                  <p className="text-sm font-medium mb-2">Manual vs. Automatic Version Control:</p>
                  <p className="text-sm text-muted-foreground">
                    Manual version control is better than automatic checkpoints, as it forces you to keep track of
                    progress, provides clear restore points, and avoids the confusion of thousands of automatic
                    checkpoints.
                  </p>
                </div>
              </CardContent>
            </Card>
            <GlassCard>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Git Workflow for AI-Assisted Development</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 mt-0.5">
                      <span className="font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Create a feature branch</h4>
                      <p className="text-sm text-muted-foreground font-mono bg-muted p-1 rounded mt-1">
                        git checkout -b feature/ai-assisted-feature
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 mt-0.5">
                      <span className="font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Commit before AI modifications</h4>
                      <p className="text-sm text-muted-foreground font-mono bg-muted p-1 rounded mt-1">
                        git commit -m "Before AI changes: [description]"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 mt-0.5">
                      <span className="font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Apply AI changes</h4>
                      <p className="text-sm text-muted-foreground">Make changes with AI assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 mt-0.5">
                      <span className="font-medium">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Review and commit AI changes</h4>
                      <p className="text-sm text-muted-foreground font-mono bg-muted p-1 rounded mt-1">
                        git commit -m "AI-assisted: [description]"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 mt-0.5">
                      <span className="font-medium">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Merge when satisfied</h4>
                      <p className="text-sm text-muted-foreground font-mono bg-muted p-1 rounded mt-1">
                        git checkout main && git merge feature/ai-assisted-feature
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Section 2: Testing */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <TestTube className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold">Testing AI-Generated Code</h2>
          </div>

          <p className="mb-6">
            AI-generated code requires thorough testing. While AI can produce functional code, it may contain subtle
            bugs or misunderstandings of requirements.
          </p>

          <Tabs defaultValue="unit" className="w-full">
            <TabsList className="grid grid-cols-3 h-12">
              <TabsTrigger value="unit">Unit Testing</TabsTrigger>
              <TabsTrigger value="integration">Integration Testing</TabsTrigger>
              <TabsTrigger value="ai-tests">AI-Generated Tests</TabsTrigger>
            </TabsList>
            <TabsContent value="unit" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Unit Testing AI-Generated Code</CardTitle>
                  <CardDescription>Test individual functions and components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Unit tests are particularly important for AI-generated code because they verify that each piece
                    functions as expected in isolation.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Test edge cases that the AI might have missed</li>
                    <li>Verify input validation and error handling</li>
                    <li>Check for correct business logic implementation</li>
                    <li>Ensure performance meets requirements</li>
                  </ul>
                  <div className="bg-muted p-4 rounded-md mt-4">
                    <h4 className="font-medium mb-2">Example Unit Test Prompt:</h4>
                    <div className="bg-card p-3 rounded border text-sm font-mono">
                      "Generate unit tests for this user authentication function. Include tests for valid credentials,
                      invalid credentials, account lockout after multiple failures, and password complexity validation."
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="integration" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Integration Testing</CardTitle>
                  <CardDescription>Test how components work together</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Integration tests verify that AI-generated components work correctly with the rest of your
                    application.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Test interactions between AI-generated and existing code</li>
                    <li>Verify data flow between components</li>
                    <li>Check for compatibility issues</li>
                    <li>Test end-to-end workflows</li>
                  </ul>
                  <div className="bg-muted p-4 rounded-md mt-4">
                    <h4 className="font-medium mb-2">Integration Testing Strategy:</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                      <li>Start with simple integration tests that verify basic interactions</li>
                      <li>Gradually add more complex scenarios</li>
                      <li>Use mock objects for external dependencies</li>
                      <li>Test both happy paths and error scenarios</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ai-tests" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Generated Tests</CardTitle>
                  <CardDescription>Using AI to create tests for your code</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>AI can help generate tests for your code, but these tests should be reviewed carefully.</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md">
                      <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Quickly generate test coverage</li>
                        <li>Identify edge cases you might miss</li>
                        <li>Create consistent test patterns</li>
                        <li>Generate test data</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md">
                      <h4 className="font-medium mb-2 text-red-700 dark:text-red-300">Limitations:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>May miss critical business logic tests</li>
                        <li>Can create redundant or low-value tests</li>
                        <li>Might not understand complex requirements</li>
                        <li>Tests need human review</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-md mt-4">
                    <h4 className="font-medium mb-2">Best Practice:</h4>
                    <p className="text-sm text-muted-foreground">
                      Use AI to generate an initial set of tests, then review and enhance them with your domain
                      knowledge. Add tests for business-critical paths and edge cases that the AI might have missed.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Section 3: Debugging */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
              <Bug className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold">Debugging AI-Generated Code</h2>
          </div>

          <p className="mb-6">
            Debugging AI-generated code requires a systematic approach. AI can help identify and fix bugs, but you need
            to provide clear context and error information.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Effective Debugging Strategies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 mt-0.5">
                      <span className="font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Understand the code before debugging</h4>
                      <p className="text-sm text-muted-foreground">
                        Ask the AI to explain how the code works before trying to fix it
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 mt-0.5">
                      <span className="font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Provide complete error messages</h4>
                      <p className="text-sm text-muted-foreground">
                        Include stack traces, error messages, and relevant logs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 mt-0.5">
                      <span className="font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Isolate the problem</h4>
                      <p className="text-sm text-muted-foreground">Create a minimal reproduction of the issue</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 mt-0.5">
                      <span className="font-medium">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Use debugging tools</h4>
                      <p className="text-sm text-muted-foreground">
                        Leverage breakpoints, logging, and debugging tools
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 mt-0.5">
                      <span className="font-medium">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Verify the fix</h4>
                      <p className="text-sm text-muted-foreground">Test thoroughly after applying AI-suggested fixes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Effective Debugging Prompts</h3>
                  <div className="space-y-4">
                    <div className="bg-muted p-3 rounded-md">
                      <h4 className="font-medium mb-1">❌ Ineffective Prompt:</h4>
                      <p className="text-sm text-muted-foreground italic">"My code doesn't work. Can you fix it?"</p>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <h4 className="font-medium mb-1">✅ Effective Prompt:</h4>
                      <p className="text-sm text-muted-foreground italic">
                        "I'm getting a TypeError when calling the processData function. Here's the error message:
                        'Cannot read property 'map' of undefined'. The error occurs on line 24 when processing the API
                        response. Here's the relevant code and the API response structure..."
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
              <Card>
                <CardHeader>
                  <CardTitle>Common Issues in AI-Generated Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Incorrect assumptions about data structures</li>
                    <li>Missing error handling</li>
                    <li>Incomplete implementation of requirements</li>
                    <li>Inefficient algorithms or patterns</li>
                    <li>Security vulnerabilities</li>
                    <li>Compatibility issues with existing code</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 4: Continuous Learning */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold">Continuous Learning</h2>
          </div>

          <p className="mb-6">
            AI tools are constantly evolving, and so should your skills. Stay updated on the latest AI capabilities and
            best practices to maximize your productivity.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Learning Strategies</CardTitle>
              <CardDescription>How to continuously improve your AI-assisted development skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="font-semibold">Learning from AI</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Ask AI to explain its code and reasoning</li>
                    <li>Request alternative approaches to the same problem</li>
                    <li>Use AI to learn new frameworks and technologies</li>
                    <li>Ask for best practices and patterns</li>
                  </ul>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Example Learning Prompt:</h4>
                    <div className="bg-card p-3 rounded border text-sm font-mono">
                      "Can you explain how this React hook works? What are the potential pitfalls and best practices
                      when using it? Can you show me alternative approaches to solve the same problem?"
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Building Your Knowledge</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Document AI-generated solutions and your modifications</li>
                    <li>Create a personal knowledge base of effective prompts</li>
                    <li>Join communities focused on AI-assisted development</li>
                    <li>Experiment with different AI tools and approaches</li>
                    <li>Share your learnings with others</li>
                  </ul>
                  <div className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-md">
                    <h4 className="font-medium mb-2 text-violet-700 dark:text-violet-300">Pro Tip:</h4>
                    <p className="text-sm">
                      Keep a "prompt journal" where you document effective prompts for different tasks. This will help
                      you build a personal library of prompts that work well for your specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="flex justify-between pt-6 border-t">
          <Link
            href="/guides/ai-development/workflow"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous: Development Workflow
          </Link>
          <GradientButton asChild>
            <Link href="/guides/ai-development" className="flex items-center whitespace-nowrap">
              Back to Guide Hub
              <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
            </Link>
          </GradientButton>
        </div>
      </div>
    </div>
  )
}
