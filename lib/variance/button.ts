import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
	`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
	ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2
	focus-visible:ring-primary-950 focus-visible:ring-offset-2 disabled:pointer-events-none
	disabled:opacity-50 dark:ring-offset-primary-950 dark:focus-visible:ring-primary-300`,
	{
		variants: {
			variant: {
				default: `bg-primary-500 text-white border-none hover:bg-primary-600 dark:bg-primary-500 
					dark:text-white dark:hover:bg-600 hover:cursor-pointer hover:rounded-10
					px-2.5 py-5.5 text-base font-semibold transition-all duration-150 ease-in-out`,
				destructive: `bg-red-500 text-primary-50 hover:bg-red-500/90 dark:bg-red-900 
					dark:text-primary-50 dark:hover:bg-red-900/90`,
				outline: `border-solid border-primary-500 border-2 bg-none hover:bg-primary-100 
					text-primary-900 dark:border-primary-800 dark:bg-primary-950 
					dark:hover:bg-primary-800 dark:hover:text-primary-50 transition-all duration-200
					ease-in-out hover:cursor-pointer hover:rounded-10`,
				secondary: `bg-primary-100 text-primary-900 hover:bg-primary-100/80 dark:bg-primary-800
					dark:text-primary-50 dark:hover:bg-primary-800/80`,
				ghost:
          'hover:bg-primary-100 hover:text-primary-900 dark:hover:bg-primary-800 dark:hover:text-slate-50',
				link: 'text-primary-900 underline-offset-4 hover:underline dark:text-primary-50'
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3 text-sm',
				lg: 'h-11 rounded-md px-8 text-lg sm:w-3/4',
				icon: 'h-10 w-10'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)
