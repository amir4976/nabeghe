import Footer from '@/components/Footer'
import React from 'react'
import DushbouardMenu from '@/components/Dashbouard/DushbouardMenu'
function layout({children}) {
  return (
    <div className='flex justify-center w-full max-xl:px-3 font-mainFont'> 
    <div className="max-w-7xl">

        <div className="w-full grid grid-cols-12 ">
        <div className=" lg:col-span-3 md:col-span-4 col-span-12">
            <DushbouardMenu/>
        </div>

        <div className="lg:col-span-9  md:col-span-8 col-span-12 ">
             {children}
        </div>
        </div>

      <Footer/>
    </div>
    </div>
  )
}

export default layout
