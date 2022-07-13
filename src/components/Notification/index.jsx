import React from 'react'
import styles from './index.module.css'

const Notification = ({ state, message }) => {
    return (
        <div className={`${styles.notification} ${state ? styles.show : ''}`}>
            {message}
        </div>
    )
}

export default Notification
