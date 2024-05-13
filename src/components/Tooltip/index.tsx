import React, { useRef } from 'react'

import { type TooltipProps } from '@/components/Tooltip/props'
import { surface } from '../../styles/fonts'

import {
  Tooltip as TooltipUI,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow
} from '@/components/ui/tooltip'

import { cn } from '@/utils'
import './style.css'

const Tooltip: React.FC<TooltipProps> = ({
  information,
  textHover,
  align = 'end',
  side = 'top'
}) => {
  const tooltipRef = useRef(null)

  const arrowPositionClass = cn({
    tooltipArrowSetup: true,
    'tooltipArrowSetup-top': side === 'bottom',
    'tooltipArrowSetup-bottom': side === 'top',
    'tooltipArrowSetup-left': side === 'right',
    'tooltipArrowSetup-right': side === 'left',
    'tooltipArrowSetup-start':
      align === 'start' && (side === 'top' || side === 'bottom'),
    'tooltipArrowSetup-end':
      align === 'end' && (side === 'top' || side === 'bottom')
  })

  return (
    <TooltipProvider>
      <TooltipUI>
        <TooltipTrigger>{textHover}</TooltipTrigger>
        <TooltipContent
          ref={tooltipRef}
          align={align}
          side={side}
          className={cn('tooltipDesign')}
        >
          <TooltipArrow className={arrowPositionClass} />
          <p className={surface.variable}>{information}</p>
        </TooltipContent>
      </TooltipUI>
    </TooltipProvider>
  )
}

export default Tooltip
