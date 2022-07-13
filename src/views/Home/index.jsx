import React, { useState, useRef, useEffect } from 'react'
import { Actions, Result, Settings, Notification } from '../../components'
import { getPassword } from '../../utils'
import { configDefault } from '../../consts'
import './index.css'

const Home = () => {
    const [notification, setNotification] = useState({ state: false, message: '' })
    const [config, setConfig] = useState(configDefault)
    const [password, setPassword] = useState(getPassword(configDefault))
    const inputRange = useRef(null)

    useEffect(() => {
        setPassword(getPassword({ ...config }))
    }, [config])

    const changePassword = () => setPassword(getPassword({ ...config }))

    const changePasswordLength = () =>
        setConfig({
            ...config,
            ...{ passwordLength: inputRange.current.value },
        })

    const changeIncludesCharacters = (type, activeState) =>
        config.actives() > 1
            ? setConfig({ ...config, ...{ [type]: activeState } })
            : activeState
            ? setConfig({ ...config, ...{ [type]: activeState } })
            : null

    const handleNotification = (currentMessage) => {
        setNotification({ state: true, message: currentMessage })
        setTimeout(() => {
            setNotification({ state: false, message: currentMessage })
        }, 2000)
    }

    return (
        <div className="App">
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
                inputRange={inputRange}
            />
            <Actions password={password} changePassword={changePassword} handleNotification={handleNotification} />
            <Notification state={notification.state} message={notification.message} />
        </div>
    )
}

export default Home
