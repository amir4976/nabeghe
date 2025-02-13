import Footer from '@/components/templates/mainPage/Footer'
import React from 'react'
import DushbouardMenu from '@/components/module/p-user/DushbouardMenu'
import ConnectToDB from '@/utils/ConnectToDB'
import { VerifyToken } from '@/utils/auth'
import userModel from '@/models/Users'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { authUser } from '@/utils/authUser'
import Navbar from '@/components/templates/mainPage/Navbar'
async function layout({children}) {

 const user = await authUser()
 if (!user) {
  redirect('/SignIn')
 }
//  console.log(user)

  return (
    <>
    <Navbar isLogin={true}/>
    <div className='flex justify-center w-full max-xl:px-3 font-mainFont'> 
    <div className="max-w-7xl">

        <div className="w-full grid grid-cols-12 ">
        <div className=" lg:col-span-3 md:col-span-4 col-span-12">
            <DushbouardMenu name={user.name}/>
        </div>

        <div className="lg:col-span-9  md:col-span-8 col-span-12 ">
             {children}
        </div>
        </div>

      <Footer/>
    </div>
    </div>
    </>
  )
}

export default layout
