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

const EXCLUDED_ROOT_DOCS = ['README.md']; // Exclude README.md from sidebar

export function getDocsTree(dir = 'docs', basePath = ''): DocsNode[] {
  const fullDir = path.join(process.cwd(), dir);
  let docsNodes: DocsNode[] = [];
  if (fs.existsSync(fullDir)) {
    docsNodes = fs.readdirSync(fullDir)
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

  // Discover all root-level .md files except excluded ones
  const rootDocsDir = process.cwd();
  const rootDocsNodes = fs.readdirSync(rootDocsDir)
    .filter((filename) => filename.endsWith('.md') && !EXCLUDED_ROOT_DOCS.includes(filename))
    .map((filename) => {
      const filePath = path.join(rootDocsDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      return {
        type: 'file',
        name: filename.replace('.md', '').replace(/_/g, '-').toLowerCase(),
        path: filename.replace('.md', '').replace(/_/g, '-').toLowerCase(),
        title: data.title || prettyTitle(filename),
        order: typeof data.order === 'number' ? data.order : undefined,
      };
    });

  // Combine root docs and docs/ tree, root docs first
  return [...rootDocsNodes, ...docsNodes].sort(sortDocsNodes);
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

function prettyTitle(filename: string): string {
  // Convert e.g. CODE_OF_CONDUCT.md to 'Code of Conduct'
  return filename
    .replace('.md', '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace('License', 'LICENSE');
} 