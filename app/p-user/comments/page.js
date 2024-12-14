import React from "react";
import CommentModel from "@/models/Comments";
import ConnectToDB from "@/utils/ConnectToDB";
import { authUser } from "@/utils/authUser";

async function Page() {
  ConnectToDB()
  const getUser = await authUser()
  const comments = await CommentModel.find({user:getUser._id}).populate('courseId').lean().sort({createdAt:-1});
  console.log(comments)
  return (
    <div>
      <table className="table">
        <thead className="text-center">
          <tr>

            <th>متن کامنت </th>
            <th>نام دوره</th>
            <th>تاریخ ساخت</th>
            <th> وضعیت کامنت </th>

          </tr>
        </thead>
        <tbody className="text-center text-white">
          <tr>
            <td><button className="p-3 bg-blue-500  rounded-lg">نمایش کامنت</button></td>
            <td>react</td>
            <td>12</td>
            <td><span className="p-3 bg-red-500 rounded-lg">رد شده</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Page;
