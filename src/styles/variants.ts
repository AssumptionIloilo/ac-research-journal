// import { cva } from 'styled-system/css'

import { tv } from 'tailwind-variants';

/** Tailwind Variants for Default Button. */
export const button = tv({
  variants: {
    size: {
      lg: 'px-4 py-2',
    },
    color: {
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
    },
    type: {
      rounded: 'rounded-full',
      box: 'rounded-none',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'lg',
    type: 'rounded',
  },
});
