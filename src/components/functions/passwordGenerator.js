const passwordGenerator = (config) => {
	const numbers = config.numbers ? '1234567890' : ''
	const symbols = config.symbols ? " !#$%&'()*+,-./:;<=>?@[]^_`{|}~" + '"' : ''
	const uppercase = config.uppercase ? 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ' : ''
	const lowercase = config.lowercase ? 'abcdefghijklmnñopqrstuvwxyz' : ''
	const longPassword = config.longPassword
	const allCharacters = [...numbers, ...symbols, ...uppercase, ...lowercase]
	const allCharactersLength = allCharacters.length - 1
	let password = ''

	if (allCharactersLength > 0) {
		for (let i = 0; i < longPassword; i++) {
			let position = Math.round(Math.random() * allCharactersLength)
			password = `${password}${allCharacters[position]}`
		}
	}
	return password
}

export default passwordGenerator
