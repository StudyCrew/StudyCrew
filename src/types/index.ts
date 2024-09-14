import { GroupSubject } from './models/index'
import { MaterialProps } from './index.d.ts'

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