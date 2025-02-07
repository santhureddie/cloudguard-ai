
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export interface ButtonPremiumProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const ButtonPremium = React.forwardRef<HTMLButtonElement, ButtonPremiumProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <Button
        className={cn(
          "relative overflow-hidden group transition-all duration-300",
          variant === "default" &&
            "bg-primary hover:bg-primary/90 text-white shadow-[0_0_0_3px_rgba(37,99,235,0.2)]",
          variant === "outline" &&
            "border-2 border-primary/20 hover:border-primary/40 text-primary shadow-none hover:bg-primary/5",
          variant === "ghost" &&
            "text-primary hover:bg-primary/5 shadow-none",
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-9 px-3",
          size === "lg" && "h-11 px-8",
          "rounded-full font-medium",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonPremium.displayName = "ButtonPremium";

export { ButtonPremium };
