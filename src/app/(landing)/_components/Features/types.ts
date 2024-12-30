import React from 'react'

export interface FeaturesStageCard {
  main: boolean
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
  icon: React.ComponentType
  limit: number
  description: string
  cards: FeaturesStageCard[]
}
