import React, { useState, useRef, useEffect } from 'react'
import { Actions, Result, Settings } from '../../components'
import { getPassword } from '../../utils'
import { configDefault } from '../../consts'

const Home = () => {
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
        setConfig({ ...config, ...{ [type]: activeState } })

    return (
        <div className="App">
            <h1>Generador de contraseñas</h1>
            <Result
                password={password}
                passwordLength={config.passwordLength}
                changePassword={changePassword}
            />
            <Settings
                config={config}
                handleCharacters={changeIncludesCharacters}
                handlePass={changePasswordLength}
                inputRange={inputRange}
            />
            <Actions password={password} changePassword={changePassword} />
        </div>
    )
}

export default Home
