"use client"
import React from 'react'

interface BackgroundColorProps {
    setBackgroundColor : (color : Color) => void;
}

const BackgroundColor = ({
    setBackgroundColor,
}: BackgroundColorProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
            <ColorButton color={{ r: 243, g: 82, b: 35 }}  setBackGroundColor = {setBackgroundColor}/>
            <ColorButton color={{ r: 255, g: 249, b: 177 }} setBackGroundColor = {setBackgroundColor} />
            <ColorButton color={{ r: 68, g: 202, b: 99 }} setBackGroundColor = {setBackgroundColor} />
            <ColorButton color={{ r: 39, g: 142, b: 237 }} setBackGroundColor = {setBackgroundColor} />
            <ColorButton color={{ r: 155, g: 105, b: 245 }} setBackGroundColor = {setBackgroundColor} />
            <ColorButton color={{ r: 252, g: 142, b: 42 }} setBackGroundColor = {setBackgroundColor} />
            <ColorButton color={{ r: 0, g: 0, b: 0 }} setBackGroundColor = {setBackgroundColor} />
            <ColorButton color={{ r: 245, g: 245, b: 245 }} setBackGroundColor = {setBackgroundColor} />
        </div>
  )
}

export default BackgroundColor


import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas"


interface ColorButtonProps {
    setBackGroundColor : (color : Color) => void;
    color : Color;
}

const ColorButton = ({
    setBackGroundColor,
    color,
}: ColorButtonProps) => {
    return (
        <button
            className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
            onClick={() => setBackGroundColor(color)}
        >
            <div
                className="h-8 w-8 rounded-md border border-neutral-300"
                style={{ background : colorToCss(color) }}
            />
        </button>
    )
}