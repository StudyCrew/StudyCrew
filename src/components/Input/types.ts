export interface InputProps {
  placeholder?: string
  className?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  characterLimit: number
}
