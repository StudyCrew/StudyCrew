export interface InputProps {
  placeholder?: string
  className?: string
  value: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  characterLimit?: number
  rowLimit?: number
}
