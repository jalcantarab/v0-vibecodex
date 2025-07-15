"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Code, Zap, BookOpen, Clock } from "lucide-react";

export default function NextjsQuickstartGuide() {
  // Dynamic example: live clock
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
              <Code className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">🚀 Next.js Quickstart Guide</h1>
              <p className="text-muted-foreground">Build modern, AI-powered apps with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">shadcn/ui</Badge>
            <Badge variant="secondary">VibeCodex</Badge>
          </div>

          <Separator />

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                What You'll Learn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>How to create pages and components in Next.js 14+</li>
                <li>How to use Tailwind CSS and shadcn/ui for beautiful UIs</li>
                <li>How to add dynamic features (client/server components, API routes)</li>
                <li>How to structure your VibeCodex project</li>
                <li>How to use AI to accelerate your workflow</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Project Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
{`vibecodex/
├── app/            # Pages & layouts (App Router)
├── components/     # Reusable React components
│   ├── ui/         # shadcn/ui components
│   └── [feature]/  # Feature-specific components
├── lib/            # Utilities & helpers
├── public/         # Static assets
├── hooks/          # Custom React hooks
├── styles/         # Global styles (Tailwind)
└── docs/           # Documentation`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Create a New Page
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Add a file:</strong> <code>app/hello/page.tsx</code>
                </li>
                <li>
                  <strong>Write your component:</strong>
                  <pre className="bg-muted p-2 rounded-md text-sm mt-2 overflow-x-auto">{`
export default function HelloPage() {
  return <h1 className="text-3xl font-bold">Hello, VibeCodex! 👋</h1>;
}`}</pre>
                </li>
                <li>
                  <strong>Visit:</strong> <code>http://localhost:3000/hello</code>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Dynamic Example: Live Clock (Client Component)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-cyan-600" />
                <span className="font-mono text-lg">{now.toLocaleTimeString()}</span>
                <span className="text-muted-foreground">(This updates every second!)</span>
              </div>
              <pre className="bg-muted p-2 rounded-md text-sm mt-4 overflow-x-auto">{`
"use client";
import { useState, useEffect } from "react";

export function LiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return <span>{now.toLocaleTimeString()}</span>;
}`}</pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                API Route Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Create:</strong> <code>app/api/hello/route.ts</code>
                </li>
                <li>
                  <strong>Write your API handler:</strong>
                  <pre className="bg-muted p-2 rounded-md text-sm mt-2 overflow-x-auto">{`
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello from API!" });
}`}</pre>
                </li>
                <li>
                  <strong>Test:</strong> <code>http://localhost:3000/api/hello</code>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Dynamic Routing Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Add a file:</strong> <code>app/greet/[name]/page.tsx</code>
                </li>
                <li>
                  <strong>Write your dynamic page:</strong>
                  <pre className="bg-muted p-2 rounded-md text-sm mt-2 overflow-x-auto">{`
import { useParams } from "next/navigation";

export default function GreetPage() {
  const params = useParams();
  return <h1>Hello, {params.name}!</h1>;
}`}</pre>
                </li>
                <li>
                  <strong>Visit:</strong> <code>http://localhost:3000/greet/yourname</code>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Useful Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>
                  <Link href="https://nextjs.org/docs" target="_blank" className="text-primary hover:underline">Next.js Documentation</Link>
                </li>
                <li>
                  <Link href="https://tailwindcss.com/docs" target="_blank" className="text-primary hover:underline">Tailwind CSS Docs</Link>
                </li>
                <li>
                  <Link href="https://ui.shadcn.com/" target="_blank" className="text-primary hover:underline">shadcn/ui Docs</Link>
                </li>
                <li>
                  <Link href="https://vibecodex.dev/guides" target="_blank" className="text-primary hover:underline">VibeCodex Guides</Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="pt-6 flex flex-col gap-4">
            <Button asChild variant="gradient" size="lg" className="w-full">
              <Link href="/start">
                Start Building with Next.js <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 