import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface DocsNode {
  type: 'file' | 'folder';
  name: string; // fallback name (filename or folder)
  path: string; // e.g. 'guides/ai-tools-integration'
  title?: string; // from frontmatter
  order?: number; // from frontmatter
  children?: DocsNode[];
}

export function getDocsTree(dir = 'docs', basePath = ''): DocsNode[] {
  const fullDir = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullDir)) return [];
  return fs.readdirSync(fullDir)
    .filter((item) => !item.startsWith('.'))
    .map((item) => {
      const itemPath = path.join(fullDir, item);
      const relPath = basePath ? `${basePath}/${item}` : item;
      if (fs.statSync(itemPath).isDirectory()) {
        const children = getDocsTree(path.join(dir, item), relPath);
        return {
          type: 'folder',
          name: item,
          path: relPath,
          children: children.sort(sortDocsNodes),
        };
      } else if (item.endsWith('.md')) {
        const fileContent = fs.readFileSync(itemPath, 'utf8');
        const { data } = matter(fileContent);
        return {
          type: 'file',
          name: item.replace('.md', ''),
          path: relPath.replace('.md', ''),
          title: data.title || undefined,
          order: typeof data.order === 'number' ? data.order : undefined,
        };
      }
      return null;
    })
    .filter(Boolean) as DocsNode[];
}

function sortDocsNodes(a: DocsNode, b: DocsNode) {
  // Order by 'order' frontmatter, then alphabetically by title or name
  const orderA = typeof a.order === 'number' ? a.order : 9999;
  const orderB = typeof b.order === 'number' ? b.order : 9999;
  if (orderA !== orderB) return orderA - orderB;
  const titleA = a.title || a.name;
  const titleB = b.title || b.name;
  return titleA.localeCompare(titleB);
} 