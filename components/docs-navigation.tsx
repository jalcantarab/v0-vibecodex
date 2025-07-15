import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Folder, ArrowLeft, ChevronDown, ChevronRight } from "lucide-react"
import { getDocsTree, DocsNode } from "@/lib/getDocsTree"

interface DocsNavigationProps {
  currentPath: string[]
  className?: string
}

function getSectionFromPath(tree: DocsNode[], currentPath: string[]): { section: DocsNode | null, sectionPath: string } {
  // Find the top-level folder or file that matches the first segment
  if (!currentPath.length) return { section: null, sectionPath: "" }
  const first = currentPath[0]
  for (const node of tree) {
    if (node.type === "folder" && node.name === first) {
      return { section: node, sectionPath: node.path }
    }
    if (node.type === "file" && node.name === first) {
      return { section: node, sectionPath: node.path }
    }
  }
  return { section: null, sectionPath: "" }
}

function renderTree(nodes: DocsNode[], currentPathString: string, expandedPath: string, depth = 0) {
  return (
    <ul className={cn(depth === 0 ? "space-y-1" : "ml-4 space-y-1")}> 
      {nodes.map((node) => {
        if (node.type === "folder" && node.children && node.children.length > 0) {
          const isExpanded = expandedPath.startsWith(node.path)
          return (
            <li key={node.path} className="">
              <div className={cn(
                "flex items-center gap-2 text-muted-foreground font-semibold text-sm mt-2 cursor-pointer",
                isExpanded && "text-primary"
              )}> 
                {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                <Folder className="h-4 w-4" />
                {node.title || node.name}
              </div>
              {isExpanded && renderTree(node.children, currentPathString, expandedPath, depth + 1)}
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
                  isActive && "bg-muted font-medium text-primary"
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
  // Use getDocsTree() to get the docs tree for navigation
  const docsTree = getDocsTree();
  const { section, sectionPath } = getSectionFromPath(docsTree, currentPath)
  const sectionName = section ? (section.title || section.name) : "Documentation"

  // Breadcrumb logic
  const breadcrumb = [
    { name: "Documentation", href: "/docs" },
    ...(section ? [{ name: sectionName, href: `/docs/${sectionPath}` }] : [])
  ]

  return (
    <nav className={cn("space-y-4", className)}>
      <Card>
        <CardHeader className="pb-2 flex flex-col gap-1">
          <Link href="/docs" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-3 w-3" /> Back to Docs Index
          </Link>
          <div className="text-xs text-muted-foreground mt-1">
            {breadcrumb.map((b, i) => (
              <span key={b.href}>
                <Link href={b.href} className="hover:underline text-foreground font-medium">{b.name}</Link>
                {i < breadcrumb.length - 1 && <span className="mx-1">/</span>}
              </span>
            ))}
          </div>
          <CardTitle className="text-sm font-bold mt-2">You are in: <span className="text-primary">{sectionName}</span></CardTitle>
        </CardHeader>
        <CardContent>
          {/* Show all top-level sections, but only expand the current one */}
          <ul className="space-y-1">
            {docsTree.map((node) => {
              if (node.type === "folder") {
                const isCurrentSection = node.path === sectionPath
                return (
                  <li key={node.path}>
                    <div className={cn(
                      "flex items-center gap-2 font-semibold text-sm mt-2",
                      isCurrentSection ? "text-primary" : "text-muted-foreground"
                    )}>
                      <Folder className="h-4 w-4" />
                      {node.title || node.name}
                    </div>
                    {isCurrentSection && renderTree(node.children || [], currentPathString, sectionPath, 1)}
                  </li>
                )
              } else if (node.type === "file") {
                // Top-level file
                const isActive = currentPathString === `/docs/${node.path}`
                return (
                  <li key={node.path}>
                    <Link
                      href={`/docs/${node.path}`}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted",
                        isActive && "bg-muted font-medium text-primary"
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