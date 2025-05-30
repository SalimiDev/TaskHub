# Custom React Hooks

This directory contains reusable custom React hooks for the TaskHub application. Custom hooks are a way to extract component logic into reusable functions.

## Guidelines

- Each hook should be in its own file
- Use the naming convention `use[HookName]` for hook files and functions
- Include TypeScript types for parameters and return values
- Add JSDoc comments to document the hook's purpose, parameters, and usage
- Include examples of how to use the hook in components

## Example Structure

```typescript
// useExample.ts
import { useState, useEffect } from "react";

/**
 * Hook description
 * @param param Description of parameter
 * @returns Description of return value
 */
export function useExample(param: string) {
  // Hook implementation
}
```

## Available Hooks

_(Add your hooks here as they are created)_

## Best Practices

1. Keep hooks focused and single-purpose
2. Handle cleanup in useEffect when necessary
3. Use TypeScript for better type safety
4. Document edge cases and limitations
5. Consider performance implications

## Testing

Place hook tests in the `__tests__` directory with the naming convention `[HookName].test.ts`
