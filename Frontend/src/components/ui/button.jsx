import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300   rounded-8 justify-between ", {
  variants: {
    variant: {
      transparent: "bg-transparent hover:text-pink-brand  px-4 py-2 hover:bg-pink-secondary/20 hover:text-pink-brand/80",
      primary: "bg-pink-brand border-solid border-pink-secondary border-2 text-white hover:bg-pink-brand/80 hover:text-pink-primary",
      outline: " border-solid border-2 text-pink-brand border-pink-brand rounded-8 duration-300 hover:bg-pink-secondary/20 ",
      filterButton: "bg-white border-solid border-slate-200 border-2 text-slate-950 hover:bg-slate-200 hover:text-slate-950",
      activeNavLink: "bg-transparent underline  text-pink-brand text-md duration-300 ",
      homeNonActiveNavLink: "bg-transparent  text-link-grey  text-md duration-300 hover:underline",
      laywersNonActiveNavLink: "bg-transparent  text-[#6F6F6F]  text-md duration-300 hover:underline",
      calender: "hover:bg-pink-secondary/30 ",
    },
    size: {
      default: " px-5 py-2",
      sm: "  px-3 py-1 text-sm",
      lg: " rounded-md px-8",
      icon: " w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
