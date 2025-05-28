"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Copy,
  ExternalLink,
  Github,
  GitBranch,
  GitFork,
  GitMerge,
  GitPullRequest,
} from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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

      <div className="mb-8">
        <Tabs defaultValue="chapter1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="chapter1">Getting Started</TabsTrigger>
            <TabsTrigger value="chapter2">Core Concepts</TabsTrigger>
            <TabsTrigger value="chapter3">Advanced & Integration</TabsTrigger>
          </TabsList>

          <TabsContent value="chapter1" className="space-y-4">
            <p className="text-muted-foreground">
              Chapter 1 covers the basics of GitHub, setting up your account, and creating your first repository.
            </p>
            <div className="grid gap-2">
              <a href="#introduction" className="text-primary hover:underline">
                Introduction to Version Control
              </a>
              <a href="#getting-started" className="text-primary hover:underline">
                Getting Started with GitHub
              </a>
              <a href="#github-desktop" className="text-primary hover:underline">
                GitHub Desktop Setup
              </a>
              <a href="#first-repository" className="text-primary hover:underline">
                Your First Repository
              </a>
            </div>
          </TabsContent>

          <TabsContent value="chapter2" className="space-y-4">
            <p className="text-muted-foreground">
              Chapter 2 explores essential GitHub concepts like commits, branches, forks, and merges.
            </p>
            <div className="grid gap-2">
              <a href="#basic-workflow" className="text-primary hover:underline">
                Basic GitHub Workflow
              </a>
              <a href="#branches" className="text-primary hover:underline">
                Working with Branches
              </a>
              <a href="#forks" className="text-primary hover:underline">
                Forking Repositories
              </a>
              <a href="#merging" className="text-primary hover:underline">
                Merging Changes
              </a>
            </div>
          </TabsContent>

          <TabsContent value="chapter3" className="space-y-4">
            <p className="text-muted-foreground">
              Chapter 3 covers advanced topics and integrating GitHub with AI tools and deployment platforms.
            </p>
            <div className="grid gap-2">
              <a href="#ai-tool-integration" className="text-primary hover:underline">
                GitHub with AI Tools
              </a>
              <a href="#deployment" className="text-primary hover:underline">
                Deploying from GitHub
              </a>
              <a href="#transition-to-cursor" className="text-primary hover:underline">
                When to Transition to Cursor
              </a>
              <a href="#troubleshooting" className="text-primary hover:underline">
                Troubleshooting Common Issues
              </a>
              <a href="#next-steps" className="text-primary hover:underline">
                Next Steps
              </a>
            </div>
          </TabsContent>
        </Tabs>
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
                <TermCard term="Fork" definition="Creating your own copy of someone else's repository on GitHub." />
                <TermCard term="Merge" definition="Combining changes from one branch into another." />
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
                  <div className="relative w-full h-96 rounded-lg overflow-hidden border mt-2">
                    <Image
                      src="/github-desktop-changes.png"
                      alt="GitHub Desktop showing changes to files with code diff view"
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

        <section id="branches" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <GitBranch className="h-6 w-6" />
            Working with Branches
          </h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What Are Branches?</h3>
              <p>
                Branches allow you to work on different versions of your code simultaneously. Think of them as parallel
                timelines where you can develop features or fix bugs without affecting the main codebase.
              </p>

              <div className="relative w-full h-64 rounded-lg overflow-hidden border">
                <Image
                  src="/github-branches-diagram.png"
                  alt="GitHub branches diagram showing main branch and feature branches"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">When to Use Branches</h4>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Developing new features</li>
                      <li>Fixing bugs</li>
                      <li>Experimenting with code changes</li>
                      <li>Working on multiple features simultaneously</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Branch Naming Conventions</h4>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>
                        <code>feature/add-login</code> - For new features
                      </li>
                      <li>
                        <code>bugfix/fix-header</code> - For bug fixes
                      </li>
                      <li>
                        <code>hotfix/critical-error</code> - For urgent fixes
                      </li>
                      <li>
                        <code>release/v1.0</code> - For release preparation
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Creating and Using Branches in GitHub Desktop</h3>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="create-branch">
                  <AccordionTrigger>Creating a New Branch</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>In GitHub Desktop, click on the "Current Branch" dropdown</li>
                      <li>Click "New Branch"</li>
                      <li>Enter a descriptive name for your branch</li>
                      <li>Select the branch you want to base your new branch on (usually "main")</li>
                      <li>Click "Create Branch"</li>
                    </ol>
                    <div className="relative w-full h-64 rounded-lg overflow-hidden border mt-4">
                      <Image
                        src="/github-desktop-new-branch.png"
                        alt="Creating a new branch in GitHub Desktop"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="switch-branch">
                  <AccordionTrigger>Switching Between Branches</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>In GitHub Desktop, click on the "Current Branch" dropdown</li>
                      <li>Select the branch you want to switch to from the list</li>
                      <li>GitHub Desktop will update your files to match the selected branch</li>
                    </ol>
                    <Alert className="mt-4">
                      <AlertTitle>Save Your Changes First</AlertTitle>
                      <AlertDescription>
                        Always commit your changes before switching branches, or use the "Stash Changes" feature to
                        temporarily save them.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="publish-branch">
                  <AccordionTrigger>Publishing a Branch to GitHub</AccordionTrigger>
                  <AccordionContent>
                    <p>When you create a new branch locally, it only exists on your computer until you publish it.</p>
                    <ol className="list-decimal pl-6 space-y-2 mt-2">
                      <li>Make sure you're on the branch you want to publish</li>
                      <li>Click "Publish branch" in the top right</li>
                      <li>Your branch is now available on GitHub for others to see</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <Separator />

        <section id="forks" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <GitFork className="h-6 w-6" />
            Forking Repositories
          </h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What is Forking?</h3>
              <p>
                Forking creates your own copy of someone else's repository on GitHub. This allows you to freely
                experiment with changes without affecting the original project.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">When to Fork a Repository</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contributing to open-source projects</li>
                    <li>Using someone else's project as a starting point</li>
                    <li>Experimenting with changes to a public project</li>
                    <li>Creating your own version of a template or starter project</li>
                  </ul>
                </div>
                <div className="relative w-full h-64 rounded-lg overflow-hidden border">
                  <Image
                    src="/github-fork-diagram.png"
                    alt="GitHub fork diagram showing relationship between original and forked repository"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">How to Fork a Repository</h3>

              <Tabs defaultValue="github" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="github">On GitHub.com</TabsTrigger>
                  <TabsTrigger value="v0">From v0</TabsTrigger>
                </TabsList>

                <TabsContent value="github" className="space-y-4 pt-4">
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>Navigate to the GitHub repository you want to fork</li>
                    <li>
                      <p>Click the "Fork" button in the top-right corner of the page</p>
                      <div className="relative w-full h-64 rounded-lg overflow-hidden border mt-2">
                        <Image
                          src="/github-fork-button.png"
                          alt="Fork button on GitHub repository page"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </li>
                    <li>Select your account as the destination for the fork</li>
                    <li>Wait for GitHub to create your copy of the repository</li>
                    <li>You'll be redirected to your new forked repository</li>
                  </ol>
                </TabsContent>

                <TabsContent value="v0" className="space-y-4 pt-4">
                  <Alert className="mb-4">
                    <AlertTitle className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      v0 Supports Forking
                    </AlertTitle>
                    <AlertDescription>
                      You can fork public v0 projects to create your own version that you can modify.
                    </AlertDescription>
                  </Alert>

                  <ol className="list-decimal pl-6 space-y-4">
                    <li>Find a public v0 project you want to fork</li>
                    <li>
                      <p>Click the "Fork" button in the project interface</p>
                      <div className="relative w-full h-64 rounded-lg overflow-hidden border mt-2">
                        <Image src="/v0-fork-button.png" alt="v0 fork button" fill className="object-contain" />
                      </div>
                    </li>
                    <li>v0 will create a copy of the project in your account</li>
                    <li>You can now make changes to your forked version</li>
                    <li>Export to GitHub using the same process described earlier</li>
                  </ol>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Working with a Forked Repository</h3>

              <ol className="list-decimal pl-6 space-y-2">
                <li>Clone your forked repository to your computer using GitHub Desktop</li>
                <li>Make changes to the code as needed</li>
                <li>Commit and push your changes to your fork</li>
                <li>To contribute back to the original project, create a pull request (covered in the next section)</li>
              </ol>

              <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/50 mt-4">
                <AlertTitle className="text-blue-800 dark:text-blue-400">Keeping Your Fork Updated</AlertTitle>
                <AlertDescription className="text-blue-700 dark:text-blue-300">
                  <p>To keep your fork in sync with the original repository:</p>
                  <ol className="list-decimal pl-6 space-y-1 mt-2">
                    <li>Add the original repository as a "remote" called "upstream"</li>
                    <li>Fetch changes from the upstream repository</li>
                    <li>Merge those changes into your local branch</li>
                    <li>Push the updated code to your fork</li>
                  </ol>
                  <p className="mt-2">GitHub Desktop has a "Keep fork synced" option to automate this process.</p>
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        <Separator />

        <section id="merging" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <GitMerge className="h-6 w-6" />
            Merging Changes
          </h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Understanding Merges and Pull Requests</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p>
                    Merging combines changes from one branch into another. This is how you integrate new features or bug
                    fixes into your main codebase.
                  </p>

                  <p>
                    <strong>Pull Requests (PRs)</strong> are GitHub's way of proposing changes and requesting that
                    someone review and merge your code. They're essential for collaboration.
                  </p>
                </div>
                <div className="relative w-full h-64 rounded-lg overflow-hidden border">
                  <Image
                    src="/github-merge-diagram.png"
                    alt="GitHub merge diagram showing branches being combined"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Merging Branches in GitHub Desktop</h3>

              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  In GitHub Desktop, switch to the branch you want to merge <strong>into</strong> (usually "main")
                </li>
                <li>
                  <p>Click on "Branch" in the top menu, then select "Merge into current branch..."</p>
                  <div className="relative w-full h-64 rounded-lg overflow-hidden border mt-2">
                    <Image
                      src="/github-desktop-merge.png"
                      alt="Merging branches in GitHub Desktop"
                      fill
                      className="object-contain"
                    />
                  </div>
                </li>
                <li>Select the branch you want to merge from</li>
                <li>Click "Merge [branch] into [current branch]"</li>
                <li>Push the changes to GitHub by clicking "Push origin"</li>
              </ol>

              <Alert className="mt-4">
                <AlertTitle className="flex items-center gap-2">
                  <GitPullRequest className="h-4 w-4" />
                  Merge Conflicts
                </AlertTitle>
                <AlertDescription>
                  <p>
                    If the same lines of code were changed in both branches, you'll encounter merge conflicts that need
                    to be resolved manually.
                  </p>
                  <p className="mt-2">
                    GitHub Desktop will guide you through the conflict resolution process, allowing you to choose which
                    changes to keep.
                  </p>
                </AlertDescription>
              </Alert>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Creating a Pull Request</h3>

              <p>
                Pull requests are used to propose changes to a repository, especially when contributing to projects you
                don't own or when working with a team.
              </p>

              <ol className="list-decimal pl-6 space-y-4">
                <li>Push your branch to GitHub</li>
                <li>
                  <p>In GitHub Desktop, click "Create Pull Request" (or go to the repository on GitHub.com)</p>
                  <div className="relative w-full h-64 rounded-lg overflow-hidden border mt-2">
                    <Image
                      src="/github-desktop-pr.png"
                      alt="Creating a pull request from GitHub Desktop"
                      fill
                      className="object-contain"
                    />
                  </div>
                </li>
                <li>Your browser will open to GitHub.com with the pull request form</li>
                <li>Fill in a title and description explaining your changes</li>
                <li>Select the base branch you want to merge into (usually "main")</li>
                <li>Click "Create pull request"</li>
              </ol>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Good PR Descriptions Include:</h4>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>What changes you made</li>
                      <li>Why you made them</li>
                      <li>How to test the changes</li>
                      <li>Screenshots (if applicable)</li>
                      <li>Related issues or tickets</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">PR Review Process:</h4>
                    <ul className="list-decimal pl-6 space-y-1 mt-2">
                      <li>Reviewers examine your code</li>
                      <li>They may leave comments or request changes</li>
                      <li>Address any feedback by pushing new commits</li>
                      <li>Once approved, the PR can be merged</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        <section id="ai-tool-integration" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">GitHub with AI Tools</h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Integrating GitHub Across Your AI Development Workflow</h3>

              <p>
                GitHub serves as the central hub for your code across different AI development tools. Here's how to
                integrate GitHub with various tools in the VibeCodex ecosystem:
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Image src="/v0-logo.png" alt="v0 Logo" width={24} height={24} />
                      <h4 className="font-semibold">v0</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Export directly to GitHub</li>
                      <li>Fork public v0 projects</li>
                      <li>Create new repositories</li>
                      <li>Add to existing repositories</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Image src="/cursor-logo.png" alt="Cursor Logo" width={24} height={24} />
                      <h4 className="font-semibold">Cursor</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Clone repositories directly</li>
                      <li>Built-in Git controls</li>
                      <li>Commit, push, and pull</li>
                      <li>Branch management</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Image src="/replit-logo.png" alt="Replit Logo" width={24} height={24} />
                      <h4 className="font-semibold">Replit</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Import from GitHub</li>
                      <li>Connect repositories</li>
                      <li>Sync changes</li>
                      <li>Deploy from GitHub</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Viewing Projects in GitHub Desktop</h3>

              <p>After exporting or linking your project with GitHub, you can open and manage it in GitHub Desktop:</p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>Open GitHub Desktop</li>
                <li>Click "File" &gt; "Clone Repository"</li>
                <li>Select your repository from the list or enter its URL</li>
                <li>Choose where to save it on your computer</li>
                <li>Click "Clone"</li>
              </ol>

              <div className="relative w-full h-64 rounded-lg overflow-hidden border mt-4">
                <Image
                  src="/github-desktop-clone.png"
                  alt="Cloning a repository in GitHub Desktop"
                  fill
                  className="object-contain"
                />
              </div>

              <Alert className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900/50 mt-4">
                <AlertTitle className="text-green-800 dark:text-green-400">Seamless Workflow</AlertTitle>
                <AlertDescription className="text-green-700 dark:text-green-300">
                  <p>With GitHub as your central code repository, you can:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Start a project in v0</li>
                    <li>Export to GitHub</li>
                    <li>Continue development in Cursor</li>
                    <li>Deploy from GitHub to Vercel or other platforms</li>
                    <li>All while maintaining a complete history of your changes</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </div>
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

        <section id="transition-to-cursor" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">When to Transition to Cursor</h2>

          <div className="space-y-4">
            <p>
              GitHub serves as the critical bridge between v0 and more advanced development environments like Cursor.
              While v0 is excellent for initial project creation and simple changes, you'll eventually need to
              transition to a more powerful tool like Cursor.
            </p>

            <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/50">
              <AlertTitle className="text-blue-800 dark:text-blue-400">When to make the switch</AlertTitle>
              <AlertDescription className="text-blue-700 dark:text-blue-300">
                <p className="mb-2">Consider moving from v0 to Cursor when:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your project has grown to 40-50+ files</li>
                  <li>You need to make complex changes across multiple files</li>
                  <li>You're implementing advanced features that require detailed code editing</li>
                  <li>You need to debug or troubleshoot specific issues</li>
                  <li>You want to run and test your code locally</li>
                </ul>
              </AlertDescription>
            </Alert>

            <p>
              Once you've exported your v0 project to GitHub, you're perfectly positioned to continue development in
              Cursor. Check out our{" "}
              <Link href="/guides/cursor-basics" className="text-primary hover:underline">
                Cursor Basics Guide
              </Link>{" "}
              to learn how to clone your GitHub repository and continue development in a more powerful environment.
            </p>
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
                solution="Someone else might have pushed changes you don't have. Try pulling first (Fetch origin &gt; Pull origin), resolve any conflicts, then push."
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
              title="Move to Cursor IDE"
              description="Learn how to continue your development in Cursor, a powerful AI-assisted code editor perfect for larger projects."
              link="/guides/cursor-basics"
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
