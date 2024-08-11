import type { MaterialType } from '.'
import { User } from '@supabase/supabase-js'

declare type MaterialProps = {
  type: MaterialType
  websiteLink: string
  title: string
  link: string
  user: string
  date: Date
  variant?: 'default' | 'small'
}
