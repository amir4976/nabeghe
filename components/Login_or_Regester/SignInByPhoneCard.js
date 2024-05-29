'use client'
import React,{useState} from 'react'
import Logo from '../mainPage/Logo'
import DotedTitle from '../DotedTitle'
import {FiArrowUpLeft } from 'react-icons/fi'
import { useContext } from 'react'
import { Auth } from '@/context/Auth'
// import { navigate } from '../Redirection'
import { useRouter } from 'next/navigation'
import { getToken } from '../../utils/GetToken'


function SignInCard() {
  const [identifire, setIdentifie] = useState('')
  const router = useRouter()
  const [isLoggedIn,UserInfos,logIn,setIsLoggedIn,logOut,setUserInfos,token] = useContext(Auth)


  const handleSubmit =async () => {   
   const requestOptions = await fetch('/api/Login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({identifire}),
   })
    const result = await requestOptions.json()
   if(requestOptions.status === 200){
        
        logIn(result,await getToken())
        console.log(token,UserInfos)
        router.replace('/')
   }
}



  return (
    <>    
      <div className=" sm:max-w-[400px] h-fit flex flex-col justify-center bg-gradient-to-b from-primary-BG-gr to-secondary-BG-gr rounded-3xl  w-full px-4">
        <div className="logo rounded-b-3xl w-full h-fit flex justify-start items-center p-3">
          <Logo />
        </div>
        <div className="title mt-3 mb-1 ">
          <DotedTitle title="ورود یا ثبت نام" />
          <div className=" text-gray-500 flex flex-col text-sm">
            <span className="mb-2">درود</span>
            <span>لطفا شماره موبایل یا ایمیل خود را وارد کنید</span>
          </div>
        </div>
        <input
          type="text"
          className=" ltr w-full h-12 bg-primary-BG-gr rounded-2xl outline-none px-2"
          placeholder="شماره موبایل یا ایمیل"
          onChange={(e) => setIdentifie(e.target.value)}
          value={identifire}
        />
        <button onClick={()=>handleSubmit()} className="flex  justify-center items-center w-full h-12 bg-primary-color rounded-full text-light mt-3">
          <span> برو بریم</span>
          <span>
            <FiArrowUpLeft />
          </span>
        </button>
      </div>
      <div className=" sm:max-w-[400px]  mt-5  text-xs bg-primary-BG-gr rounded-2xl text-gray-500 w-full flex justify-center p-5">
        <span>ورود شما به معنای پذیرش </span>
        <span className="text-white"> شرایط  </span>  و
        <span className="text-white"> قوانین حریم خصوصی</span>
        <span> است.</span>
      </div>
</>
  )
}

export default SignInCard
