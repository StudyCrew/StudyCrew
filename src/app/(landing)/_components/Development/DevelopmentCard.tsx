import React, { useState, useEffect } from 'react'
import { DevelopmentCardProps } from './types'

const DevelopmentCard: React.FC<DevelopmentCardProps> = (
  props: DevelopmentCardProps
): JSX.Element => {
  const { title, icon: Icon, children } = props
  return (
    <div className="bg-primary-100 py-4 px-6 rounded-lg flex items-center gap-4">
        <div className='text-3xl'>
            {Icon && <Icon weight="duotone"/>}
        </div>
        <div>
            <div className="text-xl font-medium">
                {title}
            </div>
            <div>{children}</div>
        </div>
    </div>
  )
}

export default DevelopmentCard
