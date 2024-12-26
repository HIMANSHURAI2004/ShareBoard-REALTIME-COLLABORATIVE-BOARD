"use client"

import { Hint } from "@/app/(dashboard)/_components/hint"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react";

interface ToolButtonProps {
    label : string;
    icon : LucideIcon;
    onClick : () => void;
    isActive? : boolean;
    isDisabled? : boolean;
};

export const ToolButton = ({
    label,
    icon:Icon,
    onClick,
    isActive,
    isDisabled,
} : ToolButtonProps) => {
    return (
        <Hint label={label} side='right' sideOffset={14}>
            <Button 
                size="icon"
                onClick={onClick}
                disabled={isDisabled}
                variant={isActive ? 'boardActive' : 'board'} 
            >
                <Icon/>
            </Button>
        </Hint>
    )
}