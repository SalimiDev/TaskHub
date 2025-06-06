# راهنمای استفاده از i18n در TaskHub

## نحوه کارکرد

این پروژه از کتابخانه `next-intl` برای پشتیبانی از چند زبان استفاده می‌کند.

### زبان‌های پشتیبانی شده

- **انگلیسی (en)** - زبان پیش‌فرض
- **فارسی (fa)** - با پشتیبانی RTL

### ساختار URL ها

```
/ یا /en          -> انگلیسی
/fa              -> فارسی
```

## اضافه کردن ترجمه جدید

### 1. اضافه کردن متن به فایل‌های ترجمه

**فایل انگلیسی:** `src/messages/en.json`

```json
{
  "MySection": {
    "title": "My Title",
    "description": "My Description"
  }
}
```

**فایل فارسی:** `src/messages/fa.json`

```json
{
  "MySection": {
    "title": "عنوان من",
    "description": "توضیحات من"
  }
}
```

### 2. استفاده در Components

```tsx
import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations("MySection");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
```

## اضافه کردن زبان جدید

### 1. تنظیمات routing

فایل `src/i18n/routing.ts` را ویرایش کنید:

```typescript
export const routing = defineRouting({
  locales: ["en", "fa", "ar"], // زبان جدید اضافه شده
  defaultLocale: "en",
  localePrefix: "as-needed",
});
```

### 2. ایجاد فایل ترجمه

فایل جدید `src/messages/ar.json` بسازید

### 3. بهروزرسانی utility functions

فایل `src/i18n/utils.ts` را بهروز کنید:

```typescript
export function getTextDirection(locale: string): "ltr" | "rtl" {
  const rtlLocales = ["fa", "ar", "he"];
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

export function getLocaleDisplayName(locale: string): string {
  const displayNames: Record<string, string> = {
    en: "English",
    fa: "فارسی",
    ar: "العربية", // اضافه شده
  };
  return displayNames[locale] || locale;
}
```

## Best Practices

### 1. ساختار Nested Messages

```json
{
  "Common": {
    "buttons": {
      "save": "Save",
      "cancel": "Cancel"
    }
  }
}
```

### 2. استفاده از TypeScript Types

```typescript
// در components
const t = useTranslations("Common.buttons");
// در جای TypeScript intellisense کار خواهد کرد
```

### 3. Pluralization

```json
{
  "items": {
    "count": "{count, plural, =0 {No items} =1 {One item} other {# items}}"
  }
}
```

## Components موجود

### LanguageSwitcher

برای تغییر زبان در interface:

```tsx
import LanguageSwitcher from "@/src/components/LanguageSwitcher";

<LanguageSwitcher />;
```

### LocaleProvider

برای تنظیم attributes زبان در HTML:

```tsx
// خودکار در layout استفاده می‌شود
<LocaleProvider locale={locale}>{children}</LocaleProvider>
```

## تست کردن

1. سرور را اجرا کنید: `npm run dev`
2. مراجعه به:
   - `http://localhost:3000` (انگلیسی)
   - `http://localhost:3000/fa` (فارسی)
3. از Language Switcher برای تغییر زبان استفاده کنید

## رفع مشکلات رایج

### Hydration Mismatch

اگر خطای hydration mismatch مشاهده کردید، `suppressHydrationWarning` در root layout اضافه شده تا browser extensions باعث مشکل نشوند.

### RTL Styling

برای styling های RTL از Tailwind CSS direction utilities استفاده کنید:

```css
/* برای متن راست به چپ */
.rtl\\:text-right {
  text-align: right;
}
```
