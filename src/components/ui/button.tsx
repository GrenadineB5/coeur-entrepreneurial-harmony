import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold transition-all duration-200",
  {
    variants: {
      variant: {
        default: "btn-retro",
        secondary: "bg-retro-navy text-white hover:bg-retro-navy/90 shadow-retro hover:shadow-retro-lg",
        outline: "border-2 border-retro-pink text-retro-pink hover:bg-retro-pink/10 shadow-retro hover:shadow-retro-lg",
        ghost: "hover:bg-retro-pink/10 text-retro-pink hover:text-retro-pink-dark",
        link: "text-retro-pink underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-3",
        sm: "h-8 px-4 py-2",
        lg: "h-12 px-8 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }