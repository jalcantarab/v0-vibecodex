import Image from "next/image"
import { cn } from "@/lib/utils"

interface ToolLogoProps {
  tool: string
  className?: string
  size?: "sm" | "md" | "lg"
}

const toolConfig = {
  v0: {
    src: "/v0-logo.png",
    alt: "v0.dev",
    url: "https://v0.dev",
  },
  bolt: {
    src: "/bolt-logo.png",
    alt: "Bolt.new",
    url: "https://bolt.new",
  },
  lovable: {
    src: "/lovable-logo.svg",
    alt: "Lovable",
    url: "https://lovable.dev",
  },
  replit: {
    src: "/replit-logo.png",
    alt: "Replit",
    url: "https://replit.com",
  },
  cursor: {
    src: "/cursor-logo.png",
    alt: "Cursor",
    url: "https://cursor.sh",
  },
  github: {
    src: "/github-logo.png",
    alt: "GitHub",
    url: "https://github.com",
  },
  vercel: {
    src: "/vercel-logo.png",
    alt: "Vercel",
    url: "https://vercel.com",
  },
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
}

export function ToolLogo({ tool, className, size = "md" }: ToolLogoProps) {
  const config = toolConfig[tool as keyof typeof toolConfig]

  if (!config) {
    return null
  }

  return (
    <Image
      src={config.src || "/placeholder.svg"}
      alt={config.alt}
      width={size === "sm" ? 24 : size === "md" ? 32 : 48}
      height={size === "sm" ? 24 : size === "md" ? 32 : 48}
      className={cn(sizeClasses[size], "object-contain", className)}
    />
  )
}
