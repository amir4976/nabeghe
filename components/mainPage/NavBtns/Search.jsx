"use client"
import { useContext, useState } from "react"

import { FiSearch } from "react-icons/fi";

export default function Search() {
  const [ShowSearch, setShowSearch] = useState(false);
  return(
    <>
      <button className={`w-10 h-10  bg-primary-BG-gr rounded-full text-light justify-center items-center flex `} onClick={()=> setShowSearch(!ShowSearch)}>
      <FiSearch />
      </button>
      <div className={`searchBar ${!ShowSearch?"hidden":""} w-full  absolute  top-0 left-0 z-20 h-full bg-black`}>
        <input type="text" className="w-full h-full pr-10 bg-transparent outline-none font-mainFont" placeholder="جستجو..."/>
        <button className="absolute left-0 flex h-full px-5 items-center top-0" onClick={()=>setShowSearch(!ShowSearch)} >X</button>
      </div>
    </>
  )
}