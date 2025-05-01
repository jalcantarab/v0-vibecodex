"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GradientButton } from "@/components/ui/gradient-button"
import { ToolLogo } from "@/components/tool-logo"
import { toolsMockData } from "@/lib/mock-data"

export default function CloneProjectToolsPage() {
  const router = useRouter()
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [cloneUrl, setCloneUrl] = useState("")
  const [additionalNotes, setAdditionalNotes] = useState("")

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
  }, [router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedTool) return

    // Store the selected tool in localStorage
    localStorage.setItem("selectedTool", selectedTool)

    // Navigate to the prompt page
    router.push(`/projects/clone/prompt?tool=${selectedTool}`)
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
      <Link href="/clone-existing" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to website details
      </Link>

      <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Choose your AI tool</h1>
          <p className="text-muted-foreground">Select the AI tool you'd like to use to clone the website.</p>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-muted/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <CardTitle>Website to clone</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <strong className="text-sm text-muted-foreground">URL:</strong>
                <p>{cloneUrl}</p>
              </div>
              {additionalNotes && (
                <div>
                  <strong className="text-sm text-muted-foreground">Additional notes:</strong>
                  <p className="whitespace-pre-wrap">{additionalNotes}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <motion.div variants={container} className="grid gap-4">
            {toolsMockData.map((tool) => (
              <motion.div key={tool.id} variants={item}>
                <Card
                  className={`relative border-2 cursor-pointer transition-all ${
                    selectedTool === tool.id ? "border-primary" : "border-primary/20"
                  }`}
                  onClick={() => setSelectedTool(tool.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <ToolLogo toolId={tool.id} />
                        </div>
                        <div>
                          <CardTitle>{tool.name}</CardTitle>
                          <CardDescription>{tool.description}</CardDescription>
                        </div>
                      </div>
                      {selectedTool === tool.id && (
                        <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex justify-end">
            <GradientButton type="submit" size="lg" className="px-8" disabled={!selectedTool}>
              Continue to Prompt
              <ArrowRight className="ml-2 h-4 w-4" />
            </GradientButton>
          </motion.div>
        </form>
      </motion.div>
    </div>
  )
}
