export interface FileInputProps {
	required: boolean
	label: string
	extensions: string
	clearable: boolean
	placeholder: string
	cb: (event: File | null) => void
}
