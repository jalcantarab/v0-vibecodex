import Image from "next/image"
import { cn } from "@/lib/utils"

interface ToolLogoSmallProps {
  tool: string
  className?: string
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
}

export function ToolLogoSmall({ tool, className }: ToolLogoSmallProps) {
  const config = toolConfig[tool as keyof typeof toolConfig]

  if (!config) {
    return null
  }

  return (
    <Image
      src={config.src || "/placeholder.svg"}
      alt={config.alt}
      width={16}
      height={16}
      className={cn("w-4 h-4 object-contain", className)}
    />
  )
}
