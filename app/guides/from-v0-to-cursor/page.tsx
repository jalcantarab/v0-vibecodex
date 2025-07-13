"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, Copy, ExternalLink, Lightbulb, Workflow } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ToolLogoSmall } from "@/components/tool-logo-small"

export default function V0ToCursorGuidePage() {
  return (
    <div className="container max-w-4xl py-10">
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <Link href="/guides" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            <span>All Guides</span>
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Badge variant="outline" className="flex items-center gap-1">
            <Workflow className="h-3.5 w-3.5" />
            <span>Workflow</span>
          </Badge>
          <Badge
            variant="outline"
            className="bg-emerald-500/10 text-emerald-600 border-emerald-200 dark:text-emerald-400"
          >
            Beginner
          </Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight">From v0 to Cursor: Scaling Your AI Prototypes</h1>
        <p className="text-xl text-muted-foreground">
          Learn the essential workflow for transitioning your AI-generated projects from a browser-based prototype to a
          professional, local development environment.
        </p>
      </div>

      <div className="grid gap-8">
        <section id="introduction" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">The Modern Development Bridge</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p>
                AI tools like <ToolLogoSmall toolId="v0" /> and <ToolLogoSmall toolId="bolt" /> are incredibly powerful
                for rapidly creating "version 0" of an application. You can go from an idea to a working prototype in
                minutes.
              </p>
              <p>
                But what happens next? As your project grows, you'll need the power of a full-fledged Integrated
                Development Environment (IDE). This guide shows you how to build the bridge from your browser-based
                prototype to a local setup using <ToolLogoSmall toolId="github" />.
              </p>
              <p className="font-semibold">
                The core workflow is: <ToolLogoSmall toolId="v0" /> → <ToolLogoSmall toolId="github" /> →{" "}
                <ToolLogoSmall toolId="cursor" />.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-64 rounded-lg overflow-hidden border">
                <Image
                  src="/v0-to-cursor-workflow.png"
                  alt="Workflow diagram showing v0 to GitHub to Cursor"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </section>

        <Separator />

        <section id="when-to-transition" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">When to Make the Leap</h2>
          <p>
            Browser-based AI tools are fantastic for speed, but you'll know it's time to transition to a local IDE like{" "}
            <ToolLogoSmall toolId="cursor" /> when you need to:
          </p>
          <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/50">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-800 dark:text-blue-400">Transition Triggers</AlertTitle>
            <AlertDescription className="text-blue-700 dark:text-blue-300">
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>
                  <strong>Manage Complexity:</strong> Your project has grown beyond 20-30 files and navigating in the
                  browser becomes cumbersome.
                </li>
                <li>
                  <strong>Perform Advanced Edits:</strong> You need to refactor code across multiple files
                  simultaneously.
                </li>
                <li>
                  <strong>Debug Effectively:</strong> You need to set breakpoints, inspect variables, and step through
                  code to fix complex bugs.
                </li>
                <li>
                  <strong>Run Locally:</strong> You want to run a local development server for faster testing and
                  offline work.
                </li>
                <li>
                  <strong>Integrate with a Backend:</strong> You're ready to connect to a real database or custom
                  backend APIs.
                </li>
              </ul>
            </AlertDescription>
          </Alert>
        </section>

        <Separator />

        <section id="step-1-export" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Step 1: Export from v0 to GitHub</h2>
          <p>
            The first step is to move your code from v0 into a permanent, version-controlled home on GitHub. v0 makes
            this incredibly simple with its built-in export functionality.
          </p>
          <ol className="list-decimal pl-6 space-y-6">
            <li>
              <h3 className="font-semibold">Open the Export Menu</h3>
              <p className="mb-2">In your v0 project, click the "..." menu in the top-right corner.</p>
              <div className="relative w-full h-64 rounded-lg overflow-hidden border">
                <Image src="/v0-export-menu.png" alt="v0 export menu" fill className="object-contain p-2" />
              </div>
            </li>
            <li>
              <h3 className="font-semibold">Add to Codebase</h3>
              <p className="mb-2">
                Select "Add to codebase". This will open a dialog to connect to your GitHub account.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Create a New Repository</h3>
              <p className="mb-2">
                Choose "Create new repository" and give your project a name. v0 will automatically create a new
                repository in your GitHub account and push all the project files to it.
              </p>
              <div className="relative w-full h-64 rounded-lg overflow-hidden border">
                <Image
                  src="/v0-github-export.png"
                  alt="v0 GitHub export dialog showing create new repository"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </li>
          </ol>
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your entire project, including all files and folder structures, is now safely stored on GitHub.
            </AlertDescription>
          </Alert>
        </section>

        <Separator />

        <section id="step-2-clone" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Step 2: Clone to Your Local Machine</h2>
          <p>
            Now that your code is on GitHub, you need to bring it to your computer. This is called "cloning." We
            recommend using GitHub Desktop for a simple, visual experience.
          </p>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <h3 className="font-semibold">Get the Repository URL</h3>
              <p className="mb-2">
                On your new GitHub repository page, click the green "Code" button and copy the HTTPS URL.
              </p>
              <CodeSnippet code={`https://github.com/your-username/${"your-repo-name"}.git`} />
            </li>
            <li>
              <h3 className="font-semibold">Clone in GitHub Desktop</h3>
              <p className="mb-2">
                Open GitHub Desktop, go to "File" &gt; "Clone Repository...". Select the "URL" tab, paste the URL you
                copied, choose a local path where you want to save the project, and click "Clone".
              </p>
              <div className="relative w-full h-80 rounded-lg overflow-hidden border">
                <Image
                  src="/placeholder.svg?width=800&height=500"
                  alt="GitHub Desktop clone from URL dialog"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </li>
          </ol>
          <Card>
            <CardHeader>
              <CardTitle>Don't have GitHub Desktop?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                It's a free tool that simplifies Git. For a full walkthrough on setting it up, check out our{" "}
                <Link href="/guides/github-basics" className="text-primary hover:underline">
                  GitHub Basics Guide
                </Link>
                .
              </p>
              <Button asChild>
                <a
                  href="https://desktop.github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Download GitHub Desktop
                  <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section id="step-3-cursor" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Step 3: Open in Cursor and Continue Building</h2>
          <p>
            With the project on your local machine, you're ready to unleash the full power of an AI-native IDE like
            Cursor.
          </p>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <h3 className="font-semibold">Open the Project Folder</h3>
              <p className="mb-2">
                Launch Cursor, then go to "File" &gt; "Open Folder..." and select the project folder you just cloned
                from GitHub.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Explore Your Project</h3>
              <p className="mb-2">
                You'll see the exact same file structure from v0, now in a powerful local environment. You can now:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use Cursor's AI chat to refactor code or add new features.</li>
                <li>Open the integrated terminal to install dependencies (`npm install`).</li>
                <li>Start the local development server (`npm run dev`).</li>
                <li>Use the debugger to troubleshoot issues.</li>
              </ul>
              <div className="relative w-full h-96 rounded-lg overflow-hidden border mt-4">
                <Image
                  src="/placeholder.svg?width=800&height=500"
                  alt="Cursor IDE showing the cloned project files"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </li>
          </ol>
        </section>

        <Separator />

        <section id="next-steps" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Next Steps</h2>
          <p>
            You've successfully bridged the gap from prototype to production-ready development. Your workflow is now
            supercharged for both speed and power.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <NextStepCard
              title="Master Version Control"
              description="Dive deeper into version control concepts that will help you manage your project as it grows."
              link="/guides/github-basics"
              linkText="Read GitHub Guide"
            />
            <NextStepCard
              title="Explore Cursor"
              description="Learn the fundamentals of the Cursor IDE to maximize your local development productivity."
              link="#" // Link to future cursor guide
              linkText="Cursor Guide (Coming Soon)"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

interface CodeSnippetProps {
  code: string
}

function CodeSnippet({ code }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <div className="bg-slate-100 dark:bg-slate-800 rounded-md p-4 overflow-x-auto font-mono text-sm">{code}</div>
      <Button size="icon" variant="ghost" className="absolute top-2 right-2 h-8 w-8" onClick={handleCopy}>
        {copied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  )
}

interface NextStepCardProps {
  title: string
  description: string
  link: string
  linkText: string
}

function NextStepCard({ title, description, link, linkText }: NextStepCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <CardContent className="p-4 flex flex-col flex-grow">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1 flex-grow">{description}</p>
        <div className="mt-4">
          <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
            <Link href={link} className="flex items-center justify-center gap-2">
              {linkText}
              {link !== "#" && <ArrowRight className="h-3.5 w-3.5" />}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
