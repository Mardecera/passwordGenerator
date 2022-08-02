import React, { useContext, useState } from 'react'
import SelectLanguage from '../SelectLanguage'
import SelectTheme from '../SelectTheme'
import { LanguageContext, ThemeContext } from '../../contexts'
import { CloseIcon, MenuBarIcon } from '../../icons'
import { MenuButton, MenuElement } from './index.styled'

const Menu = () => {
   const [theme] = useContext(ThemeContext)
   const [language] = useContext(LanguageContext)
   const [menuState, setMenuState] = useState('hidden')

   const handleMenuButton = () => setMenuState('show')
   const handleCloseButton = () => setMenuState('hidden')

   return (
      <>
         <MenuButton theme={theme} onClick={handleMenuButton}>
            <MenuBarIcon />
         </MenuButton>
         <MenuElement theme={theme} className={menuState}>
            <div className='title'>{language.menu.title}</div>
            <div className='item'>
               <div>{language.menu.theme}: </div>
               <SelectTheme />
            </div>
            <div className='item'>
               <div>{language.menu.language}: </div>
               <SelectLanguage />
            </div>
            <div className="closeButton" onClick={handleCloseButton}>
               <CloseIcon />
            </div>
         </MenuElement>
      </>
   )
}

export default Menu
