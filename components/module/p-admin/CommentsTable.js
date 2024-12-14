'use client'
import React from 'react'
import Swal from 'sweetalert2'
function CommentsTable({comments}) {
    
  const showComments =(comment)=>{
    console.log(comment)
    Swal.fire({
      title: "کامنت",
      text: comment.comment,
      icon: "info",
      confirmButtonText: "باشه",
    })
  }

  return (
    <div>
       {
            comments.length > 0 ? (

                <table className="w-full table text-center">
                <thead className="text-white">
                  <tr>
                    <th>نام</th>
                    <th>ایمیل</th>
                    <th>کامنت</th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map((comment) => (
                    <tr key={comment._id}>
                      <td>{comment.author}</td>
                      <td>{comment.email}</td>
                      <td><button className="p-1 bg-blue-400 rounded-xl text-white" onClick={()=>showComments(comment)}>نمایش </button></td>
                    </tr>
                  ))}
    
                </tbody>
              </table>
            ) : (
              <p className="text-center">کامنتی یافت نشد</p>
            )
          }
    </div>
  )
}

export default CommentsTable
