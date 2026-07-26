"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-dark text-primary hover:bg-dark/90 shadow-lg hover:shadow-xl hover:shadow-accent/20",
        gold: "gradient-gold text-dark hover:opacity-90 shadow-lg hover:shadow-accent/30",
        outline:
          "border-2 border-dark/20 bg-transparent text-dark hover:bg-dark hover:text-primary",
        ghost: "text-dark hover:bg-secondary/50",
        glass: "glass text-primary hover:bg-white/20 border-white/30",
      },
      size: {
        default: "h-12 px-8 text-sm tracking-widest uppercase",
        sm: "h-10 px-6 text-xs tracking-widest uppercase",
        lg: "h-14 px-10 text-sm tracking-widest uppercase",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  magnetic?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, magnetic = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || asChild) return;
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      target.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || asChild) return;
      e.currentTarget.style.transform = "translate(0, 0)";
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
