import Actions from './components/Actions'
import Result from './components/Result'
import Setttings from './components/Settings'
import passwordGenerator from './components/functions/passwordGenerator'
import React, { useState } from 'react'

const init = {
	longPassword: 24,
	numbers: true,
	symbols: true,
	uppercase: true,
	lowercase: true,
}

const App = () => {
	const [state, setState] = useState(init)
	const [password, setPassword] = useState(passwordGenerator(init))

	const changePassword = () => setPassword(passwordGenerator({ ...state }))

	const changeLongPassword = (event) => {
		const newState = { ...state, ...{ longPassword: event.target.value } }
		setState(newState)
		setPassword(passwordGenerator({ ...newState }))
	}

	const changeIncludesCharacters = (characterType, isActive) => {
		const newState = { ...state, ...{[characterType] : isActive} }
		setState(newState)
		setPassword(passwordGenerator({ ...newState }))
	}

	return (
		<div className="App">
			<h1>Generador de contraseñas</h1>
			<Result
				password={password}
				longPassword={state.longPassword}
				changePassword={changePassword}
			/>
			<Setttings
				includeNumbers={state.numbers}
				includeSymbols={state.symbols}
				includeUppercase={state.uppercase}
				includeLowercase={state.lowercase}
				longPassword={state.longPassword}
				changeLongPassword={changeLongPassword}
				changeIncludesCharacters={changeIncludesCharacters}
			/>
			<Actions password={password} changePassword={changePassword} />
		</div>
	)
}

export default App
