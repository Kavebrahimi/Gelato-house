import { clsx } from "@/utils/clsx";
import type { JSX } from "react"
import type React from "react";

type ButtonProps = {
  variant: "contained" | "outlined" | "text";
  color?: "primary" | "secondary",
  size?: "small" | "medium" | "large"
} & React.PropsWithChildren & React.HTMLAttributes<HTMLButtonElement>

const btnBaseStyle = "rounded-full outline-none"

const variants = {
  contained: {
    primary: "bg-primary-500 text-white",
    secondary: "bg-secondary-500 text-white",
    sizes: {
      small: "px-5 py-1 text-sm",
      medium: "px-6 py-2 text-base",
      large: "px-7 py-3 text-lg"
    }
  },
  outlined: {
    primary: "border-2 border-primary-500 text-primary-500",
    secondary: "border-2 border-secondary-500 text-secondary-500",
    sizes: {
      small: "px-5 py-1 text-sm",
      medium: "px-6 py-2 text-base",
      large: "px-7 py-3 text-lg"
    }
  },
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-900",
    sizes: {
      small: "p-1 text-sm",
      medium: "p-2 text-base",
      large: "p-3 text-lg"
    }
  },
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
        btnBaseStyle, variants[variant][color], variants[variant].sizes[size]
      )}
    >
      {children}
    </button>
  );
}
