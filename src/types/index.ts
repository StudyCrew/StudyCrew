import { GroupSubject } from './models/index'

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