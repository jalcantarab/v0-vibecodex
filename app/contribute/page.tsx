"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft, Github, MessageSquare, Code, ImageIcon, ThumbsUp, AlertCircle } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function ContributePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("general")
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the feedback to a server
    setFeedbackSubmitted(true)
    setTimeout(() => setFeedbackSubmitted(false), 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="px-3 py-1 border-violet-200 bg-violet-100/50 text-violet-800 dark:border-violet-800 dark:bg-violet-900/20 dark:text-violet-300"
              >
                Open Source
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 border-cyan-200 bg-cyan-100/50 text-cyan-800 dark:border-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-300"
              >
                Community-Driven
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contribute to the Project</h1>
            <p className="text-xl text-muted-foreground">
              Help us improve the AI Coding Starter Kit through code, feedback, or vibe contributions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What are Vibe Contributions?</CardTitle>
                  <CardDescription>
                    Not all contributions need to be code. We value your feedback and ideas just as much!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Vibe contributions are non-code contributions that help improve the project's overall experience,
                    usability, and community feel. These can include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Feedback on the user interface and experience</li>
                    <li>Suggestions for new features or improvements</li>
                    <li>Documentation improvements or corrections</li>
                    <li>Sharing your experience using the toolkit</li>
                    <li>Reporting bugs or issues you encounter</li>
                    <li>Creating tutorials or guides for others</li>
                  </ul>
                  <p className="mt-4">
                    We aggregate all feedback and run it through our AI assistant to help prioritize and implement
                    changes. Your input directly shapes the future of this project!
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-amber-800 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-300">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm">
                        <strong>Note:</strong> While we use AI to help process feedback, all decisions are made by human
                        maintainers. Prompt injection attempts will be filtered out. We're here to build something
                        awesome together!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="general">General Feedback</TabsTrigger>
                  <TabsTrigger value="page">Page Feedback</TabsTrigger>
                  <TabsTrigger value="code">Code Feedback</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>General Project Feedback</CardTitle>
                      <CardDescription>
                        Share your thoughts on the overall project, concept, or experience
                      </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmitFeedback}>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="feedback-type">Feedback Type</Label>
                          <select
                            id="feedback-type"
                            className="w-full p-2 border rounded-md bg-background"
                            defaultValue="suggestion"
                          >
                            <option value="suggestion">Suggestion</option>
                            <option value="bug">Bug Report</option>
                            <option value="question">Question</option>
                            <option value="praise">Praise</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="feedback-text">Your Feedback</Label>
                          <Textarea
                            id="feedback-text"
                            placeholder="Share your thoughts, ideas, or experiences..."
                            className="min-h-[150px]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email (optional)</Label>
                          <Input id="email" type="email" placeholder="your@email.com" />
                          <p className="text-xs text-muted-foreground">
                            We'll only use this to follow up on your feedback if needed
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button type="submit" className="w-full">
                          {feedbackSubmitted ? (
                            <>
                              <ThumbsUp className="mr-2 h-4 w-4" />
                              Feedback Submitted!
                            </>
                          ) : (
                            <>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Submit Feedback
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </TabsContent>
                <TabsContent value="page" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Page-Specific Feedback</CardTitle>
                      <CardDescription>Share feedback about a specific page or feature in the project</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmitFeedback}>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="page-url">Page URL or Name</Label>
                          <Input id="page-url" placeholder="e.g., /projects or Project Overview Page" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="page-feedback">Your Feedback</Label>
                          <Textarea
                            id="page-feedback"
                            placeholder="What would you improve about this page?"
                            className="min-h-[150px]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="page-screenshot">Upload Screenshot (optional)</Label>
                          <Input id="page-screenshot" type="file" accept="image/*" />
                          <p className="text-xs text-muted-foreground">
                            Visual feedback helps us understand your suggestions better
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button type="submit" className="w-full">
                          {feedbackSubmitted ? (
                            <>
                              <ThumbsUp className="mr-2 h-4 w-4" />
                              Feedback Submitted!
                            </>
                          ) : (
                            <>
                              <ImageIcon className="mr-2 h-4 w-4" />
                              Submit Page Feedback
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </TabsContent>
                <TabsContent value="code" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Code Feedback</CardTitle>
                      <CardDescription>Suggest improvements to the codebase or report technical issues</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmitFeedback}>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="code-file">File Path or Component</Label>
                          <Input id="code-file" placeholder="e.g., app/page.tsx or ToolLogo component" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="code-feedback">Your Feedback</Label>
                          <Textarea
                            id="code-feedback"
                            placeholder="Describe the issue or improvement..."
                            className="min-h-[150px]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="code-suggestion">Code Suggestion (optional)</Label>
                          <Textarea
                            id="code-suggestion"
                            placeholder="Paste your suggested code here..."
                            className="min-h-[100px] font-mono text-sm"
                          />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button type="submit" className="w-full">
                          {feedbackSubmitted ? (
                            <>
                              <ThumbsUp className="mr-2 h-4 w-4" />
                              Feedback Submitted!
                            </>
                          ) : (
                            <>
                              <Code className="mr-2 h-4 w-4" />
                              Submit Code Feedback
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>GitHub Contributions</CardTitle>
                  <CardDescription>Contribute directly to the codebase</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    If you're comfortable with code, you can contribute directly to the project on GitHub. Here's how to
                    get started:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Fork the repository</li>
                    <li>Create a new branch for your feature</li>
                    <li>Make your changes</li>
                    <li>Submit a pull request</li>
                  </ol>
                  <div className="flex justify-center mt-4">
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href="https://github.com/jalcantarab/v0-vibecodex"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contribution Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Code Contributions</h3>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Follow the existing code style and patterns in the implementation-notes.md file</li>
                      <li>Write clear commit messages</li>
                      <li>Include tests for new features</li>
                      <li>Update documentation as needed</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Feedback Guidelines</h3>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Be specific and constructive</li>
                      <li>Include screenshots or examples when possible</li>
                      <li>Focus on user experience and accessibility</li>
                      <li>Consider different skill levels and use cases</li>
                      <li>Reference the implementation-notes.md file for project philosophy and design language</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Join the Community</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Connect with other contributors and users:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" asChild className="w-full">
                      <Link href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2"
                        >
                          <path d="M18 9a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h4" />
                          <circle cx="15" cy="12" r="1" />
                          <circle cx="18" cy="10" r="1" />
                          <circle cx="18" cy="14" r="1" />
                          <circle cx="21" cy="12" r="1" />
                        </svg>
                        Discord
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="https://x.com/jorgeakairos" target="_blank" rel="noopener noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                        Twitter
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
