'use client'
import React, { useEffect ,useRef} from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { TbFilter } from "react-icons/tb";

function AllCoursesSort() {
    const [ShowSort, setShowSort] = React.useState(false)
    const ref = useRef(null);
    // click out side componnet
    useEffect(() => {
      const handleOutSideClick = (event) => {
        if (!ref.current?.contains(event.target)) {
          setShowSort(false)
        }
      };
  
      window.addEventListener("mousedown", handleOutSideClick);
  
      return () => {
        window.removeEventListener("mousedown", handleOutSideClick);
      };
    }, [ref]);


  return (
    <>
         {/* sort contect */}
         <div className="MainContentHeader my-5  flex  items-center  relative">
         <span className="text-sm text-gray-400 md:flex hidden">
           مرتب سازی:
         </span>
         <div className=" relative" ref={ref}>
           <button className="BTN-list w-60 h-10 bg-primary-BG-gr  flex items-center justify-between px-3 rounded-lg mx-2" onClick={()=>setShowSort(prev=>!prev)}>
             <span>انتخاب کنید</span>
             <FaChevronDown />
           </button>

           <div className={`List sort-list w-[250px] h-fit  bg-black absolute z-[100] rounded-lg border-gray-500 ${!ShowSort ? "hidden" :""} `}>
               <ul className="flex flex-col gap-2">
                 <li className="py-1 px-2 hover:text-primary-color">جدیدترین</li>
                 <li className="py-1 px-2 hover:text-primary-color">گران ترین</li>
                 <li className="py-1 px-2 hover:text-primary-color">ارزان ترین</li>
                 <li className="py-1 px-2 hover:text-primary-color">قدیمی ترین</li>
               </ul>
           </div>

         </div>

         <button className="  h-10 bg-primary-BG-gr md:hidden flex  items-center justify-between px-3 rounded-lg mx-5 font-bold">
           <TbFilter />{" "}
           <span className="mr-2 sm:block hidden">فیلتر دوره ها</span>
         </button>


       </div>
    </>
  )
}

export default AllCoursesSort
