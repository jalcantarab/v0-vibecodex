# Implementation Notes for AI Coding Starter Kit

This document contains important guidelines, patterns, and methodologies that should be followed consistently across the project. It serves as a reference for all developers working on the AI Coding Starter Kit.

## Layout Structure

### Standard Page Layout

All pages should follow this consistent layout structure:

\`\`\`jsx
<div className="flex flex-col min-h-screen">
  <div className="container py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Page content */}
  </div>
</div>
\`\`\`

This structure ensures:
- Content is properly centered in the viewport
- Pages have consistent padding and margins
- The layout is responsive across different screen sizes

### Container Constraints

Use these container constraints consistently:
- `max-w-6xl` to limit the maximum width
- `mx-auto` to center the container
- Responsive padding with `px-4 sm:px-6 lg:px-8`

### Two-Column Layout

For pages with a sidebar (like project details and tool pages), use this grid structure:

\`\`\`jsx
<div className="grid gap-6 md:grid-cols-[2fr_1fr]">
  {/* Main content column */}
  <div className="space-y-6">
    {/* Content components */}
  </div>
  
  {/* Sidebar column */}
  <div className="space-y-6">
    {/* Sidebar components */}
  </div>
</div>
\`\`\`

This ensures:
- Proper spacing between columns
- Responsive behavior (stacks vertically on mobile)
- Consistent proportions (2:1 ratio between main content and sidebar)

## Component Patterns

### Card Components

When using Card components:
- Use consistent padding with `<CardHeader>` and `<CardContent>` components
- Maintain spacing between cards with `space-y-6` on the parent container
- For clickable cards, use `hover:bg-muted/50 transition-colors` for hover effects

### Navigation Components

For phase navigation:
- Use the `<PhaseNavigation>` component for consistent styling
- Ensure it spans the full width of its container
- Add appropriate spacing with `mb-6` or similar

## Utility Classes

### Consistent Spacing

Use Tailwind's spacing utilities consistently:
- `space-y-6` for vertical spacing between components
- `gap-6` for grid and flex layouts
- `mb-6` for margin below headings and navigation elements

### Typography

Follow these typography patterns:
- Page titles: `text-3xl font-bold tracking-tight`
- Section headings: `text-xl font-semibold`
- Card titles: Use the `<CardTitle>` component
- Body text: Default text size with `text-muted-foreground` for secondary text

## Responsive Design

Ensure all pages are responsive:
- Use grid layouts with responsive column counts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- For two-column layouts, use `md:grid-cols-[2fr_1fr]` to stack on mobile
- Test all pages at mobile, tablet, and desktop breakpoints

## Tool Logo Display

When displaying tool logos:
- Use the `<ToolLogo>` component for consistent styling
- Pass the appropriate `toolId` and `size` props
- The component handles proper background and padding for each logo

## Future Considerations

As the project evolves, we'll add more sections to this document covering:
- State management patterns
- Form handling
- Authentication flows
- Data fetching strategies
- Animation guidelines
- Accessibility requirements
