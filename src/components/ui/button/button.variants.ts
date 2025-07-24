import { tv, type VariantProps } from "tailwind-variants";
import { colors } from "../../../constants/colors";

type Color = (typeof colors)[number];

export const button = tv({
  slots: {
    base: [
      "inline-grid grid-cols-1 grid-rows-1",
      "items-center justify-center text-center gap-2",
      " transition duration-100 ease-in-out",
      "no-underline border border-transparent font-medium cursor-pointer select-none  ",
      "relative",
    ],
    content: "row-start-1 col-start-1 transition-opacity duration-150",
    spinner:
      "row-start-1 col-start-1 flex items-center justify-center transition-opacity duration-150",
  },
  variants: {
    color: Object.fromEntries(
      colors.map((color) => [color, { base: `text-${color} bg-${color} border-${color}` }]),
    ) as Record<Color, { base: string }>,

    variant: {
      solid: "text-white shadow-lg active:opacity-90",
      soft: "",
      outline: "bg-transparent",
      ghost: "border-0 bg-transparent  p-0 hover:opacity-90",
      link: "border-0 bg-transparent p-0 text-info h-auto underline",
    },

    size: {
      tiny: "px-1.5 py-1 text-xs h-6 w-fit",
      small: "px-2 py-1 text-sm h-8 w-fit",
      normal: "px-2.5 py-1 text-md h-10 w-fit",
      large: "px-3 py-1 text-lg h-10 w-fit",
    },

    radius: {
      small: "rounded-sm",
      medium: "rounded-md",
      large: "rounded-lg",
      full: "rounded-full",
    },

    loading: {
      true: {
        base: "opacity-75 pointer-events-none cursor-not-allowed",
        content: "opacity-0",
        spinner: "opacity-100",
      },
      false: {
        content: "opacity-100",
        spinner: "opacity-0",
      },
    },

    disabled: {
      true: { base: "opacity-50 cursor-not-allowed" },
    },

    isRTL: {
      true: { base: "flex-row-reverse" },
    },
  },
  compoundVariants: [
    ...colors.map((color) => ({
      variant: "soft" as const,
      color: color as Color,
      className: {
        base: `bg-${color}-subtle text-${color} border-${color}-subtle hover:bg-${color} hover:text-white hover:border-${color}`,
      },
    })),
    ...colors.map((color) => ({
      variant: "outline" as const,
      color: color as Color,
      className: { base: `hover:bg-${color} hover:text-white` },
    })),
    ...colors.map((color) => ({
      variant: "ghost" as const,
      color: color as Color,
      className: { base: `hover:bg-${color}-subtle` },
    })),
  ],
  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "normal",
    radius: "medium",
    loading: false,
    disabled: false,
    isRTL: false,
  },
});

export type ButtonVariants = VariantProps<typeof button>;
