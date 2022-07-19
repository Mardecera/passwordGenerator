import React, { useState, useRef, useEffect } from 'react'
import { Actions, Result, Settings, Notifications } from '../../components'
import { getPassword } from '../../utils'
import { charactersNotification, configDefault } from '../../consts'
import styles from './index.module.css'

const Home = () => {
    const [notifications, setNotifications] = useState([])
    const [config, setConfig] = useState(configDefault)
    const [password, setPassword] = useState(getPassword(configDefault))
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
                handleNotifications(charactersNotification)
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
            <h1>Generador de contraseñas</h1>
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
    )
}

export default Home
