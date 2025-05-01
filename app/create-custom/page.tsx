"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { GradientButton } from "@/components/ui/gradient-button"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CreateCustomPage() {
  const router = useRouter()
  const [projectDescription, setProjectDescription] = useState("")
  const [activeTab, setActiveTab] = useState("basic")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Store the project description in localStorage
    localStorage.setItem("customProjectDescription", projectDescription)
    localStorage.setItem("customProjectTemplate", activeTab)

    // Navigate to the AI tool selection page
    setTimeout(() => {
      router.push("/projects/custom/tools")
    }, 500)
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

  const exampleBasic =
    "I want to create a personal portfolio website with a home page, about me section, projects showcase, and contact form."

  const exampleDetailed = `Project: Personal Portfolio Website

Goal: Create a professional portfolio to showcase my work and skills to potential employers.

Pages needed:
- Home page with a hero section and brief introduction
- About me page with my background, skills, and experience
- Projects page with a grid of my work and case studies
- Contact page with a form and my professional information

Design preferences:
- Minimalist, clean design
- Dark mode support
- Responsive layout for mobile and desktop
- Subtle animations for a modern feel

Technical requirements:
- Next.js for the framework
- Contact form that sends emails
- Image optimization for project screenshots
- Fast loading times`

  const exampleRequirements = `# Project Requirements Document

## Project Overview
- Project: Personal Task Management App
- Problem: Difficulty tracking and prioritizing daily tasks
- Main job: Help users organize, prioritize, and complete tasks efficiently
- Solution: A responsive web app with task creation, organization, and progress tracking

## Tech Stack
- Frontend: Next.js with App Router
- UI Components: shadcn/ui with Tailwind CSS
- Data Storage: Initially mocked, later using local storage
- Authentication: Planned for Phase 3

## Features and Functionalities
1. Task Creation and Management (High Priority)
   - Create, edit, and delete tasks
   - Set due dates and priority levels
   - Add descriptions and notes

2. Task Organization (High Priority)
   - Categorize tasks with tags
   - Filter and sort tasks by various criteria
   - Group tasks into projects or lists

3. Progress Tracking (Medium Priority)
   - Mark tasks as complete
   - View completion statistics
   - Track time spent on tasks

4. User Preferences (Low Priority)
   - Customize theme and layout
   - Set notification preferences
   - Configure default views

## User Flow
- Persona: Busy professional managing multiple responsibilities
- Primary Journey:
  1. User logs in and views dashboard
  2. User creates new tasks or views existing ones
  3. User organizes tasks by priority and deadline
  4. User marks tasks as complete and tracks progress

## Data Model
- Task Entity:
  - id, title, description, dueDate, priority, status, tags, projectId
- Project Entity:
  - id, name, description, color
- Tag Entity:
  - id, name, color

## UI/UX Requirements
- Key Screens:
  1. Dashboard with task overview
  2. Task list view with filtering
  3. Task detail/edit view
  4. Settings/preferences page
- Design System: Clean, minimal interface with clear visual hierarchy
- Responsive Design: Fully functional on mobile, tablet, and desktop

## Development Phases
- Phase 1: Core UI with mocked data
  - Create dashboard layout and navigation
  - Implement task list and task card components
  - Add basic filtering and sorting
  - Use mock data for all interactions

- Phase 2: Local functionality
  - Implement task creation and editing
  - Add local storage for data persistence
  - Create filtering and sorting functionality
  - Implement basic statistics

- Phase 3: Enhanced features
  - Add user authentication
  - Implement projects and tags
  - Create progress tracking and statistics
  - Add user preferences and settings

## Future Enhancements
- Collaboration features for team task management
- Calendar integration
- Mobile app version
- AI-powered task prioritization suggestions`

  return (
    <div className="container max-w-4xl py-10">
      <Link href="/start" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to project selection
      </Link>

      <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Describe your custom project</h1>
          <p className="text-muted-foreground">
            Tell us what you want to build, and we'll help you create it with AI assistance.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="basic">Basic Description</TabsTrigger>
              <TabsTrigger value="detailed">Detailed Template</TabsTrigger>
              <TabsTrigger value="requirements">Requirements Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <motion.div variants={item}>
                <Card>
                  <CardHeader>
                    <CardTitle>Describe your project</CardTitle>
                    <CardDescription>Provide a brief description of what you want to build.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="I want to create a..."
                      className="min-h-[200px]"
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-amber-500" />
                      <CardTitle>Example</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exampleBasic}</p>
                    <Button variant="ghost" className="mt-2" onClick={() => setProjectDescription(exampleBasic)}>
                      Use this example
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="detailed" className="space-y-4">
              <motion.div variants={item}>
                <Card>
                  <CardHeader>
                    <CardTitle>Detailed project specification</CardTitle>
                    <CardDescription>
                      Use this structured template to provide more details about your project.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Project: [Name]

Goal: [What you want to achieve]

Pages needed:
- [List the main pages]

Design preferences:
- [Your design preferences]

Technical requirements:
- [Any specific technical needs]"
                      className="min-h-[300px] font-mono text-sm"
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-amber-500" />
                      <CardTitle>Example</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs text-muted-foreground whitespace-pre-wrap font-mono">{exampleDetailed}</pre>
                    <Button variant="ghost" className="mt-2" onClick={() => setProjectDescription(exampleDetailed)}>
                      Use this example
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="requirements" className="space-y-4">
              <motion.div variants={item}>
                <Card>
                  <CardHeader>
                    <CardTitle>Comprehensive Requirements Analysis</CardTitle>
                    <CardDescription>
                      Follow this structured template to create a detailed requirements document for your project.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="# Project Requirements Document

## Project Overview
- Project description and purpose
- Problem statement
- Main job to be done
- High-level solution

## Tech Stack
- Selected libraries and technologies
- Approach to implementation

## Features and Functionalities
- Core features list
- Detailed description of each feature
- Priority/importance to the core scope

## User Flow
- Key user personas
- Primary user journeys

## Data Model
- Entities and relationships
- Key attributes
- Initial data structure

## UI/UX Requirements
- Key screens/pages/components
- Design system approach
- Responsive design considerations

## Development Phases
- Phase 1: Core UI with mocked data
- Phase 2: [Next phase]
- Phase 3: [Next phase]

## Future Enhancements
- Features for later consideration
- Scaling considerations"
                      className="min-h-[400px] font-mono text-sm"
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-amber-500" />
                      <CardTitle>Why use a requirements document?</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A comprehensive requirements document helps AI tools better understand your project needs and
                      generate more accurate code. It breaks down your project into manageable phases and ensures all
                      aspects are considered.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>

          <motion.div variants={item} className="flex justify-end">
            <GradientButton
              type="submit"
              size="lg"
              className="px-8"
              disabled={!projectDescription.trim() || isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Continue to AI Tools"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </GradientButton>
          </motion.div>
        </form>
      </motion.div>
    </div>
  )
}
