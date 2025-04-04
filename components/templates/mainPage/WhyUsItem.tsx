import React from 'react'

type props = {
    icon:React.ReactNode,
    title:string,
    theme:string
}
function WhyUsItem({icon,title,theme}:props) {
  console.log(theme)
  return (
    <div className={`flex justify-center flex-col items-center  my-5 font-mainFont animate-pulse `}>
        <div className={`icon w-20 h-20  flex justify-center items-center rounded-full  text-3xl  text-white `} style={{background:theme}}> 
                {icon}
        </div>
        <div className={`icon-title text-lg font-semi`}>
            {title}
        </div>
    </div>
  )
}

export default WhyUsItem
