---
title: Architecture Overview
description: High-level design and rationale for VibeCodex
---

# Architecture Overview

VibeCodex is designed as a modern, beginner-friendly AI coding starter kit. This document provides a high-level overview of the architecture and design decisions.

## Core Principles

- **Beginner-Friendly**: Simple, approachable structure
- **AI-First**: Optimized for AI-assisted workflows
- **Modular**: Clear separation of concerns
- **Production-Ready**: Real-world best practices

## High-Level Structure

- **Next.js 14+ App Router**: All routing and pages are managed in the `app/` directory using the latest Next.js features.
- **TypeScript**: Type safety throughout the codebase.
- **Tailwind CSS**: Utility-first styling for rapid development and consistency.
- **shadcn/ui**: Modern, accessible UI components.
- **Framer Motion**: For advanced animations.
- **Lucide React**: Icon system.

## Directory Layout

- `app/`: Pages, layouts, and routing
- `components/`: Reusable React components (UI, feature, and common)
- `lib/`: Utility functions and data
- `public/`: Static assets
- `docs/`: Documentation
- `hooks/`: Custom React hooks

## Data Flow

- Mock data is loaded from `lib/mock-data.ts` for projects and tools.
- User navigation and state are managed via React hooks and URL parameters.
- Prompts and tool integrations are handled in the relevant app pages.

## Extensibility

- Add new features by creating components and pages in the appropriate directories.
- Update mock data and documentation as needed.
- Modular design makes it easy to extend or swap out tools and UI components.

## Related Docs

- [Project Structure](/docs/reference/project-structure)
- [Implementation Notes](/docs/reference/implementation-notes)
- [Getting Started](/docs/getting-started)

---

[Back to Docs Index](/docs)
