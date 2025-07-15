#!/usr/bin/env ts-node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * DocsNode type definition (for reference only)
 * type DocsNode = {
 *   type: 'file' | 'folder';
 *   name: string;
 *   path: string;
 *   title?: string;
 *   order?: number;
 *   children?: DocsNode[];
 * }
 */

const EXCLUDED_ROOT_DOCS = ['README.md'];
const ROOT_DOCS = [
  'CHANGELOG.md',
  'CONTRIBUTING.md',
  'SECURITY.md',
  'SUPPORT.md',
  'CODE_OF_CONDUCT.md',
  'CODE_OF_MERIT.md',
  'LICENSE',
];

function prettyTitle(filename) {
  return filename.replace('.md', '').replace(/_/g, ' ').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function getDocsTree(dir = 'docs', basePath = '', rootDocNames) {
  const fullDir = path.join(process.cwd(), dir);
  let docsNodes = [];

  // Discover all root-level .md files except excluded ones
  let rootDocsNodes = [];
  let canonicalRootDocNames = rootDocNames || new Set();
  if (!basePath) {
    const rootDocsDir = process.cwd();
    rootDocsNodes = fs.readdirSync(rootDocsDir)
      .filter((filename) => filename.endsWith('.md') && !EXCLUDED_ROOT_DOCS.includes(filename))
      .map((filename) => {
        const filePath = path.join(rootDocsDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        const normalized = filename.replace('.md', '').replace(/_/g, '-').toLowerCase();
        canonicalRootDocNames.add(normalized);
        return {
          type: 'file',
          name: normalized,
          path: normalized,
          title: data.title || prettyTitle(filename),
          order: typeof data.order === 'number' ? data.order : undefined,
        };
      });
  }

  if (fs.existsSync(fullDir)) {
    docsNodes = fs.readdirSync(fullDir)
      .filter((item) => !item.startsWith('.'))
      .map((item) => {
        const itemPath = path.join(fullDir, item);
        const relPath = basePath ? `${basePath}/${item}` : item;
        if (fs.statSync(itemPath).isDirectory()) {
          const children = getDocsTree(path.join(dir, item), relPath, canonicalRootDocNames);
          return {
            type: 'folder',
            name: item,
            path: relPath,
            children: children.sort(sortDocsNodes),
          };
        } else if (item.endsWith('.md')) {
          // Deduplicate: skip if this file's normalized name matches a root doc
          const normalized = item.replace('.md', '').replace(/_/g, '-').toLowerCase();
          if (canonicalRootDocNames.has(normalized)) {
            return null;
          }
          const fileContent = fs.readFileSync(itemPath, 'utf8');
          const { data } = matter(fileContent);
          return {
            type: 'file',
            name: normalized,
            path: relPath.replace('.md', '').replace(/_/g, '-').toLowerCase(),
            title: data.title || undefined,
            order: typeof data.order === 'number' ? data.order : undefined,
          };
        }
        return null;
      })
      .filter(Boolean);
  }

  // Combine root docs and docs/ tree, root docs first (only at top-level)
  if (!basePath) {
    return [...rootDocsNodes, ...docsNodes].sort(sortDocsNodes);
  } else {
    return docsNodes.sort(sortDocsNodes);
  }
}

function sortDocsNodes(a, b) {
  if (typeof a.order === 'number' && typeof b.order === 'number') {
    return a.order - b.order;
  }
  if (typeof a.order === 'number') return -1;
  if (typeof b.order === 'number') return 1;
  return (a.title || a.name).localeCompare(b.title || b.name);
}

function main() {
  const tree = getDocsTree();
  const outDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  const outPath = path.join(outDir, 'docs-tree.json');
  fs.writeFileSync(outPath, JSON.stringify(tree, null, 2), 'utf8');
  console.log(`Docs tree written to ${outPath}`);
}

main(); 