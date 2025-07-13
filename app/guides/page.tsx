"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code, FileText, Lightbulb, Sparkles, ArrowRightLeft } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { GradientButton } from "@/components/ui/gradient-button"
import { AnimatedBackground } from "@/components/animated-background"

export default function GuidesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden relative">
        <AnimatedBackground />

        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Learning Guides
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive guides to help you master AI-assisted development and build better projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide categories */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Guide Categories</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Explore our collection of guides covering various aspects of AI-assisted development.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <GlassCard className="h-full flex flex-col" hoverEffect="lift">
                <Link href="/guides/ai-development" className="p-6 flex flex-col h-full">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">AI Development Guide</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Learn how to effectively leverage AI tools to accelerate your development workflow and build better
                    projects.
                  </p>
                  <div className="flex items-center text-primary mt-auto whitespace-nowrap">
                    <span>Explore guide</span>
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </div>
                </Link>
              </GlassCard>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <GlassCard className="h-full flex flex-col" hoverEffect="lift">
                <Link href="/guides/requirements-template" className="p-6 flex flex-col h-full">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Requirements Template</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    A structured approach to defining project requirements before implementation for better AI results.
                  </p>
                  <div className="flex items-center text-primary mt-auto whitespace-nowrap">
                    <span>View template</span>
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </div>
                </Link>
              </GlassCard>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <GlassCard className="h-full flex flex-col" hoverEffect="lift">
                <Link href="/guides/from-v0-to-cursor" className="p-6 flex flex-col h-full">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <ArrowRightLeft className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">From v0 to Cursor</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Learn how to transition your AI-generated prototype to a professional local development environment
                    using GitHub.
                  </p>
                  <div className="flex items-center text-primary mt-auto whitespace-nowrap">
                    <span>View Workflow</span>
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </div>
                </Link>
              </GlassCard>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <GlassCard className="h-full flex flex-col" hoverEffect="lift">
                <Link href="/guides/github-basics" className="p-6 flex flex-col h-full">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">GitHub Basics</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Learn how to save, manage, and share your AI-generated code with GitHub, the connecting tissue
                    between v0 and Cursor.
                  </p>
                  <div className="flex items-center text-primary mt-auto whitespace-nowrap">
                    <span>Explore guide</span>
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </div>
                </Link>
              </GlassCard>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <GlassCard className="h-full flex flex-col" hoverEffect="lift">
                <div className="p-6 flex flex-col h-full">
                  <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400 mb-4">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cursor Basics</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Get started with the Cursor AI-powered code editor for more advanced development when your project
                    grows beyond 40-50 files.
                  </p>
                  <div className="flex items-center text-muted-foreground mt-auto">
                    <span>Coming soon</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <GlassCard className="h-full flex flex-col" hoverEffect="lift">
                <div className="p-6 flex flex-col h-full">
                  <div className="h-12 w-12 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 dark:bg-violet-900/30 dark:text-violet-400 mb-4">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tool Deep Dives</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    In-depth guides on getting the most out of specific AI tools, with a focus on Cursor and other
                    popular development assistants.
                  </p>
                  <div className="flex items-center text-muted-foreground mt-auto">
                    <span>Coming soon</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured guide */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-violet-50 to-cyan-50 dark:from-violet-950/20 dark:to-cyan-950/20">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-violet-100 px-3 py-1 text-sm text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 mb-2">
                Featured Guide
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">AI Development Guide</h2>
              <p className="text-muted-foreground md:text-lg">
                Our comprehensive guide to AI-assisted development covers everything from planning to best practices.
                Learn how to effectively use AI tools to accelerate your development workflow.
              </p>
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
                  <span>Planning with AI</span>
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
                  <span>AI Tools Comparison</span>
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
                  <span>Development Workflow</span>
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
                  <span>Best Practices</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
                <GradientButton asChild>
                  <Link href="/guides/ai-development" className="flex items-center whitespace-nowrap">
                    Explore Guide
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Link>
                </GradientButton>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-lg overflow-hidden border shadow-lg">
                <img
                  src="/abstract-v0.png"
                  alt="AI Development Guide"
                  className="aspect-video object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
