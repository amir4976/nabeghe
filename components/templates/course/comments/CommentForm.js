"use client";
import { ShowSwal } from "@/utils/ShowSwal";
import React from "react";
import { useState } from "react";
function CommentForm({ courseID }) {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const addComment = async () => {
    const newComment = {
      comment:body,
      courseId:courseID,
      email,
      author:Name,
    };
    const res = await fetch("/api/Comments",{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newComment)
    })
    if(res.status === 201){
        ShowSwal({
            title:'کامنت با موفقیت ساخته شد!'
            ,text:"کامنت شما با موفقیت ساخته و منتظر تایید از طرف مدیریت است"
            ,icon:"success"
        })
    }else{
        ShowSwal({
            title:'کامنت شما ساخته نشد !'
            ,text:"اروری از سمت سرور "
            ,icon:"error"
        })
    }

  };
  return (
    <div className="w-full h-fit bg-primary-BG-gr rounded-lg  p-5 ">
      <div className="w-full bg-secondary-BG-gr rounded-lg p-2 grid">
        <span>لطفا دیدگاه خود را وارد کنید!</span>
        <textarea
          name=""
          id=""
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="دیدگاه شما"
          rows={6}
          className="w-full  rounded-lg p-2 outline-none"
        ></textarea>
        <div className="w-full grid grid-cols-2 gap-10  mt-5">
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="نام شما"
            className="col-span-1 rounded-lg h-10 border-1 border-gray-600 outline-none  p-2"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ایمیل شما"
            className=" col-span-1 rounded-lg h-10 border-1 border-gray-600 outline-none  p-2"
          />
        </div>
        <div className="flex justify-start">
          <button
            className="w-full my-4 p-3 rounded-full bg-green-700"
            onClick={addComment}
          >
            ثبت نظر
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
