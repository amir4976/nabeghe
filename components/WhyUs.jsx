'use client'
import { Theme } from '@/app/context/Theme'
import React, { useContext } from 'react'
import WhyUsItem from './WhyUsItem'
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoBook } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
function WhyUs() {
    const { theme } = useContext(Theme)
  return (
    <div className='flex justify-center flex-col items-center  bg-primary-BG-gr  mt-14 font-mainFont rounded-lg '>
        <div className={`title px-10 py-3  top-[-30px] relative text-black rounded-2xl border text-xl  border-black/30 font-bold   ${theme ? 'bg-black text-white border border-gray-200/30' : 'bg-white'}`}>چرا اکــــــــادمـــی نابغه؟</div>
        <div className="items flex gap-10  flex-wrap justify-center">
            <div className={'text-[#58a4db]'}>
            <WhyUsItem icon={<BiSolidMessageSquareDetail />} title={'منتور شیپ'}  theme={theme} />
            </div>
            <div className={'text-[#51db81]'}>
            <WhyUsItem icon={<FaVideo />} title={'ویدیویی'}  theme={theme} />
            </div>
            <div className={'text-[#db8d51]'}>
            <WhyUsItem icon={<TbPlayerTrackNextFilled />} title={'به روز'}  theme={theme} />
            </div>
            <div className={'text-[#c451db]'}>
            <WhyUsItem icon={<IoBook />} title={'جامع'}  theme={theme} />
            </div>
            <div className={'text-[#db516d]'}>
            <WhyUsItem icon={<FaFireAlt />} title={'پروژه محور'}  theme={theme} />
            </div>
            <div className={'text-[#db51d2]'}>
            <WhyUsItem icon={<IoExtensionPuzzle />} title={'چالش بر انگیز'}  theme={theme} />
            </div>
        </div>
    </div>
  )
}

export default WhyUs
