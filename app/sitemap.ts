import type { MetadataRoute } from "next"
import { projectsMockData, toolsMockData } from "@/lib/mock-data"

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
    "/guides/from-v0-to-cursor", // Added the new guide here
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

  const staticRoutes = [
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
    "/guides/ai-development",
    "/guides/ai-development/planning",
    "/guides/ai-development/workflow",
    "/guides/ai-development/tools",
    "/guides/ai-development/best-practices",
    "/guides/github-basics",
    "/guides/requirements-template",
    "/guides/from-v0-to-cursor",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

  const projectRoutes = projectsMockData.flatMap((project) => {
    const projectBaseUrl = `${baseUrl}/projects/${project.id}`
    const routes = [
      {
        url: projectBaseUrl,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      },
      {
        url: `${projectBaseUrl}/complete`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.5,
      },
    ]

    // Add tool-specific project pages
    toolsMockData.forEach((tool) => {
      routes.push({
        url: `${projectBaseUrl}/${tool.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      })
    })

    return routes
  })

  return [...staticRoutes, ...projectRoutes]
}
