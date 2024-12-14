import PanelLayout from "@/components/layout/PanelLayout";
import Chart from "@/components/module/p-admin/Chart";
import DashbouardCard from "@/components/module/p-user/DashbouardCard";
import DotedTitle from "@/components/templates/mainPage/DotedTitle";
import ConnectToDB from "@/utils/ConnectToDB";
import React from "react";
import { MdSchool } from "react-icons/md";
import courseModel from "@/models/Courses";
import usersModel from "@/models/Users";
import commentModel from "@/models/Comments";
import Swal from "sweetalert2";
import FancyCard from "@/components/module/courses/FancyCard";
import { CiAlignRight } from "react-icons/ci";
import UserTable from "@/components/module/p-admin/userTable";
import CommentsTable from "@/components/module/p-admin/CommentsTable";
// import TicketModel from "@/models/";

export default async function page() {
  ConnectToDB();
  const courses = await courseModel.find({});
  const users = await usersModel.find({}).limit(5);
  // const tickets = await TicketModel.find({})
  const comments = await commentModel.find({}).lean().limit(3);


  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        <DashbouardCard
          title={"تعداد دوره"}
          value={courses.length}
          icon={<MdSchool />}
        />
        <DashbouardCard
          title={"تعداد یوزر"}
          value={users.length}
          icon={<MdSchool />}
        />
        <DashbouardCard title={"تعداد تیکت"} value={21} icon={<MdSchool />} />
        <DashbouardCard
          title={"تعداد کامنت ها بی جواب"}
          value={comments.length}
          icon={<MdSchool />}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 my-5  md:grid-cols-4 ">
        <div className="lastTikets col-span-2 bg-primary-BG-gr rounded-lg h-[250px] flex justify-center items-center flex-col p-2">
          <DotedTitle title={"آمار فروش"} />
          <Chart />
        </div>
        <div className="chart col-span-2 bg-gray-400 rounded-lg bg-gradient-to-r bg-primary-BG-gr p-2">
          <DotedTitle title={"کامنت ها"} />
         <CommentsTable comments={comments} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 my-5  md:grid-cols-3 h-fit">
            <div className=" bg-primary-BG-gr col-span-2 p-5">
              <DotedTitle title={"اخرین یوزر ها"} />
              <UserTable users={JSON.parse(JSON.stringify(users))}/>
            </div>
            <div className=" bg-primary-BG-gr col-span-1 p-5">
              <DotedTitle title={"دوره پرفروش"} />
              <FancyCard data={JSON.parse(JSON.stringify(courses[0]))}/>
            </div>
      </div>
    </div>
  );
}
