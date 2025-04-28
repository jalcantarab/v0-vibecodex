"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Menu, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  // Primary navigation
  const primaryNavigation = [
    { name: "Projects", href: "/projects" },
    { name: "Learning Path", href: "/learning-path" },
    { name: "Guides", href: "/guides" },
  ]

  // Secondary navigation
  const secondaryNavigation = [
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Contribute", href: "/contribute" },
    { name: "Community", href: "/community" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-80 pr-0">
        <div className="px-7">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-transparent bg-clip-text">
                VibeCodex
              </span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="px-7">
            <div className="flex flex-col space-y-3 mt-4">
              <h4 className="font-medium text-sm text-muted-foreground">Main Navigation</h4>
              {primaryNavigation.map((item) => (
                <MobileLink key={item.href} href={item.href} pathname={pathname} setOpen={setOpen}>
                  {item.name}
                </MobileLink>
              ))}
            </div>
            <div className="flex flex-col space-y-3 mt-8">
              <h4 className="font-medium text-sm text-muted-foreground">More</h4>
              {secondaryNavigation.map((item) => (
                <MobileLink key={item.href} href={item.href} pathname={pathname} setOpen={setOpen}>
                  {item.name}
                </MobileLink>
              ))}
            </div>
            <div className="flex flex-col space-y-3 mt-8">
              <h4 className="font-medium text-sm text-muted-foreground">Share</h4>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link
                    href="https://twitter.com/intent/tweet?url=https://vibecodex.dev&text=Build%20real%20projects%20with%20AI%20assistance"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share on X
                  </Link>
                </Button>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://vibecodex.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Share on LinkedIn
                </Link>
              </Button>
            </div>
            <div className="flex flex-col space-y-3 mt-8">
              <h4 className="font-medium text-sm text-muted-foreground">Links</h4>
              <MobileLink
                href="https://github.com/yourusername/vibecodex"
                pathname={pathname}
                setOpen={setOpen}
                external
              >
                <div className="flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </div>
              </MobileLink>
            </div>
            <div className="mt-8 mb-4">
              <Button className="w-full" asChild>
                <Link href="/start" onClick={() => setOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps {
  children: React.ReactNode
  href: string
  pathname: string | null
  setOpen: (open: boolean) => void
  external?: boolean
}

function MobileLink({ children, href, pathname, setOpen, external = false }: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={`text-base ${pathname === href ? "font-medium text-foreground" : "text-muted-foreground"}`}
      onClick={() => setOpen(false)}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  )
}
