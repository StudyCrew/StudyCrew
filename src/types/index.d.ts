import type { MaterialType } from '.'
import { GroupSubject } from './models/index'
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

export interface User {
  id: number;
  name: string;
  avatar: string;
  about: string;
}

export interface Admin {
  key: string;
  name: string;
  avatar: string;
}

export interface Group {
  id: number;
  name: string;
  description: string;
  members: User[];
  subject: GroupSubject;
  materials: MaterialProps[];
  admin_id: number;
  bannerimage: string;
}