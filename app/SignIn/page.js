"use client"
import React, { useEffect, useState } from "react";
import SignInCard from "@/components/Login_or_Regester/SignInByPhoneCard";
import Signin from "@/components/Login_or_Regester/Signin";
import SignUp from "@/components/Login_or_Regester/SignUp";
import { authTypes } from "@/utils/constants";
function Page() {
  
  const [AuthType,setAuthType]=useState(authTypes.LOGIN)

  const Regester = ()=>setAuthType(authTypes.REGESTER)
  const login = ()=>setAuthType(authTypes.LOGIN)

  return (
    <div className="w-full h-screen mt-[-80px] overflow-hidden flex justify-center items-center bg-black font-mainFont flex-col">
      {/* <SignInCard /> */}
      {
        AuthType==authTypes.REGESTER ? (
          <SignUp login={login}/>
        ) :(  
          <Signin Regester={Regester} />
        )
      }
    </div>
  );
}

export default Page;
