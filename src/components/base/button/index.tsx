import { clsx } from "@/utils/clsx";
import type { JSX } from "react"
import type React from "react";

type ButtonProps = {
  variant: "contained" | "outlined" | "text";
  color?: "primary" | "secondary"

} & React.PropsWithChildren & React.HTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  color = "primary",
  ...props
}): JSX.Element => {
  return (()=>{
    switch (variant) {
      case "contained":
        return (
          <button
            {...props}
            className={clsx(
              "p-2 rounded-3xl",
              color === "primary" && "bg-teal-500"
            )}
            >
              {children}
          </button>
        );
      case "outlined":
        return (
          <button {...props} className="p-2 border-2 border-teal-500 rounded-3xl">{children}</button>
        );
      case "text":
        return <button {...props}>{children}</button>;
      default:
        return <button {...props}>{children}</button>;
    }
  })()
}
