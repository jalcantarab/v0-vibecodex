"use client"

import Link from "next/link"
import { ArrowLeft, Check, Download, Share2, Trophy } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projectsMockData } from "@/lib/mock-data"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"

export default function ProjectCompletePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const project = projectsMockData.find((p) => p.id === params.id) || projectsMockData[0]

  // Animation variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/projects/${params.id}`}
          className="inline-flex items-center text-sm font-medium mb-6 hover:underline"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Project Overview
        </Link>

        <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                <Trophy className="h-12 w-12 text-primary" />
              </div>
              <motion.div
                className="absolute -top-2 -right-2 h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <Check className="h-5 w-5" />
              </motion.div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Congratulations!</h1>
            <p className="text-xl text-muted-foreground">You've successfully completed the {project.title} project</p>
          </motion.div>

          <motion.div variants={item}>
            <GlassCard variant="light" className="overflow-hidden">
              <CardHeader>
                <CardTitle>Project Summary</CardTitle>
                <CardDescription>Here's what you've accomplished with this project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Completed Phases:</h3>
                  <ul className="space-y-2">
                    {project.phases.map((phase, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2 mt-0.5">
                          <Check className="h-3 w-3" />
                        </div>
                        <span>
                          <span className="font-medium">Phase {index + 1}:</span> {phase.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Skills Gained:</h3>
                  <ul className="space-y-2">
                    {project.learningPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2 mt-0.5">
                          <Check className="h-3 w-3" />
                        </div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="grid gap-4 md:grid-cols-2">
            <Card className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/20 dark:to-indigo-950/20 border-violet-100 dark:border-violet-800/30">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-violet-500" />
                  Achievement Unlocked
                </CardTitle>
                <CardDescription>You've joined the ranks of successful builders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-violet-600 dark:text-violet-400">
                      <AnimatedCounter from={0} to={project.completionCount + 1} duration={1.5} />
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">Total Completions</div>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Your Achievement
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-100 dark:border-cyan-800/30">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="h-5 w-5 mr-2 text-cyan-500" />
                  Project Resources
                </CardTitle>
                <CardDescription>Save a copy of your project files</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">
                      <AnimatedCounter from={0} to={project.phases.length} duration={1} />
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">Files Created</div>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Project Files
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center justify-center space-y-4 pt-4">
            <h2 className="text-xl font-bold">What's Next?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <GradientButton onClick={() => router.push("/projects")}>Start a New Project</GradientButton>
              <Button variant="outline" onClick={() => router.push("/")}>
                Return to Dashboard
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
