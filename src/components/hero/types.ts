export interface HeroProps {
  className?: string
  handleLearnMoreClick: () => void
  handleJoinWaitlistClick: () => void
}

export enum HeroWord {
  Collaborative = 'Collaborative',
  Accessible = 'Accessible',
  Engaging = 'Engaging'
}
