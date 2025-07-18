---
title: "Managing Documentation Files"
description: "How to add, update, and organize markdown documentation so it appears in the VibeCodex webapp."
---
# Managing Documentation Files in VibeCodex

This guide explains how to add, update, and organize markdown (`.md`) documentation files so they automatically appear in the VibeCodex webapp sidebar and documentation system.

## 📁 Where to Place Documentation Files

- **Project-wide docs** (e.g., `CONTRIBUTING.md`, `SECURITY.md`, `SUPPORT.md`, `CHANGELOG.md`, `CODE_OF_CONDUCT.md`, `CODE_OF_MERIT.md`, `LICENSE`, `README.md`):
  - Place these in the **project root** (top-level of your repository).
- **Feature, guide, or reference docs**:
  - Place these in the `docs/` directory or any subfolder (e.g., `docs/guides/`, `docs/reference/`).

## 📝 How to Add a New Doc

1. **Create a new `.md` file** in the project root or inside the `docs/` directory (or a subfolder).
2. **Add frontmatter at the top** of the file for sidebar clarity:

   \`\`\`markdown
   ---
   title: "Your Doc Title Here"
   description: "(Optional) Short description for SEO and sidebar."
   ---
   # Your Doc Title Here
   ...
   \`\`\`
   - The `title:` is required for a clean sidebar label.
   - The `description:` is optional but recommended for SEO and page metadata.

3. **Write your documentation** using standard Markdown. Use triple backticks and specify the language for all code blocks:

   \`\`\`typescript
   // Good code block example
   function hello() {
     console.log("Hello, world!");
   }
   \`\`\`

4. **Add a navigation link at the end** for consistency:

   \`\`\`markdown
   ## [Back to Docs Index](/docs)
   \`\`\`

5. **Save the file.**

## 🔄 How the Sidebar Works

- The sidebar is **fully automatic**. It scans:
  - All `.md` files in the project root (except `README.md`)
  - All `.md` files in the `docs/` directory and its subfolders
- The sidebar uses the `title:` from frontmatter for display. If missing, it falls back to the filename.
- The order is determined by the `order:` property in frontmatter (if present), then alphabetically.

## 🗑️ How to Remove a Doc

- **Delete the `.md` file** from the project root or `docs/` directory.
- The sidebar and docs system will update automatically.

## ✏️ How to Change a Sidebar Label

- Edit the `title:` in the frontmatter of the `.md` file.
- Save the file. The sidebar will update on the next reload.

## 🚫 How to Hide a Root Doc from the Sidebar

- Add its filename to the `EXCLUDED_ROOT_DOCS` array in `lib/getDocsTree.ts`.
- This is only needed for root-level docs (not for files in `docs/`).

## 🧹 Best Practices

- Always use a `title:` in frontmatter for every doc.
- Use triple backticks and specify the language for all code blocks.
- Add a "Back to Docs Index" link at the end of every doc.
- Avoid duplicate docs with the same purpose.
- Organize feature or guide docs in subfolders under `docs/` for clarity.

## 🏁 Example: Adding a New Guide

1. Create a file: `docs/guides/my-new-guide.md`
2. Add frontmatter:
   \`\`\`markdown
   ---
   title: "My New Guide"
   description: "How to use the new feature."
   ---
   # My New Guide
   ...
   \`\`\`
3. Write your content and code blocks.
4. Add:
   \`\`\`markdown
   ## [Back to Docs Index](/docs)
   \`\`\`
5. Save. Your guide will now appear in the sidebar under "guides".

---

## [Back to Docs Index](/docs)
