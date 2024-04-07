import DotedTitle from "@/components/DotedTitle";
import Logo from "@/components/mainPage/Logo";
import React from "react";
import { FiArrowUpLeft } from "react-icons/fi";
function page() {
  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center bg-black font-mainFont flex-col">
      <div className=" sm:max-w-[400px] h-fit flex flex-col justify-center bg-gradient-to-b from-primary-BG-gr to-secondary-BG-gr rounded-3xl  w-full px-4">
        <div className="logo bg-black rounded-b-3xl w-full h-fit flex justify-start items-center p-3">
          <Logo />
        </div>
        <div className="title mt-3 mb-1 ">
          <DotedTitle title="ورود یا ثبت نام" />
          <div className=" text-gray-500 flex flex-col text-sm">
            <span className="mb-2">درود</span>
            <span>لطفا شماره موبایل یا ایمیل خود را وارد کنید</span>
          </div>
        </div>
        <input
          type="text"
          className=" ltr w-full h-12 bg-primary-BG-gr rounded-2xl outline-none px-2"
          placeholder="شماره موبایل یا ایمیل"
        />
        <button className="flex  justify-center items-center w-full h-12 bg-primary-color rounded-full text-light mt-3">
          <span> برو بریم</span>
          <span>
            <FiArrowUpLeft />
          </span>
        </button>
      </div>
      <div class=" sm:max-w-[400px] w-full mt-5  text-xs bg-primary-BG-gr rounded-2xl text-gray-500 w-full flex justify-center p-5">
        <span>ورود شما به معنای پذیرش </span>
        <span className="text-white"> شرایط  </span>  و
        <span className="text-white"> قوانین حریم خصوصی</span>
        <span> است.</span>
      </div>
    </div>
  );
}

export default page;
