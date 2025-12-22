import { clsx } from "@/utils/clsx";
import type { JSX } from "react"
import type React from "react";

type ButtonProps = {
  variant: "contained" | "outlined" | "text";
  color?: "primary" | "secondary",
  size?: "small" | "medium" | "large"
} & React.PropsWithChildren & React.HTMLAttributes<HTMLButtonElement>

const variants = {
  contained: {
    primary: "bg-primary-500 text-white",
    secondary: "bg-secondary-500 text-white",
  },
  outlined: {
    primary: "border-2 border-primary-500 text-primary-500",
    secondary: "border-2 border-secondary-500 text-secondary-500",
  },
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-900",
  },
}

const sizes = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-4 text-base",
  large: "px-6 py-6 text-lg"
}


export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  color = "primary",
  size = "medium",
  ...props
}): JSX.Element => {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-2xl", variants[variant][color], sizes[size]
      )}
    >
      {children}
    </button>
  );
}
