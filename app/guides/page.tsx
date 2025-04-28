import type React from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, Github, Laptop } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function GuidesPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Guides & Resources</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
          Learn how to make the most of AI-assisted development with our comprehensive guides
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <GuideCard
          title="GitHub Basics"
          description="Learn how to save, manage, and share your AI-generated code with GitHub"
          icon={<Github className="h-5 w-5" />}
          href="/guides/github-basics"
          badges={["Beginner", "Version Control"]}
          estimatedTime="20 min"
        />

        <GuideCard
          title="Cursor Basics"
          description="Get started with the Cursor AI-powered code editor for more advanced development"
          icon={<Laptop className="h-5 w-5" />}
          href="/guides/cursor-basics"
          badges={["Beginner", "IDE"]}
          estimatedTime="15 min"
          comingSoon
        />

        <GuideCard
          title="AI Development Workflow"
          description="Learn the complete workflow for building projects with AI assistance"
          icon={<BookOpen className="h-5 w-5" />}
          href="/guides/ai-development/workflow"
          badges={["Intermediate", "Workflow"]}
          estimatedTime="25 min"
        />

        <GuideCard
          title="AI Development Planning"
          description="How to plan your projects for optimal AI assistance"
          icon={<BookOpen className="h-5 w-5" />}
          href="/guides/ai-development/planning"
          badges={["Intermediate", "Planning"]}
          estimatedTime="15 min"
        />

        <GuideCard
          title="AI Tools Comparison"
          description="Compare different AI coding tools and when to use each one"
          icon={<BookOpen className="h-5 w-5" />}
          href="/guides/ai-development/tools"
          badges={["All Levels", "Tools"]}
          estimatedTime="10 min"
        />

        <GuideCard
          title="AI Development Best Practices"
          description="Tips and tricks for getting the best results from AI coding tools"
          icon={<BookOpen className="h-5 w-5" />}
          href="/guides/ai-development/best-practices"
          badges={["All Levels", "Best Practices"]}
          estimatedTime="20 min"
        />
      </div>
    </div>
  )
}

interface GuideCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  badges: string[]
  estimatedTime: string
  comingSoon?: boolean
}

function GuideCard({ title, description, icon, href, badges, estimatedTime, comingSoon }: GuideCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-primary/10 p-2 text-primary">{icon}</div>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge key={badge} variant="secondary" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
        <CardTitle className="mt-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">Estimated reading time: {estimatedTime}</div>
      </CardContent>
      <CardFooter>
        {comingSoon ? (
          <Button variant="outline" disabled className="w-full">
            Coming Soon
          </Button>
        ) : (
          <Button asChild className="w-full">
            <Link href={href} className="flex items-center justify-center gap-1">
              Read Guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
