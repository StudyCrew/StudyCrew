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

export interface Subject {
  id: number;
  name: string;
  icon: string;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  members: User[];
  subject: Subject;
  materials: MaterialProps[];
}