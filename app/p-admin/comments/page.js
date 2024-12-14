import ConnectToDB from "@/utils/ConnectToDB";
import React from "react";
import CommentModel from "@/models/Comments";
import Table from "@/components/templates/p-admin/Comments/Table";
async function page() {
    ConnectToDB()
    const comments = await CommentModel.find({}).populate('courseId').lean().sort({createdAt:-1});
  return (
    <div className="w-full h-fit bg-gradient-to-t from-primary-BG-gr to-secondary-BG-gr my-5 rounded-lg ">
      <Table comments={JSON.parse(JSON.stringify(comments))} />
      {
        comments.length === 0 && (
          <div className="w-full h-[100px] flex justify-center items-center">
            <h1 className="text-2xl text-white">هیچ کامنتی یافت نشد</h1>
          </div>
        )
      }
    </div>
  );
}

export default page;
