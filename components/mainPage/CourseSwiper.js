
"use client"; // <===== REQUIRED

import React,{useState,useEffect} from "react";

// Swiper components, modules and styles

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import FancyCard from '@/components/FancyCard'
import "swiper/css"; 
import "swiper/css/pagination";
import 'swiper/css/free-mode';
// Our custom button component



const CourseSwiper= ({data}) => {
  console.log(data)
  const LastCourses = data.slice(0,5);
  const [SlidePRE,setSlidePRE] = useState(3)  
  useEffect(()=>{
      window.addEventListener('resize',(e)=>{
        if(e.target.innerWidth < 1100){
          setSlidePRE(2)
        }
        if(e.target.innerWidth < 660){
          setSlidePRE(1)
        }
        if(e.target.innerWidth > 1100){
          setSlidePRE(3)
        }
      })
  },[])

  return (
<div className="w-full h-[500px] mt-10">
      <Swiper
        slidesPerView={SlidePRE}
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
        {LastCourses.map((course,index)=>(
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
