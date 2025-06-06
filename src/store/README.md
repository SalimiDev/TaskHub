# Store Directory

This directory will contain the state management logic for the TaskHub application using modern React state management patterns.

## 🚧 Current Status

The store directory is **currently empty** and ready for state management implementation. The structure is planned but not yet implemented.

## 🎯 Planned State Management Approach

This project will use a hybrid approach combining:

- **Zustand** - For global application state
- **React Context** - For component-specific state
- **React Query/TanStack Query** - For server state management
- **Local Storage** - For persistence

## 📁 Planned Directory Structure

```
store/
├── slices/              # Feature-specific state slices
│   ├── auth.ts         # Authentication state
│   ├── tasks.ts        # Task management state
│   ├── ui.ts           # UI state (theme, modals, etc.)
│   └── user.ts         # User profile state
├── hooks/              # Custom hooks for state access
│   ├── useAuth.ts      # Authentication hooks
│   ├── useTasks.ts     # Task management hooks
│   ├── useUI.ts        # UI state hooks
│   └── index.ts        # Barrel exports
├── providers/          # Context providers
│   ├── AuthProvider.tsx
│   ├── TaskProvider.tsx
│   └── index.ts
├── types/              # State-related TypeScript types
│   ├── auth.ts
│   ├── tasks.ts
│   └── index.ts
├── utils/              # State utility functions
│   ├── persistence.ts  # Local storage utilities
│   ├── middleware.ts   # Store middleware
│   └── devtools.ts     # Development tools
└── README.md           # This file
```

## 🏗️ Implementation Plan

### Phase 1: Core Infrastructure

Set up the basic state management foundation:

```typescript
// store/index.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AppState {
  // Global app state shape
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        // State implementation
      }),
      {
        name: "taskhub-storage",
      },
    ),
  ),
);
```

### Phase 2: Feature Slices

#### Authentication State (`slices/auth.ts`)

```typescript
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  register: (data: RegisterData) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  clearError: () => void;
}

export type AuthSlice = AuthState & AuthActions;
```

#### Task Management State (`slices/tasks.ts`)

```typescript
interface TaskState {
  tasks: Task[];
  selectedTask: Task | null;
  filters: TaskFilters;
  isLoading: boolean;
  error: string | null;
}

interface TaskActions {
  fetchTasks: () => Promise<void>;
  createTask: (task: CreateTaskData) => Promise<void>;
  updateTask: (id: string, updates: Partial<Task>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  setSelectedTask: (task: Task | null) => void;
  setFilters: (filters: Partial<TaskFilters>) => void;
  clearError: () => void;
}

export type TaskSlice = TaskState & TaskActions;
```

#### UI State (`slices/ui.ts`)

```typescript
interface UIState {
  theme: "light" | "dark" | "system";
  locale: "en" | "fa";
  sidebarOpen: boolean;
  modals: {
    createTask: boolean;
    editTask: boolean;
    deleteConfirm: boolean;
  };
  notifications: Notification[];
}

interface UIActions {
  setTheme: (theme: UIState["theme"]) => void;
  setLocale: (locale: UIState["locale"]) => void;
  toggleSidebar: () => void;
  openModal: (modal: keyof UIState["modals"]) => void;
  closeModal: (modal: keyof UIState["modals"]) => void;
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
}

export type UISlice = UIState & UIActions;
```

### Phase 3: Custom Hooks

#### useAuth Hook (`hooks/useAuth.ts`)

```typescript
export function useAuth() {
  const {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    register,
    resetPassword,
    clearError,
  } = useAppStore((state) => state.auth);

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    register,
    resetPassword,
    clearError,
  };
}
```

#### useTasks Hook (`hooks/useTasks.ts`)

```typescript
export function useTasks() {
  const {
    tasks,
    selectedTask,
    filters,
    isLoading,
    error,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
    setSelectedTask,
    setFilters,
    clearError,
  } = useAppStore((state) => state.tasks);

  // Computed values
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      // Apply filters logic
    });
  }, [tasks, filters]);

  const taskStats = useMemo(() => {
    return {
      total: tasks.length,
      completed: tasks.filter((t) => t.status === "completed").length,
      pending: tasks.filter((t) => t.status === "pending").length,
      inProgress: tasks.filter((t) => t.status === "inProgress").length,
    };
  }, [tasks]);

  return {
    tasks: filteredTasks,
    selectedTask,
    filters,
    isLoading,
    error,
    taskStats,
    actions: {
      fetchTasks,
      createTask,
      updateTask,
      deleteTask,
      setSelectedTask,
      setFilters,
      clearError,
    },
  };
}
```

## 🔧 State Management Patterns

### Zustand Store Composition

```typescript
// Combine multiple slices into a single store
export const useAppStore = create<AppSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
        ...createTaskSlice(...a),
        ...createUISlice(...a),
      }),
      {
        name: "taskhub-storage",
        partialize: (state) => ({
          // Only persist specific parts of state
          auth: {
            user: state.auth.user,
            isAuthenticated: state.auth.isAuthenticated,
          },
          ui: {
            theme: state.ui.theme,
            locale: state.ui.locale,
          },
        }),
      },
    ),
  ),
);
```

### Server State with TanStack Query

```typescript
// For server data fetching and caching
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useTasksQuery() {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchTasks(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useCreateTaskMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
```

## 🌐 Internationalization Support

State should support internationalization:

```typescript
// UI state with locale
interface UIState {
  locale: AppLocale;
  // ... other state
}

// Error handling with i18n
const handleError = (error: Error, t: (key: string) => string) => {
  set((state) => ({
    ...state,
    error: t(`errors.${error.code}`) || t("errors.generic"),
  }));
};
```

## 💾 Persistence Strategy

### Local Storage

- **User preferences** - Theme, locale, UI settings
- **Authentication** - User session (with security considerations)
- **Draft data** - Unsaved form data

### Session Storage

- **Temporary data** - Form state, navigation state
- **Cache** - Short-term data that shouldn't persist

### IndexedDB (Future)

- **Offline support** - Task data for offline functionality
- **Large data** - Attachments, media files

## 🧪 Testing Strategy

### Unit Tests

```typescript
// Test Zustand stores
import { renderHook, act } from "@testing-library/react";
import { useAppStore } from "../store";

describe("useAppStore", () => {
  it("should handle task creation", () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.createTask({
        title: "Test Task",
        description: "Test Description",
      });
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].title).toBe("Test Task");
  });
});
```

### Integration Tests

- Test state interactions between components
- Test persistence behavior
- Test error handling

## 📋 Implementation Roadmap

### Phase 1: Foundation (Next Priority)

- [ ] Set up Zustand with TypeScript
- [ ] Implement basic store structure
- [ ] Add persistence middleware
- [ ] Set up development tools

### Phase 2: Authentication State

- [ ] Auth slice implementation
- [ ] Auth hooks and utilities
- [ ] Login/logout functionality
- [ ] Session management

### Phase 3: Task Management State

- [ ] Task slice implementation
- [ ] CRUD operations
- [ ] Filtering and sorting
- [ ] Task state hooks

### Phase 4: UI State Management

- [ ] Theme management
- [ ] Modal state
- [ ] Notification system
- [ ] Responsive sidebar state

### Phase 5: Advanced Features

- [ ] Optimistic updates
- [ ] Offline support
- [ ] Real-time synchronization
- [ ] Performance optimization

## 🚀 Getting Started

To implement state management:

1. Choose a slice from the roadmap
2. Define TypeScript interfaces
3. Implement the Zustand slice
4. Create custom hooks
5. Add persistence if needed
6. Write tests
7. Update this README

## 🤝 Best Practices

### State Design

- Keep state flat and normalized
- Separate derived state from base state
- Use TypeScript for type safety
- Follow immutability patterns

### Performance

- Use selectors to prevent unnecessary re-renders
- Implement proper memoization
- Consider state splitting for large applications
- Monitor bundle size

### Developer Experience

- Use Redux DevTools integration
- Implement helpful error messages
- Add TypeScript strict mode
- Create clear documentation

---

**Note:** This directory is currently empty and ready for state management implementation. The plan above provides a comprehensive approach for scalable state management in the TaskHub application.
