import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
        accent: 'bg-accent text-ink hover:bg-accent/80 focus-visible:ring-accent',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary',
        ghost: 'hover:bg-primary/10 text-primary focus-visible:ring-primary',
        destructive: 'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500',
      },
      size: {
        default: 'px-5 py-2.5',
        sm: 'px-3 py-1.5 text-xs',
        lg: 'px-8 py-3.5 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
