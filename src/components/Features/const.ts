import NOTES_SVG from 'public/assets/features/notes.svg' assert { type: 'svg' }
import COURSES_SVG from 'public/assets/features/courses.svg' assert { type: 'svg' }
import PROFILE_SVG from 'public/assets/features/profile.svg' assert { type: 'svg' }
import TUTORING_SVG from 'public/assets/features/tutoring.svg' assert { type: 'svg' }
import AI_TUTOR_SVG from 'public/assets/features/ai_tutor.svg' assert { type: 'svg' }
import MESSAGING_SVG from 'public/assets/features/messaging.svg' assert { type: 'svg' }
import FLASH_CARDS_SVG from 'public/assets/features/flashcards.svg' assert { type: 'svg' }
import STUDY_GROUPS_SVG from 'public/assets/features/study_groups.svg' assert { type: 'svg' }
import GAMIFICATION_SVG from 'public/assets/features/gamification.svg' assert { type: 'svg' }
import LEARNING_PATHS_SVG from 'public/assets/features/learning_paths.svg' assert { type: 'svg' }
import FEEDBACK_FORUM_SVG from 'public/assets/features/feedback_forum.svg' assert { type: 'svg' }
import VIRTUAL_EVENTS_SVG from 'public/assets/features/virtual_events.svg' assert { type: 'svg' }
import PERSONAL_DASHBOARD_SVG from 'public/assets/features/personal_dashboard.svg' assert { type: 'svg' }
import MOBILE_APPLICATION_SVG from 'public/assets/features/mobile_application.svg' assert { type: 'svg' }
import VIRTUAL_STUDY_ROOMS_SVG from 'public/assets/features/virtual_study_rooms.svg' assert { type: 'svg' }
import MULTILINGUAL_SUPPORT_SVG from 'public/assets/features/multilingual_support.svg' assert { type: 'svg' }
import LEARNING_ENVIRONMENTS_SVG from 'public/assets/features/learning_environments.svg' assert { type: 'svg' }
import COLLLABORATIVE_PROJECTSS_SVG from 'public/assets/features/collaborative_projects.svg' assert { type: 'svg' }

import { FeaturesStageID, type FeaturesStage } from './types'

export const MOBILE_WIDTH_BREAKPOINT = 950

export const FEATURES_STAGE_ONE: FeaturesStage = {
  id: FeaturesStageID.StageOne,
  title: 'Stage 1',
  limit: 6,
  description: 'Foundational Phase',
  cards: [
    {
      image: STUDY_GROUPS_SVG as string,
      title: 'Study Groups',
      description:
        'Join our Study Groups: a space for collaborative learning. Engage in group chats, share resources, tackle questions together, and discover study partners. Tailored for students, by students.'
    },
    {
      image: TUTORING_SVG as string,
      title: 'Tutoring',
      description:
        'Discover free tutoring sessions on diverse topics. This is a place where tutors and learners come together to dive deep into subjects, gain clarity, and boost your confidence.'
    },
    {
      image: LEARNING_PATHS_SVG as string,
      title: 'Learning Paths',
      description:
        'Discover Learning Paths: Curated journeys through top-notch content. Engage with organized resources, enjoy community-crafted paths, and benefit from integrated study groups.'
    },
    {
      image: FEEDBACK_FORUM_SVG as string,
      title: 'Feedback Forum',
      description:
        'Engage in our Feedback Forum, a unique space where students share projects, from essays to presentations, and gain valuable insights from peers and educators. While we will have Q&A boards specific to study groups, this forum encompasses our entire user base.'
    },
    {
      image: PERSONAL_DASHBOARD_SVG as string,
      title: 'Personal Dashboard',
      description:
        'Your hub for insights and access. Dive into tailored overviews, navigate to desired resources, and gain clarity on your learning journey. All your educational tools, in one cohesive space.'
    },
    {
      image: PROFILE_SVG as string,
      title: 'User Profile',
      description:
        'Your hub for insights and access. Dive into tailored overviews, navigate to desired resources, and gain clarity on your learning journey. All your educational tools, in one cohesive space.'
    },
    {
      image: GAMIFICATION_SVG as string,
      title: 'Gamification',
      description:
        'Earn points, receive badges, and join leaderboards by hitting milestones, helping others and demonstrating your own progress on StudyCrew.'
    }
  ]
}

export const FEATURES_STAGE_TWO: FeaturesStage = {
  id: FeaturesStageID.StageTwo,
  title: 'Stage 2',
  limit: 6,
  description: 'Expansion Phase',
  cards: [
    {
      image: MOBILE_APPLICATION_SVG as string,
      title: 'Mobile Application',
      description:
        'A curated journey into diverse subjects. Engage with structured content, gain hands-on experience, and progress at your own pace.The courses will be in video format, with interactive and collaborative elements added'
    },
    {
      image: AI_TUTOR_SVG as string,
      title: 'AI Tutor',
      description:
        'Explore a new way of learning with our AI Chatbot that assists your learning experience. Dive deep into subjects, gain insights, and elevate your study effectiveness with our always available study companion.'
    },
    {
      image: COURSES_SVG as string,
      title: 'Courses',
      description:
        'A curated journey into diverse subjects. Engage with structured content, gain hands-on experience, and progress at your own pace. The courses will be in video format, with interactive and collaborative elements added.'
    },
    {
      image: NOTES_SVG as string,
      title: 'Notes',
      description:
        'A personalized space for your insights. Jot down key takeaways, organize your thoughts, and revisit them anytime. Tailored for reflective learning and effortless recall.'
    },
    {
      image: FLASH_CARDS_SVG as string,
      title: 'Flashcards',
      description:
        'Master your studies with flashcards and spaced repetition. Easily create, share, and review flashcards, making learning more efficient and fun for everyone. '
    },
    {
      image: MESSAGING_SVG as string,
      title: 'Messaging',
      description:
        // prettier-ignore
        'Stay seamlessly connected with fellow users, whether it\'s coordinating study sessions, seeking guidance from tutors, or chatting with friends through our new messaging feature. Enhance your online community experience and boost collaboration effortlessly.'
    },
    {
      image: MULTILINGUAL_SUPPORT_SVG as string,
      title: 'Multilingual Support',
      description:
        'Unlock global learning possibilities with multilingual support. No matter the language you speak, we want to ensure that your educational journey is seamless and inclusive.'
    }
  ]
}

export const FEATURES_STAGE_THREE: FeaturesStage = {
  id: FeaturesStageID.StageThree,
  title: 'Stage 3',
  limit: 3,
  description: 'Futuristic Learning',
  cards: [
    {
      image: LEARNING_ENVIRONMENTS_SVG as string,
      title: '3D Learning Environments',
      description:
        'Step into the future of learning with our 3D learning environments. Learn through exploration and engage with topics like never before.'
    },
    {
      image: COLLLABORATIVE_PROJECTSS_SVG as string,
      title: 'Collaborative Projects',
      description:
        'Dive into collaborative projects that not only enhance your knowledge but also improve your teamwork and communication skills.'
    },
    {
      image: VIRTUAL_STUDY_ROOMS_SVG as string,
      title: 'Virtual Study Rooms',
      description:
        'Dive into immersive, real-time study sessions with peers. Collaborate, discuss, and learn together in our interactive digital spaces, designed to make online learning feel just like being in the same room.'
    },
    {
      image: VIRTUAL_EVENTS_SVG as string,
      title: 'Virtual Events',
      description:
        'This feature allows all users to come together virtually. Tailored for community-building and educational enrichment, this space allows participants to interact, share knowledge, and foster connections in a live virtual environment.'
    }
  ]
}

export const FEATURES_STAGES: FeaturesStage[] = [
  FEATURES_STAGE_ONE,
  FEATURES_STAGE_TWO,
  FEATURES_STAGE_THREE
]
