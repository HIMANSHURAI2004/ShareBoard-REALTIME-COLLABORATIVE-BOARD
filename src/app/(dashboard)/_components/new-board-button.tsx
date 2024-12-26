"use client"

import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import React from 'react'
import { api } from '../../../../convex/_generated/api';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface NewBoardButtonProps {
    orgId : string;
    disabled? : boolean;
}

const NewBoardButton = ({
    orgId,
    disabled,
}:NewBoardButtonProps) => {

    const {mutate , pending} = useApiMutation(api.board.create);
    const router = useRouter();
    const onClick = () => {
        mutate({
            orgId,
            title : "Untitled"
        })
        .then((id) => {
            toast.success("Board created");
            router.push(`/board/${id}`);
        })
        .catch(() => 
            toast.error("Failed to create board")
        )
    }
    return (
        <button
            disabled={pending || disabled}
            onClick={onClick}
            className={cn(
                "col-span-1 aspect-[100/127] hover:bg-blue-800 rounded-lg flex flex-col justify-center items-center bg-blue-600 py-6",
                (pending || disabled) && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
            )}
            >
                <div/>
                <Plus className='h-12 w-12 text-white stroke-1'/>
                <p className='text-white text-xs font-light'>
                    New Board
                </p>
        </button>
    )     
}

export default NewBoardButton