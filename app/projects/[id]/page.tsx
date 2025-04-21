"use client"

import { Badge } from "@/components/ui/badge"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Check, ChevronRight, Clock, Award, Sparkles } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import { GlassCard } from "@/components/ui/glass-card"
import { GradientBorder } from "@/components/ui/gradient-border"
import { FeatureCard } from "@/components/ui/feature-card"
import { projectsMockData, toolsMockData } from "@/lib/mock-data"
import { ToolLogo } from "@/components/tool-logo"

export default function ProjectOverviewPage({ params }: { params: { id: string } }) {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // In a real app, we would fetch this data from an API
  const project = projectsMockData.find((p) => p.id === params.id) || projectsMockData[0]

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
      <Link
        href="/projects"
        className="inline-flex items-center text-sm font-medium mb-6 hover:text-primary transition-colors"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Projects
      </Link>

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <GradientBorder rounded="full" borderWidth="thin" className="overflow-hidden">
                <Badge variant="outline" className="bg-background border-0 px-3 py-1">
                  {project.difficulty}
                </Badge>
              </GradientBorder>

              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <Clock className="mr-1.5 h-3.5 w-3.5" />
                {project.timeEstimate}
              </Badge>

              <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-200 dark:text-amber-400">
                <Award className="mr-1.5 h-3.5 w-3.5" />
                Popular
              </Badge>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-3">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          {mounted && (
            <motion.div
              className="relative overflow-hidden rounded-xl border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={project.previewImage || "/placeholder.svg"}
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-medium mb-2">Preview of final project</p>
                  <p className="text-sm text-white/80">What you'll build with AI assistance</p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Project Roadmap</h2>

            {mounted && (
              <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="show">
                {project.phases.map((phase, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <GlassCard className="flex items-start p-4">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full 
                        ${
                          index === 0
                            ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                            : "border border-muted-foreground/30 text-muted-foreground"
                        } mr-4`}
                      >
                        {index === 0 ? <Check className="h-4 w-4" /> : <span>{index + 1}</span>}
                      </div>
                      <div>
                        <h3 className="font-medium">{phase.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{phase.description}</p>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">What You'll Learn</h2>

            {mounted && (
              <motion.div
                className="grid gap-4 sm:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {project.learningPoints.map((point, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <FeatureCard
                      icon={<Sparkles className="h-5 w-5" />}
                      title={`Skill ${index + 1}`}
                      description={point}
                      variant="glass"
                      iconBackground="light"
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <GlassCard className="overflow-hidden">
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Choose your tool</h2>
                <p className="text-sm text-muted-foreground">Select the AI tool you want to use for this project</p>
              </div>

              {mounted && (
                <motion.div className="space-y-3" variants={containerVariants} initial="hidden" animate="show">
                  {toolsMockData.map((tool) => (
                    <motion.div key={tool.id} variants={itemVariants}>
                      <GradientBorder
                        className="w-full"
                        borderWidth="thin"
                        rounded="lg"
                        fromColor="from-violet-400"
                        toColor="to-indigo-500"
                      >
                        <div className="bg-card p-4 rounded-lg">
                          <div className="flex items-start justify-between mb-3">
                            <div className="space-y-1">
                              <div className="flex items-center">
                                <ToolLogo toolId={tool.id} size="sm" className="mr-2" />
                                <h3 className="font-medium">{tool.name}</h3>
                              </div>
                              <p className="text-xs text-muted-foreground">{tool.description}</p>
                            </div>
                          </div>
                          <GradientButton
                            asChild
                            size="sm"
                            className="w-full"
                            variant={tool.id === "v0" ? "primary" : "secondary"}
                          >
                            <Link
                              href={`/projects/${params.id}/${tool.id}`}
                              className="flex items-center justify-center"
                            >
                              Get Started
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                          </GradientButton>
                        </div>
                      </GradientBorder>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </GlassCard>

          <GlassCard className="overflow-hidden">
            <div className="p-6">{/* Add content here, or remove this GlassCard */}</div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
