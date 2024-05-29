import React from 'react'

function DashbouardCard({title,value,icon}) {
  return (
      <div className="max-sm:col-span-4 max-lg:col-span-2  col-span-1  bg-primary-BG-gr rounded-2xl p-5 flex  items-center text-right ">
            <div className="icon w-10 h-10 flex justify-center items-center rounded-full bg-black">{icon}</div>
            <div className="flex flex-col mx-2">
                <span className="text-xs text-gray-500">{title}</span>
                <span className="font-bold">{value}</span>
            </div>
      </div>
  )
}

export default DashbouardCard
