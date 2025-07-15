// This module now simply loads the static docs tree JSON generated at build time.

import path from 'path';

export interface DocsNode {
  type: 'file' | 'folder';
  name: string;
  path: string;
  title?: string;
  order?: number;
  children?: DocsNode[];
}

// Loads the docs tree from the static JSON file in public/
export function getDocsTree(): DocsNode[] {
  // Use dynamic import to ensure compatibility in both Node and browser
  if (typeof window === 'undefined') {
    // Node.js (build time)
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('../public/docs-tree.json');
  } else {
    // Browser (client side)
    // This should only be used server-side, but fallback for safety
    return [];
  }
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