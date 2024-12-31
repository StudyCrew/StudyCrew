import React, { useState, useEffect } from 'react'
import { DevelopmentCardProps } from './types'

const DevelopmentCard: React.FC<DevelopmentCardProps> = (
  props: DevelopmentCardProps
): JSX.Element => {
  const { title, icon: Icon, children, last = false } = props
  return (
    <div>
      <div className="bg-primary-100 py-4 px-6 rounded-lg flex items-center gap-4 text-primary-950">
        <div className="text-3xl md:flex hidden">{Icon && <Icon weight="duotone" />}</div>
        <div>
          <div className="text-xl font-medium flex gap-2"><span className='text-2xl md:hidden visible'>{Icon && <Icon weight="duotone" />}</span> {title}</div>
          <div className="md:text-lg text-base text-secondary-text-800 leading-snug">
            {children}
          </div>
        </div>
      </div>

      {/* Line Connecting Cards */}
      {!last && (
        <div className="w-full flex justify-center">
          <div className="h-5 w-1 bg-primary-100"></div>
        </div>
      )}
    </div>
  )
}

export default DevelopmentCard
