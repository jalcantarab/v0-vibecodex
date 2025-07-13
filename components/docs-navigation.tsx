import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Folder } from "lucide-react"
import { getDocsTree, DocsNode } from "@/lib/getDocsTree"

interface DocsNavigationProps {
  currentPath: string[]
  className?: string
}

function renderTree(nodes: DocsNode[], currentPathString: string, depth = 0) {
  return (
    <ul className={cn(depth === 0 ? "space-y-1" : "ml-4 space-y-1")}> 
      {nodes.map((node) => {
        if (node.type === "folder" && node.children && node.children.length > 0) {
          return (
            <li key={node.path} className="">
              <div className={cn("flex items-center gap-2 text-muted-foreground font-semibold text-sm mt-2", depth > 0 && "pl-2")}> 
                <Folder className="h-4 w-4" />
                {node.title || node.name}
              </div>
              {renderTree(node.children, currentPathString, depth + 1)}
            </li>
          )
        } else if (node.type === "file") {
          const isActive = currentPathString === `/docs/${node.path}`
          return (
            <li key={node.path}>
              <Link
                href={`/docs/${node.path}`}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted",
                  isActive && "bg-muted font-medium text-foreground"
                )}
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

export function DocsNavigation({ currentPath, className }: DocsNavigationProps) {
  const currentPathString = `/docs/${currentPath.join('/')}`
  const tree = getDocsTree()

  return (
    <nav className={cn("space-y-4", className)}>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Documentation</CardTitle>
        </CardHeader>
        <CardContent>
          {renderTree(tree, currentPathString)}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Quick Links</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Link
            href="/guides"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted"
          >
            <FileText className="h-4 w-4" />
            Guides
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted"
          >
            <Folder className="h-4 w-4" />
            Projects
          </Link>
          <Link
            href="/contribute"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted"
          >
            <FileText className="h-4 w-4" />
            Contribute
          </Link>
        </CardContent>
      </Card>
    </nav>
  )
} 