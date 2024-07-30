import type { MaterialType } from '../../types'
import { User } from '@supabase/supabase-js'

declare type MaterialComponentProps = {
  type: MaterialType;
  websiteLink: string;
  title: string;
  link: string;
  user: string;
  date: Date;
  variant?: "default" | "small";
}