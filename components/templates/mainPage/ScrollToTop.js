'use client'
import React ,{useEffect}from 'react'
import { FaAngleUp } from "react-icons/fa6";
function ScrollToTop() {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
       return null;
     }
  return (
    <div>
      <div className="scrollToTopBtn gap-2 flex justify-evenly items-center" onClick={scrollToTop}>
        <div className="border border-gray-800 border-b border-dashed  w-full h-0"></div>
        <button className='w-[180px] h-[50px] bg-primary-transparent rounded-full flex justify-evenly items-center font-mainFont'> برگشت به بالا<FaAngleUp /></button>
      </div>
    </div>
  )
}

export default ScrollToTop
