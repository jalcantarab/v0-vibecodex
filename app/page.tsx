"use client"

import Link from "next/link"
import { ArrowRight, Github, Star, Code2, Users, BookOpen, Sparkles, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HomePageStructuredData } from "@/components/structured-data"
import { AnimatedBackground } from "@/components/animated-background"
import { AnimatedText } from "@/components/animated-text"
import { GradientButton } from "@/components/ui/gradient-button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { SocialShare } from "@/components/social-share"

export default function Home() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch with animation
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleStartBuilding = () => {
    router.push("/start")
  }

  const handleExploreProjects = () => {
    router.push("/projects")
  }

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden relative">
        {/* Animated background */}
        <AnimatedBackground />

        {/* Hero content */}
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="px-3 py-1 border-violet-200 bg-violet-100/50 text-violet-800 dark:border-violet-800 dark:bg-violet-900/20 dark:text-violet-300"
              >
                <Zap className="h-3.5 w-3.5 mr-1" />
                Open Source Project
              </Badge>
            </div>

            {/* Main heading with animated reveal */}
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <AnimatedText text="Transform Ideas" className="block" />
                <span className="block mt-2">
                  <AnimatedText text="Into " delay={200} />
                  <AnimatedText
                    text="Reality"
                    delay={400}
                    className="bg-gradient-to-r from-cyan-500 to-violet-500 text-transparent bg-clip-text"
                  />
                </span>
              </h1>

              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500 mr-4"></div>
                <AnimatedText text="No Coding Skills Required" delay={600} className="text-2xl md:text-3xl font-bold" />
                <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent ml-4"></div>
              </div>
            </div>

            {/* Description */}
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              <AnimatedText
                text="Perfect for designers, entrepreneurs, and non-developers who want to build functional web apps, dashboards, and tools without learning to code. Turn your ideas into working software with AI assistance."
                delay={800}
              />
            </p>

            {/* CTA buttons with hover effects */}
            <div
              className={`flex flex-col sm:flex-row gap-4 min-[400px]:flex-row transition-all duration-700 delay-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <GradientButton size="lg" className="group px-8" onClick={handleStartBuilding}>
                <span className="flex items-center whitespace-nowrap">
                  Start Creating
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
                </span>
              </GradientButton>
              <Button
                size="lg"
                variant="outline"
                onClick={handleExploreProjects}
                className="border-violet-200 hover:border-violet-300 hover:bg-violet-50 dark:border-violet-800 dark:hover:border-violet-700 dark:hover:bg-violet-900/20 transition-all duration-300"
              >
                Browse Projects
              </Button>
            </div>

            {/* Stats with animated reveal */}
            <div
              className={`flex flex-wrap items-center justify-center gap-6 mt-8 text-sm transition-all duration-700 delay-1200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm dark:bg-slate-900/80">
                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                <span className="font-semibold">1.2k stars</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm dark:bg-slate-900/80">
                <Code2 className="h-4 w-4 mr-2 text-cyan-500" />
                <span className="font-semibold">MIT License</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm dark:bg-slate-900/80">
                <Users className="h-4 w-4 mr-2 text-violet-500" />
                <span className="font-semibold">42 contributors</span>
              </div>
            </div>

            {/* Social sharing */}
            <div
              className={`mt-6 transition-all duration-700 delay-1300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <SocialShare />
            </div>

            {/* Featured on section */}
            <div
              className={`mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 w-full max-w-3xl transition-all duration-700 delay-1400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <p className="text-sm text-muted-foreground mb-4">Featured in</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-70">
                <div className="h-6 w-24 bg-gray-400 rounded animate-pulse"></div>
                <div className="h-6 w-20 bg-gray-400 rounded animate-pulse"></div>
                <div className="h-6 w-28 bg-gray-400 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative code snippets */}
        <div className="hidden lg:block absolute top-20 left-8 transform -rotate-6 opacity-20 dark:opacity-10">
          <pre className="text-xs text-violet-600 dark:text-violet-400 font-mono">
            {`function createProject() {
  const idea = getYourIdea();
  const code = AI.transform(idea);
  return new Project(code);
}`}
          </pre>
        </div>

        <div className="hidden lg:block absolute bottom-20 right-8 transform rotate-6 opacity-20 dark:opacity-10">
          <pre className="text-xs text-cyan-600 dark:text-cyan-400 font-mono">
            {`const vibecodex = {
  input: "your idea",
  output: "working code",
  effort: "minimal"
};`}
          </pre>
        </div>
      </section>

      {/* Metrics section */}
      <section className="w-full py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-white">500+</h3>
              <p className="text-gray-400">AI PROMPTS COMING SOON</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-white">10x</h3>
              <p className="text-gray-400">FASTER DEVELOPMENT</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-white">24/7</h3>
              <p className="text-gray-400">AI PAIR PROGRAMMING</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-br from-violet-950 to-black">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Join the Codex Crew</h2>
              <p className="text-gray-300">
                Get early access to our AI development prompts for Cursor, v0, and Bolt.new. Stay updated with the
                latest drops and be part of our growing community.
              </p>
            </div>
            <div>
              <NewsletterSignup />
            </div>
          </div>
        </div>
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
                <img
                  src="/step1-ideation-sketch.png"
                  alt="Sketch to idea concept"
                  className="rounded-md w-full h-auto"
                />
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
                <img src="/step2-ai-prompt.png" alt="AI prompt interface" className="rounded-md w-full h-auto" />
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
                <img src="/step3-final-app.png" alt="Resulting application" className="rounded-md w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who is this for?</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              VibeCodex helps anyone with ideas but limited coding skills build real software
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col p-6 space-y-4 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M12 2v2"></path>
                  <path d="M12 22v-2"></path>
                  <path d="m17 20.66-1-1.73"></path>
                  <path d="M11 10.27 7 3.34"></path>
                  <path d="m20.66 17-1.73-1"></path>
                  <path d="m3.34 7 1.73 1"></path>
                  <path d="M14 12h8"></path>
                  <path d="M2 12h2"></path>
                  <path d="m20.66 7-1.73 1"></path>
                  <path d="m3.34 17 1.73-1"></path>
                  <path d="m17 3.34-1 1.73"></path>
                  <path d="m7 20.66-1-1.73"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Designers & Creatives</h3>
              <p className="text-muted-foreground flex-1">
                Transform your designs and mockups into functional prototypes and websites without having to learn
                complex coding.
              </p>
            </Card>
            <Card className="flex flex-col p-6 space-y-4 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Entrepreneurs & Founders</h3>
              <p className="text-muted-foreground flex-1">
                Build MVPs and validate your business ideas quickly without hiring developers or learning to code from
                scratch.
              </p>
            </Card>
            <Card className="flex flex-col p-6 space-y-4 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Students & Learners</h3>
              <p className="text-muted-foreground flex-1">
                Learn practical development skills by building real projects with AI guidance, bridging the gap between
                theory and application.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-violet-50 to-cyan-50 dark:from-violet-950/20 dark:to-cyan-950/20">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Development Will Never Be the Same
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We believe everyone should be able to create with AI, regardless of their coding background
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <Card className="flex flex-col p-6 space-y-4 shadow-sm bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
              <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center dark:bg-emerald-900/30">
                <BookOpen className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold">Comprehensive guides</h3>
              <p className="text-muted-foreground flex-1">
                Access detailed guides on AI development workflows, best practices, and tool comparisons to enhance your
                skills.
              </p>
              <Button variant="outline" size="sm" className="mt-auto" asChild>
                <Link href="/guides">
                  <span className="flex items-center whitespace-nowrap">
                    Explore Guides
                    <ArrowRight className="ml-2 h-3 w-3 flex-shrink-0" />
                  </span>
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <div className="rounded-lg overflow-hidden border shadow-lg">
                <img
                  src="/ai-development-hero.png"
                  alt="AI Development Guide"
                  className="aspect-video object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 mb-2">
                Learning Resources
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Master AI-Assisted Development
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Our comprehensive guides will help you learn effective strategies for working with AI tools, from
                planning to implementation and best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
                <GradientButton asChild>
                  <Link href="/guides" className="flex items-center whitespace-nowrap">
                    <span className="flex items-center whitespace-nowrap">
                      Explore Guides
                      <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                    </span>
                  </Link>
                </GradientButton>
                <Button variant="outline" asChild>
                  <Link href="/guides/ai-development" className="flex items-center whitespace-nowrap">
                    <span className="flex items-center whitespace-nowrap">
                      AI Development Guide
                      <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
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
                <GradientButton size="lg" onClick={handleStartBuilding}>
                  <span className="flex items-center whitespace-nowrap">
                    Start Building Now
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </span>
                </GradientButton>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://github.com/yourusername/vibecodex" target="_blank" rel="noopener noreferrer">
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

      {/* Learning Path CTA */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-violet-100 px-3 py-1 text-sm text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 mb-2">
                Structured Learning
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Follow Your Learning Path</h2>
              <p className="text-muted-foreground md:text-xl">
                Whether you're a complete beginner or an experienced developer, our structured learning paths will guide
                you through mastering AI-assisted development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
                <GradientButton asChild>
                  <Link href="/learning-path" className="flex items-center whitespace-nowrap">
                    <span className="flex items-center whitespace-nowrap">
                      Find Your Path
                      <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                    </span>
                  </Link>
                </GradientButton>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-lg overflow-hidden border shadow-lg">
                <img
                  src="/abstract-geometric-sketch.png"
                  alt="Learning path illustration"
                  className="aspect-video object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What People Are Building</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              See what our community has created with VibeCodex
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <h3 className="font-semibold">Jamie Diaz</h3>
                    <div className="ml-auto flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-amber-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I built a client dashboard for my freelance business in just one weekend. As a designer with no
                    coding experience, I never thought I could create something so functional on my own!"
                  </p>
                  <div className="pt-4 mt-4 border-t text-sm text-muted-foreground">
                    Built: Client Management Dashboard
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                  MT
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <h3 className="font-semibold">Michael Torres</h3>
                    <div className="ml-auto flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-amber-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I launched an MVP for my startup idea in just two weeks using VibeCodex. The AI guidance helped me
                    build features I didn't think were possible without a technical co-founder."
                  </p>
                  <div className="pt-4 mt-4 border-t text-sm text-muted-foreground">
                    Built: Inventory Management System
                  </div>
                </div>
              </div>
            </Card>
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
                    <span className="flex items-center whitespace-nowrap">
                      View Project
                      <ArrowRight className="ml-2 h-3 w-3 flex-shrink-0" />
                    </span>
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
                    <span className="flex items-center whitespace-nowrap">
                      View Project
                      <ArrowRight className="ml-2 h-3 w-3 flex-shrink-0" />
                    </span>
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
              <div className="aspect-video relative">
                <img src="/modern-tech-landing.png" alt="Landing Page Project" className="object-cover w-full h-full" />
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
                    <span className="flex items-center whitespace-nowrap">
                      View Project
                      <ArrowRight className="ml-2 h-3 w-3 flex-shrink-0" />
                    </span>
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/projects">
                <span className="flex items-center whitespace-nowrap">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <HomePageStructuredData />
    </>
  )
}
