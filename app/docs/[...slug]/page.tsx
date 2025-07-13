import { Metadata } from "next"
import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { DocsBreadcrumb } from "@/components/docs-breadcrumb"
import { DocsNavigation } from "@/components/docs-navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Edit } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/seo-config"
import { headers } from "next/headers"
import { ResolvingMetadata } from "next"

interface DocsPageProps {
  params: {
    slug: string[]
  }
}

// Generate static params for all markdown files
export async function generateStaticParams() {
  const docsDir = path.join(process.cwd(), "docs")
  const paths: { slug: string[] }[] = []
  
  function walkDir(dir: string, basePath: string = "") {
    if (!fs.existsSync(dir)) return
    
    const items = fs.readdirSync(dir)
    
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        walkDir(fullPath, basePath ? `${basePath}/${item}` : item)
      } else if (item.endsWith('.md')) {
        const slug = basePath ? `${basePath}/${item.replace('.md', '')}` : item.replace('.md', '')
        paths.push({ slug: slug.split('/') })
      }
    }
  }
  
  walkDir(docsDir)
  return paths
}

// Generate metadata for each page
export async function generateMetadata({ params }: DocsPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const { frontmatter } = await getDocContent(params.slug)
  const slugPath = params.slug.join("/")
  const canonicalUrl = `${siteConfig.url}/docs/${slugPath}`
  
  return {
    title: frontmatter.title || `${params.slug.join(' / ')} | VibeCodex Docs`,
    description: frontmatter.description || `Documentation for ${params.slug.join(' / ')}`,
    keywords: frontmatter.keywords || siteConfig.keywords,
    openGraph: {
      title: frontmatter.title || `${params.slug.join(' / ')} | VibeCodex Docs`,
      description: frontmatter.description || `Documentation for ${params.slug.join(' / ')}`,
      type: "article",
      url: canonicalUrl,
      images: [siteConfig.ogImage],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title || `${params.slug.join(' / ')} | VibeCodex Docs`,
      description: frontmatter.description || `Documentation for ${params.slug.join(' / ')}`,
      images: [siteConfig.ogImage],
      creator: "@jakairos",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    metadataBase: new URL(siteConfig.url),
  }
}

// Add JSON-LD structured data for articles
function DocsJsonLd({ title, description, url }: { title: string, description: string, url: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "description": description,
    "url": url,
    "author": {
      "@type": "Person",
      "name": siteConfig.authors[0].name,
      "url": siteConfig.authors[0].url
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url
    },
    "image": siteConfig.ogImage
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  )
}

async function getDocContent(slug: string[]) {
  const ROOT_DOCS = [
    'changelog',
    'contributing',
    'security',
    'support',
    'code-of-conduct',
    'code-of-merit',
    'license',
  ];
  const slugPath = slug.join('/').toLowerCase();
  let filePath: string;
  let isRootDoc = false;

  if (ROOT_DOCS.includes(slugPath)) {
    // Map slug to root file name
    const rootFileMap: Record<string, string> = {
      'changelog': 'CHANGELOG.md',
      'contributing': 'CONTRIBUTING.md',
      'security': 'SECURITY.md',
      'support': 'SUPPORT.md',
      'code-of-conduct': 'CODE_OF_CONDUCT.md',
      'code-of-merit': 'CODE_OF_MERIT.md',
      'license': 'LICENSE',
    };
    filePath = path.join(process.cwd(), rootFileMap[slugPath]);
    isRootDoc = true;
  } else {
    filePath = path.join(process.cwd(), 'docs', ...slug) + '.md';
  }

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  let fileContent = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content: rawContent } = matter(fileContent);
  let content = rawContent;

  // Inject Back to Docs Index link for root docs if not present
  if (isRootDoc && !content.match(/\[Back to Docs Index\]\(\/docs\)/)) {
    content = content.trim() + '\n\n## [Back to Docs Index](/docs)\n';
  }

  return {
    frontmatter,
    content,
    filePath: isRootDoc ? path.basename(filePath) : path.join('docs', ...slug) + '.md',
  };
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { frontmatter, content, filePath } = await getDocContent(params.slug)
  const slugPath = params.slug.join("/")
  const canonicalUrl = `${siteConfig.url}/docs/${slugPath}`
  
  // Generate GitHub edit URL
  const githubEditUrl = `https://github.com/jalcantarab/v0-vibecodex/edit/main/${filePath}`
  
  return (
    <div className="flex flex-col min-h-screen">
      <head>
        <link rel="canonical" href={canonicalUrl} />
        <DocsJsonLd
          title={frontmatter.title || params.slug.join(' / ')}
          description={frontmatter.description || `Documentation for ${params.slug.join(' / ')}`}
          url={canonicalUrl}
        />
      </head>
      <div className="container py-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[250px_1fr] lg:gap-8">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-6 space-y-4">
              <DocsNavigation currentPath={params.slug} />
            </div>
          </aside>
          
          {/* Main Content */}
          <main className="space-y-6">
            {/* Breadcrumb */}
            <DocsBreadcrumb slug={params.slug} />
            
            {/* Page Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
                  <Edit className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">
                    {frontmatter.title || params.slug.join(' / ')}
                  </h1>
                  {frontmatter.description && (
                    <p className="text-muted-foreground mt-1">
                      {frontmatter.description}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Tags */}
              {frontmatter.tags && (
                <div className="flex flex-wrap gap-2">
                  {frontmatter.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            
            {/* Content */}
            <Card className="p-6">
              <MarkdownRenderer content={content} />
            </Card>
            
            {/* Footer Actions */}
            <div className="flex items-center justify-between pt-6 border-t">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href={githubEditUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Edit on GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contribute">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Contribute
                  </Link>
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground">
                Last updated: {frontmatter.lastModified || "Recently"}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 