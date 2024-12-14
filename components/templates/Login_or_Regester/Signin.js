

"use client"
import React,{useState} from 'react'
import { FiArrowUpLeft } from 'react-icons/fi'
import DotedTitle from '../mainPage/DotedTitle'
import Logo from '../mainPage/Logo'
import {ShowSwal} from '@/utils/ShowSwal'
import { useRouter } from 'next/navigation';


function Signin({Regester}) {

  const [identifire,setIdentifire]= useState()
  const [password,setPassword]= useState('')
  const { push } = useRouter();
  const LoginSubmit = async()=>{
    const UserInfo = {
      identifire,
      password
    }
    const request =await fetch('/api/Login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(UserInfo)
    })

    if(await request.status==200){
      ShowSwal({title:"",icon:"success",text:"ورود با موفقیت انجام شد"})
      push('/');
    }else{
      ShowSwal({title:"",icon:"error",text:"ورود با مشکل مواجه شد"})
    }

  }


  return (
    <>
    <div className=" sm:max-w-[400px] h-fit flex flex-col justify-center bg-gradient-to-b from-primary-BG-gr to-secondary-BG-gr rounded-3xl  w-full px-4">
    <div className="logo rounded-b-3xl w-full h-fit flex justify-start items-center p-3">
      <Logo />
    </div>




    <div className="title mt-3 mb-1 ">
      <DotedTitle title="ورود" />
      <div className=" text-gray-500 flex flex-col text-sm">
        <span className="mb-2">درود</span>
        <span>لطفا شماره موبایل یا ایمیل خود را وارد کنید</span>
      </div>
    </div>
{/* ---------------------- input --------------------------------- */}
    <div className="input w-full h-fit border border-gray-800 rounded-xl mb-3">


    <input
      type="text"
      className=" ltr w-full h-12 bg-primary-BG-gr rounded-2xl outline-none px-2 "
      placeholder="شماره موبایل یا ایمیل"
      onChange={(e) => setIdentifire(e.target.value)}
      value={identifire}
    />

    </div>

    <div className="input w-full h-fit border border-gray-800 rounded-xl mb-3">


    <input
      type="text"
      className=" ltr w-full h-12 bg-primary-BG-gr rounded-2xl outline-none px-2 "
      placeholder="رمز ورود"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
    />

    </div>
{/* ---------------------- input end --------------------------------- */}



    <button className="flex  justify-center items-center w-full h-12 bg-primary-color rounded-full text-light mt-3" onClick={()=>LoginSubmit()}>
      <span> برو بریم</span>
      <span>
        <FiArrowUpLeft />
      </span>
    </button>


  </div>
  <div className="sm:max-w-[400px]  mt-5  text-xs bg-primary-BG-gr rounded-2xl text-gray-500 w-full flex justify-center p-5">
    <span>حساب کاربری نداری ؟ جدی ؟ پس </span>
    <span className='text-white px-2 cursor-pointer' onClick={()=>Regester()}>بیا یدونه بسازیم</span>
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
