import React from 'react'

function Bradcramp({search}) {
  return (
    <div>
        <div className="flex gap-2 items-center justify-center w-full h-20 bg-primary-BG-gr text-light font-mainFont">
            <span>محتوای سرج شما</span>
            <span className='font-bold text-2xl'>{search}</span>
        </div>
    </div>
  )
}

export default Bradcramp
