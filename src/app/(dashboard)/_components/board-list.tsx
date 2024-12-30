"use client"
import React from 'react'
import EmptySearch from './empty-search';
import EmptyFavorites from './empty-favorites';
import EmptyBoards from './empty-boards';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import BoardCard from './board-card';
import NewBoardButton from './new-board-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LayoutDashboard, Star } from 'lucide-react';
interface BoardListProps {
    orgId : string;
    query : {
        search? : string;
        favorites? : string;
    }
}


const BoardList = ({
    orgId,
    query,
}:BoardListProps) => {

    const data = useQuery(api.boards.get,{ orgId , ...query}); 
    
    if(data === undefined) {
        return (
            <div>
                <h2 className='text-3xl'>
                    {query.favorites ? "Favorite boards" : "Team boards"}
                </h2>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10'>
                    <NewBoardButton orgId={orgId} disabled/>
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>

                </div>
            </div>
        )
    }

    if(!data?.length && query.search) {
        return (
                <EmptySearch/>
        )
    }

    if(!data?.length && query.favorites) {
        return (
                <EmptyFavorites/>
        )
    }

    if(!data?.length) {
        return (
            <EmptyBoards/>
        )
    }

    return (
        <div>
            <div className='flex items-center justify-between'>
                <h2 className='text-3xl'>
                    {query.favorites ? "Favorite boards" : "Team boards"}
                </h2>
                <Button className='lg:hidden'>
                        {query.favorites ? (
                            <Link href='/'>
                                <div className='flex items-center justify-center'>
                                    <LayoutDashboard className='h-4 w-4 mr-2' /> 
                                    <p>Team boards</p>
                                </div>
                            </Link>
                        ) : (
                            <Link href={{
                                pathname:'/',
                                query: { favorites: true }
                            }}>
                                <div className='flex items-center justify-center'>
                                    <Star className='h-4 w-4 mr-2' />
                                    <p>
                                        Favorite boards
                                    </p>
                                </div>
                            </Link>
                        )}
                </Button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10'>
                <NewBoardButton orgId={orgId}/>
                {data.map((board) => (
                    <BoardCard
                        key={board._id}
                        id={board._id}
                        title={board.title}
                        imageUrl={board.imageUrl}
                        authorId = {board.authorId}
                        authorName = {board.authorName}
                        createdAt = {board._creationTime}
                        orgId = {board.orgId}
                        isFavorite = {board.isFavorite}
                    />
                ))}
            </div>
        </div>
    )
}

export default BoardList