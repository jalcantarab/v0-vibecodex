"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Workflow, MessageSquare, FileCode, FolderTree, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { GradientButton } from "@/components/ui/gradient-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DevelopmentWorkflowPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

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
          className="bg-cyan-100/50 text-cyan-800 border-cyan-200 dark:bg-cyan-900/20 dark:text-cyan-300 dark:border-cyan-800"
        >
          Development Workflow
        </Badge>
      </div>

      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Development Workflow</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Learn effective AI interaction patterns, file organization, and context-providing strategies.
        </p>
      </div>

      <div className="grid gap-12">
        {/* Section 1: Structured AI Interaction */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
              <Workflow className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold">Structured AI Interaction</h2>
          </div>

          <p className="mb-6">
            Effective AI-assisted development requires a structured approach to problem decomposition and interaction.
          </p>

          <Tabs defaultValue="decomposition" className="mb-8">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="decomposition">Problem Decomposition</TabsTrigger>
              <TabsTrigger value="chat">Chat vs. Agent Tabs</TabsTrigger>
              <TabsTrigger value="focus">Focus Your AI Sessions</TabsTrigger>
            </TabsList>
            <TabsContent value="decomposition" className="space-y-4">
              <motion.div
                className="grid gap-6 md:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Problem Decomposition Principles</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400 mt-0.5">
                          <span className="font-medium">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Break projects into components</h4>
                          <p className="text-sm text-muted-foreground">
                            Divide your project into distinct, manageable components
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400 mt-0.5">
                          <span className="font-medium">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Single Responsibility Principle</h4>
                          <p className="text-sm text-muted-foreground">
                            Each component/function should do one thing well
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400 mt-0.5">
                          <span className="font-medium">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Create a hierarchy</h4>
                          <p className="text-sm text-muted-foreground">
                            Organize requirements from high-level goals to individual tasks
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <GlassCard className="h-full">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Example Decomposition</h3>
                      <div className="space-y-3">
                        <div className="bg-muted p-3 rounded-md">
                          <p className="font-semibold">Project Goal</p>
                          <p className="text-muted-foreground">Build a task management application</p>
                        </div>
                        <div className="bg-muted/70 p-3 rounded-md ml-4">
                          <p className="font-semibold">Feature: Task List</p>
                          <p className="text-muted-foreground">Display and manage tasks</p>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-md ml-8">
                          <p className="font-semibold">Component: Task Item</p>
                          <p className="text-muted-foreground">Individual task display and actions</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-md ml-12">
                          <p className="font-semibold">Function: Toggle Completion</p>
                          <p className="text-muted-foreground">Mark task as complete/incomplete</p>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </TabsContent>
            <TabsContent value="chat" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-cyan-600" />
                      Chat Tabs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Use for brainstorming and research</li>
                      <li>Explore different approaches</li>
                      <li>Ask conceptual questions</li>
                      <li>Discuss architectural decisions</li>
                      <li>Learn about new technologies</li>
                    </ul>
                    <div className="mt-4 p-3 bg-muted rounded-md">
                      <p className="text-sm italic">
                        "Can you explain how React Server Components work and when I should use them?"
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileCode className="h-5 w-5 mr-2 text-cyan-600" />
                      Agent Tabs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Use for writing actual code</li>
                      <li>Implement specific features</li>
                      <li>Debug existing code</li>
                      <li>Refactor and optimize</li>
                      <li>Generate tests</li>
                    </ul>
                    <div className="mt-4 p-3 bg-muted rounded-md">
                      <p className="text-sm italic">
                        "Create a React component that displays a paginated list of items from an API."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="focus" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Focus Your AI Sessions</CardTitle>
                  <CardDescription>Implement one step at a time instead of the entire project at once</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Effective Approach:</h4>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm">
                        "Here is my project plan. Let's start with Step 1.1: Create a login form component with email
                        and password fields."
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Ineffective Approach:</h4>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm">
                        "Build me a complete e-commerce site with user authentication, product catalog, shopping cart,
                        and payment processing."
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <h4 className="font-medium mb-2">Key Principles:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Test each step thoroughly before moving to the next</li>
                      <li>Fix bugs immediately - errors compound quickly</li>
                      <li>Never ask AI to implement multiple complex features at once</li>
                      <li>Use targeted prompts that focus on a single task or problem</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Section 2: Customize AI Behavior */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
              <Settings className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold">Customize AI Behavior</h2>
          </div>

          <p className="mb-6">
            Create and update custom instructions as your project progresses to get more consistent and relevant
            results.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Rules for AI</CardTitle>
                <CardDescription>Create custom instructions to guide AI behavior</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Example Rules:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>Always use TypeScript instead of JavaScript</li>
                      <li>
                        Follow the project's naming conventions (camelCase for variables, PascalCase for components)
                      </li>
                      <li>Use Tailwind CSS for styling</li>
                      <li>Prefer functional components with hooks over class components</li>
                      <li>Always include proper error handling</li>
                      <li>Write unit tests for all components</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Update these rules as your project evolves and your needs change. You can maintain a RulesForAI.md
                    file in your project that you reference in prompts.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tool-Specific Customization</CardTitle>
                <CardDescription>Optimize for your specific AI coding tool</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 dark:bg-violet-900/30 dark:text-violet-400 mt-0.5">
                      <span className="font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Cursor</h4>
                      <p className="text-sm text-muted-foreground">Use the <code>.cursor/rules/</code> directory with modular <code>.mdc</code> files to configure AI behavior (2025+ best practice).</p>
                      <p className="text-sm text-muted-foreground">See the <Link href="/guides/cursor-rules-templates" className="text-primary hover:underline">Cursor Rules & Prompt Templates Guide</Link> for details and examples.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 dark:bg-violet-900/30 dark:text-violet-400 mt-0.5">
                      <span className="font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">GitHub Copilot</h4>
                      <p className="text-sm text-muted-foreground">Use comments to guide code generation</p>
                      <p className="text-sm text-muted-foreground">Create a .github/copilot/settings.json file</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 dark:bg-violet-900/30 dark:text-violet-400 mt-0.5">
                      <span className="font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Claude</h4>
                      <p className="text-sm text-muted-foreground">Use custom instructions in the settings panel</p>
                      <p className="text-sm text-muted-foreground">Reference documentation links in your prompts</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: File Organization */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
              <FolderTree className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold">File Organization</h2>
          </div>

          <p className="mb-6">
            Use clear, descriptive file names that indicate each file's purpose. Many AI coding tools don't include all
            files in context, so good naming prevents code duplication and helps AI understand the codebase.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Effective File Organization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  <pre className="whitespace-pre-wrap">
                    {`project/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   └── card.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── sidebar.tsx
│   │   └── features/
│   │       ├── auth/
│   │       │   ├── login-form.tsx
│   │       │   └── signup-form.tsx
│   │       └── dashboard/
│   │           ├── stats-card.tsx
│   │           └── recent-activity.tsx
│   ├── hooks/
│   │   ├── use-auth.ts
│   │   └── use-form.ts
│   ├── utils/
│   │   ├── api.ts
│   │   └── validation.ts
│   └── pages/
│       ├── index.tsx
│       ├── login.tsx
│       └── dashboard.tsx
└── public/
    ├── images/
    └── fonts/`}
                  </pre>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">File Naming Best Practices</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Use descriptive, purpose-indicating names</li>
                    <li>Follow consistent naming conventions</li>
                    <li>Group related files in logical directories</li>
                    <li>Use kebab-case for file names (e.g., user-profile.tsx)</li>
                    <li>Use PascalCase for component files (e.g., UserProfile.tsx)</li>
                    <li>Use camelCase for utility files (e.g., formatDate.ts)</li>
                  </ul>
                </div>
              </GlassCard>
              <Card>
                <CardHeader>
                  <CardTitle>Benefits of Good File Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Helps AI understand the codebase structure</li>
                    <li>Prevents code duplication</li>
                    <li>Makes it easier to reference existing files</li>
                    <li>Improves collaboration with other developers</li>
                    <li>Facilitates maintenance and scaling</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
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
            <Link href="/guides/ai-development/tools" className="flex items-center whitespace-nowrap">
              Next: AI Tools Comparison
              <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
            </Link>
          </GradientButton>
        </div>
      </div>
    </div>
  )
}
