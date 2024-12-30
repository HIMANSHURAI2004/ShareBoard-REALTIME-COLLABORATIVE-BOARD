// "use client"

// import Image from "next/image"

// import {
//     useOrganization,
//     useOrganizationList,
// } from "@clerk/nextjs"

// import { cn } from "@/lib/utils"
// import { Hint } from "../hint";

// interface ItemProps {
//     id: string;
//     name: string;
//     imageUrl: string;
// };

// export const Item = ({
//     id,
//     name,
//     imageUrl,
// } : ItemProps) => {
//     const { organization } = useOrganization()
//     const {setActive} = useOrganizationList()

//     const isActive = organization?.id === id

//     const onClick = () => {
//         if(!setActive) return;

//         setActive({organization: id})
//     }
//     return (
//         <div className="aspect-square relative">
//             <Hint 
//              label={name}
//              side="right"
//              align="start"
//              sideOffset={18}
//             >
//                 <Image
//                 fill
//                 alt={name}
//                 src={imageUrl}
//                 onClick={onClick}
//                 className={cn(
//                     "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
//                     isActive && "opacity-100"
//                 )}
//                 />
//             </Hint>
//         </div>
//     )
// }


"use client"

import {
    useOrganization,
    useOrganizationList,
} from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { Hint } from "../hint";
import { Button } from "@/components/ui/button";

interface ItemProps {
    id: string;
    name: string;
    imageUrl: string;
};

export const Item = ({
    id,
    name,
} : ItemProps) => {
    const { organization } = useOrganization()
    const {setActive} = useOrganizationList()

    const isActive = organization?.id === id

    const onClick = () => {
        if(!setActive) return;

        setActive({organization: id})
    }
    return (
        <div className="aspect-square relative">
            <Hint 
             label={name}
             side="right"
             align="start"
             sideOffset={18}
            >
                <Button 
                onClick={onClick}
                className={cn(
                    " rounded-md cursor-pointer opacity-70 bg-pink-700 hover:bg-pink-700 hover:opacity-100 transition",
                    isActive && "opacity-100 bg-pink-700"
                )}>
                    {name[0].toUpperCase()}
                </Button>
            </Hint>
        </div>
    )
}