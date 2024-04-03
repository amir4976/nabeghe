"use client";
import React from "react";
import Image from "next/image";
import { MdFileCopy } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { GoArrowUpLeft } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { RiAppsFill } from "react-icons/ri";
function FancyCard() {
  return (
    <div className="w-full h-full flex justify-center items-center font-mainFont  ">
      <div className="w-[400px] h-[480px]   ">
        <div className="image relative w-full h-[220px] rounded-3xl overflow-auto">
          <Image
            src={"/assets/9jT3AwCakZ8S12y7tMgKjSMVMCYiRELcUVkJWrIV.jpg"}
            alt="l"
            fill
          />
          <div className="courseType absolute z-10 left-4 top-4 flex bg-black/20 px-2 py-1 rounded-lg text-white items-center  ">
          <RiAppsFill />
            <span className="mr-2">فرانت اند</span>
            
          </div>
        </div>
        <div className="fancy-infoSide px-5">
          <div className="titleBar w-[350px] m-auto h-20 px-5  flex flex-col justify-center rounded-b-3xl  bg-gradient-to-t from-primary-BG-gr to-secondary-BG-gr">
            <span className="completed-persent font-extralight text-sm text-gray-600">
              0% تکمیل شده
            </span>
            <span className="titleBar-text font-bold">دوره کامل vue js 3</span>
          </div>
          <div className="chapters-info text-sm px-5 text-gray-500 flex text-center">
            <span className="mr-3 flex items-center ">
              <MdFileCopy />: 5 فصل
            </span>
            <span className="mr-3 flex items-center ">
              <MdOutlineAccessTimeFilled />: 25 ساعت
            </span>
          </div>
          <div className="profile-Price mt-4 flex items-center justify-between" >
            <div className="profile flex">
              <div className="profile-img relative w-10 h-10 rounded-full overflow-auto ">
                <Image fill alt="profile" src={"/assets/01.jpeg"} />
              </div>
              <div className="profile-info flex flex-col">
                <span className="text-gray-500 text-sm">مدرس دوره</span>
                <span className="font-bold text-sm">محمد سعیدی راد</span>
              </div>
            </div>
            <div className="price">
                <span className="font-bold text-xl">{(699000).toLocaleString()}</span>
                <span className="text-sm mr-1 text-gray-500">تومان</span>
            </div>
          </div>
          <div className="btn-buy flex justify-center items-center mt-3">
            <button className="btn-buy-btn w-full h-12 text-sm  flex justify-center items-center text-white bg-primary-color rounded-3xl hover:bg-blue-800 transition-all">
                <span>مشاهده دوره </span>
                <span className="text-xl">
                  <GoArrowUpLeft />
                </span>
            </button>
            <button className="w-[58px] h-[48px] mr-2 rounded-full flex justify-center items-center transition-all hover:text-red-600  bg-[rgba(120,120,120,0.33)] "><FaHeart /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FancyCard;
