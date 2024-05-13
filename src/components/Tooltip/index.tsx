import React from 'react'
import {
  Tooltip as TooltipUi,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Tooltip = (): JSX.Element => {
  return(
  <TooltipProvider>
    <TooltipUi>
      <TooltipTrigger>Hover</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </TooltipUi>
  </TooltipProvider>
 )
}

export default Tooltip;
