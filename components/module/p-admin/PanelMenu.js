"use client";
import {  usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'
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
import Swal from "sweetalert2";


function PanelMenu({ name }) {
  const pathname = usePathname();
  const router = useRouter();
  const Links = [
    {
      title: "پیشخوان",
      href: "/p-admin",
      icon: <LuLayoutPanelLeft />,
    },
    {
      title: "لیست دوره ها و حذف و اضافه",
      href: "/p-admin/Courses",
      icon: <FiBook />,
    },
    {
      title: "لیست یوزر ها",
      href: "/p-admin/Users",
      icon: <FiBook />,
    },
    {
      title: "کامنت ها",
      href: "/p-admin/comments",
      icon: <CiMoneyBill />,
    },
    {
      title: "تیکت ها پشتیبانی",
      href: "/p-admin/tickets",
      icon: <FaRegCommentAlt />,
    },
    {
      title: "کد های تخفیف",
      href: "/p-admin/coupons",
      icon: <FaRegNoteSticky />,
    },
    {
      title: "ویرایش اطلاعات",
      href: "/p-admin/ChangeInfo",
      icon: <FaRegEdit />,
    },
  ];
  const logout = () => {
    Swal.fire({
      title: "آیا میخواهید از حساب خود خارج شوید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
    }).then( async (result) => {
      if (result.isConfirmed) {
       const isloggedOut = await fetch("/api/logout");
       if(isloggedOut.status === 200){
          router.push("/");
        }
      }
    });
  };

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
              <Link
                href={link.href}
                className={`w-full h-11 bg-black rounded-full text-right flex items-center px-4 text-sm hover:bg-primary-color transition-all  ${
                  pathname === link.href ? "bg-primary-color" : ""
                } `}
              >
                <span className="text-xl  ml-2 ">{link.icon}</span>
                {link.title}
              </Link>
            </li>
          ))}
          <li>
            <button
              className={`w-full h-11 bg-black rounded-full text-right flex items-center px-4 text-sm hover:bg-red-800 transition-all`}
              onClick={logout}
            >
              <span className="text-xl  ml-2 ">
                <IoMdExit />
              </span>
              خروج از حساب کاربری
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PanelMenu;
