import { tv, type VariantProps } from "tailwind-variants";
import { colors } from "@/constants/colors";

type Color = (typeof colors)[number];

export const badge = tv({
  base: [
    "inline-flex items-center justify-center text-center gap-2",
    "w-fit font-medium border border-transparent select-none",
  ],
  variants: {
    color: Object.fromEntries(
      colors.map((color) => [color, `text-${color} bg-${color} border-${color}`]),
    ) as Record<Color, string>,

    variant: {
      solid: "text-white",
      soft: " border-none",
      surface: "bg-transparent",
      outline: "bg-transparent",
    },
    size: {
      tiny: "text-xs py-0.5 px-1.5",
      small: "text-xs py-0.5 px-2",
      medium: "text-sm py-0.5 px-2.5",
      large: "text-sm py-0.5 px-3",
    },
    radius: {
      small: "rounded-sm",
      medium: "rounded-md",
      large: "rounded-lg",
      full: "rounded-full",
    },
  },
  compoundVariants: [
    ...colors.map((color) => ({
      variant: "soft" as const,
      color: color as Color,
      className: `bg-${color}-subtle text-${color}`,
    })),
    ...colors.map((color) => ({
      variant: "surface" as const,
      color: color as Color,
      className: `bg-${color}-subtle text-${color}`,
    })),
  ],

  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "small",
    radius: "small",
  },
});

export type BadgeVariants = VariantProps<typeof badge>;
