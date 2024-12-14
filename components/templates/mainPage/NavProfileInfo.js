"use client";
import Link from "next/link";
import  { useRef, useState ,useEffect} from "react";
import { FaAngleDown, FaMoneyBills, FaRegUser } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";
import { MdOutlineSchool } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { SlBasket } from "react-icons/sl";
import { VscCommentDiscussion } from "react-icons/vsc";
import { useContext } from "react";
import { Auth } from "@/context/Auth";
import { getToken } from "@/utils/GetToken";
function NavProfileInfo({userRole}) {
  const ref = useRef(null);
  const [ShowProfileMenu, setShowProfileMenu] = useState(false);

  const [isLoggedIn,UserInfos,logIn,logOut] = useContext(Auth)
  // useEffect run every time that user refresh and user login user if any token exist 
  useEffect(()=>{
    const test = async ()=>{
     const token = await getToken()
     if(!token){
      return false
     }

     const Request = await fetch('/api/me',{method:'POST'})
        .then(res=>res.json())
        .then(result =>logIn(result.user,token))
    }

    test()
    
  },[])
  
  
  
  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    window.addEventListener("mouseup", handleOutSideClick);

    return () => {
      window.removeEventListener("mouseup", handleOutSideClick);
    };
  }, [ref]);


  return (
    <>
    { isLoggedIn? (
      <>


      <div
        className="max-w-50 flex items-center gap-3 "
        ref={ref}
        onClick={() => setShowProfileMenu((prev) => !prev)}
      >
        <div className="profile-icon w-10 h-10   bg-primary-BG-gr rounded-full  justify-center items-center flex">
          <FaRegUser />
        </div>
        <div className="flex  flex-col text-sm max-md:hidden ">
          <span className="font-bold">{UserInfos? UserInfos.name : window.location.reload()}</span>
          <span>خوش آمـــدید</span>
        </div>
        <div
          className={` transition-all ${ShowProfileMenu ? "rotate-180" : ""}`}
        >
          <FaAngleDown />
        </div>
      </div>

      <div
        className={`w-60 h-fit absolute ${
          !ShowProfileMenu ? "hidden" : ""
        }  top-20 backdrop-blur-100 left-[-40px] max-2xl:left-0 border border-primary-BG-gr bg-black  p-2 rounded-lg text-sm`}
      >
        <ul className="w-full  ">
          <li>
            <Link
              className="  hover:text-blue-600 py-2 px-4  whitespace-no-wrap flex"
              href={userRole === 'ADMIN' ? "/p-admin" :"/p-user"}
            >
              <span className="text-lg mx-1">
                <HiOutlineSparkles />
              </span>
              مشاهده پروفای
            </Link>
          </li>
          <li>
            <Link
              className="  hover:text-blue-600 py-2 px-4  whitespace-no-wrap flex"
              href="/p-user/Enrolledcourses"
            >
              <span className="text-lg mx-1">
                <MdOutlineSchool />
              </span>
              دوره ها
            </Link>
          </li>
          <li>
            <a
              className="  hover:text-blue-600 py-2 px-4  whitespace-no-wrap flex"
              href="#"
            >
              <span className="text-lg mx-1">
                <FaMoneyBills />
              </span>
              مالی
            </a>
          </li>
          <li>
            <a
              className="  hover:text-blue-600 py-2 px-4  whitespace-no-wrap flex"
              href="#"
            >
              <span className="text-lg mx-1">
                <VscCommentDiscussion />
              </span>
              پرسش و دیدگاه
            </a>
          </li>
          <li>
            <a
              className="  hover:text-red-500 py-2 px-4  whitespace-no-wrap flex"
              href="#"
            >
              <span className="text-lg mx-1">
                <PiSignOutBold />
              </span>
              خروج از حساب
            </a>
          </li>
        </ul>
      </div>
      </>
    ):(
      <>
        <Link href="/SignIn" className="px-5 py-2 rounded-full bg-primary-BG-gr ">ثبت نام / ورود</Link>
      </>
    )}
    </>
  );
}

export default NavProfileInfo;
