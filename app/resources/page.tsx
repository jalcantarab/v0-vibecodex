import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, ListChecks, Sparkles, ExternalLink, Lightbulb } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Resources & Tips</h1>
              <p className="text-muted-foreground">Curated checklists, prompt samples, expert tips, and external links to help you go further with VibeCodex and AI development.</p>
            </div>
          </div>

          <Separator />

          {/* Checklists & Tips */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2"><ListChecks className="h-5 w-5 text-cyan-600" /> Checklists & Tips</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Prompting</Badge>
                    Top Prompting Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Be specific about your requirements and constraints.</li>
                    <li>Use step-by-step instructions for complex tasks.</li>
                    <li>Iterate: Refine your prompt based on results.</li>
                    <li>Ask for code comments and explanations.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Checklist</Badge>
                    Launch Readiness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>All pages/components have clear names</li>
                    <li>TypeScript types are defined for all props</li>
                    <li>SEO metadata is set for each page</li>
                    <li>Accessibility (a11y) checks are complete</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Prompt Samples */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Sparkles className="h-5 w-5 text-cyan-600" /> Prompt Samples</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Generate a Responsive Card Component</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">{`Prompt:
Create a responsive Card component using shadcn/ui and Tailwind CSS. The card should have a title, description, and a call-to-action button. Use TypeScript and include code comments.`}</pre>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Refactor for Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-2 rounded-md text-sm overflow-x-auto">{`Prompt:
Refactor this component to improve accessibility. Add ARIA labels, ensure keyboard navigation, and check color contrast.`}</pre>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Articles & Deep Dives */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2"><BookOpen className="h-5 w-5 text-cyan-600" /> Articles & Deep Dives</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>How to Rapidly Iterate with AI Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Learn strategies for fast prototyping and iteration using VibeCodex and AI assistants.</p>
                  <Link href="/docs/guides/development-workflow" className="text-primary hover:underline">Read the workflow guide</Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Component Patterns for Beginners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Explore best practices for structuring React components in a beginner-friendly way.</p>
                  <Link href="/guides/nextjs-quickstart" className="text-primary hover:underline">See the Next.js Quickstart</Link>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* External Links */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2"><ExternalLink className="h-5 w-5 text-cyan-600" /> External Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Jorge's Webinar: Rapid Iteration with AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Watch Jorge's session on how to iterate quickly and effectively with AI-powered tools.</p>
                  <a href="https://www.youtube.com/watch?v=YOUR_WEBINAR_LINK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                    Watch on YouTube <ExternalLink className="h-4 w-4 inline" />
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Next.js Official Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                    Visit Next.js Docs <ExternalLink className="h-4 w-4 inline" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
