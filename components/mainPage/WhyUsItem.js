import React from 'react'

function WhyUsItem({icon,title,theme}) {
  return (
    <div className={`flex justify-center flex-col items-center  my-5 font-mainFont animate-pulse `}>
        <div className={`icon w-20 h-20  flex justify-center items-center rounded-full bg-black text-3xl  `}>
                {icon}
        </div>
        <div className={`icon-title text-lg font-semi`}>
            {title}
        </div>
    </div>
  )
}

export default WhyUsItem
