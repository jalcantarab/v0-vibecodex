import { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToolLogoSmall } from "@/components/tool-logo-small"
import { GlassCard } from "@/components/ui/glass-card"
import { PromptDisplay } from "@/components/ui/prompt-display"
import { 
  Code, 
  FileText, 
  Settings, 
  Lightbulb, 
  Copy, 
  CheckCircle, 
  ArrowRight,
  MessageSquare,
  Zap,
  BookOpen,
  Terminal,
  GitBranch,
  Palette,
  Shield,
  Target,
  Users,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Download
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cursor Rules & Prompt Templates | VibeCodex",
  description: "Learn how to create effective AI prompts and configure Cursor rules for optimal AI-assisted development. Master the art of communicating with AI coding tools.",
  keywords: ["cursor rules", "AI prompts", "prompt templates", "AI development", "cursor configuration"],
  openGraph: {
    title: "Cursor Rules & Prompt Templates | VibeCodex",
    description: "Master AI-assisted development with effective prompts and Cursor rules",
    images: ["/og-image.png"],
  },
}

export default function CursorRulesTemplatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Cursor Rules & Prompt Templates</h1>
                <p className="text-muted-foreground">
                  Master the art of communicating with AI coding tools
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Cursor</Badge>
              <Badge variant="secondary">AI Prompts</Badge>
              <Badge variant="secondary">Development</Badge>
              <Badge variant="secondary">Templates</Badge>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/50">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-800 dark:text-blue-400">Why This Matters</AlertTitle>
            <AlertDescription className="text-blue-700 dark:text-blue-300">
              Effective prompts and well-configured Cursor rules can dramatically improve your AI-assisted development experience. 
              Learn how to communicate clearly with AI tools to get better, more consistent results.
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid gap-8 mt-8">
          <section id="introduction" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">The Power of Clear Communication</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p>
                  AI coding tools like <ToolLogoSmall tool="cursor" /> are incredibly powerful, but their effectiveness 
                  depends heavily on how well you communicate your intentions. This guide teaches you how to create 
                  effective prompts and configure Cursor rules that will supercharge your development workflow.
                </p>
                <p>
                  Whether you're building a new feature, refactoring existing code, or debugging issues, the right 
                  prompts and rules can make the difference between hours of manual work and minutes of AI-assisted 
                  development.
                </p>
                <p className="font-semibold">
                  The key is consistency, clarity, and context. Let's learn how to master all three.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-64 rounded-lg overflow-hidden border">
                  <Image
                    src="/ai-development-hero.png"
                    alt="AI-assisted development workflow showing the power of effective prompts and rules"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      What You'll Learn
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Create effective AI prompts for different scenarios</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Configure Cursor rules for consistent AI behavior</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Use prompt templates for common development tasks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Optimize your workflow for AI-assisted development</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <Separator />

          <section id="prompt-fundamentals" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Prompt Engineering Fundamentals</h2>
            <p>
              Effective prompts are the foundation of successful AI-assisted development. Here are the key principles 
              that will help you create prompts that get the results you want.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Be Specific and Clear
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Vague prompts lead to vague results. Be specific about what you want to achieve.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-xs font-medium text-muted-foreground mb-1">❌ Vague</p>
                      <p className="text-sm">"Make this component better"</p>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-xs font-medium text-green-600 mb-1">✅ Specific</p>
                      <p className="text-sm">"Add error handling and loading states to this form component"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Provide Context
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Give the AI enough context to understand your project and requirements.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-xs font-medium text-muted-foreground mb-1">❌ No Context</p>
                      <p className="text-sm">"Create a button component"</p>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-xs font-medium text-green-600 mb-1">✅ With Context</p>
                      <p className="text-sm">"Create a button component for a React/Next.js app using Tailwind CSS and shadcn/ui"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Specify Style and Patterns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Tell the AI about your preferred coding style and patterns.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-xs font-medium text-muted-foreground mb-1">❌ No Style Guide</p>
                      <p className="text-sm">"Add a form validation function"</p>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-xs font-medium text-green-600 mb-1">✅ With Style Guide</p>
                      <p className="text-sm">"Add a form validation function using React Hook Form and Zod schemas"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Include Constraints
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Specify any constraints or requirements that must be met.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-xs font-medium text-muted-foreground mb-1">❌ No Constraints</p>
                      <p className="text-sm">"Create a data fetching hook"</p>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-xs font-medium text-green-600 mb-1">✅ With Constraints</p>
                      <p className="text-sm">"Create a data fetching hook that handles loading, error, and success states with TypeScript"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section id="cursor-rules" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Configuring Cursor Rules</h2>
            <p>
              Cursor rules are configuration files that tell the LLMs how to behave in your project. They provide 
              consistent guidance across your interactions and can be specific to areas of your project. Here are the best practices for creating effective rules.
            </p>
            
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-full h-48 rounded-lg overflow-hidden border">
                <Image
                  src="/v0-to-cursor-workflow.png"
                  alt="Workflow diagram showing the transition from v0 to Cursor with AI rules configuration"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

            <div className="space-y-6">
              <Alert className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900/50">
                <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertTitle className="text-green-800 dark:text-green-400">Pro Tip from the Community</AlertTitle>
                <AlertDescription className="text-green-700 dark:text-green-300">
                  According to the 
                  <a href="https://medium.com/@aashari/getting-better-results-from-cursor-ai-with-simple-rules-cbc87346ad88" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    community research
                  </a>, the most effective Cursor rules are simple, specific, and focused on your project's unique needs. 
                  Don't over-engineer your rules - start simple and iterate based on results. You can see more examples below and in the &nbsp;
                  <a href="https://github.com/PatrickJS/awesome-cursorrules" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Awesome Cursor Rules repository.
                  </a>
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Organizing Your Cursor Rules
                  </CardTitle>
                  <CardDescription>
                    Use the <code>.cursor/rules/</code> directory with modular <code>.mdc</code> files for AI configuration (2025+ best practice)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Place your modular rule files in <code>.cursor/rules/</code> at the project root. Each rule is a separate <code>.mdc</code> file (Markdown+Context), allowing for clear organization and easy overrides. Example:
                  </p>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Example: <code>.cursor/rules/project-overview.mdc</code></h4>
                    <pre className="text-sm whitespace-pre-wrap">{`# VibeCodex - AI Coding Starter Kit\n\n## Project Philosophy\nVibeCodex is an open-source AI coding starter kit designed to help beginners create real projects with AI assistance.\n\n## Tech Stack\n- Next.js 14+\n- TypeScript\n- Tailwind CSS\n- shadcn/ui\n\n## Key Principles\n1. Beginner-Friendly\n2. AI-First\n3. Community-Driven\n4. Production-Ready\n5. Educational\n\n## File Organization\n- app/\n- components/\n- lib/\n- public/\n- docs/\n- hooks/`}</pre>
                    <div className="mt-4">
                      <Button asChild variant="outline" size="sm">
                        <a href="/example-cursor-rules.txt" download className="inline-flex items-center">
                          <Download className="mr-2 h-4 w-4" />
                          Download Legacy Example (.cursor_rules)
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="ml-2">
                        <a href="/.cursor/rules/project-overview.mdc" download className="inline-flex items-center">
                          <Download className="mr-2 h-4 w-4" />
                          Download Modern Example (.mdc)
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-md border border-yellow-200 dark:border-yellow-900/50">
                    <h4 className="font-medium mb-2">⚠️ 2025 Update: Modular Rules</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      As of 2025, Cursor uses the <code>.cursor/rules/</code> directory with modular <code>.mdc</code> files. The old <code>.cursor_rules</code> file is still supported for legacy projects, but new projects should use the modular format for better organization, overrides, and AI context. See <a href="/docs/project-structure" className="text-primary hover:underline">Project Structure</a> for details.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Advanced Cursor Rules
                  </CardTitle>
                  <CardDescription>
                    More sophisticated rules for complex projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      For more complex projects, you can create detailed rules that cover specific patterns, 
                      dependencies, and project-specific requirements.
                    </p>
                    
                    <Tabs defaultValue="nextjs" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                        <TabsTrigger value="react">React</TabsTrigger>
                        <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="nextjs" className="space-y-4">
                        <div className="bg-muted p-4 rounded-md">
                          <h4 className="font-medium mb-2">Next.js App Router Rules</h4>
                          <pre className="text-sm whitespace-pre-wrap">{`# Next.js App Router Rules

## Project Structure
- Use the app/ directory for pages and layouts
- Place components in components/ directory
- Keep API routes in app/api/
- Use proper file naming conventions

## Data Fetching
- Use Server Components by default
- Implement proper loading.tsx files
- Handle errors with error.tsx boundaries
- Use Next.js Image component for images

## State Management
- Use React Server Components for server state
- Implement client-side state with useState/useReducer
- Consider Zustand for complex client state

## Styling
- Use Tailwind CSS for styling
- Implement dark mode with next-themes
- Use CSS modules for component-specific styles

## Performance
- Implement proper caching strategies
- Use Next.js Image optimization
- Optimize bundle size with dynamic imports`}</pre>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="react" className="space-y-4">
                        <div className="bg-muted p-4 rounded-md">
                          <h4 className="font-medium mb-2">React Component Rules</h4>
                          <pre className="text-sm whitespace-pre-wrap">{`# React Component Rules

## Component Structure
- Use functional components with hooks
- Implement proper prop types with TypeScript
- Keep components focused and single-purpose
- Use composition over inheritance

## State Management
- Use useState for local component state
- Use useReducer for complex state logic
- Implement proper error boundaries
- Use Context for shared state sparingly

## Performance Optimization
- Use React.memo for expensive components
- Implement proper dependency arrays in useEffect
- Use useCallback and useMemo appropriately
- Avoid unnecessary re-renders

## Accessibility
- Use semantic HTML elements
- Implement proper ARIA attributes
- Ensure keyboard navigation works
- Test with screen readers`}</pre>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="fullstack" className="space-y-4">
                        <div className="bg-muted p-4 rounded-md">
                          <h4 className="font-medium mb-2">Full Stack Development Rules</h4>
                          <pre className="text-sm whitespace-pre-wrap">{`# Full Stack Development Rules

## API Design
- Use RESTful conventions
- Implement proper HTTP status codes
- Use TypeScript for API types
- Implement proper error handling

## Database
- Use Prisma for database operations
- Implement proper migrations
- Use transactions for data integrity
- Implement proper indexing

## Authentication
- Use NextAuth.js for authentication
- Implement proper session management
- Use JWT tokens appropriately
- Implement proper authorization

## Security
- Validate all inputs
- Implement rate limiting
- Use HTTPS in production
- Follow security best practices`}</pre>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Community-Curated Examples
                  </CardTitle>
                  <CardDescription>
                    Proven rules from the Awesome Cursor Rules repository
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      The Awesome Cursor Rules repository contains hundreds of proven rules for different technologies. 
                      Here are some of the most popular and effective patterns:
                    </p>
                    
                    <Tabs defaultValue="react" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="react">React</TabsTrigger>
                        <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                        <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                        <TabsTrigger value="general">General</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="react" className="space-y-4">
                        <div className="bg-muted p-4 rounded-md">
                          <h4 className="font-medium mb-2">React Best Practices</h4>
                          <pre className="text-sm whitespace-pre-wrap">{`# React Development Rules

## Component Structure
- Always use functional components with hooks
- Use TypeScript for all components
- Keep components small and focused (max 200 lines)
- Use proper prop types and interfaces
- Implement proper error boundaries

## State Management
- Use useState for local component state
- Use useReducer for complex state logic
- Use Context sparingly, prefer prop drilling for simple cases
- Use custom hooks for reusable logic

## Performance
- Use React.memo for expensive components
- Implement proper dependency arrays in useEffect
- Use useCallback and useMemo appropriately
- Avoid unnecessary re-renders

## Styling
- Use Tailwind CSS for styling
- Use CSS modules for component-specific styles
- Implement responsive design
- Follow accessibility guidelines`}</pre>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="typescript" className="space-y-4">
                        <div className="bg-muted p-4 rounded-md">
                          <h4 className="font-medium mb-2">TypeScript Best Practices</h4>
                          <pre className="text-sm whitespace-pre-wrap">{`# TypeScript Development Rules

## Type Safety
- Always define proper types and interfaces
- Use strict TypeScript configuration
- Avoid 'any' type, use 'unknown' instead
- Use union types for better type safety
- Implement proper generic types

## Code Organization
- Use barrel exports (index.ts files)
- Organize types in separate files
- Use proper naming conventions
- Implement proper error handling with types

## Best Practices
- Use const assertions for readonly data
- Implement proper discriminated unions
- Use utility types (Partial, Pick, Omit)
- Avoid type assertions when possible

## Testing
- Use proper TypeScript testing patterns
- Mock types appropriately
- Test type safety with TypeScript compiler`}</pre>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="nodejs" className="space-y-4">
                        <div className="bg-muted p-4 rounded-md">
                          <h4 className="font-medium mb-2">Node.js Best Practices</h4>
                          <pre className="text-sm whitespace-pre-wrap">{`# Node.js Development Rules

## Project Structure
- Use ES modules (import/export)
- Organize code in logical directories
- Use proper file naming conventions
- Implement proper error handling

## API Development
- Use Express.js or Fastify for APIs
- Implement proper middleware patterns
- Use async/await for database operations
- Implement proper validation

## Security
- Validate all inputs
- Use environment variables for secrets
- Implement proper authentication
- Use HTTPS in production

## Performance
- Use proper caching strategies
- Implement connection pooling
- Use compression middleware
- Monitor memory usage`}</pre>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="general" className="space-y-4">
                        <div className="bg-muted p-4 rounded-md">
                          <h4 className="font-medium mb-2">General Development Rules</h4>
                          <pre className="text-sm whitespace-pre-wrap">{`# General Development Rules

## Code Quality
- Write clean, readable code
- Use meaningful variable names
- Add proper comments and documentation
- Follow DRY principles

## Git Practices
- Write descriptive commit messages
- Use conventional commit format
- Keep commits focused and atomic
- Review code before merging

## Testing
- Write unit tests for all functions
- Use proper mocking strategies
- Test edge cases and error conditions
- Maintain good test coverage

## Documentation
- Keep README files updated
- Document complex algorithms
- Include usage examples
- Maintain API documentation`}</pre>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-md">
                      <h4 className="font-medium mb-2">💡 Community Insights</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        The most successful rules from the community emphasize simplicity and specificity. 
                        Focus on your project's unique needs rather than trying to cover everything. 
                        Start with 10-15 rules and iterate based on your results.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section id="prompt-templates" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Prompt Templates</h2>
            <p>
              Use these templates as starting points for common development tasks. Customize them based on your 
              specific project requirements.
            </p>
            
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-full h-48 rounded-lg overflow-hidden border">
                <Image
                  src="/futuristic-prompt-interface.png"
                  alt="Modern AI prompt interface showing effective prompt engineering techniques"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

            <Tabs defaultValue="components" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="components">Components</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="debugging">Debugging</TabsTrigger>
                <TabsTrigger value="refactoring">Refactoring</TabsTrigger>
              </TabsList>
              
              <TabsContent value="components" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>React Component Template</CardTitle>
                      <CardDescription>Create a new React component</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PromptDisplay 
                        prompt={{
                          content: `Create a [ComponentName] component for a React/Next.js application with the following requirements:

## Component Requirements
- [Describe the component's purpose and functionality]
- [List specific features or behaviors needed]
- [Mention any props or state requirements]

## Technical Specifications
- Use TypeScript with proper type definitions
- Implement using functional components with hooks
- Use Tailwind CSS for styling
- Follow the existing project's component patterns
- Include proper accessibility attributes

## Props Interface
\`\`\`typescript
interface [ComponentName]Props {
  // Define your props here
}
\`\`\`

## Example Usage
\`\`\`tsx
<[ComponentName] prop1="value" prop2={true} />
\`\`\`

Please create the component with proper error handling, loading states if needed, and comprehensive TypeScript types.`,
                          tooltips: [
                            {
                              text: "Create a [ComponentName] component",
                              explanation: "Replace [ComponentName] with your actual component name",
                              highlightColor: "#8b5cf6"
                            },
                            {
                              text: "## Component Requirements",
                              explanation: "This section should clearly define what the component does",
                              highlightColor: "#06b6d4"
                            }
                          ]
                        }} 
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Form Component Template</CardTitle>
                      <CardDescription>Create a form with validation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PromptDisplay 
                        prompt={{
                          content: `Create a form component for [form purpose] with the following requirements:

## Form Requirements
- [List the form fields needed]
- [Describe validation requirements]
- [Mention any special behaviors]

## Technical Stack
- Use React Hook Form for form management
- Implement Zod schema for validation
- Use shadcn/ui form components
- Include proper error handling and loading states

## Validation Schema
\`\`\`typescript
const formSchema = z.object({
  // Define your validation schema
})
\`\`\`

## Form Fields
- [Field 1]: [Type] - [Validation rules]
- [Field 2]: [Type] - [Validation rules]
- [Field 3]: [Type] - [Validation rules]

Please implement with proper TypeScript types, accessibility features, and responsive design.`,
                          tooltips: [
                            {
                              text: "React Hook Form for form management",
                              explanation: "This provides better performance and easier form handling",
                              highlightColor: "#8b5cf6"
                            },
                            {
                              text: "Zod schema for validation",
                              explanation: "Type-safe validation that works well with TypeScript",
                              highlightColor: "#06b6d4"
                            }
                          ]
                        }} 
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Feature Implementation Template</CardTitle>
                      <CardDescription>Add a new feature to your application</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PromptDisplay 
                        prompt={{
                          content: `Implement a [feature name] feature for our [application type] with the following requirements:

## Feature Overview
- [Describe what the feature does]
- [List the main user stories or requirements]
- [Mention any integration points]

## Technical Requirements
- [List specific technical requirements]
- [Mention any performance considerations]
- [Include any security requirements]

## Implementation Plan
1. [Step 1: What needs to be created/modified]
2. [Step 2: Database changes if needed]
3. [Step 3: API endpoints if needed]
4. [Step 4: Frontend components]
5. [Step 5: Testing requirements]

## Files to Create/Modify
- [List specific files that need to be created or modified]

Please implement this feature following our project's patterns and conventions. Include proper error handling, loading states, and TypeScript types.`,
                          tooltips: [
                            {
                              text: "Implementation Plan",
                              explanation: "Break down the feature into manageable steps",
                              highlightColor: "#8b5cf6"
                            },
                            {
                              text: "Files to Create/Modify",
                              explanation: "Be specific about which files need changes",
                              highlightColor: "#06b6d4"
                            }
                          ]
                        }} 
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>API Integration Template</CardTitle>
                      <CardDescription>Integrate with external APIs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PromptDisplay 
                        prompt={{
                          content: `Integrate with the [API name] API for [purpose] with the following requirements:

## API Integration Requirements
- [Describe what data you need from the API]
- [Mention any authentication requirements]
- [List specific endpoints to use]

## Technical Implementation
- Use Next.js API routes for backend calls
- Implement proper error handling and retry logic
- Use TypeScript for API response types
- Cache responses appropriately

## Data Flow
1. [Step 1: How data flows through the application]
2. [Step 2: Where data is stored/processed]
3. [Step 3: How data is displayed]

## Error Handling
- Handle network errors gracefully
- Implement proper loading states
- Show user-friendly error messages

Please create the necessary API routes, types, and frontend components to integrate this API.`,
                          tooltips: [
                            {
                              text: "Next.js API routes for backend calls",
                              explanation: "Keeps API calls server-side for better security",
                              highlightColor: "#8b5cf6"
                            },
                            {
                              text: "Cache responses appropriately",
                              explanation: "Improves performance and reduces API calls",
                              highlightColor: "#06b6d4"
                            }
                          ]
                        }} 
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="debugging" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Debugging Template</CardTitle>
                      <CardDescription>Debug issues in your code</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PromptDisplay 
                        prompt={{
                          content: `Help me debug the following issue in my [application type]:

## Problem Description
- [Describe what's not working]
- [What you expected to happen]
- [What actually happened]

## Error Information
- [Paste any error messages]
- [Browser console logs if applicable]
- [Network tab information if relevant]

## Code Context
\`\`\`typescript
// Paste the relevant code here
\`\`\`

## Environment
- [Framework and version]
- [Browser and version]
- [Any relevant dependencies]

## What I've Tried
- [List debugging steps you've already taken]
- [Any solutions you've attempted]

Please help me identify the root cause and provide a solution.`,
                          tooltips: [
                            {
                              text: "Problem Description",
                              explanation: "Be as specific as possible about the issue",
                              highlightColor: "#8b5cf6"
                            },
                            {
                              text: "Code Context",
                              explanation: "Include the relevant code that's causing issues",
                              highlightColor: "#06b6d4"
                            }
                          ]
                        }} 
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Issue Template</CardTitle>
                      <CardDescription>Debug performance problems</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PromptDisplay 
                        prompt={{
                          content: `Help me optimize the performance of my [application type]:

## Performance Issue
- [Describe the performance problem]
- [What's slow or causing issues]
- [User impact of the problem]

## Current Implementation
\`\`\`typescript
// Paste the code that's causing performance issues
\`\`\`

## Performance Metrics
- [Page load times if applicable]
- [Bundle size if relevant]
- [Memory usage if applicable]
- [Network requests if relevant]

## Environment
- [Framework and version]
- [Deployment environment]
- [User devices/browsers affected]

Please analyze the code and suggest optimizations to improve performance.`,
                          tooltips: [
                            {
                              text: "Performance Metrics",
                              explanation: "Include specific measurements when possible",
                              highlightColor: "#8b5cf6"
                            },
                            {
                              text: "Current Implementation",
                              explanation: "Show the code that's causing performance issues",
                              highlightColor: "#06b6d4"
                            }
                          ]
                        }} 
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="refactoring" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Code Refactoring Template</CardTitle>
                      <CardDescription>Refactor existing code</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PromptDisplay 
                        prompt={{
                          content: `Help me refactor the following code to improve [specific improvement]:

## Current Code
\`\`\`typescript
// Paste the code you want to refactor
\`\`\`

## Refactoring Goals
- [List specific improvements you want to make]
- [Mention any performance optimizations]
- [Include maintainability improvements]

## Constraints
- [Any requirements that must be maintained]
- [Dependencies that can't be changed]
- [Backward compatibility requirements]

## Target Architecture
- [Describe the desired code structure]
- [Mention any patterns to follow]
- [Include any specific requirements]

Please refactor this code while maintaining functionality and improving the specified aspects.`,
                          tooltips: [
                            {
                              text: "Refactoring Goals",
                              explanation: "Be specific about what you want to improve",
                              highlightColor: "#8b5cf6"
                            },
                            {
                              text: "Constraints",
                              explanation: "List any requirements that must be maintained",
                              highlightColor: "#06b6d4"
                            }
                          ]
                        }} 
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Component Extraction Template</CardTitle>
                      <CardDescription>Extract reusable components</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PromptDisplay 
                        prompt={{
                          content: `Help me extract reusable components from this code:

## Current Code
\`\`\`typescript
// Paste the code that contains reusable patterns
\`\`\`

## Extraction Goals
- [Identify which parts should be extracted]
- [Mention any common patterns you see]
- [List the benefits of extraction]

## Component Requirements
- [Describe what each extracted component should do]
- [Mention any props they should accept]
- [Include any styling requirements]

## File Structure
- [Where should the new components be placed]
- [How should they be organized]
- [Any naming conventions to follow]

Please help me identify reusable patterns and create well-structured components.`,
                          tooltips: [
                            {
                              text: "Extraction Goals",
                              explanation: "Identify what can be made reusable",
                              highlightColor: "#8b5cf6"
                            },
                            {
                              text: "Component Requirements",
                              explanation: "Define clear interfaces for extracted components",
                              highlightColor: "#06b6d4"
                            }
                          ]
                        }} 
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <Separator />

          <section id="best-practices" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices</h2>
            <p>
              Follow these best practices to maximize the effectiveness of your AI-assisted development workflow. 
              These insights are based on community research and proven patterns from thousands of developers.
            </p>

            <Alert className="bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-900/50">
              <Lightbulb className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              <AlertTitle className="text-yellow-800 dark:text-yellow-400">Key Insight from Community Research</AlertTitle>
              <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                The most effective Cursor rules are <strong>simple, specific, and focused</strong>. 
                Don't try to cover everything - focus on your project's unique needs and iterate based on results. 
                Start with 10-15 rules and refine them over time.
              </AlertDescription>
            </Alert>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Document Your Rules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Keep your <code>.cursor/rules/</code> directory updated as your project evolves. Document new patterns, 
                    conventions, and requirements as they emerge. Modular rules make it easy to update and override specific behaviors.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Update rules when adding new dependencies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Document project-specific patterns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Include examples in your rules</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Iterate on Prompts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Treat prompts as living documents. Refine them based on the results you get and 
                    the feedback you receive.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Save successful prompts as templates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Analyze what works and what doesn't</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Share effective prompts with your team</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    Use Context Effectively
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Provide the AI with enough context to understand your project, but avoid overwhelming 
                    it with irrelevant information.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Reference relevant files and code</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Mention your tech stack and dependencies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Explain the problem you're solving</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5" />
                    Version Control Your Rules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Include your <code>.cursor/rules/</code> directory in version control so your team can benefit from 
                    consistent AI behavior across the project.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Commit rules changes with your code</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Review rules changes in pull requests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Document major rules changes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Start Simple, Iterate Often
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Based on community research, the most successful rules start simple and evolve with your project.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Begin with 10-15 core rules</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Focus on your project's unique needs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Refine rules based on AI output quality</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Remove rules that don't improve results</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section id="examples" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Real-World Examples</h2>
            <p>
              See how these principles work in practice with real examples from different types of projects.
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    E-commerce Project Rules
                  </CardTitle>
                  <CardDescription>
                    Rules for a Next.js e-commerce application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-md">
                    <pre className="text-sm whitespace-pre-wrap">{`# E-commerce Project Rules

## Project Overview
This is a Next.js e-commerce application with Stripe payments, user authentication, and product management.

## Code Style
- Use TypeScript for all new code
- Follow camelCase for variables and functions
- Use PascalCase for components and classes
- Prefer functional components with hooks
- Use Tailwind CSS for styling

## Architecture
- Use Next.js App Router
- Implement Server Components by default
- Use Client Components only when necessary
- Follow the existing file structure in app/ directory

## State Management
- Use React Server Components for server state
- Use Zustand for client-side state management
- Implement proper loading and error states

## Database
- Use Prisma for database operations
- Follow the existing schema patterns
- Implement proper error handling for database operations

## Authentication
- Use NextAuth.js for authentication
- Implement proper session management
- Use middleware for protected routes

## Payments
- Use Stripe for payment processing
- Implement proper webhook handling
- Use TypeScript for Stripe types

## Performance
- Optimize images with Next.js Image component
- Implement proper caching strategies
- Use dynamic imports for code splitting

## Testing
- Write unit tests for utility functions
- Test component behavior with React Testing Library
- Mock external dependencies appropriately`}</pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5" />
                    Mobile App Prompt Example
                  </CardTitle>
                  <CardDescription>
                    A prompt for creating a mobile-responsive component
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PromptDisplay 
                    prompt={{
                      content: `Create a responsive product card component for our e-commerce mobile app with the following requirements:

## Component Requirements
- Display product image, name, price, and rating
- Show "Add to Cart" button with loading state
- Implement "Quick View" functionality
- Handle out-of-stock products gracefully

## Technical Specifications
- Use TypeScript with proper type definitions
- Implement using functional components with hooks
- Use Tailwind CSS for responsive styling
- Follow mobile-first design principles
- Include proper accessibility attributes

## Props Interface
\`\`\`typescript
interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    rating: number;
    inStock: boolean;
  };
  onAddToCart: (productId: string) => Promise<void>;
  onQuickView: (productId: string) => void;
}
\`\`\`

## Responsive Design
- Mobile: Single column layout
- Tablet: Two columns
- Desktop: Three columns
- Ensure touch-friendly button sizes

Please create the component with proper error handling, loading states, and comprehensive TypeScript types.`,
                          tooltips: [
                            {
                              text: "Mobile-first design principles",
                              explanation: "Start with mobile layout and scale up",
                              highlightColor: "#8b5cf6"
                            },
                            {
                              text: "Touch-friendly button sizes",
                              explanation: "Ensure buttons are at least 44px for mobile",
                              highlightColor: "#06b6d4"
                            }
                          ]
                        }} 
                      />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    API Integration Prompt Example
                  </CardTitle>
                  <CardDescription>
                    A prompt for integrating with external APIs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PromptDisplay 
                    prompt={{
                      content: `Integrate with the Stripe API for payment processing with the following requirements:

## API Integration Requirements
- Process credit card payments securely
- Handle payment confirmation and webhooks
- Implement proper error handling for failed payments
- Support multiple payment methods

## Technical Implementation
- Use Next.js API routes for backend calls
- Implement proper error handling and retry logic
- Use TypeScript for API response types
- Cache responses appropriately
- Use environment variables for API keys

## Data Flow
1. User submits payment form
2. Frontend validates form data
3. Backend creates payment intent with Stripe
4. Frontend confirms payment with Stripe
5. Backend handles webhook for payment confirmation

## Error Handling
- Handle network errors gracefully
- Implement proper loading states
- Show user-friendly error messages
- Log errors for debugging

## Security
- Never expose API keys in frontend code
- Validate all payment data
- Implement proper CORS policies
- Use HTTPS in production

Please create the necessary API routes, types, and frontend components to integrate with Stripe.`,
                          tooltips: [
                            {
                              text: "Use environment variables for API keys",
                              explanation: "Keep sensitive data secure",
                              highlightColor: "#8b5cf6"
                            },
                            {
                              text: "Handle webhook for payment confirmation",
                              explanation: "Ensure payment status is properly tracked",
                              highlightColor: "#06b6d4"
                            }
                          ]
                        }} 
                      />
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section id="next-steps" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Next Steps</h2>
            <p>
              Now that you understand the fundamentals of AI prompts and Cursor rules, here's how to continue 
              your learning journey.
            </p>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Additional Resources
                </CardTitle>
                <CardDescription>
                  Explore these community-curated resources for more advanced techniques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Community Repositories</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a href="https://github.com/PatrickJS/awesome-cursorrules" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Awesome Cursor Rules
                          </a>
                          <span className="text-muted-foreground ml-2">30k+ stars, hundreds of examples</span>
                        </li>
                        <li>
                          <a href="https://medium.com/@aashari/getting-better-results-from-cursor-ai-with-simple-rules-cbc87346ad88" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Getting Better Results from Cursor AI
                          </a>
                          <span className="text-muted-foreground ml-2">Research on effective rule patterns</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Practice Tips</h4>
                      <ul className="space-y-2 text-sm">
                        <li>Start with the downloadable example file</li>
                        <li>Customize rules for your specific project</li>
                        <li>Test different rule combinations</li>
                        <li>Share successful patterns with your team</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-4 sm:grid-cols-2">
              <NextStepCard
                title="Practice with Real Projects"
                description="Apply these techniques to your own projects and see how they improve your development workflow."
                link="/projects"
                linkText="Browse Projects"
              />
              <NextStepCard
                title="Master Cursor IDE"
                description="Learn more about Cursor's features and how to maximize your productivity with AI assistance."
                link="/guides/cursor-basics"
                linkText="Cursor Basics Guide"
              />
              <NextStepCard
                title="Explore AI Development Workflow"
                description="Understand how AI tools fit into the broader development workflow and lifecycle."
                link="/guides/ai-development"
                linkText="AI Development Guide"
              />
              <NextStepCard
                title="Join the Community"
                description="Connect with other developers using AI tools and share your experiences and tips."
                link="/community"
                linkText="Join Community"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

interface NextStepCardProps {
  title: string
  description: string
  link: string
  linkText?: string
}

function NextStepCard({ title, description, link, linkText = "Learn More" }: NextStepCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        <div className="mt-4">
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link href={link} className="flex items-center justify-center gap-2">
              {linkText}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
