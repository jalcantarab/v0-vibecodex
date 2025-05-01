"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Globe, ImageIcon, Info } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { GradientButton } from "@/components/ui/gradient-button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function CloneExistingPage() {
  const router = useRouter()
  const [url, setUrl] = useState("")
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [urlError, setUrlError] = useState("")

  const validateUrl = (input: string) => {
    try {
      new URL(input)
      return true
    } catch (e) {
      return false
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate URL
    if (!url.trim()) {
      setUrlError("Please enter a URL")
      return
    }

    if (!validateUrl(url)) {
      setUrlError("Please enter a valid URL (e.g., https://example.com)")
      return
    }

    setUrlError("")
    setIsSubmitting(true)

    // Store the clone information in localStorage
    localStorage.setItem("cloneUrl", url)
    localStorage.setItem("cloneNotes", additionalNotes)

    // Navigate to the AI tool selection page
    setTimeout(() => {
      router.push("/projects/clone/tools")
    }, 500)
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
      <Link href="/start" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to project selection
      </Link>

      <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Clone an existing website</h1>
          <p className="text-muted-foreground">
            Provide the URL of a website you'd like to clone, and we'll help you recreate it.
          </p>
        </motion.div>

        <motion.div variants={item}>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Important note</AlertTitle>
            <AlertDescription>
              This feature is for learning purposes only. Make sure to respect copyright and terms of service when
              cloning websites. We recommend using this for practice and not for commercial purposes.
            </AlertDescription>
          </Alert>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <CardTitle>Website URL</CardTitle>
                </div>
                <CardDescription>Enter the full URL of the website you want to clone</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="url">URL</Label>
                    <Input
                      id="url"
                      placeholder="https://example.com"
                      value={url}
                      onChange={(e) => {
                        setUrl(e.target.value)
                        if (urlError) setUrlError("")
                      }}
                    />
                    {urlError && <p className="text-sm text-red-500">{urlError}</p>}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Add this after the URL input card */}
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  <CardTitle>Upload Screenshots</CardTitle>
                </div>
                <CardDescription>
                  Upload screenshots of the website to help the AI better understand the design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <ImageIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop screenshots here or click to browse
                      </p>
                      <p className="text-xs text-muted-foreground mb-4">
                        Recommended: Homepage, key features, and any specific elements you want to clone
                      </p>
                      <Button variant="outline" size="sm">
                        Upload Screenshots
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Note: This is a mockup of the upload functionality. In a real implementation, you would be able to
                      upload actual screenshots.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                Screenshots help the AI understand the visual design and layout of the website.
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  <CardTitle>Additional details</CardTitle>
                </div>
                <CardDescription>Provide any specific elements or features you want to focus on</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Textarea
                    placeholder="I'm particularly interested in recreating the navigation menu, hero section, and contact form..."
                    className="min-h-[100px]"
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                This information helps the AI understand which parts of the website to focus on.
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item} className="flex justify-end">
            <GradientButton type="submit" size="lg" className="px-8" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Continue to AI Tools"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </GradientButton>
          </motion.div>
        </form>
      </motion.div>
    </div>
  )
}
