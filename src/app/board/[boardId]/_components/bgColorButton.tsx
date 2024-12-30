import { Color } from '@/types/canvas';
import React from 'react'
import BackgroundColor from './BackgroundColor';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
interface BgColorButtonProps {
    backgroundColor : Color;
    setBackgroundColor : (color : Color) => void;
}

const BgColorButton = ({
    backgroundColor,
    setBackgroundColor,
}: BgColorButtonProps) => {
  return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div
                        className="h-8 w-8 rounded-md border border-neutral-300 cursor-pointer"
                        style={{
                            backgroundColor : `rgba(${backgroundColor.r},${backgroundColor.g},${backgroundColor.b},1)` 
                        }}
                                />
                </TooltipTrigger>
                <TooltipContent
                    side='right'
                    sideOffset={14}
                >
                    <BackgroundColor setBackgroundColor = {setBackgroundColor}/>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
  )
}

export default BgColorButton