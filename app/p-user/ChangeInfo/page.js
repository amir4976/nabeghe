'use client'
import DotedTitle from "@/components/templates/mainPage/DotedTitle"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

function Page() {
    const [name,setName] = useState('')
    const [email,setEmail] =useState('')
    const [userName,setUserName] = useState('')
    const [phoneNumber ,setPhoneNumber]= useState('')
    const [userId,setUserId] = useState()
    useEffect(()=>{
      const getData = async() =>{
        const GetUserInformation = await fetch("/api/me",{method:"POST"})
        const {user}= await GetUserInformation.json()

        setName(user.name)
        setUserName(user.username)
        setEmail(user.email)
        setPhoneNumber(user.phoneNumber)
        setUserId(user._id)
      }
      getData()
    },[])
    const UpdateUser = async () =>{
      const userInfos ={
        name,
        username:userName,
        email,
        phoneNumber
      }

     const data = await fetch(`/api/me/${userId}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(userInfos)
     })
     if(data.status === 200){
      Swal.fire({
        icon:'success',
        title:'اطلاعات با موفقیت بروزرسانی شد'
      })
     }
     else{
      Swal.fire({
        icon:'error',
        title:'مشکلی پیش آمده است'
      })
    }
    }


  return (
    <div className="mt-5 w-full h-fit ">
      <div className="mt-5">

     <DotedTitle title={'اطلاعات حساب'}/>

      <div className="inputs grid grid-cols-4 gap-5 max-md:grid-cols-1 ">
        <div className="name w-full  col-span-2">
          <span className="px-5 text-gray-500">نام کاربر</span>
          <input value={name} className="w-full h-12 rounded-full  p-3  " onChange={(e)=>setName(e.target.value)} type="text" placeholder="name"/>
        </div>
        <div className="username w-full  col-span-2">
        <span className="px-5 text-gray-500">نام کاربری</span>

          <input value={userName} className="w-full h-12 rounded-full  p-3  " onChange={(e)=>setUserName(e.target.value)}  type="text" placeholder="username"/>
        </div>
        <div className="email w-full  col-span-2">
        <span className="px-5 text-gray-500">ایمیل کاربر</span>
          <input value={email} className="w-full h-12 rounded-full  p-3  " onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="email"/>
        </div> 

      </div>
      </div>

      <div className="mt-5">
     <DotedTitle title={'شماره تلفن'}/>
  
      <div className="inputs grid grid-cols-4 max-md:grid-cols-1 gap-5 ">
        <div className="name w-full  col-span-2">
        <span className="px-5 text-gray-500">شماره کاربر</span>

          <input value={phoneNumber} className="w-full h-12 rounded-full  p-3  " onChange={(e)=>setPhoneNumber(e.target.value)} type="text" placeholder="Phone number"/>
        </div>
      </div>
    </div>
    <div className="w-full flex justify-center items-center transition-all ">
      <button onClick={()=>UpdateUser()} className="w-1/2  bg-primary-color text-white h-10 rounded-full mt-10 hover:bg-blue-800">ارسال اطلاعات</button>
    </div>
    </div>
  )
}

export default Page
