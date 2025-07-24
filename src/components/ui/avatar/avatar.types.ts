import { ReactNode } from "react";
import { AvatarVariants } from "./avatar.styles";

export type AvatarProps = {
  fallback: ReactNode | string;
} & AvatarVariants &
  React.HTMLAttributes<HTMLSpanElement>;
