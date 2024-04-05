"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FilterSide() {
  const [isShowCourseTypeMenu, setIsShowCourseTypeMenu] = useState(true);
  const [isShowCourseCategory, setIsShowCourseCategory] = useState(true);
  return (
    <div className="md:col-span-3 col-span-2 hidden md:block md:sticky md:top-24 h-fit mt-5 p-1">
      {/* search bar section */}
      <div className="SideBarSearchBar w-full">
        <span>جستجو دوره</span>
        <div className="flex w-full mt-5">
          <input
            type="text"
            placeholder="عنوان دوره"
            className="w-full h-10 rounded-full  focus:outline-none  px-3 bg-[#3e3e3e45] placeholder-gray-500 bg-none"
          />
        </div>
      </div>
      {/* filter pending courses */}
      <div className="filterBar-isPending w-full mt-2">
        <label className="inline-flex items-center justify-between cursor-pointer w-full ltr-com  bg-[#3e3e3e45] px-2 py-3 rounded-2xl text-sm font-medium text-gray-500">
          <div className="">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </div>
          <span className="ms-3 text-sm font-medium text-gray-900  dark:text-gray-300">
            درحال برگذاری
          </span>
        </label>
      </div>

      {/* course type toggler */}
      <div
        className={` w-full mt-2 flex justify-between items-center px-2 py-3  bg-[#3e3e3e45] rounded-2xl cursor-pointer select-none ${isShowCourseTypeMenu ? 'text-primary-color' : ''}`}
        onClick={() => setIsShowCourseTypeMenu((prev) => !prev)}
      >
        {" "}
        {/* hidden */}
        <span>نوع دوره</span>
        <span className={` transition-all duration-75 ${isShowCourseTypeMenu ? ' rotate-180' : ''} `}>
          <FaChevronDown />
        </span>
      </div>
      {/* course type toggler end */}

      {/* course type hidden */}
      <div
        className={` w-full mt-2  bg-[#3e3e3e45] p-3 rounded-2xl ${
          !isShowCourseTypeMenu ? "hidden" : ""
        } `}
      >
        {/* hidden */}

        <form action="#">
          <div className="flex justify-between items-center py-1 text-gray-600">
            <div className="">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 focus:outline-none bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                رایگان
              </label>
            </div>
            <span>18</span>
          </div>

          <div className="flex justify-between items-center py-1 text-gray-600">
            <div className="">
              <input
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 focus:outline-none bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                نفدی
              </label>
            </div>
            <span>18</span>
          </div>

          <div className="flex justify-between items-center py-1 text-gray-600">
            <div className="">
              <input
                id="default-radio-3"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 focus:outline-none bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-3"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                نفدی و اعضای ویژه
              </label>
            </div>
            <span>18</span>
          </div>
        </form>
      </div>
       {/* course type end */}

       {/* line between */}
      <hr className="w-full my-3 border-[#3e3e3e45]" />


       {/* course category end */}











         {/* course category toggler */}
       <div className={` w-full mt-2 flex justify-between items-center px-2 py-3  bg-[#3e3e3e45] rounded-2xl cursor-pointer select-none ${isShowCourseCategory ? 'text-primary-color' : ''}    `} onClick={() => setIsShowCourseCategory((prev) => !prev)}>
        {/* hidden */}
        <span>دسته بندی دوره</span>
        <span className={`transition-all duration-75 ${isShowCourseCategory ? ' rotate-180' : ''}`}>
          <FaChevronDown />
        </span>
      </div>
         {/* course category toggler end */}








      {/* course category end menu */}
      <div className={` w-full mt-2  bg-[#3e3e3e45] p-3 rounded-2xl ${!isShowCourseCategory ? "hidden" : ""} `}>
        <form action="#">

          <div className="flex justify-between items-center py-1 text-gray-600">
            <div className="">
              <input
                id="category-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 focus:outline-none bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="category-radio-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                پایتون 
              </label>
            </div>
            
          </div>

        </form>
      </div>
       {/* course category end */}















    </div>
  );
}

export default FilterSide;
 

