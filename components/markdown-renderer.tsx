"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkBreaks from "remark-breaks"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Copy, ExternalLink, Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { toast } from "@/components/ui/use-toast"

// Import highlight.js styles
import "highlight.js/styles/github-dark.css"

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: "Code has been copied to your clipboard.",
    })
  }

  return (
    <div className={cn("prose prose-neutral dark:prose-invert max-w-none", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          // Headings with consistent styling
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold tracking-tight mb-6 mt-8 first:mt-0 border-b pb-2">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8 first:mt-0 border-b pb-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mb-3 mt-6 first:mt-0">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold mb-2 mt-4 first:mt-0">
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-base font-semibold mb-2 mt-4 first:mt-0">
              {children}
            </h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-sm font-semibold mb-2 mt-4 first:mt-0">
              {children}
            </h6>
          ),

          // Paragraphs with proper spacing
          p: ({ children }) => (
            <p className="mb-4 leading-7 text-muted-foreground">
              {children}
            </p>
          ),

          // Lists with proper styling
          ul: ({ children }) => (
            <ul className="mb-4 ml-6 list-disc space-y-2">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 ml-6 list-decimal space-y-2">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-muted-foreground">
              {children}
            </li>
          ),

          // Code blocks with syntax highlighting and copy button
          pre: ({ children, ...props }) => {
            const codeContent = React.Children.toArray(children)
              .map((child) => {
                if (React.isValidElement(child) && child.props.children) {
                  return typeof child.props.children === 'string' 
                    ? child.props.children 
                    : React.Children.toArray(child.props.children).join('')
                }
                return ''
              })
              .join('')

            return (
              <div className="relative group mb-4">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm border" {...props}>
                  {children}
                </pre>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => copyToClipboard(codeContent)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            )
          },

          // Inline code with proper styling
          code: ({ children, className, ...props }) => {
            const isInline = !className?.includes('language-')
            
            if (isInline) {
              return (
                <code 
                  className="bg-muted px-2 py-1 rounded text-sm font-mono border"
                  {...props}
                >
                  {children}
                </code>
              )
            }
            
            // For code blocks, return as is (handled by pre)
            return (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },

          // Tables with proper styling
          table: ({ children }) => (
            <div className="mb-4 overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody>
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-border">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="p-3 text-left font-semibold text-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="p-3 text-muted-foreground">
              {children}
            </td>
          ),

          // Blockquotes with alert styling
          blockquote: ({ children }) => (
            <Alert className="mb-4 border-l-4 border-l-violet-500">
              <Info className="h-4 w-4" />
              <AlertDescription>
                {children}
              </AlertDescription>
            </Alert>
          ),

          // Links with proper styling
          a: ({ href, children, ...props }) => {
            const isExternal = href?.startsWith('http')
            const isInternal = href?.startsWith('/')
            
            if (isExternal) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                  {...props}
                >
                  {children}
                  <ExternalLink className="h-3 w-3" />
                </a>
              )
            }
            
            if (isInternal) {
              return (
                <Link
                  href={href}
                  className="text-primary hover:underline"
                  {...props}
                >
                  {children}
                </Link>
              )
            }
            
            return (
              <a
                href={href}
                className="text-primary hover:underline"
                {...props}
              >
                {children}
              </a>
            )
          },

          // Horizontal rules
          hr: () => (
            <Separator className="my-8" />
          ),

          // Images with proper styling
          img: ({ src, alt, ...props }) => (
            <div className="mb-4">
              <img
                src={src}
                alt={alt}
                className="rounded-lg border max-w-full h-auto"
                {...props}
              />
              {alt && (
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  {alt}
                </p>
              )}
            </div>
          ),

          // Strong and emphasis
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-foreground">
              {children}
            </em>
          ),

          // Custom components for special markdown patterns
          // Handle special alert patterns like > **Note:** or > **Warning:**
          // This will be processed by the blockquote handler above
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
} 