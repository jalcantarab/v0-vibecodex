import { siteConfig } from "@/lib/seo-config"

export default async function sitemap() {
  const routes = ["", "/projects", "/start", "/contribute"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes]
}
