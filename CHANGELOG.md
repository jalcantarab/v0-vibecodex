# 📋 Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.0] - 2025-07-13

### Added
- Modular AI rules for development, documentation, React, and styling in `.cursor/rules/` for AI-assisted workflows
- Auto-rendering documentation system: sidebar, frontmatter, and ordering support for all markdown docs
- Next.js Quickstart and Cursor Rules/Templates guides for onboarding and AI best practices
- Comprehensive documentation management guide for adding, updating, and organizing docs
- New public assets for documentation and guides (diagrams, screenshots, etc.)
- Enhanced global styles for improved look and feel
- Page-specific SEO metadata for better discoverability
- Updated README with hero image, production links, and latest guides
- DocsBreadcrumb and DocsNavigation components for improved docs navigation
- MarkdownRenderer component for rich markdown display with code copy support

### Changed
- Refactored `lib/getDocsTree.ts` for robust doc discovery, exclusion logic, and pretty sidebar labels
- Updated legal, support, and open source files for clarity, compliance, and community standards
- Improved navigation and sidebar logic for documentation

### Removed
- Deprecated legacy docs.
- Deprecation note to `.cursorrules` in favor of modular `.mdc` files in `.cursor/rules/`

---

## [0.5.0] - 2025-07-07

### Added
- Full open source compliance: LICENSE, CODE_OF_CONDUCT, CODE_OF_MERIT, SECURITY, SUPPORT, and CODEOWNERS files
- GitHub Basics Guide for beginners, including screenshots and step-by-step instructions
- Zentrik logo and updated Lucide icons for cross-device and brand consistency
- GitHub Desktop changes screenshot to documentation for visual onboarding
- Enhanced "How it works" section with visual connectors and improved explanations
- Expanded FAQ, glossary, and roadmap documentation

### Changed
- Streamlined project-to-tool navigation flow for a smoother user experience
- Improved and expanded documentation for onboarding, contributing, and project structure
- Refactored project structure and documentation system for clarity and maintainability
- Optimized SEO and GEO for VibeCodex site
- Updated README and legal docs for accuracy and completeness

---

## [0.4.0] - 2025-06-30

### Added
- Legal and compliance pages: Privacy Policy, Terms of Service, Security, Support, Code of Conduct, Code of Merit
- Modernized landing page with new branding, hero section, and improved visuals
- Additional project templates and guides for new users
- Improved mobile navigation and accessibility features
- New mock data and utility functions for project and tool management

### Changed
- Updated all GitHub repository links to correct URLs and production addresses
- Improved deployment workflow and fixed Vercel conflicts for seamless CI/CD
- Enhanced global styles and Tailwind configuration for consistency

---

## [0.3.0] - 2025-06-21

### Added
- Project phases with step-by-step guidance for building with AI tools
- Tool-specific prompts for each project phase, supporting v0, Bolt, Lovable, and Replit
- Enhanced UI with shadcn/ui components, glassmorphism cards, and dark mode support
- Responsive design for mobile and desktop, including grid layouts and spacing utilities
- Phase navigation and completion status components
- Social sharing and newsletter signup components

### Changed
- Improved documentation structure and sidebar navigation for easier discovery
- Updated README with new sections, hero image, and links to guides and docs
- Refined component patterns for cards, badges, and navigation

---

## [0.2.0] - 2025-06-14

### Added
- Initial integration with AI tools (v0, Bolt, Lovable, Replit) for project generation
- First set of project guides and documentation, including implementation notes and architecture overview
- Home page with featured projects and visual highlights
- Projects listing and detail pages with tool selection and prompt display
- Contribution and getting started pages for new users
- Initial legal and support files

### Changed
- Improved code structure, added utility functions, and enhanced type safety
- Enhanced SEO and metadata for better search visibility
- Updated README and documentation for clarity

---

## [0.1.0] - 2025-06-07

### Added
- Initial project setup as a sample Next.js + TypeScript + Tailwind project
- Basic app structure: home, projects, and getting started pages
- Simple UI with shadcn/ui components and Tailwind CSS
- Early documentation and README with project overview
- First mock data and utility functions

---

## [1.0.0] - 2023-12-01

### 🚀 Added
- Initial release of VibeCodex
- Home page with featured projects
- Projects listing page
- Project detail pages
- Tool-specific project pages with prompts
- Getting started page
- Contribution page
- Modern UI with shadcn/ui components
- Dark mode support
- Responsive design

### 🎨 Features
- 12 production-ready project templates
- AI tool integration guides
- Phase-based development approach
- SEO optimization
- TypeScript support
- Component library integration

### 📚 Documentation
- Comprehensive guides and tutorials
- Implementation notes
- Contributing guidelines
- Support documentation
