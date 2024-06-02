'use client'


import { createContext, useEffect, useState } from "react"

export const Auth = createContext()

export default function AuthProvider({children}){

    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const [UserInfos ,setUserInfos] = useState([])
    const [token , setToken] = useState('')

    const logIn = (userInfo, token) => {
        console.log(token,userInfo);
        setToken(token);
        setIsLoggedIn(true);
        setUserInfos(userInfo);
        console.log(UserInfos)
        // localStorage.setItem("user", JSON.stringify({ token }));
      };
    
      const logOut = () => {
        setToken(null);
        setIsLoggedIn(false);
        // localStorage.removeItem("user");
      };

    return (
        <Auth.Provider value={[isLoggedIn,UserInfos,logIn,setIsLoggedIn,logOut,setUserInfos,token]}>
            {children}
        </Auth.Provider>
    )

}
