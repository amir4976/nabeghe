'use client'
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { FiBook } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
function DushbouardMenu({name}) {
  const pathname = usePathname()
  const Links = [
    {
      title: "پیشخوان",
      href: "/p-user",
      icon: <LuLayoutPanelLeft />,
    },
    {
      title: "دوره ها",
      href: "/p-user/Enrolledcourses",
      icon: <FiBook />,
    },
    {
      title: "علاقه مندی ها",
      href: "/p-user/Favorites",
      icon: <FaRegHeart />,
    },
    {
      title: "مالی و اشتراک",
      href: "/p-user/",
      icon: <CiMoneyBill />,
    },
    {
      title: "دیدگاه وپرسشهای شما",
      href: "/p-user/comments",
      icon: <FaRegCommentAlt />,
    },
    {
      title: "اعلانات",
      href: "/",
      icon: <FaRegNoteSticky />,
    },
    {
      title: "ویرایش اطلاعات",
      href: "/p-user/ChangeInfo",
      icon: <FaRegEdit />,
    },

  ]
  return (
    <div className="flex flex-col p-3 space-y-3 sticky top-[90px]">
      <div className="profile flex">
        <Image
          src="/assets/01.jpeg"
          width={50}
          height={50}
          alt="profile"
          className="rounded-full"
        />
        <div className="flex flex-col justify-center items-start mx-3 ">
          <span className="text-sm text-gray-500">خوش امدید</span>
          <span className="font-bold">{name}</span>
        </div>
      </div>
      <div className="list w-full bg-primary-BG-gr rounded-2xl mt-3 p-5">
        <ul className="flex flex-col gap-3">
          {Links.map((link, index) => (
              <li key={index}>
                  <Link href={link.href} className={`w-full h-11 bg-black rounded-full text-right flex items-center px-4 text-sm hover:bg-primary-color transition-all  ${pathname === link.href ? 'bg-primary-color' : ''} `}>
                    <span className="text-xl  ml-2 ">{link.icon}</span>
                    {link.title}
                  </Link>
              </li>
          ))}
              <li>
                  <button className={`w-full h-11 bg-black rounded-full text-right flex items-center px-4 text-sm hover:bg-red-800 transition-all`}>
                  <span className="text-xl  ml-2 "><IoMdExit /></span>
                    
                    خروج از حساب کاربری
                  </button> 
              </li>
        </ul>
      </div>
    </div>
  );
}

export default DushbouardMenu;
