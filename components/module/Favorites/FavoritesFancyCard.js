
"use client"
import Image from "next/image";
import { MdFileCopy } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { GoArrowUpLeft } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { RiAppsFill } from "react-icons/ri";
import Link from "next/link";
import { ShowSwal } from "@/utils/ShowSwal";
import { useRouter } from "next/navigation";
function FavoritesFancyCard({data}) {
  const { push } = useRouter();
  const { title, price, ShortDec, LongDec, category, score, image ,teacher,courseName} = data;
  async function DeleteFromFavorites(){
    const favoriteID = data._id
    const DeleteFetch = await fetch(`/api/Favorites/${favoriteID}`,{
      method:"DELETE",
      headers:{
        'Content-Type':"application/json"
      }
    })

    if(DeleteFetch.status == 201){
      push('/p-user/Favorites')
      ShowSwal({title:"deleted from favorites",icon:"success",text:"successfully deleted from favorites!!! 😀😁"})
    }else{
      ShowSwal({title:"not deleted from favorites",icon:"error",text:"amfride you already deleted this course from favorites"})
    }
  }



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
       
          <div className="btn-buy flex justify-center items-center mt-3">
            <Link href={`/AllCourses/${courseName}`} className="btn-buy-btn w-full h-12 text-sm  flex justify-center items-center text-white bg-primary-color rounded-3xl hover:bg-blue-800 transition-all">
                <span>مشاهده دوره </span>
                <span className="text-xl">
                  <GoArrowUpLeft />
                </span>
            </Link>
            <button className="w-full h-[48px] mr-2 rounded-full flex justify-center items-center transition-all hover:bg-red-900  bg-red-800  text-white" onClick={()=>DeleteFromFavorites()} >حذف از علاقمندی</button>
          </div>
        </div>
      </div>
    
  );
}

export default FavoritesFancyCard;
