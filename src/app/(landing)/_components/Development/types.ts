import React, { type ReactNode } from 'react'
import { IconProps } from '@phosphor-icons/react'

export interface DevelopmentCardProps {
  children: ReactNode
  title: string
  icon: React.ComponentType<IconProps>
  last?: boolean
}
