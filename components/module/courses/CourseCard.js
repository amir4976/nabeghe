"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { MdAvTimer } from "react-icons/md";
function CourseCard() {
  const [courseShow, setCourseShow] = useState(false);
  return (
    <div className="w-full h-fit mb-5 flex items-center flex-col">
      <div className="w-full h-14 bg-gray-700/20 rounded-xl flex justify-between px-5 items-center" onClick={() => setCourseShow(prev=>!prev)}>
        <p>معرفی دوره</p>
        <div className="flex  items-center">
          <p>20 جلسه</p>
          <span className={`mx-1 transition-all ${courseShow?"rotate-180":""}`}><FaAngleDown /></span>
        </div>
      </div> 
    <div className={`rounded-xl h-14 w-11/12 border border-gray-800/20 mt-2 flex justify-between px-5 items-center  ${courseShow? "block" : "hidden"}`}>
        <div className="flex">
            <span className="pl-3 text-gray-500">1</span>
            <span>معرفی دوره</span>
        </div>
        <div className=" flex text-gray-500 items-center">
        <span>15:20</span>
        <span className="mr-2">
            <MdAvTimer />
        </span>
        <button className="mr-2 rounded-full p-2 px-4 bg-gray-700/20">مشاهده دوره</button>
        </div>
    </div>
    </div>
  );
}

export default CourseCard;
