import dew from 'public/assets/avatars/dew.svg' assert { type: 'svg' }
import zai from 'public/assets/avatars/zai.svg' assert { type: 'svg' }
import jona from 'public/assets/avatars/jona.svg' assert { type: 'svg' }
import kian from 'public/assets/avatars/kian.svg' assert { type: 'svg' }
import aiya from 'public/assets/avatars/aiya.svg' assert { type: 'svg' }
import kyle from 'public/assets/avatars/kyle.svg' assert { type: 'svg' }
import jacob from 'public/assets/avatars/jacob.svg' assert { type: 'svg' }
import sarah from 'public/assets/avatars/sarah.svg' assert { type: 'svg' }
import xavier from 'public/assets/avatars/xavier.svg' assert { type: 'svg' }
import melody from 'public/assets/avatars/melody.svg' assert { type: 'svg' }
import vishal from 'public/assets/avatars/vishal.svg' assert { type: 'svg' }
import nicholas from 'public/assets/avatars/nicholas.svg' assert { type: 'svg' }
import sugumaran from 'public/assets/avatars/sugumaran.svg' assert { type: 'svg' }

enum TeamMemberRole {
  Founder = 'Founder',
  Marketing = 'Marketing',
  Developer = 'Developer',
  Development = 'Development',
  UIUXDesign = 'UI/UX Design',
  LeadDeveloper = 'Lead Developer',
  ProductManagement = 'Product Management'
}

const TEAM_MEMBERS = [
  {
    name: 'Jacob',
    role: TeamMemberRole.Founder,
    avatar: jacob as string
  },
  {
    name: 'Jona',
    role: TeamMemberRole.Marketing,
    avatar: jona as string
  },
  {
    name: 'Sugumaran',
    role: TeamMemberRole.Development,
    avatar: sugumaran as string
  },
  {
    name: 'Kian',
    role: TeamMemberRole.UIUXDesign,
    avatar: kian as string
  },
  {
    name: 'Xavier',
    role: TeamMemberRole.ProductManagement,
    avatar: xavier as string
  },
  {
    name: 'Dew',
    role: TeamMemberRole.UIUXDesign,
    avatar: dew as string
  },
  {
    name: 'Nicholas',
    role: TeamMemberRole.Marketing,
    avatar: nicholas as string
  },
  {
    name: 'Melody',
    role: TeamMemberRole.UIUXDesign,
    avatar: melody as string
  },
  {
    name: 'Vishal',
    role: TeamMemberRole.Development,
    avatar: vishal as string
  },
  {
    name: 'Kyle',
    role: TeamMemberRole.LeadDeveloper,
    avatar: kyle as string
  },
  {
    name: 'Aiya',
    role: TeamMemberRole.ProductManagement,
    avatar: aiya as string
  },
  {
    name: 'Sarah',
    role: TeamMemberRole.UIUXDesign,
    avatar: sarah as string
  },
  {
    name: 'Zai',
    role: TeamMemberRole.Developer,
    avatar: zai as string
  }
]

export default TEAM_MEMBERS
export { TEAM_MEMBERS }
