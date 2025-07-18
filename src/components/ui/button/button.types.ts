import { ReactNode } from "react";
import { ButtonVariants } from "./button.styles";

export type ButtonProps = {
  children: ReactNode;
} & ButtonVariants &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
