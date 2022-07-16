import styles from './index.module.css'
import { copyToClipboard } from '../../utils'
import { copyNotification } from '../../consts'

const Actions = ({ password, changePassword, handleNotifications }) => {
    return (
        <div className={styles.actions}>
            <button
                onClick={() => changePassword()}
                className={`${styles.btn} ${styles.actionRefresh}`}
            >
                Nueva contraseña
                <span className={'icon-rotate'}></span>
            </button>
            <button
                onClick={() => {
                    copyToClipboard(password)
                    handleNotifications(copyNotification)
                }}
                className={`${styles.btn} ${styles.actionCopy}`}
            >
                Copiar contraseña
                <span className={'icon-copy'}></span>
            </button>
        </div>
    )
}

export default Actions
