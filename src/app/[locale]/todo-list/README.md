# Todo List Feature

This directory contains the todo list feature implementation for the TaskHub application.

## Structure

```
todo-list/
├── _components/           # Route-specific components
│   ├── TodoListsSidebar/  # Sidebar components
│   │   ├── SidebarContainer.tsx
│   │   ├── SidebarHeader.tsx
│   │   ├── SidebarList.tsx
│   │   └── SidebarFooter.tsx
│   └── index.ts          # Component exports
├── _types/               # TypeScript type definitions
│   └── todolist.types.ts
├── page.tsx              # Main page component
└── README.md            # This file
```

## Components

### TodoListsSidebar

Container component for the sidebar panel containing:

- **SidebarContainer**: Main container component that orchestrates the sidebar layout
- **SidebarHeader**: Header with title and add button
- **SidebarList**: Scrollable list of todo lists
- **SidebarFooter**: Footer with task completion stats

## Features

- ✅ Responsive grid layout with sidebar and main content area
- ✅ Sticky sidebar implementation
- ✅ Type-safe component props with TypeScript interfaces
- ✅ Modular component architecture
- ✅ Accessibility improvements
- ✅ Internationalization ready
- ✅ Top charts section for analytics

## Page Layout

The todo list page features:

1. **Top Charts Section**: Analytics and overview section at the top
2. **Sidebar**: Fixed-width sidebar (250px-350px) containing todo lists
3. **Main Content Area**: Flexible content area for displaying selected todo list details

## Type Definitions

The `todolist.types.ts` file defines:

- `TodoList`: Interface for individual todo list items with id, name, badge, and icon
- `TodoListsData`: Interface for organizing todo lists by categories (general, workSpace)

## Usage

```tsx
import { TodoListsSidebar } from "./_components";

export default function TodoListPage() {
  return (
    <div className="container mx-auto flex flex-col px-4 py-6">
      {/* Top Charts Section */}
      <section className="bg-primary-background mb-4 h-45 w-full rounded-[var(--radius-lg)]">
        Top Charts Section
      </section>

      <div className="grid grid-cols-[minmax(250px,350px)_1fr] gap-4">
        {/* Sidebar */}
        <section className="bg-primary-background rounded-[var(--radius-lg)]">
          <TodoListsSidebar />
        </section>

        {/* Main Content */}
        <div className="flex flex-col gap-4">{/* Content goes here */}</div>
      </div>
    </div>
  );
}
```

## Future Enhancements

- [ ] Add search functionality to sidebar
- [ ] Implement drag-and-drop for list reordering
- [ ] Add list categories and filtering
- [ ] Implement real-time updates
- [ ] Add keyboard navigation
- [ ] Implement list sharing features
- [ ] Add loading states and error boundaries
- [ ] Implement todo list detail view in main content area
- [ ] Add task management functionality

## Contributing

When adding new features:

1. Add proper TypeScript types in `_types/`
2. Follow the existing naming conventions
3. Add proper accessibility attributes
4. Include error handling
5. Update this README
6. Ensure responsive design compatibility
