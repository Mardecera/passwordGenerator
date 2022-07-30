import styles from './index.module.css'
import { copyToClipboard } from '../../utils'

const Actions = ({
   password,
   changePassword,
   handleNotifications,
   language,
}) => {
   return (
      <div className={styles.actions}>
         <button
            onClick={() => changePassword()}
            className={`${styles.btn} ${styles.actionRefresh}`}
         >
            {language.refreshPassword.label}
            <span className={'icon-rotate'}></span>
         </button>
         <button
            onClick={() => {
               copyToClipboard(password)
               handleNotifications(language.copyPassword.notification)
            }}
            className={`${styles.btn} ${styles.actionCopy}`}
         >
            {language.copyPassword.label}
            <span className={'icon-copy'}></span>
         </button>
      </div>
   )
}

export default Actions
