# Custom React Hooks

This directory contains reusable custom React hooks for the TaskHub application. Custom hooks enable logic sharing between components and provide clean, testable abstractions.

## 🚧 Current Status

The hooks directory is **currently empty** and ready for custom hook implementation. This directory will house application-specific hooks that encapsulate complex logic and state management.

## 📁 Planned Directory Structure

```
hooks/
├── auth/                # Authentication-related hooks
│   ├── useAuth.ts      # Main authentication hook
│   ├── useLogin.ts     # Login form logic
│   ├── useRegister.ts  # Registration form logic
│   └── index.ts        # Barrel exports
├── tasks/              # Task management hooks
│   ├── useTasks.ts     # Main task management hook
│   ├── useTaskForm.ts  # Task form handling
│   ├── useTaskFilters.ts # Task filtering logic
│   └── index.ts
├── ui/                 # UI-related hooks
│   ├── useTheme.ts     # Theme management
│   ├── useModal.ts     # Modal state management
│   ├── useNotifications.ts # Notification system
│   ├── useLocalStorage.ts # Local storage utilities
│   └── index.ts
├── api/                # API and data fetching hooks
│   ├── useApi.ts       # Generic API hook
│   ├── usePagination.ts # Pagination logic
│   ├── useDebounce.ts  # Debounced values
│   └── index.ts
├── utils/              # Utility hooks
│   ├── useClickOutside.ts # Click outside detection
│   ├── useKeyboard.ts     # Keyboard shortcuts
│   ├── useMediaQuery.ts   # Responsive breakpoints
│   └── index.ts
└── README.md           # This file
```

## 🎯 Planned Hook Categories

### Authentication Hooks (`auth/`)

Handle user authentication and authorization:

```typescript
// useAuth.ts - Main authentication hook
export function useAuth() {
  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    register,
  };
}

// useLogin.ts - Login form management
export function useLogin() {
  return {
    formData,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange,
    resetForm,
  };
}
```

### Task Management Hooks (`tasks/`)

Handle task CRUD operations and state:

```typescript
// useTasks.ts - Main task management
export function useTasks() {
  return {
    tasks,
    filteredTasks,
    selectedTask,
    isLoading,
    createTask,
    updateTask,
    deleteTask,
    setFilters,
  };
}

// useTaskForm.ts - Task form handling
export function useTaskForm(initialTask?: Task) {
  return {
    formData,
    errors,
    isDirty,
    isValid,
    handleSubmit,
    handleChange,
    resetForm,
  };
}
```

### UI Hooks (`ui/`)

Manage UI state and interactions:

```typescript
// useTheme.ts - Theme management
export function useTheme() {
  return {
    theme,
    setTheme,
    toggleTheme,
    systemTheme,
  };
}

// useModal.ts - Modal state management
export function useModal(initialOpen = false) {
  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
```

### API Hooks (`api/`)

Handle data fetching and API interactions:

```typescript
// useApi.ts - Generic API hook
export function useApi<T>(url: string, options?: RequestOptions) {
  return {
    data,
    error,
    isLoading,
    mutate,
    retry,
  };
}

// useDebounce.ts - Debounced values
export function useDebounce<T>(value: T, delay: number): T {
  // Implementation
}
```

### Utility Hooks (`utils/`)

Common utility hooks for various needs:

```typescript
// useClickOutside.ts - Click outside detection
export function useClickOutside<T extends HTMLElement>(callback: () => void): RefObject<T> {
  // Implementation
}

// useMediaQuery.ts - Responsive breakpoints
export function useMediaQuery(query: string): boolean {
  // Implementation
}
```

## 📝 Hook Development Guidelines

### File Naming Convention

```
hooks/
├── useHookName.ts      # PascalCase for hook files
├── use-hook-name.ts    # Alternative: kebab-case
└── index.ts            # Barrel exports
```

### Hook Structure Template

````typescript
import { useState, useEffect, useCallback } from "react";
import type { HookParams, HookReturn } from "./types";

/**
 * Hook description and purpose
 *
 * @param param1 - Description of first parameter
 * @param param2 - Description of second parameter
 * @returns Object containing hook state and methods
 *
 * @example
 * ```tsx
 * function Component() {
 *   const { value, setValue, reset } = useExample('initial');
 *
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={() => setValue('new value')}>
 *         Update
 *       </button>
 *       <button onClick={reset}>Reset</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useExample(param1: string, param2?: number): HookReturn {
  const [state, setState] = useState<string>(param1);

  const updateState = useCallback((newValue: string) => {
    setState(newValue);
  }, []);

  const reset = useCallback(() => {
    setState(param1);
  }, [param1]);

  useEffect(() => {
    // Effect logic with cleanup
    return () => {
      // Cleanup
    };
  }, []);

  return {
    value: state,
    setValue: updateState,
    reset,
  };
}
````

### TypeScript Guidelines

```typescript
// Define clear interfaces for hook parameters and return values
interface UseExampleParams {
  initialValue: string;
  options?: {
    autoSave?: boolean;
    debounceMs?: number;
  };
}

interface UseExampleReturn {
  value: string;
  setValue: (value: string) => void;
  reset: () => void;
  isDirty: boolean;
}

export function useExample({
  initialValue,
  options = {},
}: UseExampleParams): UseExampleReturn {
  // Implementation
}
```

### Testing Guidelines

```typescript
// hooks/__tests__/useExample.test.ts
import { renderHook, act } from "@testing-library/react";
import { useExample } from "../useExample";

describe("useExample", () => {
  it("should initialize with provided value", () => {
    const { result } = renderHook(() => useExample("initial"));

    expect(result.current.value).toBe("initial");
    expect(result.current.isDirty).toBe(false);
  });

  it("should update value correctly", () => {
    const { result } = renderHook(() => useExample("initial"));

    act(() => {
      result.current.setValue("updated");
    });

    expect(result.current.value).toBe("updated");
    expect(result.current.isDirty).toBe(true);
  });

  it("should reset to initial value", () => {
    const { result } = renderHook(() => useExample("initial"));

    act(() => {
      result.current.setValue("updated");
      result.current.reset();
    });

    expect(result.current.value).toBe("initial");
    expect(result.current.isDirty).toBe(false);
  });
});
```

## 🌐 Internationalization Support

Hooks should support internationalization when applicable:

```typescript
import { useTranslations } from "next-intl";

export function useTaskForm() {
  const t = useTranslations("Tasks");

  const validateTask = (task: TaskFormData) => {
    const errors: Record<string, string> = {};

    if (!task.title) {
      errors.title = t("validation.titleRequired");
    }

    return errors;
  };

  return { validateTask /* other returns */ };
}
```

## 📋 Implementation Roadmap

### Phase 1: Core Utility Hooks (Next Priority)

- [ ] `useDebounce` - Debounced values
- [ ] `useLocalStorage` - Local storage management
- [ ] `useMediaQuery` - Responsive breakpoints
- [ ] `useClickOutside` - Click outside detection

### Phase 2: UI Management Hooks

- [ ] `useTheme` - Theme switching
- [ ] `useModal` - Modal state management
- [ ] `useNotifications` - Notification system
- [ ] `useForm` - Generic form handling

### Phase 3: Feature-Specific Hooks

- [ ] `useAuth` - Authentication management
- [ ] `useTasks` - Task management
- [ ] `useTaskForm` - Task form handling
- [ ] `useTaskFilters` - Task filtering

### Phase 4: Advanced Hooks

- [ ] `useOptimistic` - Optimistic updates
- [ ] `useOffline` - Offline state detection
- [ ] `useKeyboard` - Keyboard shortcuts
- [ ] `usePagination` - Pagination logic

## 🚀 Getting Started

To implement a new hook:

1. Choose a hook from the roadmap
2. Create the hook file in the appropriate directory
3. Follow the structure template above
4. Add proper TypeScript types
5. Include comprehensive JSDoc documentation
6. Write unit tests
7. Export from the appropriate index file
8. Update this README

## 🧪 Testing Strategy

### Unit Testing

- Test hook behavior in isolation
- Test different input scenarios
- Test cleanup and unmounting
- Use React Testing Library's `renderHook`

### Integration Testing

- Test hooks within actual components
- Test hook interactions
- Test side effects and async behavior

## 🎯 Best Practices

### Design Principles

1. **Single Responsibility** - Each hook should have one clear purpose
2. **Reusability** - Design for use across multiple components
3. **Type Safety** - Use TypeScript for all hook interfaces
4. **Performance** - Use `useCallback` and `useMemo` appropriately
5. **Cleanup** - Always clean up effects and subscriptions

### Common Patterns

```typescript
// Cleanup pattern
useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);

// Memoization pattern
const memoizedValue = useMemo(() => {
  return expensiveCalculation(dependency);
}, [dependency]);

// Callback pattern
const memoizedCallback = useCallback(
  (param: string) => {
    doSomething(param);
  },
  [dependency],
);
```

### Performance Considerations

- Avoid creating new objects/functions on every render
- Use proper dependency arrays in effects
- Consider using `useRef` for mutable values
- Be mindful of infinite re-render loops

---

**Note:** This directory is currently empty and ready for custom hook implementation. Start with utility hooks as they provide the foundation for more complex feature-specific hooks.
