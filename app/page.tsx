"use client"

import Link from "next/link"
import { ArrowRight, Github, Star, Code2, Users, BookOpen, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MobileNav } from "@/components/mobile-nav"
import { Badge } from "@/components/ui/badge"
import { HomePageStructuredData } from "@/components/structured-data"

export default function Home() {
  const router = useRouter()

  const handleStartBuilding = () => {
    router.push("/start")
  }

  const handleExploreProjects = () => {
    router.push("/projects")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container flex h-16 items-center justify-between py-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-cyan-500 to-violet-500 text-transparent bg-clip-text">
            AI Coding Starter Kit
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/projects" className="text-sm font-medium hover:underline underline-offset-4">
            Projects
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
            How It Works
          </Link>
          <Link href="/contribute" className="text-sm font-medium hover:underline underline-offset-4">
            Contribute
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Community
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/yourusername/ai-coding-starter-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Link>
          <Button variant="outline" size="sm" onClick={() => router.push("/start")} className="hidden md:inline-flex">
            Get Started
          </Button>
          <MobileNav />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-cyan-50 dark:from-violet-950/20 dark:to-cyan-950/20 -z-10" />
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge
                variant="outline"
                className="px-3 py-1 border-violet-200 bg-violet-100/50 text-violet-800 dark:border-violet-800 dark:bg-violet-900/20 dark:text-violet-300"
              >
                Open Source Project
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Build something real with AI
                </h1>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-500 to-violet-500 text-transparent bg-clip-text">
                  —no coding required.
                </h2>
              </div>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A community-driven toolkit that helps you create actual projects with AI assistance, not just follow
                tutorials. Learn by building something you can use and share.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600"
                  onClick={handleStartBuilding}
                >
                  Start Building Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={handleExploreProjects}>
                  Explore Projects
                </Button>
              </div>
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  <span>1.2k stars</span>
                </div>
                <div className="flex items-center">
                  <Code2 className="h-4 w-4 mr-1" />
                  <span>MIT License</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>42 contributors</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-48 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-200/30 to-cyan-200/30 dark:from-violet-900/20 dark:to-cyan-900/20 rounded-full blur-3xl -z-10" />
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 relative">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How it works</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                From idea to implementation in three simple steps
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-200 to-transparent hidden md:block -z-10" />

              <div className="flex flex-col items-center space-y-4 p-6 relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold">A sketch on paper</h3>
                <p className="text-muted-foreground text-center">
                  Start with your idea, no matter how rough. Even a simple sketch or description is enough to begin.
                </p>
                <div className="mt-4 rounded-lg border bg-card p-3 shadow-sm">
                  <img src="/abstract-geometric-sketch.png" alt="Sketch example" className="rounded-md w-full h-auto" />
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-violet-400 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold">A prompt in an AI tool</h3>
                <p className="text-muted-foreground text-center">
                  Use our guided prompts with your favorite AI tools to transform your idea into code.
                </p>
                <div className="mt-4 rounded-lg border bg-card p-3 shadow-sm">
                  <img
                    src="/futuristic-prompt-interface.png"
                    alt="AI prompt example"
                    className="rounded-md w-full h-auto"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-violet-500 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold">The resulting application</h3>
                <p className="text-muted-foreground text-center">
                  Get a working application you can use, share, and continue to build upon.
                </p>
                <div className="mt-4 rounded-lg border bg-card p-3 shadow-sm">
                  <img src="/modern-web-dashboard.png" alt="Application example" className="rounded-md w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-br from-violet-50 to-cyan-50 dark:from-violet-950/20 dark:to-cyan-950/20">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why this project exists</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We believe everyone should be able to create with AI, regardless of their coding background
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="flex flex-col p-6 space-y-4 shadow-sm bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
                <div className="h-12 w-12 rounded-lg bg-violet-100 flex items-center justify-center dark:bg-violet-900/30">
                  <BookOpen className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-xl font-bold">Learn by building</h3>
                <p className="text-muted-foreground flex-1">
                  Create real projects, not just follow tutorials. Apply what you learn immediately and see tangible
                  results.
                </p>
              </Card>
              <Card className="flex flex-col p-6 space-y-4 shadow-sm bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
                <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center dark:bg-cyan-900/30">
                  <Sparkles className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold">Weekend-ready</h3>
                <p className="text-muted-foreground flex-1">
                  Complete your first project in hours, not weeks. Perfect for busy schedules and quick experimentation.
                </p>
              </Card>
              <Card className="flex flex-col p-6 space-y-4 shadow-sm bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
                <div className="h-12 w-12 rounded-lg bg-violet-100 flex items-center justify-center dark:bg-violet-900/30">
                  <Users className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-xl font-bold">Community-driven</h3>
                <p className="text-muted-foreground flex-1">
                  Join a supportive community of builders. Share your projects, get feedback, and learn from others.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-violet-100 px-3 py-1 text-sm text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 mb-2">
                  Open Source
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join our community of builders
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  This project is built by the community, for the community. Contribute, share your projects, and help
                  others learn.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600"
                    onClick={handleStartBuilding}
                  >
                    Start Building Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link
                      href="https://github.com/yourusername/ai-coding-starter-kit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      <span>Star on GitHub</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-lg overflow-hidden border shadow-lg">
                  <img
                    src="/ai-app-builder.png"
                    alt="Person building an application with AI tools"
                    className="aspect-video object-cover"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-br from-violet-50 to-cyan-50 dark:from-violet-950/20 dark:to-cyan-950/20">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                See what others have built with the AI Coding Starter Kit
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
                <div className="aspect-video relative">
                  <img
                    src="/clean-kanban-interface.png"
                    alt="Kanban Board Project"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-violet-600">Popular</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Team Collaboration Kanban Board</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    A drag-and-drop kanban board for team task management
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/projects/kanban-board">
                      View Project
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
                <div className="aspect-video relative">
                  <img
                    src="/modern-personal-dashboard.png"
                    alt="Personal Dashboard Project"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-cyan-600">Beginner</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Personal Habit Tracker</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    A customizable dashboard to track daily habits and goals
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/projects/personal-dashboard">
                      View Project
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
                <div className="aspect-video relative">
                  <img
                    src="/modern-tech-landing.png"
                    alt="Landing Page Project"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-green-600">Quick Win</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Product Landing Page</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    A professional landing page with email signup functionality
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/projects/product-landing">
                      View Project
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white dark:bg-slate-950">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-transparent bg-clip-text">
                AI Coding Starter Kit
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              An open-source project to help everyone build with AI—no coding required.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/yourusername/ai-coding-starter-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://discord.gg/yourinvite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 9a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h4" />
                  <circle cx="15" cy="12" r="1" />
                  <circle cx="18" cy="10" r="1" />
                  <circle cx="18" cy="14" r="1" />
                  <circle cx="21" cy="12" r="1" />
                </svg>
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Project</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:underline">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contribute" className="text-muted-foreground hover:underline">
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Community</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Contributors
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    License
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t">
          <p className="text-xs text-muted-foreground md:order-1 md:ml-auto">
            © 2023 AI Coding Starter Kit. Released under the MIT License.
          </p>
        </div>
      </footer>
      <HomePageStructuredData />
    </div>
  )
}
