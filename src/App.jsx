import Actions from './components/Actions'
import Result from './components/Result'
import Setttings from './components/Settings'
import getPassword from './services/getPassword'
import React, { useState } from 'react'

const init = {
	passwordLength: 24,
	numbers: true,
	symbols: true,
	uppercase: true,
	lowercase: true,
}

const App = () => {
	const [state, setState] = useState(init)
	const [password, setPassword] = useState(getPassword(init))

	const changePassword = () => setPassword(getPassword({ ...state }))

	const changePasswordLength = (event) => {
		const newState = { ...state, ...{ passwordLength: event.target.value } }
		setState(newState)
		setPassword(getPassword({ ...newState }))
	}

	const changeIncludesCharacters = (characterType, isActive) => {
		const newState = { ...state, ...{[characterType] : isActive} }
		setState(newState)
		setPassword(getPassword({ ...newState }))
	}

	return (
		<div className="App">
			<h1>Generador de contraseñas</h1>
			<Result
				password={password}
				passwordLength={state.passwordLength}
				changePassword={changePassword}
			/>
			<Setttings
				includeNumbers={state.numbers}
				includeSymbols={state.symbols}
				includeUppercase={state.uppercase}
				includeLowercase={state.lowercase}
				passwordLength={state.passwordLength}
				changePasswordLength={changePasswordLength}
				changeIncludesCharacters={changeIncludesCharacters}
			/>
			<Actions password={password} changePassword={changePassword} />
		</div>
	)
}

export default App
