"use client";

import { button } from "./button.styles";
import { Spinner } from "@radix-ui/themes";
import { ButtonProps } from "./button.types";

const Button = ({
  children,
  type = "button",
  variant,
  color,
  size,
  radius,
  loading = false,
  disabled = false,
  className,
  ...rest
}: ButtonProps) => {
  const { base, content, spinner } = button({
    variant,
    color,
    size,
    radius,
    loading,
    disabled,
    className,
  });

  return (
    <button className={base()} type={type} {...rest}>
      <span className={content()}>{children}</span>
      <span className={spinner()}>
        <Spinner size="1" />
      </span>
    </button>
  );
};

export default Button;
