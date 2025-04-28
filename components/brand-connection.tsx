import Image from "next/image"
import { cn } from "@/lib/utils"

interface BrandConnectionProps {
  className?: string
}

export function BrandConnection({ className }: BrandConnectionProps) {
  return (
    <div className={cn("flex items-center gap-2 py-2", className)}>
      <div className="text-sm text-muted-foreground">Built with ❤️ by</div>
      <a
        href="https://zentrik.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
      >
        <div className="relative h-5 w-5 rounded-full overflow-hidden">
          <Image src="/zentrik-logo.png" alt="Zentrik.ai" width={20} height={20} className="object-cover" />
        </div>
        zentrik.ai
      </a>
    </div>
  )
}
