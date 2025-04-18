"use client"

import Link from "next/link"
import { ArrowLeft, Check, Download, Share2, Trophy } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projectsMockData } from "@/lib/mock-data"

export default function ProjectCompletePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const project = projectsMockData.find((p) => p.id === params.id) || projectsMockData[0]

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

        <div className="space-y-8">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
              <Trophy className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Congratulations!</h1>
            <p className="text-xl text-muted-foreground">You've successfully completed the {project.title} project</p>
          </div>

          <Card>
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
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
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
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Share Your Achievement</CardTitle>
                <CardDescription>Let others know about your accomplishment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share on Social Media
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Download Your Project</CardTitle>
                <CardDescription>Save a copy of your project files</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Project Files
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 pt-4">
            <h2 className="text-xl font-bold">What's Next?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={() => router.push("/projects")}>Start a New Project</Button>
              <Button variant="outline" onClick={() => router.push("/")}>
                Return to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
