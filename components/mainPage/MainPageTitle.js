import React from "react";
import { GoArrowUpLeft } from "react-icons/go";
function MainPageTitle({ title, desc, icon }) {
  return (
    <div className="w-full flex h-[110px] bg-gradient-to-l from-primary-BG-gr to-secondary-BG-gr  mt-10 rounded-2xl  text-xl  font-bold justify-between items-center px-5 font-mainFont  ">
      <div className=" flex ">
        <div className="flex w-14 h-14 items-center justify-center bg-primary-color rounded-full">
          {icon}
        </div>
        <div className="flex flex-col mr-4 ">
            <span className="text-primary-color text-3xl">{title}</span>
            <span className="text-light-color text-sm">{desc}</span>
        </div>
      </div>
      <a href="#" className="hover:text-primary-color text-sm p-3 px-5 bg-primary-BG-gr rounded-full flex items-center justify-center">
            <span className="pl-1"> مشاهده همه</span>
            <span className="text-xl">
            <GoArrowUpLeft />
            </span>
      </a>
    </div>
  );
}

export default MainPageTitle;
