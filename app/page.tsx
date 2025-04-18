"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MobileNav } from "@/components/mobile-nav"

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
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Resources
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Community
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Log in
            </Link>
          </div>
          <Button variant="outline" size="sm" onClick={() => router.push("/start")} className="hidden md:inline-flex">
            Sign up
          </Button>
          <MobileNav />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Build something real with AI
                </h1>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-500 to-violet-500 text-transparent bg-clip-text">
                  —no coding required.
                </h2>
              </div>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                When your ideas come to life, you feel empowered. Create real projects, not just follow tutorials, with
                AI-assisted development.
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
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How it works</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                From idea to implementation in three simple steps
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold">A sketch on paper</h3>
                <p className="text-muted-foreground text-center">
                  Start with your idea, no matter how rough. Even a simple sketch is enough to begin.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-violet-400">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold">A prompt in an AI tool</h3>
                <p className="text-muted-foreground text-center">
                  Use our guided prompts with your favorite AI tools to bring your idea to life.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-violet-500">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold">The resulting application</h3>
                <p className="text-muted-foreground text-center">
                  Get a working application you can use, share, and continue to build upon.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why choose our platform</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="flex flex-col p-6 space-y-4 shadow-sm">
                <h3 className="text-xl font-bold">Learn by building</h3>
                <p className="text-muted-foreground flex-1">
                  Create real projects, not just follow tutorials. Apply what you learn immediately.
                </p>
              </Card>
              <Card className="flex flex-col p-6 space-y-4 shadow-sm">
                <h3 className="text-xl font-bold">Weekend-ready</h3>
                <p className="text-muted-foreground flex-1">
                  Complete your first project in hours, not weeks. Perfect for busy schedules.
                </p>
              </Card>
              <Card className="flex flex-col p-6 space-y-4 shadow-sm">
                <h3 className="text-xl font-bold">Future-proof skills</h3>
                <p className="text-muted-foreground flex-1">
                  Master the AI-assisted development approach used by innovative teams.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to start your journey?
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Join thousands of builders who are creating amazing projects with AI assistance.
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
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-transparent bg-clip-text">
                AI Coding Starter Kit
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Build something real with AI—no coding required.</p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:underline">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Tools
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
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground md:order-1 md:ml-auto">
            © 2023 AI Coding Starter Kit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
