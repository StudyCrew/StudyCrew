export interface TextAreaProps {
	required: boolean
	label: string
	placeholder: string
	minRows: number
	val: string
	cb: (event: string) => void
}
