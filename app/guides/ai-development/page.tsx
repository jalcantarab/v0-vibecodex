"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Code, Lightbulb, Settings, Workflow } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { GradientButton } from "@/components/ui/gradient-button"
import { AnimatedBackground } from "@/components/animated-background"

export default function AIDevelopmentGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden relative">
        <AnimatedBackground />

        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                AI-Assisted Development Guide
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Learn how to effectively leverage AI tools to accelerate your development workflow and build better
                projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <GradientButton asChild size="lg">
                <Link href="#guide-sections" className="inline-flex items-center whitespace-nowrap">
                  Explore the Guide
                  <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                </Link>
              </GradientButton>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">Browse AI Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Guide sections */}
      <section id="guide-sections" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Guide Sections</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Explore our comprehensive guide to AI-assisted development, from planning to best practices.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guideCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col" hoverEffect="lift">
                  <div className="p-6 flex flex-col h-full">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{card.description}</p>
                    <Button asChild variant="outline" className="mt-auto">
                      <Link href={card.href} className="flex items-center">
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI-Assisted Development */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-violet-50 to-cyan-50 dark:from-violet-950/20 dark:to-cyan-950/20">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-violet-100 px-3 py-1 text-sm text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 mb-2">
                Why AI-Assisted Development?
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Transform Your Development Process</h2>
              <p className="text-muted-foreground md:text-lg">
                AI-assisted development is revolutionizing how we build software. By leveraging AI tools, developers
                can:
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
                  <span>Accelerate development speed by 2-5x</span>
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
                  <span>Reduce debugging time with AI-assisted code analysis</span>
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
                  <span>Learn new frameworks and technologies faster</span>
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
                  <span>Focus on creative problem-solving rather than boilerplate code</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-lg overflow-hidden border shadow-lg">
                <img
                  src="/abstract-v0.png"
                  alt="AI-assisted development visualization"
                  className="aspect-video object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Dive into our comprehensive guide sections to learn how to effectively use AI in your development
                workflow.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <GradientButton asChild size="lg">
                <Link href="/guides/ai-development/planning" className="inline-flex items-center whitespace-nowrap">
                  Start with Planning
                  <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                </Link>
              </GradientButton>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">Browse Example Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const guideCards = [
  {
    title: "Planning with AI",
    description:
      "Learn how to effectively plan your projects with AI assistance, from initial concept to architecture design.",
    icon: <Lightbulb className="h-6 w-6" />,
    href: "/guides/ai-development/planning",
  },
  {
    title: "AI Tools Comparison",
    description:
      "Compare different AI coding tools and learn which ones are best suited for different types of projects.",
    icon: <Settings className="h-6 w-6" />,
    href: "/guides/ai-development/tools",
  },
  {
    title: "Development Workflow",
    description: "Discover how to integrate AI tools into your development workflow for maximum productivity.",
    icon: <Workflow className="h-6 w-6" />,
    href: "/guides/ai-development/workflow",
  },
  {
    title: "Best Practices",
    description:
      "Learn the best practices for AI-assisted development, including code quality, testing, and maintenance.",
    icon: <BookOpen className="h-6 w-6" />,
    href: "/guides/ai-development/best-practices",
  },
  {
    title: "Prompt Engineering",
    description: "Master the art of writing effective prompts to get the best results from AI coding assistants.",
    icon: <Code className="h-6 w-6" />,
    href: "/guides/ai-development/workflow#prompt-engineering",
  },
]
