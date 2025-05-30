# Components Directory

This directory contains reusable React components that are used throughout the TaskHub application. These components are designed to be modular, maintainable, and follow our project's best practices.

## Directory Structure

```
components/
├── ui/           # Basic UI components (buttons, inputs, etc.)
├── layout/       # Layout components (header, footer, etc.)
├── features/     # Feature-specific components
└── shared/       # Shared components used across features
```

## Component Guidelines

1. Each component should:

   - Be well-documented with TypeScript types
   - Follow the single responsibility principle
   - Include proper prop validation
   - Be properly tested
   - Follow our established design system

2. Naming Conventions:

   - Use PascalCase for component files and folders
   - Suffix test files with `.test.tsx`
   - Use descriptive names that reflect the component's purpose

3. File Structure:
   ```
   ComponentName/
   ├── index.tsx          # Main component file
   ├── ComponentName.tsx  # Component implementation
   ├── ComponentName.test.tsx
   └── types.ts          # Component-specific types
   ```

## Usage Example

```tsx
import { Button } from "@/components/ui/Button";

export function MyComponent() {
  return (
    <Button variant="primary" onClick={() => console.log("Clicked!")}>
      Click Me
    </Button>
  );
}
```

## Best Practices

- Keep components focused and small
- Use composition over inheritance
- Implement proper error boundaries
- Follow accessibility guidelines
- Maintain consistent styling patterns
- Document any complex logic or important notes

## Contributing

When adding new components:

1. Follow the established directory structure
2. Add appropriate documentation
3. Include necessary tests
4. Ensure the component is responsive
5. Follow our design system guidelines
