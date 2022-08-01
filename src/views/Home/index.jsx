import React, { useState, useRef, useEffect, useContext } from 'react'
import {
   Actions,
   Result,
   Settings,
   Notifications,
   SelectLanguage,
   SelectTheme,
} from '../../components'
import { configDefault } from '../../consts'
import { LanguageContext, ThemeContext } from '../../contexts'
import { getPassword } from '../../utils'
import styles from './index.module.css'

const Home = () => {
   const [theme] = useContext(ThemeContext)
   const [language] = useContext(LanguageContext)
   const [notifications, setNotifications] = useState([])
   const [config, setConfig] = useState(configDefault.app)
   const [password, setPassword] = useState(getPassword(configDefault.app))
   const inputRangeRef = useRef(null)
   const selectRef = useRef(null)

   useEffect(() => {
      setPassword(getPassword({ ...config }))
   }, [config])

   const changePassword = () => setPassword(getPassword({ ...config }))

   const changePasswordLength = () =>
      setConfig({
         ...config,
         ...{ passwordLength: inputRangeRef.current.value },
      })

   const changeIncludesCharacters = (type, activeState) => {
      const newConfig = { ...config, ...{ [type]: activeState } }

      if (config.actives() > 1) setConfig(newConfig)
      else {
         if (activeState) setConfig(newConfig)
         else {
            handleNotifications(language.charactersPassword.notification)
         }
      }
   }

   const handleNotifications = (currentMessage) => {
      const notification = {
         id: new Date().getTime(),
         isCompleted: false,
         message: currentMessage,
      }
      setNotifications([...notifications, notification])
   }

   return (
      <div
         className={styles.container}
         style={{ backgroundColor: `${theme.quaternaryColor}` }}
      >
         <div className={styles.app}>
            <SelectTheme />
            <SelectLanguage selectRef={selectRef} />
            <h1 className={styles.titleApp} style={{color: theme.tertiaryColor}}>{language.title}</h1>
            <Result
               password={password}
               config={config}
               changePassword={changePassword}
               handleNotifications={handleNotifications}
            />
            <Settings
               config={config}
               handleCharacters={changeIncludesCharacters}
               handlePass={changePasswordLength}
               inputRangeRef={inputRangeRef}
            />
            <Actions
               password={password}
               changePassword={changePassword}
               handleNotifications={handleNotifications}
            />
            <Notifications notifications={notifications} />
         </div>
      </div>
   )
}

export default Home
