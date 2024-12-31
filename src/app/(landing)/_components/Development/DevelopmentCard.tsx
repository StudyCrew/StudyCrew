import React, { useState, useEffect } from 'react'
import { DevelopmentCardProps } from './types'

const DevelopmentCard: React.FC<DevelopmentCardProps> = (props: DevelopmentCardProps): JSX.Element => {
    const { title, icon: Icon, children } = props
    return (
        <div className='bg-primary-100 '>
            <div>
                {title}   
                {Icon && <Icon />}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default DevelopmentCard