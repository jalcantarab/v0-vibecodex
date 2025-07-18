import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FileText, Folder, ArrowRight } from "lucide-react"
import { getDocsTree, DocsNode } from "@/lib/getDocsTree"

export const metadata: Metadata = {
  title: "Documentation | VibeCodex",
  description: "Comprehensive documentation for VibeCodex - AI coding starter kit. Learn how to build amazing projects with AI assistance.",
  keywords: ["vibecodex", "documentation", "ai development", "guides", "tutorials"],
  openGraph: {
    title: "Documentation | VibeCodex",
    description: "Comprehensive documentation for VibeCodex - AI coding starter kit",
    images: ["/og-image.png"],
  },
}

function renderDocsIndex(nodes: DocsNode[], depth = 0) {
  return (
    <ul className={depth === 0 ? "space-y-2" : "ml-4 space-y-1"}>
      {nodes.map((node) => {
        if (node.type === "folder" && node.children && node.children.length > 0) {
          return (
            <li key={node.path} className="">
              <div className="flex items-center gap-2 text-muted-foreground font-semibold text-base mt-2">
                <Folder className="h-4 w-4" />
                {node.title || node.name}
              </div>
              {renderDocsIndex(node.children, depth + 1)}
            </li>
          )
        } else if (node.type === "file") {
          return (
            <li key={node.path}>
              <Link
                href={`/docs/${node.path}`}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-base transition-colors hover:bg-muted"
              >
                <FileText className="h-4 w-4" />
                {node.title || node.name}
              </Link>
            </li>
          )
        }
        return null
      })}
    </ul>
  )
}

export default function DocsIndexPage() {
  const tree = getDocsTree()
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
                <p className="text-muted-foreground">
                  Everything you need to know about VibeCodex and AI-assisted development
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Comprehensive</Badge>
              <Badge variant="secondary">Up-to-date</Badge>
              <Badge variant="secondary">Community-driven</Badge>
            </div>
          </div>

          <Separator />

          {/* Dynamic Docs Index */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                All Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderDocsIndex(tree)}
            </CardContent>
          </Card>

          <Separator />

          {/* Footer */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">Need Help?</h3>
            <p className="text-muted-foreground">
              Can't find what you're looking for? Check out our community resources or contribute to the documentation.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="/community">
                  Community
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contribute">
                  Contribute
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
