import { useState } from 'react'
import { createContext } from 'react'
import { themes } from '../consts'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState(themes.light)

   const handleTheme = () => {
      const changeTheme = theme.name === 'light' ? 'dark' : 'light'
      setTheme(themes[changeTheme])
   }

   return (
      <ThemeContext.Provider value={[theme, handleTheme]}>
         {children}
      </ThemeContext.Provider>
   )
}