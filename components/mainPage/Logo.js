import React from 'react'
import { HiLightBulb } from "react-icons/hi2";
export default function Logo() {
  return (
    <div>
       <div className="logo text-primary-color  flex justify-center items-center  gap-3">
                            <div className="bull text-3xl mx-2"><HiLightBulb /></div>
                            <div className="logoType flex flex-col ">
                                <span className='font-mainFont text-gray-500'>اکادمی</span>
                                <span className='font-mainFont font-bold'>نــابـــغـه</span>
                            </div>
          </div>
    </div>
  )
}
