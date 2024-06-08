
'use client'

import React from "react";
import DotedTitle from "@/components/DotedTitle";
import { FaHeart } from "react-icons/fa6";
import { GoArrowUpLeft } from "react-icons/go";
import Image from "next/image";
import { ShowSwal } from "@/utils/ShowSwal";
function MiniBar(data) {
  const AddToFavorites = async () => {
      // geting course id 
    const courseId = data.id
    // add to favorites 
    const GetData = await fetch("/api/Favorites",{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({
        courseID:courseId
      })
      
    })
    const response =await GetData.json()
    // show swal for every statuse
    if(GetData.status == 200){
      ShowSwal({title:"added to favorites",icon:"success",text:"successfully added to favorites!!! 😀😁"})
    }
    if(GetData.status == 500){
      ShowSwal({title:"not added to favorites",icon:"error",text:"amfride you already added this course to favorites"})
    }
    if(GetData.status == 400){
      ShowSwal({title:"loggin please",icon:"error",text:"please loggin first"})
     
    }
    
  }
  return (
    <div className="flex w-4/12 max-md:w-full sticky top-24 rounded-3xl flex-col">
      <div className="bg-gradient-to-b from-primary-BG-gr to-secondary-BG-gr w-full sticky px-5 justify-center flex-col rounded-3xl">
        <div className="titleBar bg-black py-3 px-3 rounded-b-3xl w-full">
          <DotedTitle title={"نام نویسی در دوره"} />
        </div>

        <div className="price flex justify-between items-center w-full h-[100px] ">
          <span className="price-title text-gray-500 font-bold">
            هزینه ثبت نام:
          </span>

          <div className="price">
            <div className="offer flex justify-end">
              <span className={`${ !data.priceWhithDiscount? "hidden" : "" } text-sm text-gray-500 line-through `}>
                {data.priceWhithDiscount ? (100).toLocaleString() : ""}
              </span>
            </div>

            <span className="text-lg font-bold">
              {data.price > 100 ? (data.price).toLocaleString() :(<span className="text-2xl text-yellow-600">رایگان</span>)}
            </span>
            <span className={` ${data.price < 100 ? 'hidden' : ""} text-sm text-gray-600 px-1`}>تومان</span>
          </div>
        </div>
        <div className="flex w-full">
          <button className="w-full flex bg-primary-color items-center justify-center rounded-3xl text-white px-4 py-2">
            اضافه به سبد
            <GoArrowUpLeft />
          </button>
          <button className="p-4 rounded-full bg-primary-BG-gr flex items-center justify-center text-primary-color mr-2" onClick={ () => AddToFavorites()} >
            <FaHeart />
          </button>
        </div>
      </div>

      {/* teacher */}

      <div className="teacher-sections mt-5">
        <DotedTitle title={"مدرس دوره"} />
        <div className="teacher-profile flex mt-2">
          <div className="teacher-profile-img relative w-10 h-10 rounded-full overflow-auto">
            <Image fill alt="profile" src={"/assets/01.jpeg"} />
          </div>
          <div className="teacher-profile-info flex flex-col justify-center text-sm mx-2">
              <span className="font-bold ">{data.teacher.name}</span>
              <span  className="text-primary-color">دیدن رزومه</span>
          </div>
        </div>
        <div className="teacher-resome w-full bg-primary-BG-gr p-5 rounded-b-2xl rounded-l-2xl mt-3 text-sm  text-gray-500 ">
        اول داستان، طراح گرافیک بودم و ۲ سالی به عنوان طراح مشغول بودم، بعد به برنامه‌نویسی علاقمند شدم و الان بیشتر از ۱۰ ساله که عاشق کدزنی و چالش‌های پروژه‌های مختلفم. به تدریس علاقه خاصی دارم و دوست دارم دانشی که در این راه بدست آوردم را در اختیار دیگران قرار بدم :)
        </div>
      </div>
    </div>
  );
}

export default MiniBar;
