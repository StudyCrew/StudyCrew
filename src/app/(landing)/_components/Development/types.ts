import React, { type ReactNode } from 'react'

export interface DevelopmentCardProps {
  children: ReactNode
  title: string
  icon: React.ComponentType
  last?: boolean
}
