"use client"
import React from 'react'
import { FiArrowUpLeft } from 'react-icons/fi'
import DotedTitle from '../mainPage/DotedTitle'
import Logo from '../mainPage/Logo'
import Swal from 'sweetalert2'

function Signup({login}) {
    
  const [name, setName] = React.useState('')
  const [username, setUserName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [phoneNumber, setPhone] = React.useState('')

  const SignUpUser =async()=>{
    const data = {
      name,
      username,
      email,
      password,
      phoneNumber
    }
    
    const req = await fetch('/api/Signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(data)
    })
    if(req.status == 201){
      Swal.fire({
        title: 'تبریک',
        text: 'ثبت نام شما با موفقیت انجام شد',
        icon: 'success',
        confirmButtonText: 'باشه',
      })
      login()
    }
  }
 
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
    <div  className="input w-full h-fit border border-gray-800 rounded-xl mb-3">
    <input
      type="text"
      className=" ltr w-full h-12 bg-primary-BG-gr rounded-2xl outline-none px-2 "
      placeholder="نام"
      onChange={(e) => setName(e.target.value)}
      value={name}
    />
    </div>


    {/* UserName */}
    <div  className="input w-full h-fit border border-gray-800 rounded-xl mb-3">
    <input
      type="text"
      className=" ltr w-full h-12 bg-primary-BG-gr rounded-2xl outline-none px-2 "
      placeholder=" نام کاربری"
      onChange={(e) => setUserName(e.target.value)}
      value={username}
    />
    </div>

    {/* email */}
    <div  className="input w-full h-fit border border-gray-800 rounded-xl mb-3">
    <input
      type="email"
      className=" ltr w-full h-12 bg-primary-BG-gr rounded-2xl outline-none px-2 "
      placeholder="ایمیل"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
    />
    </div>

    {/* password */}
    <div  className="input w-full h-fit border border-gray-800 rounded-xl mb-3">

    <input
      type="Password"
      className=" ltr w-full h-12 bg-primary-BG-gr rounded-2xl outline-none px-2 "
      placeholder="رمز ورود"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
    />

    </div>

    {/* phone */}
    <div  className="input w-full h-fit border border-gray-800 rounded-xl mb-3">

    <input
      type="number"
      className=" ltr w-full h-12 bg-primary-BG-gr rounded-2xl outline-none px-2 "
      placeholder="شماره تلفن"
      onChange={(e) => setPhone(e.target.value)}
      value={phoneNumber}
    />

    </div>

{/* ---------------------- input end --------------------------------- */}



    <button className="flex  justify-center items-center w-full h-12 bg-primary-color rounded-full text-light mt-3" onClick={()=>SignUpUser()}>
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

export default Signup
