import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonAsButton
  extends BaseButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsLink
  extends BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--primary)] text-white border-[var(--primary)] hover:bg-[var(--primary-dark)] hover:border-[var(--primary-dark)]",
  outline:
    "bg-transparent text-[var(--foreground)] border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]",
  ghost:
    "bg-transparent text-[var(--foreground)] border-transparent hover:bg-secondary",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide uppercase border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={combinedStyles} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
