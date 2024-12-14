import DotedTitle from '@/components/templates/mainPage/DotedTitle'
import React from 'react'

function CommentCard({comment}) {

    return (
    <div className='w-full h-fit bg-gray-800 mt-8 rounded-lg p-5'>
        <div className='w-full flex justify-between px-2'>
        <DotedTitle title={comment.author} />
        <p>
        {comment.createdAt.toLocaleString("fa-ir")}
        </p>
        </div>

        <div>
            {comment.comment}
        </div>
    </div>
  )
}

export default CommentCard
