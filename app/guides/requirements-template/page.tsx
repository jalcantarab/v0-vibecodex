"use client"

import Link from "next/link"
import { ArrowLeft, Copy, Download, FileText } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

export default function RequirementsTemplatePage() {
  const [copied, setCopied] = useState(false)

  const copyTemplate = () => {
    navigator.clipboard.writeText(requirementsTemplate)
    setCopied(true)
    toast({
      title: "Copied to clipboard",
      description: "The requirements template has been copied to your clipboard.",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadTemplate = () => {
    const element = document.createElement("a")
    const file = new Blob([requirementsTemplate], { type: "text/markdown" })
    element.href = URL.createObjectURL(file)
    element.download = "requirements-template.md"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
    toast({
      title: "Downloaded",
      description: "The requirements template has been downloaded.",
    })
  }

  return (
    <div className="container py-10 max-w-4xl">
      <div className="mb-6">
        <Link
          href="/guides"
          className="inline-flex items-center text-sm font-medium mb-6 hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Guides
        </Link>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Project Requirements Template</h1>
        <p className="text-xl text-muted-foreground">
          A structured approach to defining requirements before implementation
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-primary/10 p-2 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  Planning
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  All Levels
                </Badge>
              </div>
            </div>
            <CardTitle className="mt-2">Why Use a Requirements Document?</CardTitle>
            <CardDescription>Creating a clear requirements document before implementation helps you:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <div className="mr-2 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900/30 dark:text-green-400 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>
                  <strong>Clarify your thinking</strong> - Organize your ideas before diving into code
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900/30 dark:text-green-400 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>
                  <strong>Get better AI results</strong> - Provide clear context for more accurate code generation
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900/30 dark:text-green-400 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>
                  <strong>Break down complexity</strong> - Divide large projects into manageable phases
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900/30 dark:text-green-400 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>
                  <strong>Create a reference</strong> - Maintain a document you can refer back to throughout development
                </span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Even for small projects, spending 5-10 minutes on requirements definition can save hours of rework later.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="template">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="template">Template</TabsTrigger>
            <TabsTrigger value="example">Example</TabsTrigger>
            <TabsTrigger value="usage">Using with AI</TabsTrigger>
          </TabsList>
          <TabsContent value="template" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Requirements Template</CardTitle>
                <CardDescription>Copy or download this template to use for your own projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-md p-4 mb-4 overflow-auto max-h-[500px]">
                  <pre className="text-sm whitespace-pre-wrap">{requirementsTemplate}</pre>
                </div>
                <div className="flex gap-4">
                  <Button onClick={copyTemplate} className="flex items-center gap-2">
                    <Copy className="h-4 w-4" />
                    {copied ? "Copied!" : "Copy Template"}
                  </Button>
                  <Button variant="outline" onClick={downloadTemplate} className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download as MD
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="example" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Example: Kanban Board Requirements</CardTitle>
                <CardDescription>
                  Here's how the template looks when filled out for a Kanban board project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-md p-4 mb-4 overflow-auto max-h-[500px]">
                  <pre className="text-sm whitespace-pre-wrap">{kanbanExample}</pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="usage" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Using the Template with AI Tools</CardTitle>
                <CardDescription>
                  How to incorporate this template into your AI prompts for better results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-medium mb-3">Two-Stage Approach</h3>
                <p className="mb-4">For best results with AI tools, use a two-stage approach to your development:</p>
                <ol className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-0.5">
                      1
                    </div>
                    <div>
                      <strong>Stage 1: Requirements Analysis</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        Ask the AI to help you create a requirements document based on your project idea. Provide as
                        much context as possible about what you're trying to build.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-0.5">
                      2
                    </div>
                    <div>
                      <strong>Stage 2: Implementation</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        Once you have a clear requirements document, ask the AI to implement the project in phases,
                        starting with the core UI and basic functionality.
                      </p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-lg font-medium mb-3">Sample Prompt Structure</h3>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-md p-4 mb-4">
                  <pre className="text-sm whitespace-pre-wrap">{samplePrompt}</pre>
                </div>

                <h3 className="text-lg font-medium mb-3">Tips for Success</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <path d="M12 22V8" />
                        <path d="m5 12 7-4 7 4" />
                        <path d="M5 16l7-4 7 4" />
                        <path d="M5 20l7-4 7 4" />
                      </svg>
                    </div>
                    <span>
                      Be specific about what you want in each phase - the clearer your requirements, the better the
                      results
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <path d="M12 22V8" />
                        <path d="m5 12 7-4 7 4" />
                        <path d="M5 16l-4 7-4 7 4" />
                        <path d="M5 20l7-4 7 4" />
                      </svg>
                    </div>
                    <span>
                      Start with mocked data before implementing real functionality - this lets you validate the UI
                      first
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <path d="M12 22V8" />
                        <path d="m5 12 7-4 7 4" />
                        <path d="M5 16l-4 7-4 7 4" />
                        <path d="M5 20l7-4 7 4" />
                      </svg>
                    </div>
                    <span>
                      Review and refine the requirements before moving to implementation - it's easier to change
                      requirements than code
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/guides/ai-development/planning"
                className="flex items-start p-4 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mr-4 rounded-md bg-primary/10 p-2 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">AI Development Planning</h3>
                  <p className="text-sm text-muted-foreground">Learn more about planning your AI-assisted projects</p>
                </div>
              </Link>
              <Link
                href="/projects"
                className="flex items-start p-4 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mr-4 rounded-md bg-primary/10 p-2 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Browse Projects</h3>
                  <p className="text-sm text-muted-foreground">Apply this template to real project examples</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const requirementsTemplate = `# Project Requirements Document

## 1. Project Overview
- **Project Name**: [Name]
- **Description**: [Brief description of what this project is and what it does]
- **Problem Statement**: [What problem does this solve?]
- **Main Job to be Done**: [Primary user goal]
- **High-level Solution**: [How the project addresses the problem]

## 2. Tech Stack
- **Frontend**: [e.g., Next.js App Router, React]
- **UI Components**: [e.g., shadcn/ui, Tailwind CSS]
- **Backend/API**: [Initial approach - mocked or real]
- **Data Storage**: [Database or local storage approach]
- **Authentication**: [If applicable]

## 3. Features and Functionalities
### Core Features
- [Feature 1]
- [Feature 2]
- [Feature 3]

### Feature Details
#### [Feature 1]
- Description: [Detailed description]
- Priority: [High/Medium/Low]
- Acceptance Criteria:
  - [Criterion 1]
  - [Criterion 2]

#### [Feature 2]
- Description: [Detailed description]
- Priority: [High/Medium/Low]
- Acceptance Criteria:
  - [Criterion 1]
  - [Criterion 2]

## 4. User Flow
### User Personas
- **[Persona 1]**: [Brief description, challenges, needs]
- **[Persona 2]**: [Brief description, challenges, needs]

### Primary User Journeys
1. [Journey 1 - step by step]
2. [Journey 2 - step by step]

## 5. Data Model
### Entities
- **[Entity 1]**
  - Attributes: [List of attributes]
  - Relationships: [How it relates to other entities]

- **[Entity 2]**
  - Attributes: [List of attributes]
  - Relationships: [How it relates to other entities]

### Mock Data Structure
\`\`\`json
{
  "example": "JSON structure for mock data"
}
\`\`\`

## 6. UI/UX Requirements
### Key Screens/Pages
- **[Screen 1]**
  - Purpose: [What this screen does]
  - Components: [Key components on this screen]
  - Interactions: [How users interact with this screen]

- **[Screen 2]**
  - Purpose: [What this screen does]
  - Components: [Key components on this screen]
  - Interactions: [How users interact with this screen]

### Design System
- **Colors**: [Primary, secondary, accent colors]
- **Typography**: [Font families, sizes]
- **Components**: [Reusable UI components]
- **Responsive Design**: [How the UI adapts to different screen sizes]

## 7. Development Phases
### Phase 1: [Core UI with Mocked Data]
- **Files to Create**:
  - [File 1]
  - [File 2]
- **Features to Implement**:
  - [Feature 1]
  - [Feature 2]
- **Expected Outcome**: [What should be working after this phase]
- **Testing Criteria**: [How to verify this phase works correctly]

### Phase 2: [Basic Functionality]
- **Files to Create/Modify**:
  - [File 1]
  - [File 2]
- **Features to Implement**:
  - [Feature 1]
  - [Feature 2]
- **Expected Outcome**: [What should be working after this phase]
- **Testing Criteria**: [How to verify this phase works correctly]

### Phase 3: [Advanced Features]
- **Files to Create/Modify**:
  - [File 1]
  - [File 2]
- **Features to Implement**:
  - [Feature 1]
  - [Feature 2]
- **Expected Outcome**: [What should be working after this phase]
- **Testing Criteria**: [How to verify this phase works correctly]

## 8. Future Enhancements
- [Enhancement 1]
- [Enhancement 2]
- [Enhancement 3]

## 9. Notes and Considerations
- [Any additional notes, constraints, or considerations]
`

const kanbanExample = `# Project Requirements Document

## 1. Project Overview
- **Project Name**: Team Collaboration Kanban Board
- **Description**: A drag-and-drop kanban board for visualizing and managing team tasks
- **Problem Statement**: Teams need a visual way to track task progress and manage workflow
- **Main Job to be Done**: Allow team members to create, assign, and track tasks through different stages
- **High-level Solution**: Interactive board with customizable columns and draggable task cards

## 2. Tech Stack
- **Frontend**: Next.js App Router
- **UI Components**: shadcn/ui with Tailwind CSS
- **Backend/API**: Initially mocked, later could connect to a real backend
- **Data Storage**: Start with local storage, could expand to database
- **Authentication**: Not included in initial version

## 3. Features and Functionalities
### Core Features
- Draggable task cards between columns
- Task creation with title, description, assignee
- Column management (To Do, In Progress, Done)
- Visual status indicators

### Feature Details
#### Draggable Task Cards
- Description: Users can drag and drop task cards between columns to update status
- Priority: High
- Acceptance Criteria:
  - Cards can be dragged from one column to another
  - Visual feedback during dragging
  - Status updates automatically when moved

#### Task Creation
- Description: Users can create new tasks with relevant information
- Priority: High
- Acceptance Criteria:
  - Form to add title, description, assignee, due date
  - Priority selection (low, medium, high)
  - New tasks appear in the appropriate column

## 4. User Flow
### User Personas
- **Project Manager**: Needs overview of all tasks and their status
- **Team Member**: Needs to update their assigned tasks and see what to work on next

### Primary User Journeys
1. Creating a new task: Click "Add Task" → Fill form → Submit → See task in "To Do" column
2. Updating task status: Drag task from "To Do" → Drop in "In Progress" → Task status updates

## 5. Data Model
### Entities
- **Task**
  - Attributes: id, title, description, assignee, dueDate, priority, status
  - Relationships: Belongs to a Column

- **Column**
  - Attributes: id, title, order
  - Relationships: Contains many Tasks

### Mock Data Structure
\`\`\`json
{
  "columns": [
    {
      "id": "column-1",
      "title": "To Do",
      "taskIds": ["task-1", "task-2"]
    }
  ],
  "tasks": {
    "task-1": {
      "id": "task-1",
      "title": "Create homepage design",
      "description": "Design the homepage layout",
      "assignee": "Jane Doe",
      "dueDate": "2023-06-15",
      "priority": "high"
    }
  },
  "columnOrder": ["column-1", "column-2", "column-3"]
}
\`\`\`

## 6. UI/UX Requirements
### Key Screens/Pages
- **Main Board**
  - Purpose: Display all columns and tasks
  - Components: Header, columns, task cards, add task button
  - Interactions: Drag and drop, click to edit, button to add

- **Add/Edit Task Modal**
  - Purpose: Create or edit task details
  - Components: Form fields, submit button, cancel button
  - Interactions: Fill form, submit, cancel

### Design System
- **Colors**: Light theme with accent colors for priority levels
- **Typography**: Sans-serif for readability
- **Components**: Cards, buttons, forms, modals
- **Responsive Design**: Desktop-first with tablet support

## 7. Development Phases
### Phase 1: Core UI with Mocked Data
- **Files to Create**:
  - app/page.tsx (main board)
  - components/column.tsx
  - components/task-card.tsx
  - lib/mock-data.ts
- **Features to Implement**:
  - Static board layout with columns
  - Task card design
  - Add task button (non-functional)
- **Expected Outcome**: Visual representation of the board with sample tasks
- **Testing Criteria**: UI renders correctly on desktop and tablet

### Phase 2: Basic Functionality
- **Files to Create/Modify**:
  - components/add-task-form.tsx
  - hooks/use-board-state.ts
  - app/page.tsx (update)
- **Features to Implement**:
  - Add task functionality
  - Local state management
  - Basic drag and drop
- **Expected Outcome**: Users can add tasks and move them between columns
- **Testing Criteria**: Tasks can be created and moved, state updates correctly

### Phase 3: Advanced Features
- **Files to Create/Modify**:
  - components/edit-task-modal.tsx
  - lib/local-storage.ts
  - components/task-card.tsx (update)
- **Features to Implement**:
  - Edit task functionality
  - Local storage persistence
  - Priority visualization
- **Expected Outcome**: Full functionality with data persistence
- **Testing Criteria**: Data persists on refresh, all interactions work as expected

## 8. Future Enhancements
- User authentication and multi-user support
- Custom column creation
- Filtering and searching tasks
- Due date reminders and notifications

## 9. Notes and Considerations
- Focus on smooth drag and drop experience
- Ensure responsive design works well on different devices
- Consider accessibility for keyboard navigation
`

const samplePrompt = `I want to create a [type of application]. Let's start with requirements analysis before implementation.

## REQUIREMENTS ANALYSIS

Please help me create a detailed requirements document for a [brief description of project]. The document should include:

1. Project overview and problem statement
2. Core features and their priorities
3. User flow and personas
4. Data model and mock data structure
5. UI/UX requirements
6. Development phases with clear deliverables
7. Future enhancement possibilities

## IMPLEMENTATION

After we've defined the requirements, I'd like to implement the project in phases, starting with:

Phase 1: Core UI with mocked data
- [Specific components to create]
- [Design requirements]

Please focus on creating a responsive layout with [specific design elements].`
