'use client'

import React from 'react'
import { useContext } from 'react'
import { Theme } from '@/app/context/Theme'
function ThemeWarper({children}) {
    const { theme, toggleTheme } = useContext(Theme)
    
  return (
    <div className={`theme ${theme ? 'light' : 'dark'}`}>
            {children}
    </div>
  )
}

export default ThemeWarper
