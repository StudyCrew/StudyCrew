export interface TextInputProps {
	required: boolean
	label: string
	placeholder: string
	val: string
	cb: (event: string) => void
}
