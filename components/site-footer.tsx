import Link from "next/link"
import { Github } from "lucide-react"
import { BrandConnection } from "@/components/brand-connection"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="font-bold text-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-transparent bg-clip-text"
            >
              VibeCodex
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            An open-source project to help everyone build with AI—no coding required.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/yourusername/vibecodex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://discord.gg/yourinvite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 9a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h4" />
                <circle cx="15" cy="12" r="1" />
                <circle cx="18" cy="10" r="1" />
                <circle cx="18" cy="14" r="1" />
                <circle cx="21" cy="12" r="1" />
              </svg>
              <span className="sr-only">Discord</span>
            </Link>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Project</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contribute
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guides" className="text-muted-foreground hover:text-foreground transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/ai-development"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Development
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://github.com/yourusername/vibecodex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/yourinvite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contributors
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/license" className="text-muted-foreground hover:text-foreground transition-colors">
                  License
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t">
        <p className="text-xs text-muted-foreground md:order-1 md:ml-auto">
          © {new Date().getFullYear()} VibeCodex. Released under the MIT License.
        </p>
        <div className="md:order-0">
          <BrandConnection />
        </div>
      </div>
    </footer>
  )
}
