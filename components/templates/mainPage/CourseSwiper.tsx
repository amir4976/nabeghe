
"use client"; 

import React,{useState,useEffect} from "react";

// Swiper components, modules and styles

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import FancyCard from '@/components/module/courses/FancyCard';
import "swiper/css"; 
import "swiper/css/pagination";
import 'swiper/css/free-mode';
// Our custom button component



const CourseSwiper= ({data}) => {
  const LastCourses = data.slice(data.length-5,data.lenght);

  return (
<div className="w-full h-[500px] mt-10">
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          660: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          }
        }}
        // freeMode={true}
        autoplay={{
          delay: 2500,
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[ Pagination,Autoplay]}
        className="mySwiper  h-full w-full "
      >
        {/* for each make one of this later */}
        {LastCourses.reverse().map((course,index)=>(
                 <SwiperSlide key={index}>
                   <div className="w-[350px] max-sm:w-[400px]">
                       <FancyCard data={course} />
                   </div>
                </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseSwiper;
