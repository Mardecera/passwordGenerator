const getPassword = (config) => {
    let password = ''
	const numbers = '1234567890'
	const symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~" + '"'
	const uppercase = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
	const lowercase = 'abcdefghijklmnñopqrstuvwxyz'
	const allCharacters = [
        ...(config.numbers ? numbers : ''),
		...(config.symbols ? symbols : ''),
		...(config.uppercase ? uppercase : ''),
		...(config.lowercase ? lowercase : ''),
	]
	const allCharactersLength = allCharacters.length - 1
    
	if (allCharactersLength > 0) {
        const passwordLength = config.passwordLength

		for (let i = 0; i < passwordLength; i++) {
			let position = Math.round(Math.random() * allCharactersLength)
			password = `${password}${allCharacters[position]}`
		}
	}
	return password
}

export default getPassword
