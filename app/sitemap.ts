import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vibecodex.com"

  // Static pages
  const staticPages = [
    "",
    "/projects",
    "/guides",
    "/community",
    "/contribute",
    "/start",
    "/learning-path",
    "/license",
    "/privacy",
    "/terms",
  ]

  // Guide pages
  const guidePages = [
    "/guides/ai-development",
    "/guides/ai-development/planning",
    "/guides/ai-development/workflow",
    "/guides/ai-development/tools",
    "/guides/ai-development/best-practices",
    "/guides/github-basics",
    "/guides/requirements-template",
  ]

  // Project pages
  const projectPages = [
    "/projects/kanban-board",
    "/projects/personal-dashboard",
    "/projects/product-landing",
    "/projects/content-management",
    "/projects/expense-tracker",
    "/projects/recipe-finder",
  ]

  // Tool-specific project pages
  const toolPages = ["bolt", "v0", "lovable", "replit"]
  const projectToolPages = projectPages.flatMap((project) => toolPages.map((tool) => `${project}/${tool}`))

  // Completion pages
  const completionPages = projectPages.map((project) => `${project}/complete`)

  const allPages = [...staticPages, ...guidePages, ...projectPages, ...projectToolPages, ...completionPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1 : page.startsWith("/projects") ? 0.8 : 0.6,
  }))
}
