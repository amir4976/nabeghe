
'use client'
import React, { useContext, useState } from 'react'
import { HiLightBulb } from "react-icons/hi2";
import ChangeThemeBtn from './NavBtns/ChangeThemeBtn';
import Search from './NavBtns/Search';
import { SlBasket } from "react-icons/sl";
import { Theme } from '@/app/context/Theme';
import { FaRegUser } from "react-icons/fa6";
import NavProfileInfo from './NavProfileInfo'; 

function Navbar() {
    const { theme } = useContext(Theme)
    const [ShowProfileMenu,setShowProfileMenu]=useState(false)
    return ( 
        <>
            <div className=" w-full h-20 flex justify-center items-center border-b border-[rgb(120,120,120,0.4)] font-mainFont  sticky top-0 backdrop-blur-lg  z-40 ">
                <div className="w-full max-w-7xl px-11 relative  h-full mx-auto ">
                    <div className=" flex  items-center h-full gap-8 ">

                        <div className="logo text-primary-color  flex justify-center items-center  gap-3">
                            <div className="bull text-3xl mx-2"><HiLightBulb /></div>
                            <div className="logoType flex flex-col ">
                                <span className='font-mainFont'>اکادمی</span>
                                <span className='font-mainFont font-bold'>نــابـــغـه</span>
                            </div>
                        </div>

                        <div className="flex gap-5 max-xl:hidden">
                            <div className="dropdown inline-block relative">
                                <button className="font-semibold py-2 px-4 rounded inline-flex items-center">
                                    <span className="mr-1 font-mainFont font-normal">دسته بندی اموزشها</span>
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </button>
                                <ul className={`dropdown-menu w-[300px] absolute border border-primary-BG-gr ${theme ? 'bg-black text-white border-gray-100' : 'bg-white'} text-gray-700 pt-0 z-10 font-mainFont`}>
                                    <li>
                                        <a className=" dropSub rounded-t hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">برنامه نویسی وب</a>
                                        <ul className={`dropdown-submenu w-96 absolute border-primary-BG-gr pt-0 ${theme ? 'bg-black text-white border-gray-100' : 'bg-white'} border border-gray-300 flex-wrap `} >
                                            <li><a className=" hover:text-blue-600 py-2 px-4 block" href="#">Two</a></li>

                                        </ul>
                                    </li>
                                    <li><a className=" hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">دیتا ساینس</a></li>
                                    <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">زبانهای برنامه نویسی</a></li>
                                    <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">توسعه بازی</a></li>
                                    <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">برنامه نویسی موبایل</a></li>
                                    <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">طراحی دیتابیس</a></li>
                                    <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">تست نویسی</a></li>
                                </ul>
                            </div>
                            <ul className='flex items-center justify-between gap-10 font-mainFont'>
                                <li>پرسش و پاسخ</li>
                                <li>مقالات</li>
                            </ul>
                        </div>

                        <div className="flex gap-3 mr-auto relative ">
                            <div className="nav-btns flex gap-3 ">
                                <div className="flex gap-3 max-xl:hidden">

                                <ChangeThemeBtn />
                                <Search />
                                </div>
                                <div className="basket  w-10 h-10 bg-[rgba(120,120,120,0.33)] rounded-full text-black justify-center items-center flex">
                                    <SlBasket />
                                </div>


                                <div className="max-w-40 flex items-center gap-3 " onClick={()=>setShowProfileMenu((prev)=>!prev)}>
                                    <div className="profile-icon w-10 h-10  bg-[rgba(120,120,120,0.33)] rounded-full text-black justify-center items-center flex">
                                        <FaRegUser />
                                    </div>
                                    <div className="profile-info max-xl:hidden">
                                        <NavProfileInfo />
                                    </div>
                                </div>
                                <div className={`w-60 h-fit absolute ${!ShowProfileMenu?"hidden":""} ${theme ? 'bg-black  border-gray-100' : 'bg-white text-black'} top-14 left-[-40px] border border-primary-BG-gr`}>
                                    <ul className='w-full  '>
                                    <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">زبانهای برنامه نویسی</a></li>
                                    <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">توسعه بازی</a></li>
                                    <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">برنامه نویسی موبایل</a></li>
                                    <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">طراحی دیتابیس</a></li>
                                    <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">تست نویسی</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
