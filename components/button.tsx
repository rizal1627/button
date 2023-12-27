import * as React from 'react'
import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 ',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900',
        primary:
          'bg-blue-500 text-white hover:bg-blue-600 dark:hover:bg-blue-600',
        success:
          'bg-green-500 text-white hover:bg-green-600 dark:border-green-700 dark:text-slate-100',
        warning:
          'bg-yellow-500 text-slate-900 hover:bg-yellow-600 dark:bg-yellow-700 dark:text-slate-100',
        danger:
          'bg-red-500 text-slate-900 hover:bg-red-600 dark:hover:bg-red-700 dark:text-slate-100 ',
        info: 'bg-sky-500 text-slate-900 hover:bg-sky-600 dark:text-slate-300 dark:hover:bg-transparent',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      )
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }




{/* <button className="rounded-md bg-blue-600 hover:bg-blue-700 px-4 py-2 shadow-md shadow-blue-500/50 text-slate-200">{children}</button>  */}