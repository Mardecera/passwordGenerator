import React from 'react'
import { useState } from 'react'
import styles from './index.module.css'

const Notification = ({ notification }) => {
    const [isCompleted, setIsCompleted] = useState(false)

    setTimeout(() => {
        setIsCompleted(true)
    }, 3000)

    return (
        <div
            className={`${styles.notification} ${
                isCompleted ? styles.hide : ''
            }`}
        >
            {notification.message}
        </div>
    )
}

const Notifications = ({ notifications }) => {
    return (
        <div className={styles.notifications}>
            {notifications.map((notification, index) => (
                <Notification key={index} notification={notification} />
            ))}
        </div>
    )
}

export default Notifications
