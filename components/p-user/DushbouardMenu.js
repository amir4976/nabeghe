'use client'
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function DushbouardMenu({name}) {
  const pathname = usePathname()
  const Links = [
    {
      title: "پیشخوان",
      href: "/p-user",
      icon: "info",
    },
    {
      title: "دوره ها",
      href: "/p-user/Enrolledcourses",
      icon: "info",
    },
    {
      title: "علاقه مندی ها",
      href: "/",
      icon: "info",
    },
    {
      title: "مالی و اشتراک",
      href: "/",
      icon: "info",
    },
    {
      title: "دیدگاه وپرسشهای شما",
      href: "/",
      icon: "info",
    },
    {
      title: "اعلانات",
      href: "/",
      icon: "info",
    },
    {
      title: "ویرایش اطلاعات",
      href: "/",
      icon: "info",
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
                  <Link href={link.href} className={`w-full h-11 bg-black rounded-full text-right flex items-center px-4 text-sm hover:bg-primary-color transition-all  ${pathname === link.href ? 'bg-primary-color' : ''} `}>{link.title} </Link>
              </li>
          ))}
              <li>
                  <button className={`w-full h-11 bg-black rounded-full text-right flex items-center px-4 text-sm hover:bg-red-800 transition-all`}>
                    خروج از حساب کاربری
                  </button> 
              </li>
        </ul>
      </div>
    </div>
  );
}

export default DushbouardMenu;
