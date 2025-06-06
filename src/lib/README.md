# Lib Directory

This directory contains utility functions, configurations, and shared libraries for the TaskHub application.

## 🚧 Current Status

The lib directory contains:

- ✅ **Internationalization (i18n)** - Fully implemented
- 🚧 **Other utilities** - Directory structure ready, implementation pending

## 📁 Directory Structure

```
lib/
├── i18n/                # Internationalization utilities ✅
│   ├── config.ts       # Locale configuration
│   ├── navigation.ts   # i18n navigation helpers
│   ├── request.ts      # Server-side i18n utilities
│   ├── routing.ts      # Routing configuration
│   └── utils.ts        # i18n utility functions
├── constants/          # Application constants (planned)
├── utils/              # General utility functions (planned)
├── validators/         # Form validation schemas (planned)
└── README.md          # This file
```

## ✅ Implemented: Internationalization (i18n)

### Configuration (`i18n/config.ts`)

Defines supported locales and default language:

```typescript
export const locales = ["en", "fa"] as const;
export type AppLocale = (typeof locales)[number];
export const defaultLocale: AppLocale = "en";
```

### Features

- **English (en)** - Default language, LTR
- **Persian/Farsi (fa)** - RTL support
- **Type-safe** - Full TypeScript support
- **Next.js integration** - Works with App Router

### Usage Examples

```typescript
// In server components
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('PageNamespace');
  return <h1>{t('title')}</h1>;
}

// In client components
import { useTranslations } from 'next-intl';

export function Component() {
  const t = useTranslations('ComponentNamespace');
  return <p>{t('description')}</p>;
}

// Navigation with locale
import { Link } from '@/lib/i18n/navigation';

<Link href="/dashboard">{t('dashboard')}</Link>
```

## 🚧 Planned Implementation

### Constants (`constants/`)

Application-wide constants and configuration values:

```typescript
// Planned structure
constants/
├── api.ts          # API endpoints and configuration
├── app.ts          # General app constants
├── routes.ts       # Route definitions
├── theme.ts        # Theme and styling constants
└── validation.ts   # Validation constants
```

**Examples:**

```typescript
// api.ts
export const API_ENDPOINTS = {
  TASKS: "/api/tasks",
  AUTH: "/api/auth",
  USER: "/api/user",
} as const;

// app.ts
export const APP_CONFIG = {
  NAME: "TaskHub",
  VERSION: "1.0.0",
  MAX_TASKS_PER_PAGE: 50,
} as const;
```

### Utils (`utils/`)

General utility functions for common operations:

```typescript
// Planned structure
utils/
├── cn.ts           # Class name utility (clsx + tailwind-merge)
├── date.ts         # Date manipulation utilities
├── format.ts       # Text formatting utilities
├── storage.ts      # Local/session storage utilities
├── validation.ts   # Validation helpers
└── index.ts        # Barrel exports
```

**Examples:**

```typescript
// cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}

// date.ts
export function formatDate(date: Date, locale: string) {
  // Date formatting logic
}
```

### Validators (`validators/`)

Form validation schemas using libraries like Zod:

```typescript
// Planned structure
validators/
├── auth.ts         # Authentication form schemas
├── task.ts         # Task form schemas
├── user.ts         # User profile schemas
└── common.ts       # Shared validation rules
```

**Examples:**

```typescript
// task.ts
import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().optional(),
  dueDate: z.date().optional(),
  priority: z.enum(["low", "medium", "high"]),
});

export type TaskFormData = z.infer<typeof taskSchema>;
```

## 📝 Implementation Guidelines

### Utils Best Practices

- **Pure functions** - No side effects when possible
- **Type safety** - Full TypeScript support
- **Documentation** - JSDoc comments for complex functions
- **Testing** - Unit tests for all utilities
- **Performance** - Consider optimization for frequently used utils

### File Organization

```typescript
// Example utility file structure
/**
 * Utility description
 * @param param Description
 * @returns Description
 */
export function utilityFunction(param: Type): ReturnType {
  // Implementation
}

// Named exports preferred
export { utilityFunction };

// Default export for main utility
export default utilityFunction;
```

### Validation Guidelines

- Use **Zod** for schema validation
- Create reusable schemas
- Export TypeScript types from schemas
- Handle validation errors gracefully
- Support internationalized error messages

## 🌐 i18n Integration

All utilities should support internationalization where applicable:

```typescript
// Date formatting with locale
export function formatDate(date: Date, locale: AppLocale) {
  return new Intl.DateTimeFormat(locale).format(date);
}

// Number formatting with locale
export function formatCurrency(amount: number, locale: AppLocale) {
  const currency = locale === "fa" ? "IRR" : "USD";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}
```

## 📋 Implementation Roadmap

### Phase 1: Core Utils (Next Priority)

- [ ] Class name utility (`cn`)
- [ ] Date manipulation utilities
- [ ] Local storage helpers
- [ ] Basic validation helpers

### Phase 2: Form Validation

- [ ] Task validation schemas
- [ ] User validation schemas
- [ ] Authentication schemas
- [ ] Common validation rules

### Phase 3: Advanced Utils

- [ ] API utilities
- [ ] File handling utilities
- [ ] Performance optimization helpers
- [ ] Testing utilities

### Phase 4: Constants

- [ ] API endpoint definitions
- [ ] Route constants
- [ ] Theme and styling constants
- [ ] Configuration management

## 🚀 Getting Started

To implement new utilities:

1. Choose a utility from the roadmap
2. Create the appropriate file in the correct subdirectory
3. Follow TypeScript best practices
4. Add comprehensive JSDoc documentation
5. Include unit tests
6. Export from index files for easy imports
7. Update this README

## 🧪 Testing

All utilities should include tests:

```typescript
// Example test structure
import { describe, it, expect } from "vitest";
import { utilityFunction } from "./utility";

describe("utilityFunction", () => {
  it("should handle normal case", () => {
    expect(utilityFunction("input")).toBe("expected");
  });

  it("should handle edge cases", () => {
    expect(utilityFunction("")).toBe("default");
  });
});
```

---

**Note:** The i18n utilities are fully functional and ready to use. Other utilities are planned for future implementation based on application needs.
