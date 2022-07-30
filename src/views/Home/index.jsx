import React, { useState, useRef, useEffect } from 'react'
import { Actions, Result, Settings, Notifications } from '../../components'
import { configDefault, languages } from '../../consts'
import { getPassword } from '../../utils'
import styles from './index.module.css'

const Home = () => {
   const [language, setLanguage] = useState(languages.spanish)
   const [notifications, setNotifications] = useState([])
   const [config, setConfig] = useState(configDefault.app)
   const [password, setPassword] = useState(getPassword(configDefault.app))
   const inputRangeRef = useRef(null)

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
      <div className={styles.app}>
         <h1>{language.title}</h1>
         <Result
            password={password}
            config={config}
            changePassword={changePassword}
            handleNotifications={handleNotifications}
            language={language}
         />
         <Settings
            config={config}
            handleCharacters={changeIncludesCharacters}
            handlePass={changePasswordLength}
            inputRangeRef={inputRangeRef}
            language={language}
         />
         <Actions
            password={password}
            changePassword={changePassword}
            handleNotifications={handleNotifications}
            language={language}
         />
         <Notifications notifications={notifications} language={language} />
      </div>
   )
}

export default Home
