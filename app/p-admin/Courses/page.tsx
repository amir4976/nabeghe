import React from "react";
import Style from "./Course.module.css";
import Course from "@/models/Courses";
import Swal from "sweetalert2";
import Table from "@/components/templates/p-admin/Course/Table";
import AddCourseForm from "@/components/templates/p-admin/Course/AddCourseForm";
import DotedTitle from "@/components/templates/mainPage/DotedTitle";
import ConnectToDB from "@/utils/ConnectToDB";
async function Page() {
  ConnectToDB();
  const req = await Course.find({});
  return (
    <div className="mt-5">
      <DotedTitle title={"افزودن دوره"}/>
      <AddCourseForm/>
      <DotedTitle title={"لیست دوره ها"}/>
     <Table data={req}/>
    </div>
  );
}

export default Page;
