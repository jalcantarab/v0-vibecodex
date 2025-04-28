import { Github } from "lucide-react"

interface ToolLogoSmallProps {
  toolId: string
  className?: string
}

export function ToolLogoSmall({ toolId, className = "" }: ToolLogoSmallProps) {
  switch (toolId) {
    case "v0":
      return <img src="/v0-logo.png" alt="v0" className={`h-4 w-4 ${className}`} />
    case "cursor":
      return <img src="/bolt-logo.png" alt="Cursor" className={`h-4 w-4 ${className}`} />
    case "github":
      return <Github className={`h-4 w-4 ${className}`} />
    case "vercel":
      return <img src="/vercel-logo.png" alt="Vercel" className={`h-4 w-4 ${className}`} />
    default:
      return null
  }
}
