import ScrollToTop from "./ScrollToTop"
import Logo from "./mainPage/Logo"
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
function Footer() {

  return (
    <>
      <ScrollToTop />
      <div className="footerContianer">
      {/* footer header */}
        <div className="footerHeader grid-flow-column grid grid-cols-12 gap-3 w-full h-20">
            <div className=" md:col-span-4 col-span-12 flex justify-start items-center">
              <Logo/>
            </div>
            <div className=" md:col-span-8 col-span-12  flex gap-16">
                  <div class="phone flex items-center gap-3">
                      <div class="icon w-10 h-10 flex justify-center items-center rounded-full bg-primary-transparent text-xl">
                      <FaPhoneAlt />
                      </div>
                      <div class="text flex flex-col justify-center mr-2 font-mainFont font-bold mt-1">
                        <span className="text-primary-color">شماره تلفن</span>
                        <span>0263-000-0000</span>
                      </div>
                  </div>
                  
                  <div class="workHour flex items-center gap-3">
                      <div class="icon w-10 h-10 flex justify-center items-center rounded-full bg-primary-transparent text-xl">
                      <IoTime />
                      </div>
                      <div class="text flex flex-col justify-center mr-2 font-mainFont font-bold mt-1">
                        <span className="text-primary-color">ساعت کار </span>
                        <span>۰۹:۰۰ - ۱۷:۰۰</span>
                      </div>
                  </div>
                  
            </div>
        </div>

      {/* footer content */}
        <div className="aboutSide"></div>
        <div className="importnent-link"></div>
        <div className="newsLeter"></div>
      </div>
    </>
  )
}
 
export default Footer
