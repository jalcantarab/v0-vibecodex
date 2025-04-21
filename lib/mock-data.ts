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
            content: `I want to create a Kanban board application with Bolt. 

Please help me create the initial structure with:
- A header with the title "Team Kanban Board"
- Three columns labeled "To Do", "In Progress", and "Done"
- A simple, clean design using a light color scheme
- A "+ Add Task" button at the top of each column

For the styling, use a modern, minimalist approach with:
- Rounded corners on the columns and cards
- Subtle shadows for depth
- Adequate spacing between elements
- A responsive layout that works on different screen sizes`,
            tooltips: [
              {
                text: "I want to create a Kanban board application with Bolt.",
                explanation: "Start with a clear statement of your overall goal to give the AI context.",
                highlightColor: "#8b5cf6",
              },
              {
                text: 'Three columns labeled "To Do", "In Progress", and "Done"',
                explanation: "Be specific about the structural elements you need.",
                highlightColor: "#06b6d4",
              },
              {
                text: "For the styling, use a modern, minimalist approach with:",
                explanation: "Provide guidance on appearance to avoid generic-looking results.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          v0: {
            content: `Create a Kanban board application with:
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
                text: "Create a Kanban board application with:",
                explanation: "Start with a clear instruction of what you want to build.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "Use shadcn/ui components and Tailwind CSS for styling with:",
                explanation: "Specify the UI library and styling approach for consistent results.",
                highlightColor: "#06b6d4",
              },
            ],
          },
          lovable: {
            content: `I'd like to create a Kanban board for team collaboration.

Can you help me build:
- A header with the title "Team Kanban Board"
- Three columns: "To Do", "In Progress", and "Done"
- A "+ Add Task" button for each column
- A clean, modern design that's easy to use

I want it to look professional with:
- Rounded corners for cards and columns
- Light shadows to create depth
- Enough spacing so it doesn't feel crowded
- A design that works on phones and computers`,
            tooltips: [
              {
                text: "I'd like to create a Kanban board for team collaboration.",
                explanation: "Start with a friendly, conversational request.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "I want it to look professional with:",
                explanation: "Use simple language to describe design preferences.",
                highlightColor: "#06b6d4",
              },
            ],
          },
          replit: {
            content: `Create a React Kanban board application with the following features:

1. Structure:
   - Header component with the title "Team Kanban Board"
   - Three column components with labels "To Do", "In Progress", and "Done"
   - Add Task button component at the top of each column

2. Styling:
   - Use CSS modules or styled-components
   - Implement a clean, minimalist design with light color scheme
   - Add rounded corners (8px radius) to columns and cards
   - Include subtle box-shadows for depth perception
   - Ensure proper spacing (16px between elements)
   - Make the layout responsive with flexbox or grid

3. Initial State:
   - Set up a React state array to hold task data
   - Create empty initial state for each column`,
            tooltips: [
              {
                text: "Create a React Kanban board application with the following features:",
                explanation: "Start with a technical, structured approach for Replit.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "Use CSS modules or styled-components",
                explanation: "Provide specific technical implementation details.",
                highlightColor: "#06b6d4",
              },
              {
                text: "Set up a React state array to hold task data",
                explanation: "Include implementation details for the data structure.",
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
      {
        id: "phase-4",
        title: "Data Persistence and Sharing",
        description: "Add data storage and sharing capabilities",
        order: 4,
        prompts: {
          bolt: {
            content: `Let's add data persistence and sharing to our Kanban board.

Implement the following features:
- Save board state to local storage
- Add a "Share Board" button that generates a unique URL
- Create a simple backend API to store board data (optional)
- Add user authentication for access control (optional)
- Implement real-time updates for collaborative editing (optional)

The sharing functionality should:
- Generate a unique identifier for the board
- Create a shareable link
- Allow view-only or edit access options`,
            tooltips: [
              {
                text: "Let's add data persistence and sharing to our Kanban board.",
                explanation: "Clear transition to the data persistence phase.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "Save board state to local storage",
                explanation: "Starting with the simplest persistence approach.",
                highlightColor: "#06b6d4",
              },
              {
                text: "(optional)",
                explanation: "Marking advanced features as optional to keep the core task manageable.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          v0: {
            content: `Now let's implement data persistence and sharing for our Kanban board.

Add these features:
- Automatic saving of board state to localStorage
- A "Share Board" button in the header
- Export/import functionality for board data (JSON format)
- Optional backend integration with a database

For the localStorage implementation:
- Save changes whenever tasks are added, edited, or moved
- Load the saved state when the application starts
- Add error handling for storage limits

For the sharing functionality:
- Generate a unique board ID (UUID)
- Create a shareable URL with the board ID
- Implement a simple modal for sharing options
- Add copy-to-clipboard functionality for the URL

For the export/import:
- Add "Export Board" and "Import Board" buttons
- Export the current board state as a downloadable JSON file
- Allow users to import previously exported boards
- Validate imported data before applying it`,
            tooltips: [
              {
                text: "Now let's implement data persistence and sharing for our Kanban board.",
                explanation: "Clear introduction to the data persistence phase.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "Save changes whenever tasks are added, edited, or moved",
                explanation: "Specific implementation detail for when to persist data.",
                highlightColor: "#06b6d4",
              },
              {
                text: "Generate a unique board ID (UUID)",
                explanation: "Technical approach for creating shareable resources.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          lovable: {
            content: `Let's make sure our Kanban board saves our work and lets us share it with others.

We should add:
- Automatic saving so we don't lose our work if we close the browser
- A way to share our board with teammates or friends
- Options to download our board or load a previously saved one

For saving our work:
- The board should save automatically whenever we make changes
- When we come back later, our tasks should still be there
- We should see a small message when the board is saved

For sharing with others:
- Add a "Share" button at the top of the board
- When clicked, it should create a link we can copy
- We should be able to choose if others can edit or just view

For downloading and loading:
- Add "Save to Computer" and "Load from Computer" buttons
- When saving, it should download a file with all our tasks
- When loading, we should be able to pick a file from our computer`,
            tooltips: [
              {
                text: "Let's make sure our Kanban board saves our work and lets us share it with others.",
                explanation: "User-focused introduction to data persistence features.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "The board should save automatically whenever we make changes",
                explanation: "Simple explanation of auto-save functionality in user-friendly terms.",
                highlightColor: "#06b6d4",
              },
              {
                text: "We should see a small message when the board is saved",
                explanation: "Suggesting user feedback for background operations.",
                highlightColor: "#8b5cf6",
              },
            ],
          },
          replit: {
            content: `Let's implement data persistence and sharing for our Kanban board:

1. Set up localStorage persistence:
   \`\`\`jsx
   // Save board state
   const saveBoard = () => {
     const boardData = {
       tasks,
       columns,
       columnOrder,
       lastUpdated: new Date().toISOString()
     };
     localStorage.setItem('kanban-board', JSON.stringify(boardData));
   };

   // Load board state
   const loadBoard = () => {
     const savedData = localStorage.getItem('kanban-board');
     if (savedData) {
       try {
         const boardData = JSON.parse(savedData);
         setTasks(boardData.tasks);
         setColumns(boardData.columns);
         setColumnOrder(boardData.columnOrder);
       } catch (error) {
         console.error('Failed to parse saved board data:', error);
       }
     }
   };

   // Use effect to load data on component mount
   useEffect(() => {
     loadBoard();
   }, []);

   // Use effect to save data when state changes
   useEffect(() => {
     if (tasks && columns) {
       saveBoard();
     }
   }, [tasks, columns, columnOrder]);
   \`\`\`

2. Implement board sharing functionality:
   \`\`\`jsx
   import { v4 as uuidv4 } from 'uuid';

   // Generate shareable link
   const generateShareableLink = () => {
     // Create a unique ID for this board state
     const boardId = uuidv4();
     
     // Save current board state to database or localStorage with this ID
     const boardData = {
       tasks,
       columns,
       columnOrder,
       created: new Date().toISOString()
     };
     
     localStorage.setItem(\`shared-board-\${boardId}\`, JSON.stringify(boardData));
     
     // Return shareable URL
     return \`\${window.location.origin}/board/\${boardId}\`;
   };

   // Share board handler
   const handleShareBoard = () => {
     const shareableLink = generateShareableLink();
     
     // Copy to clipboard
     navigator.clipboard.writeText(shareableLink)
       .then(() => {
         alert('Shareable link copied to clipboard!');
       })
       .catch(err => {
         console.error('Failed to copy link:', err);
         alert('Shareable link: ' + shareableLink);
       });
   };
   \`\`\`

3. Add export/import functionality:
   \`\`\`jsx
   // Export board data
   const exportBoard = () => {
     const boardData = {
       tasks,
       columns,
       columnOrder,
       exported: new Date().toISOString()
     };
     
     const dataStr = JSON.stringify(boardData, null, 2);
     const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
     
     const exportFileDefaultName = 'kanban-board-export.json';
     
     const linkElement = document.createElement('a');
     linkElement.setAttribute('href', dataUri);
     linkElement.setAttribute('download', exportFileDefaultName);
     linkElement.click();
   };

   // Import board data
   const importBoard = (event) => {
     const file = event.target.files[0];
     
     if (file) {
       const reader = new FileReader();
       
       reader.onload = (e) => {
         try {
           const boardData = JSON.parse(e.target.result);
           
           // Validate the data structure
           if (boardData.tasks && boardData.columns && boardData.columnOrder) {
             setTasks(boardData.tasks);
             setColumns(boardData.columns);
             setColumnOrder(boardData.columnOrder);
             alert('Board imported successfully!');
           } else {
             alert('Invalid board data format');
           }
         } catch (error) {
           console.error('Failed to parse imported data:', error);
           alert('Failed to import board data');
         }
       };
       
       reader.readAsText(file);
     }
   };
   \`\`\``,
            tooltips: [
              {
                text: "Let's implement data persistence and sharing for our Kanban board:",
                explanation: "Technical introduction with clear implementation focus.",
                highlightColor: "#8b5cf6",
              },
              {
                text: "localStorage.setItem('kanban-board', JSON.stringify(boardData));",
                explanation: "Key line for saving data to browser storage.",
                highlightColor: "#06b6d4",
              },
              {
                text: "const boardId = uuidv4();",
                explanation: "Creating unique identifiers for shareable boards.",
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
            content: `I want to create a personal habit tracking dashboard with Bolt.

Please help me create the initial structure with:
- A header with the title "My Habit Dashboard" and user profile
- A sidebar with navigation options (Dashboard, Habits, Progress, Settings)
- A main content area with a grid layout for widgets
- A "Add New Habit" button in the top right of the content area

For the styling, use a modern, clean approach with:
- A light color scheme with accent colors for important elements
- Card-based widgets with consistent styling
- Responsive layout that works on desktop and tablets
- Clear typography hierarchy for readability`,
            tooltips: [],
          },
          v0: {
            content: `Create a personal habit tracking dashboard with:
- A header with the title "My Habit Dashboard" and user profile
- A sidebar with navigation options (Dashboard, Habits, Progress, Settings)
- A main content area with a grid layout for widgets
- A "Add New Habit" button in the top right of the content area

Use shadcn/ui components and Tailwind CSS for styling with:
- Light theme with accent colors for important elements
- Card-based widgets with consistent styling
- Responsive layout that works on desktop and tablets
- Clear typography hierarchy for readability`,
            tooltips: [],
          },
          lovable: {
            content: `I'd like to create a personal dashboard for tracking my daily habits.

Can you help me build:
- A header with the title "My Habit Dashboard" and a small profile section
- A sidebar with buttons for different sections (Dashboard, Habits, Progress, Settings)
- A main area with spaces for different tracking widgets
- A button to add new habits to track

I want it to look clean and modern with:
- Light colors that are easy on the eyes
- Cards for each widget or section
- A design that works on both my computer and tablet
- Text that's easy to read with clear headings`,
            tooltips: [],
          },
          replit: {
            content: `Create a React personal habit tracking dashboard with the following features:

1. Structure:
   - Header component with title "My Habit Dashboard" and user profile
   - Sidebar component with navigation links (Dashboard, Habits, Progress, Settings)
   - Main content area with grid layout for widgets
   - FloatingActionButton component for "Add New Habit"

2. Styling:
   - Use CSS modules or styled-components
   - Implement a clean, minimalist design with light color scheme
   - Create card components for widgets with consistent styling
   - Ensure responsive layout using CSS Grid or Flexbox
   - Implement proper typography scale for headings and body text

3. Initial State:
   - Set up React Router for navigation between sections
   - Create placeholder widgets for the dashboard view
   - Implement basic state management for active navigation item`,
            tooltips: [],
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
          bolt: { content: "", tooltips: [] },
          v0: { content: "", tooltips: [] },
          lovable: { content: "", tooltips: [] },
          replit: { content: "", tooltips: [] },
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
          bolt: { content: "", tooltips: [] },
          v0: { content: "", tooltips: [] },
          lovable: { content: "", tooltips: [] },
          replit: { content: "", tooltips: [] },
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
          bolt: { content: "", tooltips: [] },
          v0: { content: "", tooltips: [] },
          lovable: { content: "", tooltips: [] },
          replit: { content: "", tooltips: [] },
        },
      },
    ],
  },
  {
    id: "recipe-finder",
    title: "Recipe Finder App",
    description: "Create an app to search and save favorite recipes",
    difficulty: "Intermediate",
    timeEstimate: "Full day",
    previewImage: "/recipe-finder-app-interface.png",
    completionCount: 1243,
    learningPoints: [
      "Implementing search functionality",
      "Working with external APIs",
      "Creating responsive grid layouts",
      "Building a favorites system",
    ],
    phases: [
      {
        id: "phase-1",
        title: "Search Interface and Results Grid",
        description: "Create the search form and results display",
        order: 1,
        prompts: {
          bolt: { content: "", tooltips: [] },
          v0: { content: "", tooltips: [] },
          lovable: { content: "", tooltips: [] },
          replit: { content: "", tooltips: [] },
        },
      },
    ],
  },
]

// Mock data for AI tools
export const toolsMockData = [
  {
    id: "bolt",
    name: "Bolt",
    description: "Fastest path to a working prototype",
    linkPattern: "https://bolt.new/",
  },
  {
    id: "v0",
    name: "v0",
    description: "More polished interface design",
    linkPattern: "https://v0.dev/chat",
  },
  {
    id: "lovable",
    name: "Lovable",
    description: "Most beginner-friendly experience",
    linkPattern: "https://lovable.dev/",
  },
  {
    id: "replit",
    name: "Replit",
    description: "Best for adding more complex functionality later",
    linkPattern: "https://replit.com/",
  },
]
