"use client"
import React from 'react'
import { FiArrowUpLeft } from 'react-icons/fi'
import DotedTitle from '../DotedTitle'
import Logo from '../mainPage/Logo'

function Signin({login}) {
 
  return (
    <>
    <div className=" sm:max-w-[400px] h-fit flex flex-col justify-center bg-gradient-to-b from-primary-BG-gr to-secondary-BG-gr rounded-3xl  w-full px-4">
    <div className="logo rounded-b-3xl w-full h-fit flex justify-start items-center p-3">
      <Logo />
    </div>




    <div className="title mt-3 mb-1 ">
      <DotedTitle title="ثبت نام" />
      <div className=" text-gray-500 flex flex-col text-sm">
        <span className="mb-2">درود</span>
        <span>خوشحالم که داری به جمع ما میپیوندی</span>
      </div>
    </div>
{/* ---------------------- input --------------------------------- */}
    
    {/* Name */}
    <div className="input w-full h-fit border border-gray-800 rounded-xl mb-3">
    <input
      type="text"
      className=" ltr w-full h-12 bg-primary-BG-gr rounded-2xl outline-none px-2 "
      placeholder="نام"
    //   onChange={(e) => setIdentifie(e.target.value)}
    //   value={identifire}
    />
    </div>

    {/* Name */}
    <div className="input w-full h-fit border border-gray-800 rounded-xl mb-3">
    <input
      type="text"
      className=" ltr w-full h-12 bg-primary-BG-gr rounded-2xl outline-none px-2 "
      placeholder=" نام کاربری"
    //   onChange={(e) => setIdentifie(e.target.value)}
    //   value={identifire}
    />
    </div>

    {/* email */}
    <div className="input w-full h-fit border border-gray-800 rounded-xl mb-3">
    <input
      type="text"
      className=" ltr w-full h-12 bg-primary-BG-gr rounded-2xl outline-none px-2 "
      placeholder="ایمیل"
    //   onChange={(e) => setIdentifie(e.target.value)}
    //   value={identifire}
    />
    </div>

    {/* password */}
    <div className="input w-full h-fit border border-gray-800 rounded-xl mb-3">

    <input
      type="text"
      className=" ltr w-full h-12 bg-primary-BG-gr rounded-2xl outline-none px-2 "
      placeholder="رمز ورود"
    //   onChange={(e) => setIdentifie(e.target.value)}
    //   value={identifire}
    />

    </div>

    {/* phone */}
    <div className="input w-full h-fit border border-gray-800 rounded-xl mb-3">

    <input
      type="text"
      className=" ltr w-full h-12 bg-primary-BG-gr rounded-2xl outline-none px-2 "
      placeholder="شماره تلفن"
    //   onChange={(e) => setIdentifie(e.target.value)}
    //   value={identifire}
    />

    </div>

{/* ---------------------- input end --------------------------------- */}



    <button className="flex  justify-center items-center w-full h-12 bg-primary-color rounded-full text-light mt-3">
      <span> برو بریم</span>
      <span>
        <FiArrowUpLeft />
      </span>
    </button>
  </div>
  <div className="sm:max-w-[400px]  mt-5  text-xs bg-primary-BG-gr rounded-2xl text-gray-500 w-full flex justify-center p-5">
    <span>حساب کاربری داری ؟ جدی ؟ پس </span>
    <span className='text-white px-2 cursor-pointer' onClick={()=>login()}> اینجا چیکار میکنی؟</span>
  </div>
  <div className=" sm:max-w-[400px]  mt-5  text-xs bg-primary-BG-gr rounded-2xl text-gray-500 w-full flex justify-center p-5">
    <span>ورود شما به معنای پذیرش </span>
    <span className="text-white px-2"> شرایط  </span>  و
    <span className="text-white px-2"> قوانین حریم خصوصی </span>
    <span> است.</span>
  </div>
  </>

  )
}

export default Signin
