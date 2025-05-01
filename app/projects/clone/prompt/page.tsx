"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, Copy, ExternalLink, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ToolLogo } from "@/components/tool-logo"
import { toolsMockData } from "@/lib/mock-data"

export default function CloneProjectPromptPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const toolId = searchParams.get("tool")

  const [cloneUrl, setCloneUrl] = useState("")
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [prompt, setPrompt] = useState("")
  const [copied, setCopied] = useState(false)
  const [tool, setTool] = useState<any>(null)

  useEffect(() => {
    // Retrieve the clone information from localStorage
    const url = localStorage.getItem("cloneUrl")
    const notes = localStorage.getItem("cloneNotes")

    if (url) {
      setCloneUrl(url)
    } else {
      // Redirect back to the clone page if no URL is found
      router.push("/clone-existing")
    }

    if (notes) {
      setAdditionalNotes(notes)
    }

    // Find the selected tool
    if (toolId) {
      const selectedTool = toolsMockData.find((t) => t.id === toolId)
      if (selectedTool) {
        setTool(selectedTool)
      }
    }

    // Generate the prompt based on the URL, notes, and tool
    if (url && toolId) {
      generatePrompt(url, notes || "", toolId)
    }
  }, [router, toolId])

  const generatePrompt = (url: string, notes: string, tool: string) => {
    let promptText = ""

    const notesSection = notes ? `\n\nAdditional focus areas:\n${notes}` : ""

    // Base prompt with phased implementation approach
    const phasedImplementation = `
Please implement this clone in phases:

Phase 1: Core UI structure
- Set up the basic layout and components
- Focus on visual appearance and responsive design
- Use placeholder content where needed

Phase 2: Interactive elements
- Implement navigation and user interactions
- Add state management for interactive components
- Create smooth transitions and animations

Phase 3: Functionality and refinement
- Implement core functionality
- Add realistic data handling
- Polish the user experience
`

    if (tool === "bolt") {
      promptText = `I want to clone the website at ${url} as a learning exercise. Please recreate the main functionality and design of this website.${notesSection}\n\n${phasedImplementation}\n\nPlease provide a complete implementation with clean code and responsive design.`
    } else if (tool === "v0") {
      promptText = `I want to clone the website at ${url} as a learning exercise. Please recreate the main functionality and design of this website using Next.js and Tailwind CSS.${notesSection}\n\n${phasedImplementation}\n\nPlease generate a complete implementation with responsive design.`
    } else if (tool === "lovable") {
      promptText = `I'd like to recreate the website at ${url} as a learning project. Can you help me build a similar website?${notesSection}\n\n${phasedImplementation}\n\nPlease use beginner-friendly code and explain key concepts.`
    } else if (tool === "replit") {
      promptText = `I need to clone the website at ${url} for educational purposes. Please help me recreate the main features and design.${notesSection}\n\n${phasedImplementation}\n\nPlease provide a complete implementation with well-structured code and comments explaining the key parts.`
    }

    setPrompt(promptText)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const openTool = () => {
    if (tool && tool.linkPattern) {
      window.open(tool.linkPattern, "_blank")
    }
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="container max-w-4xl py-10">
      <Link
        href={`/projects/clone/tools`}
        className="inline-flex items-center text-sm font-medium mb-6 hover:underline"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to tool selection
      </Link>

      <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Your AI Prompt</h1>
          <p className="text-muted-foreground">Copy this prompt and paste it into {tool?.name} to clone the website.</p>
        </motion.div>

        {tool && (
          <motion.div variants={item} className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <ToolLogo toolId={tool.id} />
            </div>
            <div>
              <h2 className="text-xl font-bold">{tool.name}</h2>
              <p className="text-muted-foreground">{tool.description}</p>
            </div>
          </motion.div>
        )}

        <motion.div variants={item}>
          <Card className="bg-muted/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <CardTitle>Website to clone</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>{cloneUrl}</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle>Generated Prompt</CardTitle>
              <CardDescription>
                This prompt has been optimized for {tool?.name} based on the website you want to clone.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">{prompt}</div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={copyToClipboard}>
                <Copy className="mr-2 h-4 w-4" />
                {copied ? "Copied!" : "Copy to Clipboard"}
              </Button>
              <Button onClick={openTool}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Open {tool?.name}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-2">
                <li>Copy the prompt above</li>
                <li>Open {tool?.name} using the button above</li>
                <li>Paste the prompt into {tool?.name}'s input field</li>
                <li>Review and refine the generated code</li>
                <li>Download or deploy your project</li>
              </ol>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
