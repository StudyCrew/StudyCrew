import React from 'react'

export interface FeaturesStageCard {
  main: boolean
  image?: string
  icon?: React.ComponentType
  title: string
  description: string
  bullet_points?: Array<{ icon: React.ComponentType; text: string }>;
}

export enum FeaturesStageID {
  StageOne = 'stage-1',
  StageTwo = 'stage-2',
  StageThree = 'stage-3'
}

export interface FeaturesStage {
  id: FeaturesStageID
  title: string
  icon: React.ComponentType
  limit: number
  description: string
  cards: FeaturesStageCard[]
}
