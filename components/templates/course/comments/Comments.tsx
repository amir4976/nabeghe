import React from 'react'
import CommentForm from './CommentForm'
import CommentCard from './CommentCard'
interface IComment {
    _id:string,
    user:string,
    courseId:string,
    comment:string,
    isAccepted:boolean,
    createdAt:string
}
function Comments({comments,user,courseID}:{comments:IComment[],courseID:string,user:any}) {

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
