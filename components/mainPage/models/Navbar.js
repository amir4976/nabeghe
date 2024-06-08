"use client"
import React, { useEffect,useState } from 'react'
import Search from '../NavBtns/Search';
import { SlBasket } from "react-icons/sl";
import NavProfileInfo from '../NavProfileInfo';
import { FaBars } from "react-icons/fa";
import Logo from '../Logo';
import { FiSearch } from "react-icons/fi";
import Link from 'next/link';

 function Navbar({isLogin}) {
    const [ShowSideBar, setShowSideBar] = useState(false);
    const [AllCourses,setAllCourses] = useState([]);
    useEffect(() => {
        const GetCourseData =async ()=>{
            const request = await fetch("/api/Courses")
            let {courses} = await request.json()
            console.log(courses)
            setAllCourses(courses)
            
        }
        GetCourseData();
        
    }, []);
    

    return (
        <>
            <div className=" w-full h-20 flex justify-center items-center border-b border-[rgb(120,120,120,0.4)] font-mainFont  sticky top-0 backdrop-blur-lg  z-40 ">
                <div className="w-full max-w-7xl px-11 relative  h-full mx-auto ">
                    <div className=" flex  items-center h-full gap-8 ">
                        <div className="habergerBar block xl:hidden" onClick={() => setShowSideBar(prev => !prev)}>
                            <FaBars />
                        </div>
                        <Link href="/">
                        <Logo />
                        </Link>

                        <div className="flex gap-5 max-xl:hidden">
                            <div className="dropdown inline-block relative">
                                <button className="font-semibold py-2 px-4 rounded inline-flex items-center">
                                    <span className="mr-1 font-mainFont font-normal text-gray-500 hover:text-white transition-all">دسته بندی اموزشها</span>
                                  
                                </button>
                                <ul className={`dropdown-menu w-[250px] absolute border border-gray-600 rounded-md  text-light pt-0 z-10 font-mainFont bg-black`}>
                                    <li>
                                        <a className=" dropSub rounded-t hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">برنامه نویسی فرانت</a>
                                        <ul className={`dropdown-submenu w-96 absolute  rounded-md   pt-0  border border-gray-500 flex-wrap`} >
                                            {AllCourses.map((e,index)=>{
                                                if(e.category === "فرانت اند"){
                                                    return(
                                                        <li key={index}><Link className=" hover:text-blue-600 py-2 px-4 block bg-black" href={`/AllCourses/${e.courseName}`}>{e.title}</Link></li>
                                                    )
                                                }
                                            })}
                                        </ul>
                                    </li>
                                    <li>
                                        <a className=" dropSub rounded-t hover:text-blue-600 py-2 px-4 block whitespace-no-wrap" href="#">برنامه نویسی بک</a>
                                        <ul className={`dropdown-submenu w-96 absolute  rounded-md   pt-0  border border-gray-300 flex-wrap`} >
                                        {AllCourses.map((e,index)=>{
                                                if(e.category === "بک اند"){
                                                    return(
                                                        <li key={index}><Link className=" hover:text-blue-600 py-2 px-4 block bg-black" href={`/AllCourses/${e.courseName}`}>{e.title}</Link></li>
                                                    )
                                                }
                                            })}
                                        </ul>
                                    </li>


                                </ul>
                            </div>
                            <ul className='flex items-center justify-between gap-10 font-mainFont '>
                                <li className='text-gray-500 hover:text-white'><Link href={'/commenQuestions'}>پرسش و پاسخ</Link></li>
                                <li className='text-gray-500 hover:text-white'>مقالات</li>
                            </ul>
                        </div>

                        <div className="flex gap-3 mr-auto  ">
                            <div className="nav-btns flex gap-3 ">
                                <div className="flex gap-3 max-xl:hidden">

                                    {/* <ChangeThemeBtn /> */}
                                    <Search />
                                </div>
                            

                                <div className="profile-info max-xl:hidden flex justify-center items-center gap-3">
                                        <NavProfileInfo /> 
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
