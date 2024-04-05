"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards ,Autoplay} from "swiper/modules";
import { MdSchool } from "react-icons/md";
import TestimonialCard from "../TestimonialCard";
import HatLogo from "@/components/HatLogo";

export default function Testimonial() {
  return (
    <div className="w-full h-[350px] md:grid md:grid-cols-12   mt-10 font-mainFont">
      <div className="xl:col-span-4 col-span-12 flex items-center gap-5">
            <HatLogo/>
        <div className="flex flex-col ">
          <span className="font-bold text-2xl text-primary-color">
            در مورد نابغه جی میشنویم؟
          </span>
          <span className="text-gray-500">
            این‌ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد نابغه
            دارند.
          </span>
        </div>
      </div>
      <div className="xl:col-span-8  col-span-12 w-full max-w-xl mx-auto flex items-center max-sm:overflow-hidden ">
        <div className="w-full">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            loop={true}
            className="mySwiper"
            autoplay={{
              delay: 2500,
            }}
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
