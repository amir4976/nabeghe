'use client'
import WhyUsItem from './WhyUsItem'
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoBook } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
function WhyUs() {
  return (
    <div className=' flex justify-center flex-col items-center  bg-primary-BG-gr  mt-14 font-mainFont rounded-lg '>
        <div className={`title px-10 py-3  top-[-30px] relative text-light bg-[#1D4ED8] text-white rounded-2xl border text-xl  border-gray-600 font-bold  element `}>چرا اکــــــــادمـــی نابغه؟</div>
        <div className="items flex gap-10  flex-wrap justify-center">
            <div >
            <WhyUsItem icon={<BiSolidMessageSquareDetail />} title={'منتور شیپ'} theme={"#58a4db"}   />
            </div>
            <div >
            <WhyUsItem icon={<FaVideo />} title={'ویدیویی'} theme={"#51db81"}  />
            </div>
            <div>
            <WhyUsItem icon={<TbPlayerTrackNextFilled />} title={'به روز'}  theme={"#db8d51"}  />
            </div>
            <div >
            <WhyUsItem icon={<IoBook />} title={'جامع'}   theme={"#c451db"}/>
            </div>
            <div >
            <WhyUsItem icon={<FaFireAlt />} title={'پروژه محور'}  theme ={"#db516d"} />
            </div>
            <div >
            <WhyUsItem icon={<IoExtensionPuzzle />} title={'چالش بر انگیز'}  theme={"#db51d2"}  />
            </div>
        </div>
    </div>
  )
}

export default WhyUs
