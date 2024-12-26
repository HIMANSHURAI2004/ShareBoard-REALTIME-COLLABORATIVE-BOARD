import { Hint } from '@/app/(dashboard)/_components/hint';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react'

interface UserAvatarProps {
    src? : string;
    name? : string;
    fallback? : string;
    borderColor? : string;
}


const UserAvatar = ({
    src,
    name,
    fallback,
    borderColor,
} : UserAvatarProps) => {
  return (
    <Hint label={name || 'Teammate'} side='bottom' sideOffset={18}>
        <Avatar
          className='w-8 h-8 border-2'
          style={{borderColor}}
        >
            <AvatarImage src={src}/>
            <AvatarFallback className='text-sm font-semibold'>
                {fallback}
            </AvatarFallback>
        </Avatar>
    </Hint>
  )
}

export default UserAvatar