"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Github, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useThemeMounted } from "@/hooks/use-theme-mounted"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const { theme, setTheme, mounted } = useThemeMounted()

  const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "Guides", href: "/guides" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Contribute", href: "/contribute" },
    { name: "Community", href: "/community" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl bg-gradient-to-r from-cyan-500 to-violet-500 text-transparent bg-clip-text">
              VibeCodex
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href)) ||
              (item.href.startsWith("/#") && pathname === "/")

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Link
            href="https://github.com/yourusername/vibecodex"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </Link>

          <GradientButton size="sm" asChild className="hidden md:inline-flex h-10 px-5">
            <Link href="/start">Get Started</Link>
          </GradientButton>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 py-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-transparent bg-clip-text">
                    VibeCodex
                  </span>
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="px-3 py-2">
                  <div className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="px-3 py-2 border-t">
                  <div className="flex flex-col space-y-2 pt-2">
                    <GradientButton asChild className="w-full" onClick={() => setOpen(false)}>
                      <Link href="/start">Get Started</Link>
                    </GradientButton>
                    <Button variant="outline" asChild className="w-full" onClick={() => setOpen(false)}>
                      <Link
                        href="https://github.com/yourusername/vibecodex"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
