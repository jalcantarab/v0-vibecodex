"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Clock, ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AnimatedTabs } from "@/components/ui/animated-tabs"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { projectsMockData } from "@/lib/mock-data"

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "data", label: "Data Projects" },
  ]

  // Filter projects based on active tab and search query
  const filteredProjects = projectsMockData
    .filter((project) => activeTab === "all" || project.id.includes(activeTab))
    .filter(
      (project) =>
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )

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
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Explore Projects</h1>
        <p className="text-muted-foreground">Find the perfect project to build with AI assistance</p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
        <AnimatedTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} variant="pills" className="md:w-auto" />

        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {mounted && (
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <GlassCard className="flex flex-col h-full overflow-hidden" variant="light" hoverEffect="lift">
                <div className="relative aspect-video">
                  <img
                    src={project.previewImage || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {project.difficulty}
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="space-y-1.5 mb-3">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Clock className="mr-1 h-4 w-4" />
                    {project.timeEstimate}
                    <div className="ml-auto flex items-center">
                      <Star className="h-4 w-4 text-amber-500 mr-1" />
                      <AnimatedCounter to={project.completionCount} formatter={(value) => `${Math.round(value)}+`} />
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t">
                    <Button asChild className="w-full group">
                      <Link href={`/projects/${project.id}`}>
                        Select Project
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      )}

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No projects found</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
          <Button
            onClick={() => {
              setActiveTab("all")
              setSearchQuery("")
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  )
}
