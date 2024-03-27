"use client";
import { createContext, useContext } from "react"

import { useState } from "react"


export const Theme = createContext()

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(false)

  function toggleTheme() {
    setTheme(current => !current)
  }
  return (
    <Theme.Provider value={{theme, toggleTheme}}>
      {children}
    </Theme.Provider>
  )
}


