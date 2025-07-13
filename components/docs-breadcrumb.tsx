import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface DocsBreadcrumbProps {
  slug: string[]
  className?: string
}

export function DocsBreadcrumb({ slug, className }: DocsBreadcrumbProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    ...slug.map((segment, index) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      href: `/docs/${slug.slice(0, index + 1).join('/')}`,
    })),
  ]

  return (
    <nav className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}>
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
          {index === 0 && <Home className="h-4 w-4 mr-1" />}
          {index === breadcrumbs.length - 1 ? (
            <span className="font-medium text-foreground">{crumb.label}</span>
          ) : (
            <Link
              href={crumb.href}
              className="hover:text-foreground transition-colors"
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
} 