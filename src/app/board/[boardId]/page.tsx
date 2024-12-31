import React from 'react'
import Canvas from './_components/canvas'
import Loading from './_components/loading';
import { Room } from '@/components/Room';


interface BoardIdPageProps {
  params: Promise<{
    boardId: string;
  }>;
}

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
  const resolvedParams = await params; // Resolve the promise if params is asynchronous

  return (
    <Room roomId={resolvedParams.boardId} fallback={<Loading />}>
      <Canvas boardId={resolvedParams.boardId} />
    </Room>
  );
};

export default BoardIdPage;
