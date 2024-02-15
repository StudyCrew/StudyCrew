export interface FeaturesStageCard {
  image: string
  title: string
  description: string
}

export enum FeaturesStageID {
  StageOne = 'stage-1',
  StageTwo = 'stage-2',
  StageThree = 'stage-3'
}

export interface FeaturesStage {
  id: FeaturesStageID
  title: string
  limit: number
  description: string
  cards: FeaturesStageCard[]
}
