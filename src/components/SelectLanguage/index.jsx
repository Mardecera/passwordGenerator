import React from 'react'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { LanguageContext } from '../../contexts'
import { useClickedOutside } from '../../hooks'
import { ArrowTopIcon } from '../../icons'
import styles from './index.module.css'

const SelectLanguage = ({ selectRef }) => {
   const [language, handleLanguage] = useContext(LanguageContext)
   const [hidden, setHidden] = useState(true)
   const [rotateArrow, setRotateArrow] = useState(false)
   const outsideSelect = useClickedOutside(selectRef)

   useEffect(() => {
      setHidden(outsideSelect)
   }, [outsideSelect])

   useEffect(() => {
      setRotateArrow(hidden)
   }, [hidden])

   const handleOptions = (event) => {
      event.preventDefault()
      handleLanguage()
      setHidden(!hidden)
   }

   const handleSelect = () => setHidden(!hidden)

   return (
      <>
         <div ref={selectRef} className={styles.select}>
            <button className={styles.placeholder} onClick={handleSelect}>
               <div>{language.name}</div>
               <ArrowTopIcon
                  className={rotateArrow ? styles.down : styles.up}
               />
            </button>
            <div
               className={styles.options}
               style={{ display: `${hidden ? 'none' : 'flex'}` }}
            >
               <button
                  value="Spanish"
                  onClick={handleOptions}
                  className={language.name === 'spanish' && styles.active}
               >
                  Spanish
               </button>
               <button
                  value="English"
                  onClick={handleOptions}
                  className={language.name === 'english' && styles.active}
               >
                  English
               </button>
            </div>
         </div>
      </>
   )
}

export default SelectLanguage
