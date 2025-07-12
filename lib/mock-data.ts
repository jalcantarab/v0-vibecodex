"use client"

// Mock data for projects
export const projectsMockData = [
  {
    id: "kanban-board",
    title: "Team Collaboration Kanban Board",
    description: "Build a drag-and-drop kanban board for team task management",
    difficulty: "Intermediate",
    timeEstimate: "Full day",
    previewImage: "/clean-kanban-interface.png",
    completionCount: 1243,
    learningPoints: [
      "Building interactive drag-and-drop interfaces",
      "State management for complex applications",
      "Creating responsive layouts for different devices",
      "Implementing real-time updates between users",
    ],
    phases: [
      {
        id: "phase-1",
        title: "Project Setup and Basic Layout",
        description: "Create the initial structure with columns and styling",
        order: 1,
        prompts: {
          bolt: {
            content: `Let's create a Kanban board application for team task management. First, let's analyze requirements before implementation.

## REQUIREMENTS ANALYSIS

1. **Project Overview**
   - Create a drag-and-drop Kanban board for visualizing team tasks
   - Problem: Teams need a visual way to track task progress
   - Solution: Interactive board with customizable columns and tasks

2. **Core Features**
   - Draggable task cards between columns
   - Task creation with title, description, assignee
   - Visual status indicators
   - Column management

3. **UI Structure**
   - Header with app title and controls
   - Main board area with columns
   - Task cards with consistent styling
   - Add task functionality

## IMPLEMENTATION - PHASE 1

For our first phase, please create:
- A header with the title "Team Kanban Board"
- Three columns labeled "To Do", "In Progress", and "Done"
- A clean design using a light color scheme
- A "+ Add Task" button at the top of each column

Focus on creating a responsive layout that works on different screen sizes with:
- Rounded corners on the columns and cards
- Subtle shadows for depth
- Adequate spacing between elements
- A modern, minimalist approach`,
            tooltips: [
              {
                text: "Let's create a Kanban board application for team task management. First, let's analyze requirements before implementation.",
                explanation: "Start with a clear statement of what you're building and establish a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          v0: {
            content: `Let's create a Kanban board application for team task management. First, let's analyze requirements before implementation.

## REQUIREMENTS ANALYSIS

1. **Project Overview**
   - Create a drag-and-drop Kanban board for visualizing team tasks
   - Problem: Teams need a visual way to track task progress
   - Solution: Interactive board with customizable columns and tasks

2. **Core Features**
   - Draggable task cards between columns
   - Task creation with title, description, assignee
   - Visual status indicators
   - Column management

3. **UI Structure**
   - Header with app title and controls
   - Main board area with columns
   - Task cards with consistent styling
   - Add task functionality

## IMPLEMENTATION - PHASE 1

For our first phase, please create:
- A header with the title "Team Kanban Board"
- Three columns labeled "To Do", "In Progress", and "Done"
- A clean, modern design with a light theme
- A "+ Add Task" button at the top of each column
- Responsive layout that works on mobile and desktop

Use shadcn/ui components and Tailwind CSS for styling with:
- Rounded corners (border-radius)
- Subtle shadows for depth
- Proper spacing between elements`,
            tooltips: [
              {
                text: "Let's create a Kanban board application for team task management. First, let's analyze requirements before implementation.",
                explanation: "Start with a clear statement of what you're building and establish a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          lovable: {
            content: `Let's create a Kanban board for team collaboration. First, let's think about what we need before we start building.

## WHAT WE'RE TRYING TO SOLVE

1. **The Big Picture**
   - We want to make a board where teams can see and move their tasks
   - Problem: It's hard to keep track of who's working on what
   - Solution: A visual board with columns for different stages

2. **Main Features We Need**
   - Cards that can be dragged between columns
   - A way to create new tasks with details
   - Visual indicators for priority or status
   - Columns for different stages of work

3. **How It Should Look**
   - A header at the top with the title
   - Columns for tasks in different stages
   - Cards that are easy to read and move
   - Buttons to add new tasks

## NOW LET'S BUILD - FIRST STEP

For our first step, let's create:
- A header with the title "Team Kanban Board"
- Three columns: "To Do", "In Progress", and "Done"
- A "+ Add Task" button for each column
- A clean, friendly design that's easy to use

The design should have:
- Rounded corners for cards and columns
- Light shadows to create depth
- Enough spacing so it doesn't feel crowded
- A design that works on phones and computers`,
            tooltips: [
              {
                text: "Let's create a Kanban board for team collaboration. First, let's think about what we need before we start building.",
                explanation:
                  "Start with a friendly, conversational introduction that establishes a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## WHAT WE'RE TRYING TO SOLVE",
                explanation: "Use simple language to frame the requirements analysis in an approachable way.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## NOW LET'S BUILD - FIRST STEP",
                explanation: "Clearly transition to implementation with straightforward instructions.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          replit: {
            content: `Let's create a React Kanban board application for team task management. First, let's analyze requirements before implementation.

## REQUIREMENTS ANALYSIS

1. **Project Scope**
   - Create a drag-and-drop Kanban board for visualizing team tasks
   - Problem: Teams need a visual way to track task progress
   - Solution: Interactive board with customizable columns and tasks

2. **Core Functionality Requirements**
   - Draggable task cards between columns
   - Task creation with title, description, assignee
   - Visual status indicators
   - Column management

3. **Technical Structure**
   - React component hierarchy
   - State management approach
   - Event handling for interactions
   - Styling methodology

## IMPLEMENTATION - PHASE 1

Let's implement the basic structure:

1. Create a React Kanban board application with the following features:

   a. Structure:
   - Header component with the title "Team Kanban Board"
   - Three column components with labels "To Do", "In Progress", and "Done"
   - Add Task button component at the top of each column

   b. Styling:
   - Use CSS modules or styled-components
   - Implement a clean, minimalist design with light color scheme
   - Add rounded corners (8px radius) to columns and cards
   - Include subtle box-shadows for depth perception
   - Ensure proper spacing (16px between elements)
   - Make the layout responsive with flexbox or grid

   c. Initial State:
   - Set up a React state array to hold task data
   - Create empty initial state for each column`,
            tooltips: [
              {
                text: "Let's create a React Kanban board application for team task management. First, let's analyze requirements before implementation.",
                explanation: "Start with a technical introduction that establishes a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
        },
      },
      {
        id: "phase-2",
        title: "Task Card Creation and Styling",
        description: "Design and implement the task cards with all necessary fields",
        order: 2,
        prompts: {
          bolt: {
            content: `Building on our Kanban board, let's create the task card component.

Each task card should have:
- A title field
- A description field (expandable/collapsible)
- An assignee field with the option to add a user
- A due date field
- A colored label for priority (low, medium, high)
- A drag handle or indication it can be dragged

The card should have:
- A clean white background
- Subtle border
- Style consistent with our overall board design`,
            tooltips: [
              {
                text: "Building on our Kanban board, let's create the task card component.",
                explanation: "Reference the previous work to maintain context and continuity.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "A colored label for priority (low, medium, high)",
                explanation: "Specify visual indicators for important data attributes.",
                highlightColor: "#06b6d4",
              },
            ],
          },
          v0: {
            content: `Let's create the task card component for our Kanban board.

Implement a task card with:
- Title field (prominent)
- Description field (collapsible)
- Assignee field with user avatar
- Due date with calendar icon
- Priority label (color-coded: green for low, yellow for medium, red for high)
- Visual indication it's draggable

Style the card with:
- White background
- Subtle border and shadow
- Consistent spacing
- Hover effect to indicate interactivity`,
            tooltips: [
              {
                text: "Let's create the task card component for our Kanban board.",
                explanation: "Clear statement of what we're building in this phase.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "Priority label (color-coded: green for low, yellow for medium, red for high)",
                explanation: "Specific color guidance for visual indicators.",
                highlightColor: "#06b6d4",
              },
            ],
          },
          lovable: {
            content: `Now let's add task cards to our Kanban board.

Each card should include:
- A title at the top
- A description that can be expanded or collapsed
- A place to assign the task to someone
- A due date
- A colored tag showing if it's low, medium, or high priority
- Some way to show it can be dragged

Make the cards look nice with:
- A white background
- A thin border
- A design that matches our board`,
            tooltips: [
              {
                text: "Now let's add task cards to our Kanban board.",
                explanation: "Simple, conversational transition to the next phase.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "A colored tag showing if it's low, medium, or high priority",
                explanation: "Using simple language to describe visual indicators.",
                highlightColor: "#06b6d4",
              },
            ],
          },
          replit: {
            content: `Let's implement the TaskCard component for our Kanban board:

1. Create a new file TaskCard.jsx with the following structure:
   - Title input field (required)
   - Description textarea (expandable/collapsible)
   - Assignee select dropdown
   - DatePicker for due date
   - Priority select with color indicators
   - Drag handle icon or cursor styling

2. Style the component:
   - White background (#ffffff)
   - Border: 1px solid #e0e0e0
   - Border-radius: 8px
   - Box-shadow: 0 2px 4px rgba(0,0,0,0.05)
   - Padding: 16px
   - Margin-bottom: 12px

3. Implement state management:
   - Create props for all card data
   - Add onChange handlers for editable fields
   - Include drag event handlers`,
            tooltips: [
              {
                text: "Let's implement the TaskCard component for our Kanban board:",
                explanation: "Technical introduction with clear component focus.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "Create a new file TaskCard.jsx with the following structure:",
                explanation: "Specific file structure guidance for developers.",
                highlightColor: "#06b6d4",
              },
            ],
          },
        },
      },
      {
        id: "phase-3",
        title: "Drag-and-Drop Functionality",
        description: "Implement the drag-and-drop behavior between columns",
        order: 3,
        prompts: {
          bolt: {
            content: `Now let's add drag-and-drop functionality to our Kanban board.

We need to:
- Make task cards draggable
- Allow dropping cards into different columns
- Update the task status when moved between columns
- Add visual feedback during dragging (highlight drop zones)
- Ensure smooth animations during transitions

Please implement this using:
- HTML5 Drag and Drop API or a library like react-dnd
- Appropriate event handlers for drag start, over, and drop
- State updates to reflect the new positions`,
            tooltips: [
              {
                text: "Now let's add drag-and-drop functionality to our Kanban board.",
                explanation: "Clear transition to the interactive functionality phase.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "HTML5 Drag and Drop API or a library like react-dnd",
                explanation: "Suggesting implementation approaches while keeping options open.",
                highlightColor: "#06b6d4",
              },
            ],
          },
          v0: {
            content: `Let's implement drag-and-drop functionality for our Kanban board tasks.

Add the following features:
- Draggable task cards that can be moved between columns
- Visual feedback when dragging (shadow, opacity change)
- Highlighted drop zones to show where cards can be placed
- Smooth animations for the drag and drop process
- Status updates when cards move between columns

Implementation details:
- Use the dnd-kit library for React
- Set up DndContext and draggable/droppable zones
- Handle the onDragEnd event to update task status
- Persist the new order of tasks after dropping
- Add subtle transitions for a polished feel`,
            tooltips: [
              {
                text: "Let's implement drag-and-drop functionality for our Kanban board tasks.",
                explanation: "Direct statement of the feature we're implementing.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "Use the dnd-kit library for React",
                explanation: "Specific library recommendation for modern React applications.",
                highlightColor: "#06b6d4",
              },
            ],
          },
          lovable: {
            content: `Now let's make our cards draggable so users can move tasks between columns.

Here's what we want to add:
- The ability to drag cards from one column to another
- A visual change when a card is being dragged (like making it slightly transparent)
- A highlight effect on columns where the card can be dropped
- The task status should update automatically when moved to a new column

Let's keep it simple by:
- Using a drag-and-drop library that's easy to work with
- Adding just enough visual feedback so users understand what's happening
- Making sure it works well on both computers and tablets`,
            tooltips: [
              {
                text: "Now let's make our cards draggable so users can move tasks between columns.",
                explanation: "Simple, user-focused description of the feature.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "A visual change when a card is being dragged (like making it slightly transparent)",
                explanation: "Concrete example of visual feedback in plain language.",
                highlightColor: "#06b6d4",
              },
            ],
          },
          replit: {
            content: `Let's implement drag-and-drop functionality for our Kanban board:

1. Install required dependencies:
   \`\`\`
   npm install react-beautiful-dnd
   \`\`\`

2. Import components in your main file:
   \`\`\`jsx
   import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
   \`\`\`

3. Implement the DragDropContext wrapper:
   \`\`\`jsx
   <DragDropContext onDragEnd={handleDragEnd}>
     {/* Column components */}
   </DragDropContext>
   \`\`\`

4. Create the handleDragEnd function:
   \`\`\`jsx
   const handleDragEnd = (result) => {
     const { source, destination, draggableId } = result;
     
     // Return if dropped outside a droppable area
     if (!destination) return;
     
     // Return if dropped in the same position
     if (
       source.droppableId === destination.droppableId &&
       source.index === destination.index
     ) return;
     
     // Handle the state update logic here
     // ...
   };
   \`\`\`

5. Wrap each column with Droppable:
   \`\`\`jsx
   <Droppable droppableId="column-id">
     {(provided) => (
       <div
         ref={provided.innerRef}
         {...provided.droppableProps}
       >
         {/* Task cards */}
         {provided.placeholder}
       </div>
     )}
   </Droppable>
   \`\`\`

6. Wrap each task card with Draggable:
   \`\`\`jsx
   <Draggable draggableId={task.id} index={index}>
     {(provided, snapshot) => (
       <div
         ref={provided.innerRef}
         {...provided.draggableProps}
         {...provided.dragHandleProps}
         style={{
           ...provided.draggableProps.style,
           opacity: snapshot.isDragging ? 0.8 : 1,
         }}
       >
         {/* Task card content */}
       </div>
     )}
   </Draggable>
   \`\`\``,
            tooltips: [
              {
                text: "Let's implement drag-and-drop functionality for our Kanban board:",
                explanation: "Technical introduction with clear implementation focus.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "npm install react-beautiful-dnd",
                explanation: "Specific package installation command.",
                highlightColor: "#06b6d4",
              },
              {
                text: "const handleDragEnd = (result) => {",
                explanation: "Key function for handling the drag and drop logic.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
        },
      },
    ],
  },
  {
    id: "personal-dashboard",
    title: "Personal Dashboard for Tracking Habits",
    description: "Create a customizable dashboard to track daily habits and goals",
    difficulty: "Beginner",
    timeEstimate: "Half-day",
    previewImage: "/modern-personal-dashboard.png",
    completionCount: 2156,
    learningPoints: [
      "Building responsive dashboard layouts",
      "Creating interactive charts and visualizations",
      "Implementing form controls for data entry",
      "Using local storage for data persistence",
    ],
    phases: [
      {
        id: "phase-1",
        title: "Dashboard Layout and Components",
        description: "Create the basic dashboard structure and layout",
        order: 1,
        prompts: {
          bolt: {
            content: `Let's build a personal dashboard for tracking daily habits and goals. Let's start with requirements analysis.

## REQUIREMENTS ANALYSIS

1. **Project Overview**
   - Create a customizable dashboard for tracking personal habits and goals
   - Problem: People struggle to maintain visibility of their habits and progress
   - Solution: Visual dashboard with tracking widgets and progress visualization

2. **Core Features**
   - Habit tracking with completion status
   - Progress visualization over time
   - Customizable dashboard layout
   - Daily/weekly/monthly views

3. **User Flow**
   - User logs in to view dashboard
   - User can mark habits as complete
   - User can add new habits
   - User can view progress statistics

## IMPLEMENTATION - PHASE 1

For our first phase, please create:
- A header with the title "My Habit Dashboard" and user profile section
- A sidebar with navigation options (Dashboard, Habits, Progress, Settings)
- A main content area with a grid layout for widgets
- An "Add New Habit" button in the top right of the content area

Style the dashboard with:
- A light color scheme with accent colors for important elements
- Card-based widgets with consistent styling
- Responsive layout that works on desktop and tablets
- Clear typography hierarchy for readability`,
            tooltips: [
              {
                text: "Let's build a personal dashboard for tracking daily habits and goals. Let's start with requirements analysis.",
                explanation: "Start with a clear statement of what you're building and establish a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          v0: {
            content: `Let's build a personal dashboard for tracking daily habits and goals. Let's start with requirements analysis.

## REQUIREMENTS ANALYSIS

1. **Project Overview**
   - Create a customizable dashboard for tracking personal habits and goals
   - Problem: People struggle to maintain visibility of their habits and progress
   - Solution: Visual dashboard with tracking widgets and progress visualization

2. **Core Features**
   - Habit tracking with completion status
   - Progress visualization over time
   - Customizable dashboard layout
   - Daily/weekly/monthly views

3. **User Flow**
   - User logs in to view dashboard
   - User can mark habits as complete
   - User can add new habits
   - User can view progress statistics

## IMPLEMENTATION - PHASE 1

For our first phase, please create:
- A header with the title "My Habit Dashboard" and user profile section
- A sidebar with navigation options (Dashboard, Habits, Progress, Settings)
- A main content area with a grid layout for widgets
- An "Add New Habit" button in the top right of the content area

Use shadcn/ui components and Tailwind CSS for styling with:
- Light theme with accent colors for important elements
- Card-based widgets with consistent styling
- Responsive layout that works on desktop and tablets
- Clear typography hierarchy for readability`,
            tooltips: [
              {
                text: "Let's build a personal dashboard for tracking daily habits and goals. Let's start with requirements analysis.",
                explanation: "Start with a clear statement of what you're building and establish a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          replit: {
            content: `Let's create a React personal habit tracking dashboard. First, let's analyze requirements before implementation.

## REQUIREMENTS ANALYSIS

1. **Project Scope**
   - Create a customizable dashboard for tracking personal habits and goals
   - Problem: Users need a centralized way to track habit consistency
   - Solution: Interactive dashboard with tracking widgets and visualizations

2. **Core Functionality Requirements**
   - Habit tracking with completion status
   - Progress visualization over time
   - Customizable dashboard layout
   - Daily/weekly/monthly views

3. **Technical Structure**
   - React component hierarchy
   - State management approach
   - Data persistence strategy
   - Responsive design implementation

## IMPLEMENTATION - PHASE 1

Let's implement the basic structure:

1. Create a React personal habit tracking dashboard with the following features:

   a. Structure:
   - Header component with title "My Habit Dashboard" and user profile
   - Sidebar component with navigation links (Dashboard, Habits, Progress, Settings)
   - Main content area with grid layout for widgets
   - FloatingActionButton component for "Add New Habit"

   b. Styling:
   - Use CSS modules or styled-components
   - Implement a clean, minimalist design with light color scheme
   - Create card components for widgets with consistent styling
   - Ensure responsive layout using CSS Grid or Flexbox
   - Implement proper typography scale for headings and body text

   c. Initial State:
   - Set up React Router for navigation between sections
   - Create placeholder widgets for the dashboard view
   - Implement basic state management for active navigation item
   - Prepare mock data structure for habits and tracking`,
            tooltips: [
              {
                text: "Let's create a React personal habit tracking dashboard. First, let's analyze requirements before implementation.",
                explanation: "Start with a technical introduction that establishes a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
        },
      },
      {
        id: "phase-2",
        title: "Habit Tracking Widgets",
        description: "Create the individual tracking widgets for the dashboard",
        order: 2,
        prompts: {
          bolt: { content: "", tooltips: [] },
          v0: { content: "", tooltips: [] },
          lovable: { content: "", tooltips: [] },
          replit: { content: "", tooltips: [] },
        },
      },
    ],
  },
  // After the personal-dashboard project entry, add back the missing projects with our new structured prompt format:

  {
    id: "product-landing",
    title: "Product Landing Page with Signup Form",
    description: "Build a professional landing page with email signup functionality",
    difficulty: "Beginner",
    timeEstimate: "1-2 hours",
    previewImage: "/modern-tech-landing.png",
    completionCount: 3421,
    learningPoints: [
      "Creating compelling landing page layouts",
      "Implementing responsive design principles",
      "Building effective call-to-action elements",
      "Setting up form validation and submission",
    ],
    phases: [
      {
        id: "phase-1",
        title: "Hero Section and Navigation",
        description: "Create the main hero section and navigation bar",
        order: 1,
        prompts: {
          bolt: {
            content: `Let's create a product landing page with email signup functionality. Let's start with requirements analysis.

## REQUIREMENTS ANALYSIS

1. **Project Overview**
   - Create a professional landing page to showcase a product and collect email signups
   - Problem: Need to attract and convert visitors into leads
   - Solution: Compelling landing page with clear value proposition and signup form

2. **Core Features**
   - Attractive hero section with clear value proposition
   - Email signup form with validation
   - Product features/benefits section
   - Responsive design for all devices

3. **User Flow**
   - User arrives on landing page
   - User learns about product benefits
   - User decides to sign up for more information
   - User receives confirmation of signup

## IMPLEMENTATION - PHASE 1

For our first phase, please create:
- A navigation bar with logo, product name, and key links
- A hero section with compelling headline, subheading, and call-to-action
- A simple email signup form with validation
- Basic styling for a professional appearance

Style the landing page with:
- Modern, clean design with appropriate whitespace
- Attention-grabbing hero section with background image or gradient
- Clear typography hierarchy for readability
- Responsive layout that works on all devices`,
            tooltips: [
              {
                text: "Let's create a product landing page with email signup functionality. Let's start with requirements analysis.",
                explanation: "Start with a clear statement of what you're building and establish a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          v0: {
            content: `Let's create a product landing page with email signup functionality. Let's start with requirements analysis.

## REQUIREMENTS ANALYSIS

1. **Project Overview**
   - Create a professional landing page to showcase a product and collect email signups
   - Problem: Need to attract and convert visitors into leads
   - Solution: Compelling landing page with clear value proposition and signup form

2. **Core Features**
   - Attractive hero section with clear value proposition
   - Email signup form with validation
   - Product features/benefits section
   - Responsive design for all devices

3. **User Flow**
   - User arrives on landing page
   - User learns about product benefits
   - User decides to sign up for more information
   - User receives confirmation of signup

## IMPLEMENTATION - PHASE 1

For our first phase, please create:
- A navigation bar with logo, product name, and key links
- A hero section with compelling headline, subheading, and call-to-action
- A simple email signup form with validation
- Basic styling for a professional appearance

Use shadcn/ui components and Tailwind CSS for styling with:
- Modern, clean design with appropriate whitespace
- Attention-grabbing hero section with background image or gradient
- Clear typography hierarchy for readability
- Responsive layout that works on all devices`,
            tooltips: [
              {
                text: "Let's create a product landing page with email signup functionality. First, let's analyze requirements before implementation.",
                explanation: "Start with a clear statement of what you're building and establish a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          lovable: {
            content: `Let's create a landing page for a product with a way for people to sign up. First, let's think about what we need.

## WHAT WE'RE TRYING TO SOLVE

1. **The Big Picture**
   - We want to make a page that shows off a product and collects email addresses
   - Problem: We need to turn website visitors into interested leads
   - Solution: An attractive page that explains the product and makes signing up easy

2. **Main Features We Need**
   - An eye-catching top section with a clear message
   - A simple form to collect email addresses
   - Sections that show the product's benefits
   - A design that works on phones, tablets, and computers

3. **How People Will Use It**
   - They'll land on our page
   - They'll read about what makes our product special
   - If interested, they'll enter their email to learn more
   - They'll get a message confirming their signup

## NOW LET'S BUILD - FIRST STEP

For our first step, let's create:
- A navigation bar with a logo, product name, and a few important links
- A top section with a strong headline, brief explanation, and signup button
- A simple form that collects email addresses
- Basic styling to make it look professional

I want it to look modern and clean with:
- Plenty of space so it's not crowded
- An attractive top section with a nice background
- Text that's easy to read with different sizes for importance
- A design that looks good on any device`,
            tooltips: [
              {
                text: "Let's create a landing page for a product with a way for people to sign up. First, let's think about what we need.",
                explanation:
                  "Start with a friendly, conversational introduction that establishes a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## WHAT WE'RE TRYING TO SOLVE",
                explanation: "Use simple language to frame the requirements analysis in an approachable way.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## NOW LET'S BUILD - FIRST STEP",
                explanation: "Clearly transition to implementation with straightforward instructions.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          replit: {
            content: `Let's create a React product landing page with email signup functionality. First, let's analyze requirements before implementation.

## REQUIREMENTS ANALYSIS

1. **Project Scope**
   - Create a professional landing page to showcase a product and collect email signups
   - Problem: Need to attract and convert visitors into interested leads
   - Solution: Compelling landing page with clear value proposition and signup form

2. **Core Functionality Requirements**
   - Attractive hero section with clear value proposition
   - Email signup form with validation
   - Product features/benefits section
   - Responsive design for all devices

3. **Technical Structure**
   - React component hierarchy
   - Form validation approach
   - Responsive design implementation
   - Data handling for form submission

## IMPLEMENTATION - PHASE 1

Let's implement the basic structure:

1. Create a React product landing page with the following features:

   a. Structure:
   - Navigation component with logo, product name, and navigation links
   - Hero component with headline, subheading, and CTA button
   - EmailSignup component with form fields and validation
   - Basic page layout with appropriate sections

   b. Styling:
   - Use CSS modules or styled-components
   - Implement a modern, clean design with appropriate whitespace
   - Create a visually appealing hero section with background image or gradient
   - Ensure responsive layout using media queries
   - Implement proper typography scale for headings and body text

   c. Functionality:
   - Implement form validation for email field
   - Create form submission handler
   - Add basic animations for interactive elements
   - Ensure accessibility compliance for all interactive elements`,
            tooltips: [
              {
                text: "Let's create a React product landing page with email signup functionality. First, let's analyze requirements before implementation.",
                explanation: "Start with a technical introduction that establishes a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
        },
      },
    ],
  },
  {
    id: "content-management",
    title: "Simple Content Management System",
    description: "Build a basic CMS for managing blog posts or articles",
    difficulty: "Advanced",
    timeEstimate: "Weekend",
    previewImage: "/modern-cms-dashboard.png",
    completionCount: 876,
    learningPoints: [
      "Creating admin interfaces and dashboards",
      "Implementing CRUD operations",
      "Building rich text editors",
      "Setting up authentication and authorization",
    ],
    phases: [
      {
        id: "phase-1",
        title: "Admin Dashboard and Content List",
        description: "Create the admin interface and content listing page",
        order: 1,
        prompts: {
          bolt: {
            content: `Let's create a simple content management system for blog posts. Let's start with requirements analysis.

## REQUIREMENTS ANALYSIS

1. **Project Overview**
   - Create a basic CMS for managing blog posts or articles
   - Problem: Content creators need an easy way to manage their content
   - Solution: Admin interface with CRUD operations for content management

2. **Core Features**
   - Content listing with search and filter
   - Content creation with rich text editor
   - Content editing and updating
   - Content deletion with confirmation
   - User authentication and authorization

3. **User Flow**
   - Admin logs in to the system
   - Admin views list of existing content
   - Admin can create, edit, or delete content
   - Admin can publish or unpublish content

## IMPLEMENTATION - PHASE 1

For our first phase, please create:
- An admin dashboard layout with navigation
- A content listing page with table/grid view
- Basic search and filter functionality
- A "Create New" button that links to a creation form
- Action buttons for edit and delete operations

Style the admin interface with:
- Clean, functional design focused on usability
- Clear visual hierarchy for content and actions
- Responsive layout that works on desktop and tablets
- Consistent styling for interactive elements`,
            tooltips: [
              {
                text: "Let's create a simple content management system for blog posts. Let's start with requirements analysis.",
                explanation: "Start with a clear statement of what you're building and establish a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          v0: {
            content: `Let's create a simple content management system for blog posts. Let's start with requirements analysis.

## REQUIREMENTS ANALYSIS

1. **Project Overview**
   - Create a basic CMS for managing blog posts or articles
   - Problem: Content creators need an easy way to manage their content
   - Solution: Admin interface with CRUD operations for content management

2. **Core Features**
   - Content listing with search and filter
   - Content creation with rich text editor
   - Content editing and updating
   - Content deletion with confirmation
   - User authentication and authorization

3. **User Flow**
   - Admin logs in to the system
   - Admin views list of existing content
   - Admin can create, edit, or delete content
   - Admin can publish or unpublish content

## IMPLEMENTATION - PHASE 1

For our first phase, please create:
- An admin dashboard layout with navigation
- A content listing page with table/grid view
- Basic search and filter functionality
- A "Create New" button that links to a creation form
- Action buttons for edit and delete operations

Use shadcn/ui components and Tailwind CSS for styling with:
- Clean, functional design focused on usability
- Clear visual hierarchy for content and actions
- Responsive layout that works on desktop and tablets
- Consistent styling for interactive elements`,
            tooltips: [
              {
                text: "Let's create a simple content management system for blog posts. Let's start with requirements analysis.",
                explanation: "Start with a clear statement of what you're building and establish a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          lovable: {
            content: `Let's create a simple system to manage blog posts or articles. First, let's think about what we need.

## WHAT WE'RE TRYING TO SOLVE

1. **The Big Picture**
   - We want to make a system where people can manage their blog posts
   - Problem: It's hard to organize, create, and update content without a system
   - Solution: A simple dashboard where you can see and work with all your content

2. **Main Features We Need**
   - A list of all your content with search and sorting
   - A way to create new posts with formatting options
   - The ability to edit existing posts
   - A way to delete posts you don't want anymore
   - Login protection so only you can access it

3. **How People Will Use It**
   - Log in to the system
   - See a list of all their content
   - Create new posts, edit existing ones, or remove old ones
   - Control whether posts are visible to the public or not

## NOW LET'S BUILD - FIRST STEP

For our first step, let's create:
- A dashboard layout with a sidebar for navigation
- A main page that shows all your content in a list or grid
- A search box and some filters to find specific posts
- A button to create new content
- Buttons on each post for editing and deleting

I want it to look clean and professional with:
- A simple, easy-to-use design
- Clear organization of information
- A layout that works on computers and tablets
- Consistent buttons and controls that are easy to understand`,
            tooltips: [
              {
                text: "Let's create a simple system to manage blog posts or articles. First, let's think about what we need.",
                explanation:
                  "Start with a friendly, conversational introduction that establishes a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## WHAT WE'RE TRYING TO SOLVE",
                explanation: "Use simple language to frame the requirements analysis in an approachable way.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## NOW LET'S BUILD - FIRST STEP",
                explanation: "Clearly transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          replit: {
            content: `Let's create a React content management system for blog posts. First, let's analyze requirements before implementation.

## REQUIREMENTS ANALYSIS

1. **Project Scope**
   - Create a basic CMS for managing blog posts or articles
   - Problem: Content creators need an easy way to manage their content
   - Solution: Admin interface with CRUD operations for content management

2. **Core Functionality Requirements**
   - Content listing with search and filter
   - Content creation with rich text editor
   - Content editing and updating
   - Content deletion with confirmation
   - User authentication and authorization

3. **Technical Structure**
   - React component hierarchy
   - State management approach
   - API integration for data operations
   - Authentication implementation
   - Form handling and validation

## IMPLEMENTATION - PHASE 1

Let's implement the basic structure:

1. Create a React admin dashboard with the following features:

   a. Structure:
   - Layout component with navigation sidebar and content area
   - ContentList component with table/grid view
   - SearchFilter component for content filtering
   - ActionButton components for CRUD operations
   - Basic routing setup for navigation between views

   b. Styling:
   - Use CSS modules or styled-components
   - Implement a clean, functional design focused on usability
   - Create consistent styling for tables, forms, and buttons
   - Ensure responsive layout using media queries
   - Implement proper visual hierarchy for content and actions

   c. Functionality:
   - Set up mock data for content items
   - Implement search and filter functionality
   - Create handlers for edit and delete actions
   - Set up routing for create/edit forms
   - Implement basic state management for content list`,
            tooltips: [
              {
                text: "Let's create a React content management system for blog posts. First, let's analyze requirements before implementation.",
                explanation: "Start with a technical introduction that establishes a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
        },
      },
    ],
  },
  {
    id: "expense-tracker",
    title: "Personal Expense Tracker",
    description: "Build an app to track and categorize personal expenses",
    difficulty: "Intermediate",
    timeEstimate: "Full day",
    previewImage: "/clean-expense-tracker.png",
    completionCount: 1532,
    learningPoints: [
      "Creating forms for data entry",
      "Building interactive charts for data visualization",
      "Implementing filtering and sorting functionality",
      "Using local storage for data persistence",
    ],
    phases: [
      {
        id: "phase-1",
        title: "Expense Entry Form and List",
        description: "Create the form for adding expenses and the expense list view",
        order: 1,
        prompts: {
          bolt: {
            content: `Let's create a personal expense tracker application. Let's start with requirements analysis.

## REQUIREMENTS ANALYSIS

1. **Project Overview**
   - Create an app to track and categorize personal expenses
   - Problem: People need to monitor and understand their spending habits
   - Solution: Interactive expense tracker with visualization and categorization

2. **Core Features**
   - Expense entry with amount, category, date, and notes
   - Expense listing with sorting and filtering
   - Expense categorization and tagging
   - Expense visualization with charts
   - Data persistence for expense history

3. **User Flow**
   - User adds new expenses with details
   - User views list of past expenses
   - User filters and sorts expenses by various criteria
   - User views charts and summaries of spending patterns

## IMPLEMENTATION - PHASE 1

For our first phase, please create:
- An expense entry form with fields for amount, category, date, and notes
- A list view of expenses with key information displayed
- Basic sorting and filtering functionality
- A simple summary section showing total expenses

Style the application with:
- Clean, accessible design with clear form labels
- Consistent card-based layout for expense items
- Responsive design that works on mobile and desktop
- Visual differentiation between expense categories`,
            tooltips: [
              {
                text: "Let's create a personal expense tracker application. Let's start with requirements analysis.",
                explanation: "Start with a clear statement of what you're building and establish a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          v0: {
            content: `Let's create a personal expense tracker application. Let's start with requirements analysis.

## REQUIREMENTS ANALYSIS

1. **Project Overview**
   - Create an app to track and categorize personal expenses
   - Problem: People need to monitor and understand their spending habits
   - Solution: Interactive expense tracker with visualization and categorization

2. **Core Features**
   - Expense entry with amount, category, date, and notes
   - Expense listing with sorting and filtering
   - Expense categorization and tagging
   - Expense visualization with charts
   - Data persistence for expense history

3. **User Flow**
   - User adds new expenses with details
   - User views list of past expenses
   - User filters and sorts expenses by various criteria
   - User views charts and summaries of spending patterns

## IMPLEMENTATION - PHASE 1

For our first phase, please create:
- An expense entry form with fields for amount, category, date, and notes
- A list view of expenses with key information displayed
- Basic sorting and filtering functionality
- A simple summary section showing total expenses

Use shadcn/ui components and Tailwind CSS for styling with:
- Clean, accessible design with clear form labels
- Consistent card-based layout for expense items
- Responsive design that works on mobile and desktop
- Visual differentiation between expense categories`,
            tooltips: [
              {
                text: "Let's create a personal expense tracker application. Let's start with requirements analysis.",
                explanation: "Start with a clear statement of what you're building and establish a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          lovable: {
            content: `Let's create an app to help you track your personal expenses. First, let's think about what we need.

## WHAT WE'RE TRYING TO SOLVE

1. **The Big Picture**
   - We want to make an app where you can track what you spend money on
   - Problem: It's hard to know where your money goes without tracking it
   - Solution: A simple app that lets you record and categorize expenses

2. **Main Features We Need**
   - A form to enter new expenses with amount, category, date, and notes
   - A list that shows all your past expenses
   - Ways to sort and filter expenses to find what you're looking for
   - Charts or graphs to see spending patterns
   - Saving your expenses so they doesn't disappear when you close the app

3. **How People Will Use It**
   - Add new expenses as they spend money
   - Look back at what they've spent in the past
   - Filter expenses by date, category, or amount
   - See summaries of their spending habits

## NOW LET'S BUILD - FIRST STEP

For our first step, let's create:
- A form with fields for entering expense amount, category, date, and notes
- A list that shows all expenses with the most important information
- Some basic sorting and filtering options
- A simple summary that shows the total amount spent

I want it to look clean and easy to use with:
- Clear labels and instructions for the form
- A consistent design for each expense in the list
- A design that works well on both phones and computers
- Different colors or icons for different expense categories`,
            tooltips: [
              {
                text: "Let's create an app to help you track your personal expenses. First, let's think about what we need.",
                explanation:
                  "Start with a friendly, conversational introduction that establishes a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## WHAT WE'RE TRYING TO SOLVE",
                explanation: "Use simple language to frame the requirements analysis in an approachable way.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## NOW LET'S BUILD - FIRST STEP",
                explanation: "Clearly transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          replit: {
            content: `Let's create a React personal expense tracker application. First, let's analyze requirements before implementation.

## REQUIREMENTS ANALYSIS

1. **Project Scope**
   - Create an app to track and categorize personal expenses
   - Problem: People need to monitor and understand their spending habits
   - Solution: Interactive expense tracker with visualization and categorization

2. **Core Functionality Requirements**
   - Expense entry with amount, category, date, and notes
   - Expense listing with sorting and filtering
   - Expense categorization and tagging
   - Expense visualization with charts
   - Data persistence for expense history

3. **Technical Structure**
   - React component hierarchy
   - Form handling and validation
   - Data storage approach
   - Filtering and sorting implementation
   - Chart library integration

## IMPLEMENTATION - PHASE 1

Let's implement the basic structure:

1. Create a React expense tracker with the following features:

   a. Structure:
   - ExpenseForm component with input fields for amount, category, date, and notes
   - ExpenseList component to display entered expenses
   - FilterSort component for filtering and sorting options
   - Summary component to display expense totals
   - Main App component to manage state and layout

   b. Styling:
   - Use CSS modules or styled-components
   - Implement a clean, accessible design with clear form labels
   - Create consistent card-based layout for expense items
   - Ensure responsive design using media queries
   - Add visual differentiation between expense categories

   c. Functionality:
   - Implement form validation for expense entry
   - Create state management for expense data
   - Add sorting functionality by date, amount, and category
   - Implement filtering by date range and category
   - Set up localStorage for basic data persistence`,
            tooltips: [
              {
                text: "Let's create a React personal expense tracker application. First, let's analyze requirements before implementation.",
                explanation: "Start with a technical introduction that establishes a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
        },
      },
    ],
  },
  {
    id: "recipe-finder",
    title: "Recipe Finder with Search and Filters",
    description: "Create a recipe discovery app with search and filtering capabilities",
    difficulty: "Intermediate",
    timeEstimate: "Full day",
    previewImage: "/recipe-finder-app-interface.png",
    completionCount: 987,
    learningPoints: [
      "Implementing search functionality",
      "Creating filter and sort interfaces",
      "Building responsive card layouts",
      "Working with external APIs for recipe data",
    ],
    phases: [
      {
        id: "phase-1",
        title: "Recipe Search and Display",
        description: "Create the search interface and recipe card display",
        order: 1,
        prompts: {
          bolt: {
            content: `Let's create a recipe finder application with search and filtering capabilities. Let's start with requirements analysis.

## REQUIREMENTS ANALYSIS

1. **Project Overview**
   - Create a recipe discovery app with search and filtering capabilities
   - Problem: People need help finding recipes that match their preferences and available ingredients
   - Solution: Interactive recipe finder with search, filters, and detailed recipe views

2. **Core Features**
   - Recipe search by name or ingredients
   - Filtering by cuisine type, dietary restrictions, cooking time
   - Recipe card display with key information
   - Detailed recipe view with instructions and ingredients
   - Favorite recipes functionality

3. **User Flow**
   - User searches for recipes using keywords or ingredients
   - User applies filters to narrow down results
   - User browses recipe cards with preview information
   - User clicks on recipe for detailed view
   - User can save favorite recipes

## IMPLEMENTATION - PHASE 1

For our first phase, please create:
- A search bar with placeholder text for recipe or ingredient search
- Filter options for cuisine type, dietary restrictions, and cooking time
- A grid layout of recipe cards showing image, title, cooking time, and difficulty
- A responsive design that works on mobile and desktop

Style the application with:
- Clean, food-focused design with appetizing colors
- Card-based layout with consistent spacing
- Clear typography for recipe information
- Responsive grid that adapts to different screen sizes`,
            tooltips: [
              {
                text: "Let's create a recipe finder application with search and filtering capabilities. Let's start with requirements analysis.",
                explanation: "Start with a clear statement of what you're building and establish a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          v0: {
            content: `Let's create a recipe finder application with search and filtering capabilities. Let's start with requirements analysis.

## REQUIREMENTS ANALYSIS

1. **Project Overview**
   - Create a recipe discovery app with search and filtering capabilities
   - Problem: People need help finding recipes that match their preferences and available ingredients
   - Solution: Interactive recipe finder with search, filters, and detailed recipe views

2. **Core Features**
   - Recipe search by name or ingredients
   - Filtering by cuisine type, dietary restrictions, cooking time
   - Recipe card display with key information
   - Detailed recipe view with instructions and ingredients
   - Favorite recipes functionality

3. **User Flow**
   - User searches for recipes using keywords or ingredients
   - User applies filters to narrow down results
   - User browses recipe cards with preview information
   - User clicks on recipe for detailed view
   - User can save favorite recipes

## IMPLEMENTATION - PHASE 1

For our first phase, please create:
- A search bar with placeholder text for recipe or ingredient search
- Filter options for cuisine type, dietary restrictions, and cooking time
- A grid layout of recipe cards showing image, title, cooking time, and difficulty
- A responsive design that works on mobile and desktop

Use shadcn/ui components and Tailwind CSS for styling with:
- Clean, food-focused design with appetizing colors
- Card-based layout with consistent spacing
- Clear typography for recipe information
- Responsive grid that adapts to different screen sizes`,
            tooltips: [
              {
                text: "Let's create a recipe finder application with search and filtering capabilities. Let's start with requirements analysis.",
                explanation: "Start with a clear statement of what you're building and establish a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          lovable: {
            content: `Let's create an app to help people find recipes they'll love. First, let's think about what we need.

## WHAT WE'RE TRYING TO SOLVE

1. **The Big Picture**
   - We want to make an app where people can search for recipes and find ones they like
   - Problem: It's hard to find recipes that match what you want to cook or what ingredients you have
   - Solution: A search app with filters to help people find the perfect recipe

2. **Main Features We Need**
   - A search box where people can type recipe names or ingredients
   - Filters for things like cuisine type, dietary needs, and how long it takes to cook
   - Recipe cards that show a picture, title, and basic info
   - A detailed view when someone clicks on a recipe
   - A way to save favorite recipes

3. **How People Will Use It**
   - Search for recipes using keywords or ingredients they have
   - Use filters to find recipes that match their preferences
   - Browse through recipe cards to see what looks good
   - Click on recipes to see full details and instructions
   - Save recipes they want to try later

## NOW LET'S BUILD - FIRST STEP

For our first step, let's create:
- A search bar with helpful placeholder text
- Filter buttons or dropdowns for cuisine, dietary restrictions, and cooking time
- A grid of recipe cards showing pictures, titles, cooking time, and difficulty level
- A design that looks good on phones, tablets, and computers

I want it to look appetizing and inviting with:
- Colors and design that make food look appealing
- Cards that are easy to scan and compare
- Text that's easy to read with good contrast
- A layout that adjusts nicely to different screen sizes`,
            tooltips: [
              {
                text: "Let's create an app to help people find recipes they'll love. First, let's think about what we need.",
                explanation:
                  "Start with a friendly, conversational introduction that establishes a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## WHAT WE'RE TRYING TO SOLVE",
                explanation: "Use simple language to frame the requirements analysis in an approachable way.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## NOW LET'S BUILD - FIRST STEP",
                explanation: "Clearly transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          replit: {
            content: `Let's create a React recipe finder application with search and filtering capabilities. First, let's analyze requirements before implementation.

## REQUIREMENTS ANALYSIS

1. **Project Scope**
   - Create a recipe discovery app with search and filtering capabilities
   - Problem: People need help finding recipes that match their preferences and available ingredients
   - Solution: Interactive recipe finder with search, filters, and detailed recipe views

2. **Core Functionality Requirements**
   - Recipe search by name or ingredients
   - Filtering by cuisine type, dietary restrictions, cooking time
   - Recipe card display with key information
   - Detailed recipe view with instructions and ingredients
   - Favorite recipes functionality

3. **Technical Structure**
   - React component hierarchy
   - Search and filter state management
   - API integration for recipe data
   - Responsive grid layout implementation
   - Local storage for favorites

## IMPLEMENTATION - PHASE 1

Let's implement the basic structure:

1. Create a React recipe finder with the following features:

   a. Structure:
   - SearchBar component with input field and search functionality
   - FilterPanel component with cuisine, dietary, and time filters
   - RecipeGrid component to display recipe cards
   - RecipeCard component with image, title, cooking time, and difficulty
   - Main App component to manage state and layout

   b. Styling:
   - Use CSS modules or styled-components
   - Implement a clean, food-focused design with appetizing colors
   - Create consistent card-based layout with proper spacing
   - Ensure responsive grid layout using CSS Grid or Flexbox
   - Add clear typography for recipe information

   c. Functionality:
   - Implement search functionality with debounced input
   - Create filter state management for multiple filter types
   - Set up mock recipe data for initial development
   - Add responsive grid that adapts to different screen sizes
   - Implement basic recipe card interactions`,
            tooltips: [
              {
                text: "Let's create a React recipe finder application with search and filtering capabilities. First, let's analyze requirements before implementation.",
                explanation: "Start with a technical introduction that establishes a two-stage approach.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "## REQUIREMENTS ANALYSIS",
                explanation: "Explicitly separate requirements analysis from implementation for better results.",
                highlightColor: "#06b6d4",
              },
              {
                text: "## IMPLEMENTATION - PHASE 1",
                explanation: "Clearly mark the transition to implementation with specific technical deliverables.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
        },
      },
    ],
  },
]

// Mock data for guides
export const guidesMockData = [
  {
    id: "ai-development",
    title: "AI Development Guide",
    description: "Complete guide to building applications with AI assistance",
    category: "AI Development",
    readTime: "15 min read",
    difficulty: "Beginner",
    lastUpdated: "2024-01-15",
    sections: [
      {
        id: "planning",
        title: "Planning Your AI Project",
        description: "Learn how to plan and structure your AI-powered application",
        readTime: "5 min",
      },
      {
        id: "workflow",
        title: "Development Workflow",
        description: "Understand the workflow from idea to deployment",
        readTime: "4 min",
      },
      {
        id: "tools",
        title: "AI Tools Integration",
        description: "How to integrate various AI tools into your development process",
        readTime: "3 min",
      },
      {
        id: "best-practices",
        title: "Best Practices",
        description: "Tips and best practices for AI-assisted development",
        readTime: "3 min",
      },
    ],
  },
  {
    id: "github-basics",
    title: "GitHub Basics Guide",
    description: "Essential GitHub skills for modern development",
    category: "Version Control",
    readTime: "12 min read",
    difficulty: "Beginner",
    lastUpdated: "2024-01-10",
    sections: [
      {
        id: "getting-started",
        title: "Getting Started with GitHub",
        description: "Set up your GitHub account and first repository",
        readTime: "4 min",
      },
      {
        id: "basic-workflow",
        title: "Basic Git Workflow",
        description: "Learn the fundamental Git commands and workflow",
        readTime: "4 min",
      },
      {
        id: "collaboration",
        title: "Collaboration Features",
        description: "Work with others using branches, pull requests, and issues",
        readTime: "4 min",
      },
    ],
  },
  {
    id: "requirements-template",
    title: "Requirements Template",
    description: "Template for writing clear project requirements",
    category: "Planning",
    readTime: "8 min read",
    difficulty: "Beginner",
    lastUpdated: "2024-01-08",
    sections: [
      {
        id: "overview",
        title: "Project Overview",
        description: "How to define your project scope and objectives",
        readTime: "3 min",
      },
      {
        id: "functional-requirements",
        title: "Functional Requirements",
        description: "Specify what your application should do",
        readTime: "3 min",
      },
      {
        id: "technical-requirements",
        title: "Technical Requirements",
        description: "Define the technical constraints and specifications",
        readTime: "2 min",
      },
    ],
  },
]

// Mock data for community metrics
export const communityMetrics = {
  totalProjects: 12,
  totalCompletions: 15847,
  activeUsers: 3421,
  averageRating: 4.8,
}

// Mock data for featured tools
export const featuredTools = [
  {
    id: "v0",
    name: "v0.dev",
    description: "AI-powered React component generator",
    logo: "/v0-logo.png",
    url: "https://v0.dev",
    category: "AI Code Generation",
  },
  {
    id: "bolt",
    name: "Bolt.new",
    description: "Full-stack web development in the browser",
    logo: "/bolt-logo.png",
    url: "https://bolt.new",
    category: "Development Environment",
  },
  {
    id: "lovable",
    name: "Lovable",
    description: "Build full-stack apps with AI assistance",
    logo: "/lovable-logo.svg",
    url: "https://lovable.dev",
    category: "AI Development",
  },
  {
    id: "replit",
    name: "Replit",
    description: "Collaborative coding environment",
    logo: "/replit-logo.png",
    url: "https://replit.com",
    category: "Development Environment",
  },
]

export const toolsMockData = [
  { id: "bolt", name: "Bolt", logo: "/bolt-logo.png", url: "https://bolt.new" },
  { id: "v0", name: "v0", logo: "/v0-logo.png", url: "https://v0.dev" },
  { id: "lovable", name: "Lovable", logo: "/lovable-logo.svg", url: "https://lovable.dev" },
  { id: "replit", name: "Replit", logo: "/replit-logo.png", url: "https://replit.com" },
]
