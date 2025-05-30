"use client"

import { Button } from "@/components/ui/button"

export function SocialShareButtons() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://vibecodex.dev"
  const shareTitle = "VibeCodex - Build real projects with AI assistance"

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank")
  }

  const followOnMedium = () => {
    window.open("https://medium.com/@vibecodex", "_blank")
  }

  return (
    <div className="flex gap-2">
      <Button size="sm" onClick={shareOnLinkedIn} className="bg-[#0A66C2] hover:bg-[#0958a8] text-white">
        Share on LinkedIn
      </Button>
      <Button size="sm" onClick={followOnMedium} className="bg-black hover:bg-gray-800 text-white">
        Follow on Medium
      </Button>
    </div>
  )
}
