"use client";
import Image from "next/image";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import Swal from "sweetalert2";
function CartCard({ Data }) {
  
  const DeleteFromLocalStorage = () => {
    Swal.fire({
      title: "از حذف این دوره از سبد خرید اطمینان دارید؟",
      text: "شما میتوانید دوباره این دوره را به سبد خرید اضافه کنید",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله حذفش کن!",
      cancelButtonText: "خیر",
    }).then((e) => {

      if (e.isConfirmed) {
        const getLocalStorage =
          JSON.parse(localStorage.getItem("courseCart")) || [];
        const newLocalStorage = getLocalStorage.filter((e) => e.id !== Data.id);
        localStorage.setItem("courseCart", JSON.stringify(newLocalStorage));
        window.location.reload();
      }
    });
  };


  return (
    <div className="w-full h-fit grid grid-cols-3 gap-5 mt-10 max-md:grid-cols-1">
      <div className=" col-span-1 relative flex justify-center items-start h-40 mb-10">
        <Image
          className={"rounded-lg"}
          src={Data.image}
          alt="2"
          width={400}
          height={200}
        />
        <div
          onClick={DeleteFromLocalStorage}
          className="w-10 h-10 rounded-full absolute z-10 -bottom-1 bg-red-800 text-xl cursor-pointer flex justify-center items-center  max-md:left-0 max-md:top-0"
        >
          <IoCloseSharp />
        </div>
      </div>

      <div className=" col-span-2">
        <div className="w-full h-fit bg-gradient-to-b from-primary-BG-gr to-secondary-BG-gr px-5 rounded-lg">
          <div className="bg-black p-3 rounded-b-lg"> {Data.title}</div>
          <div className="flex justify-between mt-5 ">
            <div className="teacher-section flex">
              <Image
                className="rounded-full"
                src={"/assets/01.jpeg"}
                alt="2"
                width={50}
                height={50}
              />
              <div className="flex-col flex justify-center text-xs">
                <span>مهندس</span>
                <span>محمد امین سعیدی راد</span>
              </div>
            </div>
            <div className="price-section text-white font-bold text-lg flex items-center">
              <span>{Data.price.toLocaleString()}</span>
              <span className="text-gray-600 px-2 text-sm">تومان</span>
            </div>
          </div>
          <div className="flex justify-between gap-3 mt-5">
            <Link
              href={`AllCourses/${Data.courseName}`}
              className="w-[90%] h-12 bg-primary-color text-white rounded-full flex justify-center items-center"
            >
              مشاهده دوره
            </Link>
            <button className=" w-12 h-12 bg-primary-BG-gr text-white rounded-full flex justify-center items-center">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
