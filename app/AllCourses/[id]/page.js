import InfoBlock from "@/components/templates/course/coursePage/InfoBlock";
import Image from "next/image";
import React from "react";
import { IoTime } from "react-icons/io5";
import { RiApps2Fill } from "react-icons/ri";
import { FaCircleInfo } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import Link from "next/link";
import DotedTitle from "@/components/templates/mainPage/DotedTitle";
import Footer from "@/components/templates/mainPage/Footer";
import MiniBarLeftSide from "@/components/templates/course/coursePage/MiniBar";
import { redirect } from "next/navigation";
import HtmlToJSX from "@/components/module/HtmlToJSX/HtmlToJSX";
import CourseCard from "@/components/module/courses/CourseCard";
import { authUser } from "@/utils/authUser";
import Navbar from "@/components/templates/mainPage/Navbar";
import courseModel from "@/models/Courses";
import CommnetsModels from "@/models/Comments";
import ConnectToDB from "@/utils/ConnectToDB";
import Comments from "@/components/templates/course/comments/Comments";

async function page({ params }) {

    ConnectToDB();
    const course = await courseModel.find({ courseName: params.id }).populate("teacher");
    const courseInfo = JSON.parse(JSON.stringify(course[0]));
    const userAuth = await authUser();
    const comments = await CommnetsModels.find({ courseId: courseInfo._id });

    if (!courseInfo) {
      return redirect("/404");
    }
  

  return (
    <>
      <Navbar isLogin={true} />
      <div className=" max-w-7xl m-auto ">
        <div className="w-full flex  justify-center items-start mx-auto p-4 font-mainFont gap-5 max-md:flex-col">
          {/* ---------------------------------------------------------------------------------------------------- */}

          {/* course cover  */}
          <div className="flex w-8/12 max-md:w-full flex-col">
            <div className="course-image relative w-full rounded-3xl overflow-hidden">
              <Image
                alt="course-cover"
                width={900}
                height={400}
                src={courseInfo.image}
              />
            </div>
            {/* course cover end */}

            {/* ---------------------------------------------------------------------------------------------------- */}

            {/* course info */}
            <div className=" bg-gradient-to-t from-primary-BG-gr to-secondary-BG-gr w-[98%] h-fit rounded-b-3xl p-5 flex-col flex ">
              <span className="text-yellow-400/35 text-xs ">0% تکمیل شده</span>
              <span className="  font-bold text-2xl py-2">
                {courseInfo.title}
              </span>
              <p className="text-sm text-gray-500">{courseInfo.ShortDec}</p>
            </div>

            {/* ---------------------------------------------------------------------------------------------------- */}
           
            {/* course info */}
            <div className="grid grid-cols-8 gap-5 mt-5">
              <InfoBlock title={"مدت دوره"} value={"14:54"} icon={<IoTime />} />
              <InfoBlock
                title={"تعداد جلسات"}
                value={"99"}
                icon={<RiApps2Fill />}
              />
              <InfoBlock
                title={"نوع دوره"}
                value={"ویژه"}
                icon={<FaCircleInfo />}
              />
              <InfoBlock
                title={"شرکت کنندگان"}
                value={`${
                  courseInfo.enrolls ? courseInfo.enrolls.length : "0"
                } دانشجو`}
                icon={<HiUserGroup />}
              />
            </div>

            {/* end course info */}

            {/* ---------------------------------------------------------------------------------------------------- */}

            {/* coures Nav scroll bar */}
            <div className="flex justify-start sticky top-[80px] z-40 w-full max-md:w-full max-sm:text-sm">
              <div className="flex p-1 sticky rounded-full bg-[#161616] mt-5">
                <Link
                  href={"#interduce-course"}
                  className="p-2 px-6  rounded-full ml-1 scrolls"
                >
                  معرقی
                </Link>
                <Link
                  href={"#CoureseChapters"}
                  className="p-2 px-6  rounded-full ml-1"
                >
                  سرفصل ها
                </Link>
                <Link
                  href={"#comments"}
                  className="p-2 px-6  activeLinkCourePage rounded-full ml-1"
                >
                  کامنت ها
                </Link>
              </div>
            </div>
            {/* end coures Nav scroll bar */}

            {/* ---------------------------------------------------------------------------------------------------- */}

            {/* interduce course */}
            <div
              className="interduce-course scroll-smooth mt-5"
              id="interduce-course"
            >
              <DotedTitle title={"معرقی دوره"} />
              {/* {
              courseInfo.LongDec
            } */}
              <HtmlToJSX htmlContent={courseInfo.LongDec} />
            </div>

            {/* ---------------------------------------------------------------------------------------------------- */}

            {/* course chapters */}
            <DotedTitle title={"سر فصل ها"} />
            <div className="" id="CoureseChapters">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
            {/* end course chapters */}

            {/* ---------------------------------------------------------------------------------------------------- */}

            {/* commetns */}
            <DotedTitle title={"دیدگاه ها و پرسش ها"} />
            <Comments
              comments={comments}
              user={userAuth}
              courseID={courseInfo._id}
            />
            {/* end commetns */}
          </div>

          {/* ---------------------------------------------------------------------------------------------------- */}
          {/* mini bar left side */}
          <MiniBarLeftSide data={courseInfo} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default page;
