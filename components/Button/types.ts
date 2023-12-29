export enum ButtonVarient {
	Outline = 'outline',
	Primary = 'primary'
}

export enum ButtonSize {
	Big = 'big',
	Small = 'small',
	BigOutline = 'big-outline'
}

export interface ButtonProps {
	children: React.ReactNode
	className?: string
	variant?: ButtonVarient
	size?: ButtonSize
	onClick?: () => void
}
