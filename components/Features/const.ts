import study_groups from './../../public/assets/features/study_groups.svg'
import tutoring from './../../public/assets/features/tutoring.svg'
import learning_paths from './../../public/assets/features/learning_paths.svg'
import personal_dashboard from './../../public/assets/features/personal_dashboard.svg'
import feedback_forum from './../../public/assets/features/feedback_forum.svg'
import gamification from './../../public/assets/features/gamification.svg'
import courses from './../../public/assets/features/courses.svg'
import flashcards from './../../public/assets/features/flashcards.svg'
import messaging from './../../public/assets/features/messaging.svg'
import ai_tutor from './../../public/assets/features/ai_tutor.svg'
import multilingual_support from './../../public/assets/features/multilingual_support.svg'
import mobile_application from './../../public/assets/features/mobile_application.svg'
import notes from './../../public/assets/features/notes.svg'
import learning_environments from './../../public/assets/features/learning_environments.svg'
import collaborative_projects from './../../public/assets/features/collaborative_projects.svg'
import virtual_study_rooms from './../../public/assets/features/virtual_study_rooms.svg'
import virtual_events from './../../public/assets/features/virtual_events.svg'
import profile from './../../public/assets/features/profile.svg'

import { type FeaturesStage } from './types'

export const MOBILE_WIDTH_BREAKPOINT = 950 // eslint-disable-line

export const FEATURES_STAGE_ONE: FeaturesStage = {
  // eslint-disable-line
  id: 'stage-1',
  title: 'Stage 1',
  limit: 6,
  description: 'Foundational Phase',
  cards: [
    {
      image: study_groups,
      title: 'Study Groups',
      description:
        'Join our Study Groups: a space for collaborative learning. Engage in group chats, share resources, tackle questions together, and discover study partners. Tailored for students, by students.'
    },
    {
      image: tutoring,
      title: 'Tutoring',
      description:
        'Discover free tutoring sessions on diverse topics. This is a place where tutors and learners come together to dive deep into subjects, gain clarity, and boost your confidence.'
    },
    {
      image: learning_paths,
      title: 'Learning Paths',
      description:
        'Discover Learning Paths: Curated journeys through top-notch content. Engage with organized resources, enjoy community-crafted paths, and benefit from integrated study groups.'
    },
    {
      image: feedback_forum,
      title: 'Feedback Forum',
      description:
        'Engage in our Feedback Forum, a unique space where students share projects, from essays to presentations, and gain valuable insights from peers and educators. While we will have Q&A boards specific to study groups, this forum encompasses our entire user base.'
    },
    {
      image: personal_dashboard,
      title: 'Personal Dashboard',
      description:
        'Your hub for insights and access. Dive into tailored overviews, navigate to desired resources, and gain clarity on your learning journey. All your educational tools, in one cohesive space.'
    },
    {
      image: profile,
      title: 'User Profile',
      description:
        'Your hub for insights and access. Dive into tailored overviews, navigate to desired resources, and gain clarity on your learning journey. All your educational tools, in one cohesive space.'
    },
    {
      image: gamification,
      title: 'Gamification',
      description:
        'Earn points, receive badges, and join leaderboards by hitting milestones, helping others and demonstrating your own progress on StudyCrew.'
    }
  ]
}

export const FEATURES_STAGE_TWO: FeaturesStage = {
  // eslint-disable-line
  id: 'stage-2',
  title: 'Stage 2',
  limit: 6,
  description: 'Expansion Phase',
  cards: [
    {
      image: mobile_application,
      title: 'Mobile Application',
      description:
        'A curated journey into diverse subjects. Engage with structured content, gain hands-on experience, and progress at your own pace.The courses will be in video format, with interactive and collaborative elements added'
    },
    {
      image: ai_tutor,
      title: 'AI Tutor',
      description:
        'Explore a new way of learning with our AI Chatbot that assists your learning experience. Dive deep into subjects, gain insights, and elevate your study effectiveness with our always available study companion.'
    },
    {
      image: courses,
      title: 'Courses',
      description:
        'A curated journey into diverse subjects. Engage with structured content, gain hands-on experience, and progress at your own pace. The courses will be in video format, with interactive and collaborative elements added.'
    },
    {
      image: notes,
      title: 'Notes',
      description:
        'A personalized space for your insights. Jot down key takeaways, organize your thoughts, and revisit them anytime. Tailored for reflective learning and effortless recall.'
    },
    {
      image: flashcards,
      title: 'Flashcards',
      description:
        'Master your studies with flashcards and spaced repetition. Easily create, share, and review flashcards, making learning more efficient and fun for everyone. '
    },
    {
      image: messaging,
      title: 'Messaging',
      description:
        "Stay seamlessly connected with fellow users, whether it's coordinating study sessions, seeking guidance from tutors, or chatting with friends through our new messaging feature. Enhance your online community experience and boost collaboration effortlessly."
    },
    {
      image: multilingual_support,
      title: 'Multilingual Support',
      description:
        'Unlock global learning possibilities with multilingual support. No matter the language you speak, we want to ensure that your educational journey is seamless and inclusive.'
    }
  ]
}

export const FEATURES_STAGE_THREE: FeaturesStage = {
  // eslint-disable-line
  id: 'stage-3',
  title: 'Stage 3',
  limit: 3,
  description: 'Futuristic Learning',
  cards: [
    {
      image: learning_environments,
      title: '3D Learning Environments',
      description:
        'Step into the future of learning with our 3D learning environments. Learn through exploration and engage with topics like never before.'
    },
    {
      image: collaborative_projects,
      title: 'Collaborative Projects',
      description:
        'Dive into collaborative projects that not only enhance your knowledge but also improve your teamwork and communication skills.'
    },
    {
      image: virtual_study_rooms,
      title: 'Virtual Study Rooms',
      description:
        'Dive into immersive, real-time study sessions with peers. Collaborate, discuss, and learn together in our interactive digital spaces, designed to make online learning feel just like being in the same room.'
    },
    {
      image: virtual_events,
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
