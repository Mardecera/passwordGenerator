import { numbers, symbols, uppercase, lowercase } from '../consts'

const getPassword = (config) => {
    let password = ''
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
