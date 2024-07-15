import jacob from 'public/assets/avatars/jacob.svg' assert { type: 'svg' }
import anmol from 'public/assets/avatars/anmol.svg' assert { type: 'svg' }
import user from 'public/assets/avatars/user.svg' assert { type: 'svg' }
import rohan from 'public/assets/avatars/rohan.svg' assert { type: 'svg' }
import oviya from 'public/assets/avatars/oviya.svg' assert { type: 'svg' }
import adedayo from 'public/assets/avatars/adedayo.svg' assert { type: 'svg' }
import tarunvidyut from 'public/assets/avatars/tarunvidyut.svg' assert { type: 'svg' }
import toryn from 'public/assets/avatars/toryn.svg' assert { type: 'svg' }
import xavier from 'public/assets/avatars/xavier.svg' assert { type: 'svg' }
import daksh from 'public/assets/avatars/daksh.svg' assert { type: 'svg' }

enum TeamMemberRole {
  Founder = 'Founder',
  COO = 'COO',
  HeadMarketing = 'Head of Marketing',
  Marketing = 'Marketing',
  HeadDevelopment = 'Head of Development',
  Development = 'Development',
  HeadUIUXDesign = 'Head of UI/UX Design',
  UIUXDesign = 'UI/UX Design',
  HeadProductManagement = 'Head of Product Management',
  ProductManagement = 'Product Management',
  HeadContentManagement = 'Head of Content Management',
  ContentManagement = 'Content Management',
  Kian = 'Lead & Homepage Designer'
}

const TEAM_MEMBERS = [
  {
    name: 'Jacob',
    role: TeamMemberRole.Founder,
    avatar: jacob as string
  },
  {
    name: 'Anmol',
    role: TeamMemberRole.COO,
    avatar: anmol as string
  },
  {
    name: 'Amina',
    role: TeamMemberRole.HeadMarketing,
    avatar: user as string
  },
  {
    name: 'Rohan',
    role: TeamMemberRole.HeadContentManagement,
    avatar: rohan as string
  },
  {
    name: 'Sreekar',
    role: TeamMemberRole.HeadProductManagement,
    avatar: user as string
  },
  {
    name: 'Xavier',
    role: TeamMemberRole.ProductManagement,
    avatar: xavier as string
  },
  {
    name: 'Daksh',
    role: TeamMemberRole.ProductManagement,
    avatar: daksh as string
  },
  {
    name: 'Aiya',
    role: TeamMemberRole.ProductManagement,
    avatar: user as string
  },
  {
    name: 'Oviya',
    role: TeamMemberRole.Marketing,
    avatar: oviya as string
  },
  {
    name: 'Jona',
    role: TeamMemberRole.Marketing,
    avatar: user as string
  },
  {
    name: 'Tarunvidyut',
    role: TeamMemberRole.ContentManagement,
    avatar: tarunvidyut as string
  },
  {
    name: 'Kian',
    role: TeamMemberRole.Kian,
    avatar: user as string
  },
  {
    name: 'Adedayo',
    role: TeamMemberRole.UIUXDesign,
    avatar: adedayo as string
  },
  {
    name: 'Dew',
    role: TeamMemberRole.UIUXDesign,
    avatar: user as string
  },
  {
    name: 'Melody',
    role: TeamMemberRole.UIUXDesign,
    avatar: user as string
  },
  {
    name: 'Sarah',
    role: TeamMemberRole.UIUXDesign,
    avatar: user as string
  },
  {
    name: 'Vishal',
    role: TeamMemberRole.Development,
    avatar: user as string
  },
  {
    name: 'Toryn',
    role: TeamMemberRole.Development,
    avatar: toryn as string
  },
  {
    name: 'Kyle',
    role: TeamMemberRole.Development,
    avatar: user as string
  },
  {
    name: 'Abiel',
    role: TeamMemberRole.Development,
    avatar: user as string
  },
  {
    name: 'Zai',
    role: TeamMemberRole.Development,
    avatar: user as string
  }
]

export default TEAM_MEMBERS
export { TEAM_MEMBERS }
