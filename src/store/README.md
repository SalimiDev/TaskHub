# Store Directory

This directory contains the state management logic for the TaskHub application.

## Purpose

The store directory is responsible for:

- Managing global application state
- Handling state updates and mutations
- Providing state access to components
- Implementing state persistence where needed

## Structure

```
store/
├── slices/        # State slices for different features
├── hooks/         # Custom hooks for accessing store state
└── types/         # TypeScript types related to state management
```

## Best Practices

1. Keep state logic modular and organized by feature
2. Use TypeScript for type safety
3. Implement proper error handling
4. Follow immutability patterns
5. Document state shape and mutations

## Usage

Import store hooks and state management utilities from this directory to manage application state in your components:

```typescript
import { useStore } from "@/store/hooks";
```

---

Note: Update this README as new state management features are added to the application.
