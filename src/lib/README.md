# `/src/lib` Directory

This directory contains shared libraries, utilities, and configurations for the TaskHub application.

## Purpose

The `lib` directory is designated for:

- External library configurations (e.g., React Query, Axios)
- Shared utility functions
- API client configurations
- Common constants and types
- Service layer implementations

## Common Libraries

### React Query

- Configuration and custom hooks for data fetching
- Query and mutation utilities
- Cache management

### API Clients

- REST API configurations
- GraphQL client setup (if applicable)
- API interceptors and error handling

### Utils

- Helper functions
- Type guards
- Date formatting
- String manipulation
- etc.

## Best Practices

1. Keep library configurations modular and separate
2. Document exported functions and types
3. Maintain a clear separation between different utility categories
4. Use appropriate file naming conventions:
   - `[library-name].config.ts` for configurations
   - `[feature].utils.ts` for utilities
   - `[feature].types.ts` for type definitions

## Example Structure

```
lib/
├── api/
│   ├── client.ts
│   └── endpoints.ts
├── react-query/
│   ├── config.ts
│   └── hooks.ts
```

## Contributing

When adding new utilities or configurations:

1. Follow the established file structure
2. Add appropriate documentation
3. Consider reusability and maintainability
4. Add necessary type definitions
5. Update this README if adding new categories
