import { ReactNode } from "react";
import { BadgeVariants } from "./badge.styles";

export type BadgeProps = {
  children: ReactNode;
} & BadgeVariants &
  React.HTMLAttributes<HTMLSpanElement>;
