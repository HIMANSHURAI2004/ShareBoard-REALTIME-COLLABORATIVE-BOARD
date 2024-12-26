import { Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
 } from "@radix-ui/react-tooltip";

export interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
    alignOffset?: number;
};

export const Hint = ({
    label,
    children,
    side ,
    align,
    sideOffset,
    alignOffset,
}:HintProps) =>{
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent className="text-white text-opacity-85 bg-black border-black rounded-md"
                side={side}
                align={align}
                sideOffset={sideOffset}
                alignOffset={alignOffset}
                >
                    <p className="font-semibold capitalize text-xs p-1 ">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}