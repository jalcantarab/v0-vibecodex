"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projectsMockData } from "@/lib/mock-data"

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects =
    activeTab === "all" ? projectsMockData : projectsMockData.filter((project) => project.id.includes(activeTab))

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/start" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Goals
        </Link>

        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Choose your project</h1>
          <p className="text-muted-foreground">Select a project that matches your interests and timeline.</p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="web">Web Apps</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
            <TabsTrigger value="data">Data Projects</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={project.previewImage || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  <Badge variant="outline" className="bg-primary/10">
                    {project.difficulty}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Clock className="mr-1 h-4 w-4" />
                  {project.timeEstimate}
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">You'll learn:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.learningPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/projects/${project.id}`}>
                    Select Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
