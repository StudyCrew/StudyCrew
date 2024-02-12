export interface FeaturesStageCard {
  image: string
  title: string
  description: string
}

export interface FeaturesStage {
  id: string
  title: string
  limit: number
  description: string
  cards: FeaturesStageCard[]
}

export enum FeaturesStageID {
  StageOne = 'stage-1',
  StageTwo = 'stage-2',
  StageThree = 'stage-3'
}

export interface FeaturesProps {
  className?: string
}
