import React from 'react'

function DotedTitle({title}) {
  return (
    <div>
        <div className="flex items-center font-bold" >
            <div className="icon flex  items-center justify-center">
            <div className="flex items-center justify-center text-center ">
                    <span className="text-sm">•</span>
                    <span className='text-2xl'>•</span>
            </div>
            </div>
            <div className="title mx-2">{title}</div>
        </div>
    </div>
  )
}

export default DotedTitle
