import type { MaterialType } from '.'

declare type MaterialProps = {
  type: MaterialType
  websiteLink: string
  title: string
  link: string
  user: string
  date: Date
  variant?: 'default' | 'small'
}
