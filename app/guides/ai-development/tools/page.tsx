"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { GradientButton } from "@/components/ui/gradient-button"
import { ToolLogo } from "@/components/tool-logo"

export default function AIToolsComparisonPage() {
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
          className="bg-blue-100/50 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
        >
          AI Tools Comparison
        </Badge>
      </div>

      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Tools Comparison</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Compare different AI coding tools and learn which ones are best suited for different types of projects.
        </p>
      </div>

      <div className="grid gap-12">
        {/* Section 1: Tool Categories */}
        <section>
          <h2 className="text-2xl font-bold mb-6">AI Tool Categories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Code Completion Tools</CardTitle>
                <CardDescription>Suggest code as you type</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>GitHub Copilot</li>
                  <li>Tabnine</li>
                  <li>Amazon CodeWhisperer</li>
                  <li>Codeium</li>
                </ul>
                <div className="mt-4 p-3 bg-muted rounded-md">
                  <p className="text-sm">
                    <strong>Best for:</strong> Speeding up routine coding tasks, learning new APIs, and reducing
                    boilerplate code.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Conversational AI Coding Assistants</CardTitle>
                <CardDescription>Chat-based coding assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>ChatGPT (OpenAI)</li>
                  <li>Claude (Anthropic)</li>
                  <li>Bard / Gemini (Google)</li>
                  <li>Phind</li>
                </ul>
                <div className="mt-4 p-3 bg-muted rounded-md">
                  <p className="text-sm">
                    <strong>Best for:</strong> Explaining concepts, debugging, brainstorming solutions, and learning new
                    technologies.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI-Enhanced IDEs & Editors</CardTitle>
                <CardDescription>Integrated development environments with AI</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cursor</li>
                  <li>Visual Studio IntelliCode</li>
                  <li>JetBrains AI Assistant</li>
                  <li>Replit (with Ghostwriter)</li>
                </ul>
                <div className="mt-4 p-3 bg-muted rounded-md">
                  <p className="text-sm">
                    <strong>Best for:</strong> End-to-end development workflows, refactoring, and deep code
                    understanding.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Detailed Tool Comparison */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Detailed Tool Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="p-3 text-left">Tool</th>
                  <th className="p-3 text-left">Strengths</th>
                  <th className="p-3 text-left">Limitations</th>
                  <th className="p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <ToolLogo toolId="v0" size="sm" />
                      <span className="font-medium">v0 by Vercel</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Excellent UI component generation</li>
                      <li>Specialized for React and Next.js</li>
                      <li>High-quality responsive designs</li>
                      <li>Strong accessibility features</li>
                    </ul>
                  </td>
                  <td className="p-3">
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Limited to frontend development</li>
                      <li>Less suitable for complex logic</li>
                      <li>Requires clear design direction</li>
                    </ul>
                  </td>
                  <td className="p-3">
                    <p className="text-sm">UI components, landing pages, dashboards, and interactive interfaces</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <ToolLogo toolId="bolt" size="sm" />
                      <span className="font-medium">Bolt</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Fast prototyping</li>
                      <li>Simple, intuitive interface</li>
                      <li>Good for quick iterations</li>
                      <li>Minimal setup required</li>
                    </ul>
                  </td>
                  <td className="p-3">
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Less customization options</li>
                      <li>Limited for complex applications</li>
                      <li>Newer with smaller community</li>
                    </ul>
                  </td>
                  <td className="p-3">
                    <p className="text-sm">Rapid prototyping, MVPs, and simple web applications</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <ToolLogo toolId="replit" size="sm" />
                      <span className="font-medium">Replit</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Full development environment</li>
                      <li>Integrated hosting</li>
                      <li>Collaboration features</li>
                      <li>Multi-language support</li>
                    </ul>
                  </td>
                  <td className="p-3">
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Performance limitations</li>
                      <li>Less suitable for large projects</li>
                      <li>Limited offline capabilities</li>
                    </ul>
                  </td>
                  <td className="p-3">
                    <p className="text-sm">Full-stack applications, learning projects, and collaborative development</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <ToolLogo toolId="lovable" size="sm" />
                      <span className="font-medium">Lovable</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Beginner-friendly interface</li>
                      <li>Focus on user experience</li>
                      <li>Simplified workflow</li>
                      <li>Good documentation</li>
                    </ul>
                  </td>
                  <td className="p-3">
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Less advanced features</li>
                      <li>Limited for complex projects</li>
                      <li>Smaller ecosystem</li>
                    </ul>
                  </td>
                  <td className="p-3">
                    <p className="text-sm">Beginners, simple applications, and learning web development</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Feature Comparison */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-center">v0</th>
                  <th className="p-3 text-center">Bolt</th>
                  <th className="p-3 text-center">Replit</th>
                  <th className="p-3 text-center">Lovable</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-medium">UI Component Generation</td>
                  <td className="p-3 text-center text-green-600">
                    <Check className="h-5 w-5 mx-auto" />
                  </td>
                  <td className="p-3 text-center text-green-600">
                    <Check className="h-5 w-5 mx-auto" />
                  </td>
                  <td className="p-3 text-center text-green-600">
                    <Check className="h-5 w-5 mx-auto" />
                  </td>
                  <td className="p-3 text-center text-green-600">
                    <Check className="h-5 w-5 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Backend Logic</td>
                  <td className="p-3 text-center text-amber-600">
                    <span className="text-xs">Limited</span>
                  </td>
                  <td className="p-3 text-center text-amber-600">
                    <span className="text-xs">Limited</span>
                  </td>
                  <td className="p-3 text-center text-green-600">
                    <Check className="h-5 w-5 mx-auto" />
                  </td>
                  <td className="p-3 text-center text-amber-600">
                    <span className="text-xs">Limited</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Database Integration</td>
                  <td className="p-3 text-center text-amber-600">
                    <span className="text-xs">Basic</span>
                  </td>
                  <td className="p-3 text-center text-amber-600">
                    <span className="text-xs">Basic</span>
                  </td>
                  <td className="p-3 text-center text-green-600">
                    <Check className="h-5 w-5 mx-auto" />
                  </td>
                  <td className="p-3 text-center text-red-600">
                    <X className="h-5 w-5 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Responsive Design</td>
                  <td className="p-3 text-center text-green-600">
                    <Check className="h-5 w-5 mx-auto" />
                  </td>
                  <td className="p-3 text-center text-green-600">
                    <Check className="h-5 w-5 mx-auto" />
                  </td>
                  <td className="p-3 text-center text-amber-600">
                    <span className="text-xs">Varies</span>
                  </td>
                  <td className="p-3 text-center text-green-600">
                    <Check className="h-5 w-5 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Accessibility Features</td>
                  <td className="p-3 text-center text-green-600">
                    <Check className="h-5 w-5 mx-auto" />
                  </td>
                  <td className="p-3 text-center text-amber-600">
                    <span className="text-xs">Basic</span>
                  </td>
                  <td className="p-3 text-center text-amber-600">
                    <span className="text-xs">Varies</span>
                  </td>
                  <td className="p-3 text-center text-amber-600">
                    <span className="text-xs">Basic</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Deployment Options</td>
                  <td className="p-3 text-center text-amber-600">
                    <span className="text-xs">Limited</span>
                  </td>
                  <td className="p-3 text-center text-amber-600">
                    <span className="text-xs">Limited</span>
                  </td>
                  <td className="p-3 text-center text-green-600">
                    <Check className="h-5 w-5 mx-auto" />
                  </td>
                  <td className="p-3 text-center text-red-600">
                    <X className="h-5 w-5 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Choosing the Right Tool */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Choosing the Right Tool</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Project Type Considerations</h3>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Frontend-Heavy Projects</h4>
                    <p className="text-sm">
                      <strong>Recommended:</strong> v0, Lovable
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      These tools excel at generating UI components, responsive layouts, and interactive interfaces.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Full-Stack Applications</h4>
                    <p className="text-sm">
                      <strong>Recommended:</strong> Replit, Bolt + Backend Service
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      For applications requiring both frontend and backend logic, choose tools with comprehensive
                      capabilities.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Learning Projects</h4>
                    <p className="text-sm">
                      <strong>Recommended:</strong> Lovable, Replit
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      These tools provide a more guided experience with better documentation for beginners.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
            <Card>
              <CardHeader>
                <CardTitle>Decision Framework</CardTitle>
                <CardDescription>Questions to ask when choosing an AI tool</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal pl-5 space-y-3">
                  <li>
                    <strong>What is the primary focus of your project?</strong>
                    <p className="text-sm text-muted-foreground mt-1">UI/UX, backend logic, data processing, etc.</p>
                  </li>
                  <li>
                    <strong>What is your experience level?</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Beginners might prefer more guided tools like Lovable.
                    </p>
                  </li>
                  <li>
                    <strong>What is your deployment strategy?</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Some tools offer integrated deployment, while others require external services.
                    </p>
                  </li>
                  <li>
                    <strong>Do you need collaboration features?</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Tools like Replit offer better collaboration capabilities.
                    </p>
                  </li>
                  <li>
                    <strong>What is your timeline and budget?</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Some tools offer faster development but might have limitations or costs.
                    </p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="flex justify-between pt-6 border-t">
          <Link
            href="/guides/ai-development/planning"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous: Planning with AI
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
