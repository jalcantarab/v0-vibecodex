# 🏗️ Project Structure

This document provides an overview of the VibeCodex project structure to help contributors understand how the codebase is organized.

## 📁 Directory Structure

```
vibecodex/
├── app/                    # Next.js App Router pages
│   ├── contribute/         # Contribution page
│   ├── projects/           # Projects listing and details
│   ├── start/              # Getting started page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── robots.ts           # Robots.txt configuration
│   └── sitemap.ts          # Sitemap configuration
├── components/             # Reusable React components
│   ├── ui/                 # UI components (shadcn/ui)
│   ├── mobile-nav.tsx      # Mobile navigation
│   ├── phase-navigation.tsx # Project phase navigation
│   ├── phase-completion-status.tsx # Phase completion UI
│   └── tool-logo.tsx       # Tool logo component
├── lib/                    # Utility functions and data
│   ├── mock-data.ts        # Mock data for projects and tools
│   ├── seo-config.ts       # SEO configuration
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
│   ├── images/             # Image assets
│   └── favicon.ico         # Favicon
└── docs/                   # Documentation
```

## 🔧 Key Components

### 📄 App Router Pages

- `app/page.tsx`: The home page with hero section and featured projects
- `app/projects/page.tsx`: Projects listing page with filtering
- `app/projects/[id]/page.tsx`: Project detail page
- `app/projects/[id]/[tool]/page.tsx`: Tool-specific project page with prompts
- `app/start/page.tsx`: Getting started page with project type selection
- `app/contribute/page.tsx`: Contribution page with guidelines

### 🧩 Components

- `components/site-header.tsx`: Main navigation header
- `components/site-footer.tsx`: Footer with links and copyright
- `components/phase-navigation.tsx`: Navigation between project phases
- `components/phase-completion-status.tsx`: UI for tracking phase completion
- `components/tool-logo.tsx`: Displays tool logos with consistent styling

### 🎨 UI Components

- `components/ui/button.tsx`: Button component
- `components/ui/card.tsx`: Card component
- `components/ui/gradient-button.tsx`: Button with gradient styling
- `components/ui/glass-card.tsx`: Card with glass morphism effect
- `components/ui/prompt-display.tsx`: Displays AI prompts with tooltips

### 📚 Lib

- `lib/mock-data.ts`: Contains project and tool data
- `lib/seo-config.ts`: SEO configuration
- `lib/utils.ts`: Utility functions including Tailwind class merging

## 🔄 Data Flow

1. User navigates to the projects page
2. Projects are loaded from `mock-data.ts`
3. User selects a project and is taken to the project detail page
4. User selects an AI tool and is taken to the tool-specific page
5. User follows the prompts to build their project with the selected AI tool

## 🗂️ State Management

- Local component state using React's `useState` and `useEffect`
- URL parameters for navigation state
- Local storage for persisting user preferences

## 🎨 Styling

- Tailwind CSS for utility-based styling
- CSS variables for theming
- Responsive design with mobile-first approach
- Dark mode support

## ➕ Adding New Features

When adding new features:

1. Create new components in the appropriate directory
2. Update mock data if needed
3. Add new pages in the app directory
4. Update tests
5. Document your changes

## 📖 Related Documentation

- [Implementation Notes](../implementation-notes.md) - Detailed implementation guidelines
- [Contributing Guide](../CONTRIBUTING.md) - How to contribute to the project
- [AI Tools Integration](../guides/ai-tools-integration.md) - Integration with AI tools
