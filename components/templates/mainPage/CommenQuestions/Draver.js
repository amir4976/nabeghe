'use client'
import React from 'react'
import  { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

function Draver() {
     const[isShowDraver , setIsShowDraver] = useState(false)
     const showBody = () =>{
        setIsShowDraver(prev => !prev)
     }
     return (

    <div className="Draver-container max-w-4xl mx-auto my-5 ">
    <div className="draver rounded-xl flex items-center justify-between p-3 w-full h-[50px] bg-primary-BG-gr border border-gray-800 " onClick={showBody}>
      <p>خدمات گارانتی ما چجوری کار میکنه؟</p>
      <p>
        <FaAngleDown />
      </p>

    </div>
    <div className={`draver-body mt-2 Draver-tranisation w-full h-fit ${!isShowDraver ? 'hidden' :""} p-3 bg-primary-BG-gr border border-gray-800 rounded-xl text-gray-300`}>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    </div>
  </div>
  )
}

export default Draver
