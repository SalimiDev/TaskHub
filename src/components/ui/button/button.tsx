"use client";

import { button } from "./button.variants";
import { ButtonProps } from "./button.types";
import { Loading } from "../loading";

const Button = ({
  children,
  type = "button",
  variant,
  color,
  size,
  radius,
  loading = false,
  disabled = false,
  loadingColor,
  loadingVariant,
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
        <Loading
          size={size}
          color={loadingColor ? loadingColor : variant !== "solid" ? color : "white"}
          variant={loadingVariant}
        />
      </span>
    </button>
  );
};

export default Button;
