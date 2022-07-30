import React from 'react'
import { useState } from 'react'
import styles from './index.module.css'

const Notification = ({ notification }) => {
   const [display, setDisplay] = useState(true)

   setTimeout(() => {
      setDisplay(false)
   }, 8000)

   return (
      <div
         className={`${styles.notification} ${
            display ? '' : styles.displayNone
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
