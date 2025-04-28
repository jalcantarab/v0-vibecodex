"use client"

import { Button } from "@/components/ui/button"

export function SocialShareButtons() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://vibecodex.dev"
  const shareTitle = "VibeCodex - Build real projects with AI assistance"

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      "_blank",
    )
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank")
  }

  return (
    <div className="flex gap-2">
      <Button size="sm" onClick={shareOnTwitter} className="bg-[#1DA1F2] hover:bg-[#1a91da] text-white">
        Share on X
      </Button>
      <Button size="sm" onClick={shareOnLinkedIn} className="bg-[#0A66C2] hover:bg-[#0958a8] text-white">
        Share on LinkedIn
      </Button>
    </div>
  )
}
