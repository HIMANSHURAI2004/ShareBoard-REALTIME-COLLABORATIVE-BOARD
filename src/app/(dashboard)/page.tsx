// "use client"
// import React from 'react'
// import EmptyOrg from './_components/empty-org'
// import { useOrganization } from '@clerk/nextjs'
// import BoardList from './_components/board-list'


// interface DashboardPageProps {
//   searchParams : {
//     search? : string;
//     favorites? : string;
//   }
// }
// const DashboardPage = ({
//   searchParams,
// }:DashboardPageProps) => {
//   const { organization} = useOrganization()

//   return (
//     <div className=' flex-1 h-[calc(100%-80px)] p-6 '>
//       {!organization ? (
//         <EmptyOrg/>
//       ) : (
//         <BoardList
//           orgId = {organization.id}
//           query = {searchParams}
//         />
//       )
//     }
//     </div>
//   )
// }

// export default DashboardPage






//CHANGED THIS CODE TO SOLVE THE SEARCH PARAMS ERROR 
// ABOVE CODE IS THE ORIGINAL CODE
"use client"
import EmptyOrg from './_components/empty-org'
import { useOrganization } from '@clerk/nextjs'
import BoardList from './_components/board-list'
import { useSearchParams } from 'next/navigation'


const DashboardPage = () => {
  const { organization} = useOrganization()
  const searchParam = useSearchParams()
  const query = {
    search : searchParam.get('search') || undefined,
    favorites : searchParam.get('favorites') || undefined,
  }
  return (
    <div className=' flex-1 h-[calc(100%-80px)] p-6 '>
      {!organization ? (
        <EmptyOrg/>
      ) : (
        <BoardList
          orgId = {organization.id}
          query = {query}
        />
      )
    }
    </div>
  )
}

export default DashboardPage