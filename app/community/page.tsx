"use client"

import Link from "next/link"
import { ArrowLeft, Github, Users, MessageSquare, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"

export default function CommunityPage() {
  return (
    <div className="container py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link href="/" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Home
      </Link>

      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community</h1>
          <p className="text-xl text-muted-foreground">
            Connect with other builders, share your projects, and learn together
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Github className="h-5 w-5 mr-2 text-primary" />
                GitHub
              </CardTitle>
              <CardDescription>Contribute to the open-source project</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Star the repository, report issues, and contribute code to help improve VibeCodex.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="https://github.com/yourusername/vibecodex" target="_blank" rel="noopener noreferrer">
                  Visit GitHub Repository
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                Discord
              </CardTitle>
              <CardDescription>Join our Discord community</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Chat with other members, get help with your projects, and share your creations.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer">
                  Join Discord Server
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-primary" />
                Contribute
              </CardTitle>
              <CardDescription>Help improve the project</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Share your feedback, suggest improvements, or contribute code to make VibeCodex better.
              </p>
              <GradientButton asChild className="w-full">
                <Link href="/contribute">Contribute to VibeCodex</Link>
              </GradientButton>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Community Showcase</h2>
          <p className="text-muted-foreground">
            Check out what others have built with VibeCodex. Share your own projects to be featured here!
          </p>

          <div className="bg-muted/50 border rounded-lg p-8 text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-medium mb-2">Community Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              Be the first to share your project and get featured in our community showcase!
            </p>
            <Button asChild>
              <Link href="/contribute">Share Your Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
