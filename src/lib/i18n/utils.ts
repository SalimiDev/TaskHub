import { locales, AppLocale } from "./config";

// Helper function to check if a locale is supported
export function isValidLocale(locale: string): locale is (typeof locales)[number] {
  return locales.includes(locale as AppLocale);
}

// Helper function to get the direction of a locale
export function getTextDirection(locale: string): "ltr" | "rtl" {
  const rtlLocales = ["fa", "ar", "he"];
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

// Helper function to get locale display name
export function getLocaleDisplayName(locale: string): string {
  const displayNames: Record<string, string> = {
    en: "English",
    fa: "فارسی",
  };
  return displayNames[locale] || locale;
}

// Helper function to format dates according to locale
export function formatDate(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

// Helper function to format numbers according to locale
export function formatNumber(number: number, locale: string): string {
  return new Intl.NumberFormat(locale).format(number);
}
