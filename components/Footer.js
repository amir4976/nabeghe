import ScrollToTop from "./ScrollToTop";
import Logo from "./mainPage/Logo";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { BiLogoTelegram } from "react-icons/bi";
import { PiYoutubeLogoBold } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";

function Footer() {
  return (
    <>
      <ScrollToTop />
      <div className="footerContianer">
        {/* footer header */}
        <div className="footerHeader grid-flow-column grid grid-cols-12 gap-3 w-full ">
          <div className=" md:col-span-4 col-span-12 flex justify-start items-center">
            <Logo />
          </div>
          <div className=" md:col-span-8 col-span-12  flex gap-16">
            <div className="phone flex items-center gap-3">
              <div className="icon w-10 h-10 flex justify-center items-center rounded-full bg-primary-transparent text-xl">
                <FaPhoneAlt />
              </div>
              <div className="text flex flex-col justify-center mr-2 font-mainFont font-bold mt-1">
                <span className="text-primary-color">شماره تلفن</span>
                <span>0263-000-0000</span>
              </div>
            </div>

            <div className="workHour flex items-center gap-3">
              <div className="icon w-10 h-10 flex justify-center items-center rounded-full bg-primary-transparent text-xl">
                <IoTime />
              </div>
              <div className="text flex flex-col justify-center mr-2 font-mainFont font-bold mt-1">
                <span className="text-primary-color">ساعت کار </span>
                <span>۰۹:۰۰ - ۱۷:۰۰</span>
              </div>
            </div>
          </div>
        </div>
        {/* footer header end */}
        {/* footer content */}
        <div className="footerContent grid grid-cols-12 gap-3 w-full h-[200px] mt-5 ">
          <div className="aboutSide md:col-span-5 col-span-12  h-full">
            <div className="aboutTitle flex flex-col justify-center items-start  bg-[#b2b2b22b]  p-8  rounded-3xl font-mainFont">
              <span className=" text-xl font-bold mb-3 ">
                <span className="flex items-center gap-2">
                  <div className="flex items-center justify-center text-center ">
                    <span className="text-sm">•</span>
                    <span>•</span>
                  </div>
                  دربــــــــــاره
                </span>
              </span>
              <p className=" text-sm  text-gray-400">
                نابغه یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح
                ایران است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین
                مقالات و دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار
                دهد. تبدیل کردن برنامه نویسان ایرانی به بهترین برنامه نویسان
                جهان هدف ماست.
              </p>
            </div>
          </div>

          <div className="importnent-link sm:col-span-6 md:col-span-3 col-span-12  h-full p-3">
            <span className=" text-xl font-bold mb-3 ">
              <span className="flex items-center gap-2">
                <div className="flex items-center justify-center text-center ">
                  <span className="text-sm">•</span>
                  <span>•</span>
                </div>
                لینک های مهم
              </span>
            </span>

            <ul className="flex flex-col gap-1 mt-5  text-gray-500  text-bold transition-all duration-1000 ease-in-out cursor-pointer">
              <li className="hover:text-primary-color">قوانین و مقررات</li>
              <li className="hover:text-primary-color">مدرسان</li>
              <li className="hover:text-primary-color">درباره</li>
              <li className="hover:text-primary-color">ارتباط با ما</li>
            </ul>
          </div>

          <div className="newsLeter sm:col-span-6  md:col-span-4 col-span-12 h-full p-3">
            <span className=" text-xl font-bold mb-3 ">
              <span className="flex items-center gap-2">
                <div className="flex items-center justify-center text-center ">
                  <span className="text-sm">•</span>
                  <span>•</span>
                </div>
                خبر نامه
              </span>
            </span>
            <p className="text-sm text-gray-400 my-4">
              برای اطلاع از جدیدترین اخبار و جشنوراه‌های تخفیفی نابغه ایمیل خود
              را وارد کنید.
            </p>
            <div className="flex  gap-2">
              <input
                type="email"
                className="w-full rounded-lg p-2  bg-[#3e3e3e45] placeholder-gray-500  bg-none "
                placeholder="ایمیل خود را وارد کنید"
              />
              <button className="px-5 rounded-lg  bg-primary-color text-white">
                ثبت
              </button>
            </div>

            <div className="socialMedia flex flex-col gap-2 mt-5 w-full ">
              <span className=" text-xl font-bold mb-3 ">
                <span className="flex items-center gap-2">
                  <div className="flex items-center justify-center text-center ">
                    <span className="text-sm">•</span>
                    <span>•</span>
                  </div>
                  شبکه های اجتماعی
                </span>
              </span>
              <div className="flex gap-2">
                <div className="flex items-center justify-center text-center rounded-full bg-[#b2b2b22b] p-3 hover:text-primary-color">
                <BiLogoTelegram />
                </div>
                <div className="flex items-center justify-center text-center rounded-full bg-[#b2b2b22b] p-3 hover:text-primary-color">
                <GrInstagram />
                </div>
                <div className="flex items-center justify-center text-center rounded-full bg-[#b2b2b22b] p-3 hover:text-primary-color">
                <PiYoutubeLogoBold />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer content end */}
      </div>
    </>
  )
}

export default Footer;
