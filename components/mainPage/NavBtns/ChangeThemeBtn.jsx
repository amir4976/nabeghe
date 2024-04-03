'use client'
import React from 'react'
import { Theme } from '@/app/context/Theme'
import { useContext } from 'react'
import { MdModeNight ,MdOutlineLightMode  } from "react-icons/md";
function ChangeThemeBtn() {
    const { theme,toggleTheme } = useContext(Theme)
  return (
    <div>
      <button className={`w-10 h-10 bg-[rgba(120,120,120,0.33)] rounded-full text-black justify-center items-center flex ${theme ? 'text-white' : 'text-black'}`} onClick={()=> toggleTheme()}>
        {theme ? <MdOutlineLightMode /> : <MdModeNight />}
      </button>
    </div>
  )
}

export default ChangeThemeBtn 
