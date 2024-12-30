import TUTORING_SVG from 'public/assets/features/tutoring.svg' assert { type: 'svg' }
import STUDY_GROUPS_SVG from 'public/assets/features/study_groups.svg' assert { type: 'svg' }
import LEARNING_PATHS_SVG from 'public/assets/features/learning_paths.svg' assert { type: 'svg' }

import { FeaturesStageID, type FeaturesStage } from './types'
import {
  ArrowsOut,
  Browser,
  Chalkboard,
  Chat,
  Chats,
  ChatsTeardrop,
  DeviceMobile,
  Exam,
  File,
  Globe,
  Handshake,
  Heart,
  Link,
  Path,
  Rocket,
  SealQuestion,
  UserCircle,
  UsersFour,
  UsersThree,
  VideoCamera,
  VideoConference
} from '@phosphor-icons/react'

export const MOBILE_WIDTH_BREAKPOINT = 950

export const FEATURES_STAGE_ONE: FeaturesStage = {
  id: FeaturesStageID.StageOne,
  title: 'Version 1',
  icon: UsersFour,
  limit: 6,
  description: 'Foundational Phase',
  cards: [
    {
      main: true,
      image: STUDY_GROUPS_SVG as string,
      icon: UsersThree,
      title: 'Study Groups',
      description:
        'Study Groups are a space for collaborative learning, enabling students to support each other throughout the learning process and explore their passions together.',
      bullet_points: [
        {
          icon: Chats,
          text: 'Group Chat'
        },
        {
          icon: SealQuestion,
          text: 'Q&A Board'
        },
        {
          icon: File,
          text: 'Shared Materials'
        }
      ]
    },
    {
      main: false,
      icon: Browser,
      title: 'Personal Dashboard',
      description:
        'Users can access all essential information on their Dashboard immediately after logging in.'
    },
    {
      main: false,
      icon: UserCircle,
      title: 'User Profiles',
      description:
        'Every user will be able to create their own unique profile on StudyCrew.'
    }
  ]
}

export const FEATURES_STAGE_TWO: FeaturesStage = {
  id: FeaturesStageID.StageTwo,
  title: 'Version 2',
  icon: ArrowsOut,
  limit: 6,
  description: 'Expansion Phase',
  cards: [
    {
      main: true,
      image: LEARNING_PATHS_SVG as string,
      icon: Path,
      title: 'Learning Paths',
      description:
        'Learning paths guide users with organized online resources and exercises on specific topics. Students can discuss them in Study Groups and answer each other’s questions.',
      bullet_points: [
        {
          icon: Link,
          text: 'Online Resources'
        },
        {
          icon: Exam,
          text: 'Exercises'
        },
        {
          icon: Handshake,
          text: 'Mutual Support'
        }
      ]
    },
    {
      main: false,
      icon: DeviceMobile,
      title: 'Mobile Application',
      description:
        'For Version 2, we plan to make StudyCrew accessible to mobile users through an app.'
    },
    {
      main: false,
      icon: UsersThree,
      title: 'Study Groups',
      description:
        'We will improve the Study Groups and introduce new features based on user feedback.'
    }
  ]
}

export const FEATURES_STAGE_THREE: FeaturesStage = {
  id: FeaturesStageID.StageThree,
  title: 'Version 3',
  icon: Rocket,
  limit: 3,
  description: 'Futuristic Learning',
  cards: [
    {
      main: true,
      image: TUTORING_SVG as string,
      icon: VideoConference,
      title: 'Tutoring',
      description:
        'Group tutoring is an effective way to learn and build a strong community of learners. We aim to offer volunteer-based tutoring, allowing everyone to join the sessions for free.',
      bullet_points: [
        {
          icon: Chalkboard,
          text: 'Group Tutoring'
        },
        {
          icon: VideoCamera,
          text: 'Live Sessions'
        },
        {
          icon: Heart,
          text: 'Volunteer-Based'
        }
      ]
    },
    {
      main: false,
      icon: ChatsTeardrop,
      title: 'More Features',
      description:
        'User feedback is important to us and will guide the additional functionalities we implement.'
    },
    {
      main: false,
      icon: Globe,
      title: 'Multilingual Support',
      description:
        'We aim to offer our platform in multiple languages to increase accessibility.'
    }
  ]
}

export const FEATURES_STAGES: FeaturesStage[] = [
  FEATURES_STAGE_ONE,
  FEATURES_STAGE_TWO,
  FEATURES_STAGE_THREE
]
