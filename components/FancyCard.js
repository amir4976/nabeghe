import Image from "next/image";
import { MdFileCopy } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { GoArrowUpLeft } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { RiAppsFill } from "react-icons/ri";
import Link from "next/link";

function FancyCard({data}) {
  console.log(data)
  const { title, price, ShortDec, LongDec, category, score, image ,teacher,courseName} = data;
  return (
    <div className="w-full h-full flex justify-center items-center font-mainFont  relative  mt-3">
      <div className="h-full  w-full  ">
        <Link href={`/AllCourses/${courseName}`} className="image relative  rounded-3xl overflow-auto">
          <Image
            src={image}
            alt="l"
            width={400}
            height={150}
            className="rounded-3xl overflow-auto"
          />
          <div className="courseType absolute z-10 left-4 top-4 flex bg-black/20 px-2 py-1 rounded-lg text-white items-center  ">
          <RiAppsFill />
            <span className="mr-2">{category}</span>
          </div>
        </Link>
        <div className="fancy-infoSide px-5">
          <Link href={`/AllCourses/${courseName}`} className="titleBar w-full m-auto h-20 px-5  flex flex-col justify-center rounded-b-3xl  bg-gradient-to-t from-primary-BG-gr to-secondary-BG-gr">
            <span className="completed-persent font-extralight text-sm text-gray-600">
              0 <span>%</span> تکمیل شده
            </span>
            <span className="titleBar-text font-bold">{title}</span>
          </Link>
          <div className="chapters-info text-sm px-5 text-gray-500 flex text-center">
            <span className="mr-3 flex items-center ">
              <MdFileCopy />: 5 فصل
            </span>
            <span className="mr-3 flex items-center ">
              <MdOutlineAccessTimeFilled />: 25 ساعت
            </span>
          </div>
          <div className="profile-Price mt-4 flex items-center justify-between" >
            <div className="profile flex">
              {
              teacher.name && (
             <>
              <div className="profile-img relative w-10 h-10 rounded-full overflow-auto ">
                <Image fill alt="profile" src={"/assets/01.jpeg"} />
              </div>
              <div className="profile-info flex flex-col justify-center ml-3">
                <span className="text-gray-500  text-xs">مدرس دوره</span>
                <span className="font-bold text-xs">{teacher.name}</span>
              </div>
              </>
              )    
              }
            </div>
            <div className="price flex flex-col items-end">
                <span className="text-sm mr-1 text-gray-500">تومان</span>
                <span className="font-bold text-xl">{price > 500 ? (price).toLocaleString() :(<span className=" text-yellow-600">رایگان</span>)}</span>
            </div>
          </div>
          <div className="btn-buy flex justify-center items-center mt-3">
            <Link href={`/AllCourses/${courseName}`} className="btn-buy-btn w-full h-12 text-sm  flex justify-center items-center text-white bg-primary-color rounded-3xl hover:bg-blue-800 transition-all">
                <span>مشاهده دوره </span>
                <span className="text-xl">
                  <GoArrowUpLeft />
                </span>
            </Link>
            <button className="w-[58px] h-[48px] mr-2 rounded-full flex justify-center items-center transition-all hover:text-red-600  bg-[rgba(120,120,120,0.33)] "><FaHeart /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FancyCard;
