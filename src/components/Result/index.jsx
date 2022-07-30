import { useRef } from 'react'
import { getInfoSecurity } from '../../utils'
import styles from './index.module.css'

const Result = ({
   password,
   config,
   changePassword,
   handleNotifications,
   language,
}) => {
   const refreshButtonRef = useRef(null)
   const copyButtonRef = useRef(null)
   const infoSecurity = getInfoSecurity(config)
   const { icon, type, color, backColor, percent } = infoSecurity

   const addTempFunctionality = (ref, className, time) => {
      ref.current.classList.add(className)
      setTimeout(() => ref.current.classList.remove(className), time)
   }

   return (
      <>
         <div className={styles.result}>
            <div className={styles.container}>
               <span className={styles.showPassword} title={password}>
                  {password}
               </span>
               <div className={styles.resultActions}>
                  <button
                     ref={refreshButtonRef}
                     className={`${styles.actionReset}`}
                     onClick={() => {
                        changePassword()
                        addTempFunctionality(refreshButtonRef, 'rotate', 500)
                     }}
                     title={language.refreshPassword.title}
                  >
                     <span className={'icon-rotate'}></span>
                  </button>
                  <button
                     ref={copyButtonRef}
                     className={styles.actionCopy}
                     onClick={() => {
                        handleNotifications(language.copyPassword.notification)
                        addTempFunctionality(copyButtonRef, 'zoom', 500)
                     }}
                     title={language.copyPassword.title}
                  >
                     <span className={'icon-copy'}></span>
                  </button>
               </div>
            </div>
            <div
               className={styles.resultSecurityBar}
               style={{
                  backgroundColor: backColor,
                  transition: 'background-color .5s ease-out',
               }}
            >
               <div
                  style={{
                     width: `${percent}%`,
                     backgroundColor: color,
                     transition: 'width .5s ease-out',
                  }}
               ></div>
            </div>
            <div className={styles.resultSecurity} style={{ color: color }}>
               <span className={`icon-shield${icon}`}></span>
               <p className="securityMessage">
                  {language.levelPassword.labels[type]}
               </p>
            </div>
         </div>
      </>
   )
}

export default Result
