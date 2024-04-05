import React from 'react'


function InfoBlock({icon ,title,value}) {
  return (
    <div className=' col-span-2 max-md:col-span-4 max-sm:col-span-8 w-full h-[130px] bg-primary-BG-gr rounded-3xl flex justify-center items-center flex-col border-white/10 border'>
        <div className="icon rounded-full bg-primary-BG-gr text-primary-color text-xl p-3 ">
            {icon}
        </div>
        <div className="title text-sm text-gray-500 mt-2 ">
            {title}
        </div>
        <div className="value font-bold mt-1">
            {value}
        </div>
    </div>
  )
}

export default InfoBlock
