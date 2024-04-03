'use client'
import WhyUsItem from '../WhyUsItem'
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoBook } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
function WhyUs() {
  return (
    <div className=' flex justify-center flex-col items-center  bg-primary-BG-gr  mt-14 font-mainFont rounded-lg '>
        <div className={`title px-10 py-3  top-[-30px] relative text-light bg-black rounded-2xl border text-xl  border-gray-600 font-bold  element `}>چرا اکــــــــادمـــی نابغه؟</div>
        <div className="items flex gap-10  flex-wrap justify-center">
            <div className={'text-[#58a4db]'}>
            <WhyUsItem icon={<BiSolidMessageSquareDetail />} title={'منتور شیپ'}   />
            </div>
            <div className={'text-[#51db81]'}>
            <WhyUsItem icon={<FaVideo />} title={'ویدیویی'}   />
            </div>
            <div className={'text-[#db8d51]'}>
            <WhyUsItem icon={<TbPlayerTrackNextFilled />} title={'به روز'}   />
            </div>
            <div className={'text-[#c451db]'}>
            <WhyUsItem icon={<IoBook />} title={'جامع'}   />
            </div>
            <div className={'text-[#db516d]'}>
            <WhyUsItem icon={<FaFireAlt />} title={'پروژه محور'}   />
            </div>
            <div className={'text-[#db51d2]'}>
            <WhyUsItem icon={<IoExtensionPuzzle />} title={'چالش بر انگیز'}   />
            </div>
        </div>
    </div>
  )
}

export default WhyUs
