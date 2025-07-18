import { badge } from "./badge.styles";
import { BadgeProps } from "./badge.type";

const Badge = ({ children, variant, color, size, radius, className, ...rest }: BadgeProps) => {
  const badgeStyles = badge({ variant, color, size, radius, className });

  return (
    <span className={badgeStyles} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
