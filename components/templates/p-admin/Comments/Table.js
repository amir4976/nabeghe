"use client";
import React from "react";
import Swal from "sweetalert2";

function Table({ comments }) {

  const [AllComments, setAllComments] = React.useState(comments);
  const getComments = async () => {
    const res = await fetch("/api/Comments");
    const data = await res.json();
    setAllComments(data.comments);
  };

  const ShowComment = (comment) => {
    Swal.fire({
      title: "متن کامنت",
      text: comment,
      icon: "info",
      confirmButtonText: "باشه",
    });
  };

  const DeleteComment = (comment) => {
    Swal.fire({
      title: "آیا میخواهید کامنت حذف شود؟",
      text: "این کامنت حذف خواهد شد",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
    }).then(async (e) => {
      if (e.isConfirmed) {
        const res = await fetch(`/api/Comments/${comment._id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          getComments();
          Swal.fire({
            title: "کامنت حذف شد",
            icon: "success",
            confirmButtonText: "باشه",
          });
        }
      }
    });
  };

  const EditComment = async (comment) => {
    const { value: Comment } = await Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
      inputValue:comment.comment
    });
    if (Comment) {
      const req = await fetch(`/api/Comments/${comment._id}`, {
        method: "PUT",
        body: JSON.stringify({
          comment: Comment,
        }),
      });

      if(req.status === 201 ) {
        getComments()
        Swal.fire({
          title: "کامنت ویرایش شد",
          icon: "success",
          confirmButtonText: "باشه",
        });
      }
    }
  };

  const AcceptComment = async (comment) => {

    const res = await fetch(`/api/Comments/Accsept`, {
      method: "POST",
      body: JSON.stringify({
        id: comment._id,
      })
    });
    if (res.ok) {
      Swal.fire({
        title: "کامنت تایید شد",
        icon: "success",
        confirmButtonText: "باشه",
      });
      getComments()
    }
  };


  return (
    <table className="table">
      <thead className="text-center">
        <tr>
          <th>سازنده</th>
          <th>ایمیل</th>
          <th>متن کامنت </th>
          <th>نام دوره</th>
          <th>تاریخ ساخت</th>
          <th>حذف</th>
          <th>ادیت</th>
          <th>تایید </th>
        </tr>
      </thead>
      <tbody className="text-center text-white">
        {AllComments.map((comment, index) => {
          return (
            <tr key={index}>
              <td>{comment.author}</td>
              <td>{comment.email}</td>
              <td>
                <button
                  onClick={() => ShowComment(comment.comment)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  نمایش
                </button>
              </td>
              <td>{comment.courseId.title}</td>
              <td>{new Date(comment.createdAt).toLocaleString("fa-IR")}</td>
              <td>
                <button onClick={()=>DeleteComment(comment)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  حذف
                </button>
              </td>
              <td>
                <button onClick={()=>EditComment(comment)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  ادیت
                </button>
              </td>
              <td>
                {!comment.isAccepted ? (
                  <button onClick={()=>AcceptComment(comment)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    تایید
                  </button>
                ) : (
                  <button onClick={()=>AcceptComment(comment)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    رد
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
