"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface SocialShareProps {
  url?: string
  title?: string
  compact?: boolean
  className?: string
}

export function SocialShare({
  url = "https://vibecodex.dev",
  title = "Build real projects with AI assistance",
  compact = false,
  className,
}: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`

  if (compact) {
    return (
      <div className={`flex gap-2 ${className}`}>
        <Button variant="outline" size="icon" asChild>
          <Link href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" className="h-4 w-4">
              <path
                fill="currentColor"
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
            <span className="sr-only">Share on X</span>
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" className="h-4 w-4">
              <path
                fill="currentColor"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
            <span className="sr-only">Share on LinkedIn</span>
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      <Button variant="outline" size="sm" asChild>
        <Link href={twitterUrl} target="_blank" rel="noopener noreferrer">
          Share on X
        </Link>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          Share on LinkedIn
        </Link>
      </Button>
    </div>
  )
}
