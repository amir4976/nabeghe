import InfoBlock from "@/components/coursePage/InfoBlock";
import Image from "next/image";
import React from "react";
import { IoTime } from "react-icons/io5";
import { RiApps2Fill } from "react-icons/ri";
import { FaCircleInfo } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import Link from "next/link";
function page() {
  return (
    <div className="w-full flex  justify-center items-center max-w-7xl mx-auto p-4 font-mainFont gap-5 ">
      
      
      {/* course cover  */}
      <div className="flex w-8/12  flex-col">
        <div className="course-image relative w-full rounded-3xl overflow-hidden">
          <Image
            alt="course-cover"
            width={900}
            height={400}
            src={"/assets/02.jpg"}
          />
        </div>
        {/* course cover end */}


        {/* course info */}
        <div className=" bg-gradient-to-t from-primary-BG-gr to-secondary-BG-gr w-[98%] h-fit rounded-b-3xl p-5 flex-col flex ">
          <span className="text-yellow-400/35 text-xs ">0% تکمیل شده</span>
          <span className="  font-bold text-2xl py-2">
            دوره پروژه محوره react{" "}
          </span>
          <p className="text-sm text-gray-500">
            ساخت وبسایت فروشگاهی با React عنوان دوره پروژه محور react در نابغه
            است که قصد داریم در قالب این دوره react را در قالب پروژه به شما
            آموزش دهیم.
          </p>
        </div>
        {/* course info */}
        <div className="grid grid-cols-8 gap-5 mt-5">
          <InfoBlock title={"مدت دوره"} value={"99"} icon={<IoTime />} />
          <InfoBlock title={"مدت دوره"} value={"99"} icon={<RiApps2Fill />} />
          <InfoBlock title={"مدت دوره"} value={"99"} icon={<FaCircleInfo />} />
          <InfoBlock title={"مدت دوره"} value={"99"} icon={<HiUserGroup />} />
        </div>
        {/* end course info */}


        {/* coures Nav scroll bar */}
        <div className="flex justify-start sticky top-[80px] z-40 w-full  " >
        <div className="flex sticky  p-1 rounded-full bg-primary-BG-gr mt-5">
            <Link href={'#interduce-course'}   className="p-2 px-10  rounded-full ml-2 scrolls">معرقی</Link>
            <Link href={'#CoureseChapters'}   className="p-2 px-10  rounded-full ml-2">سرفصل ها</Link>
            <Link href={''}   className="p-2 px-10  activeLinkCourePage rounded-full ml-2">کامنت ها</Link>
        </div>
        </div>
        {/* end coures Nav scroll bar */}

        {/* interduce course */}
        <div className="interduce-course scroll-smooth" id="interduce-course">

        </div>



        {/* course chapters */}

        <div className="" id="CoureseChapters">
        </div>
        {/* end course chapters */}




        {/* commetns */}
        
        
        
        {/* end commetns */}



      </div>
      <div className="flex w-4/12 h-10  bg-red-500"></div>
    </div>
  );
}

export default page;
