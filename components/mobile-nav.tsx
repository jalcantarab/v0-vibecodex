"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-medium">AI Coding Starter Kit</h2>
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="block rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="block rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#"
                className="block rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#"
                className="block rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="#"
                className="block rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                Community
              </Link>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-medium">Account</h2>
            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="block rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/start"
                className="block rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
