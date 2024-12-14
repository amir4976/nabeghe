import React from 'react'
import Navbar from '../templates/mainPage/Navbar'
import DushbouardMenu from '../module/p-user/DushbouardMenu'
import Footer from '../templates/mainPage/Footer'
import PanelMenu from '../module/p-admin/PanelMenu'
function PanelLayout({children}) {
  return (
    <div>
          <Navbar isLogin={true}/>
    <div className='flex justify-center w-full max-xl:px-3 font-mainFont'> 
    <div className="max-w-7xl">

        <div className="w-full grid grid-cols-12 ">
        <div className=" lg:col-span-3 md:col-span-4 col-span-12">
            <PanelMenu/>
        </div>

        <div className="lg:col-span-9  md:col-span-8 col-span-12 ">
             {children}
        </div>
        </div>

    <Footer/>
    </div>
    </div>
    </div>
  )
}

export default PanelLayout
