import React from 'react'
import { IconProps } from '@phosphor-icons/react'

export interface FeaturesStageCard {
  main: boolean
  image?: string
  icon?: React.ComponentType<IconProps>
  title: string
  description: string
  bullet_points?: Array<{ icon: React.ComponentType<IconProps>; text: string }>
}

export enum FeaturesStageID {
  StageOne = 'stage-1',
  StageTwo = 'stage-2',
  StageThree = 'stage-3'
}

export interface FeaturesStage {
  id: FeaturesStageID
  title: string
  icon: React.ComponentType<IconProps>
  limit: number
  description: string
  cards: FeaturesStageCard[]
}
