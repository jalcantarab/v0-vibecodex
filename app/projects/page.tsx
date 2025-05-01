"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GradientButton } from "@/components/ui/gradient-button"
import { ToolLogo } from "@/components/tool-logo"
import { toolsMockData } from "@/lib/mock-data"

// Mock project data
const projectsData = [
  {
    id: "landing-page",
    title: "Modern Landing Page",
    description: "A responsive landing page with hero section, features, and CTA.",
    image: "/modern-tech-landing.png",
    category: "quick-win",
    difficulty: "beginner",
    timeEstimate: "1-2 hours",
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    description: "Interactive dashboard with charts, stats, and data visualization.",
    image: "/modern-web-dashboard.png",
    category: "shareable",
    difficulty: "intermediate",
    timeEstimate: "3-4 hours",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "Track your expenses with categories, charts, and reports.",
    image: "/clean-expense-tracker.png",
    category: "prototype",
    difficulty: "intermediate",
    timeEstimate: "5-6 hours",
  },
  {
    id: "recipe-app",
    title: "Recipe Finder App",
    description: "Search, save, and organize your favorite recipes.",
    image: "/recipe-finder-app-interface.png",
    category: "mvp",
    difficulty: "advanced",
    timeEstimate: "8-10 hours",
  },
  {
    id: "kanban-board",
    title: "Kanban Task Board",
    description: "Drag-and-drop task management with boards and cards.",
    image: "/clean-kanban-interface.png",
    category: "mvp",
    difficulty: "advanced",
    timeEstimate: "10-12 hours",
  },
  {
    id: "cms-dashboard",
    title: "Content Management System",
    description: "Full-featured CMS with content editing and publishing.",
    image: "/modern-cms-dashboard.png",
    category: "mvp",
    difficulty: "advanced",
    timeEstimate: "15+ hours",
  },
]

export default function ProjectsPage() {
  const router = useRouter()
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [showToolSelection, setShowToolSelection] = useState(false)

  useEffect(() => {
    // Retrieve the selected goal from localStorage
    const goal = localStorage.getItem("selectedGoal")
    if (goal) {
      setSelectedGoal(goal)

      // Filter projects based on the selected goal
      if (goal !== "all") {
        setSelectedCategory(goal)
      }
    }
  }, [])

  useEffect(() => {
    // Filter projects based on the selected category
    if (selectedCategory === "all") {
      setFilteredProjects(projectsData)
    } else {
      setFilteredProjects(projectsData.filter((project) => project.category === selectedCategory))
    }
  }, [selectedCategory])

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId)
    setShowToolSelection(true)
  }

  const handleToolSelect = (toolId: string) => {
    if (selectedProject) {
      // Store the selected project and tool in localStorage
      localStorage.setItem("selectedProject", selectedProject)
      localStorage.setItem("selectedTool", toolId)

      // Navigate to the project page with the selected tool
      router.push(`/projects/${selectedProject}?tool=${toolId}`)
    }
  }

  // Direct navigation to tool with project
  const handleDirectStart = (projectId: string, toolId: string) => {
    // Store the selected project and tool in localStorage
    localStorage.setItem("selectedProject", projectId)
    localStorage.setItem("selectedTool", toolId)

    // Navigate directly to the project page with the selected tool
    router.push(`/projects/${projectId}?tool=${toolId}`)
  }

  // Animation variants
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
    <div className="container py-10">
      <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Choose a project template</h1>
          <p className="text-muted-foreground">
            Select a project template that matches your goals and time commitment.
          </p>
        </motion.div>

        <motion.div variants={item}>
          <Tabs defaultValue={selectedCategory || "all"} onValueChange={setSelectedCategory}>
            <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="quick-win">Quick Win</TabsTrigger>
              <TabsTrigger value="shareable">Shareable</TabsTrigger>
              <TabsTrigger value="prototype">Prototype</TabsTrigger>
              <TabsTrigger value="mvp">MVP</TabsTrigger>
              <TabsTrigger value="existing">Existing</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <ProjectGrid
                projects={filteredProjects}
                onSelect={handleProjectSelect}
                onDirectStart={handleDirectStart}
                selectedProject={selectedProject}
              />
            </TabsContent>

            <TabsContent value="quick-win" className="mt-0">
              <ProjectGrid
                projects={filteredProjects}
                onSelect={handleProjectSelect}
                onDirectStart={handleDirectStart}
                selectedProject={selectedProject}
              />
            </TabsContent>

            <TabsContent value="shareable" className="mt-0">
              <ProjectGrid
                projects={filteredProjects}
                onSelect={handleProjectSelect}
                onDirectStart={handleDirectStart}
                selectedProject={selectedProject}
              />
            </TabsContent>

            <TabsContent value="prototype" className="mt-0">
              <ProjectGrid
                projects={filteredProjects}
                onSelect={handleProjectSelect}
                onDirectStart={handleDirectStart}
                selectedProject={selectedProject}
              />
            </TabsContent>

            <TabsContent value="mvp" className="mt-0">
              <ProjectGrid
                projects={filteredProjects}
                onSelect={handleProjectSelect}
                onDirectStart={handleDirectStart}
                selectedProject={selectedProject}
              />
            </TabsContent>

            <TabsContent value="existing" className="mt-0">
              <ProjectGrid
                projects={filteredProjects}
                onSelect={handleProjectSelect}
                onDirectStart={handleDirectStart}
                selectedProject={selectedProject}
              />
            </TabsContent>
          </Tabs>
        </motion.div>

        {showToolSelection && (
          <motion.div variants={item} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Choose your AI tool</CardTitle>
                <CardDescription>Select the AI tool you want to use for this project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {toolsMockData.map((tool) => (
                    <Card
                      key={tool.id}
                      className="cursor-pointer hover:border-primary transition-all"
                      onClick={() => handleToolSelect(tool.id)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 flex items-center justify-center">
                            <ToolLogo toolId={tool.id} />
                          </div>
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                      </CardContent>
                      <CardFooter>
                        <GradientButton className="w-full" size="sm">
                          Get Started
                        </GradientButton>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

interface ProjectGridProps {
  projects: typeof projectsData
  onSelect: (id: string) => void
  onDirectStart: (projectId: string, toolId: string) => void
  selectedProject: string | null
}

function ProjectGrid({ projects, onSelect, onDirectStart, selectedProject }: ProjectGridProps) {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const handleExpand = (projectId: string) => {
    if (expandedProject === projectId) {
      setExpandedProject(null)
    } else {
      setExpandedProject(projectId)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <Card
            className={`overflow-hidden transition-all ${
              selectedProject === project.id ? "border-primary" : ""
            } ${expandedProject === project.id ? "lg:col-span-2 lg:row-span-2" : ""}`}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-all hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-300">
                  {project.difficulty}
                </span>
                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-900/20 dark:text-purple-300">
                  {project.timeEstimate}
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-2 w-full">
                <GradientButton variant="secondary" onClick={() => onSelect(project.id)} className="w-full">
                  Select
                </GradientButton>
                <GradientButton onClick={() => handleExpand(project.id)} className="w-full">
                  Quick Start
                </GradientButton>
              </div>

              {expandedProject === project.id && (
                <div className="grid grid-cols-2 gap-2 w-full mt-2">
                  {toolsMockData.slice(0, 4).map((tool) => (
                    <GradientButton
                      key={tool.id}
                      variant="glow"
                      onClick={() => onDirectStart(project.id, tool.id)}
                      className="w-full flex items-center justify-center gap-2"
                      size="sm"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <ToolLogo toolId={tool.id} />
                      </div>
                      {tool.name}
                    </GradientButton>
                  ))}
                </div>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
