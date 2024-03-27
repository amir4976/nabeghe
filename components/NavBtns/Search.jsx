"use client"
import { useContext, useState } from "react"
import { Theme } from "@/app/context/Theme"
import { FiSearch } from "react-icons/fi";

export default function Search() {
  const {theme} = useContext(Theme)
  const [ShowSearch, setShowSearch] = useState(false);
  return(
    <>
      <button className={`w-10 h-10 bg-[rgba(120,120,120,0.33)] rounded-full text-black justify-center items-center flex ${theme ? 'text-white' : 'text-black'}`} onClick={()=> setShowSearch(!ShowSearch)}>
      <FiSearch />
      </button>
      <div className={`searchBar ${!ShowSearch?"hidden":""} w-full ${theme?'bg-black':'bg-white'} absolute  top-0 left-0 z-10 h-full`}>
        <input type="text" className="w-full h-full pr-10 bg-transparent outline-none font-mainFont" placeholder="جستجو..."/>
        <button className="absolute left-0 flex h-full px-5 items-center top-0" onClick={()=>setShowSearch(!ShowSearch)} >X</button>
      </div>
    </>
  )
}