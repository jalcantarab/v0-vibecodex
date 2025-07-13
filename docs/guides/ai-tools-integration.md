---
title: "AI Tools Integration Guide"
---
# AI Tools Integration Guide

This document explains how VibeCodex integrates with various AI coding tools and how to extend or modify these integrations.

## Supported AI Tools

VibeCodex currently supports the following AI tools:

1. **v0 by Vercel** - https://v0.dev/chat
2. **Bolt** - https://bolt.new/
3. **Lovable** - https://lovable.dev/
4. **Replit** - https://replit.com/
5. **New Tool Name** - https://new-tool-url.com

## Integration Architecture

The integration with AI tools is primarily handled through:

1. **Tool Configuration**: Defined in `lib/mock-data.ts` under `toolsMockData`
2. **Prompt Templates**: Stored in `lib/mock-data.ts` under each project's phases
3. **Tool-specific URL Handling**: Implemented in `app/projects/[id]/[tool]/page.tsx`

## Tool Configuration

Each tool is configured with the following properties:

```typescript
{
 id: string;           // Unique identifier for the tool
 name: string;         // Display name
 description: string;  // Short description of the tool's strengths
 linkPattern: string;  // Base URL for the tool
}
```

## Prompt Templates

Each project phase contains tool-specific prompts:

```typescript
prompts: {
 [toolId]: {
   content: string;    // The actual prompt text
   tooltips: {         // Optional tooltips for parts of the prompt
     text: string;     // Text to highlight
     explanation: string; // Explanation for the tooltip
     highlightColor: string; // Color for the highlight
   }[]
 }
}
```

## URL Handling

The `getToolUrl()` function in `app/projects/[id]/[tool]/page.tsx` handles tool-specific URL generation:

```typescript
const getToolUrl = () => {
 if (tool.id === "v0") {
   // Encode the prompt for v0
   const encodedPrompt = encodeURIComponent(prompt.content);
   return `${tool.linkPattern}?q=${encodedPrompt}`;
 } else if (tool.id === "new-tool-id") {
   // New tool-specific URL handling
   return `${tool.linkPattern}/special-path?param=${encodeURIComponent(prompt.content)}`;
 }
 return tool.linkPattern;
};
```

## Adding a New AI Tool

To add a new AI tool:

1. Add the tool configuration to `toolsMockData` in `lib/mock-data.ts`:

```typescript
{
 id: "new-tool-id",
 name: "New Tool Name",
 description: "Description of the new tool",
 linkPattern: "https://new-tool-url.com",
}
```

2. Add tool-specific prompts for each project phase:

```typescript
prompts: {
 "new-tool-id": {
   content: "Prompt for the new tool...",
   tooltips: []
 }
}
```

3. Update the `getToolUrl()` function if the new tool requires special URL handling:

```typescript
const getToolUrl = () => {
 if (tool.id === "v0") {
   // Existing v0 handling
 } else if (tool.id === "new-tool-id") {
   // New tool-specific URL handling
   return `${tool.linkPattern}/special-path?param=${encodeURIComponent(prompt.content)}`;
 }
 return tool.linkPattern;
};
```

4. Add the tool logo to the `public` directory and update the `ToolLogo` component if needed.

## Testing Tool Integrations

When testing a new tool integration:

1. Verify that the tool logo displays correctly
2. Check that the prompt is properly formatted for the tool
3. Ensure the "Open in [Tool]" button correctly navigates to the tool with the prompt
4. Test the copy functionality to ensure the prompt can be manually copied if needed

## Troubleshooting

Common issues with tool integrations:

1. **URL Encoding Issues**: Ensure special characters in prompts are properly encoded
2. **CORS Issues**: Some tools may block embedding or direct linking
3. **Authentication Requirements**: Some tools may require authentication before accepting prompts

For any issues, please open a GitHub issue with detailed reproduction steps at [https://github.com/jalcantarab/v0-vibecodex/issues](https://github.com/jalcantarab/v0-vibecodex/issues).

## [Back to Docs Index](/docs)
