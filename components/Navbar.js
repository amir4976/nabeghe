import React from 'react'
import { HiLightBulb } from "react-icons/hi2";
function Navbar() {
    return (
        <>
            <div className=" w-full h-20 flex justify-center items-center border-b border-[rgb(120,120,120,0.4)] ">
                <div className="w-full max-w-7xl px-11 relative  h-full mx-auto ">
                    <div className=" flex  items-center h-full gap-8 ">

                        <div className="logo text-primary-color  flex justify-center items-center  gap-3">
                            <div className="bull text-3xl mx-2"><HiLightBulb /></div>
                            <div className="logoType flex flex-col ">
                                <span className='font-mainFont'>اکادمی</span>
                                <span className='font-mainFont font-bold'>نــابـــغـه</span>
                            </div>
                        </div>

                        <div class="flex gap-5">
                            <div class="dropdown inline-block relative">
                                <button class="font-semibold py-2 px-4 rounded inline-flex items-center">
                                    <span class="mr-1 font-mainFont font-normal">دسته بندی اموزشها</span>
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </button>
                                <ul class="dropdown-menu w-[300px] absolute border border-gray-300 bg-white text-gray-700 pt-0 z-10 font-mainFont">
                                <li>
                                        <a class=" dropSub rounded-t hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">برنامه نویسی وب</a>
                                        <ul class="dropdown-submenu w-96 absolute text-gray-700 pt-0 bg-white border border-gray-300 flex-wrap " >
                                            <li><a class=" hover:text-blue-600 py-2 px-4 block" href="#">Two</a></li>

                                        </ul>
                                    </li>
                                    <li><a class=" hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">دیتا ساینس</a></li>
                                    <li><a class="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">زبانهای برنامه نویسی</a></li>
                                    <li><a class="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">توسعه بازی</a></li>
                                    <li><a class="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">برنامه نویسی موبایل</a></li>
                                    <li><a class="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">طراحی دیتابیس</a></li>
                                    <li><a class="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">تست نویسی</a></li>
                                </ul>
                            </div>
                            <ul className='flex items-center justify-between gap-10 font-mainFont'>
                                <li>پرسش و پاسخ</li>
                                <li>مقالات</li>
                            </ul>
                        </div> 

                        <div className="flex gap-3 mr-auto bg-red-500">s</div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
