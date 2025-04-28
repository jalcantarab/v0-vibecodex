"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, Copy, ExternalLink, Github } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function GitHubBasicsGuidePage() {
  return (
    <div className="container max-w-4xl py-10">
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-2">
          <Link href="/guides" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            <span>All Guides</span>
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Badge variant="outline" className="flex items-center gap-1">
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </Badge>
          <Badge
            variant="outline"
            className="bg-emerald-500/10 text-emerald-600 border-emerald-200 dark:text-emerald-400"
          >
            Beginner
          </Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight">GitHub Basics Guide</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to save, manage, and share your AI-generated code with GitHub
        </p>
      </div>

      <div className="grid gap-8">
        <section id="introduction" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Introduction to Version Control</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p>
                When you create code with AI tools like v0, you need a way to save your work, track changes, and share
                it with others. That's where <strong>GitHub</strong> comes in.
              </p>
              <p>
                GitHub is like a Google Drive for code, but with powerful features designed specifically for software
                development. It helps you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Save your code in a secure, cloud-based location</li>
                <li>Track changes over time so you can go back to previous versions</li>
                <li>Collaborate with others without overwriting each other's work</li>
                <li>Deploy your projects to the web directly from your code repository</li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-64 rounded-lg overflow-hidden border">
                <Image
                  src="/github-workflow-diagram.png"
                  alt="GitHub workflow diagram showing how code moves from local to remote repository"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <Separator />

        <section id="getting-started" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Getting Started with GitHub</h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">1. Create a GitHub Account</h3>
              <p>First, you'll need to create a free GitHub account if you don't already have one.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a
                    href="https://github.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Create GitHub Account
                    <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/login" target="_blank" rel="noopener noreferrer">
                    Sign in to existing account
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">2. GitHub Terminology Simplified</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <TermCard
                  term="Repository (Repo)"
                  definition="A project folder that contains all your code files and their history."
                />
                <TermCard term="Commit" definition="A saved snapshot of your code at a specific point in time." />
                <TermCard term="Branch" definition="A separate version of your code, like a parallel timeline." />
                <TermCard term="Clone" definition="Making a copy of a repository on your computer." />
                <TermCard term="Push" definition="Uploading your local changes to GitHub." />
                <TermCard term="Pull" definition="Downloading the latest changes from GitHub to your computer." />
              </div>
            </div>
          </div>
        </section>

        <Separator />

        <section id="github-desktop" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">GitHub Desktop Setup</h2>

          <p>
            While you can use GitHub directly through the command line, GitHub Desktop provides a user-friendly visual
            interface that's perfect for beginners.
          </p>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">1. Download and Install GitHub Desktop</h3>
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
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">2. Connect to Your GitHub Account</h3>
              <div className="relative w-full h-96 rounded-lg overflow-hidden border">
                <Image
                  src="/github-desktop-login.png"
                  alt="GitHub Desktop login screen"
                  fill
                  className="object-contain"
                />
              </div>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Open GitHub Desktop after installation</li>
                <li>Click "Sign in to GitHub.com"</li>
                <li>Enter your GitHub username and password</li>
                <li>Complete any two-factor authentication if prompted</li>
                <li>Configure your name and email for Git commits when asked</li>
              </ol>
            </div>
          </div>
        </section>

        <Separator />

        <section id="first-repository" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Your First Repository</h2>

          <Tabs defaultValue="create" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="create">Create New Repository</TabsTrigger>
              <TabsTrigger value="export">Export from v0</TabsTrigger>
            </TabsList>
            <TabsContent value="create" className="space-y-4 pt-4">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Creating a New Repository</h3>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p>
                      In GitHub Desktop, click on "File" &gt; "New Repository" or use the "Create a New Repository"
                      button
                    </p>
                    <div className="relative w-full h-64 rounded-lg overflow-hidden border mt-2">
                      <Image
                        src="/github-desktop-new-repo.png"
                        alt="Creating a new repository in GitHub Desktop"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </li>
                  <li>
                    <p>Fill in the repository details:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>
                        <strong>Name:</strong> Choose a descriptive name for your project
                      </li>
                      <li>
                        <strong>Description:</strong> (Optional) Add a short description
                      </li>
                      <li>
                        <strong>Local Path:</strong> Choose where to save the repository on your computer
                      </li>
                      <li>
                        <strong>Initialize with README:</strong> Check this box (recommended)
                      </li>
                      <li>
                        <strong>Git Ignore:</strong> Choose a template based on your project type (e.g., Node)
                      </li>
                      <li>
                        <strong>License:</strong> Choose an open-source license (MIT is a good default)
                      </li>
                    </ul>
                  </li>
                  <li>Click "Create Repository"</li>
                  <li>
                    <p>Publish your repository to GitHub by clicking "Publish repository"</p>
                    <div className="relative w-full h-64 rounded-lg overflow-hidden border mt-2">
                      <Image
                        src="/github-desktop-publish.png"
                        alt="Publishing a repository to GitHub"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </li>
                </ol>
              </div>
            </TabsContent>
            <TabsContent value="export" className="space-y-4 pt-4">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Exporting from v0 to GitHub</h3>
                <p>
                  If you've created a project with v0, you can export it directly to GitHub without needing to set up a
                  repository manually.
                </p>
                <Alert>
                  <AlertTitle className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    The easiest way to save v0 projects
                  </AlertTitle>
                  <AlertDescription>
                    v0 has built-in GitHub integration that makes saving your projects simple.
                  </AlertDescription>
                </Alert>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p>In v0, click the "..." menu in the top-right corner of your project</p>
                    <div className="relative w-full h-64 rounded-lg overflow-hidden border mt-2">
                      <Image src="/v0-export-menu.png" alt="v0 export menu" fill className="object-contain" />
                    </div>
                  </li>
                  <li>
                    <p>Select "Add to codebase"</p>
                  </li>
                  <li>
                    <p>Choose "Create new repository" and follow the prompts</p>
                    <div className="relative w-full h-64 rounded-lg overflow-hidden border mt-2">
                      <Image
                        src="/v0-github-export.png"
                        alt="v0 GitHub export dialog"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </li>
                  <li>
                    <p>Once exported, you can clone the repository to your computer using GitHub Desktop</p>
                    <CodeSnippet code="https://github.com/yourusername/your-repository.git" />
                    <p className="mt-2">
                      Copy this URL from your GitHub repository page and use it to clone in GitHub Desktop
                    </p>
                  </li>
                </ol>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <Separator />

        <section id="basic-workflow" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Basic GitHub Workflow</h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">The GitHub Workflow</h3>
              <div className="relative w-full h-64 rounded-lg overflow-hidden border">
                <Image
                  src="/github-workflow-steps.png"
                  alt="GitHub workflow steps diagram"
                  fill
                  className="object-contain"
                />
              </div>
              <p>The basic GitHub workflow consists of these steps:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Make changes</strong> to your code using your preferred editor
                </li>
                <li>
                  <strong>Review changes</strong> in GitHub Desktop to see what you've modified
                </li>
                <li>
                  <strong>Commit changes</strong> with a descriptive message explaining what you did
                </li>
                <li>
                  <strong>Push changes</strong> to upload your commits to GitHub
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Making Your First Commit</h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <p>Make some changes to your project files using any code editor</p>
                </li>
                <li>
                  <p>Open GitHub Desktop and you'll see the changed files highlighted</p>
                  <div className="relative w-full h-64 rounded-lg overflow-hidden border mt-2">
                    <Image
                      src="/github-desktop-changes.png"
                      alt="GitHub Desktop showing changes"
                      fill
                      className="object-contain"
                    />
                  </div>
                </li>
                <li>
                  <p>Write a summary of your changes in the "Summary" field (e.g., "Update header styling")</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Optionally, add more details in the "Description" field
                  </p>
                </li>
                <li>
                  <p>Click "Commit to main"</p>
                </li>
                <li>
                  <p>Click "Push origin" to upload your changes to GitHub</p>
                </li>
              </ol>
            </div>

            <Alert className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50">
              <AlertTitle className="text-amber-800 dark:text-amber-400">Commit Best Practices</AlertTitle>
              <AlertDescription className="text-amber-700 dark:text-amber-300">
                <ul className="list-disc pl-6 space-y-1">
                  <li>Commit frequently with small, logical changes</li>
                  <li>Write clear commit messages that explain what and why (not how)</li>
                  <li>Push your changes regularly to avoid losing work</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <Separator />

        <section id="deployment" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Deploying from GitHub</h2>

          <p>
            One of the biggest advantages of using GitHub is how easy it makes deploying your projects to the web.
            Services like Vercel and Netlify connect directly to your GitHub repositories.
          </p>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Deploying to Vercel</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Go to{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Vercel.com
                  </a>{" "}
                  and sign up or log in
                </li>
                <li>Click "Add New..." and select "Project"</li>
                <li>Connect your GitHub account if prompted</li>
                <li>Select the repository you want to deploy</li>
                <li>Configure your project settings (Vercel will auto-detect most frameworks)</li>
                <li>Click "Deploy"</li>
              </ol>
              <div className="relative w-full h-64 rounded-lg overflow-hidden border mt-2">
                <Image src="/vercel-github-deploy.png" alt="Vercel GitHub deployment" fill className="object-contain" />
              </div>
              <p className="text-sm text-muted-foreground">
                Once connected, Vercel will automatically deploy new versions whenever you push changes to GitHub.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Troubleshooting Common Issues</h2>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <TroubleshootingCard
                title="Authentication Failed"
                solution="Try signing out and back in to GitHub Desktop. If that doesn't work, generate a personal access token on GitHub and use that instead."
              />
              <TroubleshootingCard
                title="Can't Push Changes"
                solution="Someone else might have pushed changes you don't have. Try pulling first (Fetch origin > Pull origin), resolve any conflicts, then push."
              />
              <TroubleshootingCard
                title="Merge Conflicts"
                solution="When two people change the same code, you'll need to manually resolve conflicts. GitHub Desktop will show you the conflicts and let you choose which changes to keep."
              />
              <TroubleshootingCard
                title="File Too Large"
                solution="GitHub has a file size limit of 100MB. For larger files, consider using Git LFS or keeping them out of your repository."
              />
            </div>
          </div>
        </section>

        <Separator />

        <section id="next-steps" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Next Steps</h2>

          <p>
            Now that you understand the basics of GitHub, you're ready to take your development workflow to the next
            level.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <NextStepCard
              title="Learn Branching"
              description="Create separate branches for new features or experiments without affecting your main code."
              link="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches"
            />
            <NextStepCard
              title="Collaborate with Pull Requests"
              description="Learn how to propose changes and review code with teammates using pull requests."
              link="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"
            />
            <NextStepCard
              title="GitHub Issues"
              description="Track bugs, enhancements, and tasks using GitHub's built-in issue tracking system."
              link="https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues"
            />
            <NextStepCard
              title="GitHub Actions"
              description="Automate your workflow with custom CI/CD pipelines that run whenever you push code."
              link="https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions"
            />
          </div>
        </section>

        <div className="mt-8 flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/guides" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              All Guides
            </Link>
          </Button>
          <Button asChild>
            <Link href="/learning-path" className="flex items-center gap-2">
              Continue Learning Path
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

interface TermCardProps {
  term: string
  definition: string
}

function TermCard({ term, definition }: TermCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <h4 className="font-semibold">{term}</h4>
        <p className="text-sm text-muted-foreground">{definition}</p>
      </CardContent>
    </Card>
  )
}

interface TroubleshootingCardProps {
  title: string
  solution: string
}

function TroubleshootingCard({ title, solution }: TroubleshootingCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <h4 className="font-semibold text-red-600 dark:text-red-400">{title}</h4>
        <p className="text-sm mt-1">{solution}</p>
      </CardContent>
    </Card>
  )
}

interface NextStepCardProps {
  title: string
  description: string
  link: string
}

function NextStepCard({ title, description, link }: NextStepCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        <div className="mt-4">
          <Button variant="outline" size="sm" asChild className="w-full">
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              Learn More
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
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
