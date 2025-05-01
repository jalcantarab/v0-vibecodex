"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, Copy, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ToolLogo } from "@/components/tool-logo"
import { toolsMockData } from "@/lib/mock-data"

export default function CustomProjectPromptPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const toolId = searchParams.get("tool")

  const [projectDescription, setProjectDescription] = useState("")
  const [templateType, setTemplateType] = useState("basic")
  const [prompt, setPrompt] = useState("")
  const [copied, setCopied] = useState(false)
  const [tool, setTool] = useState<any>(null)

  useEffect(() => {
    // Retrieve the project description and template type from localStorage
    const description = localStorage.getItem("customProjectDescription")
    const template = localStorage.getItem("customProjectTemplate")

    if (description) {
      setProjectDescription(description)
    } else {
      // Redirect back to the custom project page if no description is found
      router.push("/create-custom")
    }

    if (template) {
      setTemplateType(template)
    }

    // Find the selected tool
    if (toolId) {
      const selectedTool = toolsMockData.find((t) => t.id === toolId)
      if (selectedTool) {
        setTool(selectedTool)
      }
    }

    // Generate the prompt based on the description and tool
    if (description && toolId) {
      generatePrompt(description, templateType, toolId)
    }
  }, [router, toolId, templateType])

  const generatePrompt = (description: string, template: string, tool: string) => {
    let promptText = ""

    // Base prompt with phased implementation approach
    const phasedImplementation = `
Please implement this project in phases:

Phase 1: Core UI with mocked data
- Set up the basic structure and layout
- Create key components and pages
- Use mock data for all functionality

Phase 2: Basic functionality
- Implement core interactive features
- Add state management
- Connect components together

Phase 3: Refinement and polish
- Improve responsive design
- Add animations and transitions
- Enhance user experience details
`

    if (tool === "bolt") {
      promptText = `Create a web application with the following requirements:\n\n${description}\n\n${phasedImplementation}\n\nPlease provide a complete implementation with clean code and responsive design.`
    } else if (tool === "v0") {
      promptText = `I want to create a web application with the following requirements:\n\n${description}\n\n${phasedImplementation}\n\nPlease generate a complete implementation using Next.js and Tailwind CSS with responsive design.`
    } else if (tool === "lovable") {
      promptText = `I'd like to build a web application with these requirements:\n\n${description}\n\n${phasedImplementation}\n\nCan you help me create this with clean, beginner-friendly code?`
    } else if (tool === "replit") {
      promptText = `I need to build a web application with these specifications:\n\n${description}\n\n${phasedImplementation}\n\nPlease provide a complete implementation with well-structured code and comments explaining the key parts.`
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
        href={`/projects/custom/tools`}
        className="inline-flex items-center text-sm font-medium mb-6 hover:underline"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to tool selection
      </Link>

      <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Your AI Prompt</h1>
          <p className="text-muted-foreground">
            Copy this prompt and paste it into {tool?.name} to create your custom project.
          </p>
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
          <Card>
            <CardHeader>
              <CardTitle>Generated Prompt</CardTitle>
              <CardDescription>
                This prompt has been optimized for {tool?.name} based on your project description.
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
