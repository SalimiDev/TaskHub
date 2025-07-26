import { ReactNode } from "react";
import { BadgeVariants } from "./badge.variants";

export type BadgeProps = {
  children: ReactNode;
} & BadgeVariants &
  React.HTMLAttributes<HTMLSpanElement>;
