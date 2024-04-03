"use client"
import React, { useState } from 'react'
import Search from '../NavBtns/Search';
import { SlBasket } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa6";
import NavProfileInfo from '../NavProfileInfo';
import { FaBars } from "react-icons/fa";
import Logo from '../Logo';
import { FiSearch } from "react-icons/fi";
import { useTheme } from 'next-themes';
function Navbar() {
    const [ShowProfileMenu, setShowProfileMenu] = useState(false);
    const [ShowSideBar, setShowSideBar] = useState(false);
    return (
        <>
            <div className=" w-full h-20 flex justify-center items-center border-b border-[rgb(120,120,120,0.4)] font-mainFont  sticky top-0 backdrop-blur-lg  z-40 ">
                <div className="w-full max-w-7xl px-11 relative  h-full mx-auto ">
                    <div className=" flex  items-center h-full gap-8 ">
                        <div className="habergerBar block xl:hidden" onClick={() => setShowSideBar(prev => !prev)}>
                            <FaBars />
                        </div>
                        <Logo />

                        <div className="flex gap-5 max-xl:hidden">
                            <div className="dropdown inline-block relative">
                                <button className="font-semibold py-2 px-4 rounded inline-flex items-center">
                                    <span className="mr-1 font-mainFont font-normal text-gray-500 hover:text-white transition-all">دسته بندی اموزشها</span>
                                  
                                </button>
                                <ul className={`dropdown-menu w-[300px] absolute border border-primary-BG-gr  text-light pt-0 z-10 font-mainFont bg-black`}>
                                    <li>
                                        <a className=" dropSub rounded-t hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">برنامه نویسی وب</a>
                                        <ul className={`dropdown-submenu w-96 absolute border-primary-BG-gr pt-0  border border-gray-300 flex-wrap`} >
                                            <li><a className=" hover:text-blue-600 py-2 px-4 block bg-black" href="#">Two</a></li>

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
                            <ul className='flex items-center justify-between gap-10 font-mainFont '>
                                <li className='text-gray-500 hover:text-white'>پرسش و پاسخ</li>
                                <li className='text-gray-500 hover:text-white'>مقالات</li>
                            </ul>
                        </div>

                        <div className="flex gap-3 mr-auto  ">
                            <div className="nav-btns flex gap-3 ">
                                <div className="flex gap-3 max-xl:hidden">

                                    {/* <ChangeThemeBtn /> */}
                                    <Search />
                                </div>
                                <div className="basket  w-10 h-10 bg-[rgba(120,120,120,0.33)] rounded-full  justify-center items-center flex">
                                    <SlBasket />
                                </div>


                                <div className="max-w-40 flex items-center gap-3 " onClick={() => setShowProfileMenu((prev) => !prev)}>
                                    <div className="profile-icon w-10 h-10  bg-[rgba(120,120,120,0.33)] rounded-full  justify-center items-center flex">
                                        <FaRegUser />
                                    </div>
                                    <div className="profile-info max-xl:hidden">
                                        <NavProfileInfo />
                                    </div>
                                </div>
                                <div className={`w-60 h-fit absolute ${!ShowProfileMenu ? "hidden" : ""}  top-14 left-[-40px] max-2xl:left-0 border border-primary-BG-gr bg-black`}>
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
            {/* side bar */}
            <div className={`interSideBar-bg fixed  w-full h-screen top-0 bg-[#5f5f5f8a] z-[50] ${ShowSideBar ? '' : "hidden"} `} onClick={() => setShowSideBar(false)}></div>
            <div className={`interSideBar  ${ShowSideBar ? '' : "hidden"} bg-black sideBar font-mainFont fixed right-0 top-0 w-72  max-sm:w-full h-screen z-[51] element`}>
                <div className="header flex justify-between px-6 py-5">
                    <Logo />

                    <button onClick={() => setShowSideBar(false)}>X</button>
                </div>
                {/* searchBar */}
                <div className="searchBar-side relative flex items-center mx-4">
                    <div className="icon absolute left-4 "><FiSearch /></div>
                    <input type="text" placeholder="دنبال چی هستی؟" className="w-full font-mainFont h-10 px-4 border-2 border-none bg-[#6d6d6d21] rounded-full outline-none" />
                </div>
                {/* theme toggler */}


                <label className="inline-flex items-center cursor-pointer justify-center w-full py-4  " style={{ direction: 'ltr' }}>
                    <div className="flex justify-between w-full mx-4" >
                        <input type="checkbox" value={true} className="sr-only peer"  />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium font-mainFont ">حالت صفحه</span>
                    </div>
                </label>

                <ul>
                    <li>
                        <a className=" dropSub rounded-t hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">برنامه نویسی وب</a></li>
                        <li><a className=" hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">دیتا ساینس</a></li>
                        <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">زبانهای برنامه نویسی</a></li>
                        <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">توسعه بازی</a></li>
                        <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">برنامه نویسی موبایل</a></li>
                        <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">طراحی دیتابیس</a></li>
                        <li><a className="  hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">تست نویسی</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
