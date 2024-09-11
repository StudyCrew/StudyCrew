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