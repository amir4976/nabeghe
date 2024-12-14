import React from 'react'
import CommentForm from './CommentForm'
import CommentCard from './CommentCard'

function Comments({comments,courseID}) {

    const allComments = comments.filter((e)=>e.isAccepted=== true)
  return (
    <>
        <CommentForm courseID={courseID}/>
        {
            comments.map((comment)=>(
                <>
                {comment.isAccepted && <CommentCard comment={comment}/> }        
                </>
            ))
        }

        {
            allComments.length === 0 && (
                <p className='w-full text-center my-10'>هنوز کامنتی وجود ندارد</p>
            )
        }

    </>
  )
}

export default Comments
