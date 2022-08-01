import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts'
import styles from './index.module.css'

const SelectTheme = () => {
   const [switchPosition, setSwitchPosition] = useState('left')
   const [theme, handleTheme] = useContext(ThemeContext)

   const handleSwitch = () => {
      setSwitchPosition(switchPosition === 'left' ? 'right' : 'left')
      handleTheme()
   }

   return (
      <div
         className={styles.theme}
         onClick={handleSwitch}
         style={{ backgroundColor: `${theme.sextarioColor}` }}
      >
         <div className={`${styles.switch} ${styles[switchPosition]}`}></div>
      </div>
   )
}

export default SelectTheme
