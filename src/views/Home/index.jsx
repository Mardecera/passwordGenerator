import React, { useState, useRef, useEffect } from 'react'
import { Actions, Result, Settings, Notification } from '../../components'
import { getPassword } from '../../utils'
import { charactersNotification, configDefault } from '../../consts'
import styles from './index.module.css'

const Home = () => {
    const [notification, setNotification] = useState({
        state: false,
        message: '',
    })
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
                handleNotification(charactersNotification)
            }
        }
    }

    const handleNotification = (currentMessage) => {
        setNotification({ state: true, message: currentMessage })
        setTimeout(() => {
            setNotification({ state: false, message: currentMessage })
        }, 3000)
    }

    return (
        <div className={styles.app}>
            <h1>Generador de contraseñas</h1>
            <Result
                password={password}
                config={config}
                changePassword={changePassword}
                handleNotification={handleNotification}
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
                handleNotification={handleNotification}
            />
            <Notification
                state={notification.state}
                message={notification.message}
            />
        </div>
    )
}

export default Home
